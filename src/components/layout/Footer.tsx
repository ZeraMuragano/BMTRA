import { Leaf } from "lucide-react";
import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="border-t bg-muted/40">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="bg-primary text-primary-foreground p-1.5 rounded-md inline-flex">
                <Leaf className="h-5 w-5" />
              </div>
              <span className="font-bold font-heading text-lg tracking-tight text-primary">BMTRA</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              BMT Rukun Abadi (BMTRA) is an Islamic cooperative empowering the community with trusted, Shariah-compliant financial services.
            </p>
          </div>
          <div>
            <h3 className="font-heading font-semibold mb-4">Products</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/products" className="hover:text-primary">Savings (Tabungan)</Link></li>
              <li><Link to="/products" className="hover:text-primary">Financing (Pembiayaan)</Link></li>
              <li><Link to="/products" className="hover:text-primary">Digital Banking</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-heading font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/" className="hover:text-primary">About Us</Link></li>
              <li><Link to="/donate" className="hover:text-primary">Social / CSR</Link></li>
              <li><Link to="/" className="hover:text-primary">Careers</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-heading font-semibold mb-4">Legal</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-primary">Terms of Service</a></li>
              <li><a href="#" className="hover:text-primary">Fraud Awareness</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} BMT Rukun Abadi. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground max-w-lg text-center md:text-right">
            PT BMTRA is licensed and supervised by Indonesia's Financial Services Authority (OJK) and participates in deposit insurance (LPS).
          </p>
        </div>
      </div>
    </footer>
  );
}
