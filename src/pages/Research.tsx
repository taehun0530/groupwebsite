import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Shield, Microscope, Database, BookOpen, ArrowUpRight, Zap, Waves, Activity, Battery, Layers, Search } from 'lucide-react';

const themes = [
  {
    id: 'complex-structure',
    title: 'ML-Accelerated Complex Structure Prediction & Search',
    icon: <Search size={24} />,
    desc: 'Beyond idealized bulk-cut models, we predict complex surface reconstructions, defect arrangements, interfacial structures, amorphous phases, and nanostructures formed under realistic conditions. By integrating active-learning MLIPs, global optimization, and large-scale atomistic sampling, we explore expansive potential-energy landscapes to construct ensembles of realizable structures. Our core objective is to move beyond identifying "what" exists to explaining "why" specific structures are selected and stabilized through the lens of thermodynamics and kinetics.',
    descKr: '우리는 이상화된 벌크 절단 모델에 머무르지 않고, 실제 조건에서 형성되는 표면 재구성, 결함 배열, 계면 구조, 비정질상, 나노구조를 예측합니다. 이를 위해 active-learning MLIPs, global optimization, large-scale atomistic sampling을 결합하여 복잡한 potential-energy landscape를 넓게 탐색하고, 실재 가능한 구조 ensemble을 구축합니다. 이 주제의 핵심 목표는 “어떤 구조가 존재하는가?”를 찾는 것에 그치지 않고, “왜 그 구조가 선택되고 안정화되는가?”를 열역학과 동역학의 관점에서 설명하는 것입니다.',
    image: 'https://picsum.photos/seed/stability/400/400',
    methodology: 'MLIPs, Active Learning, Global Optimization, DFT, Large-Scale Atomistic Sampling',
    questions: 'What complex structures are formed under realistic conditions (reconstructions, defects, interfaces), and why are they thermodynamically or kinetically selected?',
    publications: [
      { year: '2025', journal: 'Acta Mater.', title: 'Defect Formation and Electrical Transformation in SiO2 Thin Films via Ti-Induced Interdiffusion', if: '9.4', doi: 'https://doi.org/10.1016/j.actamat.2024.121313' },
      { year: '2024', journal: 'Adv. Funct. Mater.', title: 'Vacancy-Assisted Transformation of MoSx Nanosheets into Defective MoSx Nanoclusters', if: '19.0', doi: 'https://doi.org/10.1002/adfm.202316446' }
    ]
  },
  {
    id: 'operando-reactivity',
    title: 'Surface & Interface Stability and Reactivity Under Operando Conditions',
    icon: <Waves size={24} />,
    desc: 'We investigate the evolution of surface and interface stability and reactivity in response to changes in potential, electrolyte composition, pH, and defects. Utilizing ab initio surface thermodynamics, grand-canonical ensembles, and MLIP-driven molecular dynamics with explicit aqueous modeling, we interpret structural transformations and reaction pathways in operational environments. We focus on revealing how surface reconstruction, hydration, oxidation state changes, and defect chemistry govern the performance and durability of photoelectrochemical and electrocatalytic systems.',
    descKr: '우리는 전위, 전해질, pH, 조성, 결함이 바뀔 때 표면과 계면의 안정성과 반응성이 어떻게 진화하는지를 연구합니다. Ab initio surface thermodynamics, grand-canonical 접근, MLIP 기반 분자동역학, explicit aqueous-interface modeling을 결합하여, 구동 환경에서의 구조 변화와 반응 경로를 함께 해석합니다. 특히 광전기화학 및 전기촉매 시스템에서 표면 재구성, 수화, 산화 상태 변화, 결함 화학이 성능과 내구성을 어떻게 좌우하는지 이해하는 데 초점을 둡니다.',
    image: 'https://picsum.photos/seed/operando/400/400',
    methodology: 'Surface Thermodynamics, MLIP-MD, Grand-Canonical Methods, Aqueous-Interface Analysis, Operando/Realistic-Condition Modeling',
    questions: 'How do surface stability, hydration, and reaction pathways evolve under operando conditions (variable potential, pH, and electrolyte)?',
    publications: [
      { year: '2026', journal: 'Nat. Commun.', title: 'pH-Tunable Mechanism of Oxygen Evolution in Highly Disordered RuO2 Nanosheets', if: '16.6', doi: 'https://doi.org/10.1038/s41467-026-00672-x' },
      { year: '2026', journal: 'Adv. Sci.', title: 'Atomistic Insights into the Electrochemical Oxygen Evolution Activity of Hollandite IrO2 Surfaces', if: '15.1', doi: 'https://doi.org/10.1002/advs.202514939' }
    ]
  },
  {
    id: 'data-driven-inverse',
    title: 'Data-Driven Property Prediction and AI Inverse Design',
    icon: <Database size={24} />,
    desc: 'Our research utilizes data-driven models and AI to master structure–property relationships, enabling rapid screening of promising material candidates and extension into inverse design. Through a combination of data mining, graph/transformer-based representations, symbolic regression, and generative modeling, we aim to uncover design rules for next-generation ionic conductors, semiconductors, and oxide systems. The ultimate goal is to go beyond predictive accuracy, deriving interpretable descriptors and fundamental design principles for accelerate discovery.',
    descKr: '우리는 데이터 기반 모델과 AI를 이용해 구조–물성 관계를 학습하고, 유망 후보를 빠르게 선별하며, 나아가 역설계로 확장합니다. 데이터 마이닝, graph/transformer representation, symbolic regression, generative modeling을 결합해 이온전도체, 반도체, 산화물 시스템의 설계 규칙을 찾고자 합니다. 이 주제의 목표는 단순한 예측 정확도를 넘어서, 해석 가능한 descriptor와 설계 원리를 도출하는 것입니다.',
    image: 'https://picsum.photos/seed/design/400/400',
    methodology: 'Data Mining, Graph Representations, Transformers, Symbolic Regression, Generative Models, Inverse Design',
    questions: 'Can we derive interpretable descriptors and AI-driven inverse design principles for complex solid-state ionic and electronic materials?',
    publications: [
      { year: '2026', journal: 'Energy Environ. Mater.', title: 'Mechanistic Origins of Structural Failure in Deeply Lithiated LixMoS2', if: '15.0', doi: 'https://doi.org/10.1002/eem2.12716' },
      { year: '2024', journal: 'J. Mater. Chem. A', title: 'Data-Mining Fluoride-Based Solid-State Electrolytes for Monovalent Metal Batteries', if: '11.9', doi: 'https://doi.org/10.1039/D4TA04553J' }
    ]
  }
];

const Research = () => {
  const [activeTheme, setActiveTheme] = useState(themes[0].id);

  const currentTheme = themes.find(t => t.id === activeTheme)!;

  return (
    <div className="pt-20 pb-12">
      {/* Header Section */}
      <header className="max-w-7xl mx-auto px-8 mb-6">
        <h1 className="font-sans font-extrabold text-2xl md:text-3xl tracking-tighter text-primary mb-2">Research</h1> 
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-xl">
            <p className="font-academic text-sm text-slate-700 leading-relaxed italic mb-3">
              "The group is organized around stability, operando structure modeling, and data-driven materials design."
            </p>
            <p className="font-academic text-sm text-slate-600 leading-relaxed opacity-80">
              "안정성 분석, 작동 조건 구조 모델링, 데이터 기반 재료 설계를 중심으로 연구합니다."
            </p>
          </div>
        </div>
      </header>

      {/* Intro Text */}
      <section className="max-w-7xl mx-auto px-8 mb-8">
        <div className="max-w-3xl space-y-3">
          <p className="font-academic text-sm text-slate-600 leading-relaxed">
            Our work develops atomistic and data-driven models for complex materials systems under realistic conditions. We aim to connect structure, defects, environment, and dynamics to measurable functional behavior in energy and electronic materials.
          </p>
          <p className="font-academic text-sm text-slate-600 italic">
            현실적인 조건에서 복잡한 재료 시스템을 위한 원자 수준 및 데이터 기반 모델을 개발합니다. 에너지 및 전자 재료에서 구조, 결함, 환경, 동역학을 측정 가능한 기능적 거동과 연결하는 것을 목표로 합니다.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-10 gap-12">
        {/* Sidebar Navigation */}
        <aside className="md:col-span-2 h-fit sticky top-32">
          <nav className="flex flex-col gap-4">
            <div className="font-sans text-[10px] font-bold uppercase tracking-widest text-slate-900 py-2 border-b border-slate-100">Research Themes</div>
            {themes.map((theme) => (
              <button
                key={theme.id}
                onClick={() => setActiveTheme(theme.id)}
                className={`group flex items-center gap-3 py-1 text-left transition-all ${activeTheme === theme.id ? 'translate-x-2' : 'hover:translate-x-1'}`}
              >
                <span className={`h-[1px] transition-all ${activeTheme === theme.id ? 'w-8 bg-tertiary' : 'w-5 bg-slate-200 group-hover:bg-tertiary'}`}></span>
                <span className={`font-sans font-bold text-[10px] uppercase tracking-widest ${activeTheme === theme.id ? 'text-tertiary' : 'text-primary hover:text-tertiary'}`}>
                  {theme.id.replace('-', ' ')}
                </span>
              </button>
            ))}
          </nav>
        </aside>

        {/* Dynamic Research Content */}
        <div className="md:col-span-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTheme}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col gap-10"
            >
              {/* 1. Title Section */}
              <div className="flex items-center gap-3 mb-2">
                <div className="section-divider" />
                <h2 className="font-sans text-2xl font-extrabold text-primary tracking-tight leading-tight">{currentTheme.title}</h2>
              </div>

              {/* 2 & 3. Research Questions & Methodologies */}
              <div className="flex flex-col gap-5">
                <div className="flex flex-col gap-3">
                  {currentTheme.questions && (
                    <div className="p-4 bg-slate-50 border border-slate-100">
                      <h4 className="font-sans font-bold text-[9px] uppercase tracking-widest text-tertiary mb-1.5">Research Questions</h4>
                      <p className="font-academic text-[13px] text-slate-700 leading-relaxed italic font-medium">
                        "{currentTheme.questions}"
                      </p>
                    </div>
                  )}
                </div>
                <div className="p-4 bg-primary text-white">
                  <h4 className="font-sans font-bold text-[9px] uppercase tracking-widest mb-3 text-accent-blue">Methodologies</h4>
                  <p className="font-academic text-[12px] leading-relaxed tracking-tight font-medium opacity-90">
                    {currentTheme.methodology}
                  </p>
                </div>
              </div>

              {/* 4. General Description (Bilingual) + Image (7:3 ratio) */}
              <div className="py-6 border-y border-slate-100/50">
                <h4 className="font-sans font-bold text-[9px] uppercase tracking-widest text-slate-900 mb-4">Description</h4>
                <div className="grid grid-cols-1 md:grid-cols-10 gap-8 items-start">
                  <div className="md:col-span-7 space-y-4">
                    <p className="font-academic text-sm text-slate-600 leading-relaxed">
                      {currentTheme.desc}
                    </p>
                    <p className="font-academic text-sm text-slate-600 leading-relaxed italic opacity-80 pl-3 border-l-2 border-slate-100">
                      {currentTheme.descKr}
                    </p>
                  </div>
                  <div className="md:col-span-3">
                    <div className="aspect-square bg-slate-50 border border-slate-100 flex items-center justify-center grayscale overflow-hidden shadow-sm rounded-sm">
                      <img 
                        src={currentTheme.image} 
                        alt={currentTheme.title} 
                        className="w-full h-full object-cover opacity-70 hover:opacity-100 transition-opacity"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* 5. Related Publications */}
              <div className="space-y-3">
                <div className="flex items-center justify-between border-b border-slate-100 pb-1">
                  <h4 className="font-sans font-bold text-[10px] uppercase tracking-widest text-slate-900 flex items-center gap-2">
                    <BookOpen size={12} className="text-tertiary" />
                    Related Lab Publications
                  </h4>
                </div>
                <div className="flex flex-col">
                  {currentTheme.publications.map((pub, idx) => (
                    <a 
                      key={idx}
                      href={pub.doi}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="py-1.5 group flex items-center justify-between gap-4 hover:bg-slate-50/50 transition-colors px-2 -mx-2 rounded"
                    >
                      <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 flex-1 overflow-hidden">
                        <div className="flex items-center gap-2 shrink-0">
                          <span className="font-sans text-[9px] font-bold text-slate-500 uppercase tracking-widest italic">{pub.year}</span>
                          <span className="font-sans text-[8px] font-black text-tertiary uppercase tracking-tighter border-l border-slate-200 pl-2">IF {pub.if}</span>
                        </div>
                        <div className="flex items-baseline gap-2 overflow-hidden">
                          <span className="font-sans text-[9px] font-bold text-slate-500 uppercase tracking-tight shrink-0 italic">{pub.journal}</span>
                          <h5 className="font-academic text-[13px] text-primary group-hover:text-tertiary transition-colors truncate">
                            {pub.title}
                          </h5>
                        </div>
                      </div>
                      <ArrowUpRight size={12} className="text-slate-300 group-hover:text-tertiary transition-all shrink-0" />
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default Research;
