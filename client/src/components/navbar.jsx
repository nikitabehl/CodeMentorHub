import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export function Navbar() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const navbarHeight = 64; // height of navbar in pixels
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <nav className="fixed w-full bg-background/80 backdrop-blur-sm z-50 border-b">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/">
          <a className="text-2xl font-bold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
            AakritiLearningCurve Academy
          </a>
        </Link>

        <div className="hidden md:flex items-center space-x-6">
          <button 
            onClick={() => scrollToSection('courses')}
            className="text-foreground/80 hover:text-foreground transition"
          >
            Courses
          </button>
          <button 
            onClick={() => scrollToSection('services')}
            className="text-foreground/80 hover:text-foreground transition"
          >
            Services
          </button>
          <button 
            onClick={() => scrollToSection('about')}
            className="text-foreground/80 hover:text-foreground transition"
          >
            About
          </button>
          <button 
            onClick={() => scrollToSection('contact')}
            className="text-foreground/80 hover:text-foreground transition"
          >
            Contact
          </button>
          <Button variant="default" onClick={() => scrollToSection('contact')}>Enroll Now</Button>
        </div>
      </div>
    </nav>
  );
}
