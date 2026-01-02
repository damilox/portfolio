"use client";
import React from "react";
import Image from "next/image"; 
import { BentoCard } from "../ui/BentoCard";
import { motion } from "framer-motion";
import { User } from "lucide-react";

export function About() {
  return (
    <section className="w-full bg-black relative z-30 py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-white mb-12 text-center md:text-left"
        >
          About Me.
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 min-h-[500px] md:h-[600px]">
          
          {/* 1. THE BIO (Text) */}
          <BentoCard className="p-8 md:p-12 flex flex-col justify-center bg-neutral-900/50 border-neutral-800">
            <div className="mb-6">
              <div className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center mb-4">
                <User className="text-white h-5 w-5" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
                I build software that actually works.
              </h3>
            </div>
            
            <div className="space-y-4 text-neutral-400 text-lg leading-relaxed">
              <p>
                I'm <span className="text-white font-medium">Damilola</span>. I’m a frontend developer who treats code like a craft, not just a task list.
              </p>
              <p>
                For me, a website isn't finished when the code compiles. It's finished when the interaction feels instant, the layout handles real-world content gracefully, and the user knows exactly what to do next without thinking.
              </p>
              <p>
                I specialize in translating complex design concepts into responsive, high-performance applications. No shortcuts, just clean code and solid engineering.
              </p>
            </div>
          </BentoCard>

          {/* 2. THE IMAGE */}
          {/* Added md:h-full to ensure it matches the text block height */}
          <BentoCard className="relative overflow-hidden group min-h-[400px] md:h-full">
            <Image 
                src="/image/dammy.jpg" 
                alt="Damilola Ajetomobi"
                fill
                // ---- THE FIX IS HERE ----
                // Changed 'object-cover' to 'object-cover object-top'
                // This forces the image to align to the top edge.
                className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
            
            <div className="absolute bottom-8 left-8 z-10">
                <p className="text-white font-bold text-2xl tracking-tight">Damilola Ajetomobi</p>
                <div className="flex items-center gap-3 mt-2">
                    <span className="relative flex h-3 w-3">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                    </span>
                    <p className="text-neutral-300 font-mono text-sm">Nigeria</p>
                </div>
            </div>
          </BentoCard>

        </div>
      </div>
    </section>
  );
}