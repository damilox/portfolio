"use client";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

// EXACTLY 5 REVIEWS
const reviews = [
  {
    name: "Michael Adebayo",
    role: "Founder, TechStart",
    text: "Damilola is a rare find. He didn't just write code; he improved our entire UX. The site loads instantly now."
  },
  {
    name: "Sarah Jenkins",
    role: "Product Manager, CreativeFlow",
    text: "Delivered 2 days ahead of schedule. His understanding of complex React animations is top-tier."
  },
  {
    name: "David Okon",
    role: "CTO, Fintech Solutions",
    text: "Cleanest codebase I've seen in a long time. Highly recommended for any scalable Next.js project."
  },
  {
    name: "Jessica Lee",
    role: "Design Lead, Studio X",
    text: "Finally, a developer who cares about design details! He nailed the pixel-perfect implementation."
  },
  {
    name: "Emmanuel T.",
    role: "E-commerce Client",
    text: "He built our store from scratch and sales increased by 40% due to the smooth checkout flow."
  }
];

export default function TestimonialMarquee() {
  return (
    <div className="py-24 bg-neutral-950 overflow-hidden border-y border-white/5 relative z-20">
      
      {/* Header */}
      <div className="text-center mb-16">
        <p className="text-indigo-500 font-mono text-xs uppercase tracking-widest mb-3">Testimonials</p>
        <h3 className="text-3xl md:text-4xl font-bold text-white">Trusted by Founders & Teams</h3>
      </div>

      {/* Gradient Fades for Smooth Edges */}
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-neutral-950 to-transparent z-30 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-neutral-950 to-transparent z-30 pointer-events-none" />

      {/* Marquee Track */}
      <div className="flex">
        <motion.div 
          initial={{ x: 0 }}
          animate={{ x: "-50%" }} 
          transition={{ 
            duration: 30, // Adjusted speed for 5 items
            repeat: Infinity, 
            ease: "linear" 
          }}
          className="flex gap-8 pr-8"
        >
          {/* We duplicate the array to create the infinite loop */}
          {[...reviews, ...reviews].map((review, i) => (
            <div 
              key={i} 
              className="w-[350px] md:w-[400px] flex-shrink-0 bg-[#0A0A0A] border border-white/10 p-8 rounded-3xl hover:border-indigo-500/30 transition-colors group"
            >
              {/* 5 Stars */}
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className="fill-indigo-500 text-indigo-500" />
                ))}
              </div>
              
              {/* The Review Text */}
              <p className="text-gray-300 text-base leading-relaxed mb-8 italic relative z-10">
                "{review.text}"
              </p>

              {/* The Person */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white font-bold text-lg border border-white/10">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <p className="text-white text-base font-bold">{review.name}</p>
                  <p className="text-indigo-400 text-xs uppercase tracking-widest font-bold">{review.role}</p>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}