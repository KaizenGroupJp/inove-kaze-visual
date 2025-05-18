
import { CheckCircle } from "lucide-react";

type PainPointType = {
  pain: string;
  solution: string;
};

const painPoints: PainPointType[] = [
  {
    pain: "Fachada sem impacto visual e pouca visibilidade",
    solution: "Design personalizado que destaca seu negócio e atrai clientes mesmo à distância"
  },
  {
    pain: "Dificuldade em comunicar com fornecedores japoneses",
    solution: "Atendimento bilíngue (português/japonês) em todas as etapas do projeto"
  },
  {
    pain: "Preocupação com normas e regulamentações locais",
    solution: "Projetos desenvolvidos conforme legislação japonesa, evitando problemas futuros"
  },
  {
    pain: "Insegurança sobre qualidade dos materiais",
    solution: "Materiais premium e garantia em todos os nossos serviços para sua tranquilidade"
  },
  {
    pain: "Prazos longos e falta de comunicação",
    solution: "Processo transparente com cronograma definido e atualizações constantes"
  }
];

const PainPoints = () => {
  return (
    <section className="py-20 bg-inove-gray">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-heading">
            Transformamos suas <span className="text-inove-green">dores</span> em <span className="text-inove-green">soluções</span>
          </h2>
          <p className="text-lg text-gray-700">
            Entendemos os desafios de ter um negócio no Japão e oferecemos soluções eficazes
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto">
          {painPoints.map((point, index) => (
            <div 
              key={index} 
              className={`flex flex-col md:flex-row mb-8 p-6 rounded-xl transition-all ${
                index % 2 === 0 ? "bg-white shadow-md" : "bg-black text-white"
              }`}
            >
              <div className="md:w-1/2 mb-4 md:mb-0 md:pr-6">
                <div className="flex items-start">
                  <div className={`min-w-10 h-10 rounded-full flex items-center justify-center mr-4 ${
                    index % 2 === 0 ? "bg-black text-white" : "bg-inove-green text-black"
                  }`}>
                    <span className="text-xl font-bold">?</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-1">Problema:</h3>
                    <p className={`text-lg ${index % 2 === 0 ? "text-gray-700" : "text-gray-300"}`}>
                      {point.pain}
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="md:w-1/2">
                <div className="flex items-start">
                  <div className={`min-w-10 h-10 rounded-full flex items-center justify-center mr-4 ${
                    index % 2 === 0 ? "bg-inove-green text-black" : "bg-white text-black"
                  }`}>
                    <CheckCircle className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-1">Nossa solução:</h3>
                    <p className={`text-lg ${index % 2 === 0 ? "text-gray-700" : "text-gray-300"}`}>
                      {point.solution}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-lg mb-6">
            Não deixe que esses problemas afetem o crescimento do seu negócio.
            <br />
            <span className="font-bold">A Inove tem a solução ideal para sua empresa!</span>
          </p>
          <button 
            className="bg-inove-green hover:bg-inove-green/90 text-black font-semibold py-3 px-8 rounded-md text-lg inline-flex items-center gap-2"
            onClick={() => window.open("https://wa.me/SEU_NUMERO_DO_WHATSAPP", "_blank")}
          >
            Solicitar consultoria gratuita
          </button>
        </div>
      </div>
    </section>
  );
};

export default PainPoints;
