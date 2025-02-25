import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <div className="min-h-screen flex items-center pt-16 bg-gradient-to-b from-background to-background/95">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Master Coding with
              <span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
                {" "}AakritiLearningCurve
              </span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Join AakritiLearningCurve Academy and transform your passion for coding into expertise.
              Learn Python, SQL, HTML, CSS and more with personalized support.
            </p>
            <div className="flex gap-4">
              <Button size="lg">Get Started</Button>
              <Button size="lg" variant="outline">Learn More</Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative aspect-square rounded-lg overflow-hidden"
          >
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
              alt="Students learning to code"
              className="object-cover w-full h-full"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
}