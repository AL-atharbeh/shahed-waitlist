import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function POST(request: Request) {
  try {
    const { phone, store, city } = await request.json();

    // Validate phone format (Jordanian 07XXXXXXXX)
    const phoneRegex = /^07[789]\d{7}$/;
    if (!phoneRegex.test(phone)) {
      return NextResponse.json(
        { success: false, message: 'رقم الهاتف غير صحيح. يجب أن يكون بتنسيق 07XXXXXXXX' },
        { status: 400 }
      );
    }

    if (!store || !city) {
      return NextResponse.json(
        { success: false, message: 'جميع الحقول مطلوبة' },
        { status: 400 }
      );
    }

    const filePath = path.join(process.cwd(), 'data', 'waitlist.json');
    
    // Read existing data
    let waitlist = [];
    if (fs.existsSync(filePath)) {
      const fileData = fs.readFileSync(filePath, 'utf8');
      waitlist = JSON.parse(fileData || '[]');
    }

    // Add new entry
    const newEntry = {
      phone,
      store,
      city,
      timestamp: new Date().toISOString(),
    };
    waitlist.push(newEntry);

    // Save back to file
    fs.writeFileSync(filePath, JSON.stringify(waitlist, null, 2));

    return NextResponse.json({ success: true, message: 'تم التسجيل بنجاح' });
  } catch (error) {
    console.error('Waitlist API Error:', error);
    return NextResponse.json(
      { success: false, message: 'حدث خطأ أثناء التسجيل' },
      { status: 500 }
    );
  }
}
