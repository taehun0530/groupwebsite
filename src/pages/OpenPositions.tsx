import { CheckCircle2, Mail } from 'lucide-react';
import { motion } from 'motion/react';

import PageBanner from '../components/PageBanner';

export default function OpenPositions() {
  return (
    <>
    <PageBanner hideLine />
    <div className="py-24 max-w-7xl mx-auto px-8">
      {/* Header Section */}
      <header className="mb-24 pb-8 border-b border-slate-200">
        <div className="flex items-center gap-3 mb-6">
          <span className="h-px w-12 bg-primary" />
          <h1 className="font-sans text-[16px] font-bold uppercase tracking-[0.35em] text-primary leading-none pt-0.5">Open Positions</h1>
        </div>
        <p className="font-academic text-slate-700 leading-relaxed text-[13px] font-light opacity-90 pl-[60px]">
          We are seeking motivated researchers to join our computational materials design group.
        </p>
      </header>

      {/* Opportunities */}
      <section className="space-y-6 mb-24">
        <div className="flex items-center gap-4 mb-4">
          <h2 className="text-[10px] font-bold uppercase tracking-widest text-primary shrink-0">Available Opportunities</h2>
          <div className="h-px grow bg-slate-200" />
        </div>

        {[
          {
            title: <>Graduate Students<br /><span className="text-sm font-medium opacity-80">(M.S. / Ph.D.)</span></>,
            reqs: 'Required: Degree in Materials Science, Physics, Chemistry, Computer Science, or Chemical Engineering.',
            pref: 'Preferred: Basic programming skills (Python) and interest in quantum mechanics or atomistic modeling.'
          },
          {
            title: <>Postdoctoral<br />Researchers</>,
            reqs: 'Required: Ph.D. in related field with expertise in DFT or molecular dynamics.',
            pref: 'Expertise in machine learning interatomic potentials or global structure optimization is highly valued.'
          }
        ].map((pos, i) => (
          <div key={i} className="group">
            <div className="grid md:grid-cols-12 gap-1.5 md:gap-4 items-start">
              <div className="md:col-span-3">
                <h3 className="font-sans font-extrabold text-[13px] md:text-sm text-primary group-hover:text-tertiary transition-colors leading-tight">{pos.title}</h3>
              </div>
              <div className="md:col-span-9 space-y-1">
                <p className="text-[13px] text-slate-700 font-academic leading-relaxed">{pos.reqs}</p>
                {pos.pref && <p className="text-[11px] text-slate-600 font-academic italic leading-relaxed">{pos.pref}</p>}
              </div>
            </div>
            {i < 1 && <div className="mt-6 h-px w-full bg-slate-50" />}
          </div>
        ))}
      </section>

      {/* Research Projects */}
      <section className="space-y-6 mb-24">
        <div className="flex items-center gap-4 mb-5">
          <h2 className="text-[10px] font-bold uppercase tracking-widest text-primary shrink-0">Available Research Projects</h2>
          <div className="h-px grow bg-slate-200" />
        </div>

        <div className="grid gap-4">
          {[
            { title: 'AI-accelerated discovery of solid-state electrolytes', desc: 'Development of high-throughput screening workflows and generative models for the design of next-generation battery materials.' },
            { title: 'Operando characterization of catalyst surfaces', desc: 'Simulating dynamic surface reconstruction and reaction kinetics under realistic electrochemical conditions using multiscale modeling.' },
            { title: 'Machine-learning models for defect thermodynamics', desc: 'Predicting defect formation energies and phase stability in complex oxides using advanced statistical learning and active learning strategies.' }
          ].map((project, i) => (
            <motion.div 
              key={i}
              whileHover={{ x: 4 }}
              className="bg-white border border-slate-100 p-5 hover:shadow-lg transition-all rounded-sm"
            >
              <h3 className="font-sans font-extrabold text-sm text-primary mb-1.5">{project.title}</h3>
              <p className="text-slate-700 font-academic text-[11px] leading-relaxed">{project.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* How to Apply */}
      <section className="bg-primary text-white p-7 md:p-10 rounded-sm shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-accent-blue/10 rounded-full blur-3xl -mr-32 -mt-32" />
        
        <h2 className="text-xl font-extrabold tracking-tight mb-2 text-white">How to Apply</h2>
        <div className="h-px w-full bg-white/20 mb-8" />
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <h3 className="text-[10px] font-bold uppercase tracking-widest text-accent-blue">Required Materials</h3>
            <ul className="space-y-2.5">
              {['Curriculum Vitae (CV)', 'Unofficial Transcript (Students)'].map((item) => (
                <li key={item} className="flex items-center gap-2.5 text-sm font-academic text-slate-100">
                  <CheckCircle2 size={16} className="text-accent-blue shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-[10px] font-bold uppercase tracking-widest text-accent-blue">Direct Inquiry</h3>
            <p className="text-sm font-academic text-slate-100 leading-relaxed">Interested candidates should email materials to:</p>
            <a 
              href="mailto:taehun.lee@dgist.ac.kr" 
              className="text-lg font-extrabold text-white hover:text-accent-blue transition-colors flex items-center gap-2.5 group"
            >
              <Mail size={20} className="group-hover:scale-110 transition-transform" />
              taehun.lee@dgist.ac.kr
            </a>
          </div>
        </div>
      </section>
    </div>
    </>
  );
}
