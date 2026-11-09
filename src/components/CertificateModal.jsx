import React, { useEffect, useState } from 'react';
import { X, Download, ExternalLink, ZoomIn, ZoomOut, RotateCcw, CheckCircle, ShieldCheck } from 'lucide-react';

export default function CertificateModal({ certificate, onClose }) {
  const [zoomLevel, setZoomLevel] = useState(1);

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    // Prevent background scrolling
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [onClose]);

  if (!certificate) return null;

  const handleZoomIn = () => setZoomLevel((prev) => Math.min(prev + 0.25, 2.5));
  const handleZoomOut = () => setZoomLevel((prev) => Math.max(prev - 0.25, 0.75));
  const handleResetZoom = () => setZoomLevel(1);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={certificate.title}
    >
      <div
        className="relative bg-[#101827] text-white w-full max-w-4xl max-h-[92vh] rounded-2xl border border-slate-700 shadow-2xl flex flex-col overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-slate-800 bg-[#151F32]">
          <div className="text-left pr-4">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span className="text-xs font-semibold text-emerald-400 uppercase tracking-wider">
                Official Credential Verification
              </span>
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-white mt-0.5 truncate max-w-lg">
              {certificate.title}
            </h3>
            <p className="text-xs text-slate-400">
              {certificate.issuer} • {certificate.date}
            </p>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={certificate.downloadUrl}
              download={`${certificate.title.replace(/[^a-zA-Z0-9]/g, '_')}.png`}
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold bg-[#3B82F6] hover:bg-blue-600 rounded-lg text-white transition-colors"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download File</span>
            </a>
            <button
              onClick={onClose}
              className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors"
              aria-label="Close dialog"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Image Viewer Area */}
        <div className="relative flex-1 overflow-auto bg-slate-950/90 flex items-center justify-center p-4 min-h-[320px] max-h-[62vh]">
          <img
            src={certificate.image}
            alt={certificate.title}
            style={{ transform: `scale(${zoomLevel})` }}
            className="max-h-[58vh] max-w-full object-contain rounded-lg shadow-lg transition-transform duration-200 select-none cursor-grab"
          />

          {/* Floating Zoom Controls */}
          <div className="absolute bottom-4 right-4 flex items-center gap-1 bg-slate-900/90 border border-slate-700 rounded-lg p-1 text-slate-300 backdrop-blur-xs">
            <button
              onClick={handleZoomOut}
              className="p-1.5 hover:text-white hover:bg-slate-800 rounded"
              title="Zoom Out"
            >
              <ZoomOut className="w-4 h-4" />
            </button>
            <span className="text-xs px-2 font-mono">
              {Math.round(zoomLevel * 100)}%
            </span>
            <button
              onClick={handleZoomIn}
              className="p-1.5 hover:text-white hover:bg-slate-800 rounded"
              title="Zoom In"
            >
              <ZoomIn className="w-4 h-4" />
            </button>
            <button
              onClick={handleResetZoom}
              className="p-1.5 hover:text-white hover:bg-slate-800 rounded ml-1"
              title="Reset Zoom"
            >
              <RotateCcw className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="px-5 py-3.5 bg-[#151F32] border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-300">
          <div className="text-left w-full sm:w-auto">
            <span className="text-slate-400 font-medium">Credential Reference: </span>
            <span className="font-mono text-white bg-slate-800 px-2 py-0.5 rounded border border-slate-700">
              {certificate.credentialId || 'Direct Institutional Verification'}
            </span>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
            <a
              href={certificate.downloadUrl}
              download
              className="sm:hidden inline-flex items-center justify-center gap-1.5 w-full py-2 px-4 text-xs font-semibold bg-[#3B82F6] hover:bg-blue-600 rounded-lg text-white"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download File</span>
            </a>
            <button
              onClick={onClose}
              className="px-4 py-1.5 rounded-lg border border-slate-700 text-slate-300 hover:text-white hover:bg-slate-800 transition-colors"
            >
              Close
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
