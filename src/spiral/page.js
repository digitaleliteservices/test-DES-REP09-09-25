"use client";

const PillDot = () => (
  <span className="relative inline-flex items-center justify-center w-5 h-5 rounded-full bg-white shadow-sm ring-1 ring-black/5">
    <span className="absolute inset-0 rounded-full blur-[6px] opacity-70 bg-[conic-gradient(from_0deg,#06b6d4,#3b82f6,#f59e0b,#06b6d4)]" />
    <span className="relative block w-2.5 h-2.5 rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-amber-400" />
  </span>
);

const Spiral = () => {
  return (
    <section className="relative overflow-hidden bg-[#fafbff] text-slate-900">
      {/* soft background noise / vignette */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(80rem 40rem at 50% -10%, rgba(59,130,246,0.08), transparent 60%), radial-gradient(60rem 30rem at 0% 110%, rgba(6,182,212,0.08), transparent 60%), radial-gradient(60rem 30rem at 100% 110%, rgba(245,158,11,0.08), transparent 60%)",
        }}
      />

      {/* Top badge */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 sm:pt-16">
        <div className="flex justify-center">
          {/* <span className="inline-flex items-center gap-2 rounded-full bg-white text-slate-700/80 shadow-sm ring-1 ring-black/5 px-3 py-1.5 text-xs sm:text-sm">
            <span className="inline-block w-4 h-4 rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-amber-400" />
            Dependable Precision
          </span> */}
        </div>
      </div>

      {/* Headline */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-6 text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
          One practical, holistic Service
        </h1>
        <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
          <span className="bg-gradient-to-r from-sky-500 via-indigo-400 to-amber-500 bg-clip-text text-transparent">
            Exponential daily value
          </span>
        </h2>
        <p className="mt-4 text-slate-600">
          Our teams secure, align, validate and curate exactly what keeps your
          work moving
        </p>
      </div>

      {/* Four pillars */}
      {/* <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              title: "Secures",
              items: ["requirements", "expectations", "context", "facts"],
            },
            {
              title: "Aligns",
              items: ["dependencies", "stakeholders", "processes", "vendors"],
            },
            {
              title: "Validates",
              items: ["completeness", "coherence", "assurances", "details"],
            },
            {
              title: "Curates",
              items: ["deliverables", "resolutions", "initiatives", "stages"],
            },
          ].map((col, idx) => (
            <div key={idx} className="relative">
              <div className="inline-flex items-center gap-2 bg-white rounded-full shadow-sm ring-1 ring-black/5 px-4 py-2">
                <PillDot />
                <span className="font-medium">{col.title}</span>
              </div>

              <div className="relative mt-2 mb-4 h-12 w-[2px] mx-auto">
                <div className="absolute inset-0 rounded-full bg-gradient-to-b from-cyan-400 via-indigo-500 to-amber-400" />
                <div className="absolute inset-0 rounded-full blur-md opacity-50 bg-gradient-to-b from-cyan-400 via-indigo-500 to-amber-400" />
              </div>

              <ul className="space-y-2 pl-2">
                {col.items.map((it, i) => (
                  <li key={i} className="text-slate-700/90">
                    {it}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div> */}

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-10 mb-2">
        <div className="flex justify-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-white text-slate-700/80 shadow-sm ring-1 ring-black/5 px-3 py-1.5 text-xs sm:text-sm">
            <span className="inline-block w-2 h-2 rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-amber-400" />
            Core Values
          </span>
        </div>

        <div className="mt-4 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
          {[
            "Innovation",
            "Integrity",
            "Excellence",
            "Collaboration",
            "Customer-Centricity",
            "Accountability",
            "Adaptability",
          ].map((chip, i) => (
            <span
              key={i}
              className="relative px-4 py-2 rounded-full bg-white text-sm ring-1 ring-black/5 shadow-sm"
            >
              {/* thin gradient hairline around chip */}
              <span
                className="pointer-events-none absolute inset-0 rounded-full"
                style={{
                  boxShadow:
                    "0 0 0 1px rgba(6,182,212,.25), 0 0 0 1px inset rgba(59,130,246,.15)",
                }}
              />
              <span className="bg-gradient-to-r from-cyan-500 via-indigo-500 to-amber-500 bg-clip-text text-transparent font-medium">
                {chip}
              </span>
            </span>
          ))}
        </div>
      </div>

      {/* Flowing rainbow wave */}
      {/* <div className="relative">
        <img
          src="/assets/home_page_spiral.png"
          alt=""
          className="mx-auto w-full max-w-[1400px] select-none pointer-events-none"
          draggable="false"
        />
      </div> */}

      {/* small spacer below */}
      <div className="pb-12" />
    </section>
  );
};

export default Spiral;
