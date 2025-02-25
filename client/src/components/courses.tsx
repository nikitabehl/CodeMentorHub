import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { SiPython, SiPostgresql, SiHtml5, SiCss3 } from "react-icons/si";

const courses = [
  {
    title: "Python Programming",
    description: "Master Python fundamentals to advanced concepts",
    icon: SiPython,
    level: "Beginner to Advanced",
    duration: "12 weeks",
    color: "text-yellow-500"
  },
  {
    title: "SQL Mastery",
    description: "Learn database design and management",
    icon: SiPostgresql,
    level: "Intermediate",
    duration: "8 weeks",
    color: "text-blue-500"
  },
  {
    title: "HTML5",
    description: "Build the structure of modern websites",
    icon: SiHtml5,
    level: "Beginner",
    duration: "4 weeks",
    color: "text-orange-500"
  },
  {
    title: "CSS3",
    description: "Style and animate web applications",
    icon: SiCss3,
    level: "Beginner to Intermediate",
    duration: "6 weeks",
    color: "text-blue-400"
  }
];

export function Courses() {
  return (
    <section id="courses" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Courses</h2>
          <p className="text-muted-foreground">Comprehensive learning paths for modern developers</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {courses.map((course, index) => (
            <motion.div
              key={course.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full">
                <CardHeader>
                  <course.icon className={`w-12 h-12 ${course.color}`} />
                  <CardTitle>{course.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{course.description}</p>
                  <div className="space-y-2">
                    <Badge variant="secondary">{course.level}</Badge>
                    <p className="text-sm text-muted-foreground">{course.duration}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
