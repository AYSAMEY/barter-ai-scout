import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  BarChart3, 
  MessageSquare, 
  Users, 
  Zap,
  CheckCircle2,
  Handshake
} from 'lucide-react';

const Landing: React.FC = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <div className="flex flex-col gap-20 -mt-8">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-24 sm:py-32">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(45%_45%_at_50%_50%,rgba(var(--primary-rgb),0.1)_0%,transparent_100%)]" />
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <motion.div 
            className="flex-1 text-center lg:text-left space-y-8"
            initial="initial"
            animate="animate"
            variants={fadeIn}
          >
            <div className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary ring-1 ring-inset ring-primary/20">
              <span className="relative flex h-2 w-2 mr-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              The Future of Local Commerce
            </div>
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl text-foreground">
              Trade What You <span className="text-primary">Have</span> for What You <span className="text-primary">Need</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Autonomous Opportunity Scout uses AI to connect you with trade loops. Share your skills or items and get matched with a circle of people in a multi-party barter system. No cash required.
            </p>
            <div className="flex flex-wrap justify-center lg:justify-start gap-4">
              <Link to="/signup">
                <Button size="lg" className="h-12 px-8 text-base">
                  Start Trading Now <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/dashboard">
                <Button size="lg" variant="outline" className="h-12 px-8 text-base">
                  Explore Marketplace
                </Button>
              </Link>
            </div>
            <div className="flex items-center justify-center lg:justify-start gap-8 text-sm text-muted-foreground pt-4">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="text-primary h-4 w-4" /> 100% Cashless
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="text-primary h-4 w-4" /> AI Matching
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="text-primary h-4 w-4" /> Verified Trade
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="flex-1 w-full max-w-xl"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border bg-card">
              <img 
                src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/29ca3c64-a740-49e2-8b47-31e6d700a8c9/hero-community-barter-1d68410f-1779272852692.webp" 
                alt="Community Barter" 
                className="w-full aspect-video object-cover"
              />
              <div className="p-6 bg-card">
                <div className="flex items-center gap-4 mb-4">
                  <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                    <Handshake size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold">Recent Match Found</h3>
                    <p className="text-xs text-muted-foreground">3-person trade loop identified</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <span className="font-medium text-foreground">Sarah</span> (Graphic Design) → 
                  <span className="font-medium text-foreground">Mike</span> (Lawn Care) → 
                  <span className="font-medium text-foreground">Elena</span> (Home Baking) → 
                  <span className="font-medium text-foreground">Sarah</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-12 bg-muted/30 rounded-3xl px-8 lg:px-16">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">How It Works</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our platform simplifies the complexities of bartering through intelligent automation and community focus.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              title: "List Assets",
              desc: "Post your skills (coding, cooking, cleaning) or items (tools, bikes, plants) you want to trade.",
              icon: Zap
            },
            {
              title: "Define Needs",
              desc: "Tell the Scout what you're looking for. Be specific or browse categories for inspiration.",
              icon: BarChart3
            },
            {
              title: "AI Matchmaking",
              desc: "Our engine looks for loops. If you want what A has, and B wants what you have, we find C to close the gap.",
              icon: Users
            },
            {
              title: "Seal the Deal",
              desc: "Chat in dedicated workspaces, confirm terms, and digital handshake to finalize the trade.",
              icon: MessageSquare
            }
          ].map((feature, i) => (
            <motion.div 
              key={i}
              className="bg-card p-8 rounded-2xl border shadow-sm hover:shadow-md transition-shadow"
              whileHover={{ y: -5 }}
            >
              <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-6">
                <feature.icon size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 text-center">
        <div className="max-w-3xl mx-auto space-y-8">
          <h2 className="text-3xl font-bold sm:text-5xl">Ready to join the local trade revolution?</h2>
          <p className="text-lg text-muted-foreground">
            Connect with your neighbors, save money, and build a stronger community. Sign up today and find your first trade loop.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/signup">
              <Button size="lg" className="h-12 px-10">Get Started Free</Button>
            </Link>
            <Link to="/login">
              <Button size="lg" variant="outline" className="h-12 px-10">Sign In</Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Landing;