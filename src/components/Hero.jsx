import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { 
  ArrowDown, 
  ArrowUpRight, 
  Mail, 
  MapPin, 
  Award, 
  CheckCircle, 
  GraduationCap, 
  Sparkles,
  TrendingUp,
  Cpu,
  Layers,
  BarChart3,
  Copy,
  Check
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { personalInfo } from '../data/portfolioData';

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [copied, setCopied] = useState(false);

  const dynamicRoles = [
    "Marketing & Growth Strategy",
    "Supply Chain & Procurement (SAP)",
    "Business Analytics & Power BI",
    "Lean Six Sigma Process Optimization",
    "AI & Data-Driven Decision Making"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % dynamicRoles.length);
    }, 2800);
    return () => clearInterval(interval);
  }, [dynamicRoles.length]);

  // 3D Tilt Effect on Mohit's Photo
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 20 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["12deg", "-12deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-12deg", "12deg"]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const triggerConfetti = () => {
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.7 },
      colors: ['#3B82F6', '#101827', '#60A5FA', '#34D399', '#F59E0B']
    });
  };

  const copyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    triggerConfetti();
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section className="relative bg-[#101827] text-white pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden selection:bg-[#3B82F6] selection:text-white">
      {/* Animated Ambient Light Spheres */}
      <motion.div
        animate={{
          scale: [1, 1.25, 1],
          opacity: [0.15, 0.25, 0.15],
          x: [-20, 20, -20],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-blue-600/20 blur-[150px] pointer-events-none rounded-full"
      />
      <motion.div
        animate={{
          scale: [1.1, 0.9, 1.1],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-10 right-10 w-96 h-96 bg-indigo-500/15 blur-[120px] pointer-events-none rounded-full"
      />

      {/* Subtle modern grid overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #ffffff 1px, transparent 0)`,
          backgroundSize: '32px 32px'
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Text Column (Col 7) */}
          <motion.div 
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-7 space-y-7 text-left"
          >
            {/* Top Interactive Status Pill */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-slate-800/80 border border-slate-700/80 text-xs font-semibold text-slate-300 backdrop-blur-md shadow-sm">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span>MBA Candidate @ IILM • B.Tech CSE @ UPES</span>
              <span className="text-slate-500">•</span>
              <span className="text-blue-400 font-bold">Open to Strategic Roles</span>
            </div>

            {/* Main Name & Title */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white uppercase flex items-center gap-3">
                <span>{personalInfo.name}</span>
                <motion.span
                  animate={{ rotate: [0, 20, 0] }}
                  transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                  className="inline-block origin-bottom-right text-3xl sm:text-5xl"
                >
                  ⚡
                </motion.span>
              </h1>
              
              {/* Dynamic Animated Role Rotator */}
              <div className="h-10 sm:h-12 flex items-center">
                <span className="text-lg sm:text-2xl font-bold text-slate-300 mr-2">
                  Specialising in:
                </span>
                <AnimatePresence mode="wait">
                  <motion.span
                    key={roleIndex}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.35 }}
                    className="text-lg sm:text-2xl font-bold text-[#3B82F6] bg-blue-500/10 px-3 py-1 rounded-lg border border-blue-500/20"
                  >
                    {dynamicRoles[roleIndex]}
                  </motion.span>
                </AnimatePresence>
              </div>
            </div>

            {/* Core Philosophy Tagline */}
            <div className="relative pl-5 py-2 border-l-4 border-[#3B82F6] bg-gradient-to-r from-blue-950/20 to-transparent rounded-r-xl">
              <p className="italic text-lg sm:text-xl text-slate-100 font-medium leading-relaxed">
                "{personalInfo.subheadline}"
              </p>
            </div>

            {/* Short Introduction */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl">
              {personalInfo.aboutBrief}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <motion.a
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                href="#experience"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 text-sm font-bold text-white bg-gradient-to-r from-[#3B82F6] to-blue-600 hover:from-blue-600 hover:to-blue-700 rounded-xl shadow-lg shadow-blue-500/25 transition-all"
              >
                <span>Explore Work & Projects</span>
                <ArrowDown className="w-4 h-4" />
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-bold text-slate-200 bg-slate-800/90 hover:bg-slate-700 hover:text-white rounded-xl border border-slate-700 transition-all shadow-sm"
              >
                <span>LinkedIn Profile</span>
                <ArrowUpRight className="w-4 h-4 text-blue-400" />
              </motion.a>

              <button
                onClick={copyEmail}
                className="inline-flex items-center gap-2 px-4 py-3.5 text-sm font-semibold text-slate-300 hover:text-white transition-colors bg-slate-800/40 hover:bg-slate-800 rounded-xl border border-slate-700/60"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span className="text-emerald-400 font-bold">Email Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-slate-400" />
                    <span>Copy Email</span>
                  </>
                )}
              </button>
            </div>

            {/* Live Animated Metrics Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 border-t border-slate-800/80">
              <div className="bg-slate-800/40 backdrop-blur-xs border border-slate-700/60 rounded-xl p-3.5 hover:border-blue-500/40 transition-colors">
                <div className="text-[11px] text-slate-400 uppercase tracking-wider font-bold">
                  MBA Grade
                </div>
                <div className="text-lg font-extrabold text-blue-400 mt-0.5">
                  79.5%
                </div>
                <div className="text-[11px] text-slate-400">IILM Univ</div>
              </div>

              <div className="bg-slate-800/40 backdrop-blur-xs border border-slate-700/60 rounded-xl p-3.5 hover:border-blue-500/40 transition-colors">
                <div className="text-[11px] text-slate-400 uppercase tracking-wider font-bold">
                  B.Tech CSE
                </div>
                <div className="text-lg font-extrabold text-white mt-0.5">
                  84.4%
                </div>
                <div className="text-[11px] text-slate-400">UPES Distinction</div>
              </div>

              <div className="bg-slate-800/40 backdrop-blur-xs border border-slate-700/60 rounded-xl p-3.5 hover:border-blue-500/40 transition-colors">
                <div className="text-[11px] text-slate-400 uppercase tracking-wider font-bold">
                  KPMG Six Sigma
                </div>
                <div className="text-lg font-extrabold text-emerald-400 mt-0.5">
                  Green Belt
                </div>
                <div className="text-[11px] text-slate-400">DMAIC Certified</div>
              </div>

              <div className="bg-slate-800/40 backdrop-blur-xs border border-slate-700/60 rounded-xl p-3.5 hover:border-blue-500/40 transition-colors">
                <div className="text-[11px] text-slate-400 uppercase tracking-wider font-bold">
                  Analytics
                </div>
                <div className="text-lg font-extrabold text-cyan-400 mt-0.5">
                  Power BI
                </div>
                <div className="text-[11px] text-slate-400">HCLTech Program</div>
              </div>
            </div>

          </motion.div>

          {/* Right Column: 3D Interactive Portrait with Floating Glass Cards (Col 5) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end relative">
            
            {/* Floating Glass Pill 1: Top Left */}
            <motion.div
              animate={{ y: [-6, 6, -6] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
              className="hidden sm:flex absolute -top-4 -left-6 z-20 items-center gap-2.5 bg-[#101827]/90 backdrop-blur-md border border-slate-700/80 px-3.5 py-2 rounded-xl shadow-xl text-left"
            >
              <div className="w-7 h-7 rounded-lg bg-blue-500/20 text-blue-400 flex items-center justify-center shrink-0">
                <Layers className="w-4 h-4" />
              </div>
              <div>
                <div className="text-[10px] font-bold uppercase text-slate-400">Internship</div>
                <div className="text-xs font-bold text-white">Solarworld Supply Chain</div>
              </div>
            </motion.div>

            {/* Floating Glass Pill 2: Bottom Right */}
            <motion.div
              animate={{ y: [6, -6, 6] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="hidden sm:flex absolute -bottom-4 -right-4 z-20 items-center gap-2.5 bg-[#101827]/90 backdrop-blur-md border border-slate-700/80 px-3.5 py-2 rounded-xl shadow-xl text-left"
            >
              <div className="w-7 h-7 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                <Award className="w-4 h-4" />
              </div>
              <div>
                <div className="text-[10px] font-bold uppercase text-slate-400">Credential</div>
                <div className="text-xs font-bold text-white">KPMG Lean Six Sigma</div>
              </div>
            </motion.div>

            {/* Main 3D Card Container */}
            <motion.div
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              style={{
                rotateX,
                rotateY,
                transformStyle: "preserve-3d",
              }}
              className="relative group w-full max-w-sm sm:max-w-md cursor-pointer"
            >
              {/* Dynamic glowing backlight */}
              <div className="absolute -inset-1.5 bg-gradient-to-tr from-blue-600 via-indigo-500 to-cyan-400 rounded-3xl blur-lg opacity-40 group-hover:opacity-75 transition duration-500" />
              
              <div className="relative bg-[#151F32] border border-slate-700/90 rounded-3xl p-3.5 shadow-2xl overflow-hidden backdrop-blur-sm">
                <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-slate-900 relative">
                  <img
                    src={personalInfo.profileImage}
                    alt="Mohit - MBA Candidate in Marketing & Operations"
                    className="w-full h-full object-cover object-top filter brightness-[1.03] contrast-[1.02] group-hover:scale-105 transition-transform duration-700 ease-out"
                    loading="eager"
                  />
                  {/* Bottom gradient mask */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#101827] via-transparent to-transparent opacity-70" />
                  
                  {/* Floating verification chip on image */}
                  <div className="absolute bottom-3.5 left-3.5 right-3.5 bg-[#101827]/90 backdrop-blur-md border border-slate-700/80 rounded-xl p-3 text-left shadow-lg">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <GraduationCap className="w-4 h-4 text-blue-400 shrink-0" />
                        <span className="text-xs font-bold text-white">
                          IILM University, Greater Noida
                        </span>
                      </div>
                      <span className="text-[10px] font-bold text-emerald-400 bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-800">
                        Batch 2025–2027
                      </span>
                    </div>
                    <p className="text-[11px] text-slate-300 mt-1 font-medium">
                      MBA • Marketing & Operations | B.Tech CSE (UPES)
                    </p>
                  </div>
                </div>

                {/* Bottom interactive action bar */}
                <div className="mt-3.5 flex items-center justify-between px-2 text-xs">
                  <div className="flex items-center gap-1.5 text-slate-300 font-medium">
                    <MapPin className="w-3.5 h-3.5 text-blue-400" />
                    <span>Delhi NCR, India</span>
                  </div>
                  <a
                    href="#contact"
                    className="text-xs font-bold text-blue-400 hover:text-blue-300 transition-colors flex items-center gap-1"
                  >
                    <span>Hire Mohit</span>
                    <span>→</span>
                  </a>
                </div>
              </div>
            </motion.div>

          </div>

        </div>
      </div>
    </section>
  );
}
