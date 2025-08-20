
import React from "react";
import Section from "../components/ui/Section";
import Card from "../components/ui/Card";
import NeonButton from "../components/ui/NeonButton";
import { glow } from "../lib/colors";

export default function LaboratoriPage() {
  const labs = [
    { titolo: "Recitazione Base", testo: "Percorso per chi si avvicina al teatro...", meta: [["Durata","12 settimane"],["Frequenza","1x settimana"],["Partecipanti","Max 15"],["Costo","€180"]] },
    { titolo: "Drammaturgia Creativa", testo: "Scrittura per la scena...", meta: [["Durata","10 settimane"],["Frequenza","1x settimana"],["Partecipanti","Max 12"],["Costo","€200"]] },
    { titolo: "Teatro Fisico", testo: "Esplorazione del corpo...", meta: [["Durata","8 settimane"],["Frequenza","2x settimana"],["Partecipanti","Max 10"],["Costo","€160"]] },
    { titolo: "Workshop Intensivi", testo: "Seminari con artisti ospiti...", meta: [["Durata","Weekend"],["Frequenza","Mensile"],["Partecipanti","Variabile"],["Costo","€50–80"]] },
  ];

  return (
    <Section id="laboratori" title="I Nostri Laboratori" kicker="Formazione teatrale">
      <div className="grid md:grid-cols-2 gap-8">
        {labs.map(l=>(
          <Card key={l.titolo}>
            <h3 className="text-2xl font-bold text-white" style={glow()}>{l.titolo}</h3>
            <p className="mt-4 text-gray-300">{l.testo}</p>
            <div className="mt-6 space-y-2 text-sm text-gray-400">{l.meta.map(([k,v])=> <p key={k}><strong>{k}:</strong> {v}</p>)}</div>
            <div className="mt-6"><NeonButton href="#/contatti">Iscriviti ora</NeonButton></div>
          </Card>
        ))}
      </div>
    </Section>
  );
}
