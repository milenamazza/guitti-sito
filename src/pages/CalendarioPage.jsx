
import React from "react";
import Section from "../components/ui/Section";
import Card from "../components/ui/Card";
import NeonButton from "../components/ui/NeonButton";
import { CalendarDays, MapPin } from "lucide-react";
import { glow } from "../lib/colors";

export default function CalendarioPage() {
  const eventi = [
    { data: "Sabato 20 Settembre 2025", ora: "21:00", luogo: "Teatro Comunale", evento: "Guitti!", tipo: "Spettacolo" },
    { data: "Domenica 5 Ottobre 2025", ora: "18:30", luogo: "Spazio Off", evento: "Notti al Neon", tipo: "Spettacolo" },
    { data: "Venerdì 17 Ottobre 2025", ora: "21:00", luogo: "Cortile Urbano", evento: "Senza Carrozzone", tipo: "Spettacolo" },
    { data: "Lunedì 3 Novembre 2025", ora: "19:00", luogo: "Sede GSC", evento: "Laboratorio Recitazione", tipo: "Corso" },
  ];

  return (
    <Section id="calendario" title="Calendario Eventi" kicker="Prossimi appuntamenti">
      <Card>
        <div className="space-y-4">
          {eventi.map((e,i)=>(
            <div key={i} className="flex flex-col sm:flex-row sm:items-center gap-4 py-4 border-b border-white/10 last:border-b-0">
              <div className="flex-1">
                <div className="flex items-center gap-2 text-sm text-gray-400 mb-1"><CalendarDays className="h-4 w-4" />{e.data} · {e.ora}</div>
                <div className="flex items-center gap-2 text-sm text-gray-400 mb-2"><MapPin className="h-4 w-4" />{e.luogo}</div>
                <h4 className="text-lg font-semibold text-white" style={glow()}>{e.evento}</h4>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-xs px-2 py-1 rounded-full border">{e.tipo}</span>
                <NeonButton href="#/contatti">Info/Biglietti</NeonButton>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </Section>
  );
}
