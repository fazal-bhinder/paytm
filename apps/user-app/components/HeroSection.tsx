import React from 'react';

const HeroSection = () => {
  return (
    <div>
    <section className="bg-gradient-to-r from-gray-50 to-gray-100 text-[#6a51a6] py-20 px-6 rounded-3xl shadow-md">
      <div className="max-w-7xl mx-auto flex flex-col items-center md:flex-row">
        <div className="text-center md:text-left md:w-3/4 space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold">
            Simplify Your Payments
          </h1>
          <p className="text-lg md:text-xl text-slate-700">
            Experience seamless transactions with our secure and user-friendly payment platform. Your finances, simplified.
          </p>
          <div className="space-x-4">
            <a
              href="/dashboard"
              className="bg-[#6a51a6] text-white px-6 py-3 rounded-lg font-semibold shadow-lg hover:bg-[#845edc] transition"
            >
              Get Started
            </a>
            <a
              href="/learn-more"
              className="bg-transparent border-2 bg-[#6a51a6] px-6 py-3 rounded-lg font-semibold text-white hover:bg-[#845fd8] transition"
            >
              Learn More
            </a>
          </div>
        </div>

        <div className="md:w-1/4 mt-10 md:mt-0 flex items-center justify-center">
          <div className="h-48 w-48 bg-gradient-to-br from-purple-100 to-purple-800 rounded-full shadow-lg flex items-center justify-center">
            <p className="text-sm font-semibold text-white text-center">
              Secure. Fast. Reliable.
            </p>
          </div>
        </div>
      </div>
    </section>
    </div>
  );
};

export default HeroSection;
