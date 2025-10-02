import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Building2, Sprout, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { Scene3D } from "@/components/3D/Scene3D";

const Home = () => {
  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section with 3D Background */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* 3D Background */}
        <div className="absolute inset-0 bg-gradient-hero">
          <div className="absolute inset-0 opacity-40">
            <Scene3D autoRotate />
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
              Build Your <span className="text-gradient-secondary">Future</span>
            </h1>
            <p className="text-xl md:text-2xl mb-12 text-primary-foreground/90 max-w-3xl mx-auto">
              Experience lending reimagined. From construction dreams to USDA opportunities, 
              we're here to make your vision a reality.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/recruiting">
                <Button size="lg" variant="secondary" className="gap-2 text-lg px-8 py-6">
                  Join Our Team
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
              <Link to="/construction-loans">
                <Button size="lg" variant="hero" className="gap-2 text-lg px-8 py-6">
                  Explore Loans
                  <Building2 className="w-5 h-5" />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
        
        {/* Scroll Indicator */}
        <motion.div 
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-primary-foreground/50 rounded-full flex items-start justify-center p-2">
            <div className="w-1.5 h-3 bg-primary-foreground/50 rounded-full" />
          </div>
        </motion.div>
      </section>
      
      {/* Services Overview */}
      <section className="py-24 bg-muted/50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
              Our Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive lending solutions tailored to your unique needs
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Building2,
                title: "Construction Loans",
                description: "Build your dream home with flexible construction financing options",
                link: "/construction-loans",
                gradient: "from-primary to-primary-glow"
              },
              {
                icon: Sprout,
                title: "USDA Loans",
                description: "Explore rural and agricultural property financing opportunities",
                link: "/usda-loans",
                gradient: "from-accent to-accent/80"
              },
              {
                icon: Users,
                title: "Career Opportunities",
                description: "Join our growing team and build a rewarding career in lending",
                link: "/recruiting",
                gradient: "from-secondary to-secondary/80"
              }
            ].map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Link to={service.link}>
                  <div className="group relative bg-card rounded-2xl p-8 shadow-elegant hover:shadow-glow transition-smooth border border-border hover:border-primary/50 h-full">
                    <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-smooth`}>
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-display font-semibold mb-3">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      {service.description}
                    </p>
                    <div className="flex items-center gap-2 text-primary group-hover:gap-3 transition-smooth">
                      Learn More
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-24 bg-gradient-primary relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIGZpbGw9IiNmZmYiLz48L2c+PC9zdmc+')] bg-repeat" />
        </div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 text-primary-foreground">
              Ready to Get Started?
            </h2>
            <p className="text-xl mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
              Whether you're building your dream home or looking for a career change, 
              we're here to help you succeed.
            </p>
            <Link to="/contact">
              <Button size="lg" variant="secondary" className="gap-2 text-lg px-8 py-6">
                Contact Us Today
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
