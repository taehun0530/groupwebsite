import { motion } from 'motion/react';
import { ChevronLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function FormerCollaborators() {
  const theoryList = [
    { name: 'Prof. Annabella Selloni', role: 'Princeton University (Chemistry), US' },
    { name: 'Dr. Simone Piccinin', role: 'CNR-IOM at SISSA (Condensed Matter Theory), IT' },
  ];

  const experimentList = [
    { name: 'Prof. Seong-Ju Hwang', role: 'Yonsei University (Materials Science and Engineering), KR' },
    { name: 'Prof. Xiaoyan Jin', role: 'University of Seoul (Applied Chemistry), KR' },
    { name: 'Prof. Kwangwook Park', role: 'Jeonbuk National University (Electronic Materials Engineering), KR' },
    { name: 'Prof. Yoon Kyeung Lee', role: 'Jeonbuk National University (Electronic Materials Engineering), KR' },
  ];

  return (
    <div className="pt-24 pb-20 max-w-4xl mx-auto px-8">
      <Link 
        to="/people" 
        className="inline-flex items-center gap-2 text-slate-600 hover:text-primary font-sans text-[10px] font-bold uppercase tracking-widest transition-colors mb-8"
      >
        <ChevronLeft size={14} /> Back to People
      </Link>

      <header className="mb-12">
        <h1 className="font-sans text-3xl font-extrabold text-primary tracking-tighter mb-4">
          Former Collaborators
        </h1>
        <p className="font-academic text-slate-700 max-w-2xl leading-relaxed">
          Acknowledging the past collaborations that have contributed significantly to our research foundation and academic growth.
        </p>
      </header>

      <div className="space-y-16">
        {/* Theory List */}
        <section>
          <div className="flex items-center gap-4 mb-8">
            <h2 className="font-sans text-xs font-bold text-primary uppercase tracking-[0.2em] whitespace-nowrap">Theory</h2>
            <div className="h-px w-full bg-slate-100"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {theoryList.map((person, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="p-4 bg-white border border-slate-100 hover:border-slate-200 transition-colors"
              >
                <h3 className="font-sans font-bold text-primary text-sm mb-1">{person.name}</h3>
                <p className="font-academic text-[11px] text-slate-700 italic">{person.role}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Experiment List */}
        <section>
          <div className="flex items-center gap-4 mb-8">
            <h2 className="font-sans text-xs font-bold text-primary uppercase tracking-[0.2em] whitespace-nowrap">Experiment</h2>
            <div className="h-px w-full bg-slate-100"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {experimentList.map((person, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="p-4 bg-white border border-slate-100 hover:border-slate-200 transition-colors"
              >
                <h3 className="font-sans font-bold text-primary text-sm mb-1">{person.name}</h3>
                <p className="font-academic text-[11px] text-slate-700 italic">{person.role}</p>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
