import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SANKALP PUBLIC SCHOOL, Gwalior",
  description: "Official website of SANKALP PUBLIC SCHOOL, Near Gambheer Nursary,Hardev Sigh Ki Taal, Morar, Gwalior",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}

