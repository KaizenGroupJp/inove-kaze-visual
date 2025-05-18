
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

// Portfolio images would typically come from your actual projects
// These are placeholder images for now
const portfolioCategories = [
  {
    id: "fachadas",
    name: "Fachadas",
    items: [
      { 
        image: "https://images.unsplash.com/photo-1449157291145-7efd050a4d0e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80", 
        title: "Fachada Restaurante Sakura",
        description: "Letreiro luminoso e fachada completa" 
      },
      { 
        image: "https://images.unsplash.com/photo-1460574283810-2aab119d8511?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80", 
        title: "Clínica Dentária Sorria",
        description: "Letreiro 3D com iluminação LED" 
      },
      { 
        image: "https://images.unsplash.com/photo-1496307653780-42ee777d4833?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80", 
        title: "Café Brasil",
        description: "Fachada completa com painéis decorativos" 
      },
    ]
  },
  {
    id: "letras",
    name: "Letras-Caixa",
    items: [
      { 
        image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80", 
        title: "Academia PowerFit",
        description: "Letras-caixa iluminadas em acrílico" 
      },
      { 
        image: "https://images.unsplash.com/photo-1459767129954-1b1c1f9b9ace?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80", 
        title: "Escritório Advogados Associados",
        description: "Letras-caixa em metal escovado" 
      },
      { 
        image: "https://images.unsplash.com/photo-1431576901776-e539bd916ba2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80", 
        title: "Supermercado Global",
        description: "Letras-caixa em acrílico com LED" 
      },
    ]
  },
  {
    id: "adesivos",
    name: "Adesivos",
    items: [
      { 
        image: "https://images.unsplash.com/photo-1439337153520-7082a56a81f4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80", 
        title: "Boutique Elegance",
        description: "Adesivos para vitrine" 
      },
      { 
        image: "https://images.unsplash.com/photo-1497604401993-f2e922e5cb0a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80", 
        title: "Carro company delivery",
        description: "Adesivação veicular completa" 
      },
      { 
        image: "https://images.unsplash.com/photo-1551038247-3d9af20df552?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80", 
        title: "Escritório de Arquitetura",
        description: "Adesivos decorativos para parede" 
      },
    ]
  }
];

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState("fachadas");

  return (
    <section id="portfolio" className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-heading">
            Nosso <span className="text-inove-green">Portfólio</span>
          </h2>
          <p className="text-lg text-gray-700">
            Conheça alguns dos nossos projetos realizados no Japão
          </p>
        </div>
        
        <Tabs defaultValue="fachadas" className="w-full" onValueChange={setActiveTab}>
          <TabsList className="grid grid-cols-3 max-w-md mx-auto mb-8">
            <TabsTrigger value="fachadas">Fachadas</TabsTrigger>
            <TabsTrigger value="letras">Letras-Caixa</TabsTrigger>
            <TabsTrigger value="adesivos">Adesivos</TabsTrigger>
          </TabsList>
          
          {portfolioCategories.map((category) => (
            <TabsContent key={category.id} value={category.id} className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.items.map((item, index) => (
                  <Dialog key={index}>
                    <DialogTrigger asChild>
                      <div className="overflow-hidden rounded-lg shadow-md cursor-pointer group relative">
                        <div className="aspect-w-16 aspect-h-9">
                          <img 
                            src={item.image} 
                            alt={item.title}
                            className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end">
                          <div className="p-4 text-white">
                            <h3 className="font-bold">{item.title}</h3>
                            <p className="text-sm">{item.description}</p>
                          </div>
                        </div>
                      </div>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-xl">
                      <div className="aspect-w-16 aspect-h-9 mb-4">
                        <img 
                          src={item.image} 
                          alt={item.title}
                          className="w-full h-auto object-cover rounded-md"
                        />
                      </div>
                      <h3 className="text-xl font-bold">{item.title}</h3>
                      <p className="text-gray-600">{item.description}</p>
                    </DialogContent>
                  </Dialog>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
        
        <div className="mt-12 text-center">
          <p className="mb-4 text-gray-700">
            Quer ver mais projetos ou solicitar um orçamento personalizado?
          </p>
          <a 
            href="https://www.instagram.com/inove_visual/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-inove-green hover:underline font-medium"
          >
            Visite nosso Instagram @inove_visual
          </a>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
