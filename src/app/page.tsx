import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Products } from "@/components/Products";
import { CrmErpExplainer } from "@/components/CrmErpExplainer";
import { SystemCapabilities } from "@/components/SystemCapabilities";
import { WhyZafirok } from "@/components/WhyZafirok";
import { Testimonials } from "@/components/Testimonials";
import { FinalCTA } from "@/components/FinalCTA";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Products />
        <SystemCapabilities />
        <WhyZafirok />
        <Testimonials />
        <CrmErpExplainer />
        <FinalCTA />
      </main>
    </>
  );
}
