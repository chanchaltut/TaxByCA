import React, { useState } from 'react';
import { FaChevronLeft, FaChevronRight, FaStar } from 'react-icons/fa';
import { TESTIMONIALS } from '../utils/constants';

const TestimonialsSection = () => {
  const [current, setCurrent] = useState(0);
  const total = TESTIMONIALS.length;

  const prev = () => setCurrent((c) => (c - 1 + total) % total);
  const next = () => setCurrent((c) => (c + 1) % total);

  // Show 3 on desktop, 1 on mobile
  const getVisible = () => {
    const result = [];
    for (let i = 0; i < 3; i++) {
      result.push(TESTIMONIALS[(current + i) % total]);
    }
    return result;
  };

  return (
    <section
      className="bg-[#0f172a] py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-8"
      aria-label="Client testimonials"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-12">
          <div className="section-tag">Testimonials</div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-3 mb-4 leading-tight">
            What Our <span className="text-[#2563eb]">Clients Say</span>
          </h2>
          <p className="text-[#94a3b8] text-sm sm:text-base">
            500+ satisfied clients across India trust TaxByCA for all their CA needs.
          </p>
        </div>

        {/* Mobile: Single card */}
        <div className="md:hidden">
          <div className="bg-[#112240] border border-[#1d3557] rounded-2xl p-6">
            <div className="flex gap-1 mb-3">
              {[...Array(TESTIMONIALS[current].rating)].map((_, i) => (
                <FaStar key={i} className="text-[#2563eb] text-sm" />
              ))}
            </div>
            <p className="text-[#94a3b8] text-sm leading-relaxed mb-5 italic">
              "{TESTIMONIALS[current].text}"
            </p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#2563eb] rounded-full flex items-center justify-center text-white font-extrabold text-lg flex-shrink-0">
                {TESTIMONIALS[current].name[0]}
              </div>
              <div>
                <p className="text-white font-semibold text-sm">{TESTIMONIALS[current].name}</p>
                <p className="text-[#94a3b8] text-xs">{TESTIMONIALS[current].role} · {TESTIMONIALS[current].city}</p>
              </div>
            </div>
          </div>
          {/* Mobile nav */}
          <div className="flex items-center justify-center gap-4 mt-5">
            <button onClick={prev} className="w-10 h-10 rounded-full bg-[#112240] border border-[#1d3557] text-white hover:border-[#2563eb] hover:text-[#2563eb] flex items-center justify-center transition-colors" aria-label="Previous">
              <FaChevronLeft />
            </button>
            <span className="text-[#94a3b8] text-sm">{current + 1} / {total}</span>
            <button onClick={next} className="w-10 h-10 rounded-full bg-[#112240] border border-[#1d3557] text-white hover:border-[#2563eb] hover:text-[#2563eb] flex items-center justify-center transition-colors" aria-label="Next">
              <FaChevronRight />
            </button>
          </div>
        </div>

        {/* Desktop: 3 cards */}
        <div className="hidden md:block">
          <div className="grid grid-cols-3 gap-6">
            {getVisible().map((testimonial, i) => (
              <div
                key={`${testimonial.id}-${i}`}
                className={`bg-[#112240] border rounded-2xl p-6 transition-all duration-300 ${
                  i === 0 ? 'border-[#2563eb]/40 shadow-lg' : 'border-[#1d3557]'
                }`}
              >
                <div className="flex gap-1 mb-3">
                  {[...Array(testimonial.rating)].map((_, j) => (
                    <FaStar key={j} className="text-[#2563eb] text-sm" />
                  ))}
                </div>
                <p className="text-[#94a3b8] text-sm leading-relaxed mb-5 italic">
                  "{testimonial.text}"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#2563eb] rounded-full flex items-center justify-center text-white font-extrabold text-lg flex-shrink-0">
                    {testimonial.name[0]}
                  </div>
                  <div>
                    <p className="text-white font-semibold text-sm">{testimonial.name}</p>
                    <p className="text-[#94a3b8] text-xs">{testimonial.role} · {testimonial.city}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* Desktop nav */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button onClick={prev} className="w-11 h-11 rounded-full bg-[#112240] border border-[#1d3557] text-white hover:border-[#2563eb] hover:text-[#2563eb] flex items-center justify-center transition-colors" aria-label="Previous testimonials">
              <FaChevronLeft />
            </button>
            <div className="flex gap-2">
              {TESTIMONIALS.map((_, i) => (
                <button key={i} onClick={() => setCurrent(i)} className={`h-2 rounded-full transition-all duration-300 ${i === current ? 'bg-[#2563eb] w-8' : 'bg-[#1d3557] w-2 hover:bg-[#94a3b8]'}`} aria-label={`Go to testimonial ${i + 1}`} />
              ))}
            </div>
            <button onClick={next} className="w-11 h-11 rounded-full bg-[#112240] border border-[#1d3557] text-white hover:border-[#2563eb] hover:text-[#2563eb] flex items-center justify-center transition-colors" aria-label="Next testimonials">
              <FaChevronRight />
            </button>
          </div>
        </div>

        {/* Rating summary */}
        <div className="mt-10 text-center">
          <div className="inline-flex items-center gap-3 bg-[#112240] border border-[#1d3557] rounded-full px-6 py-3">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} className="text-[#2563eb] text-sm" />
              ))}
            </div>
            <span className="text-white font-bold">4.9/5</span>
            <span className="text-[#94a3b8] text-sm">from 10000+ clients</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
