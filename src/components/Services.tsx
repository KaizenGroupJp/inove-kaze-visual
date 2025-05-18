
import { Card } from "@/components/ui/card";

const services = [
  {
    icon: "🏢",
    title: "Fachadas Comerciais",
    description: "Letreiros iluminados, placas e fachadas completas para destacar seu negócio."
  },
  {
    icon: "💡",
    title: "Letras-Caixa",
    description: "Letras tridimensionais com ou sem iluminação LED para maior visibilidade."
  },
  {
    icon: "🖼️",
    title: "Placas Corporativas",
    description: "Placas internas, externas e de sinalização para empresas e estabelecimentos."
  },
  {
    icon: "🏪",
    title: "Adesivos",
    description: "Adesivos personalizados para vitrines, paredes, pisos e veículos."
  },
  {
    icon: "🏠",
    title: "Papel de Parede",
    description: "Transforme ambientes com papéis de parede personalizados e de alta qualidade."
  },
  {
    icon: "🎨",
    title: "Design Personalizado",
    description: "Criação e desenvolvimento de projetos visuais exclusivos para sua marca."
  }
];

const Services = () => {
  return (
    <section id="servicos" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-heading">
            Nossos <span className="text-inove-green">Serviços</span>
          </h2>
          <p className="text-lg text-gray-700">
            Soluções completas em comunicação visual para empresas no Japão
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-shadow group">
              <div className="p-6">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-inove-green transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600">
                  {service.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Button 
            className="bg-inove-green hover:bg-inove-green/90 text-black font-semibold flex items-center gap-2 mx-auto"
            onClick={() => window.open("https://wa.me/SEU_NUMERO_DO_WHATSAPP", "_blank")}
          >
            <MessageSquare className="h-5 w-5" />
            Solicitar orçamento personalizado
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;

import { Button } from "@/components/ui/button";
import { MessageSquare } from "lucide-react";
