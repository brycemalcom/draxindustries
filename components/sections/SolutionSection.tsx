"use client";

import { motion } from "framer-motion";
import { Recycle, Zap, Flame, Waves } from "lucide-react";
import { cn } from "@/lib/utils";

interface ProcessCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  step: number;
  color: string;
}

const ProcessCard = ({
  icon,
  title,
  description,
  step,
  color,
}: ProcessCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: step * 0.1 }}
      className="card-highlight"
    >
      <div className="flex items-start">
        <div 
          className={cn(
            "flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center text-lg font-semibold mr-4", 
            color
          )}
        >
          {icon}
        </div>
        <div>
          <div className="flex items-center mb-1">
            <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">Step {step}</span>
          </div>
          <h3 className="text-xl font-medium mb-2">{title}</h3>
          <p className="text-muted-foreground">{description}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default function SolutionSection() {
  return (
    <section id="technology" className="py-20 relative bg-gradient-to-b from-background to-background/80">
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_bottom,transparent_0%,rgba(15,17,21,0.2)_50%,rgba(15,17,21,0.8)_100%),radial-gradient(circle_at_center,rgba(111,180,254,0.1)_0%,transparent_80%)]"></div>
      
      <div className="container-section">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-block mb-3 px-3 py-1 rounded-full border border-primary/30 bg-primary/10 text-primary">
            <span className="text-sm font-medium">Our Process</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">From Biomass to Graphene</h2>
        </div>
        
        <div className="grid md:grid-cols-1 gap-8 max-w-3xl mx-auto">
          <ProcessCard
            icon={<Recycle className="h-6 w-6" />}
            title="Biochar Conversion"
            description="Sustainable wood waste converted into carbon-rich biochar — the base material for graphene production."
            step={1}
            color="bg-primary/20 text-primary"
          />
          
          <div className="flex justify-center">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 5V19M12 19L6 13M12 19L18 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          
          <ProcessCard
            icon={<Flame className="h-6 w-6" />}
            title="Precision Pyrolysis"
            description="Thermal refinement extracts atomic carbon layers needed for graphene."
            step={2}
            color="bg-accent/20 text-accent"
          />
          
          <div className="flex justify-center">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 5V19M12 19L6 13M12 19L18 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          
          <ProcessCard
            icon={<Waves className="h-6 w-6" />}
            title="Ultrasonic Exfoliation"
            description="Graphene is separated into pure, high-quality sheets — ready for use in next-gen tech."
            step={3}
            color="bg-primary/20 text-primary"
          />
        </div>
        
        <div className="mt-16 p-6 rounded-lg border animated-gradient-border bg-card/50">
          <div className="flex flex-col md:flex-row gap-6 items-center">
            <div className="flex-shrink-0">
              <Zap className="h-10 w-10 text-primary" />
            </div>
            <div>
              <h4 className="text-xl font-medium mb-2">Zero Chemical Process</h4>
              <p className="text-muted-foreground">
                Our chemical-free process produces no harmful byproducts, creating truly sustainable graphene.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}