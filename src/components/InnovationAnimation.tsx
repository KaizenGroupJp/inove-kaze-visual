
import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Sparkles, Zap, Wand } from "lucide-react";
import { Canvas } from "@react-three/fiber";
import { Text3D, OrbitControls, Center, PresentationControls } from "@react-three/drei";

// 3D Text Animation Component
const AnimatedText3D = () => {
  const [bounce, setBounce] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setBounce(prev => (prev + 1) % 100);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <directionalLight position={[-10, -10, -5]} intensity={0.5} color="#00ff00" />
      <PresentationControls
        global
        config={{ mass: 2, tension: 500 }}
        snap={{ mass: 4, tension: 1500 }}
        rotation={[0, 0, 0]}
        polar={[-Math.PI / 3, Math.PI / 3]}
        azimuth={[-Math.PI / 1.4, Math.PI / 2]}
      >
        <Center>
          <group>
            {["I", "N", "O", "V", "E"].map((letter, i) => (
              <Text3D
                key={i}
                font="/fonts/helvetiker_bold.typeface.json"
                size={1.5}
                height={0.2}
                position={[i * 2 - 4, 0, 0 + Math.sin((bounce + i * 10) / 10) * 0.3]}
                rotation={[Math.sin((bounce + i * 10) / 15) * 0.1, 0, 0]}
              >
                {letter}
                <meshStandardMaterial color="#97C847" />
              </Text3D>
            ))}
          </group>
        </Center>
      </PresentationControls>
    </>
  );
};

const InnovationAnimation = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section 
      id="inovacao" 
      ref={sectionRef}
      className="py-20 bg-gradient-to-br from-black via-black to-inove-green/20"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            <span className="text-inove-green">Inovação</span> em Cada Projeto
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Transformamos ideias em comunicação visual impactante, 
            combinando criatividade, tecnologia e expertise para destacar sua marca no mercado.
          </p>
        </div>

        {/* 3D Text Animation Canvas */}
        <div 
          className={`w-full h-[300px] mb-16 transform transition-all duration-1000 ${
            isVisible ? "scale-100 opacity-100" : "scale-95 opacity-0"
          }`}
        >
          <Canvas camera={{ position: [0, 0, 10], fov: 50 }}>
            <AnimatedText3D />
          </Canvas>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Animated Innovation Elements */}
          <div 
            className={`bg-black/50 p-8 rounded-lg border border-inove-green/30 transform transition-all duration-700 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
            }`}
            style={{ transitionDelay: "100ms" }}
          >
            <div className="h-16 w-16 bg-inove-green/20 rounded-full flex items-center justify-center mb-6 mx-auto">
              <Sparkles className="h-8 w-8 text-inove-green animate-pulse" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-3 text-center">Design Criativo</h3>
            <p className="text-gray-300 text-center">
              Criamos designs únicos que capturam a essência da sua marca e 
              transmitem sua mensagem de forma eficaz e memorável.
            </p>
          </div>

          <div 
            className={`bg-black/50 p-8 rounded-lg border border-inove-green/30 transform transition-all duration-700 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
            }`}
            style={{ transitionDelay: "300ms" }}
          >
            <div className="h-16 w-16 bg-inove-green/20 rounded-full flex items-center justify-center mb-6 mx-auto">
              <Zap className="h-8 w-8 text-inove-green animate-pulse" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-3 text-center">Tecnologia Avançada</h3>
            <p className="text-gray-300 text-center">
              Utilizamos equipamentos de última geração e materiais inovadores para 
              garantir a qualidade excepcional em todos os nossos projetos.
            </p>
          </div>

          <div 
            className={`bg-black/50 p-8 rounded-lg border border-inove-green/30 transform transition-all duration-700 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
            }`}
            style={{ transitionDelay: "500ms" }}
          >
            <div className="h-16 w-16 bg-inove-green/20 rounded-full flex items-center justify-center mb-6 mx-auto">
              <Wand className="h-8 w-8 text-inove-green animate-pulse" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-3 text-center">Soluções Personalizadas</h3>
            <p className="text-gray-300 text-center">
              Desenvolvemos soluções sob medida para cada cliente, considerando suas 
              necessidades específicas, espaço e objetivos de comunicação.
            </p>
          </div>
        </div>

        {/* Animated Innovation Showcase */}
        <div 
          className={`relative bg-black rounded-xl overflow-hidden shadow-xl mb-12 transform transition-all duration-1000 ${
            isVisible ? "scale-100 opacity-100" : "scale-95 opacity-0"
          }`}
        >
          <div className="aspect-w-16 aspect-h-9">
            <img
              src="https://images.unsplash.com/photo-1626785774573-4b799315345d?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80"
              alt="Processo criativo de design"
              className="object-cover w-full h-full"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent flex items-center">
              <div className="px-8 md:px-16 max-w-2xl">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  Transformando <span className="text-inove-green">Visões</span> em Realidade
                </h3>
                <p className="text-gray-200 mb-6">
                  Nossa equipe combina expertise técnica com visão artística para 
                  criar soluções de comunicação visual que não apenas atraem, mas 
                  convertem visitantes em clientes.
                </p>
                <div className="flex flex-wrap gap-4">
                  <span className="bg-inove-green/20 text-inove-green px-3 py-1 rounded-full text-sm font-medium animate-pulse">
                    Tecnologia de ponta
                  </span>
                  <span className="bg-inove-green/20 text-inove-green px-3 py-1 rounded-full text-sm font-medium animate-pulse" style={{animationDelay: "0.5s"}}>
                    Criatividade sem limites
                  </span>
                  <span className="bg-inove-green/20 text-inove-green px-3 py-1 rounded-full text-sm font-medium animate-pulse" style={{animationDelay: "1s"}}>
                    Resultados excepcionais
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <Button 
            size="lg"
            className={`bg-inove-green hover:bg-inove-green/90 text-black font-semibold transition-all duration-700 transform ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
            onClick={() => window.open("https://wa.me/SEU_NUMERO_DO_WHATSAPP", "_blank")}
          >
            Inove Seu Negócio Hoje
          </Button>
        </div>
      </div>
    </section>
  );
};

export default InnovationAnimation;
