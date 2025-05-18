
const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-black text-white py-10 border-t border-gray-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <img 
              src="/lovable-uploads/2732d9d7-8a14-4664-8524-c1ab72005a11.png" 
              alt="Inove Comunicação Visual Logo" 
              className="h-10"
            />
            <p className="mt-2 text-sm text-gray-400">
              ビジュアルコミュニケーション
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row gap-6 md:gap-12 text-center md:text-left">
            <div>
              <h4 className="font-medium mb-2">Serviços</h4>
              <ul className="space-y-1 text-sm text-gray-400">
                <li><a href="#servicos" className="hover:text-inove-green">Fachadas Comerciais</a></li>
                <li><a href="#servicos" className="hover:text-inove-green">Letras-Caixa</a></li>
                <li><a href="#servicos" className="hover:text-inove-green">Placas Corporativas</a></li>
                <li><a href="#servicos" className="hover:text-inove-green">Adesivos</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-medium mb-2">Links Úteis</h4>
              <ul className="space-y-1 text-sm text-gray-400">
                <li><a href="#portfolio" className="hover:text-inove-green">Portfólio</a></li>
                <li><a href="#depoimentos" className="hover:text-inove-green">Depoimentos</a></li>
                <li><a href="#processo" className="hover:text-inove-green">Como Trabalhamos</a></li>
                <li><a href="#faq" className="hover:text-inove-green">FAQ</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-medium mb-2">Social</h4>
              <ul className="space-y-1 text-sm text-gray-400">
                <li>
                  <a 
                    href="https://www.instagram.com/inove_visual/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-inove-green"
                  >
                    Instagram
                  </a>
                </li>
                <li>
                  <a 
                    href="https://wa.me/SEU_NUMERO_DO_WHATSAPP" 
                    target="_blank"
                    rel="noopener noreferrer" 
                    className="hover:text-inove-green"
                  >
                    WhatsApp
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="mt-10 pt-6 border-t border-gray-800 text-center text-sm text-gray-500">
          <p>© {currentYear} Inove Comunicação Visual. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
