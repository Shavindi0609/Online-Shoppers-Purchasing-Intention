const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur-md">
      <div className="mx-auto flex min-h-[72px] w-[92%] max-w-[1180px] items-center justify-between">

        {/* Logo */}
        <a
          href="#home"
          className="flex items-center gap-2.5 text-xl font-extrabold text-emerald-800"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-800 text-lg font-extrabold text-white">
            S
          </span>

          ShopperAI
        </a>

        {/* Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          <a
            href="#home"
            className="text-sm font-semibold text-slate-600 transition hover:text-emerald-700"
          >
            Home
          </a>

          <a
            href="#prediction"
            className="text-sm font-semibold text-slate-600 transition hover:text-emerald-700"
          >
            Prediction
          </a>

          <a
            href="#model"
            className="text-sm font-semibold text-slate-600 transition hover:text-emerald-700"
          >
            Model
          </a>

          <a
            href="#comparison"
            className="text-sm font-semibold text-slate-600 transition hover:text-emerald-700"
          >
            Comparison
          </a>

          <a
            href="#about"
            className="text-sm font-semibold text-slate-600 transition hover:text-emerald-700"
          >
            About
          </a>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;