import { motion } from 'motion/react';
import { ArrowRight, Database, Brain, Globe, FlaskConical, BarChart3, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="pt-[72px]">
      {/* Hero Section */}
      <section className="relative min-h-[40vh] flex items-center overflow-hidden bg-primary">
        <div className="absolute inset-0 z-0 opacity-40">
          <img 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuD8Dn3FWUvGWF_N45D6UGcIzjgwqgsoKwoZFXsYyBnRQhH81_WuNej3LlMWZ7U3L-ZrEF99Zy-ZLiRkunLVAUq39LxzqBuz50zUEsoUv87cmz8rbhXTJoo5f9ci2B0FbtQIkmYyco2ukSOVLoVClt9CtOYvFQnCN7iln7Bw5BpscrOOWVh2yyX5RfxxQwtSm0sHdcWPbb6cMl7RhkDeuY2NtR_qlKea--zbOa9IN61EZ18LBa5Aoaax4CUvEieDRsQIRFL3pnM-YQ" 
            alt="Atomic structure" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/60 to-transparent" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-8 w-full py-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl space-y-6"
          >
            <h1 className="font-sans text-4xl md:text-6xl font-extrabold text-white leading-[1.1] tracking-tighter">
              Designing materials at the <span className="text-emerald-400">atomic frontier.</span>
            </h1>
            <p className="font-academic text-xl text-slate-200 leading-relaxed">
              Developing machine-learning-guided atomistic modeling tools to understand and design functional materials under realistic conditions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Research Overview */}
      <section className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-8">
          <div className="mb-16">
            <h2 className="font-sans text-3xl font-extrabold text-primary tracking-tight">Research Overview</h2>
            <div className="double-divider" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-16 items-start">
            <div className="md:col-span-5">
              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="aspect-square overflow-hidden bg-white shadow-sm border border-slate-200"
              >
                <img 
                  src="https://lh3.googleusercontent.com/aida/ADBb0uie2XqsazuXMLc3xCEsYl1Z0TXsC7TE5RX752ur7zjSXdbEP3UYYBI2_u92pRbC_HrTorToH6sbXEBtTG5dr0MNwxOe09Rw-k_HzCZrwF-2GaiE-yXyzaDdVrtOm1B_0Jph2QKNL_dC5SwRz4HME5_7SGGYatqFttOx0LARH8uvru9JWvBlARF4R9NLSLeKAZyhr94UTorDBcxhH9hMoVSl8XCpdUGQisQLxfwjrj_WVSipEIynkBMmZDnUnMVILRxFs1qCAcMECEU" 
                  alt="Research Graphic" 
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
            </div>
            <div className="md:col-span-7 space-y-8">
              <p className="text-2xl font-light text-slate-600 font-academic leading-snug">
                We integrate <span className="text-primary font-semibold">machine learning</span>, <span className="text-primary font-semibold">ab initio calculations</span>, and <span className="text-primary font-semibold">synchrotron-based operando characterization</span> to reveal the hidden dynamics of materials under operational conditions.
              </p>
              <p className="text-lg text-slate-500 font-academic leading-relaxed">
                저희 연구실은 원자 단위에서의 물질 거동을 실시간으로 관찰하고, 이를 제어하기 위한 이론적 토대를 마련합니다. 특히 에너지 저장 장치 및 촉매 시스템의 안정성과 효율성을 극대화하는 혁신적인 소재 설계 기법을 개발하고 있습니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Research Themes */}
      <section className="py-24 bg-surface-container-low">
        <div className="max-w-7xl mx-auto px-8">
          <div className="mb-16">
            <h2 className="font-sans text-3xl font-extrabold text-primary tracking-tight">Research Themes</h2>
            <div className="double-divider" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Stability Analysis', icon: <BarChart3 className="w-8 h-8" /> },
              { title: 'Operando Structure Models', icon: <Zap className="w-8 h-8" /> },
              { title: 'Data-driven Design', icon: <Brain className="w-8 h-8" /> },
            ].map((theme, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -10 }}
                className="group bg-white p-16 flex flex-col items-center text-center aspect-square justify-center border border-slate-100 hover:shadow-xl transition-all duration-500"
              >
                <div className="w-16 h-16 bg-slate-50 flex items-center justify-center mb-8 text-primary">
                  {theme.icon}
                </div>
                <h3 className="font-sans text-2xl font-bold text-primary">{theme.title}</h3>
                <div className="mt-8 font-sans text-[10px] font-bold tracking-[0.2em] text-emerald-600 uppercase flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <span>View Details</span>
                  <ArrowRight size={14} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Materials Systems */}
      <section className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-8">
          <div className="mb-16">
            <h2 className="font-sans text-3xl font-extrabold text-primary tracking-tight">Materials Systems of Interest</h2>
            <div className="double-divider" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Ionic Conductors', desc: 'Solid-state electrolytes and ion transport mechanisms in energy storage systems.' },
              { title: 'Defective Oxides', desc: 'Investigation of point defects, vacancies, and their role in material functionality.' },
              { title: 'Electrocatalysts', desc: 'Designing high-performance surfaces for water splitting and CO2 reduction.' },
              { title: '2D Materials', desc: 'Electronic and structural properties of transition metal dichalcogenides.' },
              { title: 'High-Entropy Alloys', desc: 'Exploring the vast configurational space of multi-component metallic systems.' },
              { title: 'Quantum Materials', desc: 'Topological insulators and materials with strong electronic correlations.' },
            ].map((item, i) => (
              <div key={i} className="p-8 border-l-4 border-primary bg-white shadow-sm">
                <h4 className="font-sans font-bold text-primary mb-3 text-xl">{item.title}</h4>
                <p className="text-slate-500 font-academic leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Method Section */}
      <section className="py-24 bg-surface-container-low">
        <div className="max-w-7xl mx-auto px-8">
          <div className="mb-16">
            <h2 className="font-sans text-3xl font-extrabold text-primary tracking-tight">Method</h2>
            <div className="double-divider" />
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Data Science', icon: <Database />, desc: 'Automated data workflows and advanced statistical analysis for materials discovery.' },
              { title: 'MLIP', icon: <Brain />, desc: 'Neural network and kernel-based interatomic potentials for large-scale MD.' },
              { title: 'Global Optimization', icon: <Globe />, desc: 'Evolutionary algorithms and swarm intelligence for structure prediction.' },
              { title: 'DFT and Beyond', icon: <FlaskConical />, desc: 'First-principles calculations and high-level quantum chemical methods.' },
            ].map((method, i) => (
              <div key={i} className="bg-white p-10 border border-slate-100 hover:shadow-lg transition-all text-center group">
                <div className="mb-6 text-primary flex justify-center scale-125 group-hover:scale-150 transition-transform">
                  {method.icon}
                </div>
                <h3 className="font-sans font-bold text-primary text-xl mb-4">{method.title}</h3>
                <p className="text-sm text-slate-500 font-academic leading-relaxed">{method.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Team */}
      <section className="py-32 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-8 flex flex-col md:flex-row items-center justify-between gap-16">
          <div className="max-w-2xl text-center md:text-left space-y-6">
            <h2 className="font-sans text-4xl font-extrabold tracking-tight">Join our research team.</h2>
            <p className="font-academic text-xl text-slate-300 leading-relaxed">
              We are looking for motivated graduate students and postdocs interested in machine learning and materials modeling. Reach out to discuss potential projects.
            </p>
          </div>
          <div className="shrink-0">
            <Link 
              to="/open-positions" 
              className="inline-block bg-white text-primary font-sans font-bold text-sm tracking-[0.2em] uppercase px-12 py-5 hover:bg-emerald-400 hover:text-white transition-all shadow-xl"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
