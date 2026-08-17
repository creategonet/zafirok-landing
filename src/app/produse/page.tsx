import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Products } from "@/components/Products";
import { SystemCapabilities } from "@/components/SystemCapabilities";
import { FinalCTA } from "@/components/FinalCTA";

export const metadata: Metadata = {
  title: "Produse — Zafirok",
  description: "Descoperă sistemele Zafirok pentru construcții, fabrici, service auto și contabilitate.",
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
