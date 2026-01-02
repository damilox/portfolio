"use client";
import React from "react";
import { motion } from "framer-motion";
// Import icons
import { 
  SiNextdotjs, SiReact, SiTypescript, SiJavascript, SiTailwindcss, 
  SiHtml5, SiCss3, SiShadcnui, SiWordpress, SiGithub, SiFramer, SiFigma 
} from "react-icons/si";

// 1. DATA CONFIGURATION
const skills = [
  { name: "Next.js", percent: 80, icon: SiNextdotjs, color: "text-white" },
  { name: "React", percent: 85, icon: SiReact, color: "text-[#61DAFB]" },
  { name: "TypeScript", percent: 70, icon: SiTypescript, color: "text-[#3178C6]" },
  { name: "JavaScript", percent: 60, icon: SiJavascript, color: "text-[#F7DF1E]" },
  { name: "Tailwind", percent: 97, icon: SiTailwindcss, color: "text-[#06B6D4]" },
  { name: "HTML5", percent: 99, icon: SiHtml5, color: "text-[#E34F26]" },
  { name: "CSS3", percent: 99, icon: SiCss3, color: "text-[#1572B6]" },
  { name: "Shadcn UI", percent: 90, icon: SiShadcnui, color: "text-white" },
  { name: "WordPress", percent: 95, icon: SiWordpress, color: "text-[#21759B]" },
  { name: "GitHub", percent: 92, icon: SiGithub, color: "text-white" },
  { name: "Framer Motion", percent: 88, icon: SiFramer, color: "text-white" },
  { name: "Figma", percent: 60, icon: SiFigma, color: "text-[#F24E1E]" },
];

export function TechStack() {
  return (
    <section className="w-full bg-black py-20 px-4 relative z-30">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-bold text-white mb-12 text-center md:text-left"
        >
          My Tech Stack.
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {skills.map((skill, index) => (
            <SkillCard key={skill.name} skill={skill} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

// 2. SKILL CARD COMPONENT (Fixed Color Logic)
function SkillCard({ skill, index }: { skill: any; index: number }) {
  const IconComponent = skill.icon;
  
  // FAIL-SAFE COLOR LOGIC
  // This ensures the variable 'barColor' is never empty.
  let barColor = "#ffffff"; // Default to white if all else fails
  
  if (skill.color) {
     if (skill.color.includes("[")) {
        // Extract hex code from "text-[#123456]"
        const match = skill.color.match(/\[(.*?)\]/);
        if (match) barColor = match[1];
     } else {
        // Convert "text-blue-500" or "text-white" to valid CSS if possible
        // For "text-white", we just strip "text-" to get "white"
        barColor = skill.color.replace("text-", "");
     }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
      className="flex items-center gap-3 p-3 bg-neutral-900/50 border border-neutral-800 rounded-lg hover:border-neutral-700 transition-colors group"
    >
      {/* Icon Area */}
      <div className="flex-shrink-0 w-8 h-8 relative rounded bg-white/5 flex items-center justify-center">
        {/* We use inline style to force the color */}
        <IconComponent className="w-5 h-5" style={{ color: barColor }} />
      </div>

      {/* Text & Bar Area */}
      <div className="flex-grow min-w-0">
        <div className="flex justify-between items-center mb-1.5">
          <h3 className="text-sm font-medium text-neutral-200 truncate pr-2">
            {skill.name}
          </h3>
          <span className="text-xs font-mono text-neutral-500">
            {skill.percent}%
          </span>
        </div>

        {/* PROGRESS BAR */}
        <div className="h-1.5 w-full bg-neutral-800 rounded-full overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: `${skill.percent}%` }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            className="h-full rounded-full opacity-80"
            // We apply the color directly to style. 
            // If the extraction failed, it uses the default white.
            style={{ backgroundColor: barColor }} 
          />
        </div>
      </div>
    </motion.div>
  );
}