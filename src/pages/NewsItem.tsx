import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { ChevronLeft, Calendar, Tag, ExternalLink } from 'lucide-react';
import { newsData } from './News';

export default function NewsItem() {
  const { id } = useParams();
  const item = newsData.find((n) => n.id === id);

  if (!item) {
    return <Navigate to="/news" />;
  }

  // Define detailed content for specific news items (like publications)
  const renderDetail = () => {
    if (item.id === 'pub-mos2-2026') {
      return (
        <div className="space-y-8">
          <div className="p-6 bg-slate-50 border-l-4 border-primary">
            <h4 className="font-sans text-xs font-bold text-primary uppercase tracking-widest mb-4">Publication Details</h4>
            <dl className="grid grid-cols-1 sm:grid-cols-[100px_1fr] gap-y-3 font-academic text-sm">
              <dt className="text-slate-500 font-bold uppercase text-[10px]">Authors</dt>
              <dd className="text-slate-600">Gunyoung Heo, Giyeok Lee, Ki‐Tae Lee, Aloysius Soon, <strong>Taehun Lee</strong></dd>
              
              <dt className="text-slate-500 font-bold uppercase text-[10px]">Journal</dt>
              <dd className="text-slate-600 italic">Energy & Environmental Materials</dd>
              
              <dt className="text-slate-500 font-bold uppercase text-[10px]">Date</dt>
              <dd className="text-slate-600">2026/03/18</dd>
              
              <dt className="text-slate-500 font-bold uppercase text-[10px]">DOI/Link</dt>
              <dd className="text-slate-600">e70328</dd>
            </dl>
          </div>
          <p className="font-academic text-base leading-relaxed text-slate-600">
            This research highlights the mechanistic origins of structural degradation in MoS<sub>2</sub> during lithiation. Using atomistic insights, we identify critical pathways that lead to failure, providing a roadmap for designing more resilient electrode materials.
          </p>
        </div>
      );
    }

    if (item.id === 'pub-iro2-2026') {
      return (
        <div className="space-y-8">
          <div className="p-6 bg-slate-50 border-l-4 border-primary">
            <h4 className="font-sans text-xs font-bold text-primary uppercase tracking-widest mb-4">Publication Details</h4>
            <dl className="grid grid-cols-1 sm:grid-cols-[100px_1fr] gap-y-3 font-academic text-sm">
              <dt className="text-slate-500 font-bold uppercase text-[10px]">Authors</dt>
              <dd className="text-slate-600">Sangseob Lee, Kisung Kang, <strong>Taehun Lee</strong>, Aloysius Soon</dd>
              
              <dt className="text-slate-500 font-bold uppercase text-[10px]">Journal</dt>
              <dd className="text-slate-600 italic">Advanced Science</dd>
              
              <dt className="text-slate-500 font-bold uppercase text-[10px]">Volume/Issue</dt>
              <dd className="text-slate-600">Vol 13, Issue 6, e14939</dd>
              
              <dt className="text-slate-500 font-bold uppercase text-[10px]">Date</dt>
              <dd className="text-slate-600">2026/01/15</dd>
            </dl>
          </div>
          <p className="font-academic text-base leading-relaxed text-slate-600">
            Hollandite-type IrO<sub>2</sub> exhibits unique electrochemical properties. Our work provides the first comprehensive atomistic analysis of its surface activity during the oxygen evolution reaction (OER), revealing why certain surfaces out-perform traditional catalysts.
          </p>
        </div>
      );
    }

    return (
      <p className="font-academic text-base leading-relaxed text-slate-600">
        More details about this update will be posted soon.
      </p>
    );
  };

  return (
    <div className="pt-20 pb-12 max-w-3xl mx-auto px-8">
      <Link 
        to="/news" 
        className="inline-flex items-center gap-2 text-slate-500 hover:text-primary font-sans text-[10px] font-bold uppercase tracking-widest transition-colors mb-6"
      >
        <ChevronLeft size={14} /> Back to News
      </Link>

      <motion.article
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <header className="mb-8">
          <div className="flex flex-wrap items-center gap-4 text-[10px] font-bold uppercase tracking-widest mb-3">
            <span className="flex items-center gap-1.5 text-tertiary">
              <Calendar size={12} /> {item.date}
            </span>
            <span className="flex items-center gap-1.5 text-slate-500">
              <Tag size={12} /> {item.category}
            </span>
          </div>
          <h1 className="font-sans text-2xl md:text-3xl font-extrabold text-primary tracking-tight leading-tight mb-5">
            {item.title}
          </h1>
        </header>

        <div className="prose prose-slate max-w-none">
          {renderDetail()}
        </div>

        <div className="mt-12 pt-8 border-t border-slate-100 flex justify-between items-center">
          <Link 
            to="/news"
            className="text-primary font-sans text-[10px] font-bold uppercase tracking-widest hover:text-secondary transition-colors"
          >
            ← Previous News
          </Link>
          <button className="flex items-center gap-2 px-5 py-2 bg-primary text-white font-sans text-[10px] font-bold uppercase tracking-widest hover:bg-tertiary transition-colors">
            Share <ExternalLink size={12} />
          </button>
        </div>
      </motion.article>
    </div>
  );
}
