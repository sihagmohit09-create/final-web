import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  BarChart3, 
  Code2, 
  Briefcase, 
  Users, 
  Check, 
  Sparkles, 
  Search, 
  X,
  Layers,
  ArrowRight
} from 'lucide-react';
import { skillsCategories } from '../data/portfolioData';

export default function Skills() {
  const [activeTab, setActiveTab] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const iconsMap = {
    BarChart3: BarChart3,
    Code2: Code2,
    Briefcase: Briefcase,
    Users: Users,
  };

  const tabs = ['All', ...skillsCategories.map((c) => c.category)];

  // Filter skills by category AND search query
  const filteredCategories = skillsCategories
    .filter((cat) => activeTab === 'All' || cat.category === activeTab)
    .map((cat) => {
      if (!searchQuery.trim()) return cat;
      const matchingSkills = cat.skills.filter((skill) =>
        skill.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (skill.level && skill.level.toLowerCase().includes(searchQuery.toLowerCase()))
      );
      return {
        ...cat,
        skills: matchingSkills,
      };
    })
    .filter((cat) => cat.skills.length > 0);

  const totalMatchingSkills = filteredCategories.reduce(
    (acc, cat) => acc + cat.skills.length,
    0
  );

  return (
    <section id="skills" className="py-20 md:py-28 bg-[#F3F5F8] text-[#101827] border-b border-slate-200 selection:bg-[#3B82F6] selection:text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-50 text-blue-700 text-xs font-bold tracking-wide uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5 text-blue-600" />
            <span>Interactive Competency Matrix</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#101827]">
            Technical & Managerial Skillset
          </h2>
          <p className="mt-4 text-lg text-slate-600 leading-relaxed">
            Search or filter across analytics platforms, enterprise business strategies, software languages, and executive leadership traits.
          </p>
        </div>

        {/* Search Bar & Category Filters Row */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-10">
          
          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
                  activeTab === tab
                    ? 'bg-[#101827] text-white shadow-md'
                    : 'bg-white text-slate-600 hover:text-slate-900 border border-slate-200 hover:border-slate-300'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Live Search Input */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search skills (e.g. SAP, Python)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-9 py-2 bg-white border border-slate-200 rounded-xl text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-slate-900 shadow-2xs"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-700"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

        </div>

        {/* Results Counter if searching */}
        {searchQuery && (
          <div className="text-left text-xs text-slate-500 mb-6 font-medium">
            Found <strong className="text-blue-600 font-bold">{totalMatchingSkills}</strong> skills matching "{searchQuery}"
          </div>
        )}

        {/* Skills Categories Grid */}
        {filteredCategories.length === 0 ? (
          <div className="bg-white rounded-2xl border border-slate-200 p-12 text-center space-y-3">
            <div className="text-slate-400 font-medium">No skills match "{searchQuery}"</div>
            <button
              onClick={() => { setSearchQuery(''); setActiveTab('All'); }}
              className="text-xs font-bold text-blue-600 hover:underline"
            >
              Reset filters & search
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
            {filteredCategories.map((category, idx) => {
              const Icon = iconsMap[category.iconName] || Sparkles;
              return (
                <motion.div
                  key={category.category}
                  layout
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: idx * 0.05 }}
                  className="bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-8 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    {/* Category Header */}
                    <div className="flex items-center gap-3.5 pb-5 border-b border-slate-100">
                      <div className="w-12 h-12 rounded-2xl bg-blue-50 text-[#3B82F6] flex items-center justify-center shrink-0 border border-blue-100 shadow-2xs group-hover:scale-105 transition-transform">
                        <Icon className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-[#101827]">
                          {category.category}
                        </h3>
                        <p className="text-xs text-slate-500 mt-0.5">
                          {category.description}
                        </p>
                      </div>
                    </div>

                    {/* Skills Grid */}
                    <div className="pt-6 flex flex-wrap gap-2.5">
                      {category.skills.map((skill, sIdx) => (
                        <motion.div
                          key={skill.name}
                          whileHover={{ scale: 1.04 }}
                          whileTap={{ scale: 0.98 }}
                          className="group/pill inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#F3F5F8] hover:bg-blue-600 border border-slate-200/80 hover:border-blue-600 text-slate-800 hover:text-white text-xs sm:text-sm font-semibold transition-all duration-200 shadow-2xs cursor-default"
                        >
                          <span className="w-2 h-2 rounded-full bg-blue-500 group-hover/pill:bg-white transition-colors" />
                          <span>{skill.name}</span>
                          {skill.level && (
                            <span className="text-[10px] font-bold text-slate-400 group-hover/pill:text-blue-200 uppercase tracking-wider ml-1 bg-white/70 group-hover/pill:bg-blue-700/60 px-1.5 py-0.5 rounded transition-colors">
                              {skill.level}
                            </span>
                          )}
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Footer metadata */}
                  <div className="pt-6 border-t border-slate-100 mt-6 flex items-center justify-between text-xs text-slate-400">
                    <span className="font-medium">{category.skills.length} core competencies</span>
                    <span className="font-semibold text-blue-600 flex items-center gap-1">
                      <span>Verified applied capability</span>
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        )}

      </div>
    </section>
  );
}
