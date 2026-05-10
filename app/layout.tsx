import type { Metadata } from "next";
import { Noto_Sans_Arabic, Playfair_Display } from "next/font/google";
import "./globals.css";

const notoTabsArabic = Noto_Sans_Arabic({
  subsets: ["arabic"],
  variable: '--font-noto-arabic',
  weight: ['400', '500', '700'],
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: '--font-playfair',
});

// export const metadata: Metadata = {
//   title: "شهد — اشترِ الحين، ادفع على راحتك",
//   description: "خدمة شهد تتيح لك الشراء الآن والدفع لاحقاً في الأردن. قسم مشترياتك على 4 أقساط بدون فوائد.",
//   openGraph: {
//     title: "شهد — اشترِ الحين، ادفع على راحتك",
//     description: "كن من الأوائل في الأردن. اشترِ الحين، ادفع على راحتك مع شهد.",
//     type: "website",
//     locale: "ar_JO",
//   },
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body className={`${notoTabsArabic.variable} ${playfair.variable} font-sans bg-[#FAFAF8] text-gray-900 antialiased`}>
        {children}
      </body>
    </html>
  );
}
