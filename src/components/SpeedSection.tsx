import React from 'react';
import { motion } from 'motion/react';
import { Rocket, Zap, Clock, ArrowRight, Activity } from 'lucide-react';

const SpeedSection = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-white">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="w-16 h-16 bg-kaspa/10 rounded-2xl flex items-center justify-center mb-6"
          >
            <Rocket className="w-8 h-8 text-kaspa" />
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold tracking-tight text-slate-900 mb-4"
          >
            Velocidade
          </motion.h2>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="h-1.5 bg-kaspa rounded-full"
          />
        </div>

        {/* First Part: BlockDAG */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative glass-card p-8 border-slate-100 bg-slate-50/50 shadow-none hover:shadow-none">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center">
                  <Activity className="w-6 h-6 text-kaspa" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">BlockDAG</h3>
              </div>
              <p className="text-slate-600 leading-relaxed text-lg">
                A estrutura BlockDag da Kaspa permite a formação de um grafo acíclico direcionado (Dag) de blocos, em vez de uma cadeia linear. 
                Isso resolve o problema dos blocos órfãos pois nenhum bloco é desperdiçado ou fica órfão. 
                Todos os blocos são publicados no livro-razão e nenhum poder de mineração é desperdiçado, permitindo uma geração frequente de blocos e alta escalabilidade.
              </p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex justify-center relative"
          >
            <div className="relative w-full max-w-lg aspect-square flex items-center justify-center overflow-hidden">
              <img 
                src="https://iili.io/qFXaSLX.png" 
                alt="BlockDAG Visualization" 
                className="w-full h-full object-contain"
                referrerPolicy="no-referrer"
              />
            </div>
          </motion.div>
        </div>

        {/* Second Part: 10 BPS */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:order-1 flex flex-col items-center lg:items-start"
          >
            <div className="relative w-full max-w-sm aspect-square flex flex-col items-center justify-center overflow-hidden">
              <img 
                src="https://iili.io/qFXGepf.png" 
                alt="10 BPS Visualization" 
                className="w-full h-full object-contain"
                referrerPolicy="no-referrer"
              />
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:order-2"
          >
            <div className="glass-card p-10 border-slate-100 bg-white shadow-none hover:shadow-none flex flex-col h-full max-h-[600px]">
              <div className="flex items-center gap-4 mb-8 shrink-0">
                <div className="w-12 h-12 bg-kaspa rounded-xl flex items-center justify-center shadow-lg shadow-kaspa/30">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-slate-900">10 BPS</h3>
              </div>
              
              <div className="space-y-6 text-slate-600 leading-relaxed overflow-y-auto pr-4 custom-scrollbar">
                <p>
                  Antes da atualização Crescendo (ativada em maio de 2025 via KIP-14), a mainnet da Kaspa operava a 1 BPS (bloco por segundo). 
                  A transição para 10 BPS (intervalo de 100 ms entre blocos) foi rigorosamente testada nas redes Testnet 10 e Testnet 11, 
                  que demonstraram estabilidade plena a 10 BPS — e até 32 BPS em cenários experimentais controlados.
                </p>
                <p>
                  Atualmente, a Kaspa processa 10 blocos novos por segundo, um contraste impressionante com blockchains tradicionais: 
                  Bitcoin (1 bloco a cada 10 minutos) ou Ethereum (1 bloco a cada 12 segundos). 
                  Com 10 BPS, a rede suporta centenas a milhares de TPS (transações por segundo) — com picos testados acima de 3.000–5.700 TPS em condições reais e de estresse.
                </p>
                <p>
                  As taxas permanecem extremamente baixas (frações de centavo, frequentemente &lt; $0.001), e as confirmações são quase instantâneas 
                  (subsegundo para inclusão, ~10 segundos para finalização plena). 
                  Essa combinação torna a Kaspa ideal para aplicações do dia a dia, como pagamentos em varejo e micropagamentos peer-to-peer em tempo real.
                </p>
                <p className="text-sm italic text-slate-400">
                  * A arquitetura BlockDAG permite que essa velocidade seja alcançada sem comprometer a segurança ou a descentralização, mantendo o modelo de consenso Nakamoto.
                </p>
              </div>

              <div className="mt-8 pt-8 border-t border-slate-100 flex items-center justify-between shrink-0">
                <div className="flex gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-kaspa">10</div>
                    <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Blocos/s</div>
                  </div>
                  <div className="w-px h-10 bg-slate-100" />
                  <div className="text-center">
                    <div className="text-2xl font-bold text-kaspa">3000+</div>
                    <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">TPS</div>
                  </div>
                </div>
                <button className="flex items-center gap-2 text-sm font-bold text-kaspa hover:text-kaspa-dark transition-colors">
                  Saiba mais <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default SpeedSection;
