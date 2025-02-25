import { Hero } from "@/components/hero";
import { Courses } from "@/components/courses";
import { Services } from "@/components/services";
import { About } from "@/components/about";
import { Testimonials } from "@/components/testimonials";
import { Contact } from "@/components/contact";

export default function Home() {
  return (
    <main>
      <Hero />
      <Courses />
      <Services />
      <About />
      <Testimonials />
      <Contact />
    </main>
  );
}