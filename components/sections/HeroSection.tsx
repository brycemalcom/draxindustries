"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronDown } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const HexagonGrid = () => {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      <div className="hex-bg absolute inset-0 opacity-20"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background"></div>
    </div>
  );
};

export default function HeroSection() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      <div className="absolute inset-0 -z-30">
        <Image
          src="/images/graphene-lattice2.png"
          alt="Graphene Lattice Structure"
          fill
          className="object-cover opacity-40 transition-opacity duration-700"
          priority
          quality={75}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/70 to-background"></div>
      </div>
      
      <HexagonGrid />
      
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 py-20 md:py-32">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight mb-6">
              <span className="gradient-text">U.S. Graphene</span>{" "}
              <br className="hidden md:block" />
              Powering Tomorrow
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-8">
              200x stronger than steel. Sustainable. Made in America.
            </p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 10 }}
              animate={isLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            >
              <Button size="lg" variant="glow" className="group" asChild>
                <Link href="#technology">
                  Our Technology
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="#invest">Partner With Us</Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
      
      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: -10 }}
        animate={isLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }}
        transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
      >
        <Link href="#problem" className="block animate-bounce">
          <ChevronDown className="h-8 w-8 text-primary/70 transition-colors hover:text-primary" />
        </Link>
      </motion.div>
    </section>
  );
}