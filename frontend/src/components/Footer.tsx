const Footer = () => {
  return (
    <footer className="bg-slate-950 px-0 pt-14 text-white">

      <div className="mx-auto flex w-[92%] max-w-[1180px] flex-col justify-between gap-8 pb-10 md:flex-row">

        {/* Brand */}
        <div className="max-w-md">

          <div className="flex items-center gap-2.5 text-xl font-extrabold">

            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-700 text-lg">
              S
            </span>

            ShopperAI

          </div>

          <p className="mt-4 text-sm leading-6 text-slate-400">
            An AI-powered web application for predicting
            online shopper purchase intention using machine
            learning.
          </p>

        </div>

        {/* Links */}
        <div className="flex flex-wrap gap-6">

          <a
            href="#home"
            className="text-sm text-slate-400 transition hover:text-white"
          >
            Home
          </a>

          <a
            href="#prediction"
            className="text-sm text-slate-400 transition hover:text-white"
          >
            Prediction
          </a>

          <a
            href="#model"
            className="text-sm text-slate-400 transition hover:text-white"
          >
            Model
          </a>

          <a
            href="#about"
            className="text-sm text-slate-400 transition hover:text-white"
          >
            About
          </a>

        </div>

      </div>

      <div className="border-t border-slate-800 px-5 py-5 text-center text-xs text-slate-500">

        © {new Date().getFullYear()} ShopperAI.
        Machine Learning Project.

      </div>

    </footer>
  );
};

export default Footer;