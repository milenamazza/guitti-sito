
import React from "react";
import Section from "../components/ui/Section";
import Card from "../components/ui/Card";
import NeonButton from "../components/ui/NeonButton";
import { glow, borderGlow, colors } from "../lib/colors";
import { CalendarDays, Star, MapPin } from "lucide-react";

function Hero() {
  return (
    <div className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10" aria-hidden="true">
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 h-[600px] w-[1200px] rounded-full blur-3xl opacity-60 animate-pulse"
          style={{ background: `radial-gradient(closest-side, ${colors.red}40, transparent 70%)` }} />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,_rgba(255,31,75,0.08),_transparent_35%),radial-gradient(circle_at_80%_20%,_rgba(255,31,75,0.06),_transparent_40%)]" />
      </div>

      <div className="mx-auto max-w-6xl px-4 sm:px-8 pt-28 pb-20 grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-white" style={glow()}>Guitti Senza Carrozzone</h1>
          <p className="mt-5 max-w-2xl text-lg text-gray-200">Associazione teatrale indipendente: spettacoli, laboratori e rassegne che accendono la città.</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <NeonButton href="#/spettacoli">Scopri gli spettacoli</NeonButton>
            <NeonButton href="#/calendario"><CalendarDays className="h-5 w-5" /> Calendario</NeonButton>
          </div>
        </div>
        <div className="relative">
          <img src="/images/hero.jpg" alt="Guitti – scena" className="w-full h-auto rounded-3xl border object-cover shadow-2xl animate-[float_6s_ease-in-out_infinite]" style={{ borderColor: `${colors.red}55`, ...borderGlow() }}
            onError={(e)=>{ e.currentTarget.outerHTML = `<div style=\"height:320px;border-radius:24px;border:1px solid ${colors.red}55;box-shadow:0 0 12px ${colors.red}40,inset 0 0 12px ${colors.red}20;background:radial-gradient(100%_120%_at_50%_0%, ${colors.red}22, transparent 70%)\"></div>`; }} />
          <style>{`@keyframes float { 0%,100%{ transform: translateY(0) } 50%{ transform: translateY(-6px) } }`}</style>
        </div>
      </div>
    </div>
  );
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <Section id="chi-siamo" title="Chi siamo" kicker="La compagnia">
        <div className="grid md:grid-cols-2 gap-8">
          <Card>
            <p className="text-gray-200 leading-relaxed">Siamo un'associazione teatrale che unisce attori, registi e tecnici.</p>
            <ul className="mt-6 space-y-2 text-sm text-gray-300">
              <li className="flex items-center gap-2"><Star className="h-4 w-4" /> Produzioni originali</li>
              <li className="flex items-center gap-2"><Star className="h-4 w-4" /> Formazione aperta</li>
              <li className="flex items-center gap-2"><Star className="h-4 w-4" /> Rete con realtà locali</li>
            </ul>
          </Card>
          <Card>
            <img src="/images/chi-siamo.jpg" alt="Prove in sala" className="w-full aspect-[16/10] object-cover rounded-2xl border" style={{ borderColor: `${colors.red}55`, ...borderGlow() }}
              onError={(e)=>{ e.currentTarget.outerHTML = `<div style=\"height:100%;border-radius:16px;border:1px solid ${colors.red}55;box-shadow:inset 0 0 12px ${colors.red}20;background:radial-gradient(100%_120%_at_50%_0%, ${colors.red}22, transparent 70%)\"></div>`; }} />
            <p className="mt-4 text-sm text-gray-300">Uno scatto dalle prove di "Senza Carrozzone".</p>
          </Card>
        </div>
      </Section>

      <Section id="spettacoli" title="Spettacoli in evidenza" kicker="In scena">
        <div className="grid md:grid-cols-3 gap-6">
          {["Notti al Neon","Guitti!","Senza Carrozzone"].map((titolo, idx) => (
            <Card key={titolo} className="group">
              <div className="h-24 w-24 rounded-xl mb-4 border bg-cover bg-center transition-transform group-hover:rotate-1 group-hover:scale-105"
                style={{ borderColor: `${colors.red}80`, ...borderGlow(), backgroundImage: `url(/images/spettacolo-${idx+1}.jpg)` }} />
              <h3 className="text-xl font-bold text-white" style={glow()}>{titolo}</h3>
              <p className="mt-2 text-sm text-gray-300">{idx===0?"Viaggio urbano.":idx===1?"Commedia fisica corale.":"Teatro partecipato."}</p>
              <div className="mt-4 flex gap-3">
                <NeonButton href="#/calendario">Biglietti</NeonButton>
              </div>
            </Card>
          ))}
        </div>
      </Section>
    </>
  );
}
