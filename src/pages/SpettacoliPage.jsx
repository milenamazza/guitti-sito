
import React from "react";
import Section from "../components/ui/Section";
import Card from "../components/ui/Card";
import NeonButton from "../components/ui/NeonButton";
import { glow, borderGlow, colors } from "../lib/colors";

export default function SpettacoliPage() {
  const data = [
    { titolo: "Notti al Neon", img: "/images/repertorio-1.jpg", desc: "Un viaggio urbano...", meta: [["Durata","90 min"],["Cast","4 attori"],["Genere","Dramma"]] },
    { titolo: "Guitti!", img: "/images/repertorio-2.jpg", desc: "Commedia fisica...", meta: [["Durata","75 min"],["Cast","6 attori"],["Genere","Commedia"]] },
    { titolo: "Senza Carrozzone", img: "/images/repertorio-3.jpg", desc: "Teatro partecipato...", meta: [["Durata","60–120 min"],["Cast","Attori + pubblico"],["Genere","Partecipato"]] },
  ];

  return (
    <Section id="spettacoli-page" title="I Nostri Spettacoli" kicker="Repertorio completo">
      <div className="space-y-8">
        {data.map((s,i)=>(
          <Card key={s.titolo}>
            <div className="grid md:grid-cols-3 gap-6">
              <img src={s.img} alt={`${s.titolo} – locandina`} className="aspect-[4/3] w-full rounded-xl border object-cover" style={{ borderColor: `${colors.red}80`, ...borderGlow() }} />
              <div className="md:col-span-2">
                <h3 className="text-2xl font-bold text-white" style={glow()}>{s.titolo}</h3>
                <p className="text-gray-300 mt-2">{s.desc}</p>
                <div className="mt-4 space-y-2 text-sm text-gray-400">{s.meta.map(([k,v])=> <p key={k}><strong>{k}:</strong> {v}</p>)}</div>
                <div className="mt-6"><NeonButton href="#/calendario">Prenota</NeonButton></div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
}
