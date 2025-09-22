"use client";

const Hero = () => {
  return (
    <div className="text-center max-w-2xl px-4">
      {/* Tagline */}
      <p className="text-lg font-medium text-indigo-400 tracking-wide">
        Your All In One Digital Partner
      </p>

      {/* Main heading */}
      <h1 className="mt-4 text-4xl sm:text-5xl font-extrabold leading-tight bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
        Innovation Design and Growth
      </h1>

      {/* Sub-heading */}
      <p className="mt-6 text-black-300 text-lg">
        Web Development • Graphic Design • Digital Marketing
      </p>
    </div>
  );
};

export default Hero;
