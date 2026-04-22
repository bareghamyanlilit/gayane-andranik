import type { Metadata } from "next";
import "./globals.css";
import { names } from "@/data/data";

export const metadata: Metadata = {
  title: names[0],
  description: names[0],
  openGraph: {
    title: `Հարսանեկան հրավիրատոմս`,
    description: "Հարսանեկան հրավիրատոմս",
    url: "https://gayane-andranik.vercel.app/",
    siteName: names[0],
    images: [
      {
        url: "/first.jpg",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body style={{ whiteSpace: "pre-line" }}>{children}</body>
    </html>
  );
}
