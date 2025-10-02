import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Sprout, ArrowRight, MapPin, DollarSign, Home, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";

const USDALoans = () => {
  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-accent via-accent/80 to-primary">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAiIGhlaWdodD0iODAiIHZpZXdCb3g9IjAgMCA4MCA4MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik00MCAwYzIyLjA5IDAgNDAgMTcuOTEgNDAgNDBzLTE3LjkxIDQwLTQwIDQwUzAgNjIuMDkgMCA0MCAxNy45MSAwIDQwIDB6IiBmaWxsPSIjZmZmIiBvcGFjaXR5PSIuMSIvPjwvZz48L3N2Zz4=')] bg-repeat" />
        </div>
        
        <div className="relative z-10 container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Sprout className="w-20 h-20 text-white mx-auto mb-6" />
            <h1 className="text-6xl md:text-8xl font-display font-bold mb-6 text-white">
              Rural Living <span className="text-secondary">Reimagined</span>
            </h1>
            <p className="text-xl md:text-2xl mb-12 text-white/90 max-w-3xl mx-auto">
              Discover the freedom of rural homeownership with USDA loans. 
              Zero down payment. Beautiful locations. Your dream awaits.
            </p>
            <Link to="/contact">
              <Button size="lg" variant="secondary" className="gap-2 text-lg px-8 py-6">
                Explore Eligibility
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
      
      {/* Benefits Grid */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
              USDA Loan Advantages
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Unlock the benefits of rural living with government-backed financing
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: DollarSign,
                title: "0% Down Payment",
                description: "100% financing available for qualified buyers",
                color: "from-accent to-accent/80"
              },
              {
                icon: MapPin,
                title: "Rural Locations",
                description: "Access to beautiful properties in eligible areas",
                color: "from-primary to-primary-glow"
              },
              {
                icon: Home,
                title: "Low Rates",
                description: "Competitive interest rates for your dream home",
                color: "from-secondary to-secondary/80"
              }
            ].map((benefit, i) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-card rounded-2xl p-8 shadow-elegant border border-border hover:shadow-glow transition-smooth"
              >
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${benefit.color} flex items-center justify-center mb-6`}>
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-display font-semibold mb-3">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Eligibility Section */}
      <section className="py-24 bg-muted/50">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
                Are You Eligible?
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                USDA loans are designed for low-to-moderate income families seeking 
                homeownership in rural and suburban areas.
              </p>
              <div className="space-y-4">
                {[
                  "Income limits vary by location and household size",
                  "Property must be in USDA-eligible rural area",
                  "Primary residence requirement",
                  "Stable and dependable income",
                  "Reasonable credit history",
                  "U.S. citizenship or permanent residency"
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">{item}</span>
                  </motion.div>
                ))}
              </div>
              <Link to="/contact">
                <Button size="lg" className="mt-8 gap-2">
                  Check Your Eligibility
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-accent to-primary shadow-glow p-12 flex flex-col justify-center">
                <div className="text-white">
                  <Sprout className="w-16 h-16 mb-6" />
                  <div className="text-5xl font-bold mb-4">97%</div>
                  <div className="text-2xl mb-2">of U.S. Land</div>
                  <div className="text-lg opacity-90">is eligible for USDA loans</div>
                  <div className="mt-8 pt-8 border-t border-white/20">
                    <div className="text-sm opacity-80 mb-2">Average Property Size</div>
                    <div className="text-4xl font-bold">2+ Acres</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-primary via-primary-glow to-accent">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 text-white">
              Start Your Rural Journey
            </h2>
            <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
              Let us help you find your perfect property and navigate the USDA loan process with ease.
            </p>
            <Link to="/contact">
              <Button size="lg" variant="secondary" className="gap-2 text-lg px-8 py-6">
                Get Pre-Qualified Today
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default USDALoans;
