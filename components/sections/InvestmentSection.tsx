"use client";

import { motion } from "framer-motion";
import { Briefcase, TrendingUp, Check, BarChart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import Link from "next/link";
import { cn } from "@/lib/utils";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  company: z.string().min(2, "Company name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type FormValues = z.infer<typeof formSchema>;

interface InvestmentPointProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  index: number;
}

const InvestmentPoint = ({
  icon,
  title,
  description,
  index,
}: InvestmentPointProps) => {
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

const ContactForm = () => {
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<FormValues>({
    resolver: zodResolver(formSchema)
  });

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      toast.success("Thank you for your inquiry. We'll be in touch soon!");
    } catch (error) {
      toast.error("An error occurred. Please try again later.");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="name">Name</Label>
          <Input
            id="name"
            placeholder="Your name"
            {...register("name")}
            aria-describedby={errors.name ? "name-error" : undefined}
          />
          {errors.name && (
            <p id="name-error" className="text-sm text-destructive">{errors.name.message}</p>
          )}
        </div>
        <div className="space-y-2">
          <Label htmlFor="company">Company</Label>
          <Input
            id="company"
            placeholder="Your company"
            {...register("company")}
            aria-describedby={errors.company ? "company-error" : undefined}
          />
          {errors.company && (
            <p id="company-error" className="text-sm text-destructive">{errors.company.message}</p>
          )}
        </div>
      </div>
      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          type="email"
          placeholder="your@email.com"
          {...register("email")}
          aria-describedby={errors.email ? "email-error" : undefined}
        />
        {errors.email && (
          <p id="email-error" className="text-sm text-destructive">{errors.email.message}</p>
        )}
      </div>
      <div className="space-y-2">
        <Label htmlFor="phone">Phone</Label>
        <Input
          id="phone"
          type="tel"
          placeholder="Your phone number"
          {...register("phone")}
          aria-describedby={errors.phone ? "phone-error" : undefined}
        />
        {errors.phone && (
          <p id="phone-error" className="text-sm text-destructive">{errors.phone.message}</p>
        )}
      </div>
      <div className="space-y-2">
        <Label htmlFor="message">Message</Label>
        <Textarea
          id="message"
          placeholder="Tell us about your interest in partnering with Drax Industries"
          className="min-h-[100px]"
          {...register("message")}
          aria-describedby={errors.message ? "message-error" : undefined}
        />
        {errors.message && (
          <p id="message-error" className="text-sm text-destructive">{errors.message.message}</p>
        )}
      </div>
      <div className="space-y-4">
        <Button
          type="submit"
          size="lg"
          className="w-full"
          variant="glow"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Submitting..." : "Submit Inquiry"}
        </Button>
        <Button variant="outline" size="lg" className="w-full">
          Request Investor Deck
        </Button>
      </div>
    </form>
  );
};

export default function InvestmentSection() {
  const investmentPoints = [
    {
      icon: <Briefcase className="h-4 w-4" />,
      title: "Facility Readiness",
      description: "First production facility is engineered and ready for implementation, with expansion plans for 5 additional sites within 36 months."
    },
    {
      icon: <TrendingUp className="h-4 w-4" />,
      title: "Market Growth",
      description: "Graphene market projected to grow at 40%+ CAGR through 2030, creating substantial demand for our high-quality product."
    },
    {
      icon: <BarChart className="h-4 w-4" />,
      title: "Revenue Projection",
      description: "$1.25M daily revenue maximum output per facility, with multiple revenue streams from direct sales and partnerships."
    },
    {
      icon: <Check className="h-4 w-4" />,
      title: "Financial Structure",
      description: "Wyoming incorporation with Q3 2024 OTC QX listing pending. No debt, fully audited, with preferred partner relationships established."
    }
  ];

  return (
    <section id="invest" className="py-20 relative bg-card/30">
      <div className="hex-bg absolute inset-0 opacity-5 -z-10"></div>
      
      <div className="container-section">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-block mb-3 px-3 py-1 rounded-full border border-primary/30 bg-primary/10 text-primary">
            <span className="text-sm font-medium">Growth Opportunity</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Investment Opportunity</h2>
          <p className="text-xl text-muted-foreground">
            Join us in revolutionizing the energy storage industry with a strategic investment 
            in domestic graphene production.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            {investmentPoints.map((point, index) => (
              <InvestmentPoint
                key={index}
                icon={point.icon}
                title={point.title}
                description={point.description}
                index={index}
              />
            ))}
          </div>
          
          <div>
            <div className="rounded-lg border animated-gradient-border overflow-hidden h-full">
              <div className="p-8 bg-card/50">
                <h3 className="text-2xl font-bold mb-6 text-center">Partner With Us</h3>
                <ContactForm />
              </div>
              
              <div className="bg-secondary/50 p-4 border-t">
                <div className="text-center">
                  <p className="text-sm text-muted-foreground">
                    For investor inquiries, please contact:{" "}
                    <Link href="mailto:investors@draxindustries.com" className="text-primary hover:underline">
                      investors@draxindustries.com
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}