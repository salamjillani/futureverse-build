import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { DollarSign, TrendingUp, Award, Target, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Compensation = () => {
  const tiers = [
    { name: "Starter", earnings: "$60K - $80K", commission: "2.5%", color: "from-muted to-muted-foreground" },
    { name: "Professional", earnings: "$80K - $120K", commission: "3.5%", color: "from-primary to-primary-glow" },
    { name: "Elite", earnings: "$120K - $200K+", commission: "5%", color: "from-secondary to-secondary/80" }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-hero overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxjaXJjbGUgZmlsbD0iI2ZmZiIgY3g9IjMwIiBjeT0iMzAiIHI9IjQiLz48L2c+PC9zdmc+')] bg-repeat" />
        </div>
        
        <div className="relative z-10 container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <DollarSign className="w-20 h-20 text-secondary mx-auto mb-6" />
            <h1 className="text-6xl md:text-7xl font-display font-bold mb-6 text-primary-foreground">
              Your Success. <span className="text-gradient-secondary">Your Earnings.</span>
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/90 mb-12">
              Industry-leading compensation with unlimited earning potential
            </p>
          </motion.div>
        </div>
      </section>
      
      {/* Compensation Tiers */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
              Compensation Tiers
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Advance through our tier system and unlock higher earning potential
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {tiers.map((tier, i) => (
              <motion.div
                key={tier.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`relative overflow-hidden rounded-2xl p-8 shadow-elegant border ${
                  i === 1 ? 'border-primary shadow-glow scale-105' : 'border-border'
                } hover:shadow-glow transition-smooth`}
              >
                {i === 1 && (
                  <div className="absolute top-4 right-4">
                    <span className="bg-secondary text-secondary-foreground text-xs font-semibold px-3 py-1 rounded-full">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${tier.color} flex items-center justify-center mb-6`}>
                  <Award className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-3xl font-display font-bold mb-4">{tier.name}</h3>
                <div className="mb-6">
                  <div className="text-4xl font-bold text-primary mb-2">{tier.earnings}</div>
                  <div className="text-muted-foreground">Annual Earnings</div>
                </div>
                <div className="pt-6 border-t border-border">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-muted-foreground">Commission Rate</span>
                    <span className="text-xl font-semibold text-accent">{tier.commission}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Benefits */}
      <section className="py-24 bg-muted/50">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
                Beyond Base Salary
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Our comprehensive compensation package includes benefits that support your life and career
              </p>
              <div className="space-y-6">
                {[
                  { icon: TrendingUp, title: "Performance Bonuses", desc: "Quarterly and annual bonus opportunities" },
                  { icon: Target, title: "Stock Options", desc: "Equity participation for long-term growth" },
                  { icon: Award, title: "Benefits Package", desc: "Health, dental, vision, and 401(k) matching" },
                  { icon: DollarSign, title: "Profit Sharing", desc: "Share in company success" }
                ].map((benefit, i) => (
                  <motion.div
                    key={benefit.title}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    className="flex gap-4 items-start"
                  >
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <benefit.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-1">{benefit.title}</h3>
                      <p className="text-muted-foreground">{benefit.desc}</p>
                    </div>
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
              <div className="aspect-square rounded-2xl bg-gradient-secondary shadow-glow p-12 flex flex-col justify-center">
                <div className="text-secondary-foreground">
                  <div className="text-6xl font-bold mb-4">$150K</div>
                  <div className="text-2xl mb-2">Average Earnings</div>
                  <div className="text-lg opacity-80 mb-8">For top performers in year 2</div>
                  <div className="pt-8 border-t border-secondary-foreground/20">
                    <div className="text-sm opacity-80 mb-2">Top 10% earn over</div>
                    <div className="text-5xl font-bold">$250K</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Calculator CTA */}
      <section className="py-24 bg-gradient-primary">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 text-primary-foreground">
                Calculate Your Potential
              </h2>
              <p className="text-xl mb-8 text-primary-foreground/90">
                See how much you could earn based on your experience and performance goals
              </p>
              <Link to="/contact">
                <Button size="lg" variant="secondary" className="gap-2 text-lg px-8 py-6">
                  Discuss Compensation
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Compensation;
