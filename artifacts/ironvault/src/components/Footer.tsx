import { FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-card border-t border-border pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2">
            <span className="text-2xl font-black tracking-tighter text-foreground block mb-6">
              IRONVAULT
            </span>
            <p className="text-muted-foreground font-light max-w-sm mb-8">
              The premier luxury performance facility designed for those who demand excellence in every aspect of their physical development.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <FaInstagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <FaTwitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <FaYoutube className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-foreground font-bold tracking-widest text-sm uppercase mb-6">Navigation</h4>
            <ul className="space-y-4">
              <li><a href="#programs" className="text-muted-foreground hover:text-foreground transition-colors font-light">Programs</a></li>
              <li><a href="#trainers" className="text-muted-foreground hover:text-foreground transition-colors font-light">Trainers</a></li>
              <li><a href="#experience" className="text-muted-foreground hover:text-foreground transition-colors font-light">App Experience</a></li>
              <li><a href="#join" className="text-muted-foreground hover:text-foreground transition-colors font-light">Membership</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-foreground font-bold tracking-widest text-sm uppercase mb-6">Contact</h4>
            <ul className="space-y-4 text-muted-foreground font-light">
              <li>100 Elite Way<br />New York, NY 10001</li>
              <li>contact@ironvault.com</li>
              <li>+1 (555) 019-2838</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border/50 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-muted-foreground/50 font-light">
          <p>&copy; {new Date().getFullYear()} IronVault. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-muted-foreground transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-muted-foreground transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
