function Footer() {
  return (
    <footer className="bg-slate-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 py-8 text-center">

     
        <h2 className="text-lg font-bold text-white">
          Local<span className="text-yellow-400">Stay</span>
        </h2>

      
        <p className="text-sm mt-2 text-gray-400">
          Stay local. Travel better.
        </p>
       
        <div className="border-t border-gray-700 my-4" />

     
        <p className="text-sm">
          © {new Date().getFullYear()} LocalStay. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
