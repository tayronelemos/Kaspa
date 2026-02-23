import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  ExternalLink, 
  Search, 
  TrendingUp, 
  Zap, 
  CreditCard, 
  Layers, 
  Globe,
  ArrowRight,
  ShieldCheck,
  Building2
} from 'lucide-react';

type Exchange = {
  name: string;
  url: string;
};

type Category = {
  title: string;
  icon: React.ReactNode;
  description: string;
  exchanges: Exchange[];
  accent: string;
};

const CATEGORIES: Category[] = [
  {
    title: 'Corretoras Centralizadas Grandes',
    icon: <Building2 className="w-5 h-5" />,
    description: 'Plataformas globais com alta liquidez e volume de negociação.',
    accent: 'kaspa',
    exchanges: [
      { name: 'BingX', url: 'https://bingx.com' },
      { name: 'Bitget', url: 'https://www.bitget.com' },
      { name: 'Bitmart', url: 'https://www.bitmart.com' },
      { name: 'Bitrue', url: 'https://www.bitrue.com' },
      { name: 'Bybit', url: 'https://www.bybit.com' },
      { name: 'Bydfi', url: 'https://www.bydfi.com/pt' },
      { name: 'Cex', url: 'https://cex.io' },
      { name: 'Coindxc', url: 'https://coindxc.com' },
      { name: 'CoinEx', url: 'https://www.coinex.com' },
      { name: 'Coinone', url: 'https://coinone.co.kr' },
      { name: 'CoinW', url: 'https://www.coinw.com' },
      { name: 'Digifinex', url: 'https://www.digifinex.com/pt-pt' },
      { name: 'Gate', url: 'https://www.gate.io' },
      { name: 'Hibt', url: 'https://hibt.com' },
      { name: 'Htx', url: 'https://htx.com' },
      { name: 'Kraken', url: 'https://www.kraken.com' },
      { name: 'Kucoin', url: 'https://www.kucoin.com' },
      { name: 'LBank', url: 'https://lbank.com' },
      { name: 'Mexc', url: 'https://www.mexc.com' },
      { name: 'Phemex', url: 'https://phemex.com' },
      { name: 'Poloniex', url: 'https://poloniex.com' },
      { name: 'Tapbit', url: 'https://www.tapbit.com' },
      { name: 'Xt', url: 'https://www.xt.com' },
      { name: 'Weex', url: 'https://www.weex.com' },
    ]
  },
  {
    title: 'Corretoras Centralizadas Pequenas',
    icon: <TrendingUp className="w-5 h-5" />,
    description: 'Plataformas regionais ou em crescimento com suporte a Kaspa.',
    accent: 'slate',
    exchanges: [
      { name: 'AltcoinT', url: 'https://www.altcointrader.co.za' },
      { name: 'Ascendex', url: 'https://ascendex.com' },
      { name: 'Biconomy', url: 'https://www.biconomy.com' },
      { name: 'Bitmarkets', url: 'https://bitmarkets.com/pt' },
      { name: 'BigOne', url: 'https://big.one/trade' },
      { name: 'Bitcointry', url: 'https://bitcointry.com' },
      { name: 'Bitpanda', url: 'https://www.bitpanda.com' },
      { name: 'Bittime', url: 'https://bittime.com' },
      { name: 'Bitvavo', url: 'https://www.bitvavo.com' },
      { name: 'BTCC', url: 'https://www.btcc.com/' },
      { name: 'Btse', url: 'https://www.btse.com' },
      { name: 'Coinmerce', url: 'https://coinmerce.io' },
      { name: 'CoinOne', url: 'https://coinone.co.kr' },
      { name: 'Coinspot', url: 'https://www.coinspot.com.au' },
      { name: 'Digitalsurge', url: 'https://digitalsurge.com.au' },
      { name: 'Exmo', url: 'https://www.exmo.me' },
      { name: 'Hotcoin', url: 'https://www.hotcoin.com' },
      { name: 'Kcex', url: 'https://www.kcex.com' },
      { name: 'Kriptomat', url: 'https://kriptomat.io' },
      { name: 'Novadax', url: 'https://www.novadax.com.br/' },
      { name: 'Ourbit', url: 'https://www.ourbit.com' },
      { name: 'Probit', url: 'https://www.probit.com/en-us' },
      { name: 'Reku', url: 'https://reku.id' },
      { name: 'Superex', url: 'https://www.superex.com/index/language' },
      { name: 'Swyftx', url: 'https://swyftx.com' },
      { name: 'Tapbit', url: 'https://www.tapbit.com' },
      { name: 'Wazirx', url: 'https://wazirx.com' },
      { name: 'Young Platform', url: 'https://youngplatform.com' },
      { name: 'Zedxion', url: 'https://www.zedxion.io' },
    ]
  },
  {
    title: 'Serviços de Swap e Troca Instantânea',
    icon: <Zap className="w-5 h-5" />,
    description: 'Troque suas criptomoedas por Kaspa de forma rápida e sem custódia.',
    accent: 'kaspa',
    exchanges: [
      { name: 'ChangeHero', url: 'https://changehero.io' },
      { name: 'ChangeNow', url: 'https://www.changenow.io' },
      { name: 'Chainnelly', url: 'https://changelly.com' },
      { name: 'CoinoSwap', url: 'https://www.coinoswap.com' },
      { name: 'CoinRabbit', url: 'https://coinrabbit.io/pt' },
      { name: 'Exchange', url: 'https://exchange.io' },
      { name: 'Exolim', url: 'https://exolim.com' },
      { name: 'Godex', url: 'https://godex.io' },
      { name: 'HoudiniSwap', url: 'https://houdiniswap.com' },
      { name: 'LetsExchange', url: 'https://letsexchange.io' },
      { name: 'Nanswap', url: 'https://nanswap.com' },
      { name: 'Nonkyc', url: 'https://nonkyc.io' },
      { name: 'Quickex', url: 'https://quickex.io/pt' },
      { name: 'RocketX', url: 'https://app.rocketx.exchange' },
      { name: 'Swapspace', url: 'https://swapspace.co' },
      { name: 'Swapzone', url: 'https://swapzone.io' },
      { name: 'Swapswop', url: 'https://swapswop.io' },
      { name: 'SimpleSwap', url: 'https://simpleswap.io' },
      { name: 'StealthEx', url: 'https://stealthex.io' },
    ]
  },
  {
    title: 'Plataformas de Pagamento e Fiat On/Off-Ramp',
    icon: <CreditCard className="w-5 h-5" />,
    description: 'Compre Kaspa diretamente com moedas fiduciárias (Real, Dólar, etc).',
    accent: 'slate',
    exchanges: [
      { name: 'Bit2me', url: 'https://pro.bit2me.com' },
      { name: 'Caled', url: 'https://calebandbrown.com/' },
      { name: 'Guardarian', url: 'https://guardarian.com/pt' },
      { name: 'Onramp', url: 'https://onramp.money' },
      { name: 'Paxful', url: 'https://www.paxful.com' },
      { name: 'Topperpay', url: 'https://www.topperpay.com' },
      { name: 'Simplex', url: 'https://www.simplex.com' },
      { name: 'Uphold', url: 'https://uphold.com' },
      { name: 'Wirex', url: 'https://wirexapp.com' },
    ]
  },
  {
    title: 'Outras Plataformas',
    icon: <Layers className="w-5 h-5" />,
    description: 'Diversos outros serviços e plataformas que suportam o ecossistema.',
    accent: 'kaspa',
    exchanges: [
      { name: 'Baltex', url: 'https://baltex.io' },
      { name: 'Coinoswap', url: 'https://www.coinoswap.com/' },
      { name: 'CoinStash', url: 'https://www.coinstash.com.au' },
      { name: 'CoinStore', url: 'https://www.coinstore.com' },
      { name: 'Dex-Trade', url: 'https://dex-trade.com' },
      { name: 'GroveX', url: 'https://www.grovex.io' },
      { name: 'Hibit', url: 'https://hibit.app' },
      { name: 'Jucoin', url: 'https://jucoin.com' },
      { name: 'LCX Exchange', url: 'https://exchange.lcx.com' },
      { name: 'Neverless', url: 'https://neverless.com' },
      { name: 'OrangeX', url: 'https://www.orangex.com' },
      { name: 'Paxful', url: 'https://paxful.com/pt-br' },
      { name: 'Pionex', url: 'https://www.pionex.us' },
      { name: 'Swyftx', url: 'https://swyftx.com' },
      { name: 'Zodia', url: 'http://zodia-custody.com/' },
    ]
  }
];

export default function ExchangesPage() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredCategories = CATEGORIES.map(cat => ({
    ...cat,
    exchanges: cat.exchanges.filter(ex => 
      ex.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })).filter(cat => cat.exchanges.length > 0);

  return (
    <div className="min-h-screen font-sans selection:bg-kaspa/20 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(112,199,186,0.14),transparent_35%),radial-gradient(circle_at_80%_80%,rgba(16,185,129,0.10),transparent_45%)] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-36 pb-20">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <motion.span 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-kaspa font-mono text-sm font-bold tracking-widest uppercase mb-3 block"
            >
              Mercado
            </motion.span>
            <motion.h1 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-6xl font-display font-extrabold text-slate-800 tracking-tight"
            >
              Corretoras
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-slate-500 text-lg mt-4 leading-relaxed"
            >
              Encontre as melhores plataformas para comprar, vender e trocar Kaspa com segurança e liquidez.
            </motion.p>
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="relative w-full md:w-80"
          >
            <input 
              type="text" 
              placeholder="Buscar corretora..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-white/70 backdrop-blur border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-kaspa/30 focus:border-kaspa/50 transition-all text-slate-700 placeholder:text-slate-400"
            />
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 pointer-events-none z-10" />
          </motion.div>
        </div>

        {/* Categories */}
        <div className="space-y-20">
          {filteredCategories.map((category, catIdx) => (
            <section key={category.title}>
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex flex-col md:flex-row md:items-center gap-4 mb-8"
              >
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${category.accent === 'kaspa' ? 'bg-kaspa/10 text-kaspa' : 'bg-slate-100 text-slate-600'}`}>
                  {category.icon}
                </div>
                <div>
                  <h2 className="text-2xl font-display font-bold text-slate-800 tracking-tight">
                    {category.title}
                  </h2>
                  <p className="text-sm text-slate-400 font-medium">{category.description}</p>
                </div>
                <div className="hidden md:block h-[1px] flex-grow bg-slate-200 ml-4" />
              </motion.div>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                {category.exchanges.map((ex, exIdx) => (
                  <motion.a
                    key={ex.name}
                    href={ex.url}
                    target="_blank"
                    rel="noreferrer"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: exIdx * 0.03 }}
                    whileHover={{ y: -4, scale: 1.02 }}
                    className="glass-card p-4 border-slate-100 hover:border-kaspa/30 hover:shadow-lg hover:shadow-kaspa/5 transition-all group flex flex-col items-center justify-center text-center gap-3"
                  >
                    <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-kaspa/10 group-hover:text-kaspa transition-colors">
                      <Globe className="w-5 h-5" />
                    </div>
                    <span className="font-bold text-slate-700 group-hover:text-kaspa transition-colors text-sm">
                      {ex.name}
                    </span>
                    <div className="flex items-center gap-1 text-[10px] font-bold uppercase tracking-widest text-slate-300 group-hover:text-kaspa transition-colors">
                      Acessar <ExternalLink className="w-3 h-3" />
                    </div>
                  </motion.a>
                ))}
              </div>
            </section>
          ))}
        </div>

        {/* Empty State */}
        {filteredCategories.length === 0 && (
          <div className="text-center py-20">
            <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4 text-slate-400">
              <Search className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-slate-700">Nenhuma corretora encontrada</h3>
            <p className="text-slate-500 mt-2">Tente buscar por outro nome.</p>
          </div>
        )}

        {/* Safety Note */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mt-32 glass-card p-8 border-kaspa/20 bg-kaspa/5 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-kaspa/10 blur-[80px] rounded-full -translate-y-1/2 translate-x-1/2" />
          <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
            <div className="w-16 h-16 rounded-2xl bg-kaspa flex items-center justify-center text-white shadow-lg shadow-kaspa/30 shrink-0">
              <ShieldCheck className="w-8 h-8" />
            </div>
            <div className="text-center md:text-left">
              <h4 className="text-2xl font-display font-bold text-slate-800 mb-2">Segurança em Primeiro Lugar</h4>
              <p className="text-slate-500 leading-relaxed">
                Lembre-se: corretoras não são carteiras. Após comprar seus KAS, recomendamos transferi-los para uma carteira onde você possua as chaves privadas. Confira nossa seção de <a href="#/wallets" className="text-kaspa font-bold hover:underline">Carteiras</a> para saber mais.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
