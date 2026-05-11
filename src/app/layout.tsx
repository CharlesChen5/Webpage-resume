import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "陈龙 | Analog IC Design Engineer",
  description:
    "陈龙 — 模拟集成电路设计工程师，合肥工业大学集成电路工程硕士在读，专注于模拟IC设计、电源管理、BUCK转换器与高精度比较器。",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-CN">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
