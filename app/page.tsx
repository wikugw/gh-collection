import Description from "@/components/macro/Description";
import Footer from "@/components/macro/Footer";
import Header from "@/components/macro/Header";
import Hero from "@/components/macro/Hero";
import Maps from "@/components/macro/Maps";
import Products from "@/components/macro/Products";

export default function Home() {
  return (
    <main>
      <div className="p-4">
        <Header />
        <Hero />
        <Description />
        <Products />
        <Maps />
      </div>
      <Footer />
    </main>
  );
}
