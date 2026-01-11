import { Link } from "react-router-dom";
import { useState } from "react";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        
        {/* Brand */}
        <Link to="/" className="text-xl font-extrabold text-slate-900">
          Local<span className="text-yellow-500">Stay</span>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-8 text-slate-700 font-medium">
          <Link to="/" className="hover:text-slate-900">Home</Link>
          <Link to="/about" className="hover:text-slate-900">About</Link>
          <Link to="/contact" className="hover:text-slate-900">Contact</Link>

          <Link
            to="/login"
            className="bg-yellow-400 text-slate-900 px-5 py-2 rounded-lg font-semibold hover:bg-yellow-300 transition"
          >
            Login
          </Link>
        </nav>

        {/* Mobile Button */}
        <button
          className="md:hidden text-2xl text-slate-900"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t px-4 py-4 flex flex-col gap-4 font-medium">
          <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/about" onClick={() => setIsOpen(false)}>About</Link>
          <Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link>

          <Link
            to="/login"
            className="bg-yellow-400 text-slate-900 text-center py-2 rounded-lg font-semibold"
            onClick={() => setIsOpen(false)}
          >
            Login
          </Link>
        </div>
      )}
    </header>
  );
}

export default Header;
