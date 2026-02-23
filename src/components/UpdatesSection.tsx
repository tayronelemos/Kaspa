import React from 'react';
import { motion } from 'motion/react';
import { 
  RefreshCw, 
  Shield, 
  Zap, 
  Cpu, 
  Layers, 
  Lock, 
  Share2, 
  Activity,
  ChevronRight,
  Info,
  Globe,
  Network
} from 'lucide-react';

const UpdatesSection: React.FC = () => {
  return (
    <section id="updates" className="py-24 relative overflow-hidden">
      {/* Background Gradient - Soft Kaspa Green */}
      <div className="absolute inset-0 bg-gradient-to-b from-kaspa/5 via-white to-kaspa/5 -z-10" />
      
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-24">
          <motion.div
            initial={{ rotate: 0 }}
            whileInView={{ rotate: 360 }}
            transition={{ duration: 2, ease: "easeInOut" }}
            className="w-16 h-16 bg-kaspa/10 rounded-2xl flex items-center justify-center mb-6 border border-kaspa/20"
          >
            <RefreshCw className="w-8 h-8 text-kaspa" />
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Atualizações</h2>
          <div className="w-20 h-1.5 bg-kaspa rounded-full" />
        </div>

        {/* DagKnight Section */}
        <div className="mb-32">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-slate-900 text-white rounded-full text-[10px] font-black uppercase tracking-widest mb-6">
                KIP-2 PROTOCOL
              </div>
              <h3 className="text-5xl font-bold text-slate-900 mb-8 tracking-tight">DagKnight</h3>
              <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
                <p>
                  O <span className="font-bold text-slate-900">DagKnight</span> (KIP-2) é um novo protocolo de consenso projetado para ser uma atualização do GhostDag. Foi escrito por Yonatan Sompolinsky e Michael Sutton, que também são os autores do Ghostdag.
                </p>
                <p>
                  O DagKnight funciona usando um mecanismo chamado <span className="text-kaspa font-bold">k-clusters</span>, que são grupos de blocos amostrados do BlockDAG com base em seu nível de conectividade.
                </p>
                <p>
                  Ao avaliar k-clusters, o DagKnight pode selecionar um cluster com o maior atraso de rede que cubra 50% de rede e ajustar as confirmações de bloco de acordo para combater um ataque.
                </p>
                <p>
                  Dessa forma, o DagKnight pode atingir tempos de confirmação mais rápidos quando a rede está saudável e tempos de confirmação mais lentos quando a rede está lenta, ajustando-se dinamicamente.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative z-10 overflow-hidden">
                <div className="relative rounded-[2.5rem] overflow-hidden min-h-[260px]">
                  <img 
                    src="https://iili.io/qFXTbUB.png" 
                    alt="DagKnight Visual" 
                    className="w-full h-full object-cover transition-all duration-1000"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-kaspa/40 via-transparent to-transparent pointer-events-none" />
                  
                  <div className="absolute bottom-6 left-6 right-6">
                    <motion.div 
                      initial={{ y: 20, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.5 }}
                      className="p-6 bg-white/90 backdrop-blur-xl rounded-2xl shadow-xl"
                    >
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-2 h-2 bg-kaspa rounded-full animate-pulse" />
                        <span className="text-[10px] font-black text-kaspa uppercase tracking-widest">NEXT-GEN CONSENSUS</span>
                      </div>
                      <p className="text-base font-bold text-slate-900 leading-tight">
                        Evolução do GhostDag para máxima eficiência e segurança adaptativa.
                      </p>
                    </motion.div>
                  </div>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-8 -right-8 w-48 h-48 bg-kaspa/10 rounded-full blur-3xl -z-10" />
              <div className="absolute -bottom-8 -left-8 w-48 h-48 bg-kaspa/20 rounded-full blur-3xl -z-10" />
            </motion.div>
          </div>

          {/* Advantages Grid - Reorganized */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-slate-900 rounded-[3rem] p-8 md:p-12 border border-white/10 overflow-hidden relative"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-kaspa/10 blur-3xl rounded-full -translate-y-1/2 translate-x-1/2" />
            
            <h4 className="text-xs font-black text-kaspa uppercase tracking-[0.3em] mb-10 text-center relative z-10">
              Vantagens Adicionais do DagKnight
            </h4>
            <div className="grid md:grid-cols-2 gap-8 relative z-10">
              <div className="flex flex-col sm:flex-row gap-6 p-8 bg-white/5 rounded-3xl border border-white/10 hover:border-kaspa/30 transition-all group">
                <div className="shrink-0 w-14 h-14 bg-kaspa/10 rounded-2xl flex items-center justify-center text-kaspa group-hover:bg-kaspa group-hover:text-white transition-colors">
                  <Shield className="w-7 h-7" />
                </div>
                <div>
                  <h5 className="font-bold text-white text-lg mb-2">Tolerância de 50%</h5>
                  <p className="text-sm text-slate-400 leading-relaxed">
                    Mantém uma tolerância bizantina de 50%, o que significa que pode resistir a ataques de nós maliciosos que controlam até metade do poder de hash.
                  </p>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-6 p-8 bg-white/5 rounded-3xl border border-white/10 hover:border-kaspa/30 transition-all group">
                <div className="shrink-0 w-14 h-14 bg-kaspa/10 rounded-2xl flex items-center justify-center text-kaspa group-hover:bg-kaspa group-hover:text-white transition-colors">
                  <Activity className="w-7 h-7" />
                </div>
                <div>
                  <h5 className="font-bold text-white text-lg mb-2">Escala Intrínseca</h5>
                  <p className="text-sm text-slate-400 leading-relaxed">
                    Ele escala intrinsicamente conforme a velocidade da internet aumenta, acelerando o tempo de confirmação conforme as condições da rede melhoram.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* vProgs Section */}
        <div className="bg-slate-900 rounded-[4rem] p-8 md:p-16 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-kaspa/20 to-transparent pointer-events-none" />
          
          <div className="grid lg:grid-cols-2 gap-16 items-center relative z-10">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-kaspa rounded-full text-white text-[10px] font-black uppercase tracking-widest mb-6">
                Smart Contract Layer
              </div>
              <h3 className="text-4xl font-bold mb-6">vProgs</h3>
              <div className="space-y-6 text-lg opacity-80 leading-relaxed">
                <p>
                  <span className="text-kaspa font-bold">vProgs</span> são uma arquitetura inovadora para executar lógica complexa e smart contracts-like de forma off-chain (fora da cadeia principal), mas com verificação on-chain (na L1 Kaspa) usando provas de conhecimento zero (ZK).
                </p>
                <p>
                  Cada vProg é um "programa soberano" autônomo que gerencia seu próprio estado, contas, regras de transição e "gas" (ScopeGas para limitar recursos). Diferente de blockchains como Ethereum (execução on-chain pesada) ou Solana (execução on-chain de alto throughput que pode centralizar), ou rollups L2 (com bridges e fragmentação), os vProgs mantêm a Kaspa leve e focada em settlement rápido:
                </p>
                <div className="p-6 bg-white/5 rounded-2xl border border-white/10">
                  <p className="mb-4">A computação pesada roda off-chain (em ambientes zkVM ou similares). O resultado é comprovado por uma prova ZK (ex: Groth16 ou STARKs) submetida em uma transação Kaspa.</p>
                  <p className="text-kaspa font-bold">Nós da rede verificam a prova (rápido e barato) e aceitam a atualização de estado se válida.</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="flex justify-center"
            >
              <div className="relative group">
                <div className="absolute inset-0 bg-kaspa rounded-full blur-[100px] opacity-20 group-hover:opacity-40 transition-opacity" />
                
                <div className="relative w-72 h-72 md:w-96 md:h-96 flex items-center justify-center">
                  {/* Main Rotating Gear */}
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0 text-kaspa/10"
                  >
                    <svg viewBox="0 0 100 100" className="w-full h-full fill-current">
                      <path d="M50 15 A 35 35 0 1 0 50 85 A 35 35 0 1 0 50 15 Z M50 28 A 22 22 0 1 1 50 72 A 22 22 0 1 1 50 28 Z" />
                      {[...Array(12)].map((_, i) => (
                        <rect 
                          key={i}
                          x="44" y="2" width="12" height="15" 
                          rx="3"
                          transform={`rotate(${i * 30} 50 50)`}
                        />
                      ))}
                    </svg>
                  </motion.div>

                  {/* Secondary Smaller Gear */}
                  <motion.div
                    animate={{ rotate: -360 }}
                    transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                    className="absolute -top-4 -right-4 w-32 h-32 text-kaspa/5"
                  >
                    <svg viewBox="0 0 100 100" className="w-full h-full fill-current">
                      <path d="M50 20 A 30 30 0 1 0 50 80 A 30 30 0 1 0 50 20 Z M50 35 A 15 15 0 1 1 50 65 A 15 15 0 1 1 50 35 Z" />
                      {[...Array(8)].map((_, i) => (
                        <rect 
                          key={i}
                          x="45" y="5" width="10" height="12" 
                          rx="2"
                          transform={`rotate(${i * 45} 50 50)`}
                        />
                      ))}
                    </svg>
                  </motion.div>

                  {/* Static Center Logo */}
                  <div className="relative z-10 w-40 h-40 md:w-56 md:h-56 rounded-full bg-gradient-to-br from-slate-800 to-slate-900 border border-white/10 flex items-center justify-center shadow-2xl overflow-hidden">
                    <img 
                      src="https://iili.io/qFWrvnt.png" 
                      alt="Kaspa Logo" 
                      className="w-2/3 h-2/3 object-contain"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-kaspa/5 mix-blend-overlay" />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Technical Components Section - Full Width for better space utilization */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-20 p-10 bg-white/5 rounded-[3rem] border border-white/10 backdrop-blur-md relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-kaspa/50 to-transparent" />
            
            <h4 className="text-2xl font-bold mb-12 text-center text-white uppercase tracking-[0.2em]">
              Principais componentes técnicos:
            </h4>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { 
                  title: "Sovereignty", 
                  desc: "Cada vProg controla suas permissões de leitura/escrita, evitando interferências externas.",
                  icon: <Shield className="w-5 h-5" />
                },
                { 
                  title: "Composability síncrona", 
                  desc: "vProgs podem interagir atomicamente via proof stitching (junção de provas ZK de múltiplos vProgs).",
                  icon: <Share2 className="w-5 h-5" />
                },
                { 
                  title: "Computation DAG", 
                  desc: "Gerencia dependências entre computações, preservando paralelismo e ordem sem serialização global.",
                  icon: <Cpu className="w-5 h-5" />
                },
                { 
                  title: "ScopeGas", 
                  desc: "Limita recursos por vProg para evitar bloat e spam, garantindo sustentabilidade da rede.",
                  icon: <Zap className="w-5 h-5" />
                }
              ].map((item, i) => (
                <div key={i} className="p-6 bg-slate-800/50 rounded-2xl border border-white/5 hover:border-kaspa/30 transition-all group">
                  <div className="w-10 h-10 bg-kaspa/10 rounded-xl flex items-center justify-center text-kaspa mb-4 group-hover:bg-kaspa group-hover:text-white transition-colors">
                    {item.icon}
                  </div>
                  <h5 className="font-bold text-white text-base mb-3 group-hover:text-kaspa transition-colors">{item.title}</h5>
                  <p className="text-sm text-slate-400 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Impact Cards */}
          <div className="mt-24 relative z-10">
            <h4 className="text-xl font-bold mb-12 text-center text-slate-400 uppercase tracking-widest">
              Impactos principais:
            </h4>
            <div className="grid md:grid-cols-3 gap-6 mb-6">
              {[
                { icon: <RefreshCw />, title: "DeFi Atômico", desc: "Habilita DeFi atômico (ex: swap + empréstimo em uma tx sem bridges)." },
                { icon: <Lock />, title: "Privacidade", desc: "Privacidade (ZK oculta dados sensíveis)." },
                { icon: <Zap />, title: "Oráculos & Apps", desc: "Oráculos, data availability e apps escaláveis sem sacrificar velocidade da Kaspa (confirmações em segundos)." }
              ].map((impact, i) => (
                <div key={i} className="p-8 bg-white/5 rounded-[2.5rem] border border-white/10 hover:bg-white/10 transition-all group text-center">
                  <div className="w-14 h-14 bg-kaspa/20 rounded-2xl flex items-center justify-center text-kaspa mb-6 mx-auto group-hover:scale-110 transition-transform">
                    {impact.icon}
                  </div>
                  <h4 className="text-xl font-bold mb-3">{impact.title}</h4>
                  <p className="text-sm opacity-60 leading-relaxed">{impact.desc}</p>
                </div>
              ))}
            </div>
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {[
                { icon: <Globe />, title: "Descentralização", desc: "Evita centralização (L1 permanece minimalista; execução off-chain)." },
                { icon: <Network />, title: "Ordering Seguro", desc: "Diferencia Kaspa de L2s: sem bridges, liquidez fragmentada ou trust extra; usa o BlockDAG para ordering e settlement seguro." }
              ].map((impact, i) => (
                <div key={i} className="p-8 bg-white/5 rounded-[2.5rem] border border-white/10 hover:bg-white/10 transition-all group text-center">
                  <div className="w-14 h-14 bg-kaspa/20 rounded-2xl flex items-center justify-center text-kaspa mb-6 mx-auto group-hover:scale-110 transition-transform">
                    {impact.icon}
                  </div>
                  <h4 className="text-xl font-bold mb-3">{impact.title}</h4>
                  <p className="text-sm opacity-60 leading-relaxed">{impact.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default UpdatesSection;
