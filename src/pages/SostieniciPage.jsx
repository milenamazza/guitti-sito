
import React from "react";
import Section from "../components/ui/Section";
import Card from "../components/ui/Card";
import NeonButton from "../components/ui/NeonButton";
import { glow, colors } from "../lib/colors";
import { Star } from "lucide-react";

export default function SostieniciPage() {
  return (
    <Section id="sostienici" title="Sostieni GSC" kicker="Partecipa al progetto">
      <div className="space-y-8">
        <div className="grid md:grid-cols-2 gap-8">
          <Card>
            <h3 className="text-2xl font-bold mb-4" style={glow()}>Diventa Socio/a</h3>
            <p className="text-gray-300 mb-6">Unisciti alla nostra comunità teatrale! Tessera annuale con vantaggi esclusivi.</p>
            <div className="space-y-3 text-sm text-gray-300 mb-6">
              {["Prevendite riservate", "Sconto laboratori", "Newsletter esclusiva", "Incontri con artisti"].map(v => (
                <div key={v} className="flex items-center gap-2"><Star className="h-4 w-4" style={{ color: colors.red }} />{v}</div>
              ))}
            </div>
            <p className="text-lg font-semibold text-white mb-4">Tessera annuale: €30</p>
            <NeonButton href="#/contatti">Diventa socio/a</NeonButton>
          </Card>

          <Card>
            <h3 className="text-2xl font-bold mb-4" style={glow()}>5×1000</h3>
            <p className="text-gray-300 mb-6">Indica il nostro codice fiscale nella dichiarazione dei redditi.</p>
            <div className="bg-black/30 rounded-xl p-4 border mb-6" style={{ borderColor: `${colors.red}30` }}>
              <p className="text-center text-lg font-mono" style={{ color: colors.red }}>00000000000</p>
              <p className="text-center text-xs text-gray-400 mt-1">Codice Fiscale GSC</p>
            </div>
            <NeonButton href="#/contatti">Scopri come fare</NeonButton>
          </Card>
        </div>

        <Card>
          <h3 className="text-2xl font-bold mb-4" style={glow()}>Donazione Libera</h3>
          <div className="grid sm:grid-cols-3 gap-4">
            {[25,50,100].map(n => <NeonButton key={n}>Dona €{n}</NeonButton>)}
          </div>
        </Card>
      </div>
    </Section>
  );
}
