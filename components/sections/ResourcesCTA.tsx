"use client";

import { motion } from "framer-motion";
import { FileText, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function ResourcesCTA() {
  return (
    <section className="py-20 relative bg-card/30">
      <div className="hex-bg absolute inset-0 opacity-5 -z-10"></div>
      
      <div className="container-section">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-lg border animated-gradient-border overflow-hidden"
        >
          <div className="p-8 md:p-12 bg-card/50">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <FileText className="h-6 w-6 text-primary" />
                  <h3 className="text-2xl font-bold">Download Our Resources</h3>
                </div>
                <p className="text-muted-foreground mb-0">
                  Access our technical documentation, investor materials, and media assets to learn more about our groundbreaking technology.
                </p>
              </div>
              <Button size="lg" className="min-w-[200px]" asChild>
                <Link href="/resources">
                  View Resources
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}