import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link as LinkIcon, ExternalLink } from 'lucide-react';

const publications = [
  {
    year: '2026',
    title: 'Selective Charge Injection via Topological van der Waals Contacts for Barrier-Free p-Type TMD Transistors',
    authors: 'S. Ghods†, H.-C. Jang, J.-H. Choi, M. W. Kim, H. Lee, T.-H. Kim, K. Heo, H. J. Kwun, T. Lee, Y. K. Lee, S. H. Lee, S.-I. Kim, W. Baek, S. Bae, J.-Y. Moon#, and J.-H. Lee#',
    journal: 'Adv. Funct. Mater. (IF: 19.0) e20506 (2026)',
    doi: 'https://doi.org/10.1002/adfm.202520506',
    featured: false
  },
  {
    year: '2024',
    title: 'Data-Mining Fluoride-Based Solid-State Electrolytes for Monovalent Metal Batteries',
    authors: 'G. Heo†, A. Soon#, T. Lee#',
    journal: 'J. Mater. Chem. A (IF: 11.9) 12, 27409 (2024)',
    doi: 'https://doi.org/10.1039/D4TA04553J',
    featured: true
  },
  {
    year: '2024',
    title: 'Vacancy-Assisted Transformation of MoSx Nanosheets into Defective MoSx Nanoclusters to Regulate Sodium-Ion Electrode Functionality',
    authors: 'X. Jin†, T. Lee†, A. Soon#, and S.-J. Hwang#',
    journal: 'Adv. Funct. Mater. (IF: 19.0) 231446 (2024)',
    doi: 'https://doi.org/10.1002/adfm.202316446',
    featured: false
  },
  {
    year: '2022',
    title: 'Composition-Controlled Ultrathin Holey TiO1-xNx Nanosheets as Powerful Hybridization Matrices for Highly Mass-Efficient Electrocatalysts',
    authors: 'X. Jin†, K.-G. Lee†, T. Lee†, G. Lee, S. M. Oh, A. Soon#, and S.-J. Hwang#',
    journal: 'Chem. Eng. J. (IF: 15.1) 437, 135415 (2022)',
    doi: 'https://doi.org/10.1016/j.cej.2022.135415',
    featured: false
  },
  {
    year: '2019',
    title: 'Polymorphic Expressions of Ultrathin Oxidic Layers of Mo on Au(111)',
    authors: 'T. Lee†, Y.-J. Lee, K. Palotás, G. Lee, C. Stampfl, and A. Soon#',
    journal: 'Nanoscale (IF: 6.7) 11, 6023 (2019)',
    doi: 'https://doi.org/10.1039/c8nr10278c',
    featured: true
  },
  {
    year: '2017',
    title: 'Ab Initio Thermodynamics of Oxidic Surface Structures under Controlled Growth Conditions',
    authors: 'T. Lee†, Y. Lee, S. Piccinin, and A. Soon#',
    journal: 'J. Phys. Chem. C (IF: 3.7) 121, 2228 (2017)',
    doi: 'https://doi.org/10.1021/acs.jpcc.6b11445',
    featured: false
  }
];

const years = ['All', '2026', '2024', '2022', '2019', '2017'];

export default function Publications() {
  const [activeYear, setActiveYear] = useState('All');

  const filteredPubs = activeYear === 'All' 
    ? publications 
    : publications.filter(p => p.year === activeYear);

  const groupedPubs = filteredPubs.reduce((acc, pub) => {
    if (!acc[pub.year]) acc[pub.year] = [];
    acc[pub.year].push(pub);
    return acc;
  }, {} as Record<string, typeof publications>);

  return (
    <div className="pt-32 pb-24">
      <header className="max-w-7xl mx-auto px-8 mb-16">
        <h1 className="font-sans font-extrabold text-6xl tracking-tighter text-primary mb-4">Publications</h1>
      </header>

      {/* Filter */}
      <section className="sticky top-16 z-40 bg-white/80 backdrop-blur-md mb-16 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-8 py-4">
          <div className="flex items-center gap-8 overflow-x-auto no-scrollbar">
            <span className="font-sans text-[10px] font-bold uppercase tracking-[0.3em] text-primary shrink-0">Filter by Year</span>
            <div className="flex gap-2">
              {years.map(year => (
                <button
                  key={year}
                  onClick={() => setActiveYear(year)}
                  className={`font-sans text-sm font-bold px-6 py-2 rounded-full transition-all ${
                    activeYear === year 
                      ? 'bg-primary text-white shadow-lg' 
                      : 'text-slate-500 hover:bg-slate-50'
                  }`}
                >
                  {year}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-8 space-y-24">
        <AnimatePresence mode="wait">
          <motion.div 
            key={activeYear}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="space-y-24"
          >
            {Object.keys(groupedPubs).sort((a, b) => b.localeCompare(a)).map(year => (
              <section key={year} className="relative">
                <div className="flex items-baseline gap-8 mb-10">
                  <h2 className="font-sans font-extrabold text-slate-100 select-none text-8xl leading-none">{year}</h2>
                  <div className="h-px grow bg-slate-100" />
                </div>
                
                <div className="space-y-6">
                  {groupedPubs[year].map((pub, i) => (
                    <motion.div 
                      key={i}
                      whileHover={{ x: 10 }}
                      className="group py-8 border-b border-slate-100 hover:bg-slate-50/50 px-8 -mx-8 transition-all"
                    >
                      <h3 className="text-primary font-sans font-extrabold text-2xl mb-4 leading-tight group-hover:text-emerald-600 transition-colors">
                        {pub.title}
                      </h3>
                      <p className="text-slate-600 font-academic text-base mb-4 leading-relaxed">
                        {pub.authors.split('T. Lee').map((part, index, array) => (
                          <span key={index}>
                            {part}
                            {index < array.length - 1 && <strong className="text-primary">T. Lee</strong>}
                          </span>
                        ))}
                      </p>
                      <div className="flex flex-wrap items-center gap-6">
                        <p className="text-slate-400 font-academic text-sm italic">{pub.journal}</p>
                        <a 
                          href={pub.doi} 
                          target="_blank" 
                          className="text-emerald-600 text-xs font-bold uppercase tracking-widest hover:underline flex items-center gap-2"
                        >
                          <LinkIcon size={14} />
                          DOI Link
                        </a>
                        {pub.featured && (
                          <span className="px-3 py-1 bg-emerald-50 text-emerald-600 text-[9px] font-bold uppercase tracking-widest rounded-sm border border-emerald-100">
                            Featured
                          </span>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </section>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
