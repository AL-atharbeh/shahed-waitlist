import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export const dynamic = 'force-dynamic';

export async function GET(request: Request) {
  try {
    // Simple authentication check using a header or query param
    const { searchParams } = new URL(request.url);
    const token = searchParams.get('token');
    
    if (token !== 'shahed2025') {
      return NextResponse.json({ success: false, message: 'Unauthorized' }, { status: 401 });
    }

    const filePath = path.join(process.cwd(), 'data', 'waitlist.json');
    
    if (!fs.existsSync(filePath)) {
      return NextResponse.json([]);
    }

    const fileData = fs.readFileSync(filePath, 'utf8');
    const waitlist = JSON.parse(fileData || '[]');

    return NextResponse.json(waitlist);
  } catch (error) {
    console.error('Admin API Error:', error);
    return NextResponse.json({ success: false, message: 'Server Error' }, { status: 500 });
  }
}
