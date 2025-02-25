import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { MessageSquare, TestTube, Book, Users } from "lucide-react";

const services = [
  {
    title: "1:1 Doubt Sessions",
    description: "Get personalized help from expert mentors",
    icon: MessageSquare
  },
  {
    title: "Mock Tests",
    description: "Practice with industry-standard assessments",
    icon: TestTube
  },
  {
    title: "Learning Resources",
    description: "Access comprehensive study materials",
    icon: Book
  },
  {
    title: "Group Projects",
    description: "Collaborate and build real projects",
    icon: Users
  }
];

export function Services() {
  return (
    <section id="services" className="py-20 bg-accent/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Services</h2>
          <p className="text-muted-foreground">Comprehensive support for your learning journey</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full">
                <CardHeader>
                  <service.icon className="w-12 h-12 text-primary" />
                  <CardTitle>{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
