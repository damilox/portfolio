"use client";
import React from "react";
import { motion } from "framer-motion";
import { SiGithub } from "react-icons/si";
import { FiExternalLink } from "react-icons/fi";

// 1. UPDATED PROJECTS DATA (5 Projects Total)
const projects = [
  {
    title: "Alpha Tech",
    description: "The official digital platform for a technology academy. Built to showcase courses, student success stories, and facilitate enrollment with a modern, responsive interface.",
    tags: ["React", "Tailwind CSS", "Framer Motion", "Vite"],
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=2070&auto=format&fit=crop", 
    github: "https://github.com/damilox/alpha-tech-school", 
    live: "https://alphatech.team", 
  },
  {
    title: "StockUp Store",
    description: "A specialized e-commerce platform for university students to order market-fresh foodstuffs directly to their hostels. Features a dynamic shopping list and automated WhatsApp order routing.",
    tags: ["Next.js 16", "Tailwind v4", "Zustand", "WhatsApp API"],
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop",
    github: "https://github.com/damilox/stock-up-store",
    live: "https://stockup-store.vercel.app/"
  },
  // 3. REFRAME DIGITAL (Added here as requested)
  {
    title: "Reframe Digital",
    description: "A high-performance agency website featuring complex scroll animations, a custom lead conversion engine, and a 360° brand showcase system. Built to convert traffic into high-ticket clients.",
    tags: ["Next.js", "Framer Motion", "TypeScript", "Formspree"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop", 
    github: "https://github.com/damilox/reframe-agency",
    live: "https://reframe-agency.vercel.app",
  },
  {
    title: "KidsTechBase",
    description: "A comprehensive educational platform designed to teach children coding and AI. Built with WordPress, it features course listings, parent testimonials, and a class scheduling system optimized for conversion.",
    tags: ["WordPress", "CMS Development", "PHP", "SEO"],
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2670&auto=format&fit=crop", 
    live: "https://kidstechbase.net/",
  },
  {
    title: "DaatHomes",
    description: "A premium real estate marketplace for property discovery and investment. Features include advanced property filtering, an 'Agro-Banking' investment portal, and a responsive listing management system powered by Estatik.",
    tags: ["WordPress", "Estatik Engine", "CSS3", "MySQL"],
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053&auto=format&fit=crop", 
    live: "https://daathomes.com/",
  },
];

export function Projects() {
  return (
    <section className="w-full bg-neutral-950 py-24 px-4 relative z-30" id="projects">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center md:text-left"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Featured <span className="text-neutral-500">Works</span>
          </h2>
          <p className="text-neutral-400 max-w-xl text-lg">
            A selection of projects where I've turned complex problems into clean code.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

// 2. CARD COMPONENT
function ProjectCard({ project, index }: { project: any; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="group relative flex flex-col bg-neutral-900 border border-neutral-800 rounded-2xl overflow-hidden hover:border-neutral-700 transition-colors"
    >
      {/* Image Section */}
      <div className="relative h-48 overflow-hidden">
        <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-all duration-500 z-10" />
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out"
        />
      </div>

      {/* Content Section */}
      <div className="flex flex-col flex-grow p-6">
        <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
          {project.title}
        </h3>
        <p className="text-neutral-400 text-sm mb-6 flex-grow leading-relaxed">
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map((tag: string) => (
            <span 
              key={tag} 
              className="px-3 py-1 text-xs font-medium text-neutral-300 bg-neutral-800 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex items-center gap-4 mt-auto">
          {/* Only show GitHub button if a link exists */}
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-white hover:text-blue-400 transition-colors"
            >
              <SiGithub className="w-5 h-5" /> Code
            </a>
          )}
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-white hover:text-green-400 transition-colors"
          >
            <FiExternalLink className="w-5 h-5" /> Live Demo
          </a>
        </div>
      </div>
    </motion.div>
  );
}