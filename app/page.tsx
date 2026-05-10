import Hero from "@/components/Hero";
import WaitlistForm from "@/components/WaitlistForm";
import HowItWorks from "@/components/HowItWorks";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col bg-[#ffffff] selection:bg-emerald-100 selection:text-emerald-900">
      {/* Dynamic Background Elements */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-50 rounded-full blur-[120px] opacity-70"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-emerald-100/40 rounded-full blur-[120px] opacity-70"></div>
      </div>

      <div className="flex-grow">
        <Hero />
        
        <section className="px-4 pb-24 relative">
          {/* Subtle phone mockup or decorative element if needed */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -z-10 opacity-5 blur-2xl">
            <div className="w-80 h-80 bg-emerald-600 rounded-full"></div>
          </div>
          <WaitlistForm />
        </section>

        <HowItWorks />
        
        {/* Call to Action or extra info section */}
        <section className="py-20 px-4 text-center">
          <div className="max-w-4xl mx-auto glass-card p-12 rounded-[3.5rem] bg-emerald-950 text-white overflow-hidden relative">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-emerald-800/20 to-transparent"></div>
            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">جاهز لتغيير طريقة تسوقك؟</h2>
              <p className="text-emerald-50/70 text-lg md:text-xl mb-10 max-w-2xl mx-auto font-medium">
                انضم إلى آلاف المستخدمين الذين ينتظرون شهد في الأردن. التسوق لم يعد كما كان من قبل.
              </p>
              <div className="flex justify-center">
                <div className="h-16 w-16 bg-white/10 rounded-full flex items-center justify-center animate-bounce">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7-7-7"></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <footer className="py-16 px-4 border-t border-emerald-50 bg-white">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col items-center md:items-start gap-4">
            <Image 
              src="/images/logo_shahadd.png" 
              alt="Shahed Logo" 
              width={100} 
              height={40} 
              className="h-10 w-auto grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all cursor-pointer"
            />
            <p className="text-emerald-900/40 text-sm font-bold">
              شهد © 2025 — جميع الحقوق محفوظة
            </p>
          </div>
          
          <div className="flex items-center gap-8">
            <a 
              href="https://instagram.com/shahed.jo" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group flex items-center gap-3 text-emerald-900/50 hover:text-emerald-600 transition-all font-bold"
            >
              <span>@shahed.jo</span>
              <div className="w-10 h-10 bg-emerald-50 group-hover:bg-emerald-100 rounded-full flex items-center justify-center transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </div>
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
