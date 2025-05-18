
import { Button } from "@/components/ui/button";
import { MessageSquare, Phone, Instagram } from "lucide-react";

const Contact = () => {
  return (
    <section className="py-20 bg-black text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 font-heading">
              Transforme a <span className="text-inove-green">visibilidade</span><br />
              do seu negócio hoje mesmo
            </h2>
            
            <p className="text-lg text-gray-300 mb-6">
              Estamos prontos para criar uma solução visual personalizada que destaque sua empresa e atraia mais clientes.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg"
                className="bg-inove-green hover:bg-inove-green/90 text-black font-semibold flex items-center gap-2"
                onClick={() => window.open("https://wa.me/SEU_NUMERO_DO_WHATSAPP", "_blank")}
              >
                <MessageSquare className="h-5 w-5" />
                WhatsApp
              </Button>
              
              <Button 
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10 flex items-center gap-2"
                onClick={() => window.open("tel:SEU_NUMERO_DE_TELEFONE", "_blank")}
              >
                <Phone className="h-5 w-5" />
                Ligar agora
              </Button>
              
              <Button 
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10 flex items-center gap-2"
                onClick={() => window.open("https://www.instagram.com/inove_visual/", "_blank")}
              >
                <Instagram className="h-5 w-5" />
                Instagram
              </Button>
            </div>
          </div>
          
          <div className="md:w-1/3">
            <div className="bg-inove-darkgray p-6 rounded-lg border border-gray-800">
              <h3 className="text-xl font-bold mb-4">Contato Rápido</h3>
              
              <div className="space-y-4">
                <div>
                  <p className="font-medium">WhatsApp</p>
                  <p className="text-gray-400">+81 XX-XXXX-XXXX</p>
                </div>
                
                <div>
                  <p className="font-medium">Email</p>
                  <p className="text-gray-400">contato@inovevisual.jp</p>
                </div>
                
                <div>
                  <p className="font-medium">Horário de Atendimento</p>
                  <p className="text-gray-400">Segunda a Sexta, 9h às 18h (JST)</p>
                </div>
                
                <div>
                  <p className="font-medium">Atendimento</p>
                  <p className="text-gray-400">Português e Japonês</p>
                </div>
              </div>
              
              <div className="mt-6 pt-6 border-t border-gray-700">
                <p className="text-center text-sm text-gray-400">
                  "Sua marca merece ser vista. Nós tornamos isso possível."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
