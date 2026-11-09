import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, ArrowUp, ArrowUpRight, MessageSquare, Sparkles } from 'lucide-react';
import { LinkedinIcon } from './Icons';
import { personalInfo } from '../data/portfolioData';

export default function RecruiterDock() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 30 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-5 left-1/2 -translate-x-1/2 z-40 px-3 py-2 bg-[#101827]/90 backdrop-blur-md border border-slate-700/80 rounded-2xl shadow-2xl flex items-center gap-2 sm:gap-3 text-white"
        >
          {/* Avatar & Status */}
          <div className="flex items-center gap-2 pl-1 pr-2 border-r border-slate-700/80">
            <div className="relative w-8 h-8 rounded-full overflow-hidden border border-blue-400">
              <img
                src={personalInfo.profileImage}
                alt="Mohit"
                className="w-full h-full object-cover object-top"
              />
              <span className="absolute bottom-0 right-0 w-2 h-2 rounded-full bg-emerald-400 border border-slate-900" />
            </div>
            <div className="hidden sm:block text-left">
              <div className="text-xs font-bold leading-tight">{personalInfo.name}</div>
              <div className="text-[10px] text-blue-400 font-medium leading-tight">MBA • Marketing & Ops</div>
            </div>
          </div>

          {/* Quick Action Icons */}
          <div className="flex items-center gap-1.5">
            <a
              href={`mailto:${personalInfo.email}`}
              className="p-2 rounded-xl bg-slate-800 hover:bg-blue-600 text-slate-300 hover:text-white transition-colors"
              title="Send Email"
              aria-label="Send Email"
            >
              <Mail className="w-4 h-4" />
            </a>

            <a
              href={`tel:${personalInfo.phone}`}
              className="p-2 rounded-xl bg-slate-800 hover:bg-emerald-600 text-slate-300 hover:text-white transition-colors"
              title="Call Directly"
              aria-label="Call Directly"
            >
              <Phone className="w-4 h-4" />
            </a>

            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-xl bg-slate-800 hover:bg-[#0A66C2] text-slate-300 hover:text-white transition-colors"
              title="LinkedIn Profile"
              aria-label="LinkedIn Profile"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>

            <a
              href="#contact"
              className="hidden md:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold bg-[#3B82F6] hover:bg-blue-600 text-white transition-colors ml-1"
            >
              <span>Get in Touch</span>
            </a>
          </div>

          {/* Back to top */}
          <button
            onClick={scrollToTop}
            className="p-2 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors ml-1 border-l border-slate-700/80"
            title="Scroll to top"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
