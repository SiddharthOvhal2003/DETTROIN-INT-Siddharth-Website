import Hero from "@/components/sections/Hero";
import Stats from "@/components/sections/Stats";
import About from "@/components/sections/About";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import Academics from "@/components/sections/Academics";
import Facilities from "@/components/sections/Facilities";

function Home() {
  return (
    <main className="pt-20">
      <Hero />
      <Stats />
      <About />
      <WhyChooseUs />
      <Academics />
      <Facilities />
    </main>
  );
}

export default Home;