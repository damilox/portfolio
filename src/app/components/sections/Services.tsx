"use client"
import React from 'react';

const services = [
  {
    id: 1,
    title: "Custom Web App Development",
    description: "I build scalable, high-performance web applications using Next.js and TypeScript. From complex dashboards to interactive SaaS platforms, I turn code into powerful digital products.",
    tags: ["React", "Next.js", "TypeScript"],
    colSpan: "md:col-span-2", // This makes it wide
    gradient: "from-blue-500/20 to-cyan-500/20",
    icon: (
      <svg className="w-8 h-8 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    )
  },
  {
    id: 2,
    title: "WordPress & Landing Pages",
    description: "Need a site fast? I design high-converting landing pages and business websites using WordPress. Perfect for marketing campaigns and corporate profiles.",
    tags: ["WordPress", "WPBakery", "Elementor"],
    colSpan: "md:col-span-1",
    gradient: "from-purple-500/20 to-pink-500/20",
    icon: (
      <svg className="w-8 h-8 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    )
  },
  {
    id: 3,
    title: "MVP & Product Prototyping",
    description: "I help startups validate ideas by building Minimum Viable Products (MVPs) quickly. I take your concept from a rough sketch to a functional product ready for investors.",
    tags: ["MVP Strategy", "Rapid Prototyping"],
    colSpan: "md:col-span-1",
    gradient: "from-orange-500/20 to-red-500/20",
    icon: (
      <svg className="w-8 h-8 text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    )
  },
  {
    id: 4,
    title: "Business Site Optimization",
    description: "I don't just build; I improve. I optimize existing sites for speed, SEO, and mobile responsiveness to ensure your business reaches its maximum audience.",
    tags: ["SEO", "Performance", "Accessibility"],
    colSpan: "md:col-span-2",
    gradient: "from-green-500/20 to-emerald-500/20",
    icon: (
      <svg className="w-8 h-8 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    )
  }
];

const Services = () => {
  return (
    <section className="py-24 px-4 bg-black text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-neutral-900 via-black to-black opacity-50 -z-10" />

      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500 mb-4">
            Services & Expertise
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            From pixel-perfect frontends to complete business solutions. Here is how I can help you build your next big idea.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.id}
              className={`group relative p-8 rounded-3xl border border-neutral-800 bg-neutral-900/50 hover:bg-neutral-900/80 transition-all duration-300 overflow-hidden ${service.colSpan}`}
            >
              {/* Hover Gradient Glow */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl`}
              />
              
              <div className="relative z-10">
                {/* Icon Header */}
                <div className="mb-6 inline-flex p-3 rounded-xl bg-neutral-800/50 group-hover:scale-110 transition-transform duration-300 border border-neutral-700">
                  {service.icon}
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 transition-all">
                  {service.title}
                </h3>
                <p className="text-gray-400 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mt-auto">
                  {service.tags.map((tag, index) => (
                    <span 
                      key={index} 
                      className="text-xs font-medium px-3 py-1 rounded-full bg-neutral-800 border border-neutral-700 text-gray-300 group-hover:border-neutral-500 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;