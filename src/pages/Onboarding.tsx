import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Progress } from "@/components/ui/progress";
import { CheckCircle2, ChevronRight, ChevronLeft, UploadCloud } from "lucide-react";

export default function Onboarding() {
  const [step, setStep] = useState(1);
  const totalSteps = 3;
  const [isCompleted, setIsCompleted] = useState(false);

  const handleNext = () => setStep((s) => Math.min(s + 1, totalSteps));
  const handlePrev = () => setStep((s) => Math.max(s - 1, 1));
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (step < totalSteps) {
      handleNext();
    } else {
      setIsCompleted(true);
    }
  }

  if (isCompleted) {
    return (
      <div className="max-w-xl mx-auto px-4 py-24 text-center">
        <div className="inline-flex justify-center items-center w-20 h-20 rounded-full bg-primary/10 text-primary mb-6">
          <CheckCircle2 className="w-10 h-10" />
        </div>
        <h2 className="text-3xl font-bold font-heading mb-4">Application Submitted</h2>
        <p className="text-muted-foreground mb-8">
          Alhamdulillah! Your application has been received. Our team will verify your documents within 1x24 hours. You will receive an SMS/Email with the next steps.
        </p>
        <Button asChild>
          <Link to="/">Return to Home</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="bg-muted/10 py-12 min-h-[calc(100vh-4rem)]">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
           <h1 className="text-3xl font-bold font-heading mb-4text-foreground text-center">Open Your Account</h1>
           <div className="flex items-center justify-between text-sm text-muted-foreground font-medium mb-3 px-1 mt-6">
              <span>Step {step} of {totalSteps}</span>
              <span>{Math.round((step / totalSteps) * 100)}%</span>
           </div>
           <Progress value={(step / totalSteps) * 100} className="h-2" />
        </div>

        <Card className="shadow-lg">
          <form onSubmit={handleSubmit}>
            <CardHeader>
              <CardTitle>{step === 1 ? "Personal Information" : step === 2 ? "Account Preferences" : "e-KYC & Verification"}</CardTitle>
              <CardDescription>
                {step === 1 ? "Please provide your details exactly as they appear on your KTP." 
                  : step === 2 ? "Select the type of Shariah account you wish to open." 
                  : "Upload a photo of your KTP and a selfie for identification."}
              </CardDescription>
            </CardHeader>
            
            <CardContent className="space-y-6">
              {step === 1 && (
                <div className="space-y-4 animate-in fade-in slide-in-from-right-4 duration-300">
                  <div className="space-y-2">
                    <Label htmlFor="nik">NIK (Nomor Induk Kependudukan)</Label>
                    <Input id="nik" required placeholder="16 Digit NIK" pattern="[0-9]{16}" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="fullName">Full Name</Label>
                    <Input id="fullName" required placeholder="Sesuai KTP" />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                       <Label htmlFor="dob">Date of Birth</Label>
                       <Input id="dob" type="date" required />
                    </div>
                    <div className="space-y-2">
                       <Label htmlFor="phone">Phone Number</Label>
                       <Input id="phone" type="tel" required placeholder="08..." />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input id="email" type="email" required placeholder="nama@email.com" />
                  </div>
                </div>
              )}

              {step === 2 && (
                <div className="space-y-4 animate-in fade-in slide-in-from-right-4 duration-300">
                   <div className="space-y-2">
                     <Label>Product Type</Label>
                     <Select required defaultValue="Wadiah">
                        <SelectTrigger>
                           <SelectValue placeholder="Select account type" />
                        </SelectTrigger>
                        <SelectContent>
                           <SelectItem value="Wadiah">Tabungan iB Wadiah (No monthly fee)</SelectItem>
                           <SelectItem value="Mudharabah">Tabungan iB Mudharabah (Profit sharing)</SelectItem>
                           <SelectItem value="Haji">Tabungan iB Haji</SelectItem>
                        </SelectContent>
                     </Select>
                   </div>
                   <div className="space-y-2">
                     <Label>Purpose of Account</Label>
                     <Select required>
                        <SelectTrigger>
                           <SelectValue placeholder="Select purpose" />
                        </SelectTrigger>
                        <SelectContent>
                           <SelectItem value="savings">Personal Savings</SelectItem>
                           <SelectItem value="business">Business / UMKM</SelectItem>
                           <SelectItem value="investment">Investment</SelectItem>
                        </SelectContent>
                     </Select>
                   </div>
                   <div className="p-4 bg-primary/5 border border-primary/20 rounded-lg mt-4 text-sm text-muted-foreground">
                      <p><strong>Akad Disclosure:</strong> By continuing, you agree to enter into an Islamic Financial Contract (Akad) with BMTRA in accordance with DSN-MUI fatwas.</p>
                   </div>
                </div>
              )}

              {step === 3 && (
                <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-300">
                   <div className="border-2 border-dashed border-border rounded-xl p-6 flex flex-col items-center justify-center text-center bg-muted/20 hover:bg-muted/40 transition-colors cursor-pointer">
                      <UploadCloud className="w-10 h-10 text-muted-foreground mb-4" />
                      <h4 className="font-semibold mb-1">Upload KTP Photo</h4>
                      <p className="text-xs text-muted-foreground mb-4">Ensure the text is readable and well lit. (Max 5MB)</p>
                      <Button type="button" variant="outline" size="sm">Select Image</Button>
                   </div>
                   
                   <div className="border-2 border-dashed border-border rounded-xl p-6 flex flex-col items-center justify-center text-center bg-muted/20 hover:bg-muted/40 transition-colors cursor-pointer">
                      <UploadCloud className="w-10 h-10 text-muted-foreground mb-4" />
                      <h4 className="font-semibold mb-1">Take a Selfie with KTP</h4>
                      <p className="text-xs text-muted-foreground mb-4">Hold your KTP near your face. (Max 5MB)</p>
                      <Button type="button" variant="outline" size="sm">Open Camera</Button>
                   </div>

                   <p className="text-xs text-muted-foreground text-center">
                     Your data is securely encrypted and processed in accordance with the Indonesian Personal Data Protection Law (UU PDP).
                   </p>
                </div>
              )}
            </CardContent>

            <CardFooter className="flex justify-between border-t pt-6 bg-muted/10 rounded-b-xl">
               <Button type="button" variant="outline" onClick={handlePrev} disabled={step === 1}>
                 <ChevronLeft className="w-4 h-4 mr-1" /> Back
               </Button>
               <Button type="submit">
                 {step === totalSteps ? "Submit Application" : "Continue"} <ChevronRight className="w-4 h-4 ml-1" />
               </Button>
            </CardFooter>
          </form>
        </Card>
      </div>
    </div>
  );
}
