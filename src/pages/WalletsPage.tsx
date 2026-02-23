import React from 'react';
import { motion } from 'motion/react';
import { 
  Smartphone, 
  Shield, 
  Cpu, 
  Globe, 
  ExternalLink, 
  ArrowRight,
  Lock,
  Zap,
  CheckCircle2,
  Monitor
} from 'lucide-react';

type Wallet = {
  name: string;
  url: string;
  description: string;
  features: string[];
  platforms: ('Mobile' | 'Desktop' | 'Hardware' | 'Browser')[];
  isPopular?: boolean;
  logo?: string;
};

type Category = {
  title: string;
  icon: React.ReactNode;
  description: string;
  wallets: Wallet[];
};

const CATEGORIES: Category[] = [
  {
    title: 'Principais Hotwallets',
    icon: <Smartphone className="w-6 h-6" />,
    description: 'Carteiras de software para uso diário, focadas em praticidade e recursos DeFi.',
    wallets: [
      {
        name: 'Kasanova',
        url: 'https://kasanova.app',
        logo: 'https://iili.io/qFWYxLu.webp',
        description: 'Uma carteira moderna e não custodial focada em DeFi. Suporta tokens KRC-20, gerenciamento de domínios KNS, marketplace on-chain L1 integrado e trocas atômicas (P2P atomic swaps).',
        features: ['DeFi Focus', 'KRC-20 Support', 'KNS Domains', 'Atomic Swaps'],
        platforms: ['Mobile'],
        isPopular: true
      },
      {
        name: 'Kaspium',
        url: 'https://kaspium.io',
        logo: 'https://iili.io/qFWYurx.webp',
        description: 'Carteira não custodial dedicada exclusivamente à rede Kaspa. Uma das mais populares e elogiadas por ser intuitiva, moderna e com ótima integração nativa (sync rápido).',
        features: ['Native Integration', 'Fast Sync', 'Multiple Wallets', 'Intuitive UI'],
        platforms: ['Mobile'],
        isPopular: true
      },
      {
        name: 'Kurncy',
        url: 'https://kurncy.com',
        logo: 'https://iili.io/qFWcOfs.png',
        description: 'Carteira mobile não custodial para Kaspa com suporte a tokens KRC-20. Opção leve e simples para transações rápidas e armazenamento seguro.',
        features: ['Lightweight', 'Simple UI', 'KRC-20 Support', 'Fast Transactions'],
        platforms: ['Mobile']
      }
    ]
  },
  {
    title: 'Principais Hardwallets',
    icon: <Cpu className="w-6 h-6" />,
    description: 'Segurança máxima com armazenamento offline (Cold Storage).',
    wallets: [
      {
        name: 'Ledger',
        url: 'https://www.ledger.com/coin/wallet/kaspa',
        logo: 'https://iili.io/qFWcbeV.png',
        description: 'Uma das mais populares e confiáveis do mercado, com suporte oficial para Kaspa via app dedicado no Ledger Live. Alta segurança com chip certificado.',
        features: ['Certified Chip', 'Ledger Live', 'Cold Storage', 'Multi-asset'],
        platforms: ['Hardware'],
        isPopular: true
      },
      {
        name: 'OneKey',
        url: 'https://onekey.so/download/',
        logo: 'https://iili.io/qFWloXt.png',
        description: 'Carteira de hardware focada em segurança e suporte nativo excelente para Kaspa, incluindo compatibilidade com hard forks como Crescendo.',
        features: ['Native Support', 'Open Source', 'Bluetooth (Pro)', 'Sleek Design'],
        platforms: ['Hardware']
      },
      {
        name: 'SafePal',
        url: 'https://www.safepal.com/pt/download',
        logo: 'https://iili.io/qFWlcIS.png',
        description: 'Carteira acessível e air-gapped (sem Bluetooth/USB em alguns modelos). Suporte completo para Kaspa desde 2024, incluindo hardware X1 e app mobile.',
        features: ['Air-gapped', 'QR Code Scan', 'Affordable', 'Mobile App'],
        platforms: ['Hardware', 'Mobile']
      },
      {
        name: 'Tangem',
        url: 'https://tangem.com/pt/pricing/',
        logo: 'https://iili.io/qFWlD4s.png',
        description: 'Formato inovador de cartão NFC (sem bateria, sem fios). Setup ultra-rápido e excelente integração para KAS e tokens KRC-20 nativamente.',
        features: ['NFC Technology', 'No Battery', 'Ultra-fast Setup', 'KRC-20 Support'],
        platforms: ['Hardware', 'Mobile'],
        isPopular: true
      }
    ]
  },
  {
    title: 'Principais Browser',
    icon: <Globe className="w-6 h-6" />,
    description: 'Extensões de navegador para interagir com dApps e ecossistema Web3.',
    wallets: [
      {
        name: 'Kasperia',
        url: 'https://kasperia-doc.github.io/',
        logo: 'https://iili.io/qFW0IwB.png',
        description: 'Carteira web-based/lightweight com integração nativa ao Kasplex (L2 da Kaspa) e bridge Kaspa Kasplex. Ideal para dApps e experiência fluida no ecossistema L2.',
        features: ['Kasplex Native', 'Web3/DeFi', 'dApps Ready', 'Bridge Support'],
        platforms: ['Browser'],
        isPopular: true
      },
      {
        name: 'Kastle',
        url: 'https://kastle.cc/',
        logo: 'https://iili.io/qFWGgVI.png',
        description: 'Moderna e rápida disponível como extensão de navegador e app móvel. Projetada para ser amigável ao usuário, segura e não custodial.',
        features: ['Browser Extension', 'Mobile App', 'NFT Support', 'User Friendly'],
        platforms: ['Browser', 'Mobile']
      },
      {
        name: 'Kasware',
        url: 'https://www.kasware.xyz/',
        logo: 'https://iili.io/qFW0EwN.png',
        description: 'Uma das primeiras extensões de navegador (Chrome) código aberto para Kaspa. Rica em funcionalidades e focada em segurança. Suporta KRC-20 e KNS.',
        features: ['Open Source', 'KRC-20 Support', 'KNS Support', 'HD Wallet'],
        platforms: ['Browser'],
        isPopular: true
      }
    ]
  }
];

export default function WalletsPage() {
  return (
    <div className="min-h-screen font-sans selection:bg-kaspa/20 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(112,199,186,0.14),transparent_35%),radial-gradient(circle_at_80%_80%,rgba(16,185,129,0.10),transparent_45%)] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-36 pb-20">
        {/* Header */}
        <div className="max-w-3xl mb-20">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-kaspa font-mono text-sm font-bold tracking-widest uppercase mb-3 block"
          >
            Custódia Segura
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-display font-extrabold text-slate-800 tracking-tight"
          >
            Carteiras Kaspa
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-slate-500 text-lg mt-4 leading-relaxed"
          >
            Escolha a melhor forma de armazenar seus KAS. De carteiras móveis práticas a dispositivos de hardware de alta segurança.
          </motion.p>
        </div>

        {/* Categories */}
        <div className="space-y-32">
          {CATEGORIES.map((category, catIdx) => (
            <section key={category.title}>
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex items-center gap-4 mb-12"
              >
                <div className="w-14 h-14 rounded-2xl bg-kaspa/10 text-kaspa flex items-center justify-center shadow-inner">
                  {category.icon}
                </div>
                <div>
                  <h2 className="text-3xl font-display font-bold text-slate-800 tracking-tight">
                    {category.title}
                  </h2>
                  <p className="text-slate-400 font-medium">{category.description}</p>
                </div>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {category.wallets.map((wallet, walletIdx) => (
                  <motion.div
                    key={wallet.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: walletIdx * 0.1 }}
                    className="group relative"
                  >
                    <div className="glass-card p-8 border-slate-100 hover:border-kaspa/30 hover:shadow-2xl hover:shadow-kaspa/10 transition-all h-full flex flex-col">
                      {wallet.isPopular && (
                        <div className="absolute -top-3 -right-3 px-4 py-1 bg-kaspa text-white text-[10px] font-bold uppercase tracking-widest rounded-full shadow-lg shadow-kaspa/30 z-20">
                          Popular
                        </div>
                      )}

                      <div className="flex items-center justify-between mb-6">
                        <div className="flex items-center gap-4">
                          {wallet.logo ? (
                            <div className="w-12 h-12 rounded-xl overflow-hidden bg-white p-1 shadow-sm border border-slate-100 flex items-center justify-center">
                              <img 
                                src={wallet.logo} 
                                alt={wallet.name} 
                                className="w-full h-full object-contain"
                                referrerPolicy="no-referrer"
                              />
                            </div>
                          ) : (
                            <div className="w-12 h-12 rounded-xl bg-kaspa/10 flex items-center justify-center text-kaspa">
                              <Smartphone className="w-6 h-6" />
                            </div>
                          )}
                          <h3 className="text-2xl font-display font-bold text-slate-800 group-hover:text-kaspa transition-colors">
                            {wallet.name}
                          </h3>
                        </div>
                        <div className="flex gap-2">
                          {wallet.platforms.map(p => (
                            <div key={p} title={p} className="text-slate-300 hover:text-kaspa transition-colors">
                              {p === 'Mobile' && <Smartphone className="w-4 h-4" />}
                              {p === 'Hardware' && <Cpu className="w-4 h-4" />}
                              {p === 'Browser' && <Globe className="w-4 h-4" />}
                              {p === 'Desktop' && <Monitor className="w-4 h-4" />}
                            </div>
                          ))}
                        </div>
                      </div>

                      <p className="text-slate-500 text-sm leading-relaxed mb-8 flex-grow">
                        {wallet.description}
                      </p>

                      <div className="space-y-3 mb-8">
                        {wallet.features.map(feature => (
                          <div key={feature} className="flex items-center gap-2 text-xs font-medium text-slate-600">
                            <CheckCircle2 className="w-3 h-3 text-kaspa" />
                            {feature}
                          </div>
                        ))}
                      </div>

                      <a 
                        href={wallet.url}
                        target="_blank"
                        rel="noreferrer"
                        className="mt-auto flex items-center justify-center gap-2 w-full py-4 bg-slate-50 group-hover:bg-kaspa group-hover:text-white rounded-xl font-bold text-sm transition-all active:scale-95"
                      >
                        Baixar Agora <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>
                  </motion.div>
                ))}
              </div>
            </section>
          ))}
        </div>

        {/* Security Banner */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-40 p-12 rounded-[40px] bg-slate-900 text-white relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-96 h-96 bg-kaspa/20 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-kaspa/10 blur-[100px] rounded-full translate-y-1/2 -translate-x-1/2" />
          
          <div className="relative z-10 flex flex-col lg:flex-row items-center gap-12">
            <div className="w-24 h-24 rounded-3xl bg-kaspa/20 backdrop-blur-xl border border-kaspa/30 flex items-center justify-center shrink-0">
              <Lock className="w-12 h-12 text-kaspa" />
            </div>
            <div className="text-center lg:text-left flex-grow">
              <h4 className="text-3xl font-display font-bold mb-4">Sua Segurança é Prioridade</h4>
              <p className="text-slate-400 text-lg max-w-2xl leading-relaxed">
                Nunca compartilhe sua frase de recuperação (seed phrase) com ninguém. A Kaspa Br ou qualquer desenvolvedor de carteira jamais pedirá sua frase. Guarde-a em um local seguro e offline.
              </p>
            </div>
            <div className="flex flex-col gap-4 shrink-0 w-full lg:w-auto">
              <div className="flex items-center gap-3 px-6 py-4 bg-white/5 rounded-2xl border border-white/10">
                <Shield className="w-5 h-5 text-kaspa" />
                <span className="text-sm font-bold">Não Custodial</span>
              </div>
              <div className="flex items-center gap-3 px-6 py-4 bg-white/5 rounded-2xl border border-white/10">
                <Zap className="w-5 h-5 text-kaspa" />
                <span className="text-sm font-bold">Transações Instantâneas</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
