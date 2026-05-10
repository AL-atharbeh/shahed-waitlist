'use client';

import React, { useState, useEffect } from 'react';
import Hero from "@/components/Hero";
import WaitlistForm from "@/components/WaitlistForm";
import HowItWorks from "@/components/HowItWorks";
import Image from "next/image";

export default function Home() {
  const [lang, setLang] = useState<'ar' | 'en'>('ar');

  // Update document direction when language changes
  useEffect(() => {
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
  }, [lang]);

  const toggleLang = () => {
    setLang(prev => prev === 'ar' ? 'en' : 'ar');
  };

  return (
    <main className={`min-h-screen flex flex-col bg-white transition-all duration-300 ${lang === 'ar' ? 'font-sans' : 'font-sans'}`}>
      {/* Floating Language Switcher */}
      <div className={`fixed top-6 ${lang === 'ar' ? 'left-6' : 'right-6'} z-50`}>
        <button
          onClick={toggleLang}
          className="bg-white/80 backdrop-blur-md border border-gray-100 shadow-sm px-4 py-2 rounded-full text-sm font-bold text-emerald-700 hover:bg-emerald-50 transition-all active:scale-95"
        >
          {lang === 'ar' ? 'English' : 'العربية'}
        </button>
      </div>

      <div className="flex-grow">
        <Hero lang={lang} />
        <WaitlistForm lang={lang} />
        <HowItWorks lang={lang} />
      </div>

      <footer className="py-12 px-6 text-center border-t border-gray-50">
        <div className="max-w-md mx-auto space-y-6">
          <div className="flex justify-center opacity-30 grayscale">
            <Image
              src="/images/logo_shahadd.png"
              alt="شهد"
              width={80}
              height={32}
              className="h-8 w-auto object-contain"
            />
          </div>
          <p className="text-gray-400 text-xs font-bold uppercase tracking-widest">
            {lang === 'ar' ? 'شهد © 2026 — جميع الحقوق محفوظة' : 'SHAHED © 2026 — ALL RIGHTS RESERVED'}
          </p>
          <div className="flex justify-center gap-6">
            <a href="https://instagram.com/shahed.jo" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-emerald-600 transition-colors">
              <span className="text-sm">Instagram</span>
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
