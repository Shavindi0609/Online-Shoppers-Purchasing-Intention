const HeroSection = () => {
  return (
    <section
      id="home"
      className="overflow-hidden bg-gradient-to-br from-emerald-900 via-emerald-700 to-emerald-500 px-0 py-20 text-white md:py-24"
    >
      <div className="mx-auto w-[92%] max-w-[1180px]">

        {/* Badge */}
        <span className="mb-6 inline-block rounded-full border border-white/30 bg-white/10 px-4 py-2 text-xs font-semibold backdrop-blur-sm">
          AI-Powered Purchase Prediction
        </span>

        {/* Heading */}
        <h1 className="max-w-4xl text-5xl font-extrabold leading-[1.05] tracking-tight md:text-7xl">
          Understand Your
          <span className="text-emerald-200">
            {" "}Online Shoppers
          </span>
        </h1>

        {/* Description */}
        <p className="mt-6 max-w-2xl text-base leading-7 text-emerald-50/90 md:text-lg">
          Predict whether an online visitor is likely to make
          a purchase using machine learning and real-time
          behavioral data.
        </p>

        {/* Buttons */}
        <div className="mt-8 flex flex-wrap gap-3">

          <a
            href="#prediction"
            className="rounded-lg bg-white px-6 py-3 text-sm font-bold text-emerald-800 transition hover:-translate-y-0.5 hover:bg-emerald-50"
          >
            Start Prediction
          </a>

          <a
            href="#model"
            className="rounded-lg border border-white/30 bg-white/10 px-6 py-3 text-sm font-bold text-white transition hover:bg-white/20"
          >
            Explore Model
          </a>

        </div>

        {/* Stats */}
        <div className="mt-16 grid max-w-3xl grid-cols-1 border-t border-white/20 pt-7 sm:grid-cols-3">

          <div className="py-3 sm:pr-6">
            <h3 className="text-3xl font-bold">
              12K+
            </h3>

            <p className="mt-1 text-xs text-emerald-100">
              Original Records
            </p>
          </div>

          <div className="border-white/20 py-3 sm:border-l sm:px-6">
            <h3 className="text-3xl font-bold">
              22
            </h3>

            <p className="mt-1 text-xs text-emerald-100">
              Model Input Features
            </p>
          </div>

          <div className="border-white/20 py-3 sm:border-l sm:pl-6">
            <h3 className="text-3xl font-bold">
              90.17%
            </h3>

            <p className="mt-1 text-xs text-emerald-100">
              ROC-AUC Score
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};

export default HeroSection;