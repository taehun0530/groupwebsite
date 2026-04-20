import { CheckCircle2, Mail } from 'lucide-react';
import { motion } from 'motion/react';

export default function OpenPositions() {
  return (
    <div className="pt-20 pb-12 max-w-5xl mx-auto px-8">
      <header className="mb-8">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-2xl md:text-3xl font-extrabold text-primary tracking-tighter mb-2"
        >
          Open Positions
        </motion.h1>
        <p className="text-sm text-slate-700 font-academic leading-relaxed max-w-3xl">
          We are seeking motivated researchers to join our computational materials design group.
        </p>
      </header>

      {/* Opportunities */}
      <section className="space-y-8 mb-12">
        <div className="flex items-center gap-4 mb-5">
          <h2 className="text-[10px] font-bold uppercase tracking-widest text-slate-900 shrink-0">Available Opportunities</h2>
          <div className="h-px grow bg-slate-100" />
        </div>

        {[
          {
            title: <>Graduate Students<br /><span className="text-sm font-medium opacity-80">(M.S. / Ph.D.)</span></>,
            reqs: 'Required: Degree in Materials Science, Physics, Chemistry, or Chemical Engineering.',
            pref: 'Preferred: Basic programming skills (Python) and interest in quantum mechanics or atomistic modeling.'
          },
          {
            title: <>Postdoctoral<br />Researchers</>,
            reqs: 'Required: Ph.D. in related field with expertise in DFT or molecular dynamics.',
            pref: 'Expertise in machine learning interatomic potentials or global structure optimization is highly valued.'
          }
        ].map((pos, i) => (
          <div key={i} className="group">
            <div className="grid md:grid-cols-12 gap-5 items-start">
              <div className="md:col-span-4">
                <h3 className="font-sans font-extrabold text-base md:text-lg text-primary group-hover:text-tertiary transition-colors leading-tight">{pos.title}</h3>
              </div>
              <div className="md:col-span-8 space-y-2">
                <p className="text-sm text-slate-700 font-academic leading-relaxed">{pos.reqs}</p>
                {pos.pref && <p className="text-xs text-slate-600 font-academic italic leading-relaxed">{pos.pref}</p>}
              </div>
            </div>
            {i < 1 && <div className="mt-8 h-px w-full bg-slate-50" />}
          </div>
        ))}
      </section>

      {/* Research Projects */}
      <section className="space-y-6 mb-12">
        <div className="flex items-center gap-4 mb-5">
          <h2 className="text-[10px] font-bold uppercase tracking-widest text-slate-900 shrink-0">Available Research Projects</h2>
          <div className="h-px grow bg-slate-100" />
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
              <h3 className="font-sans font-extrabold text-[15px] text-primary mb-1.5">{project.title}</h3>
              <p className="text-slate-700 font-academic text-xs leading-relaxed">{project.desc}</p>
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
  );
}
