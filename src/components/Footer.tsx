import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-slate-100 py-10">
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12">
          <div className="space-y-4">
            <div className="space-y-1">
              <div className="font-sans font-extrabold text-xs uppercase tracking-tighter text-primary">
                Data-Driven Materials Modeling
              </div>
              <p className="font-academic text-[11px] text-slate-700 leading-relaxed uppercase tracking-tight">
                Energy and Science Engineering Department
              </p>
            </div>
            <p className="font-sans text-[10px] text-slate-600 uppercase tracking-[0.2em] font-medium">
              © 2026. All rights reserved.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-16">
            <div className="space-y-2">
              <h5 className="font-sans font-bold text-[10px] uppercase tracking-widest text-slate-600">Office</h5>
              <p className="font-academic text-[11px] text-slate-700">
                E6-414
              </p>
            </div>
            <div className="space-y-2">
              <h5 className="font-sans font-bold text-[10px] uppercase tracking-widest text-slate-600">Location</h5>
              <address className="not-italic font-academic text-[11px] text-slate-700 leading-relaxed">
                333, Techno Jungang-daero,<br />
                Daegu, South Korea
              </address>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
