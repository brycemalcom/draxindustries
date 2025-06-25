"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Battery, Car, Shield, Plane, Cpu, Heart } from "lucide-react";
import { cn } from "@/lib/utils";

interface GrapheneFeatureProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  delay: number;
}

const GrapheneFeature = ({
  title,
  description,
  icon,
  delay,
}: GrapheneFeatureProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: delay * 0.1 }}
      className="card-highlight"
    >
      <div className="flex items-start">
        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center mr-4">
          {icon}
        </div>
        <div>
          <h3 className="text-lg font-medium mb-2">{title}</h3>
          <p className="text-sm text-muted-foreground">{description}</p>
        </div>
      </div>
    </motion.div>
  );
};

interface ApplicationCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  delay: number;
}

const ApplicationCard = ({
  title,
  description,
  icon,
  delay,
}: ApplicationCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: delay * 0.1 }}
      className="card-highlight h-full"
    >
      <div className="mb-4 p-2 rounded-full bg-secondary inline-block">
        {icon}
      </div>
      <h3 className="text-lg font-medium mb-2">{title}</h3>
      <p className="text-sm text-muted-foreground">{description}</p>
    </motion.div>
  );
};

export default function WhyGrapheneSection() {
  const applications = [
    {
      title: "Energy Storage",
      description: "High-capacity batteries and supercapacitors with rapid charging capabilities.",
      icon: <Battery className="h-6 w-6 text-primary" />
    },
    {
      title: "Electric Vehicles",
      description: "Lightweight components and batteries with extended range and rapid charging.",
      icon: <Car className="h-6 w-6 text-primary" />
    },
    {
      title: "Defense",
      description: "Advanced armor, lightweight equipment, and enhanced energy systems.",
      icon: <Shield className="h-6 w-6 text-primary" />
    },
    {
      title: "Aerospace",
      description: "Stronger, lighter materials for aircraft and spacecraft components.",
      icon: <Plane className="h-6 w-6 text-primary" />
    },
    {
      title: "Electronics",
      description: "Next-generation semiconductors, displays, and thermal management solutions.",
      icon: <Cpu className="h-6 w-6 text-primary" />
    },
    {
      title: "Medical Technology",
      description: "Biocompatible and conductive materials for sensors, implants, diagnostics, and advanced medical devices.",
      icon: <Heart className="h-6 w-6 text-primary" />
    }
  ];

  return (
    <section id="advantages" className="py-20 relative">
      <div className="container-section">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-block mb-3 px-3 py-1 rounded-full border border-accent/30 bg-accent/10 text-accent">
            <span className="text-sm font-medium">Material Benefits</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Graphene?</h2>
          <p className="text-xl text-muted-foreground">
            Graphene's extraordinary properties make it the ideal material for next-generation 
            energy storage and countless high-performance applications.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="aspect-square rounded-lg overflow-hidden border border-border/50 relative">
              <Image
                src="/images/graphene.png"
                alt="Graphene lattice structure"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/30 to-transparent"></div>
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/30 rounded-full blur-3xl -z-10"></div>
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-accent/20 rounded-full blur-3xl -z-10"></div>
          </div>
          
          <div className="space-y-4">
            <GrapheneFeature
              title="Superior Strength"
              description="200x stronger than steel while remaining ultra-lightweight and flexible."
              icon={<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M16 8v8h-8v-8h8m2-2h-12v12h12v-12z"/></svg>}
              delay={1}
            />
            
            <GrapheneFeature
              title="Exceptional Conductivity"
              description="600+ Wh/kg energy density with superior thermal management."
              icon={<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M14.69 10.86c1.27 0.56 2.31 2.36 2.31 4.14 0 1.4-0.64 2.54-1.63 3.14-0.38 0.23-0.81 0.36-1.28 0.36h-4.18c-0.47 0-0.9-0.13-1.28-0.36-0.99-0.6-1.63-1.74-1.63-3.14 0-1.78 1.04-3.58 2.31-4.14 0.23-0.1 0.33-0.38 0.23-0.61-0.05-0.11-0.15-0.19-0.26-0.23-2.26-0.71-3.89-2.58-3.89-4.77 0-2.8 2.73-5.09 6.09-5.09s6.09 2.29 6.09 5.09c0 2.19-1.63 4.06-3.89 4.77-0.27 0.08-0.42 0.36-0.34 0.63 0.05 0.12 0.13 0.21 0.25 0.25m0.02 8.38c0.2-0.12 0.37-0.29 0.5-0.49 0.3-0.45 0.45-1.05 0.45-1.75 0-1.16-0.7-2.47-1.5-2.83-0.18-0.08-0.36-0.12-0.54-0.12s-0.36 0.04-0.54 0.12c-0.8 0.36-1.5 1.67-1.5 2.83 0 0.7 0.15 1.3 0.45 1.75 0.13 0.2 0.3 0.37 0.5 0.49h2.18z"/></svg>}
              delay={2}
            />
            
            <GrapheneFeature
              title="Rapid Charging"
              description="Charges significantly faster than conventional lithium batteries."
              icon={<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20 10v-6h-16v6h16zm0 10v-6h-16v6h16zm2-16c1.11 0 2 0.89 2 2v6c0 1.11-0.89 2-2 2h-16c-1.11 0-2-0.89-2-2v-6c0-1.11 0.89-2 2-2h16zm0 10c1.11 0 2 0.89 2 2v6c0 1.11-0.89 2-2 2h-16c-1.11 0-2-0.89-2-2v-6c0-1.11 0.89-2 2-2h16z"/></svg>}
              delay={3}
            />
            
            <GrapheneFeature
              title="Environmentally Safe"
              description="Non-toxic, recyclable, and sustainable—eliminating the environmental hazards of lithium batteries."
              icon={<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M9 13.5v-3c0-0.28 0.22-0.5 0.5-0.5h5c0.28 0 0.5 0.22 0.5 0.5v3c0 0.28-0.22 0.5-0.5 0.5h-5c-0.28 0-0.5-0.22-0.5-0.5m10.5-3c0-3.31-2.69-6-6-6s-6 2.69-6 6c-2.21 0-4 1.79-4 4s1.79 4 4 4h12c2.21 0 4-1.79 4-4s-1.79-4-4-4z"/></svg>}
              delay={4}
            />
          </div>
        </div>
        
        <div className="mt-16">
          <h3 className="text-2xl font-bold mb-6 text-center">Versatile Applications</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {applications.map((app, index) => (
              <ApplicationCard
                key={index}
                title={app.title}
                description={app.description}
                icon={app.icon}
                delay={index}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}