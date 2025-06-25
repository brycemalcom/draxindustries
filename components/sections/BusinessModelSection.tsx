"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { CircleUser, Factory, Truck, Building, BarChart4 } from "lucide-react";
import { cn } from "@/lib/utils";

interface ModelStepProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  index: number;
}

const ModelStep = ({
  icon,
  title,
  description,
  index,
}: ModelStepProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="flex items-start"
    >
      <div className="mr-4 flex-shrink-0 mt-1">
        <div className="w-8 h-8 rounded-full bg-primary/20 text-primary flex items-center justify-center">
          {icon}
        </div>
      </div>
      <div>
        <h3 className="text-lg font-medium mb-1">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </div>
    </motion.div>
  );
};

interface UseCaseCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}

const UseCaseCard = ({
  title,
  description,
  icon,
  index,
}: UseCaseCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="card-highlight"
    >
      <div className="mb-4 p-2 rounded-full bg-secondary inline-block">
        {icon}
      </div>
      <h3 className="text-lg font-medium mb-2">{title}</h3>
      <p className="text-sm text-muted-foreground">{description}</p>
    </motion.div>
  );
};

export default function BusinessModelSection() {
  const useCases = [
    {
      title: "Electric Vehicles",
      description: "Graphene batteries with faster charging and longer ranges for the automotive industry.",
      icon: <svg className="h-5 w-5 text-primary" fill="currentColor" viewBox="0 0 24 24"><path d="M5 13h14V8H5v5zm11.5 1c-0.83 0-1.5 0.67-1.5 1.5S15.67 17 16.5 17s1.5-0.67 1.5-1.5-0.67-1.5-1.5-1.5zm-9 0c-0.83 0-1.5 0.67-1.5 1.5S6.67 17 7.5 17 9 16.33 9 15.5 8.33 14 7.5 14z"/></svg>
    },
    {
      title: "Energy Grid",
      description: "Large-scale storage solutions for utilities and renewable energy providers.",
      icon: <svg className="h-5 w-5 text-primary" fill="currentColor" viewBox="0 0 24 24"><path d="M19 9V7c0-1.1-0.9-2-2-2h-3V2H8v3H5c-1.1 0-2 0.9-2 2v2c-1.1 0-2 0.9-2 2v5h1.33L4 19h1l1.67-5h8.67l1.66 5h1l1.67-5H20v-5c0-1.1-0.9-2-2-2zm-2-2v2H7V7h10z"/></svg>
    },
    {
      title: "Defense & Aerospace",
      description: "Advanced materials for lightweight components and high-performance energy systems.",
      icon: <svg className="h-5 w-5 text-primary" fill="currentColor" viewBox="0 0 24 24"><path d="M22 16v-2l-8.5-5V3.5c0-0.83-0.67-1.5-1.5-1.5s-1.5 0.67-1.5 1.5V9L2 14v2l8.5-2.5V19L8 20.5V22l4-1 4 1v-1.5L13.5 19v-5.5L22 16z"/></svg>
    },
    {
      title: "Telecommunications",
      description: "Enhanced battery systems for network infrastructure and backup power solutions.",
      icon: <svg className="h-5 w-5 text-primary" fill="currentColor" viewBox="0 0 24 24"><path d="M12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm8.94 3c-0.46-4.17-3.77-7.48-7.94-7.94V1h-2v2.06C6.83 3.52 3.52 6.83 3.06 11H1v2h2.06c0.46 4.17 3.77 7.48 7.94 7.94V23h2v-2.06c4.17-0.46 7.48-3.77 7.94-7.94H23v-2h-2.06zM12 19c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7z"/></svg>
    }
  ];

  return (
    <section className="py-20 relative bg-card/30">
      <div className="hex-bg absolute inset-0 opacity-5 -z-10"></div>
      
      <div className="container-section">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-block mb-3 px-3 py-1 rounded-full border border-primary/30 bg-primary/10 text-primary">
            <span className="text-sm font-medium">Revenue Strategy</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Business Model & Use Cases</h2>
          <p className="text-xl text-muted-foreground">
            Our modular production strategy enables rapid scaling to meet growing demand 
            across multiple high-value industries.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <h3 className="text-2xl font-bold mb-6">Modular Production Model</h3>
            <div className="space-y-6 mb-8">
              <ModelStep
                icon={<Factory className="h-4 w-4" />}
                title="Scalable Production Sites"
                description="Standardized 10-chamber facilities that can be rapidly deployed in strategic locations."
                index={1}
              />
              
              <ModelStep
                icon={<Truck className="h-4 w-4" />}
                title="Just-in-Time Manufacturing"
                description="Flexible production capacities that can be adjusted to meet specific client demands."
                index={2}
              />
              
              <ModelStep
                icon={<CircleUser className="h-4 w-4" />}
                title="OEM Partnership Focus"
                description="Direct relationships with original equipment manufacturers across key industries."
                index={3}
              />
              
              <ModelStep
                icon={<Building className="h-4 w-4" />}
                title="Vertical Integration"
                description="Control of the entire supply chain from biomass sourcing to finished graphene products."
                index={4}
              />
              
              <ModelStep
                icon={<BarChart4 className="h-4 w-4" />}
                title="Future Product Development"
                description="Graphene Energy Platform expands revenue opportunities through direct applications."
                index={5}
              />
            </div>
            
            <div className="p-5 rounded-lg border border-accent/30 bg-accent/5">
              <h4 className="text-lg font-medium mb-2">Key Revenue Streams</h4>
              <ul className="space-y-2 text-muted-foreground list-disc pl-5">
                <li>Wholesale graphene sales to OEMs and material suppliers</li>
                <li>Joint venture partnerships for specialized applications</li>
                <li>Technology licensing for specific industries</li>
                <li>Carbon credit generation from sustainable production</li>
                <li>Direct battery sales through Graphene Energy platform (future)</li>
              </ul>
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-bold mb-6">Primary Market Applications</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {useCases.map((useCase, index) => (
                <UseCaseCard
                  key={index}
                  title={useCase.title}
                  description={useCase.description}
                  icon={useCase.icon}
                  index={index}
                />
              ))}
            </div>
            
            <div className="mt-8 aspect-video relative rounded-lg overflow-hidden border animated-gradient-border">
              <Image
                src="/images/graphene-battery.png"
                alt="Energy storage application"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h4 className="text-xl font-bold mb-2">Graphene Energy Platform</h4>
                <p className="text-muted-foreground">
                  Our future product line will incorporate proprietary graphene-based energy storage 
                  solutions designed for specific industry applications, creating additional 
                  value and revenue opportunities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}