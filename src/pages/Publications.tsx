import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link as LinkIcon, ArrowUpRight } from 'lucide-react';

export const publications = [
  {
    year: '2026',
    title: 'Mechanistic Origins of Structural Failure in Deeply Lithiated LixMoS2',
    authors: 'G. Heo†, G. Lee, A. Soon#, and T. Lee#',
    journal: 'Energy & Environmental Materials; accepted / in press (2026)',
    if: '15.0',
    doi: 'https://doi.org/10.1002/eem2.70328'
  },
  {
    year: '2026',
    title: 'Promoter-Free Synthesis of Wafer-Scale Monolayer MoS2 for Visible-to-Near-Infrared Photodetection',
    authors: 'K. M. Ponnusamy†, J. Bong†, H. Lee, J.-H. Choi, B. Pandit, S. Ghods, S. Durairaj, J. B. Park, Y. K. Lee, T. Lee, J.-H. Lee, H.-S. Jang#, S. Chandramohan#, and K. Heo#',
    journal: 'ACS Applied Materials & Interfaces 18, 1995–2008 (2026)',
    if: '9.5',
    doi: 'https://doi.org/10.1021/acsami.5c19820'
  },
  {
    year: '2026',
    title: 'Selective Charge Injection via Topological van der Waals Contacts for Barrier-Free p-Type TMD Transistors',
    authors: 'S. Ghods, H.-C. Jang, J.-H. Choi, M. W. Kim, H. Lee, T.-H. Kim, K. Heo, H. J. Kwun, T. Lee, Y. K. Lee, S. H. Lee, S.-I. Kim, W. Baek, S. Bae, J.-Y. Moon#, and J.-H. Lee#',
    journal: 'Advanced Functional Materials e20506 (2026)',
    if: '19.0',
    doi: 'https://doi.org/10.1002/adfm.202520506'
  },
  {
    year: '2026',
    title: 'Atomistic Insights into the Electrochemical Oxygen Evolution Activity of Hollandite IrO2 Surfaces',
    authors: 'S. Lee†, K. Kang, T. Lee#, and A. Soon#',
    journal: 'Advanced Science 13, e14939 (2026)',
    if: '15.1',
    doi: 'https://doi.org/10.1002/advs.202514939'
  },
  {
    year: '2026',
    title: 'pH-Dependent Mechanism of Oxygen Evolution in Highly Disordered RuO2 Nanosheets',
    authors: 'X. Jin†, T. Lee†, J. Park, J. Kim, S. Park, S. Y. Yun, Y.-E. Sung, D. W. Kim, M. G. Kim, A. Soon#, and S.-J. Hwang#',
    journal: 'Nature Communications 17, 672 (2026)',
    if: '16.6',
    doi: 'https://doi.org/10.1038/s41467-025-67318-y'
  },
  {
    year: '2025',
    title: 'Defect Formation and Electrical Transformation in SiO2 Thin Films via Ti-Induced Interdiffusion',
    authors: 'S. J. Yoon†, J. W. Jeon, J. Lee, J. T. Park, C. Lee, K. J. Yu, H. Bae, K. Kim, K. Heo, C. S. Hwang, D.-Y. Cho, T. Lee#, Y. K. Lee#',
    journal: 'Acta Materialia 296, 121313 (2025)',
    if: '9.4',
    doi: 'https://doi.org/10.1016/j.actamat.2025.121313'
  },
  {
    year: '2025',
    title: 'Impact of Humidity on Long-Term Stability of HfS2 Grown on Sapphire Substrate by Chemical Vapor Deposition and Strategies to Prevent Native Oxidation',
    authors: 'J. Hwang†, J. Mun, K. T. Lee, T. Lee, J. Kim, J. Min, K. Park#',
    journal: 'Materials Science in Semiconductor Processing 192, 109471 (2025)',
    if: '4.1',
    doi: 'https://doi.org/10.1016/j.mssp.2025.109471'
  },
  {
    year: '2025',
    title: 'Machine-Learning-Accelerated Surface Exploration of Reconstructed BiVO4(010) and Characterization of Their Aqueous Interfaces',
    authors: 'Y. Lee†, T. Lee#',
    journal: 'Journal of the American Chemical Society 147, 7799 (2025)',
    if: '15.0',
    doi: 'https://doi.org/10.1021/jacs.4c17739'
  },
  {
    year: '2024',
    title: 'Topological van der Waals Contact for Two-Dimensional Semiconductors',
    authors: 'S. Ghods†, H. Lee, J.-H. Choi, J.-Y. Moon, S. Kim, S.-I. Kim, H. J. Kwun, M. J. Josline, C. Y. Kim, S. H. Hyun, S. W. Kim, S.-K. Son, T. Lee, Y. K. Lee, K. Heo#, K. S. Novoselov#, J.-H. Lee#',
    journal: 'ACS Nano 18, 26192 (2024)',
    if: '17.1',
    doi: 'https://doi.org/10.1021/acsnano.4c07585'
  },
  {
    year: '2024',
    title: 'Data-Mining Fluoride-Based Solid-State Electrolytes for Monovalent Metal Batteries',
    authors: 'G. Heo†, A. Soon#, T. Lee#',
    journal: 'Journal of Materials Chemistry A 12, 27409 (2024)',
    if: '11.9',
    doi: 'https://doi.org/10.1039/D4TA04553J'
  },
  {
    year: '2024',
    title: 'Vacancy-Assisted Transformation of MoSx Nanosheets into Defective MoSx Nanoclusters to Regulate Sodium-Ion Electrode Functionality',
    authors: 'X. Jin†, T. Lee†, A. Soon#, and S.-J. Hwang#',
    journal: 'Advanced Functional Materials 231446 (2024)',
    if: '19.0',
    doi: 'https://doi.org/10.1002/adfm.202316446'
  },
  {
    year: '2024',
    title: 'The Rise of ab initio Surface Thermodynamics',
    authors: 'T. Lee# and A. Soon#',
    journal: 'Nature Catalysis 7, 4 (2024)',
    if: '42.8',
    doi: 'https://doi.org/10.1038/s41929-023-01088-y'
  },
  {
    year: '2023',
    title: 'Deep and Shallow Gap States in Reduced and n-Type Doped m-ZrO2',
    authors: 'T. Lee† and A. Selloni#',
    journal: 'The Journal of Physical Chemistry C 127, 13936 (2023)',
    if: '3.7',
    doi: 'https://doi.org/10.1021/acs.jpcc.3c02833'
  },
  {
    year: '2023',
    title: 'Oxidic Structures on Copper–Gold Alloy Nanofacets',
    authors: 'N. Kumar†, Y. Lee, G. Lee, S. Lee, T. Lee, S.-H. Yoo, C. Stampfl, A. Soon#, W. Jang#',
    journal: 'Applied Surface Science 613, 155913 (2023)',
    if: '6.7',
    doi: 'https://doi.org/10.1016/j.apsusc.2022.155913'
  },
  {
    year: '2023',
    title: 'Structure and Stability of Oxygen Vacancy Aggregates in Reduced Anatase and Rutile TiO2',
    authors: 'T. Lee† and A. Selloni#',
    journal: 'The Journal of Physical Chemistry C 127, 627 (2023)',
    if: '3.7',
    doi: 'https://doi.org/10.1021/acs.jpcc.2c06806'
  },
  {
    year: '2022',
    title: 'Theoretical Insights into Photoelectrochemical Water Reduction on Delafossite CuRhO2',
    authors: 'T. Lee†;#, M. Ferri, S. Piccinin, and A. Selloni#',
    journal: 'ACS Energy Letters 7, 1528 (2022)',
    if: '23.9',
    doi: 'https://doi.org/10.1021/acsenergylett.2c00319'
  },
  {
    year: '2022',
    title: 'Composition Controlled Ultrathin Holey TiO1−xNx Nanosheets as Powerful Hybridization Matrices for Highly Mass-Efficient Electrocatalysts',
    authors: 'X. Jin†, K.-G. Lee†, T. Lee†, G. Lee, S. M. Oh, A. Soon#, and S.-J. Hwang#',
    journal: 'Chemical Engineering Journal 437, 135415 (2022)',
    if: '16.7',
    doi: 'https://doi.org/10.1016/j.cej.2022.135415'
  },
  {
    year: '2022',
    title: 'Structure, Electronic Properties, and Defect Chemistry of Delafossite CuRhO2 Bulk and Surfaces',
    authors: 'T. Lee†;#, M. Ferri, S. Piccinin, and A. Selloni#',
    journal: 'Chemistry of Materials 34, 1567 (2022)',
    if: '10.5',
    doi: 'https://doi.org/10.1021/acs.chemmater.1c03248'
  },
  {
    year: '2022',
    title: 'In Situ Defect Engineering Route to Optimize the Cationic Redox Activity of Layered Double Hydroxide Nanosheet via Strong Electronic Coupling with Holey Substrate',
    authors: 'X. Jin†, T. Lee†, W. Tamakloe†, S. B. Patil, A. Soon#, Y.-M. Kang#, and S.-J. Hwang#',
    journal: 'Advanced Science 9, 2103368 (2022)',
    if: '17.5',
    doi: 'https://doi.org/10.1002/advs.202103368'
  },
  {
    year: '2021',
    title: 'Completing the Picture of Initial Oxidation on Copper',
    authors: 'Y.-J. Lee†, L. T. Trinh†, T. Lee, K. Palotás, S.-Y. Jeong#, J. Kim#, and A. Soon#',
    journal: 'Applied Surface Science 562, 150148 (2021)',
    if: '7.4',
    doi: 'https://doi.org/10.1016/j.apsusc.2021.150148'
  },
  {
    year: '2021',
    title: 'Defect-Mediated ab initio Thermodynamics of Metastable γ-MoN(001)',
    authors: 'G. Lee†, H. Lee, T. Lee#, and A. Soon#',
    journal: 'The Journal of Chemical Physics 154, 064703 (2021)',
    if: '3.5',
    doi: 'https://doi.org/10.1063/5.0040835'
  },
  {
    year: '2020',
    title: 'Atomic Structure and Work Function Modulations in Two-Dimensional Ultrathin CuI Films on Cu(111) from First Principles',
    authors: 'G. Lee†, Y.-J. Lee, K. Palotás, T. Lee#, and A. Soon#',
    journal: 'The Journal of Physical Chemistry C 123, 16362 (2020)',
    if: '4.1',
    doi: 'https://doi.org/10.1021/acs.jpcc.0c02842'
  },
  {
    year: '2019',
    title: 'Revisiting Polytypism in Hexagonal Ternary Sulfide ZnIn2S4 for Photocatalytic Hydrogen Production Within the Z-Scheme',
    authors: 'J. Lee†, H. Kim†, T. Lee, W. Jang, K. H. Lee#, and A. Soon#',
    journal: 'Chemistry of Materials 31, 4282 (2019)',
    if: '10.2',
    doi: 'https://doi.org/10.1021/acs.chemmater.9b03539'
  },
  {
    year: '2019',
    title: 'Phase Stability Diagrams of Group VI Magnéli Oxides and Their Implications for Photon-Assisted Applications',
    authors: 'Y.-J. Lee†, T. Lee, and A. Soon#',
    journal: 'Chemistry of Materials 31, 4282 (2019)',
    if: '10.2',
    doi: 'https://doi.org/10.1021/acs.chemmater.9b01430'
  },
  {
    year: '2019',
    title: 'Growing Ultrathin Cu2O Films on Highly Crystalline Cu(111): A Closer Inspection from Microscopy and Theory',
    authors: 'L. T. Trinh†, T. Lee†, S. Kim, Y.-J. Lee, G. Duvjir, K. Jang, K. Palotás, S.-Y. Jeong#, A. Soon#, and J. Kim#',
    journal: 'The Journal of Physical Chemistry C 123, 12716 (2019)',
    if: '4.3',
    doi: 'https://doi.org/10.1021/acs.jpcc.9b00255'
  },
  {
    year: '2019',
    title: 'Polymorphic Expressions of Ultrathin Oxidic Layers of Mo on Au(111)',
    authors: 'T. Lee†, Y.-J. Lee, K. Palotás, G. Lee, C. Stampfl, and A. Soon#',
    journal: 'Nanoscale 11, 6023 (2019)',
    if: '6.9',
    doi: 'https://doi.org/10.1039/C8NR10278C'
  },
  {
    year: '2018',
    title: 'Polytypism in Hexagonal Tungsten Trioxide: Insights from ab initio Molecular Dynamics Simulations',
    authors: 'Y. Lee†, T. Lee†, and A. Soon#',
    journal: 'The Journal of Physical Chemistry C 122, 21644 (2018)',
    if: '4.5',
    doi: 'https://doi.org/10.1021/acs.jpcc.8b05595'
  },
  {
    year: '2018',
    title: 'Over-Stoichiometry in Heavy Metal Oxides: The Case of Iono-Covalent Tantalum Trioxides',
    authors: 'Y.-J. Lee†, T. Lee, and A. Soon#',
    journal: 'Inorganic Chemistry 57, 6057 (2018)',
    if: '4.7',
    doi: 'https://doi.org/10.1021/acs.inorgchem.8b00578'
  },
  {
    year: '2018',
    title: 'Disentangling the Effects of Inter- and Intra-Octahedral Distortions on the Electronic Structure in Binary Metal Trioxides',
    authors: 'W. J. Jang†, J. Yun†, T. Lee, Y. Lee, and A. Soon#',
    journal: 'The Journal of Physical Chemistry C 122, 3558 (2018)',
    if: '4.5',
    doi: 'https://doi.org/10.1021/acs.jpcc.7b11295'
  },
  {
    year: '2017',
    title: 'Ab Initio Surface Phase Diagram of Sn/Cu(001): Reconciling Experiments with Theory',
    authors: 'J.-H. Lee†, J. Yun†, T. Lee, and A. Soon#',
    journal: 'Physical Review Applied 8, 034010 (2017)',
    if: '4.8',
    doi: 'https://doi.org/10.1103/PhysRevApplied.8.034010'
  },
  {
    year: '2017',
    title: 'Aligning the Band Structures of Polymorphic Molybdenum Oxides and Organic Emitters in Light-Emitting Diodes',
    authors: 'J. Yun†, W. J. Jang†, T. Lee, Y. Lee, and A. Soon#',
    journal: 'Physical Review Applied 7, 024025 (2017)',
    if: '4.8',
    doi: 'https://doi.org/10.1103/PhysRevApplied.7.024025'
  },
  {
    year: '2017',
    title: 'ab initio Thermodynamics of Oxidic Surface Structures under Controlled Growth Conditions',
    authors: 'T. Lee†, Y. Lee, S. Piccinin, and A. Soon#',
    journal: 'The Journal of Physical Chemistry C 121, 2228 (2017)',
    if: '4.5',
    doi: 'https://doi.org/10.1021/acs.jpcc.6b11445'
  },
  {
    year: '2016',
    title: 'Understanding the Advantage of Hexagonal WO3 as an Efficient Photoanode for Solar Water Splitting: A First-Principles Perspective',
    authors: 'T. Lee†, Y. Lee†, W. J. Jang, and A. Soon#',
    journal: 'Journal of Materials Chemistry A 4, 11498 (2016)',
    if: '8.3',
    doi: 'https://doi.org/10.1039/C6TA03659G'
  },
  {
    year: '2016',
    title: 'Unraveling the Intercalation Chemistry of Hexagonal Tungsten Bronze and Its Optical Responses',
    authors: 'Y. Lee†, T. Lee†, W. J. Jang, and A. Soon#',
    journal: 'Chemistry of Materials 28, 4528 (2016)',
    if: '9.4',
    doi: 'https://doi.org/10.1021/acs.chemmater.5b03980'
  },
  {
    year: '2016',
    title: 'In Search of Non-Conventional Surface Oxidic Motifs of Cu on Au(111)',
    authors: 'T. Lee†, Y. Lee, K. Kang, and A. Soon#',
    journal: 'Physical Chemistry Chemical Physics 18, 7349 (2016)',
    if: '4.4',
    doi: 'https://doi.org/10.1039/C5CP07932B'
  },
  {
    year: '2012',
    title: 'The Role of Titanium Nitride Supports for Single-Atom Platinum-Based Catalysts in Fuel-Cell Technology',
    authors: 'R. Q. Zhang†, T. Lee, B.-D. Yu, C. Stampfl, and A. Soon#',
    journal: 'Physical Chemistry Chemical Physics 14, 16552 (2012)',
    if: '3.6',
    doi: 'https://doi.org/10.1039/C2CP41392B'
  },
  {
    year: '2012',
    title: 'Environment-Dependent Nanomorphology of TiN: Influence of Surface Vacancies',
    authors: 'T. Lee†, B. Delley, C. Stampfl, and A. Soon#',
    journal: 'Nanoscale 4, 5183 (2012)',
    if: '5.9',
    doi: 'https://doi.org/10.1039/C2NR31266B'
  }
];

const years = ['All', '2026', '2025', '2024', '2023', '2022', '2021', '2020 & Earlier'];

const formatTitle = (title: string) => {
  const regex = /([A-Z][a-z]?)([0-9x-zδ]+(?:[−-][0-9x-zδ]+)*)(?![a-z])/g;
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

import PageBanner from '../components/PageBanner';

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
    <>
    <PageBanner hideLine />
    <div className="py-10 max-w-7xl mx-auto px-8">
      <header className="mb-10">
        <div className="flex items-center gap-3 mb-6">
          <span className="h-px w-12 bg-primary" />
          <h1 className="font-sans text-[16px] font-bold uppercase tracking-[0.35em] text-primary leading-none pt-0.5">Publications</h1>
        </div>
        <div className="flex flex-col gap-2 mt-4 ml-[60px]">
          <a 
            href="https://scholar.google.com/citations?user=E4QBWfAAAAAJ&hl=en" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-tertiary font-sans text-[10px] font-bold uppercase tracking-[0.15em] hover:text-primary transition-colors border-b border-tertiary/20 pb-0.5 w-fit"
          >
            Google Scholar Profile <ArrowUpRight size={12} />
          </a>
        </div>
      </header>

      {/* Filter */}
      <section className="sticky top-16 z-40 bg-white/80 backdrop-blur-md mb-10 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-8 py-2.5">
          <div className="flex items-center gap-5 overflow-x-auto no-scrollbar">
            <div className="flex gap-1.5">
              {years.map(year => (
                <button
                  key={year}
                  onClick={() => setActiveYear(year)}
                  className={`font-sans text-xs font-bold px-4 py-1.5 rounded-full transition-all tracking-widest uppercase ${
                    activeYear === year 
                      ? 'bg-primary text-white shadow-md' 
                      : 'text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  {year}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-8 mb-4">
        <div className="flex items-center justify-start gap-4 text-slate-500 font-academic text-[12px] whitespace-nowrap">
          <span># Corresponding author</span>
          <span>† First author</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-8 space-y-6">
        <AnimatePresence mode="wait">
          <motion.div 
            key={activeYear}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="space-y-10"
          >
            {Object.keys(groupedPubs).sort((a, b) => b.localeCompare(a)).map(year => (
              <section key={year} className="relative">
                <div className="flex items-baseline gap-4 mb-5">
                  <h2 className="font-sans font-extrabold text-slate-300 select-none text-3xl leading-none">
                    {year} <span className="text-xs font-bold text-slate-200 ml-1">({groupedPubs[year].length})</span>
                  </h2>
                  <div className="h-[1px] grow bg-slate-200" />
                </div>
                
                <div className="space-y-2">
                  {groupedPubs[year].map((pub, i) => (
                    <motion.div 
                      key={i}
                      whileHover={{ x: 5 }}
                      className="group py-3 border-b border-slate-50 hover:bg-slate-50/50 px-5 -mx-5 transition-all"
                    >
                      <h3 className="text-primary font-sans font-extrabold text-sm mb-1 leading-snug group-hover:text-tertiary transition-colors">
                        {formatTitle(pub.title)}
                      </h3>
                      <p className="text-slate-600 font-academic text-[13px] mb-1 leading-relaxed">
                        {pub.authors.split('T. Lee').map((part, index, array) => (
                          <span key={index}>
                            {part}
                            {index < array.length - 1 && <strong className="text-primary">T. Lee</strong>}
                          </span>
                        ))}
                      </p>
                      <div className="flex flex-wrap items-center gap-5">
                        <p className="text-slate-700 font-academic text-[13px] italic">
                          {(() => {
                            const match = pub.journal.match(/^(.*?)(?:\s+)(\d+.*|;\s*accepted.*)$/);
                            if (match) {
                              return (
                                <>
                                  {match[1].endsWith('.') ? match[1] : `${match[1]}.`} <span className="italic">{match[2].trim()}{pub.if ? <>, <strong>IF = {pub.if}</strong></> : ''}</span>
                                </>
                              );
                            }
                            return <span className="italic">{pub.journal}{pub.if ? <>, <strong>IF = {pub.if}</strong></> : ''}</span>;
                          })()}
                        </p>
                        <a 
                          href={pub.doi} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-tertiary text-xs font-bold uppercase tracking-widest hover:underline flex items-center gap-1.5"
                        >
                          <LinkIcon size={12} />
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
    </>
  );
}
