import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Intro from "@/components/layout/Intro";
import Hero from "@/components/sections/Hero";
import Story from "@/components/sections/Story";
import Process from "@/components/sections/Process";
import Collection from "@/components/sections/Collection";
import Contact from "@/components/sections/Contact";
import Awards from "@/components/sections/Awards";
import RevealObserver from "@/components/ui/RevealObserver";
import JsonLd from "@/components/seo/JsonLd";

export default function Home() {
  return (
    <>
      <Intro />
      <a
        href="#historia"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:bg-paper focus:px-4 focus:py-3 focus:text-sm focus:text-forest-950"
      >
        Pular para o conteúdo
      </a>
      <Header />
      <main>
        <Hero />
        <Story />
        <Awards />
        <Process />
        <Collection />
        <Contact />
      </main>
      <Footer />
      <RevealObserver />
      <JsonLd />
    </>
  );
}
