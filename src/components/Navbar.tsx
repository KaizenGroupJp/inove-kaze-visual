
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { MessageSquare } from "lucide-react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-black py-3 shadow-lg' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <div className="flex items-center">
          <img 
            src="/lovable-uploads/2732d9d7-8a14-4664-8524-c1ab72005a11.png" 
            alt="Inove Comunicação Visual Logo" 
            className="h-10 md:h-12"
          />
        </div>
        
        <div className="hidden md:flex items-center space-x-6 text-white">
          <a href="#servicos" className="hover:text-inove-green transition-colors">Serviços</a>
          <a href="#portfolio" className="hover:text-inove-green transition-colors">Portfólio</a>
          <a href="#processo" className="hover:text-inove-green transition-colors">Como Trabalhamos</a>
          <a href="#depoimentos" className="hover:text-inove-green transition-colors">Depoimentos</a>
          <a href="#faq" className="hover:text-inove-green transition-colors">FAQ</a>
        </div>
        
        <Button 
          className="bg-inove-green hover:bg-inove-green/90 text-black flex items-center gap-2 font-semibold"
          onClick={() => window.open("https://wa.me/SEU_NUMERO_DO_WHATSAPP", "_blank")}
        >
          <MessageSquare className="h-5 w-5" />
          <span className="hidden sm:inline">Orçamento Grátis</span>
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
