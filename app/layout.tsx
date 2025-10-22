import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Trang web đang bảo trì | CHOTNAHNH.VN",
  description:
    "Trang web của chúng tôi hiện đang được bảo trì để nâng cấp trải nghiệm tốt hơn. Vui lòng quay lại sau ít phút.",
  keywords: ["maintenance", "bảo trì", "website", "CHOTNAHNH.VN"],
  authors: [{ name: "CHOTNAHNH.VN", url: "https://www.chotnhanh.vn/" }],
  creator: "CHOTNAHNH.VN",
  metadataBase: new URL("https://maintenance-cn.vercel.app/"),
  openGraph: {
    title: "Trang web đang bảo trì | CHOTNAHNH.VN",
    description:
      "Chúng tôi đang thực hiện nâng cấp hệ thống để mang lại trải nghiệm tốt hơn.",
    url: "https://maintenance-cn.vercel.app/",
    siteName: "CHOTNAHNH.VN",
    locale: "vi_VN",
    type: "website",
    images: [
      {
        url: "/baotri.png",
        width: 1200,
        height: 630,
        alt: "Trang web đang bảo trì",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Trang web đang bảo trì | CHOTNAHNH.VN",
    description:
      "Chúng tôi đang thực hiện nâng cấp hệ thống để mang lại trải nghiệm tốt hơn.",
    images: ["/baotri.png"],
  },
  icons: {
    icon: "/icon.webp",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
