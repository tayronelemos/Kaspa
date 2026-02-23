import React from 'react';
import { motion } from 'motion/react';
import { FileText, ArrowLeft, ExternalLink } from 'lucide-react';

type Paper = {
  title: string;
  subtitle: string;
  authors: string;
  year: string;
  link: string;
  accent: 'kaspa' | 'slate';
};

const PAPERS: Paper[] = [
  {
    title: 'GhostDag White Paper',
    subtitle: "Bitcoin’s Security Model Revisited (2016)",
    authors: 'Autores: Yonatan Sompolinsky e Aviv Zohar.',
    year: 'Paper que revisita a segurança do Bitcoin e discute limitações que levaram às ideias de DAG/BlockDAG.',
    link: 'https://arxiv.org/pdf/1605.09193',
    accent: 'kaspa',
  },
  {
    title: 'DagKnight White Paper',
    subtitle: "Bitcoin’s Security Model Revisited (2016)",
    authors: 'Autores: Yonatan Sompolinsky e Aviv Zohar.',
    year: 'Paper que revisita a segurança do Bitcoin e discute limitações que levaram às ideias de DAG/BlockDAG.',
    link: 'https://arxiv.org/pdf/1605.09193',
    accent: 'slate',
  },
  {
    title: 'vProg Yellow Paper',
    subtitle: "Bitcoin’s Security Model Revisited (2016)",
    authors: 'Autores: Yonatan Sompolinsky e Aviv Zohar.',
    year: 'Paper que revisita a segurança do Bitcoin e discute limitações que levaram às ideias de DAG/BlockDAG.',
    link: 'https://arxiv.org/pdf/1605.09193',
    accent: 'kaspa',
  },
  {
    title: 'GhostDag White Paper',
    subtitle: "Bitcoin’s Security Model Revisited (2016)",
    authors: 'Autores: Yonatan Sompolinsky e Aviv Zohar.',
    year: 'Paper que revisita a segurança do Bitcoin e discute limitações que levaram às ideias de DAG/BlockDAG.',
    link: 'https://arxiv.org/pdf/1605.09193',
    accent: 'slate',
  },
  {
    title: 'DagKnight White Paper',
    subtitle: "Bitcoin’s Security Model Revisited (2016)",
    authors: 'Autores: Yonatan Sompolinsky e Aviv Zohar.',
    year: 'Paper que revisita a segurança do Bitcoin e discute limitações que levaram às ideias de DAG/BlockDAG.',
    link: 'https://arxiv.org/pdf/1605.09193',
    accent: 'kaspa',
  },
];

function PaperCard({ paper }: { paper: Paper, key?: React.Key }) {
  const ring = paper.accent === 'kaspa' ? 'ring-kaspa/30' : 'ring-slate-200';
  const iconBg = paper.accent === 'kaspa' ? 'bg-kaspa/10 text-kaspa' : 'bg-slate-100 text-slate-600';
  const btn = paper.accent === 'kaspa'
    ? 'bg-kaspa hover:bg-kaspa-dark text-white'
    : 'bg-slate-700 hover:bg-slate-900 text-white';

  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`glass-card p-7 border-slate-100 ring-1 ${ring} hover:shadow-xl transition-shadow`}
    >
      <div className="flex items-start justify-between gap-4 mb-5">
        <div className="flex items-center gap-3">
          <div className={`w-11 h-11 rounded-xl flex items-center justify-center ${iconBg}`}>
            <FileText className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-lg font-extrabold text-slate-800 leading-tight">{paper.title}</h3>
            <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mt-1">White Paper</p>
          </div>
        </div>
        <ExternalLink className="w-4 h-4 text-slate-300" />
      </div>

      <div className="space-y-3 text-sm leading-relaxed text-slate-500">
        <p className="font-semibold text-slate-700">{paper.subtitle}</p>
        <p><span className="font-semibold text-slate-600">Autores:</span> {paper.authors.replace('Autores: ', '')}</p>
        <p>{paper.year}</p>
        <p className="break-all">
          <span className="font-semibold text-slate-600">Link:</span> {paper.link}
        </p>
      </div>

      <div className="mt-6 pt-5 border-t border-slate-100 flex items-center justify-between gap-4">
        <a
          href={paper.link}
          target="_blank"
          rel="noreferrer"
          className={`${btn} inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full text-[11px] font-bold uppercase tracking-widest shadow-sm hover:shadow-md active:scale-95 transition-all`}
        >
          Clique aqui <ExternalLink className="w-4 h-4" />
        </a>
        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-300">PDF</span>
      </div>
    </motion.div>
  );
}

export default function WhitePapersPage() {
  return (
    <div className="min-h-screen font-sans selection:bg-kaspa/20 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(112,199,186,0.14),transparent_35%),radial-gradient(circle_at_80%_80%,rgba(16,185,129,0.10),transparent_45%)] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-36 pb-20">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <span className="text-kaspa font-mono text-sm font-bold tracking-widest uppercase mb-3 block">
              Biblioteca
            </span>
            <h1 className="text-4xl md:text-5xl font-display font-extrabold text-slate-800 tracking-tight">
              White Papers
            </h1>
            <p className="text-slate-500 text-lg mt-4 max-w-2xl leading-relaxed">
              Uma seleção organizada de papers fundamentais sobre segurança, consenso e BlockDAG — com links diretos para leitura.
            </p>
          </div>

          <a
            href="#/" className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-white/70 backdrop-blur border border-slate-200 text-slate-700 hover:text-kaspa hover:border-kaspa/40 transition-colors shadow-sm"
          >
            <ArrowLeft className="w-4 h-4" /> Voltar ao início
          </a>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PAPERS.slice(0, 3).map((p, idx) => (
            <PaperCard key={idx} paper={p} />
          ))}
        </div>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {PAPERS.slice(3).map((p, idx) => (
            <PaperCard key={`b-${idx}`} paper={p} />
          ))}
        </div>

        {/* Footer note */}
        <div className="mt-14 glass-card p-6 border-slate-100 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div>
            <p className="text-slate-700 font-bold">Dica rápida</p>
            <p className="text-slate-500 text-sm leading-relaxed mt-1">
              Abra os PDFs em uma nova aba para manter sua navegação e compare conceitos como GHOSTDAG, DAGKNIGHT e segurança PoW.
            </p>
          </div>
          <div className="flex items-center gap-2 text-slate-400 text-xs font-bold uppercase tracking-widest">
            <span className="w-2 h-2 rounded-full bg-kaspa" />
            Curadoria Kaspa Br
          </div>
        </div>
      </div>
    </div>
  );
}
