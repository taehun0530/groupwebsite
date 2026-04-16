import { motion } from 'motion/react';
import { ArrowLeft, Mail, Globe, Award, Briefcase, GraduationCap, Users } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function Profile() {
  const navigate = useNavigate();

  const sections = [
    {
      title: 'Education',
      icon: <GraduationCap size={16} />,
      items: [
        { date: 'Aug 2019', content: 'Ph.D. in Materials Science and Engineering, Yonsei University, South Korea', detail: 'Supervisor: Prof. Aloysius Soon' },
        { date: 'Feb 2011', content: 'B.S. in Metallurgical Engineering, Yonsei University, South Korea' }
      ]
    },
    {
      title: 'Career',
      icon: <Briefcase size={16} />,
      items: [
        { date: 'Mar 2026 – Present', content: 'Assistant Professor', detail: 'Department of Energy Science and Engineering, DGIST, South Korea' },
        { date: 'Sep 2023 – Feb 2026', content: 'Assistant Professor', detail: 'Division of Advanced Materials Engineering, Jeonbuk National University, South Korea' },
        { date: 'Jul 2020 – Jul 2023', content: 'Postdoctoral Research Associate', detail: 'Department of Chemistry, Princeton University, USA (Supervisor: Prof. Annabella Selloni)' },
        { date: 'Sep 2019 – Jun 2020', content: 'Postdoctoral Research Associate', detail: 'Department of Materials Science and Engineering, Yonsei University (Supervisor: Prof. Aloysius Soon)' }
      ]
    },
    {
      title: 'Awards & Fellowships',
      icon: <Award size={16} />,
      items: [
        { date: '2026', content: 'POSCO Science Fellowship' },
        { date: '2025', content: 'JBNU Young Fellow (Outstanding Researcher in Jeonbuk National University)' },
        { date: '2012 – 2014', content: 'Global Ph.D. Fellowship, National Research Foundation of Korea (NRF)' }
      ]
    },
    {
      title: 'Memberships',
      icon: <Users size={16} />,
      items: [
        { date: '2016 – 2023', content: 'Community Board Member, Materials Horizons' }
      ]
    }
  ];

  return (
    <div className="pt-20 pb-12 max-w-4xl mx-auto px-8">
      <button 
        onClick={() => navigate(-1)}
        className="flex items-center gap-2 text-slate-500 hover:text-primary transition-colors mb-6 group"
      >
        <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
        <span className="font-sans text-[10px] font-bold uppercase tracking-widest">Back to People</span>
      </button>

      <header className="mb-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-5 pb-4 relative">
          <div>
            <h1 className="font-sans text-3xl font-extrabold text-primary tracking-tighter mb-1">Taehun Lee</h1>
            <p className="font-sans text-lg text-slate-400 font-medium">이태훈</p>
          </div>
          <div className="flex flex-col gap-1 text-right">
            <div className="flex items-center justify-end gap-2 text-slate-600">
              <Mail size={12} className="text-primary" />
              <span className="font-academic text-xs">taehun.lee@dgist.ac.kr</span>
            </div>
            <div className="flex items-center justify-end gap-2 text-slate-600">
              <Globe size={12} className="text-primary" />
              <a href="https://taehun0530.github.io" target="_blank" rel="noopener noreferrer" className="font-academic text-xs hover:underline">taehun0530.github.io</a>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 w-12 h-1 bg-emerald-500" />
        </div>
      </header>

      <div className="space-y-8">
        {sections.map((section, idx) => (
          <motion.section 
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
          >
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-6 h-6 bg-primary text-white flex items-center justify-center rounded-sm">
                {section.icon}
              </div>
              <h2 className="font-sans text-base font-extrabold text-primary tracking-tight">{section.title}</h2>
            </div>
            
            <div className="space-y-3 ml-3 border-l border-slate-100 pl-6">
              {section.items.map((item, i) => (
                <div key={i} className="relative">
                  <div className="absolute -left-[25px] top-1.5 w-1 h-1 rounded-full bg-emerald-500 border-2 border-white shadow-sm" />
                  <p className="font-sans text-[8px] font-medium text-emerald-600 uppercase tracking-widest mb-0.5">{item.date}</p>
                  <h3 className="font-academic text-sm font-medium text-slate-800 leading-snug">{item.content}</h3>
                  {item.detail && (
                    <p className="font-academic text-[11px] text-slate-500 mt-0.5 italic">{item.detail}</p>
                  )}
                </div>
              ))}
            </div>
          </motion.section>
        ))}
      </div>
    </div>
  );
}
