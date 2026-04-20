import { motion } from 'motion/react';
import { ChevronLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Alumni() {
  const alumniList = [
    { 
      name: 'Junhyun Moon (문준현)', 
      role: '학부생 연구원 (Undergraduate Intern), 2024.04 – 2025.12', 
      next: 'Currently Integrated Course at KAIST' 
    },
    { 
      name: 'Changgyu Cho (조창규)', 
      role: '학부생 연구원 (Undergraduate Intern), 2024.07 – 2025.12', 
      next: '' 
    },
    { 
      name: 'Junho Lee (이준호)', 
      role: '학부생 연구원 (Undergraduate Intern), 2023.12 – 2025.06', 
      next: 'Currently Integrated Course at KIST' 
    },
  ];

  return (
    <div className="pt-20 pb-12 max-w-4xl mx-auto px-8">
      <Link 
        to="/people" 
        className="inline-flex items-center gap-2 text-slate-600 hover:text-primary font-sans text-[10px] font-bold uppercase tracking-widest transition-colors mb-6"
      >
        <ChevronLeft size={14} /> Back to People
      </Link>

      <header className="mb-8">
        <h1 className="font-sans text-2xl md:text-3xl font-extrabold text-primary tracking-tighter mb-3">
          Alumni
        </h1>
        <p className="font-academic text-slate-700 max-w-2xl leading-relaxed text-sm">
          Celebrating the achievements and career paths of our former group members.
        </p>
      </header>

      <div className="space-y-3">
        {alumniList.map((alumni, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.1 }}
            className="p-3 bg-white border border-slate-100 flex flex-col md:flex-row md:items-center md:justify-between group hover:border-slate-200 transition-all gap-2 rounded-sm"
          >
            <div>
              <h3 className="font-sans font-bold text-primary text-sm leading-tight">{alumni.name}</h3>
              <p className="font-academic text-xs text-slate-600 font-medium">{alumni.role}</p>
            </div>
            {alumni.next && (
              <p className="font-academic text-sm text-tertiary font-bold italic md:text-right">{alumni.next}</p>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
}
