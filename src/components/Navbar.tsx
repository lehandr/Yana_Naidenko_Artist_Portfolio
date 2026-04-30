import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';

export default function Navbar() {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 w-full flex justify-between items-center px-8 md:px-12 py-8 md:py-10 bg-white z-50 shadow-[0_40px_40px_rgba(0,0,0,0.04)]">
        <div className="flex items-center gap-6">
          <span 
            className="material-symbols-outlined text-zinc-950 text-2xl cursor-pointer md:hidden select-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? 'close' : 'menu'}
          </span>
          <h1 className="tracking-tighter uppercase text-zinc-950 font-display text-xl z-50">ARTIST PORTFOLIO</h1>
        </div>
        
        <nav className="hidden md:flex gap-12">
          <Link to="/" className={location.pathname === "/" ? "text-zinc-950 border-b border-zinc-950 pb-1 font-sans text-[10px] font-light tracking-[0.2rem] uppercase transition-colors duration-300" : "text-zinc-500 font-sans text-[10px] font-light tracking-[0.2rem] uppercase hover:text-zinc-950 transition-colors duration-300"}>WORKS</Link>
          <Link to="/about" className={location.pathname === "/about" ? "text-zinc-950 border-b border-zinc-950 pb-1 font-sans text-[10px] font-light tracking-[0.2rem] uppercase transition-colors duration-300" : "text-zinc-500 font-sans text-[10px] font-light tracking-[0.2rem] uppercase hover:text-zinc-950 transition-colors duration-300"}>ABOUT</Link>
          <Link to="/contact" className={location.pathname === "/contact" ? "text-zinc-950 border-b border-zinc-950 pb-1 font-sans text-[10px] font-light tracking-[0.2rem] uppercase transition-colors duration-300" : "text-zinc-500 font-sans text-[10px] font-light tracking-[0.2rem] uppercase hover:text-zinc-950 transition-colors duration-300"}>CONTACT</Link>
        </nav>
      </header>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed top-[88px] left-0 z-40 bg-zinc-950 p-8 md:hidden flex flex-col w-64 border-t border-zinc-800 shadow-2xl">
          <nav className="flex flex-col gap-10 mt-2">
            <Link onClick={() => setIsMobileMenuOpen(false)} to="/" className={location.pathname === "/" ? "text-zinc-50 border-b border-zinc-50 pb-1 font-sans text-xs font-light tracking-[0.2rem] uppercase w-fit transition-colors duration-300" : "text-zinc-400 font-sans text-xs font-light tracking-[0.2rem] uppercase hover:text-zinc-50 transition-colors duration-300"}>WORKS</Link>
            <Link onClick={() => setIsMobileMenuOpen(false)} to="/about" className={location.pathname === "/about" ? "text-zinc-50 border-b border-zinc-50 pb-1 font-sans text-xs font-light tracking-[0.2rem] uppercase w-fit transition-colors duration-300" : "text-zinc-400 font-sans text-xs font-light tracking-[0.2rem] uppercase hover:text-zinc-50 transition-colors duration-300"}>ABOUT</Link>
            <Link onClick={() => setIsMobileMenuOpen(false)} to="/contact" className={location.pathname === "/contact" ? "text-zinc-50 border-b border-zinc-50 pb-1 font-sans text-xs font-light tracking-[0.2rem] uppercase w-fit transition-colors duration-300" : "text-zinc-400 font-sans text-xs font-light tracking-[0.2rem] uppercase hover:text-zinc-50 transition-colors duration-300"}>CONTACT</Link>
          </nav>
        </div>
      )}
    </>
  );
}
