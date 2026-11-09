import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  Copy, 
  Check, 
  ArrowUpRight, 
  MessageSquare,
  CheckCircle2,
  Clock,
  Sparkles,
  Award,
  ShieldCheck,
  TrendingUp,
  Cpu
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { LinkedinIcon } from './Icons';
import { personalInfo } from '../data/portfolioData';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [copiedField, setCopiedField] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  const triggerConfetti = () => {
    confetti({
      particleCount: 100,
      spread: 80,
      origin: { y: 0.6 },
      colors: ['#3B82F6', '#101827', '#60A5FA', '#34D399', '#F59E0B']
    });
  };

  const handleCopy = (text, fieldName) => {
    navigator.clipboard.writeText(text);
    setCopiedField(fieldName);
    triggerConfetti();
    setTimeout(() => setCopiedField(null), 2500);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    
    triggerConfetti();
    setSubmitted(true);

    const mailtoUrl = `mailto:${personalInfo.email}?subject=${encodeURIComponent(
      formData.subject || `Professional Inquiry from ${formData.name}`
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;
    
    setTimeout(() => {
      window.location.href = mailtoUrl;
    }, 400);
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-[#FFFFFF] text-[#101827] selection:bg-[#3B82F6] selection:text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14 text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-50 text-blue-700 text-xs font-bold tracking-wide uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5 text-blue-600" />
            <span>Initiate Collaboration</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#101827]">
            Let's Build Strategic Value Together
          </h2>
          <p className="mt-4 text-lg text-slate-600 leading-relaxed">
            I am actively open to discussing roles in Marketing, Business Analytics, Supply Chain Operations, and Strategic Business Development.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 text-left items-start">
          
          {/* Left Column: Direct Info Cards & Value Prop (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Email Card */}
            <motion.div 
              whileHover={{ y: -3 }}
              className="bg-[#F3F5F8] rounded-2xl p-6 border border-slate-200/90 hover:border-blue-300 transition-all shadow-xs"
            >
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3.5">
                  <div className="w-12 h-12 rounded-xl bg-blue-500/10 text-[#3B82F6] flex items-center justify-center border border-blue-500/20">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                      Email Address
                    </h4>
                    <a
                      href={`mailto:${personalInfo.email}`}
                      className="text-base sm:text-lg font-bold text-[#101827] hover:text-blue-600 transition-colors block break-all mt-0.5"
                    >
                      {personalInfo.email}
                    </a>
                  </div>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-slate-200/70 flex items-center justify-between">
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-white bg-[#3B82F6] hover:bg-blue-600 px-3.5 py-2 rounded-xl transition-colors shadow-2xs"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>Email Me</span>
                </a>
                <button
                  onClick={() => handleCopy(personalInfo.email, 'email')}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-600 hover:text-slate-900 bg-white px-3 py-1.5 rounded-lg border border-slate-200 transition-colors"
                >
                  {copiedField === 'email' ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      <span className="text-emerald-600 font-bold">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-slate-400" />
                      <span>Copy Email</span>
                    </>
                  )}
                </button>
              </div>
            </motion.div>

            {/* Phone Card */}
            <motion.div 
              whileHover={{ y: -3 }}
              className="bg-[#F3F5F8] rounded-2xl p-6 border border-slate-200/90 hover:border-emerald-300 transition-all shadow-xs"
            >
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3.5">
                  <div className="w-12 h-12 rounded-xl bg-emerald-500/10 text-emerald-600 flex items-center justify-center border border-emerald-500/20">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                      Direct Phone
                    </h4>
                    <a
                      href={`tel:${personalInfo.phone}`}
                      className="text-base sm:text-lg font-bold text-[#101827] hover:text-emerald-600 transition-colors block font-mono mt-0.5"
                    >
                      {personalInfo.displayPhone}
                    </a>
                  </div>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-slate-200/70 flex items-center justify-between">
                <a
                  href={`tel:${personalInfo.phone}`}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-800 bg-white hover:bg-slate-50 border border-slate-300 px-3.5 py-2 rounded-xl transition-colors shadow-2xs"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Call Directly</span>
                </a>
                <button
                  onClick={() => handleCopy(personalInfo.phone, 'phone')}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-600 hover:text-slate-900 bg-white px-3 py-1.5 rounded-lg border border-slate-200 transition-colors"
                >
                  {copiedField === 'phone' ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      <span className="text-emerald-600 font-bold">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-slate-400" />
                      <span>Copy Number</span>
                    </>
                  )}
                </button>
              </div>
            </motion.div>

            {/* LinkedIn Card */}
            <motion.div 
              whileHover={{ y: -3 }}
              className="bg-[#101827] text-white rounded-2xl p-6 border border-slate-800 shadow-xl"
            >
              <div className="flex items-start gap-3.5">
                <div className="w-12 h-12 rounded-xl bg-blue-600 text-white flex items-center justify-center shrink-0 shadow-md">
                  <LinkedinIcon className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    LinkedIn Network
                  </h4>
                  <div className="text-base font-bold text-white mt-0.5">
                    mohit-sihag-b66566228
                  </div>
                  <p className="text-xs text-slate-300 mt-1">
                    Connect for professional networking, recommendations, and portfolio reviews.
                  </p>
                </div>
              </div>
              <div className="mt-5 pt-4 border-t border-slate-800">
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 w-full py-2.5 px-4 text-xs font-bold text-white bg-[#3B82F6] hover:bg-blue-600 rounded-xl transition-colors shadow-md"
                >
                  <span>Connect on LinkedIn</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </motion.div>

            {/* Response SLA Note */}
            <div className="flex items-center gap-3 px-4 py-3 rounded-2xl bg-blue-50/70 border border-blue-100 text-xs text-blue-900 font-medium">
              <Clock className="w-4 h-4 text-blue-600 shrink-0" />
              <span>Replies guaranteed within 24 hours for verified enterprise inquiries.</span>
            </div>

          </div>

          {/* Right Column: Contact Form (7 Cols) */}
          <div className="lg:col-span-7 bg-[#F3F5F8] border border-slate-200/90 rounded-3xl p-6 sm:p-8 lg:p-10 shadow-sm">
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-[#101827]">
                Send a Direct Message
              </h3>
              <p className="text-sm text-slate-600 mt-1">
                Fill out the form below to initiate an email conversation directly with Mohit.
              </p>
            </div>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-emerald-50 border border-emerald-200 rounded-2xl p-8 text-center space-y-4"
              >
                <div className="w-14 h-14 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto shadow-sm">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="text-xl font-bold text-emerald-900">
                  Message Dispatched!
                </h4>
                <p className="text-sm text-emerald-800 max-w-md mx-auto leading-relaxed">
                  Your mail client has been loaded with your message to <strong>{personalInfo.email}</strong>. Mohit will follow up promptly.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-4 py-2 text-xs font-bold text-emerald-800 bg-white border border-emerald-300 rounded-xl hover:bg-emerald-100 transition-colors"
                >
                  Send another message
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Talent Acquisition / Hiring Team"
                      className="w-full px-4 py-3.5 bg-white border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-slate-900 placeholder:text-slate-400 shadow-2xs"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      Your Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="name@company.com"
                      className="w-full px-4 py-3.5 bg-white border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-slate-900 placeholder:text-slate-400 shadow-2xs"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                    Subject / Discussion Topic
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="e.g. Marketing Strategy & Operations Role / Interview"
                    className="w-full px-4 py-3.5 bg-white border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-slate-900 placeholder:text-slate-400 shadow-2xs"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                    Message Details *
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Introduce your team, project requirements, or discuss specific opportunities..."
                    className="w-full px-4 py-3.5 bg-white border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-slate-900 placeholder:text-slate-400 resize-none shadow-2xs"
                  />
                </div>

                <div className="pt-2">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className="inline-flex items-center justify-center gap-2.5 w-full sm:w-auto px-8 py-3.5 bg-[#101827] hover:bg-slate-800 text-white font-bold text-sm rounded-xl shadow-lg transition-all"
                  >
                    <span>Send Inquiry to Mohit</span>
                    <Send className="w-4 h-4 text-blue-400" />
                  </motion.button>
                </div>
              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
}
