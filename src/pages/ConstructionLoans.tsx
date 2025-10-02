import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Building2, ArrowRight, CheckCircle2, HardHat, Home } from "lucide-react";
import { Link } from "react-router-dom";
import { Scene3D } from "@/components/3D/Scene3D";

const ConstructionLoans = () => {
  const benefits = [
    "Competitive interest rates",
    "Flexible draw schedules",
    "Expert construction guidance",
    "Fast approval process",
    "One-time close convenience",
    "No prepayment penalties"
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary-glow to-primary">
          <div className="absolute inset-0 opacity-30">
            <Scene3D autoRotate />
          </div>
        </div>
        
        <div className="relative z-10 container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Building2 className="w-20 h-20 text-secondary mx-auto mb-6" />
            <h1 className="text-6xl md:text-8xl font-display font-bold mb-6 text-primary-foreground">
              Build Your <span className="text-gradient-secondary">Dream Home</span>
            </h1>
            <p className="text-xl md:text-2xl mb-12 text-primary-foreground/90 max-w-3xl mx-auto">
              From blueprint to reality. Experience construction lending that builds with you every step of the way.
            </p>
            <Link to="/contact">
              <Button size="lg" variant="secondary" className="gap-2 text-lg px-8 py-6">
                Start Your Build
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
      
      {/* Process Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
              Building Process
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A streamlined journey from planning to completion
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { icon: HardHat, title: "Plan", desc: "Design your dream home with our experts" },
              { icon: Building2, title: "Approve", desc: "Get fast loan approval and funding" },
              { icon: Home, title: "Build", desc: "Watch your vision come to life" },
              { icon: CheckCircle2, title: "Move In", desc: "Celebrate in your new home" }
            ].map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative"
              >
                <div className="bg-card rounded-2xl p-8 shadow-elegant border border-border h-full">
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary to-primary-glow flex items-center justify-center mb-6">
                    <step.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-sm font-semibold text-secondary mb-2">Step {i + 1}</div>
                  <h3 className="text-2xl font-display font-semibold mb-3">{step.title}</h3>
                  <p className="text-muted-foreground">{step.desc}</p>
                </div>
                {i < 3 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-primary/30" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Benefits Section */}
      <section className="py-24 bg-muted/50">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
                Why Choose Our Construction Loans?
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                We make the complex simple with dedicated support and industry-leading terms.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                {benefits.map((benefit, i) => (
                  <motion.div
                    key={benefit}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0" />
                    <span className="text-foreground">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-square rounded-2xl bg-gradient-primary shadow-glow p-12 flex flex-col justify-center">
                <div className="text-primary-foreground">
                  <div className="text-6xl font-bold mb-4">3.5%</div>
                  <div className="text-2xl mb-2">Starting APR</div>
                  <div className="text-lg opacity-80">As low as with qualified credit</div>
                  <Link to="/contact">
                    <Button variant="secondary" className="mt-8 gap-2">
                      Get Your Rate
                      <ArrowRight className="w-4 h-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-24 bg-gradient-hero">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 text-primary-foreground">
              Ready to Break Ground?
            </h2>
            <p className="text-xl mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
              Let's start building your dream home today with a personalized consultation.
            </p>
            <Link to="/contact">
              <Button size="lg" variant="secondary" className="gap-2 text-lg px-8 py-6">
                Schedule Consultation
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ConstructionLoans;
