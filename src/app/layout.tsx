import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "PW Saul",
  description: "Portafolio web de Saul",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-[#feffdf]">
        {children}
      </body>
    </html>
  );
}
