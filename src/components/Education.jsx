import React from 'react';
import { GraduationCap, Calendar, Award, BookOpen, CheckCircle } from 'lucide-react';
import { educationList } from '../data/portfolioData';

export default function Education() {
  return (
    <section id="education" className="py-20 md:py-28 bg-white text-[#101827] border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-50 text-blue-700 text-xs font-bold tracking-wide uppercase mb-3">
            Academic Background
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#101827]">
            Education & Academic Credentials
          </h2>
          <p className="mt-4 text-lg text-slate-600 leading-relaxed">
            Rigorous dual-discipline training combining Computer Science Engineering with contemporary Marketing and Operations management.
          </p>
        </div>

        {/* Timeline Layout */}
        <div className="relative border-l-2 border-slate-200 ml-4 md:ml-8 pl-6 md:pl-10 space-y-12 text-left">
          {educationList.map((edu, idx) => (
            <div key={idx} className="relative group">
              {/* Timeline marker node */}
              <div className="absolute -left-[31px] md:-left-[47px] top-1.5 w-6 h-6 rounded-full bg-white border-4 border-[#3B82F6] shadow-sm group-hover:scale-125 transition-transform duration-300" />

              {/* Education Card */}
              <div className="bg-[#F3F5F8] group-hover:bg-white rounded-2xl border border-slate-200/90 group-hover:border-blue-300 p-6 sm:p-8 transition-all duration-300 shadow-2xs hover:shadow-md">
                
                {/* Degree & Score Row */}
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 pb-4 border-b border-slate-200">
                  <div>
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="text-xl sm:text-2xl font-bold text-[#101827]">
                        {edu.degree}
                      </h3>
                      <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-slate-200 text-slate-700">
                        {edu.status}
                      </span>
                    </div>
                    <div className="text-base font-semibold text-[#3B82F6] mt-1 flex items-center gap-2">
                      <GraduationCap className="w-4 h-4 shrink-0" />
                      <span>{edu.institution}</span>
                    </div>
                    <div className="text-xs text-slate-500 mt-0.5 font-medium">
                      Affiliation: {edu.boardUniversity}
                    </div>
                  </div>

                  {/* Score badge & Year */}
                  <div className="flex sm:flex-col sm:items-end gap-2 shrink-0">
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-50 text-emerald-700 border border-emerald-200 rounded-lg text-sm font-bold">
                      <Award className="w-4 h-4" />
                      <span>{edu.score}</span>
                    </div>
                    <div className="inline-flex items-center gap-1.5 text-xs text-slate-500 font-medium">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{edu.duration}</span>
                    </div>
                  </div>
                </div>

                {/* Description & Key Focus */}
                <div className="pt-4 space-y-3">
                  <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                    {edu.description}
                  </p>
                  
                  {edu.highlights && edu.highlights.length > 0 && (
                    <div className="pt-2">
                      <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                        Key Milestones & Focus:
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {edu.highlights.map((highlight, hIdx) => (
                          <div
                            key={hIdx}
                            className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-700 bg-white group-hover:bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-200"
                          >
                            <CheckCircle className="w-3.5 h-3.5 text-blue-500" />
                            <span>{highlight}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
