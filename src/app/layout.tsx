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
  title: "Karmcherry",
  description: "A helping hand for employers and employees in the tech industry",
  openGraph: {
    title: "Karmcherry",
    description: "A helping hand for employers and employees in the tech industry",
    url: "https://karmcherry.web.app",
    siteName: "Karmcherry",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <meta name="google-site-verification" content="HkYS3evi3jqymwePJIQD6Ym4GZGNKhG28ZPB_K1ZfsY" />
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
