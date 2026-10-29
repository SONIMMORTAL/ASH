import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Get Booked Kit | Otova",
  description:
    "Your speaking toolkit, built on the Profit Pipeline. Research opportunities, reach your audience, build relationships, and generate revenue.",
  robots: { index: false, follow: false },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
