
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Qual é a área de atuação da Inove no Japão?",
    answer: "Atendemos em todo o Japão, com foco nas regiões de Tokyo, Osaka, Nagoya, Hamamatsu, Gunma, Ibaraki e Saitama. Para outras regiões, entre em contato para verificarmos a disponibilidade."
  },
  {
    question: "Quanto tempo leva para concluir um projeto de fachada?",
    answer: "O tempo de produção varia conforme a complexidade do projeto. Geralmente, projetos de fachadas completas levam de 2 a 4 semanas, enquanto instalações mais simples podem ser concluídas em 1 semana. Fornecemos prazos específicos após a avaliação do seu projeto."
  },
  {
    question: "Vocês oferecem garantia para os serviços?",
    answer: "Sim, oferecemos garantia para todos os nossos serviços. As fachadas e letreiros possuem garantia de 2 anos para estrutura e 1 ano para iluminação LED. Já os adesivos têm garantia de 1 ano contra desbotamento e descolamento em condições normais."
  },
  {
    question: "Quais são as formas de pagamento aceitas?",
    answer: "Aceitamos transferência bancária, cartão de crédito (parcelamento em até 12x), boleto e pagamento via aplicativos como PayPay. Para projetos maiores, oferecemos condições especiais de pagamento, com entrada e parcelas durante a execução."
  },
  {
    question: "É necessário ter alguma autorização para instalar uma fachada no Japão?",
    answer: "Sim, dependendo do tamanho e tipo da fachada, pode ser necessário obter autorizações municipais. Nossa equipe orienta sobre todas as regulamentações locais e pode auxiliar no processo de obtenção das autorizações necessárias."
  },
  {
    question: "Vocês trabalham apenas com empresas ou também atendem projetos residenciais?",
    answer: "Embora nosso foco principal seja o atendimento a empresas (B2B), também realizamos projetos residenciais como adesivação decorativa e instalação de papel de parede personalizado. Cada projeto residencial é avaliado individualmente."
  }
];

const FAQ = () => {
  return (
    <section id="faq" className="py-20 bg-inove-gray">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-heading">
            Perguntas <span className="text-inove-green">Frequentes</span>
          </h2>
          <p className="text-lg text-gray-700">
            Respostas para as dúvidas mais comuns sobre nossos serviços
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-6">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left font-medium hover:text-inove-green">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-700">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
        
        <div className="mt-12 text-center">
          <p className="mb-2 text-gray-700">
            Não encontrou o que procura?
          </p>
          <p className="text-lg font-medium">
            Entre em contato pelo WhatsApp{" "}
            <a 
              href="https://wa.me/SEU_NUMERO_DO_WHATSAPP" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-inove-green hover:underline"
            >
              clicando aqui
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
