import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, ShieldCheck, HeartHandshake, Smartphone, CheckCircle2 } from "lucide-react";

export default function Home() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative bg-primary/5 py-16 md:py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="max-w-xl">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                <ShieldCheck className="h-4 w-4" />
                <span>Diawasi oleh OJK & Tersertifikasi Halal MUI</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading text-foreground leading-tight mb-6 tracking-tight">
                Empowering Your Future,<br />
                <span className="text-primary">The Halal Way.</span>
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                BMTRA offers transparent, Riba-free financial solutions for individuals and businesses, grounded in Islamic values and community trust.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" asChild className="text-base px-8 h-12">
                  <Link to="/onboarding">Open Account <ArrowRight className="ml-2 h-4 w-4" /></Link>
                </Button>
                <Button size="lg" variant="outline" asChild className="text-base px-8 h-12">
                  <Link to="/products">Explore Products</Link>
                </Button>
              </div>
            </div>
            <div className="relative hidden md:block">
              {/* Decorative Hero Image/Shape */}
              <div className="aspect-square rounded-full bg-primary/10 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%]" />
              <div className="relative bg-card p-6 rounded-2xl shadow-xl border border-border/50">
                  <h3 className="font-heading font-semibold text-xl mb-4">Halal Savings (Tabungan iB)</h3>
                  <div className="space-y-4">
                     {[
                        { title: "No Riba", desc: "100% Shariah compliant." },
                        { title: "Secure", desc: "Guaranteed by LPS." },
                        { title: "Easy Access", desc: "Manage via BMTRA Mobile." }
                     ].map((feature, i) => (
                        <div key={i} className="flex gap-3">
                           <CheckCircle2 className="h-5 w-5 text-primary shrink-0" />
                           <div>
                             <p className="font-medium text-sm">{feature.title}</p>
                             <p className="text-xs text-muted-foreground">{feature.desc}</p>
                           </div>
                        </div>
                     ))}
                  </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold font-heading mb-4">Why choose BMTRA?</h2>
            <p className="text-muted-foreground">Combining modern banking convenience with steadfast Shariah principles to cultivate blessings (Barakah) in your wealth.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-card p-8 rounded-2xl border border-border/50 shadow-sm transition-all hover:border-primary/50">
              <div className="h-12 w-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center mb-6">
                <ShieldCheck className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold font-heading mb-3">Shariah-Compliant</h3>
              <p className="text-muted-foreground">All our products act in accordance with MUI's Fatwas. We ensure transparent, interest-free (no Riba) transactions.</p>
            </div>
            <div className="bg-card p-8 rounded-2xl border border-border/50 shadow-sm transition-all hover:border-primary/50">
              <div className="h-12 w-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center mb-6">
                <Smartphone className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold font-heading mb-3">Digital Banking</h3>
              <p className="text-muted-foreground">Manage your finances anytime, anywhere. Open accounts, apply for financing, and pay zakat all from your device.</p>
            </div>
            <div className="bg-card p-8 rounded-2xl border border-border/50 shadow-sm transition-all hover:border-primary/50">
              <div className="h-12 w-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center mb-6">
                <HeartHandshake className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold font-heading mb-3">Community First</h3>
              <p className="text-muted-foreground">Driven by the LDII principles of community empowerment. Your funds support MSMEs and local social causes.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Trust & Accreditations (simulated) */}
      <section className="py-12 border-y bg-muted/30">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-center text-sm font-medium text-muted-foreground uppercase tracking-widest mb-8">Berizin dan diawasi oleh</p>
            <div className="flex flex-wrap justify-center items-center gap-12 opacity-70 grayscale">
               <div className="text-xl font-heading font-bold flex items-center gap-2"><ShieldCheck/> OJK</div>
               <div className="text-xl font-heading font-bold">LPS</div>
               <div className="text-xl font-heading font-bold">Bank Indonesia</div>
               <div className="text-xl font-heading font-bold">MUI Halal</div>
            </div>
         </div>
      </section>
    </div>
  );
}
