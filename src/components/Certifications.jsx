import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Award, Calendar, CheckCircle2, Download, Eye, ShieldCheck, Sparkles, Filter } from 'lucide-react';
import { certificatesList } from '../data/portfolioData';

export default function Certifications({ onOpenModal }) {
  const [filterIssuer, setFilterIssuer] = useState('All');

  const issuers = ['All', 'KPMG', 'HCLTech', 'IIM Sirmaur'];

  const filteredCerts = filterIssuer === 'All'
    ? certificatesList
    : certificatesList.filter((c) => c.issuer.toLowerCase().includes(filterIssuer.toLowerCase()));

  return (
    <section id="certifications" className="py-20 md:py-28 bg-[#F3F5F8] text-[#101827] border-b border-slate-200 selection:bg-[#3B82F6] selection:text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-50 text-blue-700 text-xs font-bold tracking-wide uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5 text-blue-600" />
            <span>Verified Credentials</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#101827]">
            Professional Certifications & Executive Programmes
          </h2>
          <p className="mt-4 text-lg text-slate-600 leading-relaxed">
            Rigorous management programmes and industry certifications issued by KPMG, HCLTech, and IIM Sirmaur with authenticated credential IDs.
          </p>
        </div>

        {/* Filter Chips */}
        <div className="flex flex-wrap items-center gap-2 mb-10 pb-2">
          <span className="text-xs font-bold text-slate-400 uppercase tracking-wider mr-2">
            Filter Credential:
          </span>
          {issuers.map((issuer) => (
            <button
              key={issuer}
              onClick={() => setFilterIssuer(issuer)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 ${
                filterIssuer === issuer
                  ? 'bg-[#101827] text-white shadow-md'
                  : 'bg-white text-slate-600 hover:text-slate-900 border border-slate-200 hover:border-slate-300'
              }`}
            >
              {issuer === 'All' ? 'All Credentials (3)' : issuer}
            </button>
          ))}
        </div>

        {/* Certificate Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
          {filteredCerts.map((cert) => (
            <motion.div
              key={cert.id}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="bg-white rounded-3xl border border-slate-200/90 hover:border-blue-400/80 shadow-sm hover:shadow-2xl transition-all duration-300 flex flex-col justify-between overflow-hidden group"
            >
              <div>
                {/* Certificate Thumbnail with Hover Eye Zoom */}
                <div
                  className="relative aspect-[16/10] bg-slate-950 overflow-hidden cursor-pointer group/img"
                  onClick={() => onOpenModal(cert)}
                >
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-full object-cover object-center group-hover/img:scale-108 transition-transform duration-500 filter group-hover/img:brightness-105"
                    loading="lazy"
                  />
                  {/* Glowing Overlay */}
                  <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center gap-2 backdrop-blur-2xs">
                    <span className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/95 text-xs font-bold text-[#101827] shadow-xl hover:scale-105 transition-transform">
                      <Eye className="w-4 h-4 text-blue-600" />
                      <span>Click to Enlarge</span>
                    </span>
                  </div>

                  {/* Issuing Organisation Pill */}
                  <div className="absolute top-3.5 left-3.5">
                    <span className="px-3 py-1 rounded-lg text-[11px] font-bold bg-[#101827]/90 backdrop-blur-md text-white border border-slate-700 shadow-md">
                      {cert.issuer}
                    </span>
                  </div>

                  {/* Verified Badge */}
                  <div className="absolute top-3.5 right-3.5">
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-[10px] font-bold bg-emerald-950/80 backdrop-blur-md text-emerald-300 border border-emerald-600">
                      <ShieldCheck className="w-3 h-3 text-emerald-400" />
                      <span>Verified</span>
                    </span>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 sm:p-7 space-y-4">
                  <div>
                    <h3 className="text-lg font-bold text-[#101827] group-hover:text-blue-600 transition-colors line-clamp-2">
                      {cert.title}
                    </h3>
                    
                    <div className="flex items-center gap-2 text-xs text-slate-500 font-medium mt-1.5">
                      <Calendar className="w-3.5 h-3.5 text-slate-400" />
                      <span>{cert.date}</span>
                      <span>•</span>
                      <span className="truncate">{cert.duration}</span>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {cert.description}
                  </p>

                  {/* Highlights Bullet List */}
                  <div className="space-y-2 pt-3 border-t border-slate-100">
                    <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                      Key Competencies Mastered:
                    </div>
                    <ul className="space-y-2">
                      {cert.highlights.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-700 leading-relaxed">
                          <CheckCircle2 className="w-3.5 h-3.5 text-blue-500 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="p-6 sm:p-7 pt-0 border-t border-slate-100 mt-4 flex items-center gap-3">
                <button
                  onClick={() => onOpenModal(cert)}
                  className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 px-3 text-xs font-bold text-slate-800 bg-slate-100 hover:bg-slate-200 rounded-xl transition-colors"
                >
                  <Eye className="w-4 h-4 text-blue-600" />
                  <span>View Certificate</span>
                </button>
                <a
                  href={cert.downloadUrl}
                  download={`${cert.title.replace(/[^a-zA-Z0-9]/g, '_')}.png`}
                  className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 px-3 text-xs font-bold text-white bg-[#101827] hover:bg-slate-800 rounded-xl transition-colors shadow-sm"
                >
                  <Download className="w-4 h-4 text-blue-400" />
                  <span>Download File</span>
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Verification banner */}
        <div className="mt-14 bg-white rounded-2xl border border-slate-200/90 p-5 sm:p-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-left shadow-sm">
          <div className="flex items-center gap-3.5">
            <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 border border-emerald-100">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-[#101827]">
                Authenticated Institutional Records
              </h4>
              <p className="text-xs text-slate-500 mt-0.5">
                Every certificate includes verified registration numbers (KPMG IP042026110, IIM Sirmaur IIMS/CMDP/WO-030/32).
              </p>
            </div>
          </div>
          <a
            href="#contact"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold bg-[#101827] text-white hover:bg-blue-600 transition-colors"
          >
            <span>Request Full Official Transcripts</span>
            <span>→</span>
          </a>
        </div>

      </div>
    </section>
  );
}
