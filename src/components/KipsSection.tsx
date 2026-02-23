import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, FileText, ExternalLink, Info, Code, Cpu, Zap, ShieldCheck, Rocket, Workflow } from 'lucide-react';

interface Kip {
  id: string;
  title: string;
  description: string;
  tag?: string;
}

const kips: Kip[] = [
  {
    id: "KIP-1",
    title: "Reescrita em Rust",
    description: "Reescreve o nó completo da Kaspa na linguagem de programação Rust. O objetivo era migrar o código do nó Kaspa (originalmente escrito em Go/Golang) para Rust, uma linguagem moderna focada em segurança de memória, alta performance e concorrência segura.",
    tag: "Core"
  },
  {
    id: "KIP-4",
    title: "Ajuste de Dificuldade",
    description: "Reajusta os cálculos de dificuldade e tempo mediano para que intervalos de menos de um segundo não prejudiquem a segurança de Nakamoto. É o guarda-costas silencioso que impede que um aumento de velocidade de dez vezes se transforme em um carnaval de reorganização.",
    tag: "Security"
  },
  {
    id: "KIP-5",
    title: "Assinatura de Mensagens",
    description: "Define um padrão para assinatura e verificação de mensagens arbitrárias usando chaves Kaspa (sem precisar de transações on-chain). Funciona como 'sign message' em wallets. Usa digest de 32 bytes (padrão Blake2b ou similar) para segurança.",
    tag: "Standard"
  },
  {
    id: "KIP-6",
    title: "Poda de Cabeçalhos (PoChM)",
    description: "Permite provar que um bloco (ou header) faz parte da cadeia selecionada do Dag sem baixar toda a blockchain. Inclui provas criptográficas compactas (PoChM) para headers de blocos na cadeia azul. Útil para light clients e SPV.",
    tag: "Efficiency"
  },
  {
    id: "KIP-9",
    title: "STOR STORM",
    description: "Introduz limites de massa quadrática e poda; nós de desktop comuns podem excluir blocos com mais de três dias, enquanto os pares de arquivamento mantêm o DAG completo.",
    tag: "Storage"
  },
  {
    id: "KIP-10",
    title: "Introspecção de Transações",
    description: "Adiciona códigos de operação de introspecção de transações — pense em covenants de Bitcoin com esteroides — para que compiladores futuros possam escrever cofres, pools de liquidez ou canais de pagamento diretamente.",
    tag: "Smart Contracts"
  },
  {
    id: "KIP-13",
    title: "Payloads Transitórios (Blobs)",
    description: "Contribui com payloads transitórios do tipo 'blob': campos de dados baratos e de curta duração, destinados a dados de chamada de roll-up. Define um limite rígido para o tamanho do bloco.",
    tag: "Scalability"
  },
  {
    id: "KIP-14",
    title: "10 BPS Upgrade",
    description: "Maior upgrade da história do Kaspa: transição de 1 BPS para 10 BPS. Inclui gerenciamento de estado melhorado, payloads em transações (base para smart contracts) e suporte a hardforks.",
    tag: "Performance"
  },
  {
    id: "KIP-15",
    title: "Ordenação Canônica",
    description: "Ativa uma flag de consenso que força cada nó a respeitar uma ordenação canônica de todos os payloads. Transforma os mineradores em um sequenciador universal para qualquer roll-up.",
    tag: "Infrastructure"
  },
  {
    id: "KIP-16",
    title: "Verificação ZK Nativa",
    description: "Introduz opcodes e campos no header para verificação nativa de provas ZK (Groth16, SNARKs/STARKs) diretamente na L1. Habilita privacidade e computação off-chain ancorada.",
    tag: "Privacy"
  },
  {
    id: "KIP-17",
    title: "Covenants Nativos",
    description: "Introduz covenants nativos na camada base (L1), permitindo que UTXOs incluam regras programáveis sobre como podem ser gastos no futuro via opcodes estendidos.",
    tag: "Programmability"
  },
  {
    id: "KIP-18",
    title: "OP_SIMPLICITY",
    description: "Propõe um opcode ou conjunto de simplificações para tornar os covenants mais acessíveis e eficientes, reduzindo a complexidade de scripts sem overhead excessivo.",
    tag: "Optimization"
  },
  {
    id: "KIP-19",
    title: "Política de Eviction",
    description: "Foca em uma política de eviction (remoção) para transações inbound no mempool, otimizando como transações com covenants ou payloads pesados são priorizadas.",
    tag: "Mempool"
  }
];

const KipsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [cardsToShow, setCardsToShow] = useState(3);
  
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) setCardsToShow(1);
      else if (window.innerWidth < 1024) setCardsToShow(2);
      else setCardsToShow(3);
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const next = () => {
    if (currentIndex < kips.length - cardsToShow) {
      setDirection(1);
      setCurrentIndex(prev => prev + 1);
    }
  };

  const prev = () => {
    if (currentIndex > 0) {
      setDirection(-1);
      setCurrentIndex(prev => prev - 1);
    }
  };

  return (
    <section id="kips" className="py-24 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-kaspa/10 rounded-full text-kaspa text-sm font-bold mb-4">
              <FileText className="w-4 h-4" />
              Kaspa Improvement Proposals
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Kips</h2>
            <p className="text-lg text-slate-600">
              As propostas de melhoria da Kaspa (KIPs) são o motor da evolução do protocolo, definindo novos padrões e funcionalidades para o futuro do BlockDAG.
            </p>
          </div>
          
          <div className="flex gap-4">
            <button 
              onClick={prev}
              disabled={currentIndex === 0}
              className={`p-4 rounded-2xl border transition-all ${
                currentIndex === 0 
                ? 'border-slate-200 text-slate-300 cursor-not-allowed' 
                : 'border-slate-200 text-slate-600 hover:border-kaspa hover:text-kaspa bg-white shadow-sm'
              }`}
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button 
              onClick={next}
              disabled={currentIndex >= kips.length - cardsToShow}
              className={`p-4 rounded-2xl border transition-all ${
                currentIndex >= kips.length - cardsToShow
                ? 'border-slate-200 text-slate-300 cursor-not-allowed' 
                : 'border-slate-200 text-slate-600 hover:border-kaspa hover:text-kaspa bg-white shadow-sm'
              }`}
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          <motion.div 
            className="flex gap-6"
            animate={{ x: `calc(-${currentIndex * (100 / cardsToShow)}% - ${currentIndex * (24 / cardsToShow)}px)` }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            {kips.map((kip, index) => (
              <div 
                key={kip.id}
                className="shrink-0"
                style={{ width: `calc(${(100 / cardsToShow)}% - ${(24 * (cardsToShow - 1)) / cardsToShow}px)` }}
              >
                <motion.div
                  whileHover={{ y: -8 }}
                  className="h-full bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-kaspa/10 hover:border-kaspa/20 hover:bg-kaspa/[0.02] transition-all duration-300 flex flex-col group"
                >
                  <div className="flex justify-between items-start mb-6">
                    <div className="px-4 py-1.5 bg-slate-900 text-white rounded-full text-xs font-bold tracking-wider">
                      {kip.id}
                    </div>
                    {kip.tag && (
                      <div className="px-3 py-1 bg-kaspa/10 text-kaspa rounded-full text-[10px] font-black uppercase tracking-widest">
                        {kip.tag}
                      </div>
                    )}
                  </div>
                  
                  <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-kaspa transition-colors">
                    {kip.title}
                  </h3>
                  
                  <p className="text-slate-500 text-sm leading-relaxed mb-8 flex-grow">
                    {kip.description}
                  </p>
                  
                  <div className="pt-6 border-t border-slate-50 flex items-center justify-between">
                    <div className="flex items-center gap-2 text-xs font-bold text-slate-400">
                      <ExternalLink className="w-3 h-3" />
                      DETALHES
                    </div>
                    <div className="w-8 h-8 bg-slate-50 rounded-full flex items-center justify-center text-slate-400 group-hover:bg-kaspa/10 group-hover:text-kaspa transition-colors">
                      <Info className="w-4 h-4" />
                    </div>
                  </div>
                </motion.div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-12">
          {Array.from({ length: kips.length - cardsToShow + 1 }).map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={`h-1.5 transition-all duration-300 rounded-full ${
                currentIndex === i ? 'w-8 bg-kaspa' : 'w-2 bg-slate-200 hover:bg-slate-300'
              }`}
            />
          ))}
        </div>

        {/* Footer Note */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 p-8 bg-white rounded-[2rem] border border-slate-100 flex flex-col md:flex-row items-center gap-8 justify-between"
        >
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-kaspa/10 rounded-2xl flex items-center justify-center">
              <FileText className="text-kaspa" />
            </div>
            <div>
              <h4 className="font-bold text-slate-900">Documentação Completa</h4>
              <p className="text-sm text-slate-500">Explore todos os KIPs detalhadamente no repositório oficial.</p>
            </div>
          </div>
          <button className="px-8 py-4 bg-slate-900 text-white font-bold rounded-2xl hover:bg-slate-800 transition-colors flex items-center gap-2">
            Acessar GitHub
            <ExternalLink className="w-4 h-4" />
          </button>
        </motion.div>

        {/* Smart Contracts Section */}
        <div className="mt-32 pt-24 border-t border-slate-200 relative">
          {/* Decorative Background Elements */}
          <div className="absolute top-0 right-0 -translate-y-1/2 w-96 h-96 bg-kaspa/5 rounded-full blur-3xl -z-10" />
          <div className="absolute bottom-0 left-0 translate-y-1/2 w-96 h-96 bg-kaspa/5 rounded-full blur-3xl -z-10" />

          <div className="text-center max-w-3xl mx-auto mb-20">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-kaspa/10 rounded-full text-kaspa text-sm font-black mb-6 border border-kaspa/20"
            >
              <Code className="w-4 h-4" />
              FUTURE OF KASPA
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8">Contratos Inteligentes</h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              A Kaspa (L1 nativa) ainda não tem contratos inteligentes completos executados diretamente na camada base como Ethereum ou Solana, isso se transformará em realidade com os <span className="text-kaspa font-bold underline decoration-kaspa/30 underline-offset-4">vProgs</span>. No entanto, em 2026, contratos inteligentes já existem e estão em uso principalmente via soluções <span className="px-2 py-0.5 bg-slate-900 text-white rounded-md font-semibold">Layer-2 (L2)</span>, que trazem compatibilidade EVM:
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-10">
            {/* Kasplex zkEVM */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group relative bg-white p-1 md:p-1.5 rounded-[3rem] shadow-xl shadow-slate-200/50 hover:shadow-2xl hover:shadow-kaspa/10 transition-all duration-500 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-kaspa/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative bg-white p-10 rounded-[2.8rem] border border-slate-100 h-full flex flex-col">
                <div className="flex items-center justify-between mb-10">
                  <div className="flex items-center gap-5">
                    <div className="w-14 h-14 bg-kaspa rounded-2xl flex items-center justify-center shadow-lg shadow-kaspa/30 group-hover:rotate-6 transition-transform">
                      <Zap className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-slate-900">Kasplex zkEVM</h3>
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                        <p className="text-kaspa text-xs font-black uppercase tracking-widest">O mais maduro e ativo</p>
                      </div>
                    </div>
                  </div>
                  <div className="hidden sm:block px-4 py-1.5 bg-slate-50 rounded-full text-[10px] font-bold text-slate-400 border border-slate-100">
                    MAINNET LIVE
                  </div>
                </div>

                <div className="space-y-8 flex-grow">
                  <p className="text-slate-600 leading-relaxed">
                    Lançado no mainnet em 2025, é um based rollup zkEVM compatível com Ethereum. Permite deploy de smart contracts em Solidity, usando ferramentas como <span className="font-bold text-slate-800">MetaMask, Hardhat e Remix</span>.
                  </p>
                  
                  <div className="grid grid-cols-1 gap-4">
                    {[
                      { icon: <Rocket className="w-4 h-4" />, text: "DEXs: Zealous Swap, KaspaCom (pump.fun style)" },
                      { icon: <ShieldCheck className="w-4 h-4" />, text: "Stablecoins bridged: USDC, USDT via KaspaBridge" },
                      { icon: <Cpu className="w-4 h-4" />, text: "Lending, farming e tokens variados" },
                      { icon: <Workflow className="w-4 h-4" />, text: "TVL em crescimento exponencial" }
                    ].map((item, i) => (
                      <motion.div 
                        key={i}
                        whileHover={{ x: 5 }}
                        className="flex items-center gap-4 p-4 bg-slate-50 rounded-2xl border border-slate-100 group-hover:border-kaspa/20 transition-colors"
                      >
                        <div className="text-kaspa">{item.icon}</div>
                        <span className="text-sm font-medium text-slate-700">{item.text}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
                
                <div className="mt-10 pt-8 border-t border-slate-50">
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Adoção da Rede</span>
                    <span className="text-xs font-black text-kaspa">100% OPERACIONAL</span>
                  </div>
                  <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: "100%" }}
                      transition={{ duration: 1.5, ease: "easeOut" }}
                      className="h-full bg-gradient-to-r from-kaspa to-emerald-400" 
                    />
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Igra Labs (Galleon) */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="group relative bg-white p-1 md:p-1.5 rounded-[3rem] shadow-xl shadow-slate-200/50 hover:shadow-2xl hover:shadow-slate-300 transition-all duration-500 overflow-hidden"
            >
              <div className="relative bg-white p-10 rounded-[2.8rem] border border-slate-100 h-full flex flex-col">
                <div className="flex items-center justify-between mb-10">
                  <div className="flex items-center gap-5">
                    <div className="w-14 h-14 bg-slate-900 rounded-2xl flex items-center justify-center shadow-lg shadow-slate-900/20 group-hover:-rotate-6 transition-transform">
                      <Rocket className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-slate-900">Igra Labs (Galleon)</h3>
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-amber-500 rounded-full" />
                        <p className="text-slate-400 text-xs font-black uppercase tracking-widest">Em fase inicial</p>
                      </div>
                    </div>
                  </div>
                  <div className="hidden sm:block px-4 py-1.5 bg-slate-50 rounded-full text-[10px] font-bold text-slate-400 border border-slate-100">
                    CLOSED MAINNET
                  </div>
                </div>

                <div className="space-y-8 flex-grow">
                  <p className="text-slate-600 leading-relaxed">
                    Outro L2 EVM-compatível (based rollup), lançado recentemente (janeiro 2026). Focado em <span className="font-bold text-slate-800">smart contracts e programabilidade</span>, utilizando a Kaspa como camada de segurança.
                  </p>
                  
                  <div className="p-8 bg-kaspa/5 rounded-3xl border border-kaspa/10 relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-4 opacity-10">
                      <Info className="w-12 h-12 text-kaspa" />
                    </div>
                    <p className="relative z-10 text-sm text-slate-600 italic leading-relaxed">
                      "Já operacional para testes e builds. Focado em trazer a robustez da Kaspa para o ecossistema de contratos inteligentes de forma escalável."
                    </p>
                  </div>

                  <div className="flex items-center gap-4 p-5 bg-slate-900 rounded-2xl border border-slate-800 shadow-lg shadow-slate-900/20">
                    <div className="p-2 bg-white/10 rounded-lg">
                      <Workflow className="w-5 h-5 text-kaspa" />
                    </div>
                    <span className="text-xs font-bold text-white uppercase tracking-widest">Kaspa as Sequencer & DA</span>
                  </div>
                </div>

                <div className="mt-10 pt-8 border-t border-slate-50">
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Progresso do Desenvolvimento</span>
                    <span className="text-xs font-black text-slate-600">40% CONCLUÍDO</span>
                  </div>
                  <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: "40%" }}
                      transition={{ duration: 1.5, ease: "easeOut" }}
                      className="h-full bg-slate-400" 
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default KipsSection;
