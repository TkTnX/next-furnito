import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.scss";
import "@/styles/reset.scss";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const font = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Furnito",
  description: "Furnito | Магазин мебели",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={font.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
