"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronDown } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const HexagonGrid = () => {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      <div className="hex-bg absolute inset-0 opacity-30"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background"></div>
    </div>
  );
};

export default function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.5;
    }
  }, []);

  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      <div className="absolute inset-0 -z-30">
        <Image
          src="/images/graphene-lattice2.png"
          alt="Graphene Lattice Structure"
          fill
          className="object-cover opacity-60"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/60 to-background"></div>
      </div>
      
      <HexagonGrid />
      
      <div className="absolute inset-0 -z-20 opacity-20">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          className="object-cover h-full w-full"
        >
          <source src="https://static.videezy.com/system/resources/previews/000/038/893/original/alb_particlesFast03_preview.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/70 to-background"></div>
      </div>
      
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 py-20 md:py-32">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight mb-6">
              <span className="gradient-text">U.S. Graphene</span>{" "}
              <br className="hidden md:block" />
              Powering Tomorrow
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-8">
              200x stronger than steel. Sustainable. Made in America.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" variant="glow" className="group" asChild>
                <Link href="#technology">
                  Our Technology
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="#invest">Partner With Us</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <Link href="#problem">
          <ChevronDown className="h-8 w-8 text-primary/70" />
        </Link>
      </div>
    </section>
  );
}