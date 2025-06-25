import { FileText, Download, Image, Presentation as PresentationScreen } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface ResourceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  downloadText: string;
  comingSoon?: boolean;
}

const ResourceCard = ({ title, description, icon, downloadText, comingSoon }: ResourceCardProps) => {
  return (
    <div className="card-highlight">
      <div className="mb-4 p-2 rounded-full bg-secondary inline-block">
        {icon}
      </div>
      <h3 className="text-lg font-medium mb-2">{title}</h3>
      <p className="text-muted-foreground mb-4">{description}</p>
      <Button 
        variant={comingSoon ? "outline" : "default"} 
        className="w-full"
        disabled={comingSoon}
      >
        {comingSoon ? "Coming Soon" : (
          <>
            <Download className="mr-2 h-4 w-4" />
            {downloadText}
          </>
        )}
      </Button>
    </div>
  );
};

export default function ResourcesPage() {
  return (
    <div className="py-20 relative">
      <div className="container-section">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-4xl font-bold mb-6">Resources</h1>
          <p className="text-xl text-muted-foreground">
            Access our technical documentation, investor materials, and media assets.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <ResourceCard
            title="Technical White Paper"
            description="Detailed analysis of our graphene production technology, material specifications, and performance benchmarks."
            icon={<FileText className="h-6 w-6 text-primary" />}
            downloadText="Download White Paper"
            comingSoon={true}
          />
          
          <ResourceCard
            title="Investor Deck"
            description="Comprehensive overview of our business model, market opportunity, and growth strategy."
            icon={<PresentationScreen className="h-6 w-6 text-primary" />}
            downloadText="Download Investor Deck"
            comingSoon={true}
          />
          
          <ResourceCard
            title="Process Flow Diagram"
            description="Technical visualization of our biomass-to-graphene conversion process and facility design."
            icon={<FileText className="h-6 w-6 text-primary" />}
            downloadText="Download Diagram"
            comingSoon={true}
          />
          
          <ResourceCard
            title="Press Kit"
            description="High-resolution logos, product images, team photos, and brand guidelines for media use."
            icon={<Image className="h-6 w-6 text-primary" />}
            downloadText="Download Press Kit"
            comingSoon={true}
          />
        </div>
      </div>
    </div>
  );
}