import { motion } from 'motion/react';
import { ChevronLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

import PageBanner from '../components/PageBanner';

export default function Collaborators() {
  const groups = [
    {
      title: 'Theory',
      members: [
        { name: 'Prof. Aloysius Soon', role: 'Yonsei University (Materials Science and Engineering), KR' },
        { name: 'Prof. Yonghyuk Lee', role: 'Dongguk University (Chemical and Biochemical Engineering), KR' },
        { name: 'Dr. Sungwoo Kang', role: 'Korea Institute of Science and Technology (Computational Science Research Center), KR' },
        { name: 'Prof. Thomas Purcell', role: 'University of Arizona (Chemistry and Biochemistry), US' },
      ]
    },
    {
      title: 'Experiment',
      members: [
        { name: 'Prof. Tae-Wook Kim', role: 'Jeonbuk National University (Flexible and Printable Electronics), KR' },
        { name: 'Prof. Haneol Lee', role: 'Gwangju Institute of Science and Technology (Materials Science and Engineering), KR' },
        { name: 'Prof. Keun Heo', role: 'Jeonbuk National University (Semiconductor Science and Technology), KR' },
      ]
    }
  ];

  return (
    <>
    <PageBanner hideLine />
    <div className="py-24 max-w-4xl mx-auto px-8">
      <Link 
        to="/people" 
        className="inline-flex items-center gap-2 text-slate-600 hover:text-primary font-sans text-[10px] font-bold uppercase tracking-widest transition-colors mb-6"
      >
        <ChevronLeft size={14} /> Back to People
      </Link>

      <header className="mb-24">
        <div className="flex items-center gap-3 mb-6">
          <span className="h-px w-12 bg-primary" />
          <h1 className="font-sans text-[16px] font-bold uppercase tracking-[0.35em] text-primary leading-none pt-0.5">Current Collaborators</h1>
        </div>
        <p className="font-academic text-slate-700 max-w-2xl leading-relaxed text-[13px] font-light opacity-90 pl-[60px]">
          Active partnerships with leading researchers and institutions worldwide, driving multidisciplinary breakthroughs in materials science.
        </p>
      </header>

      <div className="space-y-24">
        {groups.map((group, groupIdx) => (
          <section key={groupIdx}>
            <div className="flex items-center gap-4 mb-6">
              <h2 className="text-[10px] font-bold uppercase tracking-widest text-primary shrink-0">
                {group.title}
              </h2>
              <div className="h-px grow bg-slate-200" />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {group.members.map((collab, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: (groupIdx * group.members.length + i) * 0.05 }}
                  className="p-4 bg-white border border-slate-100 hover:border-slate-200 hover:shadow-sm transition-all rounded-sm"
                >
                  <h3 className="font-sans font-bold text-primary text-sm mb-1">{collab.name}</h3>
                  <p className="font-academic text-[11px] text-slate-700 italic leading-relaxed">{collab.role}</p>
                </motion.div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
    </>
  );
}
