'use client';

import React, { useState } from 'react';
import { motion } from "framer-motion";
import { Check, AlertTriangle } from "lucide-react";
import { cn } from "@/lib/utils";

interface ComparisonItemProps {
  title: string;
  graphene: {
    value: string;
    isPositive: boolean;
  };
  lithium: {
    value: string;
    isPositive: boolean;
  };
  delay: number;
}

const ComparisonItem = ({ title, graphene, lithium, delay }: ComparisonItemProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: delay * 0.1 }}
      className="grid grid-cols-3 border-b border-border/50 last:border-0"
    >
      <div className="p-4 font-medium">{title}</div>
      <div className={cn(
        "p-4 flex items-center gap-2",
        graphene.isPositive ? "text-green-500" : "text-muted-foreground"
      )}>
        {graphene.isPositive ? <Check className="h-4 w-4" /> : null}
        {graphene.value}
      </div>
      <div className={cn(
        "p-4 flex items-center gap-2",
        lithium.isPositive ? "text-green-500" : "text-red-500"
      )}>
        {lithium.isPositive ? <Check className="h-4 w-4" /> : <AlertTriangle className="h-4 w-4" />}
        {lithium.value}
      </div>
    </motion.div>
  );
};

export default function ComparisonSection() {
  const comparisonData = [
    {
      title: "Energy Density",
      graphene: { 
        value: "600+ Wh/kg", 
        isPositive: true 
      },
      lithium: { 
        value: "100-265 Wh/kg", 
        isPositive: false 
      }
    },
    {
      title: "Charge Time",
      graphene: { 
        value: "Significantly faster", 
        isPositive: true 
      },
      lithium: { 
        value: "Standard charging", 
        isPositive: false 
      }
    },
    {
      title: "Lifecycle",
      graphene: { 
        value: "5,000+ cycles", 
        isPositive: true 
      },
      lithium: { 
        value: "300-1,000 cycles", 
        isPositive: false 
      }
    },
    {
      title: "Temperature Range",
      graphene: { 
        value: "-40°C to +70°C", 
        isPositive: true 
      },
      lithium: { 
        value: "0°C to +45°C", 
        isPositive: false 
      }
    },
    {
      title: "Safety",
      graphene: { 
        value: "Non-flammable", 
        isPositive: true 
      },
      lithium: { 
        value: "Fire/explosion risk", 
        isPositive: false 
      }
    },
    {
      title: "Environmental Impact",
      graphene: { 
        value: "Sustainable, recyclable", 
        isPositive: true 
      },
      lithium: { 
        value: "Mining damage, toxic", 
        isPositive: false 
      }
    },
    {
      title: "Supply Chain",
      graphene: { 
        value: "U.S. biomass feedstock", 
        isPositive: true 
      },
      lithium: { 
        value: "80%+ foreign controlled", 
        isPositive: false 
      }
    }
  ];

  return (
    <section id="applications" className="py-20 relative">
      <div className="container-section">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-block mb-3 px-3 py-1 rounded-full border border-primary/30 bg-primary/10 text-primary">
            <span className="text-sm font-medium">Direct Comparison</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Graphene vs Lithium</h2>
          <p className="text-xl text-muted-foreground">
            See how our graphene-based energy storage technology compares to traditional lithium-ion batteries
            across key performance metrics.
          </p>
        </div>
        
        <div className="overflow-hidden rounded-lg border bg-card/50 animated-gradient-border">
          <div className="grid grid-cols-3 border-b border-border font-semibold bg-secondary/50">
            <div className="p-4">Parameter</div>
            <div className="p-4 text-primary">Graphene</div>
            <div className="p-4">Lithium-Ion</div>
          </div>
          
          {comparisonData.map((item, index) => (
            <ComparisonItem
              key={index}
              title={item.title}
              graphene={item.graphene}
              lithium={item.lithium}
              delay={index}
            />
          ))}
        </div>
        
        <div className="mt-12 p-6 rounded-lg border border-primary/30 bg-primary/5">
          <div className="flex flex-col md:flex-row gap-4 items-center">
            <div className="flex-shrink-0">
              <Check className="h-8 w-8 text-primary" />
            </div>
            <div>
              <h4 className="text-xl font-medium mb-2">Graphene: The Clear Advantage</h4>
              <p className="text-muted-foreground">
                Graphene's superior performance, safety profile, and sustainable sourcing make it 
                the obvious choice for next-generation energy storage. By eliminating reliance on 
                foreign lithium and cobalt, Drax graphene technology promises to revolutionize 
                the energy storage industry while prioritizing environmental responsibility.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}