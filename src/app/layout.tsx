import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/components/LanguageProvider";
import CookieConsent from "@/components/CookieConsent";
import MetaPixel from "@/components/MetaPixel";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "latin-ext"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin", "latin-ext"],
});

export const metadata: Metadata = {
  title: "Zafirok — Ecosistem CRM & ERP pentru afacerea ta",
  description:
    "Sisteme specializate pentru CRM, construcții, fabrici, service auto și contabilitate. De la primul contact cu clientul până la bilanț, totul într-un singur ecosistem.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ro"
      className={`${inter.variable} ${spaceGrotesk.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-ink">
        <LanguageProvider>{children}</LanguageProvider>
        {/*
          Pixelul se montează doar după consimțământ. Varianta <noscript> a fost
          eliminată: se încărca necondiționat și nu putea fi condiționată de o
          alegere, deci prelucra date fără temei.
        */}
        <MetaPixel />
        <CookieConsent />
      </body>
    </html>
  );
}
