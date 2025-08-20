
import React from "react";
import Section from "../components/ui/Section";
import Card from "../components/ui/Card";
import NeonButton from "../components/ui/NeonButton";
import { MessageCircle, MapPin, Mail, Phone } from "lucide-react";
import { glow, colors, borderGlow } from "../lib/colors";

export default function ContattiPage() {
  return (
    <Section id="contatti" title="Contattaci" kicker="Scrivici o vieni a trovarci">
      <div className="grid md:grid-cols-2 gap-8">
        <Card>
          <form className="grid gap-4" onSubmit={(e)=>e.preventDefault()}>
            <div>
              <label className="text-sm text-gray-300 block mb-1">Nome *</label>
              <input className="w-full rounded-xl bg-black/40 border px-3 py-2 text-white placeholder:text-gray-500 focus:outline-none focus:ring-2" placeholder="Il tuo nome" style={{ borderColor: `${colors.red}55` }} required />
            </div>
            <div>
              <label className="text-sm text-gray-300 block mb-1">Email *</label>
              <input type="email" className="w-full rounded-xl bg-black/40 border px-3 py-2 text-white placeholder:text-gray-500 focus:outline-none focus:ring-2" placeholder="tu@esempio.it" style={{ borderColor: `${colors.red}55` }} required />
            </div>
            <div>
              <label className="text-sm text-gray-300 block mb-1">Telefono</label>
              <input type="tel" className="w-full rounded-xl bg-black/40 border px-3 py-2 text-white placeholder:text-gray-500 focus:outline-none focus:ring-2" placeholder="+39 000 000 0000" style={{ borderColor: `${colors.red}55` }} />
            </div>
            <div>
              <label className="text-sm text-gray-300 block mb-1">Messaggio *</label>
              <textarea rows={5} className="w-full rounded-xl bg-black/40 border px-3 py-2 text-white placeholder:text-gray-500 focus:outline-none focus:ring-2" placeholder="Raccontaci cosa ti serve..." style={{ borderColor: `${colors.red}55` }} required />
            </div>
            <div>
              <NeonButton><MessageCircle className="h-5 w-5" /> Invia messaggio</NeonButton>
            </div>
          </form>
        </Card>

        <Card>
          <h3 className="text-lg font-semibold mb-6" style={glow()}>Come raggiungerci</h3>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <MapPin className="h-5 w-5 mt-1" style={{ color: colors.red }} />
              <div>
                <p className="text-white font-medium">Sede principale</p>
                <p className="text-sm text-gray-300">Via del Teatro 1<br/>00000 Città (Provincia)</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Mail className="h-5 w-5 mt-1" style={{ color: colors.red }} />
              <div>
                <p className="text-white font-medium">Email</p>
                <p className="text-sm text-gray-300">info@gsc.it</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Phone className="h-5 w-5 mt-1" style={{ color: colors.red }} />
              <div>
                <p className="text-white font-medium">Telefono</p>
                <p className="text-sm text-gray-300">+39 000 000 0000</p>
              </div>
            </div>
          </div>

          <div className="mt-6 aspect-[16/9] w-full rounded-2xl border overflow-hidden" style={{ borderColor: `${colors.red}55`, background: `linear-gradient(135deg, ${colors.red}11, transparent 60%)`, ...borderGlow() }}>
            <iframe title="Mappa" src="https://www.openstreetmap.org/export/embed.html?bbox=12.4923%2C41.8902%2C12.4963%2C41.8922&layer=mapnik" className="w-full h-full" />
          </div>
          <p className="text-xs text-gray-400 mt-2">Mappa della sede</p>
        </Card>
      </div>
    </Section>
  );
}
