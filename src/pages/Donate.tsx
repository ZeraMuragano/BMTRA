import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { HeartHandshake, CheckCircle2 } from "lucide-react";

export default function Donate() {
   const [amount, setAmount] = useState<string>("50000");
   const [customAmount, setCustomAmount] = useState("");
   const [isSubmitted, setIsSubmitted] = useState(false);

   const handleDonate = (e: React.FormEvent) => {
      e.preventDefault();
      // Simulate payment gateway submission
      setTimeout(() => {
         setIsSubmitted(true);
      }, 800);
   }

   if (isSubmitted) {
      return (
         <div className="max-w-2xl mx-auto px-4 py-24 text-center">
            <div className="inline-flex justify-center items-center w-20 h-20 rounded-full bg-primary/10 text-primary mb-6">
               <CheckCircle2 className="w-10 h-10" />
            </div>
            <h2 className="text-3xl font-bold font-heading mb-4">Jazakumullah Khairan Katsiran</h2>
            <p className="text-muted-foreground mb-8">
               May Allah reward your kind donation. A receipt has been sent to your email.
            </p>
            <Button onClick={() => setIsSubmitted(false)}>Make Another Donation</Button>
         </div>
      );
   }

   return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid lg:grid-cols-2 gap-12 items-start">
         <div>
            <div className="inline-flex items-center justify-center p-2 bg-primary/10 text-primary rounded-xl mb-6">
               <HeartHandshake className="w-8 h-8" />
            </div>
            <h1 className="text-4xl font-bold font-heading mb-4">Social & CSR Portal</h1>
            <p className="text-lg text-muted-foreground mb-8">
               Purify your wealth and empower the community. Donate your Zakat, Infaq, Sadaqah, or Waqf securely through BMTRA's official platform.
            </p>
            
            <div className="bg-muted/30 p-6 rounded-2xl border border-border/50">
               <h3 className="font-heading font-semibold text-lg mb-3">Transparency & Impact</h3>
               <p className="text-sm text-muted-foreground mb-4">
                  100% of your Zakat funds are channeled to verified Mustahiq through official Amil institutions partnered with LDII.
               </p>
               <div className="flex items-center gap-4 text-sm font-medium">
                  <div className="flex items-center gap-2">
                     <span className="text-xl font-bold text-primary">Rp 2.5B+</span> 
                     <span className="text-muted-foreground">Distributed (2025)</span>
                  </div>
               </div>
            </div>
         </div>

         <Card className="shadow-lg border-primary/20">
            <CardHeader>
               <CardTitle>Donation Form</CardTitle>
               <CardDescription>Select the purpose and amount for your donation.</CardDescription>
            </CardHeader>
            <CardContent>
               <form onSubmit={handleDonate} className="space-y-6">
                  <div className="space-y-3">
                     <Label>Donation Type</Label>
                     <Select defaultValue="zakat_maal">
                        <SelectTrigger>
                           <SelectValue placeholder="Select type" />
                        </SelectTrigger>
                        <SelectContent>
                           <SelectItem value="zakat_maal">Zakat Maal</SelectItem>
                           <SelectItem value="zakat_fitrah">Zakat Fitrah</SelectItem>
                           <SelectItem value="infaq">Infaq / Sadaqah</SelectItem>
                           <SelectItem value="waqf">Waqf Education Fund</SelectItem>
                        </SelectContent>
                     </Select>
                  </div>

                  <div className="space-y-3">
                     <Label>Select Amount (IDR)</Label>
                     <RadioGroup 
                        value={amount} 
                        onValueChange={(val) => {
                           setAmount(val);
                           if (val !== "custom") setCustomAmount("");
                        }}
                        className="grid grid-cols-2 gap-3"
                     >
                        <div>
                           <RadioGroupItem value="50000" id="a50" className="peer sr-only" />
                           <Label htmlFor="a50" className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-transparent p-4 hover:bg-muted hover:text-accent-foreground peer-data-[state=checked]:border-primary peer-data-[state=checked]:text-primary cursor-pointer">
                              Rp 50.000
                           </Label>
                        </div>
                        <div>
                           <RadioGroupItem value="100000" id="a100" className="peer sr-only" />
                           <Label htmlFor="a100" className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-transparent p-4 hover:bg-muted hover:text-accent-foreground peer-data-[state=checked]:border-primary peer-data-[state=checked]:text-primary cursor-pointer">
                              Rp 100.000
                           </Label>
                        </div>
                        <div>
                           <RadioGroupItem value="500000" id="a500" className="peer sr-only" />
                           <Label htmlFor="a500" className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-transparent p-4 hover:bg-muted hover:text-accent-foreground peer-data-[state=checked]:border-primary peer-data-[state=checked]:text-primary cursor-pointer">
                              Rp 500.000
                           </Label>
                        </div>
                        <div>
                           <RadioGroupItem value="custom" id="acustom" className="peer sr-only" />
                           <Label htmlFor="acustom" className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-transparent p-4 hover:bg-muted hover:text-accent-foreground peer-data-[state=checked]:border-primary peer-data-[state=checked]:text-primary cursor-pointer">
                              Other Amount
                           </Label>
                        </div>
                     </RadioGroup>
                     {amount === "custom" && (
                        <div className="pt-2">
                           <Input 
                              type="number" 
                              placeholder="Enter amount (min Rp 10.000)" 
                              value={customAmount}
                              onChange={(e) => setCustomAmount(e.target.value)}
                              required 
                           />
                        </div>
                     )}
                  </div>

                  <div className="space-y-4 pt-4 border-t">
                     <div className="space-y-2">
                        <Label htmlFor="name">Full Name (optional)</Label>
                        <Input id="name" placeholder="Hamba Allah" />
                     </div>
                     <div className="space-y-2">
                        <Label htmlFor="email">Email Address</Label>
                        <Input id="email" type="email" placeholder="For donation receipt" required />
                     </div>
                  </div>

                  <Button type="submit" className="w-full" size="lg">Continue to Payment</Button>
               </form>
            </CardContent>
         </Card>
      </div>
   );
}
