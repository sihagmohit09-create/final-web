import React from 'react';
import { BookOpen, Cpu, Leaf, Globe2, FileCheck2, ArrowUpRight } from 'lucide-react';
import { researchPublication } from '../data/portfolioData';

export default function Research() {
  return (
    <section id="research" className="py-20 md:py-28 bg-white text-[#101827] border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-50 text-blue-700 text-xs font-bold tracking-wide uppercase mb-3">
            Academic Research
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#101827]">
            Research & Published Frameworks
          </h2>
          <p className="mt-4 text-lg text-slate-600 leading-relaxed">
            Exploring intersections between computational technology, smart sensor networks, and sustainable urban bioeconomic models.
          </p>
        </div>

        {/* Featured Research Publication Card */}
        <div className="bg-gradient-to-br from-[#101827] to-[#1E293B] text-white rounded-3xl p-8 sm:p-10 lg:p-12 shadow-xl border border-slate-800 text-left relative overflow-hidden">
          {/* Subtle background graphics */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Content (8 Cols) */}
            <div className="lg:col-span-8 space-y-6">
              <div className="flex flex-wrap items-center gap-3">
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-blue-500/20 text-blue-300 border border-blue-500/30 flex items-center gap-1.5">
                  <Leaf className="w-3.5 h-3.5 text-emerald-400" />
                  Sustainable Urban Tech & Bioeconomy
                </span>
                <span className="text-xs text-slate-400 font-medium">
                  Conceptual System Framework
                </span>
              </div>

              <div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight leading-snug">
                  {researchPublication.title}
                </h3>
                <p className="text-sm font-semibold text-blue-400 mt-2">
                  Role: {researchPublication.role}
                </p>
              </div>

              <p className="text-slate-300 text-base leading-relaxed">
                {researchPublication.summary}
              </p>

              {/* Framework pillars */}
              <div className="pt-2">
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">
                  Key Technical & Strategic Pillars:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {researchPublication.keyContributions.map((contrib, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-2.5 bg-slate-800/60 border border-slate-700/70 p-3 rounded-xl text-xs sm:text-sm text-slate-200"
                    >
                      <FileCheck2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                      <span>{contrib}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Side Summary Panel (4 Cols) */}
            <div className="lg:col-span-4 bg-[#151F32]/90 border border-slate-700/80 rounded-2xl p-6 space-y-5">
              <div className="flex items-center gap-3 pb-4 border-b border-slate-700">
                <div className="w-10 h-10 rounded-xl bg-blue-500/10 text-blue-400 flex items-center justify-center">
                  <Cpu className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-white text-sm">
                    Technology Stack
                  </h4>
                  <p className="text-xs text-slate-400">
                    AI, IoT Sensors & Analytics
                  </p>
                </div>
              </div>

              <div className="space-y-3 text-xs text-slate-300">
                <div>
                  <div className="text-slate-400 font-medium">Domain Impact</div>
                  <div className="font-semibold text-white mt-0.5">
                    Real-time ecological monitoring & resource governance
                  </div>
                </div>

                <div>
                  <div className="text-slate-400 font-medium">Application</div>
                  <div className="font-semibold text-white mt-0.5">
                    Municipal smart city policy & circular bioeconomy frameworks
                  </div>
                </div>
              </div>

              <div className="pt-2 border-t border-slate-700">
                <a
                  href="#contact"
                  className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs font-bold bg-[#3B82F6] hover:bg-blue-600 text-white transition-colors"
                >
                  <span>Request Full Research Abstract</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
