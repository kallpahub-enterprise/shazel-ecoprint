"use client"

import { MessageCircle } from "lucide-react"

export function WhatsAppButton() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2">
      <span className="bg-background text-foreground text-xs font-medium px-3 py-1.5 rounded-lg shadow-md whitespace-nowrap">
        Cotizaciones Rápidas
      </span>
      <a
        href="https://walink.co/06b0a0"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contactar por WhatsApp - Cotizaciones Rápidas"
        className="flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-lg hover:scale-110 transition-transform duration-200 hover:shadow-xl"
      >
        <MessageCircle size={28} fill="white" />
      </a>
    </div>
  )
}
