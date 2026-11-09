import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  BarChart3, 
  TrendingUp, 
  Truck, 
  Layers, 
  PieChart, 
  Megaphone, 
  Briefcase, 
  CheckCircle2, 
  Cpu, 
  Target,
  ArrowRight,
  Sparkles,
  Zap,
  Code2
} from 'lucide-react';
import { aboutMe, personalInfo } from '../data/portfolioData';

export default function About() {
  const [activeLens, setActiveLens] = useState('synergy'); // 'synergy', 'tech', 'business'

  const interestIcons = [
    { title: "Business analytics", icon: BarChart3, desc: "Descriptive, predictive and dynamic KPI dashboard analytics using Excel & Power BI.", tag: "Analytics" },
    { title: "Marketing strategy", icon: TrendingUp, desc: "Data-backed market positioning, segmentation, and go-to-market strategies.", tag: "Strategy" },
    { title: "Supply chain management", icon: Truck, desc: "Procure-to-Pay cycle, logistics coordination, and operational resilience.", tag: "Operations" },
    { title: "Procurement and vendor management", icon: Layers, desc: "Supplier evaluation, quotation comparison, and SAP PR/PO processing.", tag: "Procurement" },
    { title: "Data visualisation", icon: PieChart, desc: "Transforming intricate datasets into actionable executive visual summaries.", tag: "BI" },
    { title: "Digital marketing", icon: Megaphone, desc: "Performance marketing, digital campaigns, and audience conversion insights.", tag: "Marketing" },
    { title: "Business development", icon: Briefcase, desc: "Identifying enterprise growth opportunities, client outreach, and partnerships.", tag: "Growth" },
    { title: "Operational excellence", icon: CheckCircle2, desc: "DMAIC methodology, Lean Six Sigma practices, and continuous waste reduction.", tag: "Quality" },
  ];

  return (
    <section id="about" className="py-20 md:py-28 bg-[#FFFFFF] text-[#101827] border-b border-slate-200 selection:bg-[#3B82F6] selection:text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14 text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-50 text-blue-700 text-xs font-bold tracking-wide uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5 text-blue-600" />
            <span>Executive Profile</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#101827]">
            Where Computational Logic Powers Strategic Decisions
          </h2>
          <p className="mt-4 text-lg text-slate-600 leading-relaxed">
            Bridging technical depth from Computer Science Engineering with executive management in Marketing and Operations to solve complex corporate challenges.
          </p>
        </div>

        {/* Interactive Lens Switcher */}
        <div className="flex flex-wrap items-center gap-2 mb-10 pb-2">
          <span className="text-xs font-bold text-slate-400 uppercase tracking-wider mr-2">
            View Profile Lens:
          </span>
          <button
            onClick={() => setActiveLens('synergy')}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
              activeLens === 'synergy'
                ? 'bg-[#101827] text-white shadow-md'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            <Zap className="w-4 h-4 text-blue-400" />
            <span>Dual Synergy (Tech + MBA)</span>
          </button>

          <button
            onClick={() => setActiveLens('business')}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
              activeLens === 'business'
                ? 'bg-blue-600 text-white shadow-md'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            <TrendingUp className="w-4 h-4" />
            <span>MBA Management & Operations</span>
          </button>

          <button
            onClick={() => setActiveLens('tech')}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
              activeLens === 'tech'
                ? 'bg-emerald-700 text-white shadow-md'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            <Code2 className="w-4 h-4" />
            <span>B.Tech Computer Science Core</span>
          </button>
        </div>

        {/* Dynamic Lens Content Block */}
        <AnimatePresence mode="wait">
          {activeLens === 'synergy' && (
            <motion.div
              key="synergy"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-16"
            >
              <div className="lg:col-span-7 bg-slate-50 border border-slate-200 rounded-3xl p-6 sm:p-8 text-left space-y-4 flex flex-col justify-between">
                <div>
                  <div className="inline-block px-3 py-1 bg-blue-100 text-blue-800 rounded-lg text-xs font-bold uppercase mb-3">
                    The Competitive Edge
                  </div>
                  <h3 className="text-2xl font-bold text-[#101827]">
                    Translating Raw Data Pipelines into P&L Growth
                  </h3>
                  <div className="space-y-3 mt-4 text-slate-700 text-base leading-relaxed">
                    {aboutMe.narrative.map((p, idx) => (
                      <p key={idx}>{p}</p>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-200 flex flex-wrap gap-4 text-xs font-semibold text-slate-500">
                  <span className="flex items-center gap-1.5 text-blue-700">
                    <CheckCircle2 className="w-4 h-4" /> IIM Sirmaur Mentorship
                  </span>
                  <span className="flex items-center gap-1.5 text-emerald-700">
                    <CheckCircle2 className="w-4 h-4" /> KPMG Six Sigma Certified
                  </span>
                  <span className="flex items-center gap-1.5 text-slate-800">
                    <CheckCircle2 className="w-4 h-4" /> HCLTech Analytics Live Project
                  </span>
                </div>
              </div>

              <div className="lg:col-span-5 bg-[#101827] text-white rounded-3xl p-6 sm:p-8 text-left flex flex-col justify-between shadow-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
                
                <div>
                  <div className="flex items-center gap-2 text-blue-400 font-bold text-xs uppercase tracking-wider mb-2">
                    <Target className="w-4 h-4" />
                    Strategic Synthesis
                  </div>
                  <h4 className="text-xl font-bold text-white mb-6">
                    What Mohit Brings to Your Organisation:
                  </h4>

                  <div className="space-y-4">
                    <div className="p-3.5 rounded-xl bg-slate-800/80 border border-slate-700 text-xs text-slate-200 leading-relaxed">
                      <strong className="text-blue-400 block mb-0.5 font-bold">1. Predictive & Analytical Rigor:</strong>
                      Building automated Power BI dashboards and Python statistical models that eliminate manual data reconciliation.
                    </div>
                    <div className="p-3.5 rounded-xl bg-slate-800/80 border border-slate-700 text-xs text-slate-200 leading-relaxed">
                      <strong className="text-emerald-400 block mb-0.5 font-bold">2. Procure-to-Pay Efficiency:</strong>
                      Practical SAP execution, quotation comparison, and TCO evaluations to optimize procurement budgets.
                    </div>
                    <div className="p-3.5 rounded-xl bg-slate-800/80 border border-slate-700 text-xs text-slate-200 leading-relaxed">
                      <strong className="text-cyan-400 block mb-0.5 font-bold">3. Continuous DMAIC Improvement:</strong>
                      Applying Lean Six Sigma to identify operational bottlenecks and enhance customer-facing marketing workflows.
                    </div>
                  </div>
                </div>

                <div className="pt-4 mt-6 border-t border-slate-800">
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 text-xs font-bold text-blue-400 hover:text-white transition-colors"
                  >
                    <span>Discuss Opportunities with Mohit</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </motion.div>
          )}

          {activeLens === 'business' && (
            <motion.div
              key="business"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="bg-blue-50/70 border border-blue-200 rounded-3xl p-6 sm:p-8 text-left mb-16 space-y-4"
            >
              <div className="flex items-center gap-2 text-blue-700 font-bold text-xs uppercase tracking-wider">
                <TrendingUp className="w-4 h-4" />
                MBA – Marketing & Operations (IILM University, Greater Noida | 79.5%)
              </div>
              <h3 className="text-2xl font-bold text-blue-950">
                Strategic Marketing, Procurement & Operational Excellence
              </h3>
              <p className="text-slate-700 text-base leading-relaxed max-w-4xl">
                Trained in enterprise go-to-market strategies, brand positioning, and supply chain logistics. Hands-on experience executing purchase requisitions (PR) and purchase orders (PO) in SAP, tracking vendor SLAs, and applying Lean Six Sigma DMAIC methodologies under KPMG & IIM Sirmaur mentorship.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                <div className="bg-white p-3 rounded-xl border border-blue-200 text-xs">
                  <strong className="text-blue-900 block font-bold">Procurement & SAP:</strong>
                  Vendor evaluation, GRN, P2P cycle, PO creation
                </div>
                <div className="bg-white p-3 rounded-xl border border-blue-200 text-xs">
                  <strong className="text-blue-900 block font-bold">Process Quality:</strong>
                  DMAIC framework, waste elimination, root cause analysis
                </div>
                <div className="bg-white p-3 rounded-xl border border-blue-200 text-xs">
                  <strong className="text-blue-900 block font-bold">Marketing Analytics:</strong>
                  Consumer insights, market segmentation, competitor benchmarking
                </div>
              </div>
            </motion.div>
          )}

          {activeLens === 'tech' && (
            <motion.div
              key="tech"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="bg-emerald-50/70 border border-emerald-200 rounded-3xl p-6 sm:p-8 text-left mb-16 space-y-4"
            >
              <div className="flex items-center gap-2 text-emerald-800 font-bold text-xs uppercase tracking-wider">
                <Code2 className="w-4 h-4" />
                B.Tech in Computer Science Engineering (UPES University | 84.4% Distinction)
              </div>
              <h3 className="text-2xl font-bold text-emerald-950">
                Software Architecture, AI Models & Cloud Engineering
              </h3>
              <p className="text-slate-700 text-base leading-relaxed max-w-4xl">
                Graduated with First Class Distinction. Experienced in object-oriented programming (Python, Java, C), data structures, AWS cloud services (S3, KMS), and training deep Convolutional Neural Networks (CNN) using TensorFlow for automated computer vision recognition.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                <div className="bg-white p-3 rounded-xl border border-emerald-200 text-xs">
                  <strong className="text-emerald-900 block font-bold">Computer Vision & AI:</strong>
                  TensorFlow, CNN architectures, Colab GPU training
                </div>
                <div className="bg-white p-3 rounded-xl border border-emerald-200 text-xs">
                  <strong className="text-emerald-900 block font-bold">Data Engineering:</strong>
                  Python data preprocessing, augmentation, ETL pipelines
                </div>
                <div className="bg-white p-3 rounded-xl border border-emerald-200 text-xs">
                  <strong className="text-emerald-900 block font-bold">Systems & Cloud:</strong>
                  AWS S3 & KMS, GIS remote sensing, Prompt Engineering
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* 8 Core Strategic Interests Grid with Card Hover Animations */}
        <div className="mt-8">
          <div className="flex items-center justify-between mb-8">
            <div className="text-left">
              <h3 className="text-2xl font-bold text-[#101827]">
                Core Strategic Focus Areas
              </h3>
              <p className="text-sm text-slate-600 mt-1">
                The eight specialised capabilities driving Mohit's professional impact.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {interestIcons.map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={idx}
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                  className="group bg-[#F3F5F8] hover:bg-white border border-slate-200/90 hover:border-blue-400 rounded-2xl p-5 transition-all duration-300 hover:shadow-xl text-left flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-10 h-10 rounded-xl bg-white group-hover:bg-[#3B82F6] text-[#3B82F6] group-hover:text-white flex items-center justify-center shadow-xs border border-slate-200 transition-colors">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-[10px] font-bold text-slate-400 group-hover:text-blue-600 uppercase tracking-wider bg-slate-200/60 group-hover:bg-blue-50 px-2 py-0.5 rounded-full transition-colors">
                        {item.tag}
                      </span>
                    </div>

                    <h4 className="font-bold text-base text-[#101827] group-hover:text-blue-600 transition-colors">
                      {item.title}
                    </h4>
                    
                    <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
