import Link from "next/link";
import { HexagonIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Footer() {
  return (
    <footer className="bg-background border-t">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center space-x-2">
              <div className="relative w-10 h-10">
                <HexagonIcon className="w-8 h-8 text-primary absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
                <div className="absolute inset-0 bg-accent/20 rounded-md blur-md -z-10"></div>
              </div>
              <span className="font-display font-bold text-xl">DRAX</span>
            </Link>
            <p className="mt-4 text-muted-foreground">
              Clean U.S. Graphene. Built from Biochar. Ready to Power the Future.
            </p>
            <div className="mt-6">
              <Button variant="outline" size="sm" asChild>
                <Link href="/resources">Download Investor Deck</Link>
              </Button>
            </div>
          </div>
          
          <div>
            <h4 className="font-display text-sm uppercase tracking-wider text-primary mb-4">
              Company
            </h4>
            <ul className="space-y-2">
              <li>
                <Link href="/#about" className="text-muted-foreground hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/#technology" className="text-muted-foreground hover:text-primary transition-colors">
                  Our Technology
                </Link>
              </li>
              <li>
                <Link href="/#sustainability" className="text-muted-foreground hover:text-primary transition-colors">
                  Sustainability
                </Link>
              </li>
              <li>
                <Link href="/#careers" className="text-muted-foreground hover:text-primary transition-colors">
                  Careers
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-display text-sm uppercase tracking-wider text-primary mb-4">
              Resources
            </h4>
            <ul className="space-y-2">
              <li>
                <Link href="/resources" className="text-muted-foreground hover:text-primary transition-colors">
                  White Paper
                </Link>
              </li>
              <li>
                <Link href="/resources" className="text-muted-foreground hover:text-primary transition-colors">
                  Investor Deck
                </Link>
              </li>
              <li>
                <Link href="/resources" className="text-muted-foreground hover:text-primary transition-colors">
                  Press Kit
                </Link>
              </li>
              <li>
                <Link href="/resources" className="text-muted-foreground hover:text-primary transition-colors">
                  Flow Diagram
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-display text-sm uppercase tracking-wider text-primary mb-4">
              Contact
            </h4>
            <ul className="space-y-2">
              <li className="text-muted-foreground">
                <span className="block">Drax Industries</span>
                <span className="block">Wyoming, USA</span>
              </li>
              <li className="text-muted-foreground">
                <Link href="mailto:info@draxindustries.com" className="hover:text-primary transition-colors">
                  info@draxindustries.com
                </Link>
              </li>
            </ul>
            <div className="mt-6 flex space-x-4">
              <Button variant="outline" size="icon" className="rounded-full w-8 h-8">
                <span className="sr-only">LinkedIn</span>
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16 8C17.5913 8 19.1174 8.63214 20.2426 9.75736C21.3679 10.8826 22 12.4087 22 14V21H18V14C18 13.4696 17.7893 12.9609 17.4142 12.5858C17.0391 12.2107 16.5304 12 16 12C15.4696 12 14.9609 12.2107 14.5858 12.5858C14.2107 12.9609 14 13.4696 14 14V21H10V14C10 12.4087 10.6321 10.8826 11.7574 9.75736C12.8826 8.63214 14.4087 8 16 8Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M6 9H2V21H6V9Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M4 6C5.10457 6 6 5.10457 6 4C6 2.89543 5.10457 2 4 2C2.89543 2 2 2.89543 2 4C2 5.10457 2.89543 6 4 6Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Button>
              <Button variant="outline" size="icon" className="rounded-full w-8 h-8">
                <span className="sr-only">Twitter</span>
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22 4.01C21 4.5 20.02 4.69 19 5C17.879 3.735 16.217 3.665 14.62 4.263C13.023 4.861 11.977 6.323 12 8.01V9.01C8.755 9.082 5.865 7.605 4 5.01C4 5.01 -0.182 12.946 8 17.01C6.128 18.247 4.261 18.995 2 19.01C10.182 23.074 20 19.01 20 8.01C19.9991 7.7248 19.9723 7.44065 19.92 7.16C20.906 6.1 21.747 4.82 22 4.01Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Button>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Drax Industries. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacy" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}