import type { Metadata } from "next";
import { plus_jakarta_sans, red_hat_display } from "@/styles/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Rifki Bayu Ariyanto",
  description: "Personal Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${plus_jakarta_sans.variable} ${red_hat_display.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
