
import { Button } from "@/components/ui/button";
import { MessageSquare } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative bg-black text-white pt-24 pb-20 md:pt-32 md:pb-28">
      <div className="absolute inset-0 bg-gradient-to-r from-black to-black/90 z-0"></div>
      
      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 space-y-6 md:pr-6 animate-fade-in">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading leading-tight">
              <span className="text-inove-green">Destaque sua empresa</span> com comunicação visual de impacto
            </h1>
            
            <p className="text-lg md:text-xl text-gray-300">
              Fachadas, letreiros e soluções visuais personalizadas para empresas no Japão. Atraia mais clientes com uma identidade visual profissional.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <Button 
                size="lg"
                className="bg-inove-green hover:bg-inove-green/90 text-black font-semibold flex items-center gap-2"
                onClick={() => window.open("https://wa.me/SEU_NUMERO_DO_WHATSAPP", "_blank")}
              >
                <MessageSquare className="h-5 w-5" />
                Solicitar orçamento grátis
              </Button>
              
              <Button 
                size="lg"
                variant="outline" 
                className="border-white text-white hover:bg-white/10"
                onClick={() => document.getElementById('portfolio')?.scrollIntoView({behavior: 'smooth'})}
              >
                Ver nossos trabalhos
              </Button>
            </div>
            
            <div className="pt-4 flex items-center gap-4 text-sm">
              <div className="flex items-center">
                <div className="bg-inove-green h-10 w-10 rounded-full flex items-center justify-center text-black font-bold text-xl">✓</div>
                <span className="ml-2">Atendimento Bilíngue</span>
              </div>
              
              <div className="flex items-center">
                <div className="bg-inove-green h-10 w-10 rounded-full flex items-center justify-center text-black font-bold text-xl">✓</div>
                <span className="ml-2">Entrega Rápida</span>
              </div>
            </div>
          </div>
          
          <div className="md:w-1/2 mt-10 md:mt-0 animate-slide-up flex justify-center">
            <div className="relative">
              <div className="absolute -inset-1 bg-inove-green rounded-lg blur-md"></div>
              <div className="relative bg-black p-1 rounded-lg">
                <img 
                  src="https://images.unsplash.com/photo-1460574283810-2aab119d8511?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
                  alt="Fachada de loja com letreiro iluminado" 
                  className="rounded-lg w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
