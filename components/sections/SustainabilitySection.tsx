"use client";

import { motion } from "framer-motion";
import { Leaf, Recycle, BarChart3, Globe } from "lucide-react";
import { cn } from "@/lib/utils";

interface SustainabilityCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  index: number;
}

const SustainabilityCard = ({
  icon,
  title,
  description,
  index,
}: SustainabilityCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="card-highlight h-full"
    >
      <div className="mb-4 p-2 rounded-full bg-secondary inline-block text-primary">
        {icon}
      </div>
      <h3 className="text-lg font-medium mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </motion.div>
  );
};

export default function SustainabilitySection() {
  const sustainabilityFeatures = [
    {
      icon: <Leaf className="h-5 w-5" />,
      title: "U.S. Biomass Feedstock",
      description: "We utilize abundant, renewable biomass from U.S. forestry operations, with an estimated 45-75+ million tons available annually."
    },
    {
      icon: <Recycle className="h-5 w-5" />,
      title: "Zero Emissions Process",
      description: "Our pyrolysis technology operates with zero emissions, using a closed-loop system that captures and reuses all byproducts."
    },
    {
      icon: <BarChart3 className="h-5 w-5" />,
      title: "Carbon Negative Footprint",
      description: "The production process sequesters more carbon than it releases, making our graphene carbon-negative across its lifecycle."
    },
    {
      icon: <Globe className="h-5 w-5" />,
      title: "Environmental Protection",
      description: "By eliminating the need for lithium and cobalt mining, we prevent habitat destruction, water pollution, and ecosystem damage."
    }
  ];

  return (
    <section id="sustainability" className="py-20 relative">
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_bottom,transparent_0%,rgba(15,17,21,0.2)_50%,rgba(15,17,21,0.8)_100%),radial-gradient(circle_at_center,rgba(212,184,99,0.1)_0%,transparent_70%)]"></div>
      
      <div className="container-section">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-block mb-3 px-3 py-1 rounded-full border border-green-500/30 bg-green-500/10 text-green-500">
            <span className="text-sm font-medium">Environmental Impact</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Sustainability</h2>
          <p className="text-xl text-muted-foreground">
            Our commitment to environmental responsibility drives every aspect of our production 
            process, from sustainable feedstock sourcing to zero-emission manufacturing.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {sustainabilityFeatures.map((feature, index) => (
            <SustainabilityCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              index={index}
            />
          ))}
        </div>
        
        <div className="mt-16">
          <div className="rounded-lg border overflow-hidden">
            <div className="bg-card p-8">
              <h3 className="text-2xl font-bold mb-6 text-center">Graphene vs. Lithium: Environmental Impact</h3>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <h4 className="text-lg font-medium border-b border-primary/30 pb-2 text-primary">Drax Graphene Production</h4>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span>Sustainable biomass from renewable forestry waste</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span>Zero water pollution or toxic runoff</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span>No hazardous chemicals in production process</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span>Minimal land use impact with compact facilities</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span>Carbon-negative over product lifecycle</span>
                    </li>
                  </ul>
                </div>
                
                <div className="space-y-4">
                  <h4 className="text-lg font-medium border-b border-destructive/30 pb-2 text-destructive">Traditional Lithium Mining</h4>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <AlertTriangle className="h-5 w-5 text-destructive mr-2 flex-shrink-0 mt-0.5" />
                      <span>Massive water consumption (500,000+ gallons per ton)</span>
                    </li>
                    <li className="flex items-start">
                      <AlertTriangle className="h-5 w-5 text-destructive mr-2 flex-shrink-0 mt-0.5" />
                      <span>Severe groundwater contamination and chemical leaching</span>
                    </li>
                    <li className="flex items-start">
                      <AlertTriangle className="h-5 w-5 text-destructive mr-2 flex-shrink-0 mt-0.5" />
                      <span>Habitat destruction from large-scale mining operations</span>
                    </li>
                    <li className="flex items-start">
                      <AlertTriangle className="h-5 w-5 text-destructive mr-2 flex-shrink-0 mt-0.5" />
                      <span>High carbon footprint from energy-intensive processing</span>
                    </li>
                    <li className="flex items-start">
                      <AlertTriangle className="h-5 w-5 text-destructive mr-2 flex-shrink-0 mt-0.5" />
                      <span>Non-biodegradable waste and difficult recycling</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="bg-primary/10 p-6">
              <div className="flex items-center justify-center">
                <div className="flex items-center">
                  <Leaf className="h-5 w-5 text-green-500 mr-2" />
                  <span className="font-medium">Drax's sustainable approach reduces environmental impact by over 90% compared to traditional battery materials.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Re-use components from other files
function Check(props: { className?: string }) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={props.className}
    >
      <polyline points="20 6 9 17 4 12"></polyline>
    </svg>
  );
}

function AlertTriangle(props: { className?: string }) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={props.className}
    >
      <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"></path>
      <path d="M12 9v4"></path>
      <path d="M12 17h.01"></path>
    </svg>
  );
}