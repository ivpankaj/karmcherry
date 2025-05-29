import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";

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
  },
  verification: {
    google: "HkYS3evi3jqymwePJIQD6Ym4GZGNKhG28ZPB_K1ZfsY",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* You can add meta tags or other head elements here if needed */}
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Google Analytics Scripts */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-SML4PC6274"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-SML4PC6274');
          `}
        </Script>
        {children}
      </body>
    </html>
  );
}
