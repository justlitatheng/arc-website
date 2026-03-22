import type { Metadata } from "next";
import { Kantumruy_Pro, DM_Sans } from "next/font/google";
import "./globals.css";

const kantumruyPro = Kantumruy_Pro({
  variable: "--font-kantumruy",
  subsets: ["latin", "khmer"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "ARC — Art Reach Cambodia",
  description:
    "A multi-modal documentary storytelling project dedicated to capturing the diverse, living, evolving voices that make up Khmer culture and identity.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${kantumruyPro.variable} ${dmSans.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
