import { AlertTriangle, Battery, Waves } from "lucide-react";
import { cn } from "@/lib/utils";

interface ProblemCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  className?: string;
}

const ProblemCard = ({
  icon,
  title,
  description,
  className,
}: ProblemCardProps) => {
  return (
    <div className={cn("card-highlight group", className)}>
      <div className="mb-6 p-2 rounded-full bg-secondary inline-block">
        {icon}
      </div>
      <h3 className="text-xl font-medium mb-3">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
};

export default function ProblemSection() {
  return (
    <section id="problem" className="py-20 relative">
      <div className="hex-bg absolute inset-0 opacity-10 -z-10"></div>
      
      <div className="container-section">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-block mb-3 px-3 py-1 rounded-full border border-destructive/30 bg-destructive/10 text-destructive">
            <span className="text-sm font-medium">The Challenge</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Breaking Free from Foreign Dependence</h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mt-12">
          <ProblemCard
            icon={<Waves className="h-6 w-6 text-destructive" />}
            title="Supply Chain Risk"
            description="80% of critical battery materials controlled by foreign entities."
          />
          
          <ProblemCard
            icon={<AlertTriangle className="h-6 w-6 text-destructive" />}
            title="Environmental Cost"
            description="Traditional mining destroys ecosystems and generates toxic waste."
          />
          
          <ProblemCard
            icon={<Battery className="h-6 w-6 text-destructive" />}
            title="Limited Performance"
            description="Current batteries are slow to charge with limited lifespan."
          />
        </div>
        
        <div className="mt-16 p-6 rounded-lg border border-destructive/30 bg-destructive/5">
          <div className="flex flex-col md:flex-row gap-4 items-center">
            <div className="flex-shrink-0">
              <AlertTriangle className="h-8 w-8 text-destructive" />
            </div>
            <div>
              <h4 className="text-xl font-medium mb-2">Critical Minerals Crisis</h4>
              <p className="text-muted-foreground">
                The U.S. imports 100% of its battery-grade graphite, creating a critical vulnerability in our energy future.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}