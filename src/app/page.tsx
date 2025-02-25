import Navbar from "@/Components/Navbar";
import Hero from "@/Components/Hero";
import Powered from "@/Components/Powered";
import Neural from "@/Components/Neural";
import Solutions from "@/Components/Solutions";
import Price from "@/Components/Price";
import Contact from "@/Components/Contact";
import Footer from "@/Components/Footer";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Powered />
      <Neural />
      <Solutions />
      <Price />
      <Contact />
      <Footer />
    </div>
  );
}
