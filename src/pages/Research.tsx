import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Shield, Microscope, Database, BookOpen, ArrowUpRight, Zap, Waves, Activity, Battery, Layers, Search, Hexagon, RefreshCcw, FileText, HelpCircle, Cpu } from 'lucide-react';
import { publications as globalPublications } from './Publications';

const themes = [
  {
    id: 'complex-structure',
    title: 'Complex Structure Discovery',
    subtitleKr: 'Topic 1. 복잡 구조 규명, 원자 수준 샘플링, 및 구조 ensemble 구축',
    icon: <Search size={24} />,
    desc: 'We go beyond idealized structural models to predict surface reconstructions, defect arrangements, interfacial structures, amorphous phases, and nanostructures that emerge under realistic conditions. To achieve this, we combine active-learning MLIPs, global optimization, and large-scale atomistic sampling to explore complex potential-energy landscapes and construct realistic structural ensembles. Our goal is not only to identify what structures exist, but also to understand why they form and remain stable from the perspectives of thermodynamics and kinetics.',
    descKr: '우리는 이상화된 구조 모델을 넘어, 실제 조건에서 형성되는 표면 재구성, 결함 배열, 계면 구조, 비정질상, 나노구조 및 나노입자 형상을 예측합니다. 이를 위해 active-learning MLIPs, 전역 최적화, 알고리즘 기반 구조 샘플링 기법을 결합하여 복잡한 potential-energy landscape를 탐색하고, 구조 ensemble을 구축합니다. 우리의 목표는 어떤 구조가 존재하는지를 규명하는 데 그치지 않고, 그 구조가 왜 형성되고 안정화되는지를 열역학과 동역학의 관점에서 이해하는 것입니다',
    image: 'https://picsum.photos/seed/stability/400/400',
    methodology: 'Active-Learning MLIPs, Global Optimization, DFT, Large-Scale Molecular Dynamics',
    questions: [
      'How can advanced sampling, global optimization, and MLIP-enabled large-scale simulations be used to identify and predict surface reconstructions, defect arrangements, interfacial structures, amorphous phases, and nanostructures beyond idealized structural models?',
      'How do these realistic structural ensembles govern materials properties, reactivity, and structure–property relationships?'
    ],
    featuredPublication: {
      title: 'Machine-Learning-Accelerated Surface Exploration of Reconstructed BiVO4(010) and Characterization of Their Aqueous Interfaces',
      authors: 'Y. Lee†, T. Lee#',
      journal: 'Journal of the American Chemical Society 147, 7799 (2025)',
      doi: 'https://doi.org/10.1021/jacs.4c17739'
    },
    publications: [
      { 
        doi: 'https://doi.org/10.1002/eem2.70328', 
        tags: ['Battery', 'Lithiation', 'Global Optimization'],
        methods: 'Global Optimization, DFT, Active-Learning MLIPs'
      },
      { 
        doi: 'https://doi.org/10.1021/jacs.4c17739', 
        tags: ['Photoelectrochemistry', 'MLIP', 'Global Optimization'],
        methods: 'Active-Learning MLIPs, Global Optimization, DFT'
      },
      { 
        doi: 'https://doi.org/10.1016/j.actamat.2025.121313', 
        tags: ['Semiconductor', 'Amorphous', 'Experiment Collaboration', 'DFT'],
        methods: 'DFT, Structure Ensembles'
      }
    ]
  },
  {
    id: 'operando-reactivity',
    title: 'Electrochemical Interfacial Reactivity',
    subtitleKr: 'Topic 2. 전기화학적 계면 반응성, 안정성, 및 열화 메커니즘 규명',
    icon: <Waves size={24} />,
    desc: 'We investigate how the stability and reactivity of surfaces and interfaces evolve with changes in potential, electrolyte, pH, composition, and defects. By combining ab initio surface thermodynamics, grand-canonical approaches, charge-aware MLIP-MD, and explicit/implicit aqueous-interface modeling, we track structural evolution under realistic operating conditions. A major focus of this theme is to understand how surface reconstruction, hydration, defect chemistry, and electron/hole localization govern charge-carrier dynamics, catalytic reactivity, properties, and stability in photoelectrochemical and electrocatalytic systems.\n\nWe also investigate kinetic reaction pathways to understand how surface and interfacial structures evolve during catalytic processes under realistic environments. Beyond reactivity, we use atomistic modeling to identify degradation mechanisms in catalytic systems, revealing how structural transformation, defect formation, and environmental effects influence electrochemical stability.',
    descKr: '우리는 전위, 전해질, pH, 조성, 결함 변화에 따라 표면과 계면의 안정성 및 반응성이 어떻게 변화하는지를 연구합니다. 이를 위해 ab initio surface thermodynamics, grand-canonical 접근, charge-aware MLIP-MD, 그리고 explicit/implicit aqueous-interface modeling을 결합하여, 실제 구동 환경에서의 구조 변화를 추적합니다. 표면 재구성, 수화, 결함 공학, 그리고 전자/정공 국소화가 광전기화학 및 전기촉매 시스템에서 전하 운반자 동역학, 촉매 반응성, 물성, 안정성에 어떻게 영향을 주는지를 이해하는 것 입니다.\n\n또한 우리는 현실적인 환경에서 촉매 과정이 진행되는 동안 표면 및 계면 구조가 어떻게 진화하는지를 이해하기 위해 반응의 속도론적 경로도 함께 연구합니다. 더 나아가 반응성 분석을 넘어, 촉매 시스템에서 열화 메커니즘을 규명하기 위해 원자 수준 모델링을 활용하며, 이를 통해 구조 변화, 결함 형성, 환경 효과가 전기화학적 안정성에 어떤 영향을 미치는지를 밝히고자 합니다.',
    image: 'https://picsum.photos/seed/operando/400/400',
    methodology: 'Surface Thermodynamics, Grand-Canonical Methods, (Charge-Aware) MLIP-MD, Explicit/implicit Aqueous-Interface Modeling',
    questions: [
      'How do potential, electrolyte, pH, composition, and defects reshape the stability, reactivity, and interfacial charge-carrier behavior of surfaces and interfaces under operating conditions?',
      'How do surface reconstruction, hydration, oxidation-state changes, defect chemistry, and electron/hole localization govern reaction pathways, charge-carrier dynamics, durability, and measurable functionality in photoelectrochemical and electrocatalytic systems?'
    ],
    featuredPublication: {
      title: 'pH-Dependent Mechanism of Oxygen Evolution in Highly Disordered RuO2 Nanosheets',
      authors: 'X. Jin†, T. Lee†, J. Park, J. Kim, S. Park, S. Y. Yun, Y.-E. Sung, D. W. Kim, M. G. Kim, A. Soon#, and S.-J. Hwang#',
      journal: 'Nature Communications 17, 672 (2026)',
      doi: 'https://doi.org/10.1038/s41467-025-67318-y'
    },
    publications: [
      { 
        doi: 'https://doi.org/10.1021/acsenergylett.2c00319',
        tags: ['Photoelectrochemistry', 'DFT', 'Aqueous Interface'],
        methods: 'Surface Thermodynamics, DFT'
      },
      { 
        doi: 'https://doi.org/10.1002/advs.202514939',
        tags: ['Electrocatalysis', 'DFT', 'Operando Reactivity'],
        methods: 'Grand-Canonical Methods, DFT'
      },
      { 
        doi: 'https://doi.org/10.1038/s41467-025-67318-y',
        tags: ['Electrocatalysis', 'Experiment Collaboration', 'Disorder'],
        methods: 'MD Simulations, Structure Transformation'
      },
      { 
        doi: 'https://doi.org/10.1002/adfm.202316446',
        tags: ['Battery', 'Experiment Collaboration', 'Defect Chemistry'],
        methods: 'Defect Chemistry, DFT'
      }
    ]
  },
  {
    id: 'data-driven-inverse',
    title: 'Data-Driven Materials Design',
    subtitleKr: 'Topic 3. 데이터 기반 소재 탐색, 물성 예측, 그리고 AI 기반 역설계',
    icon: <Database size={24} />,
    desc: 'We use data-driven machine learning and materials-informatics approaches to learn structure–property relationships, explore and generate materials spaces, and rapidly identify promising candidates for targeted applications. By combining data mining, graph-based and transformer-based representations, symbolic regression, generative modeling, and uncertainty quantification, we aim to establish design rules for ionic conductors, semiconductors, and electrochemical materials. The goal of this theme is to go beyond predictive accuracy by deriving interpretable descriptors, quantifying model confidence, and developing actionable inverse-design strategies that connect candidate generation with experimentally relevant materials discovery.',
    descKr: '우리는 데이터 기반 머신러닝과 소재정보학 접근법을 활용하여 구조–물성 관계를 학습하고, 소재 공간을 탐색·생성하며, 목표 응용에 적합한 유망 후보를 빠르게 발굴하고자 합니다. 데이터 마이닝, graph 기반 및 transformer 기반 표현, symbolic regression, 생성 모델, 그리고 불확실성 정량화를 결합하여 이온전도체, 반도체, 전기화학 소재에 대한 설계 규칙을 확립하는 것을 목표로 합니다. 이 주제의 목표는 단순한 예측 정확도를 넘어서, 해석 가능한 descriptor를 도출하고 모델의 신뢰도를 정량화하며, 후보 생성과 실험적으로 의미 있는 소재 발굴을 연결하는 실질적인 역설계 전략을 구축하는 것입니다.',
    image: 'https://picsum.photos/seed/design/400/400',
    methodology: 'Data Mining, Graph/Transformer Representations, Symbolic Regression, Generative Models, Uncertainty Quantification',
    questions: [
      'How can data-driven models learn structure–property relationships and rapidly identify promising material candidates across complex materials spaces?',
      'How can interpretable descriptors, uncertainty quantification, and generative models enable actionable design rules for inverse materials design?'
    ],
    featuredPublication: {
      title: 'Data-Mining Fluoride-Based Solid-State Electrolytes for Monovalent Metal Batteries',
      authors: 'G. Heo†, A. Soon#, T. Lee#',
      journal: 'Journal of Materials Chemistry A 12(40), 27409–27420 (2024)',
      doi: 'https://doi.org/10.1039/D4TA04553J'
    },
    publications: [
      { 
        doi: 'https://doi.org/10.1039/D4TA04553J', 
        tags: ['Solid Electrolytes', 'Data Mining', 'Materials Screening'],
        methods: 'Data Mining, Graph Representations, Transformers, Symbolic Regression, Generative Models, Uncertainty Quantification'
      }
    ]
  }
];

const getTagColor = (tag: string) => {
  const t = tag.toLowerCase();
  // Variations within blue/indigo/slate family
  if (t.includes('battery') || t.includes('lithiation') || t.includes('energy')) return 'bg-blue-50 text-blue-700 border-blue-100/50';
  if (t.includes('mlip') || t.includes('machine learning') || t.includes('ai') || t.includes('data-driven')) return 'bg-sky-50 text-sky-700 border-sky-100/50';
  if (t.includes('photoelectrochemistry') || t.includes('catalysis') || t.includes('reactivity')) return 'bg-indigo-50 text-indigo-700 border-indigo-100/50';
  if (t.includes('semiconductor') || t.includes('dft') || t.includes('computation')) return 'bg-slate-50 text-slate-700 border-slate-200/50';
  if (t.includes('experiment') || t.includes('collaboration')) return 'bg-cyan-50 text-cyan-700 border-cyan-100/50';
  if (t.includes('optimization') || t.includes('inverse design')) return 'bg-blue-100/30 text-blue-800 border-blue-200/30';
  if (t.includes('defect') || t.includes('structure') || t.includes('identification') || t.includes('amorphous')) return 'bg-slate-100 text-slate-600 border-slate-200/50';
  return 'bg-blue-50/50 text-blue-600/80 border-blue-100/30';
};

const Research = () => {
  const [activeTheme, setActiveTheme] = useState(themes[0].id);

  const currentTheme = themes.find(t => t.id === activeTheme)!;

  return (
    <div className="pt-24 pb-20 max-w-7xl mx-auto px-8">
      {/* Header Section */}
      <header className="mb-6">
        <h1 className="font-sans font-extrabold text-2xl md:text-4xl tracking-tighter text-primary">Research</h1> 
      </header>

        {/* Intro Text */}
        <section className="mb-10">
          {/* Text Content */}
          <div className="w-full space-y-4">
            <div className="font-academic text-sm font-light text-slate-700 leading-relaxed">
              <p className="mb-2">Our research spans three interconnected themes:</p>
              <ul className="space-y-1.5 pl-2">
                <li className="flex items-start gap-2">
                  <span className="text-slate-500">(1)</span>
                  <span className="flex-1 opacity-90">Complex Structure Discovery,</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-slate-500">(2)</span>
                  <span className="flex-1 opacity-90">Electrochemical Interfacial Reactivity, and</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-slate-500">(3)</span>
                  <span className="flex-1 opacity-90">Data-Driven Materials Design.</span>
                </li>
              </ul>
            </div>
            <div className="font-academic text-[13px] text-slate-600 leading-relaxed italic opacity-80 pl-3 border-l-2 border-slate-200">
              <p className="mb-1.5">본 연구실은 세 가지 주제를 포괄합니다. 전산재료과학 및 머신러닝 기반 모델링을 통해</p>
              <ul className="space-y-1.5 pl-2">
                <li className="flex items-start gap-2">
                  <span className="text-slate-400 font-sans">(1)</span>
                  <span className="flex-1">복잡 구조 규명 (Complex Structure Discovery),</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-slate-400 font-sans">(2)</span>
                  <span className="flex-1">전기화학적 계면 반응성 (Electrochemical Interfacial Reactivity),</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-slate-400 font-sans">(3)</span>
                  <span className="flex-1">데이터 기반 소재 탐색, 물성 예측, 그리고 AI 기반 역설계 (Data-Driven Materials Design).</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 h-[1px] bg-slate-200" />
        </section>

      <div className="grid grid-cols-1 md:grid-cols-10 gap-10">
        {/* Sidebar Navigation */}
        <aside className="md:col-span-2 h-fit sticky top-32">
          <nav className="flex flex-col gap-4">
            <div className="font-sans text-[10px] font-bold uppercase tracking-widest text-slate-900 py-2 border-b border-slate-200">Research Themes</div>
            {themes.map((theme) => (
              <button
                key={theme.id}
                onClick={() => setActiveTheme(theme.id)}
                className={`group flex items-center gap-3 py-1 text-left transition-all ${activeTheme === theme.id ? 'translate-x-2' : 'hover:translate-x-1'}`}
              >
                <span className={`h-[1px] transition-all ${activeTheme === theme.id ? 'w-8 bg-tertiary' : 'w-5 bg-slate-200 group-hover:bg-tertiary'}`}></span>
                <span className={`font-sans font-bold text-[10px] uppercase tracking-widest ${activeTheme === theme.id ? 'text-tertiary' : 'text-primary hover:text-tertiary'}`}>
                  {theme.title}
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
              className="flex flex-col gap-8"
            >
              {/* 1. Title Section */}
              <div className="flex flex-col gap-2 mb-1">
                <div className="flex items-center gap-3">
                  <div className="section-divider" />
                  <h2 className="font-sans text-2xl font-extrabold text-primary tracking-tight leading-tight">{currentTheme.title}</h2>
                </div>
                {(currentTheme as any).subtitleKr && (
                  <p className="font-academic text-[15px] font-bold text-slate-800 ml-10">{(currentTheme as any).subtitleKr}</p>
                )}
              </div>

              {/* 2 & 3. Research Questions & Methodologies */}
              <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-3">
                  {currentTheme.questions && (
                    <div className="p-4 bg-slate-50 border border-slate-100">
                      <h4 className="font-sans font-bold text-[10px] uppercase tracking-widest text-tertiary mb-3">
                        Research Questions
                      </h4>
                      <ul className="space-y-2">
                        {(Array.isArray(currentTheme.questions) ? currentTheme.questions : [currentTheme.questions]).map((q, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <span className="text-tertiary mt-[7px] select-none leading-none">•</span>
                            <p className="font-academic text-sm text-slate-700 leading-relaxed italic font-light flex-1">
                              "{q}"
                            </p>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
                <div className="p-4 bg-primary text-white">
                  <h4 className="font-sans font-bold text-[10px] uppercase tracking-widest mb-3 text-accent-blue">
                    Methodologies
                  </h4>
                  <p className="font-academic text-xs leading-relaxed tracking-tight font-light opacity-90">
                    {currentTheme.methodology}
                  </p>
                </div>
              </div>

              {/* 4. General Description (Bilingual) + Image (7:3 ratio) */}
              <div className="py-6 border-y border-slate-100/50">
                <h4 className="font-sans font-bold text-[10px] uppercase tracking-widest text-slate-900 mb-4 flex items-center gap-1.5">
                  <FileText size={12} className="text-slate-400" />
                  Description
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-10 gap-8 items-start">
                  <div className="md:col-span-7 space-y-4">
                    <div className="space-y-4">
                      {currentTheme.desc.split('\n\n').map((para, i) => (
                        <p key={i} className="font-academic text-sm font-light text-slate-700 leading-relaxed">
                          {para}
                        </p>
                      ))}
                    </div>
                    <div className="space-y-4 italic opacity-80 pl-3 border-l-2 border-slate-100">
                      {currentTheme.descKr.split('\n\n').map((para, i) => (
                        <p key={i} className="font-academic text-[13px] text-slate-600 leading-relaxed break-keep">
                          {para}
                        </p>
                      ))}
                    </div>
                  </div>
                <div className="md:col-span-3 space-y-4">
                    {(currentTheme as any).featuredPublication && (
                      <div className="bg-white border-l-2 border-slate-900 p-4 shadow-sm">
                        <h4 className="font-sans font-bold text-[9px] uppercase tracking-widest text-slate-400 mb-2">Representative Publication</h4>
                        <div className="space-y-2">
                          <p className="font-sans font-bold text-xs text-primary leading-tight hover:text-tertiary transition-colors">
                            <a href={(currentTheme as any).featuredPublication.doi} target="_blank" rel="noopener noreferrer">
                              {(currentTheme as any).featuredPublication.title}
                            </a>
                          </p>
                          <p className="text-[11px] text-slate-600 font-academic">{(currentTheme as any).featuredPublication.authors}</p>
                          <p className="text-[10px] text-slate-500 italic font-academic">{(currentTheme as any).featuredPublication.journal}</p>
                          <a 
                            href={(currentTheme as any).featuredPublication.doi} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 text-[9px] font-bold text-tertiary uppercase tracking-widest hover:underline pt-1"
                          >
                            <ArrowUpRight size={10} />
                            DOI Link
                          </a>
                        </div>
                      </div>
                    )}
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
                <div className="flex items-center justify-between">
                  <h4 className="font-sans font-bold text-[10px] uppercase tracking-widest text-slate-900 flex items-center gap-2">
                    <BookOpen size={12} className="text-tertiary" />
                    Related Lab Publications
                  </h4>
                </div>
                <div className="flex flex-col">
                  {[...currentTheme.publications]
                    .map(pubRef => {
                      const globalPub = globalPublications.find(p => p.doi === pubRef.doi);
                      return { ...globalPub, ...pubRef }; // Merge, but pubRef (tags) should take precedence if needed
                    })
                    .sort((a, b) => {
                      const yearA = parseInt(a.year) || 0;
                      const yearB = parseInt(b.year) || 0;
                      return yearB - yearA;
                    })
                    .map((pub: any, idx: number) => {
                      const isLink = !!pub.doi;
                      const PubWrapper = isLink ? 'a' : 'div';
                      return (
                        <PubWrapper 
                          key={idx}
                          {...(isLink ? { href: pub.doi, target: '_blank', rel: 'noopener noreferrer' } : {})}
                          className={`py-3 border-b border-slate-100 last:border-0 group flex items-start justify-between gap-4 px-2 -mx-2 rounded-sm ${isLink ? 'hover:bg-slate-50/50 transition-colors cursor-pointer' : ''}`}
                        >
                          <div className="flex-1 flex flex-col gap-2">
                            {(pub.year || pub.journal || pub.if) && (
                              <p className="font-academic text-[13px] text-slate-700 italic flex items-center gap-2 flex-wrap">
                                {pub.year && <span className={`font-bold not-italic ${isLink ? 'group-hover:text-tertiary transition-colors' : 'text-slate-800'}`}>{pub.year}</span>}
                                {pub.journal && <span className={isLink ? 'group-hover:text-slate-900 transition-colors' : ''}>{pub.journal}</span>}
                                {pub.if && <span className="text-tertiary font-semibold not-italic whitespace-nowrap ml-1">IF: {pub.if}</span>}
                              </p>
                            )}
                            {pub.tags && (
                              <div className="flex flex-wrap gap-1.5 mt-0.5">
                                {pub.tags.map((tag: string) => (
                                  <span key={tag} className={`px-1.5 py-0.5 rounded-sm text-[9px] font-bold uppercase tracking-wider transition-colors border ${getTagColor(tag)}`}>{tag}</span>
                                ))}
                              </div>
                            )}
                            {pub.methods && (
                              <p className="text-[10px] text-slate-500 font-academic leading-relaxed max-w-2xl">
                                <span className="font-bold text-slate-600">Methods:</span> {pub.methods}
                              </p>
                            )}
                          </div>
                          {isLink && <ArrowUpRight size={12} className="text-slate-300 group-hover:text-tertiary transition-all shrink-0 mt-1.5" />}
                        </PubWrapper>
                      );
                    })}
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
