import { motion } from 'motion/react';
import { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, ChevronRight, Tag } from 'lucide-react';

export type NewsCategory = 'Publications' | 'Awards' | 'People' | 'Talks' | 'Visits' | 'Lab Life';

export interface NewsItem {
  id: string;
  date: string;
  title: string | ReactNode;
  category: NewsCategory;
  summary?: string | ReactNode;
  hasDetail?: boolean;
}

export const newsData: NewsItem[] = [
  {
    id: 'students-joined-2026',
    date: '2026.05.01',
    title: 'Hyunjin Lee and Kyunghun Lee officially joined the team as research interns.',
    category: 'People',
    hasDetail: false,
  },
  {
    id: 'pub-mos2-2026',
    date: '2026.03.18',
    title: <>New Publication: Mechanistic Origins of Structural Failure in Deeply‐Lithiated Li<sub>x</sub>MoS<sub>2</sub></>,
    category: 'Publications',
    summary: <>Published in <i>Energy & Environmental Materials</i> (IF = 15.0). This study explores the structural failure mechanisms in molybdenum disulfide during deep lithiation.</>,
    hasDetail: true,
  },
  {
    id: 'taehun-lee-joins-dgist',
    date: '2026.03.01',
    title: 'Taehun Lee joins DGIST as an Assistant Professor from JBNU.',
    category: 'People',
    hasDetail: false,
  },
  {
    id: 'website-live',
    date: '2026.03.01',
    title: 'Our group website is now live!',
    category: 'Lab Life',
    hasDetail: false,
  },
  {
    id: 'pub-iro2-2026',
    date: '2026.01.15',
    title: <>New Publication: Atomistic Insights into the Electrochemical Oxygen Evolution Activity of Hollandite IrO<sub>2</sub> Surfaces</>,
    category: 'Publications',
    summary: <>Published in <i>Advanced Science</i> (IF = 15.1). A comprehensive study on the electrochemical activity of IrO<sub>2</sub> surfaces using atomistic simulations.</>,
    hasDetail: true,
  },
];

import PageBanner from '../components/PageBanner';

export default function News() {
  return (
    <>
    <PageBanner hideLine />
    <div className="py-10 max-w-7xl mx-auto px-8">
      <header className="mb-10 pb-8 border-b border-slate-200">
        <div className="flex items-center gap-3 mb-6">
          <span className="h-px w-12 bg-primary" />
          <h1 className="font-sans text-[16px] font-bold uppercase tracking-[0.35em] text-primary leading-none pt-0.5">News</h1>
        </div>
        <p className="font-academic text-slate-700 max-w-2xl leading-relaxed text-[13px] font-light opacity-90 pl-[60px]">
          Recent updates from our lab, including publications, awards, and team activities.
        </p>
      </header>

      <div className="space-y-6">
        {newsData.map((item, i) => (
          <motion.article 
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="group relative flex flex-col md:flex-row gap-4 md:gap-10"
          >
            {/* Left side: Date and Tag */}
            <div className="md:w-32 shrink-0 pt-0.5">
              <div className="flex items-center gap-2 text-primary font-sans text-[11px] font-bold uppercase tracking-widest mb-1.5">
                <Calendar size={12} className="text-tertiary" />
                {item.date}
              </div>
              <div className="inline-flex items-center gap-1.5 px-2 py-0.5 bg-slate-50 text-tertiary rounded-sm text-[9px] font-bold uppercase tracking-widest group-hover:bg-slate-100 transition-colors">
                <Tag size={10} className="text-tertiary" />
                {item.category}
              </div>
            </div>

            {/* Right side: Content */}
            <div className="flex-grow">
              <h3 className="font-sans text-sm font-bold text-primary mb-2 leading-tight group-hover:text-tertiary transition-colors">
                {item.title}
              </h3>
              
                  {item.summary && (
                    <p className="font-academic text-[13px] text-slate-700 leading-relaxed mb-3">
                      {item.summary}
                    </p>
                  )}

              {item.hasDetail && (
                <Link 
                  to={`/news/${item.id}`}
                  className="inline-flex items-center gap-1 text-primary font-sans text-[9px] font-bold uppercase tracking-widest hover:gap-2 transition-all"
                >
                  Read More <ChevronRight size={12} />
                </Link>
              )}
            </div>
          </motion.article>
        ))}
      </div>
    </div>
    </>
  );
}
