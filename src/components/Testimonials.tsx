
import { Star } from "lucide-react";
import { Card } from "@/components/ui/card";

const testimonials = [
  {
    name: "Carlos Tanaka",
    business: "Restaurante Sabor Brasil",
    location: "Tokyo",
    rating: 5,
    text: "A Inove transformou completamente meu restaurante com uma fachada moderna e atrativa. Desde a instalação dos letreiros iluminados, tivemos um aumento significativo no fluxo de clientes. Profissionais atenciosos e excelente acabamento."
  },
  {
    name: "Akira Nakamura",
    business: "Clínica Odontológica Sorria",
    location: "Osaka",
    rating: 5,
    text: "素晴らしいビジュアルコミュニケーションサービス。私たちのクリニックの視認性が大幅に向上しました。ポルトガル語と日本語の両方でのコミュニケーションがとても助かりました。(Serviço visual excelente. Melhorou muito a visibilidade da nossa clínica. A comunicação em português e japonês foi muito útil.)"
  },
  {
    name: "Ana Kimura",
    business: "Academia Power",
    location: "Nagoya",
    rating: 5,
    text: "Contratei a Inove para criar a fachada e a comunicação visual interna da minha academia. O resultado superou todas as expectativas! Atendimento personalizado do início ao fim e entrega no prazo combinado."
  },
  {
    name: "Kenji Suzuki",
    business: "Mercado Família",
    location: "Hamamatsu",
    rating: 4,
    text: "私たちのスーパーマーケットの看板とウィンドウ広告は、多くの新規顧客を引き付けています。高品質でタイムリーなサービスをありがとうございました。(Nossos letreiros e anúncios de vitrine do supermercado estão atraindo muitos clientes novos. Obrigado pelo serviço de alta qualidade e pontual.)"
  }
];

const Testimonials = () => {
  return (
    <section id="depoimentos" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-heading">
            O que nossos <span className="text-inove-green">clientes</span> dizem
          </h2>
          <p className="text-lg text-gray-700">
            Empresas que confiaram em nossos serviços de comunicação visual
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="overflow-hidden border-none shadow-lg p-6">
              <div className="flex items-center mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`h-5 w-5 ${
                      i < testimonial.rating ? "text-yellow-500 fill-yellow-500" : "text-gray-300"
                    }`}
                  />
                ))}
              </div>
              
              <p className="text-gray-700 mb-6 italic">"{testimonial.text}"</p>
              
              <div className="flex items-center">
                <div className="h-12 w-12 rounded-full bg-inove-green flex items-center justify-center text-black font-bold">
                  {testimonial.name.charAt(0)}
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.business}, {testimonial.location}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-gray-600">
            Junte-se a mais de 100 empresas satisfeitas no Japão que escolheram a Inove para sua comunicação visual.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
