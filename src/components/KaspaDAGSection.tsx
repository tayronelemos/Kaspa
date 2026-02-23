import React, { useState } from "react";
import { Loader2, RefreshCw } from "lucide-react";

export default function KaspaDAGSection() {
  const [isLoading, setIsLoading] = useState(true);
  const [iframeKey, setIframeKey] = useState(0);
  const isMobile = typeof window !== "undefined" ? window.innerWidth < 640 : false;
  const targetH = isMobile ? 340 : 490;

  const handleRefresh = () => {
    setIsLoading(true);
    setIframeKey(prev => prev + 1);
  };

  return (
    <section className="w-full py-20 relative overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-kaspa/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="mx-auto max-w-7xl px-6 relative z-10">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between mb-12">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-kaspa/10 border border-kaspa/20 text-kaspa text-[10px] font-bold uppercase tracking-widest mb-4">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-kaspa opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-kaspa"></span>
              </span>
              Live Network Status
            </div>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-slate-900 mb-4">
              Explorador <span className="text-kaspa">BlockDAG</span>
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              Visualize a arquitetura revolucionária da Kaspa em tempo real. 
              Diferente de blockchains tradicionais, o BlockDAG permite que blocos coexistam e sejam processados em paralelo.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={handleRefresh}
              className="inline-flex items-center justify-center rounded-full px-6 py-4 text-sm font-bold
                         bg-white border border-slate-200 text-slate-600 hover:bg-slate-50 transition-all shadow-sm group"
            >
              <RefreshCw className={`mr-2 w-4 h-4 ${isLoading ? 'animate-spin' : 'group-hover:rotate-180 transition-transform duration-500'}`} />
              Recarregar
            </button>
            <a
              href="https://kgi.kaspad.net/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full px-8 py-4 text-sm font-bold
                         bg-kaspa text-white hover:bg-kaspa-dark transition-all shadow-xl shadow-kaspa/20 group"
            >
              Abrir em Tela Cheia
              <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
        </div>

        <div className="relative group">
          {/* Decorative frame */}
          <div className="absolute -inset-1 bg-gradient-to-r from-kaspa/20 via-emerald-500/10 to-kaspa/20 rounded-[2.5rem] blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
          
          <div className="relative glass-card overflow-hidden border-slate-200/60 shadow-2xl rounded-[2rem]">
            <div className="relative w-full bg-[#0a0a0a]" style={{ height: targetH }}>
              {isLoading && (
                <div className="absolute inset-0 z-30 flex flex-col items-center justify-center bg-[#0a0a0a]">
                  <Loader2 className="w-10 h-10 text-kaspa animate-spin mb-4" />
                  <p className="text-slate-400 text-sm font-medium animate-pulse">Carregando BlockDAG...</p>
                </div>
              )}
              
              <iframe 
                key={iframeKey}
                src="https://kgi.kaspad.net/" 
                onLoad={() => setIsLoading(false)}
                className={`absolute inset-0 w-full h-full border-0 transition-opacity duration-1000 ${isLoading ? 'opacity-0' : 'opacity-100'}`}
                style={{ 
                  filter: 'hue-rotate(-40deg) saturate(0.9) brightness(1.1)',
                }}
                title="Kaspa Graph Inspector"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              />
              
              {/* Color Mask Overlay */}
              <div 
                className="pointer-events-none absolute inset-0 z-10 opacity-[0.15] mix-blend-color"
                style={{ backgroundColor: '#70c7ba' }}
              />

              {/* Subtle gradient overlay to blend edges */}
              <div className="pointer-events-none absolute inset-0 z-20 ring-1 ring-inset ring-white/10 rounded-[2rem]" />
            </div>
          </div>
        </div>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6">
          {[
            { label: 'Estrutura', value: 'PHANTOM GHOSTDAG' },
            { label: 'Visualização', value: 'Grafo Acíclico Dirigido' },
            { label: 'Dados', value: 'Tempo Real (Mainnet)' }
          ].map((stat, i) => (
            <div key={i} className="flex flex-col items-center p-6 rounded-3xl bg-white/40 border border-white/60 backdrop-blur-sm">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">{stat.label}</span>
              <span className="text-sm font-bold text-slate-700">{stat.value}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
