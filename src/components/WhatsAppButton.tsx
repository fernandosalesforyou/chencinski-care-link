const WHATSAPP_URL = "https://wa.me/5511994404507";

interface WhatsAppButtonProps {
  children: React.ReactNode;
  className?: string;
  message?: string;
}

const WhatsAppButton = ({ children, className = "", message }: WhatsAppButtonProps) => {
  const url = message ? `${WHATSAPP_URL}?text=${encodeURIComponent(message)}` : WHATSAPP_URL;
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3.5 font-body font-semibold text-primary-foreground shadow-md transition-all hover:brightness-110 hover:shadow-lg active:scale-[0.98] ${className}`}
    >
      {children}
    </a>
  );
};

export default WhatsAppButton;
export { WHATSAPP_URL };
