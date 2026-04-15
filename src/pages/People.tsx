import { motion } from 'motion/react';
import { Mail, Globe, GraduationCap, UserPlus, User } from 'lucide-react';

export default function People() {
  return (
    <div className="pt-32 pb-24 max-w-7xl mx-auto px-8">
      {/* PI Section */}
      <section className="mb-32">
        <h2 className="font-sans text-4xl font-extrabold text-primary tracking-tight mb-16">Principal Investigator</h2>
        <div className="flex flex-col md:flex-row gap-16 items-start">
          <div className="w-full md:w-1/3 sticky top-32">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="aspect-[4/5] bg-slate-100 overflow-hidden rounded-sm group shadow-2xl"
            >
              <img 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAznHCIsKs-ZZrKw_-zZrByLs6D0HXMSD3PsYKpOtXvAaBIMExGq3dsrwD6vZxavAODvVe-S-ltBRay3xVklGlYTC8rq4P_YqTISbMit10bkcHdYTAEjxdldxaOXOoAQAL7yVHUYpB6cf5lwh5zqkEorXXQIm3iiapFLvra1zmVYoUxyltxswbe20Qpp1CJLiI5QKO2lyK1PZ3_FtTl2rcsGDOeT12MNx1WpJPlwZlbD6AOu7jQUQYcb9Gdjui4EwkhL8flenpTQQ" 
                alt="Taehun Lee" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
            </motion.div>
            <div className="mt-10 flex flex-col gap-4">
              <a href="mailto:taehun.lee@dgist.ac.kr" className="flex items-center gap-4 text-slate-500 hover:text-primary transition-colors group">
                <Mail size={20} className="text-primary" />
                <span className="font-sans text-sm font-semibold tracking-tight">taehun.lee@dgist.ac.kr</span>
              </a>
              <a href="https://taehun0530.github.io" target="_blank" className="flex items-center gap-4 text-slate-500 hover:text-primary transition-colors group">
                <Globe size={20} className="text-primary" />
                <span className="font-sans text-sm font-semibold tracking-tight">taehun0530.github.io</span>
              </a>
              <a href="#" className="flex items-center gap-4 text-slate-500 hover:text-primary transition-colors group">
                <GraduationCap size={20} className="text-primary" />
                <span className="font-sans text-sm font-semibold tracking-tight">Google Scholar</span>
              </a>
            </div>
          </div>
          
          <div className="w-full md:w-2/3">
            <header className="mb-10">
              <p className="font-sans text-xs font-bold text-emerald-600 uppercase tracking-[0.2em] mb-3">Assistant Professor</p>
              <h3 className="font-sans text-5xl font-extrabold text-primary tracking-tighter mb-4">
                Taehun Lee <span className="text-3xl text-slate-300 font-medium ml-4">이태훈</span>
              </h3>
            </header>
            
            <div className="space-y-10">
              <p className="font-academic text-xl leading-relaxed text-slate-600">
                Taehun Lee is an Assistant Professor in the Department of Energy Science and Engineering at DGIST. His group develops machine-learning-guided atomistic modeling tools to understand and design functional materials under realistic conditions, with interests spanning interfaces, defects, transport, and data-driven materials design.
              </p>
              
              <div>
                <h4 className="font-sans text-sm font-bold text-primary uppercase tracking-[0.2em] mb-6 border-l-4 border-primary pl-6">Research Interests</h4>
                <div className="flex flex-wrap gap-3">
                  {['DFT & ab initio MD', 'Machine-learning Potentials', 'Materials-Property Prediction', 'Electrochemical Interfaces'].map((tag) => (
                    <span key={tag} className="px-4 py-2 bg-slate-100 text-slate-600 rounded-full text-[11px] font-bold uppercase tracking-widest">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              
              <button className="inline-flex items-center gap-3 text-primary font-sans text-xs font-bold uppercase tracking-[0.3em] hover:text-emerald-600 transition-all border-b-2 border-primary/20 pb-2">
                Open Profile →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Researchers */}
      <section className="mb-32">
        <h2 className="font-sans text-3xl font-extrabold text-primary tracking-tight mb-12">Researchers</h2>
        <div className="py-20 px-12 bg-surface-container-low rounded-sm text-center border-2 border-dashed border-slate-200">
          <p className="font-academic text-slate-500 italic text-lg">Our postdoctoral team is currently expanding. Positions available for 2025.</p>
        </div>
      </section>

      {/* Students */}
      <section className="mb-32">
        <h2 className="font-sans text-3xl font-extrabold text-primary tracking-tight mb-12">Students</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { 
              name: 'Hyunjin Lee', 
              ko: '이현진', 
              role: 'Ph.D. Student', 
              tags: ['Defects', 'MLIP Development'],
              img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBI8gmjcilKm_k3PCfPV37kciyfGGv25-g_49-NgZTUm858MF7MjJUp5_HowhvmLLMyS4mLtwnrBlKO97V0cTYB8e-9rHGS2iFbCM3DG4f6WSJTdcTrnfVAL4bqzDJImyvY2mvYE-cOk9lhBIi9UUWtMAHirUJwZsDsnVz8vJ_V1sIjWDwxNmB-YvdaxNoLX7AaDGRP_HEqQo9JeAwsQDDeVbdrFVxXOxgXW9Ne-3lfhrSR1Q6I3xLY11X6RFVbRNdhYJW2C8RfSw'
            },
            { 
              name: 'Kyunghun Lee', 
              ko: '이경훈', 
              role: 'Master Student', 
              tags: ['Defects', 'MLIP Development'],
              img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCdkfamMJwjzE9nmAikuTLbgrANwlrI5kaS5eas8zHnG7GRgQ9_MVErW1aSFvkCm4lxbSDEm1qT7heTQ_926Xkq8JBw8ipUWo3Jl0CrT-PIRqm0IFhx7JlNtrnZepSqM2qeiQ-ceuaOjPWAIgK97dRe4oSJLCvQUyH6Wmn6nIPdqpN7kJi2NGA8n1UG4Kht6Zsx4oNzl1gOuT7_b8nPwUPgQ45TmIRRln47It8n5dAbqEgJQeaBwLBHM1FoOsqG9duMjNyXfd7DHw'
            },
          ].map((student, i) => (
            <motion.article 
              key={i}
              whileHover={{ y: -10 }}
              className="bg-white group flex flex-col h-full overflow-hidden transition-all duration-300 hover:shadow-2xl border border-slate-100"
            >
              <div className="aspect-square bg-slate-50 overflow-hidden">
                <img 
                  src={student.img} 
                  alt={student.name} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <p className="font-sans text-[10px] font-bold text-emerald-600 uppercase tracking-[0.2em] mb-3">{student.role}</p>
                <h3 className="font-sans text-xl font-extrabold text-primary mb-4">
                  {student.name} <span className="text-sm text-slate-300 font-medium ml-2">{student.ko}</span>
                </h3>
                <div className="flex flex-wrap gap-2 mb-8">
                  {student.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 bg-slate-50 text-slate-500 rounded-full text-[9px] font-bold uppercase tracking-widest">
                      {tag}
                    </span>
                  ))}
                </div>
                <button className="mt-auto flex items-center gap-2 text-primary font-sans text-[10px] font-bold uppercase tracking-[0.2em] hover:text-emerald-600 transition-all">
                  Open profile →
                </button>
              </div>
            </motion.article>
          ))}
          
          {/* Recruitment Card */}
          <article className="bg-slate-50 border-2 border-dashed border-slate-200 group flex flex-col h-full overflow-hidden items-center justify-center p-10 text-center">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform">
              <UserPlus size={28} className="text-emerald-600" />
            </div>
            <h3 className="font-sans text-xl font-extrabold text-primary mb-3">Join Our Team</h3>
            <p className="font-academic text-sm text-slate-500 mb-8 leading-relaxed">We are looking for motivated students interested in atomistic modeling.</p>
            <button className="px-8 py-3 bg-primary text-white font-sans text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-emerald-600 transition-colors">Apply Now</button>
          </article>

          {/* Placeholder */}
          <article className="bg-slate-50/50 border border-slate-100 border-dashed group flex flex-col h-full overflow-hidden items-center justify-center p-10 text-center opacity-40">
            <User size={48} className="text-slate-300 mb-4" />
            <p className="font-sans text-[10px] font-bold uppercase tracking-[0.3em] text-slate-300">Coming Soon</p>
          </article>
        </div>
      </section>

      {/* Alumni & Collaborators */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
        <section>
          <h2 className="font-sans text-3xl font-extrabold text-primary tracking-tight mb-12">Alumni</h2>
          <div className="space-y-4">
            {[
              { name: 'Dr. Seungho Han (2023)', role: 'Researcher at Samsung SDI' },
              { name: 'Jiwoo Kim (2022)', role: 'Postdoc at KAIST' },
            ].map((alumni, i) => (
              <div key={i} className="p-6 bg-white flex justify-between items-center group border border-slate-100 hover:shadow-md transition-all">
                <div>
                  <h4 className="font-sans font-bold text-primary">{alumni.name}</h4>
                  <p className="font-academic text-sm text-slate-500 italic">{alumni.role}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="font-sans text-3xl font-extrabold text-primary tracking-tight mb-12">Collaborators</h2>
          <div className="space-y-4">
            {[
              { name: 'Prof. James Smith', role: 'Stanford University, Materials Science' },
              { name: 'Dr. Maria Garcia', role: 'MIT, Department of Chemistry' },
            ].map((collab, i) => (
              <div key={i} className="p-6 bg-white flex justify-between items-center group border border-slate-100 hover:shadow-md transition-all">
                <div>
                  <h4 className="font-sans font-bold text-primary">{collab.name}</h4>
                  <p className="font-academic text-sm text-slate-500 italic">{collab.role}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
