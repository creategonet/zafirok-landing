import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Products } from "@/components/Products";
import { SystemCapabilities } from "@/components/SystemCapabilities";
import { FinalCTA } from "@/components/FinalCTA";

export const metadata: Metadata = {
  title: "Produse — Zafirok",
  description: "Descoperă sistemele Zafirok pentru service auto, contabilitate, construcții și producție la comandă.",
};

export default function ProductsPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        <Products />
        <SystemCapabilities />
        <FinalCTA />
      </main>
    </>
  );
}
