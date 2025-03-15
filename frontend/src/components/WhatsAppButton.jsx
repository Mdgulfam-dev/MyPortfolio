import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  const whatsappNumber = "9190001402531"; // Replace with your actual WhatsApp number

  return (
    <a
      href={`https://wa.me/${whatsappNumber}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 md:bottom-8 md:right-8 bg-green-500 text-white p-4 md:p-5 rounded-full shadow-lg 
      hover:scale-110 hover:shadow-green-400/50 transition-all duration-300 flex items-center justify-center 
      animate-pulse"
    >
      <MessageCircle size={30} className="drop-shadow-md" />
    </a>
  );
};

export default WhatsAppButton;
