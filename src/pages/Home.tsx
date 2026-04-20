import { motion } from 'motion/react';
import { ArrowRight, Database, Brain, Globe, FlaskConical, BarChart3, Zap, Waves, Battery, Layers, Search, Activity, Atom } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="pt-[64px]">
      {/* Hero Section */}
      <section className="relative min-h-[35vh] flex items-center overflow-hidden bg-primary">
        <div className="absolute inset-0 z-0 opacity-40">
          <img 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuD8Dn3FWUvGWF_N45D6UGcIzjgwqgsoKwoZFXsYyBnRQhH81_WuNej3LlMWZ7U3L-ZrEF99Zy-ZLiRkunLVAUq39LxzqBuz50zUEsoUv87cmz8rbhXTJoo5f9ci2B0FbtQIkmYyco2ukSOVLoVClt9CtOYvFQnCN7iln7Bw5BpscrOOWVh2yyX5RfxxQwtSm0sHdcWPbb6cMl7RhkDeuY2NtR_qlKea--zbOa9IN61EZ18LBa5Aoaax4CUvEieDRsQIRFL3pnM-YQ" 
            alt="Atomic structure" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/60 to-transparent" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-8 w-full py-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl space-y-3"
          >
            <h1 className="font-sans text-2xl md:text-3xl font-extrabold text-white leading-tight tracking-tighter">
              Designing materials at the <span className="text-tertiary">atomic frontier.</span>
            </h1>
            <p className="font-academic text-sm text-slate-200 leading-relaxed">
              Developing machine-learning-guided atomistic modeling tools to understand and design functional materials under realistic conditions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Research Overview */}
      <section className="py-8 bg-surface">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex items-center gap-3 mb-5">
            <div className="section-divider" />
            <h2 className="font-sans text-lg font-extrabold text-primary tracking-tight">Research Overview</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-10 gap-8 items-center">
            <div className="md:col-span-3 space-y-3">
              <p className="text-sm font-light text-slate-600 font-academic leading-relaxed">
                We integrate <span className="text-primary font-semibold">machine learning</span> and <span className="text-primary font-semibold">ab initio calculations</span> to reveal hidden dynamics.
              </p>
              <p className="text-sm text-slate-700 font-academic leading-relaxed opacity-80">
                저희 연구실은 원자 단위에서의 물질 거동을 관찰하고 제어하기 위한 이론적 토대를 마련하여 소재 설계 기법을 개발합니다.
              </p>
            </div>
            <div className="md:col-span-7">
              <motion.div 
                whileHover={{ scale: 1.005 }}
                className="aspect-[21/9] overflow-hidden bg-white shadow-sm border border-slate-100"
              >
                <img 
                  src="https://lh3.googleusercontent.com/aida/ADBb0uie2XqsazuXMLc3xCEsYl1Z0TXsC7TE5RX752ur7zjSXdbEP3UYYBI2_u92pRbC_HrTorToH6sbXEBtTG5dr0MNwxOe09Rw-k_HzCZrwF-2GaiE-yXyzaDdVrtOm1B_0Jph2QKNL_dC5SwRz4HME5_7SGGYatqFttOx0LARH8uvru9JWvBlARF4R9NLSLeKAZyhr94UTorDBcxhH9hMoVSl8XCpdUGQisQLxfwjrj_WVSipEIynkBMmZDnUnMVILRxFs1qCAcMECEU" 
                  alt="Research Graphic" 
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Research Themes */}
      <section className="py-8 bg-surface-container-low">
        <div className="max-w-7xl mx-auto px-8">
          <div className="mb-6">
            <div className="flex items-center gap-3 mb-3">
              <div className="section-divider" />
              <h2 className="font-sans text-lg font-extrabold text-primary tracking-tight">Research Themes</h2>
            </div>
            <p className="text-sm text-slate-700 font-academic leading-relaxed max-w-3xl">
              Our research focuses on three core pillars: analyzing material stability, developing operando structure models, and leveraging data-driven design to discover next-generation materials for energy and environmental applications.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              { title: 'Stability Analysis', icon: <BarChart3 className="w-4 h-4" />, img: 'https://picsum.photos/seed/stability/400/400' },
              { title: 'Operando Structure Models', icon: <Zap className="w-4 h-4" />, img: 'https://picsum.photos/seed/microscope/400/400' },
              { title: 'Data-driven Design', icon: <Brain className="w-4 h-4" />, img: 'https://picsum.photos/seed/data/400/400' },
            ].map((theme, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -3 }}
                className="group bg-white flex flex-col items-center text-center aspect-square border border-slate-100 hover:shadow-lg transition-all duration-500 overflow-hidden relative rounded-sm"
              >
                <div className="absolute inset-0 z-0 opacity-20 group-hover:opacity-40 transition-opacity">
                  <img src={theme.img} alt={theme.title} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </div>
                <div className="relative z-10 p-4 flex flex-col items-center justify-center h-full w-full bg-white/60 backdrop-blur-[2px] group-hover:bg-white/40 transition-colors">
                  <div className="w-8 h-8 bg-primary/10 flex items-center justify-center mb-2 text-primary rounded-full">
                    {theme.icon}
                  </div>
                  <h3 className="font-sans text-sm font-bold text-primary px-2 leading-tight">{theme.title}</h3>
                  <div className="mt-2 font-sans text-[9px] font-bold tracking-widest text-tertiary uppercase flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity">
                    <span>View</span>
                    <ArrowRight size={10} />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Materials Systems */}
      <section className="py-10 bg-surface">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className="section-divider" />
              <h2 className="font-sans text-lg font-extrabold text-primary tracking-tight">Materials Systems of Interest</h2>
            </div>
            <Link 
              to="/materials-systems" 
              className="text-primary font-sans text-[10px] font-bold uppercase tracking-widest hover:text-tertiary transition-all border-b-2 border-primary/20 pb-0.5"
            >
              Explore All →
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { 
                title: 'High-k Dielectrics & Oxide Interfaces', 
                desc: 'Phase stability and electrical behavior in high-k oxides and trap-state interfaces.',
                icon: <Zap size={18} />
              },
              { 
                title: 'Photoelectrochemical Aqueous Interfaces', 
                desc: 'Interfacial structure, hydration, and electronic evolution at photoelectrochemical interfaces.',
                icon: <Waves size={18} />
              },
              { 
                title: 'Electrocatalytic Oxides & Alloys', 
                desc: 'Surface reconstruction and catalytic transformations in transition-metal oxides and alloys.',
                icon: <Activity size={18} />
              },
              { 
                title: 'Halide Ionic Conductors', 
                desc: 'Structural disorder and machine-learning assisted transport prediction in halide solid electrolytes.',
                icon: <Battery size={18} />
              },
              { 
                title: '2D Semiconductor Heterojunctions', 
                desc: 'Interfacial behavior, contact resistance, and dipole integration in 2D electronic materials.',
                icon: <Layers size={18} />
              },
              { 
                title: 'Computation-Guided Experiment', 
                desc: 'Connecting observed experimental signals with structure and defects through atomistic models.',
                icon: <Search size={18} />
              },
            ].map((item, i) => (
              <Link 
                key={i} 
                to="/materials-systems"
                className="group bg-white border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300 rounded-sm flex items-stretch overflow-hidden h-fit"
              >
                <div className="w-[18%] bg-slate-50 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors border-r border-slate-100">
                  <div className="scale-100">
                    {item.icon}
                  </div>
                </div>
                <div className="flex-1 p-3 flex flex-col justify-center bg-slate-50 group-hover:bg-primary transition-colors">
                  <h4 className="font-sans font-extrabold text-primary mb-0.5 text-sm leading-tight group-hover:text-white transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-slate-700 font-academic text-xs leading-relaxed line-clamp-2 group-hover:text-slate-200">
                    {item.desc}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Method Section */}
      <section className="py-8 bg-surface-container-low">
        <div className="max-w-7xl mx-auto px-8">
          <div className="mb-6">
            <div className="flex items-center gap-3 mb-3">
              <div className="section-divider" />
              <h2 className="font-sans text-lg font-extrabold text-primary tracking-tight">Method</h2>
            </div>
            <p className="text-sm text-slate-700 font-academic leading-relaxed max-w-3xl">
              We employ a multi-scale approach combining high-throughput data science, machine learning interatomic potentials, and global optimization algorithms to accelerate the discovery and optimization of functional materials.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { title: 'Data Science', icon: <Database size={16} />, desc: 'Automated data workflows and advanced statistical analysis for materials discovery.' },
              { title: 'MLIP', icon: <Brain size={16} />, desc: 'Neural network and kernel-based interatomic potentials for large-scale MD.' },
              { title: 'Global Optimization', icon: <Globe size={16} />, desc: 'Evolutionary algorithms and swarm intelligence for structure prediction.' },
              { title: 'DFT and Beyond', icon: <Atom size={16} />, desc: 'First-principles calculations and high-level quantum chemical methods.' },
            ].map((method, i) => (
              <div key={i} className="bg-white p-4 border border-slate-100 hover:shadow-md transition-all text-center group rounded-sm">
                <div className="mb-2 text-primary flex justify-center scale-100 group-hover:scale-105 transition-transform">
                  {method.icon}
                </div>
                <h3 className="font-sans font-bold text-primary text-sm mb-1.5">{method.title}</h3>
                <p className="text-xs text-slate-700 font-academic leading-relaxed">{method.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-10 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-8 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-2xl text-center md:text-left space-y-2">
            <h2 className="font-sans text-xl font-extrabold tracking-tight text-white">Join our research team.</h2>
            <p className="font-academic text-sm text-slate-200 leading-relaxed">
              We are looking for motivated graduate students and postdocs interested in machine learning and materials modeling. Reach out to discuss potential projects.
            </p>
          </div>
          <div className="shrink-0">
            <Link 
              to="/open-positions" 
              className="inline-block bg-white text-primary font-sans font-bold text-xs tracking-widest uppercase px-8 py-3 hover:bg-tertiary hover:text-white transition-all shadow-lg"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
