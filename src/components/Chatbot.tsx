import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { MessageCircle, X, Loader2, Send } from "lucide-react";
import { Input } from "@/components/ui/input";
import { clsx } from "clsx";
import { GoogleGenAI } from "@google/genai";

// Initialize Gemini (Will read process.env.GEMINI_API_KEY injected by Vite)
// Note: If apiKey is undefined, it will fail gracefully in the catch block if not set.
const ai = process.env.GEMINI_API_KEY ? new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY }) : null;

// The chatbot persona and instructions
const SYSTEM_INSTRUCTION = `
You are the official Virtual Assistant for BMTRA (BMT Rukun Abadi), an LDII-affiliated Islamic Bank in Indonesia.
Your tone should be authoritative yet caring, respectful, and helpful. You can use common Islamic greetings (Assalamu'alaikum).
Always ensure your answers comply with Shariah banking principles (no riba, mention MUI fatwas if asked).
Key Info:
- Products: Tabungan iB Wadiah, Tabungan iB Haji, Deposito iB Mudharabah, Pembiayaan UMKM, KPR Syariah.
- Features: BMTRA Mobile App (QRIS, BI-FAST).
- Trust: Supervised by OJK and LPS guaranteed.
Keep responses concise, friendly, and under 3-4 sentences when possible. Do not invent products not listed.
`;

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: "user" | "bot"; text: string }[]>([
    { role: "bot", text: "Assalamu'alaikum! I'm the BMTRA Assistant. How can I help you today with your Shariah financial needs?" }
  ]);
  const [inputVal, setInputVal] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom of chat
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputVal.trim() || isLoading) return;

    const userText = inputVal.trim();
    setInputVal("");
    setMessages((prev) => [...prev, { role: "user", text: userText }]);
    setIsLoading(true);

    if (!ai) {
      // Graceful fallback if no API key is provided
      setTimeout(() => {
        setMessages((prev) => [...prev, { role: "bot", text: "Mohon maaf, I am currently offline (API Key not configured). Please contact our call center." }]);
        setIsLoading(false);
      }, 1000);
      return;
    }

    try {
      // Build history for context (simplistic history implementation)
      // For a real app, you'd use ai.chats.create() to maintain history better.
      const chat = ai.chats.create({
        model: "gemini-3-flash-preview",
        config: {
          systemInstruction: SYSTEM_INSTRUCTION,
        }
      });
      
      // Seed history (optional, since chat keeps it, but we are recreating `chat` each time if we don't persist it. Let's send the single message for now)
      const response = await chat.sendMessage({ message: userText });
      
      setMessages((prev) => [...prev, { role: "bot", text: response.text || "I'm sorry, I couldn't process that request." }]);
    } catch (error: any) {
      console.error(error);
      setMessages((prev) => [...prev, { role: "bot", text: "Mohon maaf, there was an error processing your request. Please try again later." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Floating Action Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button 
          size="icon" 
          className="h-14 w-14 rounded-full shadow-xl hover:shadow-2xl transition-all"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
        </Button>
      </div>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-[350px] sm:w-[400px] h-[500px] bg-background border border-border shadow-2xl rounded-2xl flex flex-col z-50 overflow-hidden animate-in slide-in-from-bottom-5 duration-300">
          <div className="bg-primary p-4 text-primary-foreground flex justify-between items-center">
             <div>
                <h3 className="font-heading font-semibold">Tanya BMTRA</h3>
                <p className="text-xs opacity-80">AI Virtual Assistant</p>
             </div>
             <Button variant="ghost" size="icon" className="text-primary-foreground hover:bg-primary-foreground/20 hover:text-white" onClick={() => setIsOpen(false)}>
                <X className="h-5 w-5" />
             </Button>
          </div>
          
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-muted/5">
             {messages.map((msg, i) => (
                <div key={i} className={clsx("flex flex-col max-w-[85%]", msg.role === "user" ? "ml-auto items-end" : "mr-auto items-start")}>
                   <div className={clsx(
                      "px-4 py-2.5 rounded-2xl text-sm",
                      msg.role === "user" 
                        ? "bg-primary text-primary-foreground rounded-tr-sm" 
                        : "bg-muted text-foreground rounded-tl-sm border border-border/50 shadow-sm"
                   )}>
                      {msg.text}
                   </div>
                </div>
             ))}
             {isLoading && (
                <div className="flex mr-auto items-start max-w-[85%]">
                   <div className="px-4 py-3 rounded-2xl text-sm bg-muted text-foreground rounded-tl-sm border border-border/50 shadow-sm flex items-center gap-2">
                     <Loader2 className="h-4 w-4 animate-spin text-muted-foreground" />
                     <span className="text-muted-foreground">Typing...</span>
                   </div>
                </div>
             )}
             <div ref={messagesEndRef} />
          </div>

          <div className="p-3 bg-background border-t">
             <form onSubmit={handleSubmit} className="flex gap-2">
                <Input 
                  placeholder="Ask about Halal savings..." 
                  className="rounded-full bg-muted/50 focus-visible:ring-primary"
                  value={inputVal}
                  onChange={(e) => setInputVal(e.target.value)}
                  disabled={isLoading}
                />
                <Button type="submit" size="icon" className="rounded-full shrink-0" disabled={!inputVal.trim() || isLoading}>
                   <Send className="h-4 w-4" />
                </Button>
             </form>
          </div>
        </div>
      )}
    </>
  );
}
