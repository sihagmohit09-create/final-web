import React from 'react';
import { 
  Building2, 
  Calendar, 
  MapPin, 
  CheckCircle2, 
  FileText, 
  Download, 
  Eye, 
  Cpu, 
  Users2, 
  Truck 
} from 'lucide-react';
import { internshipsList } from '../data/portfolioData';

export default function Experience({ onOpenModal }) {
  const getIcon = (company) => {
    if (company.includes('Solarworld')) return Truck;
    if (company.includes('Wildlife')) return Cpu;
    return Users2;
  };

  return (
    <section id="experience" className="py-20 md:py-28 bg-[#F3F5F8] text-[#101827] border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-50 text-blue-700 text-xs font-bold tracking-wide uppercase mb-3">
            Professional Experience
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#101827]">
            Internships & Practical Industry Exposure
          </h2>
          <p className="mt-4 text-lg text-slate-600 leading-relaxed">
            Hands-on professional roles demonstrating expertise in supply chain procurement, artificial intelligence modeling, and field data research.
          </p>
        </div>

        {/* Experience Cards */}
        <div className="space-y-8">
          {internshipsList.map((item, index) => {
            const Icon = getIcon(item.company);
            return (
              <div
                key={index}
                className="bg-white rounded-2xl border border-slate-200/90 p-6 sm:p-8 lg:p-9 shadow-sm hover:shadow-md transition-all duration-300 text-left"
              >
                {/* Header row */}
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 pb-6 border-b border-slate-100">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-slate-900 text-white flex items-center justify-center shrink-0 shadow-sm">
                      <Icon className="w-6 h-6 text-blue-400" />
                    </div>
                    <div>
                      <div className="flex flex-wrap items-center gap-2">
                        <h3 className="text-xl sm:text-2xl font-bold text-[#101827]">
                          {item.company}
                        </h3>
                        <span className="inline-block px-2.5 py-0.5 rounded-full text-xs font-semibold bg-blue-50 text-blue-700 border border-blue-200">
                          {item.badge}
                        </span>
                      </div>
                      <p className="text-base sm:text-lg font-semibold text-[#3B82F6] mt-0.5">
                        {item.role}
                      </p>
                    </div>
                  </div>

                  {/* Metadata pill */}
                  <div className="flex flex-wrap md:flex-col md:items-end gap-2 text-xs sm:text-sm text-slate-500 font-medium">
                    <div className="flex items-center gap-1.5 bg-slate-50 px-3 py-1 rounded-lg border border-slate-200">
                      <Calendar className="w-4 h-4 text-slate-400" />
                      <span>{item.period}</span>
                    </div>
                    {item.location && (
                      <div className="flex items-center gap-1.5 text-slate-400 px-1">
                        <MapPin className="w-3.5 h-3.5" />
                        <span>{item.location}</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Body Content */}
                <div className="py-6 space-y-4">
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                    Core Key Responsibilities & Contributions:
                  </h4>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                    {item.responsibilities.map((resp, rIdx) => (
                      <li key={rIdx} className="flex items-start gap-3 text-slate-700 text-sm sm:text-base leading-relaxed">
                        <CheckCircle2 className="w-4 h-4 text-[#3B82F6] shrink-0 mt-1" />
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Footer with Skills Badges & Optional Document Actions */}
                <div className="pt-6 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-xs font-bold text-slate-400 uppercase mr-1">
                      Skills Applied:
                    </span>
                    {item.skillsLearned.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="px-2.5 py-1 rounded-md text-xs font-medium bg-slate-100 text-slate-700 border border-slate-200"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  {item.hasDocument && (
                    <div className="flex items-center gap-2 shrink-0">
                      <button
                        onClick={() =>
                          onOpenModal({
                            title: `${item.company} – ${item.documentTitle}`,
                            issuer: item.company,
                            date: item.period,
                            credentialId: "Official Internship Appointment",
                            image: item.documentFile,
                            downloadUrl: item.documentFile,
                            description: "Official internship appointment and authorization letter issued by Solarworld Energy Solutions Limited."
                          })
                        }
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-slate-700 bg-white hover:bg-slate-50 border border-slate-300 rounded-lg shadow-2xs transition-colors"
                      >
                        <Eye className="w-3.5 h-3.5 text-blue-600" />
                        <span>View Document</span>
                      </button>
                      <a
                        href={item.documentFile}
                        download="Solarworld-Internship-Letter.jpg"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-white bg-[#101827] hover:bg-slate-800 rounded-lg shadow-2xs transition-colors"
                      >
                        <Download className="w-3.5 h-3.5 text-white" />
                        <span>Download Letter</span>
                      </a>
                    </div>
                  )}
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
