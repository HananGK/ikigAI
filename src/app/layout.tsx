import type { Metadata } from "next";
import "./globals.css";
import { Montserrat } from 'next/font/google'
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Suspense } from "react";
import Loading from "./loading";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ikigAI",
  description: "Web que te ayuda a crear un perfil empresarial y encontrar tu propósito en la vida mediante el test ikigai y una IA",
  
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={montserrat.className}>
        <Header />
        <Suspense fallback={<Loading />}>
          {children}
        </Suspense>
        <Footer />
      </body>
    </html>
  );
}
