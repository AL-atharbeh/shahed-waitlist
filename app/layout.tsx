import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "شهد — اشترِ الحين، ادفع على راحتك",
  description: "خدمة شهد تتيح لك الشراء الآن والدفع لاحقاً في الأردن. قسم مشترياتك على 4 أقساط بدون فوائد.",
  openGraph: {
    title: "شهد — اشترِ الحين، ادفع على راحتك",
    description: "كن من الأوائل في الأردن. اشترِ الحين، ادفع على راحتك مع شهد.",
    type: "website",
    locale: "ar_JO",
    images: ["/images/logo_shahadd.png"],
  },
  icons: {
    icon: "/images/logo_shahadd.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
