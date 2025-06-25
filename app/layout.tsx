import './globals.css';
import type { Metadata } from 'next';
import { Montserrat, Roboto } from 'next/font/google';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { ThemeProvider } from '@/components/ThemeProvider';
import { Toaster } from "@/components/ui/sonner";

const montserrat = Montserrat({ 
  subsets: ['latin'],
  variable: '--font-montserrat',
});

const roboto = Roboto({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'],
  style: ['normal', 'italic'],
  variable: '--font-roboto',
});

export const metadata: Metadata = {
  title: 'Drax Industries | U.S. Graphene from Biomass',
  description: 'Clean U.S. Graphene. Built from Biochar. Ready to Power the Future.',
  openGraph: {
    title: 'Drax Industries | U.S. Graphene from Biomass',
    description: 'Clean U.S. Graphene. Built from Biochar. Ready to Power the Future.',
    type: 'website',
    locale: 'en_US',
    url: 'https://draxindustries.com',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Drax Industries | U.S. Graphene from Biomass',
    description: 'Clean U.S. Graphene. Built from Biochar. Ready to Power the Future.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Drax Industries",
              "description": "Clean U.S. Graphene. Built from Biochar. Ready to Power the Future.",
              "url": "https://draxindustries.com",
              "sameAs": [
                "https://linkedin.com/company/draxindustries",
                "https://twitter.com/draxindustries"
              ]
            })
          }}
        />
      </head>
      <body className={`${montserrat.variable} ${roboto.variable} font-sans bg-background text-foreground`}>
        <ThemeProvider attribute="class" defaultTheme="dark">
          <Header />
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}