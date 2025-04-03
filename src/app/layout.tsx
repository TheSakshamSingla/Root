import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Root Things - Android Rooting & Magisk Modules",
  description: "Advanced guides for Android rooting, Magisk modules, and custom tweaks for rooted users by Root Things (@Rootthings).",
  keywords: ["Android rooting", "Magisk modules", "KernelSU", "Apatch", "Root guides", "Custom ROMs", "Root Things", "Rootthings"],
  creator: "Root Things",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://rootthings.com",
    title: "Root Things - Android Rooting & Magisk Modules",
    description: "Advanced guides for Android rooting, Magisk modules, and custom tweaks for rooted users.",
    siteName: "Root Things",
  },
  twitter: {
    card: "summary_large_image",
    title: "Root Things - Android Rooting & Magisk Modules",
    description: "Advanced guides for Android rooting, Magisk modules, and custom tweaks for rooted users.",
    creator: "@Rootthings",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} font-sans`}
      >
        {children}
      </body>
    </html>
  );
}
