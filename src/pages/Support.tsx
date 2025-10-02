import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { HeadphonesIcon, MessageSquare, Clock, CheckCircle2, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Support = () => {
  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-br from-primary via-primary-glow to-accent overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxjaXJjbGUgZmlsbD0iI2ZmZiIgY3g9IjIwIiBjeT0iMjAiIHI9IjMiLz48L2c+PC9zdmc+')] bg-repeat" />
        </div>
        
        <div className="relative z-10 container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <HeadphonesIcon className="w-20 h-20 text-white mx-auto mb-6" />
            <h1 className="text-6xl md:text-7xl font-display font-bold mb-6 text-white">
              We're Here to <span className="text-secondary">Help</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-12">
              24/7 support from real people who care about your success
            </p>
          </motion.div>
        </div>
      </section>
      
      {/* Support Channels */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
              Choose Your Channel
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Multiple ways to get the help you need, when you need it
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: MessageSquare,
                title: "Live Chat",
                description: "Instant answers from our support team",
                response: "< 2 min",
                color: "from-primary to-primary-glow"
              },
              {
                icon: HeadphonesIcon,
                title: "Phone Support",
                description: "Speak directly with a specialist",
                response: "< 5 min",
                color: "from-accent to-accent/80"
              },
              {
                icon: Clock,
                title: "Email Support",
                description: "Detailed assistance for complex issues",
                response: "< 24 hrs",
                color: "from-secondary to-secondary/80"
              }
            ].map((channel, i) => (
              <motion.div
                key={channel.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-card rounded-2xl p-8 shadow-elegant border border-border hover:shadow-glow hover:border-primary/50 transition-smooth group cursor-pointer"
              >
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${channel.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-smooth`}>
                  <channel.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-display font-semibold mb-3">{channel.title}</h3>
                <p className="text-muted-foreground mb-4">{channel.description}</p>
                <div className="flex items-center gap-2 text-sm">
                  <Clock className="w-4 h-4 text-accent" />
                  <span className="font-semibold text-accent">Avg. Response: {channel.response}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* FAQ Preview */}
      <section className="py-24 bg-muted/50">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
                Quick Answers
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Find instant solutions to common questions in our knowledge base
              </p>
              <div className="space-y-4">
                {[
                  "How do I get started with a loan application?",
                  "What documents do I need to provide?",
                  "How long does the approval process take?",
                  "What are the current interest rates?",
                  "Can I apply if I'm self-employed?"
                ].map((question, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    className="flex items-start gap-3 group cursor-pointer"
                  >
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-foreground group-hover:text-primary transition-smooth">
                      {question}
                    </span>
                  </motion.div>
                ))}
              </div>
              <Button className="mt-8 gap-2">
                View All FAQs
                <ArrowRight className="w-4 h-4" />
              </Button>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary via-primary-glow to-accent shadow-glow p-12 flex flex-col justify-center">
                <div className="text-white">
                  <div className="text-6xl font-bold mb-4">98%</div>
                  <div className="text-2xl mb-2">Satisfaction Rate</div>
                  <div className="text-lg opacity-90 mb-8">From 10,000+ customers</div>
                  <div className="pt-8 border-t border-white/20">
                    <div className="text-sm opacity-80 mb-2">Average Resolution Time</div>
                    <div className="text-5xl font-bold">&lt; 1 Day</div>
                  </div>
                </div>
              </div>
            </motion.div>
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
              Need Help Right Now?
            </h2>
            <p className="text-xl mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
              Our team is standing by to assist you with any questions or concerns
            </p>
            <Link to="/contact">
              <Button size="lg" variant="secondary" className="gap-2 text-lg px-8 py-6">
                Contact Support
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Support;
