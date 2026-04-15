import { CheckCircle2, Mail } from 'lucide-react';
import { motion } from 'motion/react';

export default function OpenPositions() {
  return (
    <div className="pt-32 pb-24 max-w-5xl mx-auto px-8">
      <header className="mb-20">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl font-extrabold text-primary tracking-tighter mb-6"
        >
          Open Positions
        </motion.h1>
        <p className="text-xl text-slate-500 font-academic leading-relaxed max-w-3xl">
          We are seeking motivated researchers to join our computational materials design group.
        </p>
      </header>

      {/* Opportunities */}
      <section className="space-y-16 mb-32">
        <div className="flex items-center gap-6 mb-12">
          <h2 className="text-[10px] font-bold uppercase tracking-[0.4em] text-slate-300 shrink-0">Available Opportunities</h2>
          <div className="h-px grow bg-slate-100" />
        </div>

        {[
          {
            title: 'Graduate Students (M.S. / Ph.D.)',
            reqs: 'Required: Degree in Materials Science, Physics, Chemistry, or Chemical Engineering.',
            pref: 'Preferred: Basic programming skills (Python) and interest in quantum mechanics or atomistic modeling.'
          },
          {
            title: 'Postdoctoral Researchers',
            reqs: 'Required: Ph.D. in related field with expertise in DFT or molecular dynamics.',
            pref: 'Expertise in machine learning interatomic potentials or global structure optimization is highly valued.'
          },
          {
            title: 'Research Collaborators',
            reqs: 'Open to joint projects focusing on theory-experiment integration or large-scale materials databases.',
            pref: ''
          }
        ].map((pos, i) => (
          <div key={i} className="group">
            <div className="grid md:grid-cols-12 gap-8 items-start">
              <div className="md:col-span-4">
                <h3 className="font-sans font-extrabold text-2xl text-primary group-hover:text-emerald-600 transition-colors">{pos.title}</h3>
              </div>
              <div className="md:col-span-8 space-y-4">
                <p className="text-lg text-slate-600 font-academic leading-relaxed">{pos.reqs}</p>
                {pos.pref && <p className="text-base text-slate-400 font-academic italic leading-relaxed">{pos.pref}</p>}
              </div>
            </div>
            {i < 2 && <div className="mt-16 h-px w-full bg-slate-50" />}
          </div>
        ))}
      </section>

      {/* Research Projects */}
      <section className="space-y-12 mb-32">
        <div className="flex items-center gap-6 mb-12">
          <h2 className="text-[10px] font-bold uppercase tracking-[0.4em] text-slate-300 shrink-0">Available Research Projects</h2>
          <div className="h-px grow bg-slate-100" />
        </div>

        <div className="grid gap-8">
          {[
            { title: 'AI-accelerated discovery of solid-state electrolytes', desc: 'Development of high-throughput screening workflows and generative models for the design of next-generation battery materials.' },
            { title: 'Operando characterization of catalyst surfaces', desc: 'Simulating dynamic surface reconstruction and reaction kinetics under realistic electrochemical conditions using multiscale modeling.' },
            { title: 'Machine-learning models for defect thermodynamics', desc: 'Predicting defect formation energies and phase stability in complex oxides using advanced statistical learning and active learning strategies.' }
          ].map((project, i) => (
            <motion.div 
              key={i}
              whileHover={{ x: 10 }}
              className="bg-white border border-slate-100 p-10 hover:shadow-xl transition-all"
            >
              <h3 className="font-sans font-extrabold text-xl text-primary mb-4">{project.title}</h3>
              <p className="text-slate-500 font-academic leading-relaxed">{project.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* How to Apply */}
      <section className="bg-primary text-white p-12 md:p-20 rounded-sm shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-400/10 rounded-full blur-3xl -mr-32 -mt-32" />
        
        <h2 className="text-4xl font-extrabold tracking-tight mb-12">How to Apply</h2>
        <div className="grid md:grid-cols-2 gap-16">
          <div className="space-y-8">
            <h3 className="text-[10px] font-bold uppercase tracking-[0.3em] text-emerald-400">Required Materials</h3>
            <ul className="space-y-6">
              {['Curriculum Vitae (CV)', 'Unofficial Transcript (Students)', 'Brief statement of research interests'].map((item) => (
                <li key={item} className="flex items-center gap-4 text-lg font-academic text-slate-200">
                  <CheckCircle2 size={24} className="text-emerald-400 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-8">
            <h3 className="text-[10px] font-bold uppercase tracking-[0.3em] text-emerald-400">Direct Inquiry</h3>
            <p className="text-lg font-academic text-slate-200 leading-relaxed">Interested candidates should email materials to:</p>
            <a 
              href="mailto:taehun.lee@dgist.ac.kr" 
              className="text-3xl font-extrabold text-white hover:text-emerald-400 transition-colors flex items-center gap-4 group"
            >
              <Mail size={32} className="group-hover:scale-110 transition-transform" />
              taehun.lee@dgist.ac.kr
            </a>
            <p className="text-sm text-slate-400 italic mt-12">Applications are reviewed on a rolling basis.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
