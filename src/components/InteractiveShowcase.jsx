import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Calculator, 
  Cpu, 
  Truck, 
  Layers, 
  BarChart2, 
  TrendingUp, 
  CheckCircle2, 
  Sparkles, 
  ArrowRight,
  ShieldCheck,
  Zap,
  Activity
} from 'lucide-react';

export default function InteractiveShowcase() {
  const [activeTab, setActiveTab] = useState('tco'); // 'tco' or 'cnn'

  // TCO Calculator State
  const [palletCount, setPalletCount] = useState(500);
  const [years, setYears] = useState(5);

  // Wooden Pallet Cost Model (Typical India Industrial Baseline)
  // Wooden: Initial ₹700, Lifespan 1.2 years, Annual maintenance ₹150, High splinter/damage rate
  const woodenInitialCost = palletCount * 700;
  const woodenReplacements = Math.floor(years / 1.25);
  const woodenTotalInitialAndReplacement = woodenInitialCost * (1 + woodenReplacements);
  const woodenMaintenanceTotal = palletCount * 140 * years;
  const woodenTCO = woodenTotalInitialAndReplacement + woodenMaintenanceTotal;

  // Plastic Pallet Cost Model (Solarworld TCO comparison)
  // Plastic: Initial ₹1900, Lifespan 5+ years, Annual maintenance ₹30, Zero splinter, 100% moisture resistant
  const plasticInitialCost = palletCount * 1900;
  const plasticReplacements = Math.floor(years / 5);
  const plasticTotalInitialAndReplacement = plasticInitialCost * (1 + plasticReplacements);
  const plasticMaintenanceTotal = palletCount * 30 * years;
  const plasticTCO = plasticTotalInitialAndReplacement + plasticMaintenanceTotal;

  const savings = woodenTCO - plasticTCO;
  const savingsPercent = Math.round((savings / woodenTCO) * 100);

  // CNN Simulator State
  const [selectedSample, setSelectedSample] = useState(0);
  const birdSamples = [
    {
      label: "Snow Petrel — Nesting & Incubation",
      behavior: "Nesting Activity",
      confidence: 97.4,
      latency: "14.2 ms",
      features: ["Low Optical Flow Variance", "Substrate Proximity", "Static Torso Pose"],
      description: "Automated detection of stationary nesting posture in high-latitude rocky crevasses."
    },
    {
      label: "Snow Petrel — Aerial Dynamic Gliding",
      behavior: "Foraging Flight",
      confidence: 94.8,
      latency: "16.1 ms",
      features: ["High Wing Aspect Ratio", "Dynamic Optical Flow Vectors", "Sky Horizon Mask"],
      description: "Identifies rapid maritime trajectory shifts indicating active krill hunting."
    },
    {
      label: "Snow Petrel — Sub-Zero Wind Roosting",
      behavior: "Roosting / Thermal Shield",
      confidence: 92.1,
      latency: "13.8 ms",
      features: ["Huddled Contour Boundary", "Reduced Surface Area", "Snow Edge Contrast"],
      description: "Categorizes energy-conservation resting stance during extreme polar blizzard winds."
    }
  ];

  return (
    <section className="py-20 md:py-28 bg-[#101827] text-white border-b border-slate-800 relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-blue-600/10 blur-[120px] pointer-events-none rounded-full" />
      <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-emerald-500/10 blur-[130px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-500/10 text-blue-400 border border-blue-500/20 text-xs font-bold tracking-wide uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5 text-blue-400" />
            <span>Interactive Project Simulations</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            Practical Problem Solving in Action
          </h2>
          <p className="mt-4 text-lg text-slate-300 leading-relaxed">
            Experience interactive digital replicas of analytical solutions Mohit engineered during his supply chain and machine learning internships.
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex flex-wrap gap-3 mb-10">
          <button
            onClick={() => setActiveTab('tco')}
            className={`flex items-center gap-2 px-5 py-3 rounded-xl font-bold text-sm transition-all duration-300 ${
              activeTab === 'tco'
                ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/30'
                : 'bg-slate-800/80 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-700/80'
            }`}
          >
            <Truck className="w-4 h-4" />
            <span>Solarworld: TCO Pallet Cost Model</span>
          </button>

          <button
            onClick={() => setActiveTab('cnn')}
            className={`flex items-center gap-2 px-5 py-3 rounded-xl font-bold text-sm transition-all duration-300 ${
              activeTab === 'cnn'
                ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-500/30'
                : 'bg-slate-800/80 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-700/80'
            }`}
          >
            <Cpu className="w-4 h-4" />
            <span>WCS India: Snow Petrel CNN Classifier</span>
          </button>
        </div>

        {/* Tab 1: Solarworld TCO Simulator */}
        {activeTab === 'tco' && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 text-left bg-gradient-to-br from-[#151F32] to-[#101827] border border-slate-700/80 rounded-3xl p-6 sm:p-10 shadow-2xl"
          >
            {/* Interactive Sliders (5 Cols) */}
            <div className="lg:col-span-5 space-y-6">
              <div className="border-b border-slate-700/80 pb-4">
                <div className="text-xs font-bold text-blue-400 uppercase tracking-wider">
                  Internship Simulation
                </div>
                <h3 className="text-xl font-bold text-white mt-1">
                  Solarworld Energy Solutions TCO Analysis
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 mt-1">
                  Adjust procurement scale to model 5-year capital outlay and lifecycle savings of wooden vs. plastic pallets.
                </p>
              </div>

              {/* Slider 1: Pallet Fleet Count */}
              <div className="space-y-2">
                <div className="flex justify-between items-center text-sm font-semibold text-slate-200">
                  <span>Warehouse Pallet Inventory</span>
                  <span className="font-mono text-blue-400 font-bold px-2 py-0.5 rounded bg-blue-500/10 border border-blue-500/20">
                    {palletCount.toLocaleString()} Pallets
                  </span>
                </div>
                <input
                  type="range"
                  min="100"
                  max="2000"
                  step="50"
                  value={palletCount}
                  onChange={(e) => setPalletCount(Number(e.target.value))}
                  className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-blue-500"
                />
                <div className="flex justify-between text-[11px] text-slate-500">
                  <span>100 units</span>
                  <span>1,000 units</span>
                  <span>2,000 units</span>
                </div>
              </div>

              {/* Slider 2: Operational Horizon */}
              <div className="space-y-2">
                <div className="flex justify-between items-center text-sm font-semibold text-slate-200">
                  <span>Operating Time Horizon</span>
                  <span className="font-mono text-blue-400 font-bold px-2 py-0.5 rounded bg-blue-500/10 border border-blue-500/20">
                    {years} Years
                  </span>
                </div>
                <input
                  type="range"
                  min="3"
                  max="8"
                  step="1"
                  value={years}
                  onChange={(e) => setYears(Number(e.target.value))}
                  className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-blue-500"
                />
                <div className="flex justify-between text-[11px] text-slate-500">
                  <span>3 Years</span>
                  <span>5 Years (Standard)</span>
                  <span>8 Years</span>
                </div>
              </div>

              {/* Qualitative Drivers Evaluated */}
              <div className="bg-slate-800/60 rounded-2xl p-4 border border-slate-700/60 text-xs space-y-2">
                <div className="font-bold text-slate-300 uppercase tracking-wide text-[11px]">
                  Operational Qualitative Factors Tested:
                </div>
                <div className="grid grid-cols-2 gap-2 text-slate-300">
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Zero Splinter Hazard</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Moisture & Pest Proof</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Tare Weight Precision</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Recyclable Scrap Value</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Results & Live Comparison (7 Cols) */}
            <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
              
              {/* Savings Banner */}
              <div className="bg-gradient-to-r from-emerald-950/60 to-slate-900 border border-emerald-500/40 rounded-2xl p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-emerald-400 flex items-center gap-1.5">
                    <Zap className="w-4 h-4" />
                    <span>Lifecycle Efficiency Advantage</span>
                  </div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
                    ₹{(savings).toLocaleString('en-IN')} Net Savings
                  </div>
                  <div className="text-xs text-slate-400 mt-0.5">
                    Plastic pallets yield an estimated <strong>{savingsPercent}% TCO reduction</strong> over {years} years.
                  </div>
                </div>
                <div className="px-4 py-2 bg-emerald-500/20 border border-emerald-500/40 rounded-xl text-center">
                  <div className="text-xs text-emerald-300 font-semibold">TCO Reduction</div>
                  <div className="text-xl font-extrabold text-emerald-400">~{savingsPercent}%</div>
                </div>
              </div>

              {/* Side-by-Side Breakdown Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                {/* Wooden Pallets */}
                <div className="bg-slate-800/60 rounded-2xl p-5 border border-slate-700">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="font-bold text-slate-200 text-sm">
                      Wooden Pallets
                    </h4>
                    <span className="text-[11px] text-rose-400 font-semibold bg-rose-950/60 px-2 py-0.5 rounded border border-rose-800">
                      High Recurring Cost
                    </span>
                  </div>
                  <div className="space-y-2 text-xs text-slate-300">
                    <div className="flex justify-between">
                      <span className="text-slate-400">Replacements needed:</span>
                      <span className="font-mono text-white">{woodenReplacements} full cycles</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">Procurement & Capex:</span>
                      <span className="font-mono text-white">₹{woodenTotalInitialAndReplacement.toLocaleString('en-IN')}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">Repair & Maintenance:</span>
                      <span className="font-mono text-white">₹{woodenMaintenanceTotal.toLocaleString('en-IN')}</span>
                    </div>
                    <div className="pt-2 border-t border-slate-700 flex justify-between font-bold text-sm">
                      <span className="text-slate-300">Cumulative TCO:</span>
                      <span className="text-rose-400 font-mono">₹{woodenTCO.toLocaleString('en-IN')}</span>
                    </div>
                  </div>
                </div>

                {/* Plastic Pallets */}
                <div className="bg-blue-950/30 rounded-2xl p-5 border border-blue-500/40 relative">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="font-bold text-white text-sm">
                      Plastic Pallets
                    </h4>
                    <span className="text-[11px] text-emerald-400 font-semibold bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-800">
                      Recommended
                    </span>
                  </div>
                  <div className="space-y-2 text-xs text-slate-300">
                    <div className="flex justify-between">
                      <span className="text-slate-400">Replacements needed:</span>
                      <span className="font-mono text-white">{plasticReplacements} cycle (5-8 yr durability)</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">Procurement & Capex:</span>
                      <span className="font-mono text-white">₹{plasticTotalInitialAndReplacement.toLocaleString('en-IN')}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">Repair & Maintenance:</span>
                      <span className="font-mono text-white">₹{plasticMaintenanceTotal.toLocaleString('en-IN')}</span>
                    </div>
                    <div className="pt-2 border-t border-slate-700 flex justify-between font-bold text-sm">
                      <span className="text-white">Cumulative TCO:</span>
                      <span className="text-emerald-400 font-mono">₹{plasticTCO.toLocaleString('en-IN')}</span>
                    </div>
                  </div>
                </div>

              </div>

              {/* Bottom Insight Footer */}
              <div className="bg-slate-800/40 rounded-xl p-3 border border-slate-700/60 text-xs text-slate-400 flex items-center justify-between">
                <span>Modelled from SAP Procure-to-Pay vendor quotation comparative parameters.</span>
                <span className="font-semibold text-blue-400">Solarworld Energy Solutions Case Study</span>
              </div>

            </div>
          </motion.div>
        )}

        {/* Tab 2: WCS India CNN Bird Classifier */}
        {activeTab === 'cnn' && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 text-left bg-gradient-to-br from-[#151F32] to-[#101827] border border-slate-700/80 rounded-3xl p-6 sm:p-10 shadow-2xl"
          >
            {/* Left Column: Sample Selector (5 Cols) */}
            <div className="lg:col-span-5 space-y-5">
              <div className="border-b border-slate-700/80 pb-4">
                <div className="text-xs font-bold text-emerald-400 uppercase tracking-wider">
                  Technical ML Internship
                </div>
                <h3 className="text-xl font-bold text-white mt-1">
                  WCS India: Snow Petrel Behavioral Recognition
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 mt-1">
                  Click a test behavioral state to trigger simulated inference from Mohit's TensorFlow CNN architecture.
                </p>
              </div>

              {/* Interactive Sample Buttons */}
              <div className="space-y-3">
                {birdSamples.map((sample, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedSample(idx)}
                    className={`w-full text-left p-3.5 rounded-xl border transition-all ${
                      selectedSample === idx
                        ? 'bg-emerald-500/15 border-emerald-500/60 text-white shadow-md'
                        : 'bg-slate-800/40 border-slate-700/70 text-slate-300 hover:bg-slate-800'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-bold">{sample.label}</span>
                      <span className="text-[11px] font-mono text-emerald-400 font-bold bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-800">
                        {sample.confidence}% Match
                      </span>
                    </div>
                    <p className="text-xs text-slate-400 mt-1 line-clamp-1">
                      {sample.description}
                    </p>
                  </button>
                ))}
              </div>

              {/* Pipeline specs */}
              <div className="bg-slate-800/60 rounded-xl p-3.5 border border-slate-700/60 text-xs space-y-2">
                <div className="font-bold text-slate-300 uppercase tracking-wide text-[11px]">
                  TensorFlow CNN Architecture Stack:
                </div>
                <div className="flex flex-wrap gap-1.5">
                  <span className="px-2 py-0.5 bg-slate-900 text-slate-300 rounded border border-slate-700">TensorFlow 2.x</span>
                  <span className="px-2 py-0.5 bg-slate-900 text-slate-300 rounded border border-slate-700">Conv2D + MaxPool</span>
                  <span className="px-2 py-0.5 bg-slate-900 text-slate-300 rounded border border-slate-700">Image Augmentation</span>
                  <span className="px-2 py-0.5 bg-slate-900 text-slate-300 rounded border border-slate-700">Google Colab GPU</span>
                </div>
              </div>
            </div>

            {/* Right Column: Simulated Model Output (7 Cols) */}
            <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
              
              {/* Dynamic Status Box */}
              <div className="bg-slate-900/90 rounded-2xl p-6 border border-slate-700 relative overflow-hidden">
                <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                  <div className="flex items-center gap-2">
                    <Activity className="w-4 h-4 text-emerald-400 animate-pulse" />
                    <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider">
                      Live CNN Inference Stream
                    </span>
                  </div>
                  <span className="text-xs font-mono text-slate-400">
                    Latency: {birdSamples[selectedSample].latency}
                  </span>
                </div>

                <div className="py-5 space-y-4">
                  <div>
                    <div className="text-xs text-slate-400">Predicted Class:</div>
                    <div className="text-2xl font-extrabold text-white mt-0.5">
                      {birdSamples[selectedSample].behavior}
                    </div>
                  </div>

                  {/* Confidence Progress Bar */}
                  <div className="space-y-1.5">
                    <div className="flex justify-between text-xs font-semibold">
                      <span className="text-slate-300">Classification Confidence</span>
                      <span className="text-emerald-400 font-mono font-bold">
                        {birdSamples[selectedSample].confidence}%
                      </span>
                    </div>
                    <div className="w-full h-3 bg-slate-800 rounded-full overflow-hidden">
                      <motion.div
                        key={selectedSample}
                        initial={{ width: 0 }}
                        animate={{ width: `${birdSamples[selectedSample].confidence}%` }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="h-full bg-gradient-to-r from-emerald-500 to-cyan-400 rounded-full"
                      />
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed pt-2">
                    {birdSamples[selectedSample].description}
                  </p>
                </div>

                {/* Feature extraction vectors */}
                <div className="pt-4 border-t border-slate-800 space-y-2">
                  <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                    Extracted CNN Feature Representations:
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {birdSamples[selectedSample].features.map((feat, fIdx) => (
                      <span
                        key={fIdx}
                        className="inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-950/40 border border-emerald-500/30 text-emerald-300 text-xs rounded-lg font-medium"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                        <span>{feat}</span>
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Insight Footer */}
              <div className="bg-slate-800/40 rounded-xl p-3 border border-slate-700/60 text-xs text-slate-400 flex items-center justify-between">
                <span>Automated image classification supporting remote wildlife ecological research.</span>
                <span className="font-semibold text-emerald-400">WCS India Project</span>
              </div>

            </div>
          </motion.div>
        )}

      </div>
    </section>
  );
}
