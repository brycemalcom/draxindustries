import { Building, GraduationCap, Award } from "lucide-react";
import { cn } from "@/lib/utils";

interface TeamMemberProps {
  name: string;
  role: string;
  description: string;
}

const TeamMember = ({
  name,
  role,
  description,
}: TeamMemberProps) => {
  return (
    <div className="card-highlight">
      <h3 className="text-lg font-medium mb-1">{name}</h3>
      <p className="text-primary text-sm mb-3">{role}</p>
      <p className="text-muted-foreground text-sm">{description}</p>
    </div>
  );
};

export default function AboutSection() {
  const teamMembers = [
    {
      name: "Dr. James Mitchell",
      role: "Chief Technology Officer",
      description: "20+ years in materials science with specialization in carbon-based nanomaterials. Former lead researcher at National Energy Laboratory."
    },
    {
      name: "Sarah Reynolds",
      role: "Chief Executive Officer",
      description: "Former energy sector executive with experience scaling cleantech startups from concept to market. MBA from Harvard Business School."
    },
    {
      name: "Michael Chen",
      role: "Chief Financial Officer",
      description: "15 years in investment banking with focus on clean energy investments. Led financial strategy for multiple successful public offerings."
    },
    {
      name: "Dr. Aisha Patel",
      role: "Director of R&D",
      description: "Ph.D. in Chemical Engineering with specialization in battery technologies. Holds 12 patents in advanced materials."
    }
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="container-section">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-block mb-3 px-3 py-1 rounded-full border border-primary/30 bg-primary/10 text-primary">
            <span className="text-sm font-medium">Our Company</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">About Drax Industries</h2>
          <p className="text-xl text-muted-foreground">
            A team of clean energy entrepreneurs, Wall Street veterans, and battery scientists 
            dedicated to revolutionizing energy storage with sustainable solutions.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <h3 className="text-2xl font-bold mb-6">Our Mission</h3>
            <p className="text-muted-foreground mb-6">
              Drax Industries is committed to creating a sustainable energy future through 
              American innovation and manufacturing. We believe that clean, high-performance 
              energy storage is the key to unlocking the next generation of technological advancement.
            </p>
            <p className="text-muted-foreground mb-6">
              By transforming abundant biomass into advanced graphene materials, we're creating 
              a secure, domestic supply chain for critical materials while reducing environmental 
              impact and generating American jobs.
            </p>
            
            <div className="space-y-4 mt-8">
              <div className="flex items-start">
                <div className="mr-4 flex-shrink-0 mt-1">
                  <Building className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Corporate Structure</h4>
                  <p className="text-sm text-muted-foreground">Wyoming Incorporation | Q3 2024 OTC QX Listing | Symbol pending</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mr-4 flex-shrink-0 mt-1">
                  <Award className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Credentials</h4>
                  <p className="text-sm text-muted-foreground">No debt, fully audited, preferred partner relationships</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mr-4 flex-shrink-0 mt-1">
                  <GraduationCap className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Research Partnerships</h4>
                  <p className="text-sm text-muted-foreground">Collaborations with leading U.S. universities and research institutions</p>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-bold mb-6">Leadership Team</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {teamMembers.map((member, index) => (
                <TeamMember
                  key={index}
                  name={member.name}
                  role={member.role}
                  description={member.description}
                />
              ))}
            </div>
          </div>
        </div>
        
        <div className="rounded-lg border p-6 bg-card/50">
          <h3 className="text-xl font-bold mb-4 text-center">Our Commitment</h3>
          <p className="text-center text-muted-foreground">
            Drax Industries is committed to responsible business practices, environmental stewardship, 
            and creating sustainable value for our partners, customers, and communities. We believe that 
            the transition to clean energy is both a moral imperative and an extraordinary business opportunity.
          </p>
        </div>
      </div>
    </section>
  );
}