import React from 'react';
import { motion } from 'motion/react';
import { 
  MapPin, 
  Store, 
  CheckCircle2, 
  ArrowRight, 
  ShoppingBag, 
  Smartphone, 
  Globe,
  ExternalLink,
  PlusCircle,
  ShieldCheck,
  Zap
} from 'lucide-react';

export default function CommercePage() {
  return (
    <div className="min-h-screen font-sans selection:bg-kaspa/20 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(112,199,186,0.14),transparent_35%),radial-gradient(circle_at_80%_80%,rgba(16,185,129,0.10),transparent_45%)] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-36 pb-20">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-kaspa font-mono text-sm font-bold tracking-widest uppercase mb-3 block"
          >
            Adoção Real
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-display font-extrabold text-slate-800 tracking-tight"
          >
            Mapa de Comércios
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-slate-500 text-lg mt-4 leading-relaxed"
          >
            Descubra estabelecimentos que já aceitam Kaspa como pagamento em todo o mundo e aprenda como integrar seu próprio negócio.
          </motion.p>
        </div>

        {/* Map Section */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
          className="mb-24 rounded-[32px] overflow-hidden border border-slate-200 shadow-2xl shadow-kaspa/10 bg-white"
        >
          <div className="p-4 border-b border-slate-100 flex items-center justify-between bg-slate-50/50">
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5 text-kaspa" />
              <span className="font-bold text-slate-700">Kaspa Map Live</span>
            </div>
            <a 
              href="https://kaspamap.com/" 
              target="_blank" 
              rel="noreferrer"
              className="text-xs font-bold text-kaspa hover:underline flex items-center gap-1"
            >
              Abrir em tela cheia <ExternalLink className="w-3 h-3" />
            </a>
          </div>
          <div className="aspect-video w-full bg-slate-100 relative">
            <iframe 
              src="https://kaspamap.com/" 
              className="w-full h-full border-none"
              title="Kaspa Map"
              allow="geolocation"
            />
          </div>
        </motion.div>

        {/* Tutorials Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* How to Register */}
          <motion.section 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card p-10 border-slate-100"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-2xl bg-kaspa/10 text-kaspa flex items-center justify-center">
                <PlusCircle className="w-6 h-6" />
              </div>
              <h2 className="text-2xl font-display font-bold text-slate-800">Tutorial: Cadastrar seu comércio</h2>
            </div>
            
            <div className="space-y-6">
              {[
                { step: '1', text: 'Acesse o site: kaspamap.com/', link: 'https://kaspamap.com/' },
                { step: '2', text: 'Localize o botão "Add a place" no topo ou no mapa principal.' },
                { step: '3', text: 'Clique em "Add" para abrir o formulário de submissão.' },
                { step: '4', text: 'Preencha os campos: Nome, Endereço completo, Website/Redes Sociais e Categoria.' },
                { step: '5', text: 'Verificação: O site exige uma pequena quantia em KAS (ex: 0.1 a 1 KAS) para evitar spam.' },
                { step: '6', text: 'Conecte sua wallet (Kaspium, Ledger) ou envie manualmente para o endereço mostrado.' },
                { step: '7', text: 'Envie o formulário e aguarde a aprovação manual pela comunidade.' }
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-slate-100 text-slate-500 flex items-center justify-center font-bold text-sm">
                    {item.step}
                  </span>
                  <p className="text-slate-600 leading-relaxed">
                    {item.text} {item.link && <a href={item.link} className="text-kaspa font-bold hover:underline">{item.link}</a>}
                  </p>
                </div>
              ))}
            </div>
            
            <div className="mt-8 p-4 bg-kaspa/5 rounded-2xl border border-kaspa/10">
              <p className="text-xs text-slate-500 font-medium italic">
                Alternativa oficial: Adicione também no mapa oficial da Kaspa em <a href="https://kaspa.org/add-listing/" className="text-kaspa hover:underline">kaspa.org/add-listing/</a>
              </p>
            </div>
          </motion.section>

          {/* How to Accept */}
          <motion.section 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card p-10 border-slate-100"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-2xl bg-kaspa/10 text-kaspa flex items-center justify-center">
                <Store className="w-6 h-6" />
              </div>
              <h2 className="text-2xl font-display font-bold text-slate-800">Como aceitar Kaspa</h2>
            </div>
            
            <div className="space-y-6">
              {[
                'Baixe a carteira Kaspium na Play Store ou App Store.',
                'Crie uma nova carteira e guarde sua seed phrase offline.',
                'No app, clique em "Receber" ou "Receive".',
                'Digite o valor em KAS (ou em fiat - o app converte automaticamente).',
                'Mostre o QR code para o cliente escanear com a wallet dele.',
                'A confirmação chega em ~1-10 segundos (Kaspa é muito rápida!).',
                'Veja o saldo atualizar no app. Pronto!'
              ].map((text, i) => (
                <div key={i} className="flex gap-4">
                  <CheckCircle2 className="w-6 h-6 text-kaspa flex-shrink-0" />
                  <p className="text-slate-600 leading-relaxed">{text}</p>
                </div>
              ))}
            </div>

            <div className="mt-12 pt-8 border-t border-slate-100">
              <h3 className="font-bold text-slate-800 mb-4 flex items-center gap-2">
                <Zap className="w-4 h-4 text-kaspa" /> Tutorial para WooCommerce
              </h3>
              <ul className="space-y-3">
                {[
                  'Crie conta gratuita em nowpayments.io',
                  'No dashboard: Settings → Add your wallet Kaspa',
                  'Gere API Key em "API" ou "Integration"',
                  'No WordPress: Instale o plugin oficial NOWPayments',
                  'Configure: Ative Kaspa e cole sua API Key',
                  'No checkout, o cliente escolhe Kaspa → vê QR → paga'
                ].map((text, i) => (
                  <li key={i} className="text-sm text-slate-500 flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-kaspa mt-1.5 flex-shrink-0" />
                    {text}
                  </li>
                ))}
              </ul>
            </div>
          </motion.section>
        </div>

        {/* Assets Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-24 text-center"
        >
          <h2 className="text-3xl font-display font-bold text-slate-800 mb-12">Baixe e use no seu estabelecimento</h2>
          <div className="flex flex-wrap justify-center gap-8">
            <div className="group relative">
              <div className="absolute inset-0 bg-kaspa/20 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
              <img 
                src="https://iili.io/qFWNK2S.png" 
                alt="Kaspa Accepted Here Black" 
                className="h-32 md:h-48 relative z-10 hover:scale-105 transition-transform cursor-pointer"
                referrerPolicy="no-referrer"
              />
              <p className="mt-4 text-xs font-bold text-slate-400 uppercase tracking-widest">Adesivo Dark</p>
            </div>
            <div className="group relative">
              <div className="absolute inset-0 bg-kaspa/20 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
              <img 
                src="https://iili.io/qFWOjKQ.png" 
                alt="Kaspa Accepted Here White" 
                className="h-32 md:h-48 relative z-10 hover:scale-105 transition-transform cursor-pointer"
                referrerPolicy="no-referrer"
              />
              <p className="mt-4 text-xs font-bold text-slate-400 uppercase tracking-widest">Adesivo Light</p>
            </div>
          </div>
          <div className="mt-12">
            <button className="px-8 py-4 bg-slate-800 hover:bg-slate-900 text-white rounded-full font-bold uppercase tracking-widest transition-all flex items-center gap-2 mx-auto">
              Baixar Kit de Mídia Completo <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </motion.div>

        {/* Support Banner */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-32 p-12 rounded-[40px] bg-kaspa text-white relative overflow-hidden shadow-2xl shadow-kaspa/20"
        >
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-2xl text-center md:text-left">
              <h4 className="text-3xl font-display font-bold mb-4">Dúvidas na integração?</h4>
              <p className="text-white/80 text-lg leading-relaxed">
                Nossa comunidade está pronta para ajudar você a aceitar Kaspa no seu negócio. Entre em nosso Discord ou Telegram para suporte técnico gratuito.
              </p>
            </div>
            <div className="flex gap-4">
              <button className="px-8 py-4 bg-white text-kaspa rounded-full font-bold uppercase tracking-widest transition-all hover:bg-slate-50 active:scale-95">
                Suporte Técnico
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
