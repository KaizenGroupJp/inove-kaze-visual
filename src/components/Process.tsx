
import { MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";

const steps = [
  {
    number: "01",
    title: "Contato Inicial",
    description: "Entre em contato via WhatsApp e conte-nos sobre seu projeto. Responderemos todas as suas dúvidas."
  },
  {
    number: "02",
    title: "Consultoria e Briefing",
    description: "Nossos especialistas irão entender suas necessidades e ajudar a escolher a melhor solução."
  },
  {
    number: "03",
    title: "Projeto e Aprovação",
    description: "Desenvolvemos o projeto visual e apresentamos para sua aprovação, com ajustes ilimitados."
  },
  {
    number: "04",
    title: "Produção",
    description: "Após aprovação, iniciamos a produção com materiais de alta qualidade e tecnologia avançada."
  },
  {
    number: "05",
    title: "Instalação",
    description: "Nossa equipe qualificada realiza a instalação, garantindo acabamento perfeito."
  },
  {
    number: "06",
    title: "Pós-instalação",
    description: "Garantimos o suporte e manutenção para que sua comunicação visual permaneça impecável."
  }
];

const Process = () => {
  return (
    <section id="processo" className="py-20 bg-inove-gray">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-heading">
            Como <span className="text-inove-green">Trabalhamos</span>
          </h2>
          <p className="text-lg text-gray-700">
            Um processo simples e transparente para transformar sua ideia em realidade
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="bg-white rounded-lg p-6 shadow-md relative overflow-hidden group">
              <div className="absolute -right-4 -top-4 text-8xl font-bold text-gray-100 group-hover:text-gray-200 transition-colors z-0">
                {step.number}
              </div>
              <div className="relative z-10">
                <h3 className="text-xl font-bold mb-3 text-inove-darkgray">
                  {step.title}
                </h3>
                <p className="text-gray-600">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 bg-inove-green rounded-xl p-6 md:p-10 text-black">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-2/3 mb-6 md:mb-0 md:pr-6">
              <h3 className="text-2xl md:text-3xl font-bold mb-4 font-heading">
                Pronto para transformar sua identidade visual?
              </h3>
              <p className="text-black/80">
                Inicie o processo hoje mesmo e tenha uma comunicação visual que destaca seu negócio. 
                O primeiro passo é simples: entre em contato conosco.
              </p>
            </div>
            <div className="md:w-1/3 flex justify-center">
              <Button 
                size="lg" 
                className="bg-black hover:bg-inove-darkgray/90 text-white font-semibold flex items-center gap-2"
                onClick={() => window.open("https://wa.me/SEU_NUMERO_DO_WHATSAPP", "_blank")}
              >
                <MessageSquare className="h-5 w-5" />
                Iniciar projeto agora
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
