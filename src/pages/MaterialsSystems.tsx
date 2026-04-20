import { motion } from 'motion/react';
import { ChevronLeft, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

const systems = [
  {
    id: 'high-k',
    title: 'Defect-Rich High-k Dielectrics and Oxide Interfaces',
    content: 'SiO2, HfO2, ZrO2, and Hf1−xZrxO2 (HZO), with a focus on defects, trap states, ferroelectricity, and surface or interfaces. We combine DFT, beyond-DFT electronic-structure methods, machine-learned interatomic potentials (MLIPs), and data-driven analysis to understand how defect chemistry governs phase stability and electrical behavior in high-k oxide systems.',
    img: 'https://picsum.photos/seed/dielectric/1200/800'
  },
  {
    id: 'photoelectrochemical',
    title: 'Photoelectrochemical Ternary Oxides and Aqueous Interfaces',
    content: 'BiVO4 and related photoelectrochemical oxides, particularly reconstructed surfaces, solid–liquid interfaces, polarons, and charge localization under aqueous conditions. Using beyond-DFT methods, MLIP-based molecular dynamics, and global optimization, we investigate how interfacial structure, hydration, and electronic-state evolution control stability and photoelectrochemical functionality.',
    img: 'https://picsum.photos/seed/aqueous/1200/800'
  },
  {
    id: 'electrocatalytic',
    title: 'Electrocatalytic Oxides and Oxide Alloys',
    content: 'Transition-metal oxides and mixed oxides/alloys for OER and related electrochemical reactions, with emphasis on surface reconstruction, adsorbate evolution under applied bias. We use grand-canonical and beyond-DFT approaches, MLIP-enabled atomistic simulations, nanoparticle structure prediction, and data-driven modeling to reveal how surface and subsurface transformations govern catalytic activity and stability.',
    img: 'https://picsum.photos/seed/catalyst/1200/800'
  },
  {
    id: 'halide',
    title: 'Halide Ionic Conductors',
    content: 'Halide solid electrolytes for Li/Na-ion transport, with an emphasis on composition design, structural disorder, and ML-assisted transport prediction. By integrating DFT, MLIPs, large-scale atomistic simulations, and data-science-guided screening, we explore how local structure and disorder influence ionic mobility and identify promising candidates for solid-state battery applications.',
    img: 'https://picsum.photos/seed/battery/1200/800'
  },
  {
    id: '2d-semiconductors',
    title: '2D Semiconductor Heterojunctions, Contacts, and High-k Interfaces',
    content: 'MoS2/metal contacts, van der Waals heterojunctions, and high-k/2D interfaces. We combine DFT, beyond-DFT electronic-structure calculations, global optimization, and data-driven descriptor analysis to understand contact resistance, Fermi-level pinning, interfacial dipoles, and scalable dielectric integration in 2D electronic materials.',
    img: 'https://picsum.photos/seed/semiconductor/1200/800'
  },
  {
    id: 'interpretation',
    title: 'Computation-Guided Interpretation of Experiments',
    content: 'Atomistic interpretation of microscopy, spectroscopy, electrochemistry, and operando measurements to connect observed signals with structure, defects, and reaction pathways. By combining DFT, beyond-DFT methods, MLIP-based simulations, global optimization, and data-science-assisted analysis, we link experiments with realistic atomistic models and uncover the structural origins of measured behavior.',
    img: 'https://picsum.photos/seed/microscopy/1200/800'
  }
];

export default function MaterialsSystems() {
  return (
    <div className="pt-20 pb-12 max-w-5xl mx-auto px-8">
      <Link 
        to="/" 
        className="inline-flex items-center gap-2 text-slate-600 hover:text-primary font-sans text-[10px] font-bold uppercase tracking-widest transition-colors mb-6"
      >
        <ChevronLeft size={14} /> Back to Home
      </Link>

      <header className="mb-10">
        <h1 className="font-sans text-2xl md:text-3xl font-extrabold text-primary tracking-tighter mb-3">
          Materials Systems of Interest
        </h1>
        <p className="font-academic text-slate-700 max-w-2xl leading-relaxed text-sm italic">
          Exploring the frontiers of functional materials through advanced atomistic modeling and data-driven insights.
        </p>
      </header>

      <div className="space-y-16">
        {systems.map((system, i) => (
          <motion.section 
            key={system.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
            id={system.id}
          >
            <div className={i % 2 === 1 ? 'md:order-2' : ''}>
              <div className="mb-3">
                <span className="text-[9px] font-bold text-tertiary uppercase tracking-[0.2em]">Material System {i + 1}</span>
                <h2 className="font-sans text-xl font-extrabold text-primary tracking-tight mt-1 mb-4 leading-tight">
                  {system.title}
                </h2>
              </div>
              <p className="font-academic text-slate-700 leading-relaxed text-sm">
                {system.content}
              </p>
            </div>
            <div className={i % 2 === 1 ? 'md:order-1' : ''}>
              <div className="aspect-[4/3] overflow-hidden bg-slate-100 shadow-xl rounded-sm border border-slate-200 group">
                <img 
                  src={system.img} 
                  alt={system.title} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </motion.section>
        ))}
      </div>
    </div>
  );
}
