import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "My Next.js App",
  description: "This is my first Next.js application.",
  keywords: ["Next.js", "React", "SEO"],
  authors: [{ name: "Riya" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}