import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { GraduationCap, BookOpen, Users, Award, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Scene3D } from "@/components/3D/Scene3D";
import { FloatingGraduationCap } from "@/components/3D/FloatingGraduationCap";
import { FloatingBook } from "@/components/3D/FloatingBook";
import { FloatingCertificate } from "@/components/3D/FloatingCertificate";
import { Suspense } from "react";

const Training = () => {
  const courses = [
    { title: "Lending Fundamentals", duration: "4 weeks", level: "Beginner" },
    { title: "Advanced Underwriting", duration: "6 weeks", level: "Advanced" },
    { title: "Customer Service Excellence", duration: "2 weeks", level: "All Levels" },
    { title: "Regulatory Compliance", duration: "3 weeks", level: "Intermediate" },
    { title: "Sales Techniques", duration: "4 weeks", level: "Intermediate" },
    { title: "Leadership Development", duration: "8 weeks", level: "Advanced" }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section with 3D Background */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* 3D Background */}
        <div className="absolute inset-0 bg-gradient-hero">
          <div className="absolute inset-0 opacity-50">
            <Suspense fallback={null}>
              <Scene3D autoRotate>
                <FloatingGraduationCap />
              </Scene3D>
            </Suspense>
          </div>
        </div>
        
        {/* Hero Content */}
        <div className="relative z-10 container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-6xl md:text-8xl font-display font-bold mb-6 text-primary-foreground">
              Learn. Grow. <span className="text-gradient-secondary">Excel.</span>
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/90 mb-12 max-w-3xl mx-auto">
              World-class training programs designed to accelerate your career in lending
            </p>
            <Button size="lg" variant="secondary" className="gap-2 text-lg px-8 py-6">
              Explore Courses
              <ArrowRight className="w-5 h-5" />
            </Button>
          </motion.div>
        </div>
        
        {/* Scroll Indicator */}
        <motion.div 
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-primary-foreground/50 rounded-full flex items-start justify-center p-2">
            <div className="w-1.5 h-3 bg-primary-foreground/50 rounded-full" />
          </div>
        </motion.div>
      </section>
      
      {/* Training Features */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: BookOpen,
                title: "Expert-Led Courses",
                description: "Learn from industry veterans with decades of experience"
              },
              {
                icon: Users,
                title: "Interactive Learning",
                description: "Hands-on training with real-world scenarios and case studies"
              },
              {
                icon: Award,
                title: "Certifications",
                description: "Earn recognized credentials to advance your career"
              }
            ].map((feature, i) => {
              const Scene3DComponent = i === 0 ? FloatingBook : i === 1 ? FloatingGraduationCap : FloatingCertificate;
              
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="text-center group"
                >
                  <div className="relative w-full h-64 mb-6 rounded-2xl overflow-hidden shadow-glow bg-gradient-to-br from-primary/5 to-accent/5 border border-border group-hover:border-primary/50 transition-smooth">
                    <Suspense fallback={
                      <div className="w-full h-full flex items-center justify-center">
                        <div className="w-16 h-16 border-4 border-primary/20 border-t-primary rounded-full animate-spin" />
                      </div>
                    }>
                      <Scene3D autoRotate>
                        <Scene3DComponent />
                      </Scene3D>
                    </Suspense>
                  </div>
                  <h3 className="text-2xl font-display font-semibold mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
      
      {/* Course Catalog */}
      <section className="py-24 bg-muted/50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
              Available Courses
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Choose from our comprehensive catalog of training programs
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.map((course, i) => (
              <motion.div
                key={course.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="bg-card rounded-xl p-6 shadow-elegant border border-border hover:shadow-glow hover:border-primary/50 transition-smooth group cursor-pointer"
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-smooth">
                    {course.title}
                  </h3>
                  <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded whitespace-nowrap">
                    {course.level}
                  </span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground mb-4">
                  <BookOpen className="w-4 h-4" />
                  <span className="text-sm">{course.duration}</span>
                </div>
                <div className="flex items-center gap-2 text-primary opacity-0 group-hover:opacity-100 transition-smooth">
                  Enroll Now
                  <ArrowRight className="w-4 h-4" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-24 bg-gradient-primary">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 text-primary-foreground">
              Ready to Level Up?
            </h2>
            <p className="text-xl mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
              Start your learning journey today with personalized training recommendations
            </p>
            <Link to="/contact">
              <Button size="lg" variant="secondary" className="gap-2 text-lg px-8 py-6">
                Get Started
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Training;
