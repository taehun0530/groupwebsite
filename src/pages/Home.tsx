import { motion } from 'motion/react';
import { ArrowRight, Database, Brain, Globe, FlaskConical, BarChart3, Zap, Waves, Battery, Layers, Search, Activity, Atom, Server, Sun, Hexagon, ArrowDown, Cpu, Share2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="pt-[64px]">
      {/* Hero Section */}
      <section className="relative min-h-[35vh] flex items-center overflow-hidden bg-primary">
        <div className="absolute inset-0 z-0 opacity-40">
          <img 
            src="https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?auto=format&fit=crop&q=80&w=2000" 
            alt="Atomic structure visualization" 
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
              Materials Modeling and Machine Learning for <br className="hidden md:block" /><span className="text-accent-blue">Structure–Property Relationships</span>
            </h1>
            <div className="flex flex-wrap items-center gap-2 md:gap-3 pt-4">
              <div className="flex items-center gap-2 px-3 py-1.5 bg-white/10 border border-white/20 rounded-full text-white backdrop-blur-sm shadow-sm">
                <Server size={14} className="text-accent-blue" />
                <span className="font-sans text-[10px] font-bold uppercase tracking-widest pt-0.5">Computation</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 bg-white/10 border border-white/20 rounded-full text-white backdrop-blur-sm shadow-sm">
                <Atom size={14} className="text-accent-blue" />
                <span className="font-sans text-[10px] font-bold uppercase tracking-widest pt-0.5">Materials Modeling</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 bg-white/10 border border-white/20 rounded-full text-white backdrop-blur-sm shadow-sm">
                <Brain size={14} className="text-accent-blue" />
                <span className="font-sans text-[10px] font-bold uppercase tracking-widest pt-0.5">Machine Learning</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-2 bg-white/10 border border-white/20 rounded-full text-white backdrop-blur-sm shadow-sm">
                <Activity size={14} className="text-accent-blue" />
                <span className="font-sans text-[9px] font-bold uppercase tracking-widest leading-tight pt-0.5">Structure–Property<br/>Relationships</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Research Overview */}
      <section className="py-10 bg-surface">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="section-divider" />
            <h2 className="font-sans text-lg font-extrabold text-primary tracking-tight">Research Overview</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-6 space-y-6">
              <div className="space-y-3">
                <p className="text-sm font-light text-slate-700 font-academic leading-relaxed text-left">
                  We combine computational materials science and machine learning to understand, predict, and design the structure, stability, reactivity, and performance of functional materials at the atomic scale under realistic operating conditions.
                </p>
                <p className="text-sm font-light text-slate-700 font-academic leading-relaxed text-left">
                  Building on physics-based modeling with density functional theory (DFT), we integrate machine-learned interatomic potentials (MLIPs), automated computational workflows, data-driven screening, and generative models to investigate complex surfaces, interfaces, defects, amorphous structures, and their structure–property relationships.
                </p>
                <p className="text-sm font-light text-slate-700 font-academic leading-relaxed text-left">
                  Our primary materials of interest include photoelectrochemical and electrocatalytic oxides, high-k dielectric oxides, and their nanostructured and disordered forms.
                </p>
              </div>
              <div className="space-y-3 pl-3 border-l-2 border-accent-blue/30 opacity-80">
                <p className="text-[13px] text-slate-600 font-academic leading-relaxed italic text-left break-keep">
                  우리는 계산재료과학과 머신러닝을 결합하여, 실제 환경에서 기능성 재료의 구조, 안정성, 반응성, 성능을 원자 수준에서 이해하고 예측하며 설계합니다. 밀도범함수이론(DFT)에 기반한 물리 모델링을 바탕으로, 우리는 machine-learned interatomic potentials (MLIPs), 자동화 계산 워크플로, 데이터 기반 스크리닝, 생성 모델을 통합하여 복잡한 표면, 계면, 결함, 비정질 구조를 탐구하고, 그 구조–물성 관계를 연구합니다.
                </p>
                <p className="text-[13px] text-slate-600 font-academic leading-relaxed italic text-left break-keep">
                  주요 관심 소재는 광전기화학 및 전기촉매 산화물, high-k 유전체 산화물, 그리고 이들의 나노구조 및 무질서 구조체입니다.
                </p>
              </div>
            </div>
            <div className="md:col-span-6 h-full">
              <motion.div 
                whileHover={{ scale: 1.005 }}
                className="w-full h-full min-h-[300px] overflow-hidden bg-white shadow-sm border border-slate-100 rounded-sm"
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
      <section className="py-10 bg-surface-container-low">
        <div className="max-w-7xl mx-auto px-8">
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="section-divider" />
              <h2 className="font-sans text-lg font-extrabold text-primary tracking-tight">Research Themes</h2>
            </div>
            <div className="w-full space-y-3">
              <div className="text-sm text-slate-700 font-academic leading-relaxed text-left">
                <p className="mb-2">Our research spans three interconnected themes:</p>
                <ul className="space-y-1.5 pl-2">
                  <li className="flex items-start gap-2">
                    <span className="text-slate-500">(1)</span>
                    <span className="flex-1">identifying active motifs in realistic complex structures,</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-slate-500">(2)</span>
                    <span className="flex-1">understanding the stability and reactivity of surfaces and interfaces under operating conditions, and</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-slate-500">(3)</span>
                    <span className="flex-1">establishing data-driven design rules for property prediction and inverse design.</span>
                  </li>
                </ul>
              </div>
              <div className="pl-3 border-l-2 border-accent-blue/30 opacity-80">
                <div className="text-[13px] text-slate-600 font-academic leading-relaxed italic text-left break-keep">
                  <p className="mb-1.5">본 연구실은 세 가지 주제를 포괄합니다. 전산재료과학 및 머신러닝 기반 모델링을 통해</p>
                  <ul className="space-y-1.5 pl-2">
                    <li className="flex items-start gap-2">
                      <span className="text-slate-400 font-sans">(1)</span>
                      <span className="flex-1">실제 조건에서 형성되는 복잡한 구조에서 활성 motif를 규명하고,</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-slate-400 font-sans">(2)</span>
                      <span className="flex-1">구동 환경에서 표면과 계면의 안정성 및 반응성을 이해하며,</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-slate-400 font-sans">(3)</span>
                      <span className="flex-1">데이터 기반 소재 property 예측과 역설계를 기반으로 소재 설계 규칙을 확립하는 것입니다.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              { title: 'Complex Structure Discovery', icon: <BarChart3 className="w-4 h-4" />, img: 'https://picsum.photos/seed/stability/400/400' },
              { title: 'Electrochemical Interfacial Reactivity', icon: <Zap className="w-4 h-4" />, img: 'https://picsum.photos/seed/microscope/400/400' },
              { title: 'Data-Driven Materials Design', icon: <Brain className="w-4 h-4" />, img: 'https://picsum.photos/seed/data/400/400' },
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
                desc: <>Phase stability, polarization properties, and the roles of defects and nanostructures in high-k oxides and oxide interfaces (e.g., SiO<sub>2</sub>, ZrO<sub>2</sub>, HfO<sub>2</sub>)</>,
                icon: <Zap size={18} />
              },
              { 
                title: 'Photoelectrochemical Systems & Charge Dynamics', 
                desc: <>Interfacial structure, hydration, charge localization, and dynamics at photoelectrochemical interfaces (e.g., BiVO<sub>4</sub>, GaN)</>,
                icon: <Sun size={18} />
              },
              { 
                title: 'Electrocatalytic Oxides & Alloys', 
                desc: <>Surface reconstruction, nanoparticle structures, and catalytic reactivity in transition-metal oxides and alloys (e.g., IrO<sub>2</sub>, RuO<sub>2</sub>)</>,
                icon: <Activity size={18} />
              },
              { 
                title: 'Halide Ionic Conductors', 
                desc: 'Structural disorder and machine-learning-assisted transport prediction in halide solid electrolytes',
                icon: <Battery size={18} />
              },
              { 
                title: '2D Semiconductor Heterojunctions', 
                desc: 'Interfacial behavior, contact properties, and interface structure prediction in 2D electronic materials',
                icon: <Layers size={18} />
              },
              { 
                title: 'Experimental Interpretation', 
                desc: 'Providing fundamental insight into experimental phenomena in electrocatalysis, semiconductors, and materials growth in close collaboration with experimental researchers.',
                icon: <Search size={18} />
              },
            ].map((item, i) => (
              <Link 
                key={i} 
                to="/materials-systems"
                className="bg-white p-5 lg:p-6 border border-slate-100 hover:shadow-md transition-all text-left group rounded-sm flex flex-col h-full"
              >
                <div className="flex items-start gap-2.5 mb-2.5">
                  <div className="text-primary mt-0.5 flex-shrink-0 scale-100 group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  <h4 className="font-sans font-bold text-primary text-sm leading-tight group-hover:text-tertiary transition-colors">
                    {item.title}
                  </h4>
                </div>
                <p className="text-xs text-slate-700 font-academic leading-relaxed">
                  {item.desc}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Method Section */}
      <section className="py-10 bg-surface-container-low">
        <div className="max-w-7xl mx-auto px-8">
          <div className="mb-6">
            <div className="flex items-center gap-3 mb-3">
              <div className="section-divider" />
              <h2 className="font-sans text-lg font-extrabold text-primary tracking-tight">Method</h2>
            </div>
            <div className="w-full space-y-3">
              <p className="text-sm font-light text-slate-700 font-academic leading-relaxed text-left">
                We combine automated DFT-based workflows, data-driven machine learning, and machine-learned interatomic potentials to analyze materials across multiple scales. We further employ advanced sampling, global optimization, and realistic interface modeling under constant-potential conditions, explicit electrolytes, and electric-field effects to predict structure formation and understand materials properties under operating environments.
              </p>
              <div className="pl-3 border-l-2 border-accent-blue/30 opacity-80">
                <p className="text-[13px] text-slate-600 font-academic leading-relaxed italic text-left break-keep">
                  우리 연구실은 DFT 기반의 자동화 계산, 데이터 기반 머신러닝, 그리고 machine-learned interatomic potentials를 결합하여 다양한 스케일에서 소재의 구조와 물성을 분석합니다. 나아가 고도화된 샘플링 및 전역 최적화 기법과 함께 constant-potential, explicit electrolyte, electric-field effects를 반영한 현실적 계면 모델링을 통해 실제 환경에서 소재의 구조 형성, 안정성, 반응성을 연구합니다.
                </p>
              </div>
            </div>
          </div>
          
          {/* Workflow Diagram */}
          <div className="relative mt-8 w-full max-w-3xl mx-auto">
            <div className="flex flex-col items-center">
               
               {/* Middle Column: The 4 Methods */}
               <div className="w-full flex flex-col z-10">
                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 flex-1">
                   {[
                     { title: 'Data Science & Automation', icon: <Database size={16} />, bullets: ['Automated calculation workflows', 'Machine-learning analysis for materials discovery'] },
                     { title: 'Machine-Learned Interatomic Potentials', icon: <Brain size={16} />, bullets: ['Neural-network and kernel-based interatomic potentials', 'Large-scale molecular dynamics simulations'] },
                     { title: 'Global Optimization & Sampling', icon: <Globe size={16} />, bullets: ['Evolutionary algorithms', 'Finite-temperature and grand-canonical sampling'] },
                     { title: 'DFT and Beyond', icon: <Atom size={16} />, bullets: ['First-principles calculations', 'High-level quantum chemical methods'] },
                   ].map((method, i) => (
                     <div key={i} className="bg-white p-4 border border-slate-100 hover:border-sky-200 hover:shadow-md transition-all rounded-sm flex flex-col shadow-[0_1px_4px_rgba(0,0,0,0.02)] h-full">
                        <div className="flex items-start gap-2 mb-2 min-h-[36px]">
                          <div className="text-sky-500 mt-0.5 shrink-0 bg-sky-50/50 p-1 rounded-sm">
                            {method.icon}
                          </div>
                          <h4 className="font-sans font-bold text-primary text-sm leading-tight pt-0.5">
                            {method.title}
                          </h4>
                        </div>
                        <ul className="space-y-1 pl-6">
                          {method.bullets.map((b, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-xs text-slate-700 font-academic leading-relaxed text-left">
                              <div className="w-[3px] h-[3px] rounded-full bg-sky-200 mt-[7px] shrink-0"></div>
                              <span>{b}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>

            </div>
          </div>
        </div>
      </section>

      <section className="py-10 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="max-w-2xl text-center md:text-left space-y-1">
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
