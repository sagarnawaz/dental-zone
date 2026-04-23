import { whatsappHref } from "@/data/site";

export default function FloatingWhatsApp() {
  return (
    <a
      href={whatsappHref}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-5 right-5 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25d366] text-white shadow-[0_16px_40px_rgba(37,211,102,0.32)] transition duration-200 hover:scale-105"
    >
      <WhatsAppIcon />
    </a>
  );
}

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="size-7" aria-hidden="true">
      <path d="M12 4a8 8 0 0 0-6.9 12l-1 4 4.1-1A8 8 0 1 0 12 4Zm0 14.5c-1.3 0-2.5-.3-3.6-1l-.3-.1-2.4.6.6-2.3-.2-.3A6.6 6.6 0 1 1 12 18.5Zm3.6-4.9c-.2-.1-1.2-.6-1.4-.6s-.3-.1-.5.1-.6.6-.7.7-.3.2-.5.1a5.4 5.4 0 0 1-1.6-1 6 6 0 0 1-1.1-1.4c-.1-.2 0-.3.1-.5l.3-.4.2-.4c.1-.1 0-.3 0-.4l-.6-1.5c-.2-.4-.3-.4-.5-.4h-.4c-.1 0-.4 0-.6.2s-.8.8-.8 1.8.8 2 1 2.2a8.8 8.8 0 0 0 3.4 3c.4.2.8.4 1 .4.4.1.8.1 1.1.1.3 0 1.1-.4 1.3-.8s.2-.8.2-.8-.1-.1-.3-.2Z" />
    </svg>
  );
}
