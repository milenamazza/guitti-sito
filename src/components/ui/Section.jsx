
import React from "react";
import { glow } from "../../lib/colors";

export default function Section({ id, title, kicker, children }) {
  return (
    <section id={id} className="relative py-20 px-4 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10">
          {kicker && <p className="uppercase tracking-[0.2em] text-xs text-gray-300/70 mb-2">{kicker}</p>}
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white" style={glow()}>{title}</h2>
        </div>
        {children}
      </div>
    </section>
  );
}
