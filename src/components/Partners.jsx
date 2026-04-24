import React from 'react';

const Partners = () => {
  return (
    <section className="py-16 bg-[#163020] border-y border-[#EEF0E5]/5">
      <div className="max-w-7xl mx-auto px-4">
        <p className="text-center text-[#EEF0E5]/40 text-sm uppercase tracking-[0.3em] mb-10">Trusted by Global Brands</p>
        <div className="flex flex-wrap justify-center gap-12 opacity-50 grayscale hover:grayscale-0 transition-all">
          {/* Sếp thay link logo thực tế vào đây */}
          <div className="h-8 w-32 bg-[#EEF0E5]/20 animate-pulse"></div>
          <div className="h-8 w-32 bg-[#EEF0E5]/20 animate-pulse"></div>
          <div className="h-8 w-32 bg-[#EEF0E5]/20 animate-pulse"></div>
          <div className="h-8 w-32 bg-[#EEF0E5]/20 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Partners;
