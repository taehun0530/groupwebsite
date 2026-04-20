import { motion } from 'motion/react';
import { Mail, Globe, GraduationCap, UserPlus, User } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function People() {
  return (
    <div className="pt-20 pb-12 max-w-7xl mx-auto px-8">
      {/* PI Section */}
      <section className="mb-10">
        <h2 className="font-sans text-lg font-extrabold text-primary tracking-tight mb-6">Principal Investigator</h2>
        <div className="flex flex-col md:flex-row gap-6 items-start">
          <div className="w-full md:w-2/12 sticky top-20">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="aspect-[4/5] bg-slate-100 overflow-hidden rounded-sm group shadow-lg"
            >
              <img 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuD8Dn3FWUvGWF_N45D6UGcIzjgwqgsoKwoZFXsYyBnRQhH81_WuNej3LlMWZ7U3L-ZrEF99Zy-ZLiRkunLVAUq39LxzqBuz50zUEsoUv87cmz8rbhXTJoo5f9ci2B0FbtQIkmYyco2ukSOVLoVClt9CtOYvFQnCN7iln7Bw5BpscrOOWVh2yyX5RfxxQwtSm0sHdcWPbb6cMl7RhkDeuY2NtR_qlKea--zbOa9IN61EZ18LBa5Aoaax4CUvEieDRsQIRFL3pnM-YQ" 
                alt="Taehun Lee" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </div>
          
          <div className="w-full md:w-10/12">
            <header className="mb-5">
              <p className="font-sans text-xs font-bold text-tertiary uppercase tracking-widest mb-1">Assistant Professor</p>
              <h3 className="font-sans text-xl font-extrabold text-primary tracking-tighter mb-1">
                Taehun Lee <span className="text-base text-slate-500 font-medium ml-2">이태훈</span>
              </h3>
              <div className="flex items-center gap-3 text-slate-500">
                <a href="mailto:taehun.lee@dgist.ac.kr" className="flex items-center gap-1.5 hover:text-tertiary transition-colors">
                  <Mail size={12} className="text-primary" />
                  <span className="font-academic text-sm">taehun.lee@dgist.ac.kr</span>
                </a>
                <span className="text-slate-500 text-xs">|</span>
                <a href="https://scholar.google.com/scholar?q=Taehun+Lee+DGIST" target="_blank" className="flex items-center gap-1.5 hover:text-tertiary transition-colors">
                  <GraduationCap size={12} className="text-primary" />
                  <span className="font-academic text-sm">Google Scholar</span>
                </a>
              </div>
            </header>
            
            <div className="space-y-5">
              <p className="font-academic text-sm leading-relaxed text-slate-600">
                Taehun Lee is an Assistant Professor in the Department of Energy Science and Engineering at DGIST. His group develops machine-learning-guided atomistic modeling tools to understand and design functional materials under realistic conditions, with interests spanning interfaces, defects, transport, and data-driven materials design.
              </p>
              
              <div>
                <h4 className="font-sans text-[10px] font-bold text-primary uppercase tracking-widest mb-2 border-l-4 border-primary pl-2">Research Interests</h4>
                <div className="flex flex-wrap gap-1.5">
                  {['DFT & ab initio MD', 'Machine-learning Potentials', 'Materials-Property Prediction', 'Electrochemical Interfaces'].map((tag) => (
                    <span key={tag} className="px-2 py-0.5 bg-slate-100 text-slate-600 rounded-full text-[10px] font-bold uppercase tracking-widest">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              
              <Link 
                to="/profile/taehun-lee"
                className="inline-flex items-center gap-3 text-primary font-sans text-[10px] font-bold uppercase tracking-widest hover:text-tertiary transition-all border-b-2 border-primary/20 pb-0.5"
              >
                Open Profile →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Researchers */}
      <section className="mb-10">
        <h2 className="font-sans text-lg font-extrabold text-primary tracking-tight mb-5">Researchers</h2>
        <div className="py-8 px-6 bg-surface-container-low rounded-sm text-center border-2 border-dashed border-slate-200">
          <p className="font-academic text-slate-500 italic text-sm">
            Positions are available now. 
            Please check our <Link to="/open-positions" className="text-primary font-bold hover:text-tertiary transition-colors underline underline-offset-4">Open Positions</Link> page for more details.
          </p>
        </div>
      </section>

      {/* Graduate Students */}
      <section className="mb-10">
        <h2 className="font-sans text-lg font-extrabold text-primary tracking-tight mb-5">Graduate Students</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { 
              name: 'Hyunjin Lee', 
              ko: '이현진', 
              role: '박사과정 (Ph.D.)', 
              affiliation: 'DGIST',
              tags: ['Defects', 'MLIP Dev'],
              img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBI8gmjcilKm_k3PCfPV37kciyfGGv25-g_49-NgZTUm858MF7MjJUp5_HowhvmLLMyS4mLtwnrBlKO97V0cTYB8e-9rHGS2iFbCM3DG4f6WSJTdcTrnfVAL4bqzDJImyvY2mvYE-cOk9lhBIi9UUWtMAHirUJwZsDsnVz8vJ_V1sIjWDwxNmB-YvdaxNoLX7AaDGRP_HEqQo9JeAwsQDDeVbdrFVxXOxgXW9Ne-3lfhrSR1Q6I3xLY11X6RFVbRNdhYJW2C8RfSw'
            },
            { 
              name: 'Kyunghun Lee', 
              ko: '이경훈', 
              role: '통합과정 (Int. M.S./Ph.D.)', 
              affiliation: 'DGIST',
              tags: ['Defects', 'MLIP Dev'],
              img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCdkfamMJwjzE9nmAikuTLbgrANwlrI5kaS5eas8zHnG7GRgQ9_MVErW1aSFvkCm4lxbSDEm1qT7heTQ_926Xkq8JBw8ipUWo3Jl0CrT-PIRqm0IFhx7JlNtrnZepSqM2qeiQ-ceuaOjPWAIgK97dRe4oSJLCvQUyH6Wmn6nIPdqpN7kJi2NGA8n1UG4Kht6Zsx4oNzl1gOuT7_b8nPwUPgQ45TmIRRln47It8n5dAbqEgJQeaBwLBHM1FoOsqG9duMjNyXfd7DHw'
            },
          ].map((student, i) => (
            <motion.article 
              key={i}
              whileHover={{ y: -5 }}
              className="bg-white group flex flex-col h-full overflow-hidden transition-all duration-300 hover:shadow-lg border border-slate-100 rounded-sm"
            >
              <div className="aspect-square bg-slate-50 overflow-hidden">
                <img 
                  src={student.img} 
                  alt={student.name} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-4 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-1.5">
                  <p className="font-sans text-xs font-bold text-tertiary uppercase tracking-widest">{student.role}</p>
                  <span className="text-[8px] font-bold text-slate-500 uppercase tracking-widest bg-slate-50 px-1.5 py-0.5 rounded">{student.affiliation}</span>
                </div>
                <h3 className="font-sans text-sm font-extrabold text-primary mb-1.5">
                  {student.name} <span className="text-[12px] text-slate-600 font-medium ml-1">{student.ko}</span>
                </h3>
                <div className="flex flex-wrap gap-1 mb-3">
                  {student.tags.map(tag => (
                    <span key={tag} className="px-1.5 py-0.5 bg-slate-50 text-slate-500 rounded-full text-[7.5px] font-bold uppercase tracking-widest">
                      {tag}
                    </span>
                  ))}
                </div>
                <button className="mt-auto flex items-center gap-2 text-primary font-sans text-[8px] font-bold uppercase tracking-widest hover:text-tertiary transition-all">
                  Open profile →
                </button>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      {/* Undergraduate Interns */}
      <section className="mb-10">
        <h2 className="font-sans text-lg font-extrabold text-primary tracking-tight mb-5">Undergraduate Interns</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { 
              name: 'Taeyoung Kim', 
              ko: '김태영', 
              role: '학부생 연구원', 
              affiliation: 'Jeonbuk National University',
              tags: ['Electrocatalysis'],
              img: 'https://picsum.photos/seed/taeyoung/400/400'
            },
            { 
              name: 'Chanju Kim', 
              ko: '김찬주', 
              role: '학부생 연구원', 
              affiliation: 'Jeonbuk National University',
              tags: ['Materials Simulation'],
              img: 'https://picsum.photos/seed/chanju/400/400'
            },
            { 
              name: 'Jongbeom Park', 
              ko: '박종범', 
              role: '학부생 연구원', 
              affiliation: 'Jeonbuk National University',
              tags: ['Atomistic Modeling'],
              img: 'https://picsum.photos/seed/jongbeom/400/400'
            },
          ].map((student, i) => (
            <motion.article 
              key={i}
              whileHover={{ y: -5 }}
              className="bg-white group flex flex-col h-full overflow-hidden transition-all duration-300 hover:shadow-lg border border-slate-100 rounded-sm"
            >
              <div className="aspect-square bg-slate-50 overflow-hidden">
                <img 
                  src={student.img} 
                  alt={student.name} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-4 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-1">
                  <p className="font-sans text-xs font-bold text-tertiary uppercase tracking-widest">{student.role}</p>
                  <span className="text-[8px] font-bold text-slate-500 uppercase tracking-widest bg-slate-50 px-1.5 py-0.5 rounded text-right">{student.affiliation}</span>
                </div>
                <h3 className="font-sans text-sm font-extrabold text-primary">
                  {student.name} <span className="text-[12px] text-slate-600 font-medium ml-1">{student.ko}</span>
                </h3>
              </div>
            </motion.article>
          ))}
          
          {/* Recruitment Card */}
          <article className="bg-slate-50 border-2 border-dashed border-slate-200 group flex flex-col h-full overflow-hidden items-center justify-center p-5 text-center rounded-sm">
            <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center mb-2.5 shadow-sm group-hover:scale-110 transition-transform">
              <UserPlus size={16} className="text-tertiary" />
            </div>
            <h3 className="font-sans text-sm font-extrabold text-primary mb-1">Join Our Team</h3>
            <p className="font-academic text-[10px] text-slate-700 mb-3 leading-relaxed">We are looking for motivated students interested in atomistic modeling.</p>
            <Link to="/open-positions" className="px-4 py-1.5 bg-primary text-white font-sans text-[8px] font-bold uppercase tracking-widest hover:bg-tertiary transition-colors">Apply Now</Link>
          </article>
        </div>
      </section>

      {/* Secondary Connections */}
      <section className="mb-10 border-t border-slate-100 pt-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { title: 'Alumni', path: '/people/alumni', desc: 'Former group members and their career trajectories.' },
            { title: 'Collaborators', path: '/people/collaborators', desc: 'Active research partnerships worldwide.' },
            { title: 'Former Collaborators', path: '/people/former-collaborators', desc: 'Past collaborations that shaped our foundation.' },
          ].map((link, i) => (
            <Link 
              key={i} 
              to={link.path}
              className="group p-5 bg-slate-50 border border-transparent hover:border-slate-200 hover:bg-white transition-all flex flex-col rounded-sm"
            >
              <h3 className="font-sans text-[11px] font-bold text-primary uppercase tracking-[0.2em] mb-2.5 group-hover:text-tertiary transition-colors">
                {link.title}
              </h3>
              <p className="font-academic text-[11px] text-slate-700 leading-relaxed mb-3">
                {link.desc}
              </p>
              <span className="mt-auto font-sans text-[10px] font-bold uppercase tracking-widest text-slate-500 group-hover:text-primary transition-colors">
                View List →
              </span>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
