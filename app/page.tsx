import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Process from "@/components/sections/Process";
import Products from "@/components/sections/Products";
import Awards from "@/components/sections/Awards";
import WhereToFind from "@/components/sections/WhereToFind";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-black">
      <Header />
      <main>
        <Hero />
        <About />
        <Process />
        <Products />
        <Awards />
        <WhereToFind />
      </main>
      <Footer />
    </div>
  );
}