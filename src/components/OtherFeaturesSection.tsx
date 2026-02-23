import React from 'react';
import { motion } from 'motion/react';
import { 
  Scissors, 
  Cpu, 
  ShieldCheck, 
  Zap, 
  Share2, 
  Database, 
  Wrench, 
  Globe,
  Code2,
  Info
} from 'lucide-react';

const features = [
  {
    title: "Segurança de Memória",
    description: "Rust elimina erros comuns de memória, como acessos inválidos e vazamentos, através de seu sistema de propriedade (ownership) e empréstimo (borrowing).",
    icon: <ShieldCheck className="w-6 h-6 text-kaspa" />,
    bgColor: "bg-kaspa/5"
  },
  {
    title: "Alto Desempenho",
    description: "Linguagem compilada que gera código de máquina altamente otimizado, sem sobrecarga de garbage collector, permitindo processamento paralelo massivo.",
    icon: <Zap className="w-6 h-6 text-kaspa" />,
    bgColor: "bg-slate-50"
  },
  {
    title: "Concorrência Segura",
    description: "Suporte nativo para programação paralela com garantias de segurança entre threads, vital para a alta escalabilidade do protocolo BlockDAG.",
    icon: <Share2 className="w-6 h-6 text-kaspa" />,
    bgColor: "bg-slate-50"
  },
  {
    title: "Gerenciamento Eficiente",
    description: "A Kaspa se beneficia do gerenciamento de memória do Rust em tempo de compilação, otimizando o uso de recursos para grandes volumes de transações.",
    icon: <Database className="w-6 h-6 text-kaspa" />,
    bgColor: "bg-kaspa/5"
  },
  {
    title: "Ferramentas Robustas",
    description: "Ecossistema rico com Cargo e vasta documentação, agilizando o desenvolvimento de componentes como carteiras web e CLIs.",
    icon: <Wrench className="w-6 h-6 text-kaspa" />,
    bgColor: "bg-kaspa/5"
  },
  {
    title: "Integração WebAssembly",
    description: "Suporte nativo ao WASM, permitindo que a Kaspa compile código para ambientes web, melhorando a acessibilidade para usuários finais.",
    icon: <Globe className="w-6 h-6 text-kaspa" />,
    bgColor: "bg-slate-50"
  }
];

const OtherFeaturesSection = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-20">
          <div className="w-16 h-16 bg-kaspa/10 rounded-2xl flex items-center justify-center mb-6 border border-kaspa/20">
            <Code2 className="w-8 h-8 text-kaspa" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Outras Características</h2>
          <div className="w-20 h-1.5 bg-kaspa rounded-full" />
        </div>

        {/* Pruning Section */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-32 bg-slate-50/50 rounded-[3rem] p-8 md:p-16 border border-slate-100">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-kaspa/10 rounded-xl">
                <Scissors className="w-6 h-6 text-kaspa" />
              </div>
              <h3 className="text-3xl font-bold text-slate-900">Poda (Pruning)</h3>
            </div>
            <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
              <p>
                O sistema de poda da Kaspa é um mecanismo utilizado em sua arquitetura BlockDag para gerenciar o armazenamento de dados do ledger, garantindo que o tamanho dos dados necessários para operar um nó permaneça constante.
              </p>
              <p>
                Ao contrário de blockchains tradicionais, o sistema de poda da Kaspa remove dados de blocos antigos que não são mais necessários para a validação de transações, sem comprometer a segurança ou descentralização.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative flex justify-center"
          >
            <div className="relative w-full max-w-md aspect-square bg-white rounded-[2.5rem] shadow-2xl shadow-slate-200/50 flex items-center justify-center overflow-hidden border border-slate-100">
              {/* Tree Pruning Visual */}
              <div className="absolute inset-0 opacity-5">
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--color-kaspa)_1px,_transparent_1px)] [background-size:32px_32px]" />
              </div>
              
              <svg viewBox="0 0 200 200" className="w-full h-full p-12">
                {/* Tree Trunk */}
                <path d="M100,180 Q100,140 100,100 Q100,60 100,40" stroke="#70c7ba" strokeWidth="12" fill="none" strokeLinecap="round" />
                
                {/* Branches */}
                <path d="M100,140 Q80,120 60,130" stroke="#70c7ba" strokeWidth="6" fill="none" strokeLinecap="round" />
                <path d="M100,120 Q120,100 140,110" stroke="#70c7ba" strokeWidth="6" fill="none" strokeLinecap="round" />
                <path d="M100,90 Q70,70 50,85" stroke="#70c7ba" strokeWidth="4" fill="none" strokeLinecap="round" />
                <path d="M100,70 Q130,50 150,65" stroke="#70c7ba" strokeWidth="4" fill="none" strokeLinecap="round" />
                
                {/* Blocks (Leaves) */}
                {[
                  { x: 60, y: 130, solid: true },
                  { x: 140, y: 110, solid: true },
                  { x: 50, y: 85, solid: false },
                  { x: 150, y: 65, solid: true },
                  { x: 100, y: 40, solid: true },
                  { x: 80, y: 60, solid: false },
                  { x: 120, y: 50, solid: true },
                  { x: 40, y: 110, solid: true },
                  { x: 160, y: 90, solid: false },
                ].map((block, i) => (
                  <motion.rect
                    key={i}
                    x={block.x - 6}
                    y={block.y - 6}
                    width="12"
                    height="12"
                    rx="2"
                    fill={block.solid ? "#70c7ba" : "none"}
                    stroke="#70c7ba"
                    strokeWidth="2"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.1 }}
                  />
                ))}

                {/* Pruning Scissors Visual */}
                <motion.g
                  animate={{ 
                    rotate: [0, -10, 0],
                    x: [0, 5, 0]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                  style={{ originX: "70px", originY: "100px" }}
                >
                  <path d="M50,110 L70,100 L50,90" stroke="#70c7ba" strokeWidth="2" fill="none" />
                  <circle cx="45" cy="110" r="3" stroke="#70c7ba" strokeWidth="2" fill="none" />
                  <circle cx="45" cy="90" r="3" stroke="#70c7ba" strokeWidth="2" fill="none" />
                </motion.g>

                <motion.g
                  animate={{ 
                    rotate: [0, 10, 0],
                    x: [0, -5, 0]
                  }}
                  transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                  style={{ originX: "130px", originY: "80px" }}
                >
                  <path d="M150,90 L130,80 L150,70" stroke="#70c7ba" strokeWidth="2" fill="none" />
                  <circle cx="155" cy="90" r="3" stroke="#70c7ba" strokeWidth="2" fill="none" />
                  <circle cx="155" cy="70" r="3" stroke="#70c7ba" strokeWidth="2" fill="none" />
                </motion.g>
              </svg>

              {/* Falling Blocks */}
              <motion.div 
                animate={{ y: [0, 100], opacity: [0, 1, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute top-1/4 left-1/3 w-3 h-3 bg-kaspa/30 rounded-sm"
              />
              <motion.div 
                animate={{ y: [0, 120], opacity: [0, 1, 0] }}
                transition={{ duration: 4, repeat: Infinity, delay: 1 }}
                className="absolute top-1/3 right-1/4 w-2 h-2 border border-kaspa/30 rounded-sm"
              />
            </div>
          </motion.div>
        </div>

        {/* Rust Section */}
        <div className="mb-20">
          <div className="flex items-center gap-4 mb-8">
            <div className="p-3 bg-kaspa/10 rounded-xl">
              <Cpu className="w-6 h-6 text-kaspa" />
            </div>
            <h3 className="text-3xl font-bold text-slate-900">Linguagem Rust</h3>
          </div>
          <p className="text-lg text-slate-600 max-w-3xl mb-12">
            A linguagem Rust utilizada no projeto Kaspa possui características que a tornam ideal para o desenvolvimento de sistemas de alto desempenho, como a implementação do protocolo BlockDAG.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className={`${feature.bgColor} p-8 rounded-[2rem] border border-slate-100 transition-all duration-300 hover:shadow-xl hover:shadow-kaspa/10 hover:border-kaspa/20 hover:bg-kaspa/[0.03] group`}
              >
                <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center mb-6 transition-transform group-hover:scale-110">
                  {feature.icon}
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h4>
                <p className="text-slate-500 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Final Note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="bg-kaspa p-8 rounded-[2rem] text-white flex flex-col md:flex-row items-center justify-between gap-8"
        >
          <div className="flex items-center gap-6">
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center shrink-0">
              <Info className="w-6 h-6" />
            </div>
            <p className="text-lg font-medium opacity-90">
              A versatilidade do Rust facilita a implementação de funcionalidades complexas, como o UTXO index e pruning.
            </p>
          </div>
          <button className="px-8 py-4 bg-white text-kaspa font-bold rounded-2xl hover:bg-slate-50 transition-colors shrink-0">
            Ver Documentação Técnica
          </button>
        </motion.div>

      </div>
    </section>
  );
};

export default OtherFeaturesSection;
