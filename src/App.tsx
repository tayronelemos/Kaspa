/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import KaspaDAGSection from './components/KaspaDAGSection';
import SpeedSection from './components/SpeedSection';
import ComparisonsSection from './components/ComparisonsSection';
import DecentralizationSection from './components/DecentralizationSection';
import SecuritySection from './components/SecuritySection';
import MiningSection from './components/MiningSection';
import OtherFeaturesSection from './components/OtherFeaturesSection';
import KipsSection from './components/KipsSection';
import UpdatesSection from './components/UpdatesSection';
import WhitePapersPage from './pages/WhitePapersPage';
import LinksPage from './pages/LinksPage';
import ExchangesPage from './pages/ExchangesPage';
import WalletsPage from './pages/WalletsPage';
import CommercePage from './pages/CommercePage';
import { 
  Zap, 
  Cpu, 
  Shield, 
  Globe, 
  ChevronDown, 
  ArrowRight, 
  Wallet, 
  Server, 
  Layers, 
  History, 
  Code2, 
  MessageSquare,
  Menu,
  X,
  ExternalLink,
  Pickaxe,
  Network,
  Database,
  RefreshCw,
  Info,
  Send,
  Twitter,
  Facebook,
  Instagram,
  Youtube,
  Linkedin,
  Github,
  Disc,
  Music2
} from 'lucide-react';

// --- Types ---
interface Feature {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

interface FAQItem {
  question: string;
  answer: string;
}

// --- Components ---

const Navbar = ({ currentRoute }: { currentRoute: string }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#/' },
    { name: 'White Papers', href: '#/white-papers' },
    { name: 'Links', href: '#/links' },
    { name: 'Corretoras', href: '#/exchanges' },
    { name: 'Carteiras', href: '#/wallets' },
    { name: 'Comércio', href: '#/commerce' },
  ];

  return (
    <nav className="fixed top-6 left-0 right-0 z-50 px-6">
      <div className={`max-w-7xl mx-auto transition-all duration-500 ${isScrolled ? 'scale-[0.98]' : 'scale-100'}`}>
        <div className="bg-white/80 backdrop-blur-xl border border-slate-200/60 rounded-full px-4 py-2 shadow-[0_8px_32px_rgba(0,0,0,0.04)] flex items-center justify-between">
          
          {/* Logo Section */}
          <div className="flex items-center pl-2">
            <img 
              src="https://iili.io/q9v8CsR.png" 
              alt="Kaspa Logo" 
              className="h-12 w-auto object-contain"
              referrerPolicy="no-referrer"
            />
          </div>

          {/* Centered Navigation Pill */}
          <div className="hidden lg:flex items-center bg-slate-50/50 border border-slate-100 rounded-full px-1 py-1">
            {navLinks.map((link) => {
              const isActive = currentRoute === link.href || (link.href === '#/' && (currentRoute === '' || currentRoute === '#/'));
              return (
                <a 
                  key={link.name} 
                  href={link.href} 
                  className={`px-5 py-2 text-[11px] font-bold uppercase tracking-wider transition-all rounded-full ${
                    isActive 
                      ? 'text-white bg-kaspa shadow-lg shadow-kaspa/25' 
                      : 'text-slate-500 hover:text-kaspa hover:bg-white'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-2 pr-1">
            {/* Flags */}
            <div className="hidden md:flex items-center gap-3 px-4 border-r border-slate-200 mr-2">
              <div className="w-7 h-7 rounded-full border-2 border-kaspa p-0.5 flex items-center justify-center cursor-pointer hover:scale-110 transition-transform">
                <span className="text-sm" title="Brasil">🇧🇷</span>
              </div>
              <span className="text-sm cursor-pointer hover:scale-110 transition-transform grayscale hover:grayscale-0" title="USA">🇺🇸</span>
              <span className="text-sm cursor-pointer hover:scale-110 transition-transform grayscale hover:grayscale-0" title="Espanha">🇪🇸</span>
            </div>

            {/* Dark Mode Toggle (Visual Only) */}
            <button className="p-2 text-slate-400 hover:text-slate-600 transition-colors hidden sm:block">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
              </svg>
            </button>

            {/* Contact Button */}
            <a 
              href="#faq" 
              className="hidden sm:flex bg-kaspa text-white px-6 py-2.5 rounded-full text-[11px] font-bold uppercase tracking-widest hover:bg-kaspa-dark transition-all shadow-sm hover:shadow-md active:scale-95"
            >
              Contato
            </a>

            {/* Mobile Toggle */}
            <button className="lg:hidden p-2 text-slate-600" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            className="absolute top-full left-6 right-6 mt-4 bg-white/95 backdrop-blur-xl border border-slate-200 rounded-3xl p-6 flex flex-col gap-4 lg:hidden shadow-2xl"
          >
            {navLinks.map((link) => {
              const isActive = currentRoute === link.href || (link.href === '#/' && (currentRoute === '' || currentRoute === '#/'));
              return (
                <a 
                  key={link.name} 
                  href={link.href} 
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-sm font-bold uppercase tracking-widest py-3 border-b border-slate-50 transition-colors ${
                    isActive ? 'text-kaspa' : 'text-slate-600 hover:text-kaspa'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
            <div className="flex items-center justify-between pt-4">
              <div className="flex gap-4">
                <span>🇧🇷</span>
                <span>🇺🇸</span>
                <span>🇪🇸</span>
              </div>
              <a href="#faq" className="bg-kaspa text-white px-6 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest">
                Contato
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  const leftCards = [
    { name: 'Velocidade', icon: <Zap className="w-5 h-5" />, href: '#velocidade' },
    { name: 'Descentralização', icon: <Network className="w-5 h-5" />, href: '#tecnologia' },
    { name: 'Segurança', icon: <Shield className="w-5 h-5" />, href: '#tecnologia' },
  ];

  const rightCards = [
    { name: 'Mineração', icon: <Pickaxe className="w-5 h-5" />, href: '#mineracao' },
    { name: 'Outras Características', icon: <Database className="w-5 h-5" />, href: '#tecnologia' },
    { name: 'Atualizações', icon: <RefreshCw className="w-5 h-5" />, href: '#faq' },
  ];

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-32 pb-12 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(112,199,186,0.15),transparent_40%),radial-gradient(circle_at_80%_80%,rgba(16,185,129,0.1),transparent_40%)] pointer-events-none" />
      
      <motion.div 
        animate={{ 
          scale: [1, 1.1, 1],
          opacity: [0.08, 0.12, 0.08]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] bg-[radial-gradient(circle_at_center,rgba(112,199,186,1)_0%,transparent_60%)] blur-[100px] pointer-events-none opacity-10" 
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full flex flex-col items-center">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center mb-12"
        >
          <h1 className="text-7xl md:text-8xl font-display font-bold mb-4 tracking-tighter">
            <span className="text-gradient">Kaspa Br</span>
          </h1>
          <p className="text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed font-medium">
            A Layer 1 mais rápida do mundo, de código aberto, 100% descentralizada e totalmente escalável em uma estrutura blockDAG.
          </p>
        </motion.div>

        {/* Compact Interaction Area */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-24 w-full max-w-6xl">
          
          {/* Left Column */}
          <div className="flex flex-col gap-4 w-full lg:w-auto">
            {leftCards.map((card, i) => (
              <motion.a
                key={card.name}
                href={card.href}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + i * 0.1 }}
                whileHover={{ scale: 1.02, x: 5 }}
                className="glass-card px-6 py-4 flex items-center justify-between gap-4 group cursor-pointer w-full lg:w-72 border-slate-100"
              >
                <span className="font-bold text-slate-700 group-hover:text-kaspa transition-colors">
                  {card.name}
                </span>
                <div className="w-10 h-10 rounded-lg bg-kaspa/10 flex items-center justify-center text-kaspa group-hover:bg-kaspa group-hover:text-white transition-all">
                  {card.icon}
                </div>
              </motion.a>
            ))}
          </div>

          {/* Center Logo */}
          <div className="relative flex items-center justify-center py-12 lg:py-0">
            {/* Concentric Radar Circles */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              {[1, 2, 3, 4].map((i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ 
                    opacity: [0, 0.8, 0], 
                    scale: [0.5, 3.2] 
                  }}
                  transition={{ 
                    duration: 4, 
                    repeat: Infinity, 
                    delay: i * 1,
                    ease: "easeOut" 
                  }}
                  className="absolute border-4 border-kaspa/80 rounded-full" 
                  style={{ width: '120px', height: '120px' }}
                />
              ))}
              {/* Static Radar Lines (Faithful to first print) */}
              {[140, 180, 220, 260, 300].map((size, i) => (
                <div 
                  key={`static-${i}`}
                  className="absolute border-2 border-slate-300 rounded-full opacity-40"
                  style={{ width: `${size}px`, height: `${size}px` }}
                />
              ))}
            </div>

            <motion.a
              href="#tecnologia"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: 'spring', damping: 15, delay: 0.2 }}
              className="relative z-20 w-32 h-32 md:w-48 md:h-48 rounded-full flex items-center justify-center shadow-[0_0_80px_rgba(112,199,186,0.6)] cursor-pointer group overflow-hidden"
            >
              <div className="absolute inset-0 bg-white/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity blur-xl" />
              <img 
                src="https://iili.io/qFWrvnt.png" 
                alt="Kaspa Central Logo" 
                className="w-full h-full object-contain relative z-10"
                referrerPolicy="no-referrer"
              />
            </motion.a>
          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-4 w-full lg:w-auto">
            {rightCards.map((card, i) => (
              <motion.a
                key={card.name}
                href={card.href}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + i * 0.1 }}
                whileHover={{ scale: 1.02, x: -5 }}
                className="glass-card px-6 py-4 flex items-center gap-4 group cursor-pointer w-full lg:w-72 border-slate-100"
              >
                <div className="w-10 h-10 rounded-lg bg-kaspa/10 flex items-center justify-center text-kaspa group-hover:bg-kaspa group-hover:text-white transition-all">
                  {card.icon}
                </div>
                <span className="font-bold text-slate-700 group-hover:text-kaspa transition-colors">
                  {card.name}
                </span>
              </motion.a>
            ))}
          </div>
        </div>

        {/* Bottom Button */}
        <motion.a
          href="#faq"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-12 glass-card px-8 py-4 flex items-center gap-4 group cursor-pointer hover:bg-kaspa/5 border-kaspa/20"
        >
          <div className="w-10 h-10 bg-kaspa/10 rounded-lg flex items-center justify-center text-kaspa">
            <MessageSquare className="w-6 h-6" />
          </div>
          <span className="font-bold text-slate-700">Perguntas e Respostas</span>
        </motion.a>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="mt-12 flex flex-col items-center gap-2"
        >
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">Scroll</span>
          <motion.div 
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-8 rounded-full bg-gradient-to-b from-kaspa to-transparent"
          />
        </motion.div>
      </div>
    </section>
  );
};

const SectionHeading = ({ title, subtitle, badge }: { title: string, subtitle?: string, badge?: string }) => (
  <div className="mb-16">
    {badge && (
      <span className="text-kaspa font-mono text-sm font-bold tracking-widest uppercase mb-4 block">
        {badge}
      </span>
    )}
    <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 text-slate-800">{title}</h2>
    {subtitle && <p className="text-slate-500 text-lg max-w-2xl leading-relaxed">{subtitle}</p>}
  </div>
);

const FeatureCard = ({ feature, index }: { feature: Feature, index: number, key?: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.1 }}
    className="glass-card p-8 hover:bg-kaspa/5 transition-all group cursor-default border-slate-100"
  >
    <div className="w-12 h-12 bg-kaspa/10 rounded-xl flex items-center justify-center text-kaspa mb-6 group-hover:scale-110 transition-transform">
      {feature.icon}
    </div>
    <h3 className="text-xl font-bold mb-4 text-slate-800">{feature.title}</h3>
    <p className="text-slate-500 leading-relaxed">{feature.description}</p>
  </motion.div>
);

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs: FAQItem[] = [
    {
      question: "O que é a Kaspa?",
      answer: `Kaspa é uma criptomoeda Proof-of-Work (PoW) de Layer-1 que usa o protocolo BlockDAG (GHOSTDAG/DAGKNIGHT) em vez de blockchain linear como a maioria.

Permite blocos paralelos, confirmando transações em ~1 segundo, com throughput alto (atualmente 10 BPS, escalável para muito mais), mantendo descentralização e segurança PoW similar ao Bitcoin e com uma velocidade muito superior.

A rede da Kaspa em 2026 completa mais de 4 anos rodando sem problemas, paralisações, etc.`
    },
    {
      question: "Kaspa é centralizada? Quem controla o projeto?",
      answer: `Não existe empresa, entidade central ou CEO que mande, ninguém controla de forma centralizada.

Teve um lançamento justo (sem pré-mineração, ICO ou alocação para fundadores/investidores) e é 100% código aberto, mantida por uma comunidade global de desenvolvedores voluntários (principalmente o time rusty-kaspa).

Decisões técnicas são discutidas publicamente (GitHub, Discord, Telegram) e upgrades são adotados por consenso dos mineradores e nodes.`
    },
    {
      question: "Qual o supply total, emissão e halvings da Kaspa?",
      answer: `Supply total (max supply): ≈ 28.7 bilhões KAS (exato: 28.704.026.601 KAS).

Circulating supply (janeiro 2026): ≈ 27.13–27.14 bilhões KAS (cerca de 94–95% já minerado).

Emissão: Modelo deflacionário suave (chromatic decay) — recompensa por segundo diminui mensalmente por fator (1/2)^(1/12) ≈ 5,4% ao mês, resultando em halving efetivo anual (recompensa cai pela metade a cada ~12 meses).

Halvings: Não há halvings discretos como no Bitcoin; a redução é contínua e mensal desde maio/2022. ~95% do supply minerado até julho 2026. Emissão total termina por volta de 2037–2040.`
    },
    {
      question: "Como posso comprar/conseguir Kaspa?",
      answer: `Corretoras Centralizadas (CEX): a forma mais comum e simples. As principais plataformas que suportam Kaspa estão na aba Corretoras no canto superior deste site.

Mercado P2P (Peer-to-Peer): compra diretamente de outro usuário, sem um intermediário central que controle os fundos.

Mineração: Kaspa utiliza o protocolo GHOSTDAG e pode ser minerada para gerar novas moedas.

Trocas (Swaps) e DEX: se você já possui outras criptomoedas, pode trocá-las por Kaspa.`
    },
    {
      question: "Como posso rodar um nó?",
      answer: `Vídeo (menos de 4 minutos):
https://www.youtube.com/watch?v=E8QYpjWZVqU

Documentação e guias (inclui Raspberry Pi e nó de arquivamento):
https://wiki.kaspa.org/en/node

Tutoriais em vídeo:
• Rusty Kaspa — https://www.youtube.com/watch?v=NI1W3Zt-I-w
• Testnet 11 nós — https://www.youtube.com/watch?v=kxVkQ9596OM&t=144s
• Mineração solo com KNG — https://www.youtube.com/watch?v=2MuebQia1F0
• Nó + mineração 0% taxas — https://www.youtube.com/watch?v=D9teVnqT5oE`
    },
    {
      question: "Por que eu deveria executar um nó?",
      answer: `Aumenta a descentralização e a segurança da rede. Também permite que você acesse sua própria carteira, aumentando sua privacidade.

Ao executar um nó, você ajuda a proteger a rede Kaspa. Seu nó valida transações e blocos, garantindo a integridade do BlockDAG. Cada nó contribui para a descentralização da rede — e uma rede mais descentralizada é mais resiliente e menos suscetível a ataques.`
    },
    {
      question: "Kaspa é melhor que Bitcoin?",
      answer: `Não é “melhor” de forma absoluta, são complementares.

Bitcoin é o ouro digital (reserva de valor, maior rede e segurança comprovada). A Kaspa resolve limitações reais do Bitcoin (velocidade lenta e throughput baixo) com confirmações instantâneas e escalabilidade massiva, sem sacrificar PoW ou descentralização.

Hoje Kaspa operando a 10 blocos por segundo — cerca de 6000x mais rápida que o Bitcoin na primeira camada.`
    },
    {
      question: "Meu amigo maximalista de Bitcoin disse que Kaspa é shitcoin, é verdade?",
      answer: `Kaspa não é uma "shitcoin". Críticas maximalistas muitas vezes vêm de tribalismo (“só Bitcoin vale”) ou medo de competição.

Kaspa resolve limitações reais do Bitcoin (velocidade, escalabilidade) sem sacrificar PoW e descentralização — atacando o trilema com uma arquitetura BlockDAG.`
    },
    {
      question: "Meu amigo maximalista de Monero disse que Kaspa é ruim pois não tem privacidade padrão, é verdade?",
      answer: `Atualmente Kaspa é transparente por design (como Bitcoin). A Monero tem privacidade obrigatória e padrão.

No entanto, já existem soluções para a Kaspa: mixers como Kasmixer (beta), wallets com CoinJoin-like e ferramentas comunitárias para ofuscar transações.

Também está em desenvolvimento a privacidade ZK (zero-knowledge) em Layer-2s como Kasplex zkEVM e projetos como Igra Labs / Caravel, permitindo transações privadas opcionais (opt-in), mantendo a velocidade e composibilidade da Kaspa.`
    },
    {
      question: "Kaspa tem futuro?",
      answer: `Sim. Kaspa tem um futuro promissor como uma das redes PoW mais escaláveis e seguras do mercado, graças à sua arquitetura BlockDAG.

Áreas de contribuição:
• Micropagamentos e apps cotidianos
• Tokenização de RWA (via KII)
• Integração com AI
• DeFi e L2 apps (Kasplex/zkEVM e DAGKNIGHT)
• Cadeia de suprimentos e logística
• Energia e negociação de energia limpa
• IoT / DePIN
• GameFi
• Identidade digital e setor público
• Saúde (emergente)`
    }
  ];

  return (
    <div className="space-y-4">
      {faqs.map((faq, i) => (
        <div key={i} className="glass-card overflow-hidden border-slate-100">
          <button 
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
            className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-slate-50 transition-colors"
          >
            <span className={`font-bold text-lg transition-colors ${openIndex === i ? 'text-kaspa' : 'text-slate-700'}`}>
              {faq.question}
            </span>
            <ChevronDown className={`w-5 h-5 text-kaspa transition-transform ${openIndex === i ? 'rotate-180' : ''}`} />
          </button>
          <AnimatePresence>
            {openIndex === i && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="px-8 pb-6 text-slate-500 leading-relaxed whitespace-pre-line"
              >
                {faq.answer}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
};

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 20 }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-[60] w-14 h-14 bg-kaspa text-white rounded-full shadow-2xl shadow-kaspa/40 flex items-center justify-center hover:bg-kaspa-dark transition-all active:scale-90 group"
          aria-label="Voltar ao topo"
        >
          <ChevronDown className="w-6 h-6 rotate-180 group-hover:-translate-y-1 transition-transform" />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default function App() {
  const [currentRoute, setCurrentRoute] = useState(typeof window !== 'undefined' ? window.location.hash : '');

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentRoute(window.location.hash);
      window.scrollTo(0, 0); // Scroll to top on route change
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const isWhitePapers = currentRoute === '#/white-papers';
  const isLinks = currentRoute === '#/links';
  const isExchanges = currentRoute === '#/exchanges';
  const isWallets = currentRoute === '#/wallets';
  const isCommerce = currentRoute === '#/commerce';

  return (
    <div className="min-h-screen font-sans selection:bg-kaspa/20 relative">
      <div className="relative z-10">
        <Navbar currentRoute={currentRoute} />
        
        {isWhitePapers ? (
          <WhitePapersPage />
        ) : isLinks ? (
          <LinksPage />
        ) : isExchanges ? (
          <ExchangesPage />
        ) : isWallets ? (
          <WalletsPage />
        ) : isCommerce ? (
          <CommercePage />
        ) : (
          <>
            <Hero />

            <KaspaDAGSection />
            
            <SpeedSection />

            <ComparisonsSection />

            <DecentralizationSection />

            <SecuritySection />

            <MiningSection />

            <OtherFeaturesSection />

            <KipsSection />

            <UpdatesSection />

            {/* FAQ Section */}
            <section id="faq" className="py-32 bg-slate-50/50">
              <div className="max-w-4xl mx-auto px-6">
                <SectionHeading 
                  badge="FAQ"
                  title="Perguntas Frequentes"
                  subtitle="Tire suas dúvidas sobre o projeto, tecnologia e como participar da comunidade."
                />
                <FAQ />
              </div>
            </section>
          </>
        )}

        <ScrollToTop />

        {/* Footer */}
        <footer className="py-24 border-t border-slate-200 bg-white overflow-hidden relative">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-kaspa/30 to-transparent" />
          
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-12 gap-16 mb-20">
              <div className="md:col-span-5">
                <div className="flex items-center mb-8">
                  <img 
                    src="https://iili.io/q9v8CsR.png" 
                    alt="Kaspa Logo" 
                    className="h-16 w-auto object-contain"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <p className="text-slate-500 text-lg max-w-md leading-relaxed mb-10">
                  O portal brasileiro dedicado à Kaspa. Informação, tecnologia e comunidade para a criptomoeda mais rápida do mundo.
                </p>
                <div className="flex flex-wrap gap-3 max-w-[320px]">
                  {[
                    { icon: <Send className="w-5 h-5" />, label: "Telegram", color: "hover:bg-[#229ED9]" },
                    { 
                      icon: (
                        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                        </svg>
                      ), 
                      label: "X", 
                      color: "hover:bg-black" 
                    },
                    { icon: <Facebook className="w-5 h-5" />, label: "Facebook", color: "hover:bg-[#1877F2]" },
                    { icon: <Instagram className="w-5 h-5" />, label: "Instagram", color: "hover:bg-[#E4405F]" },
                    { 
                      icon: (
                        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                          <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.03 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
                        </svg>
                      ), 
                      label: "TikTok", 
                      color: "hover:bg-black" 
                    },
                    { icon: <Youtube className="w-5 h-5" />, label: "YouTube", color: "hover:bg-[#FF0000]" },
                    { icon: <Linkedin className="w-5 h-5" />, label: "LinkedIn", color: "hover:bg-[#0077B5]" },
                    { icon: <Github className="w-5 h-5" />, label: "GitHub", color: "hover:bg-[#181717]" },
                    { icon: <Disc className="w-5 h-5" />, label: "Discord", color: "hover:bg-[#5865F2]" },
                  ].map((social, i) => (
                    <motion.a
                      key={i}
                      href="#"
                      whileHover={{ y: -4, scale: 1.1 }}
                      className={`w-10 h-10 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-400 hover:text-white transition-all duration-300 ${social.color} shadow-sm`}
                      title={social.label}
                    >
                      {social.icon}
                    </motion.a>
                  ))}
                </div>
              </div>
              
              <div className="md:col-span-2 md:col-start-7">
                <h4 className="font-bold text-slate-900 mb-8 uppercase tracking-widest text-xs">Links Úteis</h4>
                <ul className="space-y-4 text-slate-500 text-sm font-medium">
                  <li><a href="#" className="hover:text-kaspa transition-colors flex items-center gap-2 group"><ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 -ml-5 group-hover:ml-0 transition-all" /> Explorador de Blocos</a></li>
                  <li><a href="#" className="hover:text-kaspa transition-colors flex items-center gap-2 group"><ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 -ml-5 group-hover:ml-0 transition-all" /> Documentação</a></li>
                  <li><a href="#" className="hover:text-kaspa transition-colors flex items-center gap-2 group"><ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 -ml-5 group-hover:ml-0 transition-all" /> GitHub</a></li>
                  <li><a href="#" className="hover:text-kaspa transition-colors flex items-center gap-2 group"><ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 -ml-5 group-hover:ml-0 transition-all" /> Mineração</a></li>
                </ul>
              </div>

              <div className="md:col-span-2 md:col-start-10">
                <h4 className="font-bold text-slate-900 mb-8 uppercase tracking-widest text-xs">Comunidade</h4>
                <ul className="space-y-4 text-slate-500 text-sm font-medium">
                  <li><a href="#" className="hover:text-kaspa transition-colors flex items-center gap-2 group"><ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 -ml-5 group-hover:ml-0 transition-all" /> Telegram Brasil</a></li>
                  <li><a href="#" className="hover:text-kaspa transition-colors flex items-center gap-2 group"><ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 -ml-5 group-hover:ml-0 transition-all" /> Discord Oficial</a></li>
                  <li><a href="#" className="hover:text-kaspa transition-colors flex items-center gap-2 group"><ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 -ml-5 group-hover:ml-0 transition-all" /> Twitter / X</a></li>
                  <li><a href="#" className="hover:text-kaspa transition-colors flex items-center gap-2 group"><ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 -ml-5 group-hover:ml-0 transition-all" /> YouTube</a></li>
                </ul>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row justify-between items-center pt-10 border-t border-slate-100 gap-6">
              <p className="text-slate-400 text-sm font-medium">
                © 2026 <span className="text-kaspa font-bold">Kaspa Brasil</span>. Todos os direitos reservados.
              </p>
              <div className="flex items-center gap-8 text-xs font-bold text-slate-400 uppercase tracking-widest">
                <a href="#" className="hover:text-kaspa transition-colors">Privacidade</a>
                <a href="#" className="hover:text-kaspa transition-colors">Termos</a>
                <a href="#" className="hover:text-kaspa transition-colors">Cookies</a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
