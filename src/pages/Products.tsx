import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Wallet, Landmark, Smartphone, BadgePercent } from "lucide-react";

export default function Products() {
  return (
    <div className="w-full">
      <div className="bg-primary/5 py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold font-heading mb-4 text-foreground tracking-tight">Products & Services</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover tailored, Shariah-compliant financial solutions designed for your everyday needs, business growth, and future investments.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <Tabs defaultValue="savings" className="w-full">
          <TabsList className="grid w-full grid-cols-3 max-w-2xl mx-auto mb-12">
            <TabsTrigger value="savings" className="text-base"><Wallet className="w-4 h-4 mr-2"/> Savings (Tabungan)</TabsTrigger>
            <TabsTrigger value="financing" className="text-base"><Landmark className="w-4 h-4 mr-2"/> Financing (Pembiayaan)</TabsTrigger>
            <TabsTrigger value="digital" className="text-base"><Smartphone className="w-4 h-4 mr-2"/> Digital Services</TabsTrigger>
          </TabsList>

          <TabsContent value="savings" className="space-y-8 animate-in fade-in-50 duration-500">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
               <ProductCard 
                  title="Tabungan iB Wadiah"
                  description="A secure and reliable savings account with no monthly admin fees, based on the principle of Wadiah Yad Dhamanah."
                  features={["No monthly admin fee", "Free ATM card", "Real-time mobile banking", "Halal guaranteed"]}
                  cta="Open Wadiah"
               />
               <ProductCard 
                  title="Tabungan iB Haji"
                  description="Prepare for your pilgrimage with a dedicated savings account that helps you secure your quota."
                  features={["Auto-debit facility available", "Connected to Siskohat", "Special hajj merchandise", "Free administrative fees"]}
                  cta="Start Hajj Savings"
               />
               <ProductCard 
                  title="Deposito iB Mudharabah"
                  description="Grow your wealth with competitive profit-sharing ratios based on Islamic commercial principles."
                  features={["Flexible terms (1, 3, 6, 12 months)", "Competitive Nisbah", "Rollover options", "LPS guaranteed"]}
                  cta="Invest Now"
               />
            </div>
          </TabsContent>

          <TabsContent value="financing" className="space-y-8 animate-in fade-in-50 duration-500">
             <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6 max-w-5xl mx-auto">
               <ProductCard 
                  title="Pembiayaan iB Mikro (UMKM)"
                  description="Working capital and investment financing for micro and small businesses using Murabahah or Mudharabah contracts."
                  features={["Fast approval process", "Flexible installments", "Mentorship programs available", "Up to Rp 500 Million"]}
                  cta="Apply for Business Loan"
               />
               <ProductCard 
                  title="KPR iB Syariah"
                  description="Own your dream home without Riba. Fixed installments until the end of the term using the Murabahah contract."
                  features={["Fixed installments = peace of mind", "Tenor up to 15 years", "Quick processing", "Transparent margins"]}
                  cta="Apply for KPR"
               />
            </div>
          </TabsContent>

          <TabsContent value="digital" className="space-y-8 animate-in fade-in-50 duration-500">
            <div className="bg-card border border-border/50 rounded-2xl p-8 max-w-4xl mx-auto grid md:grid-cols-2 gap-8 items-center shadow-sm">
               <div>
                  <h3 className="text-2xl font-bold font-heading mb-4">BMTRA Mobile App</h3>
                  <p className="text-muted-foreground mb-6">Manage all your accounts, transfer funds, pay bills, and donate Zakat/Infaq easily from your smartphone. Available 24/7.</p>
                  <ul className="space-y-2 mb-8">
                     <li className="flex items-center gap-2"><BadgePercent className="text-primary w-5 h-5"/> QRIS Payments Supported</li>
                     <li className="flex items-center gap-2"><BadgePercent className="text-primary w-5 h-5"/> BI-FAST Free Transfers</li>
                     <li className="flex items-center gap-2"><BadgePercent className="text-primary w-5 h-5"/> Live Chat Support</li>
                  </ul>
                  <Button asChild>
                     <a href="#">Download Guide</a>
                  </Button>
               </div>
               <div className="bg-muted/30 rounded-xl aspect-[4/3] flex items-center justify-center border border-border/50">
                  <span className="text-muted-foreground italic">App Preview Image Placeholder</span>
               </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}

function ProductCard({ title, description, features, cta }: { title: string, description: string, features: string[], cta: string }) {
   return (
      <Card className="flex flex-col h-full border border-border/50 hover:border-primary/50 transition-colors shadow-sm">
         <CardHeader>
            <CardTitle className="font-heading">{title}</CardTitle>
            <CardDescription className="text-sm mt-2">{description}</CardDescription>
         </CardHeader>
         <CardContent className="flex-1">
            <ul className="space-y-2 text-sm text-muted-foreground">
               {features.map((f, i) => (
                  <li key={i} className="flex items-start gap-2">
                     <div className="mt-1 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                     <span>{f}</span>
                  </li>
               ))}
            </ul>
         </CardContent>
         <CardFooter>
            <Button className="w-full" asChild variant="outline">
               <Link to="/onboarding">{cta}</Link>
            </Button>
         </CardFooter>
      </Card>
   )
}
