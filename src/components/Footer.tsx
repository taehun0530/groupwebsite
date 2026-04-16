import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-slate-200 py-16">
      <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-12 gap-12">
        <div className="md:col-span-5 space-y-6">
          <div className="font-sans font-extrabold text-xl tracking-tighter text-primary">
            Lee Group @ DGIST
          </div>
          <p className="font-academic text-base leading-relaxed text-slate-500 max-w-md">
            Operando Energy Materials & Surface Science Research Group at the Daegu Gyeongbuk Institute of Science and Technology.
          </p>
          <p className="font-sans text-xs text-slate-400 uppercase tracking-widest">
            © 2024 Lee Group at DGIST. All rights reserved.
          </p>
        </div>

        <div className="md:col-span-3 space-y-6">
          <h5 className="font-sans font-bold text-xs uppercase tracking-widest text-primary">Resources</h5>
          <nav className="flex flex-col gap-3">
            <Link to="#" className="font-academic text-slate-500 hover:text-primary transition-colors">Contact</Link>
            <Link to="#" className="font-academic text-slate-500 hover:text-primary transition-colors">Affiliation</Link>
            <Link to="#" className="font-academic text-slate-500 hover:text-primary transition-colors">Privacy Policy</Link>
          </nav>
        </div>

        <div className="md:col-span-4 space-y-6">
          <h5 className="font-sans font-bold text-xs uppercase tracking-widest text-primary">Location</h5>
          <address className="not-italic font-academic text-slate-500 leading-relaxed">
            333, Techno Jungang-daero,<br />
            Hyeonpung-eup, Dalseong-gun,<br />
            Daegu, South Korea
          </address>
        </div>
      </div>
    </footer>
  );
}
