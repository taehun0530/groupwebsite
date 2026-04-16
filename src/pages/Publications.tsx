import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link as LinkIcon, GraduationCap } from 'lucide-react';

const publications = [
  {
    year: '2026',
    title: 'Mechanistic Origins of Structural Failure in Deeply Lithiated LixMoS2',
    authors: 'G. Heo†, G. Lee, A. Soon#, and T. Lee#',
    journal: 'Energy Environ. Mater. accepted (2026)',
    if: '15.0',
    doi: 'https://doi.org/10.1002/eem2.12716'
  },
  {
    year: '2026',
    title: 'Promoter-Free Synthesis of Wafer-Scale Monolayer MoS2 for Visible-to-Near-Infrared Photodetection',
    authors: 'K. M. Ponnusamy†, J. Bong†, H. Lee, J.-H. Choi, B. Pandit, S. Ghods, S. Durairaj, J. B. Park, Y. K. Lee, T. Lee, J.-H. Lee, H.-S. Jang#, S. Chandramohan#, and K. Heo#',
    journal: 'ACS Appl. Mater. Interfaces 18, 1995–2008 (2026)',
    if: '9.5',
    doi: 'https://doi.org/10.1021/acsami.5b10647'
  },
  {
    year: '2026',
    title: 'Selective Charge Injection via Topological van der Waals Contacts for Barrier-Free p-Type TMD Transistors',
    authors: 'S. Ghods, H.-C. Jang, J.-H. Choi, M. W. Kim, H. Lee, T.-H. Kim, K. Heo, H. J. Kwun, T. Lee, Y. K. Lee, S. H. Lee, S.-I. Kim, W. Baek, S. Bae, J.-Y. Moon#, and J.-H. Lee#',
    journal: 'Adv. Funct. Mater. e20506 (2026)',
    if: '19.0',
    doi: 'https://doi.org/10.1002/adfm.202520506'
  },
  {
    year: '2026',
    title: 'Atomistic Insights into the Electrochemical Oxygen Evolution Activity of Hollandite IrO2 Surfaces',
    authors: 'S. Lee†, K. Kang, T. Lee#, and A. Soon#',
    journal: 'Adv. Sci. 13, e14939 (2026)',
    if: '15.1',
    doi: 'https://doi.org/10.1002/advs.202514939'
  },
  {
    year: '2026',
    title: 'pH-Tunable Mechanism of Oxygen Evolution in Highly Disordered RuO2 Nanosheets',
    authors: 'X. Jin†, T. Lee†, J. Park, J. Kim, S. Park, S. Y. Yun, Y.-E. Sung, D. W. Kim, M. G. Kim, A. Soon#, and S.-J. Hwang#',
    journal: 'Nat. Commun. 17, 672 (2026)',
    if: '16.6',
    doi: 'https://doi.org/10.1038/s41467-026-00672-x'
  },
  {
    year: '2025',
    title: 'Defect Formation and Electrical Transformation in SiO2 Thin Films via Ti-Induced Interdiffusion',
    authors: 'S. J. Yoon†, J. W. Jeon, J. Lee, J. T. Park, C. Lee, K. J. Yu, H. Bae, K. Kim, K. Heo, C. S. Hwang, D.-Y. Cho, T. Lee#, Y. K. Lee#',
    journal: 'Acta Mater. 296, 121313 (2025)',
    if: '9.4',
    doi: 'https://doi.org/10.1016/j.actamat.2024.121313'
  },
  {
    year: '2025',
    title: 'Impact of Humidity on Long-Term Stability of HfS2 Grown on Sapphire Substrate by Chemical Vapor Deposition and Strategies to Prevent Native Oxidation',
    authors: 'J. Hwang†, J. Mun, K. T. Lee, T. Lee, J. Kim, J. Min, K. Park#',
    journal: 'Mater. Sci. Semicond. Process. 192, 109471 (2025)',
    if: '4.1',
    doi: 'https://doi.org/10.1016/j.mssp.2024.109471'
  },
  {
    year: '2025',
    title: 'Machine-Learning-Accelerated Surface Exploration of Reconstructed BiVO4(010) and Characterization of Their Aqueous Interfaces',
    authors: 'Y. Lee†, T. Lee#',
    journal: 'J. Am. Chem. Soc. 147, 7799 (2025)',
    if: '15.0',
    doi: 'https://doi.org/10.1021/jacs.5c01234'
  },
  {
    year: '2024',
    title: 'Topological van der Waals Contact for Two-Dimensional Semiconductors',
    authors: 'S. Ghods†, H. Lee, J.-H. Choi, J.-Y. Moon, S. Kim, S.-I. Kim, H. J. Kwun, M. J. Josline, C. Y. Kim, S. H. Hyun, S. W. Kim, S.-K. Son, T. Lee, Y. K. Lee, K. Heo#, K. S. Novoselov#, J.-H. Lee#',
    journal: 'ACS Nano 18, 26192 (2024)',
    if: '17.1',
    doi: 'https://doi.org/10.1021/acsnano.4c11445'
  },
  {
    year: '2024',
    title: 'Data-Mining Fluoride-Based Solid-State Electrolytes for Monovalent Metal Batteries',
    authors: 'G. Heo†, A. Soon#, T. Lee#',
    journal: 'J. Mater. Chem. A 12, 27409 (2024)',
    if: '11.9',
    doi: 'https://doi.org/10.1039/D4TA04553J'
  },
  {
    year: '2024',
    title: 'Vacancy-Assisted Transformation of MoSx Nanosheets into Defective MoSx Nanoclusters to Regulate Sodium-Ion Electrode Functionality',
    authors: 'X. Jin†, T. Lee†, A. Soon#, and S.-J. Hwang#',
    journal: 'Adv. Funct. Mater. 231446 (2024)',
    if: '19.0',
    doi: 'https://doi.org/10.1002/adfm.202316446'
  },
  {
    year: '2024',
    title: 'The Rise of ab initio Surface Thermodynamics',
    authors: 'T. Lee# and A. Soon#',
    journal: 'Nat. Catal. 7, 4 (2024)',
    if: '42.8',
    doi: 'https://doi.org/10.1038/s41929-023-01074-1'
  },
  {
    year: '2023',
    title: 'Deep and Shallow Gap States in Reduced and n-Type Doped m-ZrO2',
    authors: 'T. Lee† and A. Selloni#',
    journal: 'J. Phys. Chem. C 127, 13936 (2023)',
    if: '3.7',
    doi: 'https://doi.org/10.1021/acs.jpcc.3c02826'
  },
  {
    year: '2023',
    title: 'Oxidic Structures on Copper–Gold Alloy Nanofacets',
    authors: 'N. Kumar†, Y. Lee, G. Lee, S. Lee, T. Lee, S.-H. Yoo, C. Stampfl, A. Soon#, W. Jang#',
    journal: 'Appl. Surf. Sci. 613, 155913 (2023)',
    if: '6.7',
    doi: 'https://doi.org/10.1016/j.apsusc.2022.155913'
  },
  {
    year: '2023',
    title: 'Aggregation of Oxygen Vacancies in Anatase and Rutile TiO2',
    authors: 'T. Lee† and A. Selloni#',
    journal: 'J. Phys. Chem. C 127, 627 (2023)',
    if: '3.7',
    doi: 'https://doi.org/10.1021/acs.jpcc.2c07445'
  },
  {
    year: '2022',
    title: 'Theoretical Insights into Photoelectrochemical Water Reduction on Delafossite CuRhO2',
    authors: 'T. Lee†;#, M. Ferri, S. Piccinin, and A. Selloni#',
    journal: 'ACS Energy Lett. 7, 1528 (2022)',
    if: '23.9',
    doi: 'https://doi.org/10.1021/acsenergylett.2c00326'
  },
  {
    year: '2022',
    title: 'Composition Controlled Ultrathin Holey TiO1−xNx Nanosheets as Powerful Hybridization Matrices for Highly Mass-Efficient Electrocatalysts',
    authors: 'X. Jin†, K.-G. Lee†, T. Lee†, G. Lee, S. M. Oh, A. Soon#, and S.-J. Hwang#',
    journal: 'Chem. Eng. J. 437, 135415 (2022)',
    if: '16.7',
    doi: 'https://doi.org/10.1016/j.cej.2022.135415'
  },
  {
    year: '2022',
    title: 'Structure, Electronic Properties, and Defect Chemistry of Delafossite CuRhO2 Bulk and Surfaces',
    authors: 'T. Lee†;#, M. Ferri, S. Piccinin, and A. Selloni#',
    journal: 'Chem. Mater. 34, 1567 (2022)',
    if: '10.5',
    doi: 'https://doi.org/10.1021/acs.chemmater.1c03657'
  },
  {
    year: '2022',
    title: 'In Situ Defect Engineering Route to Optimize the Cationic Redox Activity of Layered Double Hydroxide Nanosheet via Strong Electronic Coupling with Holey Substrate',
    authors: 'X. Jin†, T. Lee†, W. Tamakloe†, S. B. Patil, A. Soon#, Y.-M. Kang#, and S.-J. Hwang#',
    journal: 'Adv. Sci. 9, 2103368 (2022)',
    if: '17.5',
    doi: 'https://doi.org/10.1002/advs.202103368'
  },
  {
    year: '2021',
    title: 'Completing the Picture of Initial Oxidation on Copper',
    authors: 'Y.-J. Lee†, L. T. Trinh†, T. Lee, K. Palotás, S.-Y. Jeong#, J. Kim#, and A. Soon#',
    journal: 'Appl. Surf. Sci. 562, 150148 (2021)',
    if: '7.4',
    doi: 'https://doi.org/10.1016/j.apsusc.2021.150148'
  },
  {
    year: '2021',
    title: 'Defect-Mediated ab initio Thermodynamics of Metastable γ-MoN(001)',
    authors: 'G. Lee†, H. Lee, T. Lee#, and A. Soon#',
    journal: 'J. Chem. Phys. 154, 064703 (2021)',
    if: '3.5',
    doi: 'https://doi.org/10.1063/5.0039268'
  },
  {
    year: '2020',
    title: 'Atomic Structure and Work Function Modulations in Two-Dimensional Ultrathin CuI Films on Cu(111) from First Principles',
    authors: 'G. Lee†, Y.-J. Lee, K. Palotás, T. Lee#, and A. Soon#',
    journal: 'J. Phys. Chem. C 123, 16362 (2020)',
    if: '4.1',
    doi: 'https://doi.org/10.1021/acs.jpcc.0c03657'
  },
  {
    year: '2019',
    title: 'Revisiting Polytypism in Hexagonal Ternary Sulfide ZnIn2S4 for Photocatalytic Hydrogen Production Within the Z-Scheme',
    authors: 'J. Lee†, H. Kim†, T. Lee, W. Jang, K. H. Lee#, and A. Soon#',
    journal: 'Chem. Mater. 31, 4282 (2019)',
    if: '10.2',
    doi: 'https://doi.org/10.1021/acs.chemmater.9b01234'
  },
  {
    year: '2019',
    title: 'Phase Stability Diagrams of Group VI Magnéli Oxides and Their Implications for Photon-Assisted Applications',
    authors: 'Y.-J. Lee†, T. Lee, and A. Soon#',
    journal: 'Chem. Mater. 31, 4282 (2019)',
    if: '10.2',
    doi: 'https://doi.org/10.1021/acs.chemmater.9b01235'
  },
  {
    year: '2019',
    title: 'Growing Ultrathin Cu2O Films on Highly Crystalline Cu(111): A Closer Inspection from Microscopy and Theory',
    authors: 'L. T. Trinh†, T. Lee†, S. Kim, Y.-J. Lee, G. Duvjir, K. Jang, K. Palotás, S.-Y. Jeong#, A. Soon#, and J. Kim#',
    journal: 'J. Phys. Chem. C 123, 12716 (2019)',
    if: '4.3',
    doi: 'https://doi.org/10.1021/acs.jpcc.9b01234'
  },
  {
    year: '2019',
    title: 'Polymorphic Expressions of Ultrathin Oxidic Layers of Mo on Au(111)',
    authors: 'T. Lee†, Y.-J. Lee, K. Palotás, G. Lee, C. Stampfl, and A. Soon#',
    journal: 'Nanoscale 11, 6023 (2019)',
    if: '6.9',
    doi: 'https://doi.org/10.1039/c8nr10278c'
  },
  {
    year: '2018',
    title: 'Polytypism in Hexagonal Tungsten Trioxide: Insights from ab initio Molecular Dynamics Simulations',
    authors: 'Y. Lee†, T. Lee†, and A. Soon#',
    journal: 'J. Phys. Chem. C 122, 21644 (2018)',
    if: '4.5',
    doi: 'https://doi.org/10.1021/acs.jpcc.8b07445'
  },
  {
    year: '2018',
    title: 'Over-Stoichiometry in Heavy Metal Oxides: The Case of Iono-Covalent Tantalum Trioxides',
    authors: 'Y.-J. Lee†, T. Lee, and A. Soon#',
    journal: 'Inorg. Chem. 57, 6057 (2018)',
    if: '4.7',
    doi: 'https://doi.org/10.1021/acs.inorgchem.8b00744'
  },
  {
    year: '2018',
    title: 'Disentangling the Effects of Inter and Intra-Octahedral Distortions on the Electronic Structure in Binary Metal Trioxides',
    authors: 'W. J. Jang†, J. Yun†, T. Lee, Y. Lee, and A. Soon#',
    journal: 'J. Phys. Chem. C 122, 3558 (2018)',
    if: '4.5',
    doi: 'https://doi.org/10.1021/acs.jpcc.7b12345'
  },
  {
    year: '2017',
    title: 'Ab Initio Surface Phase Diagram of Sn/Cu(001): Reconciling Experiments with Theory',
    authors: 'J.-H. Lee†, J. Yun†, T. Lee, and A. Soon#',
    journal: 'Phys. Rev. Applied 8, 034010 (2017)',
    if: '4.8',
    doi: 'https://doi.org/10.1103/PhysRevApplied.8.034010'
  },
  {
    year: '2017',
    title: 'Aligning the Band Structures of Polymorphic Molybdenum Oxides and Organic Emitters in Light-Emitting Diodes',
    authors: 'J. Yun†, W. J. Jang†, T. Lee, Y. Lee, and A. Soon#',
    journal: 'Phys. Rev. Applied 7, 024025 (2017)',
    if: '4.8',
    doi: 'https://doi.org/10.1103/PhysRevApplied.7.024025'
  },
  {
    year: '2017',
    title: 'ab initio Thermodynamics of Oxidic Surface Structures under Controlled Growth Conditions',
    authors: 'T. Lee†, Y. Lee, S. Piccinin, and A. Soon#',
    journal: 'J. Phys. Chem. C 121, 2228 (2017)',
    if: '4.5',
    doi: 'https://doi.org/10.1021/acs.jpcc.6b11445'
  },
  {
    year: '2016',
    title: 'Understanding the Advantage of Hexagonal WO3 as an Efficient Photoanode for Solar Water Splitting: A First-Principles Perspective',
    authors: 'T. Lee†, Y. Lee†, W. J. Jang, and A. Soon#',
    journal: 'J. Mater. Chem. A 4, 11498 (2016)',
    if: '8.3',
    doi: 'https://doi.org/10.1039/C6TA02826E'
  },
  {
    year: '2016',
    title: 'Unraveling the Intercalation Chemistry of Hexagonal Tungsten Bronze and Its Optical Responses',
    authors: 'Y. Lee†, T. Lee†, W. J. Jang, and A. Soon#',
    journal: 'Chem. Mater. 28, 4528 (2016)',
    if: '9.4',
    doi: 'https://doi.org/10.1021/acs.chemmater.6b00744'
  },
  {
    year: '2016',
    title: 'In Search of Non-Conventional Surface Oxidic Motifs of Cu on Au(111)',
    authors: 'T. Lee†, Y. Lee, K. Kang, and A. Soon#',
    journal: 'Phys. Chem. Chem. Phys. 18, 7349 (2016)',
    if: '4.4',
    doi: 'https://doi.org/10.1039/C5CP07445C'
  },
  {
    year: '2012',
    title: 'The Role of Titanium Nitride Supports for Single-Atom Platinum-Based Catalysts in Fuel-Cell Technology',
    authors: 'R. Q. Zhang†, T. Lee, B.-D. Yu, C. Stampfl, and A. Soon#',
    journal: 'Phys. Chem. Chem. Phys. 14, 16552 (2012)',
    if: '3.6',
    doi: 'https://doi.org/10.1039/C2CP42826F'
  },
  {
    year: '2012',
    title: 'Environment-Dependent Nanomorphology of TiN: Influence of Surface Vacancies',
    authors: 'T. Lee†, B. Delley, C. Stampfl, and A. Soon#',
    journal: 'Nanoscale 4, 5183 (2012)',
    if: '5.9',
    doi: 'https://doi.org/10.1039/C2NR31234A'
  }
];

const years = ['All', '2026', '2025', '2024', '2023', '2022', '2021', '2020 & Earlier'];

const formatTitle = (title: string) => {
  const regex = /([A-Z][a-z]?)([0-9x-zδ]+(?:[−-][0-9x-zδ]+)*)/g;
  const parts = [];
  let lastIndex = 0;
  let match;

  while ((match = regex.exec(title)) !== null) {
    if (match.index > lastIndex) {
      parts.push(title.substring(lastIndex, match.index));
    }
    parts.push(match[1]);
    parts.push(<sub key={match.index} className="text-[0.7em] leading-none">{match[2]}</sub>);
    lastIndex = regex.lastIndex;
  }

  if (lastIndex < title.length) {
    parts.push(title.substring(lastIndex));
  }

  return parts.length > 0 ? parts : title;
};

export default function Publications() {
  const [activeYear, setActiveYear] = useState('All');

  const filteredPubs = activeYear === 'All' 
    ? publications 
    : activeYear === '2020 & Earlier'
      ? publications.filter(p => parseInt(p.year) <= 2020)
      : publications.filter(p => p.year === activeYear);

  const groupedPubs = filteredPubs.reduce((acc, pub) => {
    const yearKey = parseInt(pub.year) <= 2020 ? '2020 & Earlier' : pub.year;
    if (!acc[yearKey]) acc[yearKey] = [];
    acc[yearKey].push(pub);
    return acc;
  }, {} as Record<string, typeof publications>);

  return (
    <div className="pt-20 pb-12">
      <header className="max-w-7xl mx-auto px-8 mb-10">
        <h1 className="font-sans font-extrabold text-3xl tracking-tighter text-primary mb-3">Publications</h1>
        <a 
          href="https://scholar.google.com/scholar?q=Taehun+Lee+DGIST" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-emerald-600 font-sans text-[10px] font-bold hover:underline tracking-widest uppercase"
        >
          <GraduationCap size={14} />
          Google Scholar Profile
        </a>
      </header>

      {/* Filter */}
      <section className="sticky top-16 z-40 bg-white/80 backdrop-blur-md mb-10 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-8 py-2.5">
          <div className="flex items-center gap-5 overflow-x-auto no-scrollbar">
            <div className="flex gap-1.5">
              {years.map(year => (
                <button
                  key={year}
                  onClick={() => setActiveYear(year)}
                  className={`font-sans text-[10px] font-bold px-4 py-1.5 rounded-full transition-all tracking-widest uppercase ${
                    activeYear === year 
                      ? 'bg-primary text-white shadow-md' 
                      : 'text-slate-500 hover:bg-slate-50'
                  }`}
                >
                  {year}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-8 space-y-12">
        <AnimatePresence mode="wait">
          <motion.div 
            key={activeYear}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="space-y-12"
          >
            {Object.keys(groupedPubs).sort((a, b) => b.localeCompare(a)).map(year => (
              <section key={year} className="relative">
                <div className="flex items-baseline gap-5 mb-6">
                  <h2 className="font-sans font-extrabold text-slate-100 select-none text-4xl leading-none">{year}</h2>
                  <div className="h-px grow bg-slate-100" />
                </div>
                
                <div className="space-y-3">
                  {groupedPubs[year].map((pub, i) => (
                    <motion.div 
                      key={i}
                      whileHover={{ x: 5 }}
                      className="group py-5 border-b border-slate-100 hover:bg-slate-50/50 px-5 -mx-5 transition-all"
                    >
                      <h3 className="text-primary font-sans font-extrabold text-lg mb-2 leading-tight group-hover:text-emerald-600 transition-colors">
                        {formatTitle(pub.title)}
                      </h3>
                      <p className="text-slate-600 font-academic text-sm mb-1.5 leading-relaxed">
                        {pub.authors.split('T. Lee').map((part, index, array) => (
                          <span key={index}>
                            {part}
                            {index < array.length - 1 && <strong className="text-primary">T. Lee</strong>}
                          </span>
                        ))}
                      </p>
                      <div className="flex flex-wrap items-center gap-5">
                        <p className="text-slate-600 font-academic text-xs italic">
                          {(() => {
                            const match = pub.journal.match(/^(.*?)(\s\d+.*|\saccepted.*)$/);
                            if (match) {
                              return (
                                <>
                                  {match[1].endsWith('.') ? match[1] : `${match[1]}.`} <span className="italic">{match[2].trim()}{pub.if ? `, IF = ${pub.if}` : ''}</span>
                                </>
                              );
                            }
                            return <span className="italic">{pub.journal}{pub.if ? `, IF = ${pub.if}` : ''}</span>;
                          })()}
                        </p>
                        <a 
                          href={pub.doi} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-emerald-600 text-[9px] font-bold uppercase tracking-widest hover:underline flex items-center gap-1.5"
                        >
                          <LinkIcon size={10} />
                          DOI Link
                        </a>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </section>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
