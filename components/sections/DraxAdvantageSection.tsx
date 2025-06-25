"use client";

import { motion } from "framer-motion";
import { MapPin, Factory, Clock, BarChart, Leaf, Coins } from "lucide-react";
import { cn } from "@/lib/utils";

interface AdvantageCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  index: number;
}

const AdvantageCard = ({
  icon,
  title,
  description,
  index,
}: AdvantageCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="card-highlight"
    >
      <div className="mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-medium mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </motion.div>
  );
};

export default function DraxAdvantageSection() {
  const advantages = [
    {
      icon: <MapPin className="h-6 w-6 text-primary" />,
      title: "U.S.-Based Production",
      description: "Domestic manufacturing creating energy independence and supply chain security for critical materials."
    },
    {
      icon: <Factory className="h-6 w-6 text-primary" />,
      title: "Modular Facility Design",
      description: "Scalable, flexible production units that can be deployed rapidly to meet growing demand."
    },
    {
      icon: <Clock className="h-6 w-6 text-primary" />,
      title: "24/7 Industrial Output",
      description: "Continuous production process ensuring reliable supply for industrial partners."
    },
    {
      icon: <BarChart className="h-6 w-6 text-primary" />,
      title: "2.5 Tons Graphene/Day Per Site",
      description: "Maximum potential output of 2.5 tons of high-quality graphene per facility, per day."
    },
    {
      icon: <Leaf className="h-6 w-6 text-primary" />,
      title: "Carbon Credits Eligible",
      description: "Sustainable production process that qualifies for carbon credits and environmental incentives."
    },
    {
      icon: <Coins className="h-6 w-6 text-primary" />,
      title: "Competitive Pricing",
      description: "Production efficiency enables wholesale pricing from $100-1000 per kg, competitive with global markets."
    }
  ];

  return (
    <section className="py-20 relative bg-card/30">
      <div className="hex-bg absolute inset-0 opacity-5 -z-10"></div>
      
      <div className="container-section">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-block mb-3 px-3 py-1 rounded-full border border-primary/30 bg-primary/10 text-primary">
            <span className="text-sm font-medium">Competitive Edge</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Drax Tech Advantage</h2>
          <p className="text-xl text-muted-foreground">
            Our technology and business model create unique advantages that position 
            Drax Industries as a leader in the advanced materials market.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {advantages.map((advantage, index) => (
            <AdvantageCard
              key={index}
              icon={advantage.icon}
              title={advantage.title}
              description={advantage.description}
              index={index}
            />
          ))}
        </div>
        
        {/* Facility Output Table */}
        <div className="mt-16 overflow-hidden rounded-lg border bg-card/50 animated-gradient-border">
          <div className="px-6 py-8">
            <h3 className="text-2xl font-bold mb-8 text-center">Facility Output (Per 10-Chamber Site)</h3>
            
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-4 px-4 text-muted-foreground font-medium">Production Model</th>
                    <th className="text-left py-4 px-4 text-muted-foreground font-medium">Biochar</th>
                    <th className="text-left py-4 px-4 text-muted-foreground font-medium">Graphene</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border/50">
                    <td className="py-4 px-4">1 Cycle/Day</td>
                    <td className="py-4 px-4">12.5 T</td>
                    <td className="py-4 px-4">1.25 T</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-4">2 Cycles/Day</td>
                    <td className="py-4 px-4">25.0 T</td>
                    <td className="py-4 px-4">2.5 T</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x border-t border-border/50">
            <div className="p-8 text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2 gradient-text">$100-1000</div>
              <p className="text-xl mb-1">Price per kg</p>
              <p className="text-sm text-muted-foreground">Approximate wholesale graphene pricing</p>
            </div>
            <div className="p-8 text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2 gradient-text">$1.25M</div>
              <p className="text-xl mb-1">(Projected) Daily revenue</p>
              <p className="text-sm text-muted-foreground">Maximum potential (2 cycles per facility)</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}