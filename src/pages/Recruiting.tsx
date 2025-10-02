import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Users, TrendingUp, Award, Heart } from "lucide-react";
import { Link } from "react-router-dom";
import { useRef } from "react";

const Recruiting = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });
  
  const opacity1 = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const opacity2 = useTransform(scrollYProgress, [0.2, 0.4, 0.6], [0, 1, 0]);
  const opacity3 = useTransform(scrollYProgress, [0.6, 0.8, 1], [0, 1, 1]);
  
  const scale1 = useTransform(scrollYProgress, [0, 0.2], [1, 0.8]);
  const scale2 = useTransform(scrollYProgress, [0.2, 0.4], [0.8, 1]);
  const scale3 = useTransform(scrollYProgress, [0.6, 0.8], [0.8, 1]);

  return (
    <div ref={containerRef} className="relative">
      {/* Section 1: Hero */}
      <motion.section 
        style={{ opacity: opacity1, scale: scale1 }}
        className="h-screen flex items-center justify-center sticky top-0 bg-gradient-hero"
      >
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Users className="w-20 h-20 text-secondary mx-auto mb-6" />
            <h1 className="text-6xl md:text-8xl font-display font-bold mb-6 text-primary-foreground">
              Join Our <span className="text-gradient-secondary">Team</span>
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/90 max-w-3xl mx-auto">
              Build a career that makes a difference. Scroll to discover your future.
            </p>
          </motion.div>
        </div>
      </motion.section>
      
      {/* Section 2: Why Join Us */}
      <motion.section 
        style={{ opacity: opacity2, scale: scale2 }}
        className="h-screen flex items-center justify-center sticky top-0"
      >
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-5xl md:text-6xl font-display font-bold mb-6">
                Why <span className="text-gradient-primary">LendingHouse</span>?
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                We're not just another lending company. We're a team of innovators, 
                dreamers, and achievers who believe in empowering people to build their futures.
              </p>
              <div className="space-y-6">
                {[
                  { icon: TrendingUp, title: "Career Growth", desc: "Unlimited advancement opportunities" },
                  { icon: Award, title: "Industry Leading", desc: "Best compensation in the market" },
                  { icon: Heart, title: "Work-Life Balance", desc: "Flexible schedules and remote options" }
                ].map((item, i) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="flex gap-4 items-start"
                  >
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-1">{item.title}</h3>
                      <p className="text-muted-foreground">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl bg-gradient-primary shadow-glow flex items-center justify-center">
                <div className="text-center text-primary-foreground p-8">
                  <div className="text-7xl font-bold mb-4">500+</div>
                  <div className="text-2xl">Team Members</div>
                  <div className="text-lg opacity-80 mt-2">And Growing</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>
      
      {/* Section 3: Positions & CTA */}
      <motion.section 
        style={{ opacity: opacity3, scale: scale3 }}
        className="min-h-screen flex items-center justify-center bg-muted/50 py-24"
      >
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-display font-bold mb-6">
              Open Positions
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Find your perfect role and start building your future today
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {[
              { title: "Loan Officer", dept: "Sales", type: "Full-time" },
              { title: "Underwriter", dept: "Operations", type: "Full-time" },
              { title: "Processor", dept: "Operations", type: "Full-time" },
              { title: "Marketing Specialist", dept: "Marketing", type: "Full-time" },
              { title: "Customer Success", dept: "Support", type: "Full-time" },
              { title: "Senior Developer", dept: "Technology", type: "Full-time" }
            ].map((position, i) => (
              <motion.div
                key={position.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="bg-card p-6 rounded-xl shadow-elegant hover:shadow-glow transition-smooth border border-border hover:border-primary/50 group cursor-pointer"
              >
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-smooth">
                    {position.title}
                  </h3>
                  <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">
                    {position.type}
                  </span>
                </div>
                <p className="text-muted-foreground mb-4">{position.dept}</p>
                <div className="flex items-center gap-2 text-primary opacity-0 group-hover:opacity-100 transition-smooth">
                  Apply Now
                  <ArrowRight className="w-4 h-4" />
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="text-center">
            <Link to="/contact">
              <Button size="lg" variant="default" className="gap-2 text-lg px-8 py-6">
                Apply Today
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default Recruiting;
