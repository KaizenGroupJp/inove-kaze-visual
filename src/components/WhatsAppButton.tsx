
import { MessageSquare } from "lucide-react";

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/SEU_NUMERO_DO_WHATSAPP"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-inove-green hover:bg-inove-green/90 text-black w-16 h-16 flex items-center justify-center rounded-full shadow-lg transition-transform hover:scale-110"
      aria-label="Entre em contato pelo WhatsApp"
    >
      <MessageSquare className="h-8 w-8" />
    </a>
  );
};

export default WhatsAppButton;
