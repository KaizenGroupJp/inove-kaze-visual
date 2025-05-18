
import { Shield, Clock, Lightbulb, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

const benefits = [
  {
    icon: <Shield className="h-10 w-10 text-inove-green" />,
    title: "Qualidade Garantida",
    description: "Materiais de primeira linha e tecnologia avançada para resultados duradouros."
  },
  {
    icon: <Clock className="h-10 w-10 text-inove-green" />,
    title: "Entregas no Prazo",
    description: "Compromisso com prazos, respeitando seu cronograma e necessidades."
  },
  {
    icon: <Lightbulb className="h-10 w-10 text-inove-green" />,
    title: "Design Inovador",
    description: "Projetos exclusivos que comunicam a essência da sua marca."
  },
  {
    icon: <Users className="h-10 w-10 text-inove-green" />,
    title: "Atendimento Bilíngue",
    description: "Comunicação fluente em português e japonês para melhor atendê-lo."
  }
];

const Benefits = () => {
  return (
    <section className="py-20 bg-black text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-heading">
            Por que escolher a <span className="text-inove-green">Inove</span>?
          </h2>
          <p className="text-lg text-gray-300">
            Nossos diferenciais para transformar sua identidade visual
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center bg-inove-darkgray p-6 rounded-lg border border-gray-800 hover:border-inove-green transition-colors">
              <div className="mx-auto mb-4 w-16 h-16 flex items-center justify-center bg-black rounded-full">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
              <p className="text-gray-400">{benefit.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 bg-inove-darkgray rounded-xl p-6 md:p-10">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-2/3 mb-6 md:mb-0 md:pr-6">
              <h3 className="text-2xl md:text-3xl font-bold mb-4 font-heading">
                Está com dúvidas sobre qual solução escolher?
              </h3>
              <p className="text-gray-300">
                Nossos especialistas podem orientar você a encontrar a melhor solução para seu negócio. 
                Oferecemos consultoria gratuita e orçamento sem compromisso.
              </p>
            </div>
            <div className="md:w-1/3 flex justify-center">
              <Button 
                size="lg" 
                className="bg-inove-green hover:bg-inove-green/90 text-black font-semibold"
                onClick={() => window.open("https://wa.me/SEU_NUMERO_DO_WHATSAPP", "_blank")}
              >
                Fale com um especialista agora
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
