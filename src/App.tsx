import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import People from './pages/People';
import Publications from './pages/Publications';
import OpenPositions from './pages/OpenPositions';

// Placeholder for Research Page
const Research = () => (
  <div className="pt-32 pb-24 max-w-7xl mx-auto px-8">
    <h1 className="font-sans font-extrabold text-6xl tracking-tighter text-primary mb-16">Research</h1>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
      <div className="space-y-8">
        <h2 className="font-sans text-3xl font-bold text-primary">Atomistic Modeling</h2>
        <p className="font-academic text-lg text-slate-600 leading-relaxed">
          We use density functional theory (DFT) and molecular dynamics (MD) to study the fundamental properties of materials. Our focus is on understanding the atomic-scale mechanisms that govern material behavior under operational conditions.
        </p>
      </div>
      <div className="space-y-8">
        <h2 className="font-sans text-3xl font-bold text-primary">Machine Learning</h2>
        <p className="font-academic text-lg text-slate-600 leading-relaxed">
          By developing machine learning interatomic potentials (MLIPs), we bridge the gap between the accuracy of first-principles methods and the efficiency of classical force fields, enabling large-scale simulations of complex systems.
        </p>
      </div>
    </div>
  </div>
);

// Placeholder for News Page
const News = () => (
  <div className="pt-32 pb-24 max-w-7xl mx-auto px-8">
    <h1 className="font-sans font-extrabold text-6xl tracking-tighter text-primary mb-16">News</h1>
    <div className="space-y-12">
      {[
        { date: '2024.12.15', title: 'New publication in Journal of Materials Chemistry A on solid-state electrolytes.' },
        { date: '2024.09.01', title: 'Taehun Lee joins DGIST as an Assistant Professor.' },
        { date: '2024.08.20', title: 'Our group website is now live!' },
      ].map((item, i) => (
        <div key={i} className="flex gap-12 items-baseline border-b border-slate-100 pb-8">
          <span className="font-sans text-sm font-bold text-emerald-600 shrink-0">{item.date}</span>
          <h3 className="font-sans text-xl font-bold text-primary">{item.title}</h3>
        </div>
      ))}
    </div>
  </div>
);

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-white">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/research" element={<Research />} />
            <Route path="/people" element={<People />} />
            <Route path="/publications" element={<Publications />} />
            <Route path="/news" element={<News />} />
            <Route path="/open-positions" element={<OpenPositions />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
