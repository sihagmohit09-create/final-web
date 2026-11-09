import React from 'react';
import { ArrowUp, Mail, Phone, Heart, ShieldCheck } from 'lucide-react';
import { LinkedinIcon } from './Icons';
import { personalInfo } from '../data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#101827] text-white border-t border-slate-800 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-slate-800 text-left">
          
          {/* Brand Info (5 Cols) */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#3B82F6] to-blue-700 flex items-center justify-center text-white font-bold text-lg shadow-sm">
                M
              </div>
              <div>
                <h3 className="text-xl font-bold tracking-tight text-white uppercase">
                  {personalInfo.name}
                </h3>
                <p className="text-xs text-blue-400 font-medium">
                  {personalInfo.headline}
                </p>
              </div>
            </div>

            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              Bridging technology, business strategy, and data-driven decision making. MBA Candidate at IILM University & B.Tech CSE from UPES.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-slate-800 hover:bg-blue-600 text-slate-300 hover:text-white flex items-center justify-center transition-colors"
                aria-label="Mohit's LinkedIn"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="w-9 h-9 rounded-lg bg-slate-800 hover:bg-blue-600 text-slate-300 hover:text-white flex items-center justify-center transition-colors"
                aria-label="Email Mohit"
              >
                <Mail className="w-4 h-4" />
              </a>
              <a
                href={`tel:${personalInfo.phone}`}
                className="w-9 h-9 rounded-lg bg-slate-800 hover:bg-blue-600 text-slate-300 hover:text-white flex items-center justify-center transition-colors"
                aria-label="Call Mohit"
              >
                <Phone className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links (3 Cols) */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
              Quick Navigation
            </h4>
            <ul className="space-y-2 text-sm text-slate-300">
              <li>
                <a href="#about" className="hover:text-blue-400 transition-colors">About & Duality</a>
              </li>
              <li>
                <a href="#experience" className="hover:text-blue-400 transition-colors">Internships & Exposure</a>
              </li>
              <li>
                <a href="#education" className="hover:text-blue-400 transition-colors">Education Timeline</a>
              </li>
              <li>
                <a href="#certifications" className="hover:text-blue-400 transition-colors">Certifications & Credentials</a>
              </li>
              <li>
                <a href="#research" className="hover:text-blue-400 transition-colors">Research Framework</a>
              </li>
              <li>
                <a href="#skills" className="hover:text-blue-400 transition-colors">Skillset Matrix</a>
              </li>
            </ul>
          </div>

          {/* Contact Direct & Location (4 Cols) */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
              Direct Contact
            </h4>
            <div className="space-y-2 text-sm text-slate-300">
              <p>
                <strong className="text-slate-400 font-medium">Email: </strong>
                <a href={`mailto:${personalInfo.email}`} className="text-white hover:text-blue-400 transition-colors">
                  {personalInfo.email}
                </a>
              </p>
              <p>
                <strong className="text-slate-400 font-medium">Phone: </strong>
                <a href={`tel:${personalInfo.phone}`} className="text-white hover:text-blue-400 transition-colors">
                  {personalInfo.displayPhone}
                </a>
              </p>
              <p>
                <strong className="text-slate-400 font-medium">Location: </strong>
                <span>{personalInfo.location}</span>
              </p>
              <div className="pt-3">
                <button
                  onClick={scrollToTop}
                  className="inline-flex items-center gap-2 px-3 py-1.5 text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white rounded-lg border border-slate-700 transition-colors"
                >
                  <ArrowUp className="w-3.5 h-3.5" />
                  <span>Back to top</span>
                </button>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom copyright row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>
            © {new Date().getFullYear()} Mohit. All rights reserved. Personal Professional Portfolio.
          </p>
          <div className="flex items-center gap-1.5 text-slate-400">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
            <span>Built with React, Vite & Tailwind CSS</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
