import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  ExternalLink, 
  Search, 
  Info, 
  BarChart3, 
  Wrench, 
  Users, 
  ShoppingBag, 
  Gamepad2, 
  Lightbulb,
  ArrowLeft,
  Globe
} from 'lucide-react';

type LinkItem = {
  name: string;
  url: string;
  description: string;
};

type Category = {
  title: string;
  icon: React.ReactNode;
  links: LinkItem[];
};

const CATEGORIES: Category[] = [
  {
    title: 'Informações Gerais',
    icon: <Info className="w-5 h-5" />,
    links: [
      { name: 'kaspa.org', url: 'https://kaspa.org', description: 'Site oficial da Kaspa, apresenta visão geral do projeto, wallets, exchanges, notícias e recursos para a comunidade.' },
      { name: 'wiki.kaspa.org', url: 'https://wiki.kaspa.org', description: 'Wiki comunitária com explicações detalhadas sobre o protocolo GhostDAG, arquitetura e conceitos técnicos da Kaspa.' },
      { name: 'kaspafaq.com', url: 'https://kaspafaq.com', description: 'Site de Perguntas Frequentes (FAQ) focado em explicar Kaspa de forma simples para novos usuários.' },
      { name: 'research.kas.pa', url: 'https://research.kas.pa', description: 'Forum/plataforma de pesquisa comunitária sobre Kaspa, discussões técnicas profundas, papers, propostas de melhorias, etc.' },
      { name: 'api.kaspa.org/docs', url: 'https://api.kaspa.org/docs', description: 'Documentação da API pública da Kaspa, voltada para desenvolvedores que querem integrar ou interagir com a rede via API.' },
      { name: 'hashdag.medium.com', url: 'https://hashdag.medium.com', description: 'Blog pessoal no Medium do desenvolvedor Yonatan Sompolinsky, com artigos explicativos e tutoriais relacionados à Kaspa.' },
      { name: 'medium.com/@coderofstuff', url: 'https://medium.com/@coderofstuff', description: 'Blog pessoal no Medium do desenvolvedor Core da Kaspa, com artigos explicativos e tutoriais.' },
    ]
  },
  {
    title: 'Ferramentas de Análise',
    icon: <BarChart3 className="w-5 h-5" />,
    links: [
      { name: 'explorer.kaspa.org', url: 'https://explorer.kaspa.org', description: 'Explorador oficial e comunitário, com rastreamento de blocos, transações, mineradores e estatísticas da BlockDAG.' },
      { name: 'kaspa.stream/', url: 'https://kaspa.stream/', description: 'Explorador avançado com dados em tempo real (TPS, BPS, hashrate, nodes, mempool, miners, top addresses e protocolos L2 como KRC-20).' },
      { name: 'katscan.xyz', url: 'https://katscan.xyz', description: 'Explorador focado em tokens KRC-20 e insights relacionados a ativos na rede Kaspa.' },
      { name: 'kaspavisualizer.com', url: 'https://kaspavisualizer.com', description: 'Visualizador 3D do BlockDAG em alta taxa (10 BPS).' },
      { name: 'macmachi.github.io/kaspa-network-visualizer', url: 'https://macmachi.github.io/kaspa-network-visualizer', description: 'Visualizador da rede Kaspa.' },
      { name: 'kasview.netlify.app', url: 'https://kasview.netlify.app', description: 'Ferramenta de visualização da rede (variante ou fork de visualizadores DAG).' },
      { name: 'kaspaglo.be', url: 'https://kaspaglo.be', description: 'Dashboard global de métricas da rede.' },
      { name: 'kaspaespeed.com', url: 'https://kaspaespeed.com', description: 'Focado em velocidade da rede (BPS, TPS, latência e performance pós-Crescendo).' },
      { name: 'kaspa-gdpv.net', url: 'https://kaspa-gdpv.net', description: 'Ferramenta de análise de métricas avançadas.' },
      { name: 'kasparainbowchart.com', url: 'https://kasparainbowchart.com', description: 'Rainbow chart adaptado para Kaspa (análise de preço/histórico com bandas de valuation).' },
      { name: 'analytics.kasmedia.com', url: 'https://analytics.kasmedia.com', description: 'O Kaspa Analytics é um dashboard de nível industrial que oferece mais de 30 gráficos detalhados sobre a rede Kaspa.' },
      { name: 'kaspalytics.com', url: 'https://kaspalytics.com', description: 'O Kaspalytics é uma plataforma de análise de dados on-chain dedicada à rede Kaspa. Oferece métricas detalhadas do ecossistema.' },
      { name: 'kasparchive.com', url: 'https://kasparchive.com', description: 'Arquivo/histórico de dados da rede.' },
      { name: 'kaspainsights.com', url: 'https://kaspainsights.com', description: 'O Kaspa Insights é uma plataforma analítica que oferece métricas avançadas e modelos matemáticos específicos para a rede Kaspa.' },
      { name: 'kaspa-lens.com', url: 'https://kaspa-lens.com', description: 'Plataforma completa e em tempo real dedicada à Kaspa: preço atualizado, variações, market cap, volume 24h, hashrate da rede, supply circulante, rankings de exchanges por volume e liquidez.' },
      { name: 'kaspahub.com', url: 'https://kaspahub.com', description: 'Uma plataforma comunitária independente que reúne tudo sobre Kaspa em um só lugar.' },
    ]
  },
  {
    title: 'Ferramentas e Serviços Técnicos',
    icon: <Wrench className="w-5 h-5" />,
    links: [
      { name: 'kaspanodes.com', url: 'https://kaspanodes.com', description: 'Tracker de nós Kaspa com contagem em tempo real, histórico de nodes ativos e médias de longo prazo.' },
      { name: 'nodes.kaspa.ws', url: 'https://nodes.kaspa.ws', description: 'Mapa interativo de nós públicos Kaspa (visualização geográfica da distribuição da rede).' },
      { name: 'katpool.xyz', url: 'https://katpool.xyz', description: 'Pool de mineração de código aberto para Kaspa, com features avançadas (dashboard analítico, recompensas duplas com $NACHO, baixa taxa e foco em transparência/descentralização).' },
      { name: 'mineable.money', url: 'https://mineable.money', description: 'Site focado em mineração descentralizada POW.' },
      { name: 'deepwiki.com/kaspanet/rusty-kaspa', url: 'https://deepwiki.com/kaspanet/rusty-kaspa', description: 'Documentação/wiki detalhada do Rusty-Kaspa.' },
      { name: 'deepwiki.com/kaspanet/vprogs/1-overview', url: 'https://deepwiki.com/kaspanet/vprogs/1-overview', description: 'Esta página oferece uma visão técnica simplificada sobre os VProgs (Programas Virtuais) na rede Kaspa.' },
      { name: 'github.com/kas-builder/KasPush...', url: 'https://github.com/kas-builder/KasPush', description: 'Repositório GitHub relacionado a ferramentas da Kaspa.' },
      { name: 'kasmixer.com', url: 'https://kasmixer.com', description: 'Mixer para Kaspa (em fase beta), focado em privacidade de transações (mistura de fundos para ofuscar origens).' },
      { name: 'app.ksndomains.org', url: 'https://app.ksndomains.org', description: 'Esta é a aplicação oficial do Kaspa Name Service (KNS), um serviço de nomes descentralizados na blockchain Kaspa.' },
      { name: 'kaspadao.org', url: 'https://kaspadao.org', description: 'Kaspa DAO oficial: primeira DAO na rede Kaspa, com governança on-chain via token KDAO.' },
      { name: 'katgov.xyz', url: 'https://katgov.xyz', description: 'É a plataforma de governança descentralizada da Kaspa Alliance for Transparency (K.A.T. Foundation).' },
      { name: 'kasplex.org/home', url: 'https://kasplex.org/home', description: 'Site oficial da Kasplex, uma infraestrutura para o ecossistema Kaspa, especializada em habilitar contratos inteligentes e aplicações programáveis.' },
      { name: 'igralabs.com/hero', url: 'https://igralabs.com/hero', description: 'Página oficial da Igra Labs, um projeto que constrói um Layer 2 (L2) baseado em zk-rollup EVM-compatível sobre o BlockDAG da Kaspa.' },
      { name: 'kastools.com', url: 'https://kastools.com', description: 'Conjunto de ferramentas otimizadas para Kaspa (KasBay), provavelmente incluindo utilidades como conversores, explorers leves, APIs ou helpers para usuários/desenvolvedores.' },
      { name: 'kgi.kaspad.net', url: 'https://kgi.kaspad.net', description: 'Kaspa Graph Inspector (ferramenta para inspeção/visualização avançada do BlockDAG ou grafo da rede).' },
    ]
  },
  {
    title: 'Comunidade e Mídia',
    icon: <Users className="w-5 h-5" />,
    links: [
      { name: 'kasmedia.com', url: 'https://kasmedia.com', description: 'Plataforma de mídia principal: artigos técnicos, notícias, entrevistas, análises de mercado/on-chain, dashboards e atualizações técnicas.' },
      { name: 'kaspa.news/', url: 'https://kaspa.news/', description: 'Agregador comunitário de mídia: feed em tempo real de tweets/X, vídeos, GitHub, discussões, eventos, sentimento e atualizações do ecossistema.' },
      { name: 'kaspaweekly.com', url: 'https://kaspaweekly.com', description: 'Newsletter oficial de notícias e highlights da Kaspa (foco em mídia comunitária periódica).' },
      { name: 'kaspa.social/', url: 'https://kaspa.social/', description: 'Plataforma de notícias sociais e comunidade: cobertura 24/7 de preço, Twitter/X, Reddit, fóruns abertos para discussões, BlockDAG updates e doações.' },
      { name: 'kaspahub.org', url: 'https://kaspahub.org', description: 'Hub central comunitário: recursos para iniciantes, notícias, eventos, chats comunitários, ecossistema (projetos, wallets, merchants), developer tools e conexões globais.' },
      { name: 'kaspa.university', url: 'https://kaspa.university', description: 'Kaspa Universidade: primeira plataforma Learn-to-Earn na L1 Kaspa – cursos sobre BlockDAG, recompensas em KAS (0.1 por curso), diplomas NFT (KRC-721), etc.' },
      { name: 'kas.coffee', url: 'https://kas.coffee', description: 'Plataforma para criar páginas personalizadas de doações em Kaspa: setup rápido, temas customizáveis, integração social e pagamentos instantâneos.' },
      { name: 'kaspaflow.com', url: 'https://kaspaflow.com', description: 'Uma plataforma comunitária brasileira dedicada ao Kaspa, com foco em educação, compartilhamento de conhecimento, redes sociais.' },
    ]
  },
  {
    title: 'Mercado e Comércio',
    icon: <ShoppingBag className="w-5 h-5" />,
    links: [
      { name: 'kaspamap.com', url: 'https://kaspamap.com', description: 'Mapa comunitário interativo de lugares que aceitam KAS como pagamento.' },
      { name: 'kasmap.org', url: 'https://kasmap.org', description: 'KasMap: diretório/mapa comunitário de merchants aceitando Kaspa, com busca, proteção de privacidade e foco em descoberta de negócios que suportam transações em KAS.' },
      { name: 'kasbay.org', url: 'https://kasbay.org', description: 'Essa plataforma Kaspa com seções dedicadas a Shopping (compra de produtos/serviços com crypto), KRC20 Marketplace (trading de tokens KRC-20) e sistemas de pagamento.' },
      { name: 'kasmart.org/', url: 'https://kasmart.org/', description: 'Marketplace descentralizado para itens no ecossistema Kaspa – NFTs, domínios KNS, bens físicos (eletrônicos, colecionáveis), serviços, leilões e buy-it-now.' },
      { name: 'kaspabuy.shop', url: 'https://kaspabuy.shop', description: 'KaspaBuy: loja online temática Kaspa que aceita pagamentos diretos em KAS. Vende mercadorias como camisetas, shorts, canecas, adesivos, chaveiros, etc.' },
      { name: 'kaspafinance.io', url: 'https://kaspafinance.io', description: 'Plataforma DeFi na zkEVM da Kaspa – DEX com AMM para trocas rápidas, fazendas de múltiplas emissões (em breve), empréstimos no estilo Aave (em desenvolvimento), ferramentas avançadas, bots de negociação e ferramenta de criação de tokens KRC-20.' },
    ]
  },
  {
    title: 'Outros Recursos e Projetos Criativos',
    icon: <Lightbulb className="w-5 h-5" />,
    links: [
      { name: 'kasia.fyi/', url: 'https://kasia.fyi/', description: 'Kasia: app de mensagens privado e descentralizado. Usa uma carteira Kaspa como login (sem email/telefone), encriptação end-to-end e sequenciamento de mensagens no BlockDAG Kaspa para privacidade máxima.' },
      { name: 'kasiabook.com', url: 'https://kasiabook.com', description: 'É um recurso auxiliar leve da Kasia, não um app ou wallet em si — apenas um “catálogo verificado” para tornar o messaging Kasia mais acessível e social.' },
      { name: 'k-social.network/', url: 'https://k-social.network/', description: 'K-Social é uma rede social descentralizada (semelhante ao Twitter). Ele integra interações sociais diretamente com dados da rede.' },
      { name: 'kaspajobs.com', url: 'https://kaspajobs.com', description: 'Plataforma de recrutamento para oportunidades de profissionais freelancers ou em tempo integral (desenvolvedores, designers, redatores e profissionais de marketing) com pagamento em KAS.' },
      { name: 'kas.live', url: 'https://kas.live', description: 'Dashboard humorístico que calcula quantos KAS são necessários para comprar um Big Mac (baseado no preço real-time).' },
      { name: 'proofofworks.com', url: 'https://proofofworks.com', description: 'Uma plataforma integrada à rede para recrutamento, gestão de pagamentos e histórico profissional no ecossistema Kaspa.' },
      { name: 'kaspaobs.com', url: 'https://kaspaobs.com', description: 'Kaspa Jobs oferece vagas freelance e de tempo integral para desenvolvedores, designers, redatores e profissionais de marketing, com pagamentos realizados em KAS.' },
    ]
  },
  {
    title: 'Jogos',
    icon: <Gamepad2 className="w-5 h-5" />,
    links: [
      { name: 'kascasino - kascasino.xyz', url: 'https://kascasino.xyz', description: 'Hub de Play-to-Earn & Gambling descentralizado. Integração nativa com KAS para apostas e saques instantâneos.' },
      { name: 'kasplay - kasplay.fun/', url: 'https://kasplay.fun/', description: 'KasPlay: plataforma de arcade on-chain, oferece jogos clássicos e temáticos como Tetris, Snake, Breakout, Invaders, Kaspat (eat crypto coins), Kasbomber, Kasracers, Kas Rocket, Kasminer, Kasrunner, Crypto Shooter, Trilemma Quest.' },
    ]
  }
];

export default function LinksPage() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredCategories = CATEGORIES.map(cat => ({
    ...cat,
    links: cat.links.filter(link => 
      link.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
      link.description.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })).filter(cat => cat.links.length > 0);

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
              Ecossistema
            </motion.span>
            <motion.h1 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-6xl font-display font-extrabold text-slate-800 tracking-tight"
            >
              Links Úteis
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-slate-500 text-lg mt-4 leading-relaxed"
            >
              Uma curadoria completa de recursos, ferramentas, comunidades e projetos construídos sobre a rede Kaspa.
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
              placeholder="Buscar recursos..."
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
                className="flex items-center gap-3 mb-8"
              >
                <div className="w-10 h-10 rounded-xl bg-kaspa/10 flex items-center justify-center text-kaspa">
                  {category.icon}
                </div>
                <h2 className="text-2xl font-display font-bold text-slate-800 tracking-tight">
                  {category.title}
                </h2>
                <div className="h-[1px] flex-grow bg-slate-200 ml-4" />
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.links.map((link, linkIdx) => (
                  <motion.a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noreferrer"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: linkIdx * 0.05 }}
                    whileHover={{ y: -5 }}
                    className="glass-card p-6 border-slate-100 hover:shadow-xl hover:shadow-kaspa/5 transition-all group relative overflow-hidden"
                  >
                    <div className="absolute top-0 right-0 w-16 h-16 bg-kaspa/5 rounded-bl-full -translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                    
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-2">
                        <Globe className="w-4 h-4 text-kaspa opacity-50" />
                        <h3 className="font-bold text-slate-800 group-hover:text-kaspa transition-colors">
                          {link.name}
                        </h3>
                      </div>
                      <ExternalLink className="w-4 h-4 text-slate-300 group-hover:text-kaspa transition-colors" />
                    </div>
                    
                    <p className="text-sm text-slate-500 leading-relaxed line-clamp-3">
                      {link.description}
                    </p>

                    <div className="mt-6 pt-4 border-t border-slate-50 flex items-center text-[10px] font-bold uppercase tracking-widest text-kaspa opacity-0 group-hover:opacity-100 transition-opacity">
                      Visitar Site <ArrowLeft className="w-3 h-3 ml-2 rotate-180" />
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
            <h3 className="text-xl font-bold text-slate-700">Nenhum resultado encontrado</h3>
            <p className="text-slate-500 mt-2">Tente buscar por outros termos ou categorias.</p>
          </div>
        )}

        {/* Footer Note */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-32 p-8 rounded-3xl bg-slate-800 text-white relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-kaspa/10 blur-[80px] rounded-full -translate-y-1/2 translate-x-1/2" />
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-xl text-center md:text-left">
              <h4 className="text-2xl font-display font-bold mb-2">Sentiu falta de algo?</h4>
              <p className="text-slate-400">
                O ecossistema Kaspa está em constante expansão. Se você conhece um projeto ou ferramenta que deveria estar aqui, entre em contato com a comunidade.
              </p>
            </div>
            <a 
              href="#faq" 
              className="px-8 py-4 bg-kaspa hover:bg-kaspa-dark text-white rounded-full font-bold uppercase tracking-widest transition-all shadow-lg shadow-kaspa/20 active:scale-95"
            >
              Sugerir Link
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
