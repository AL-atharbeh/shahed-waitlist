import Hero from "@/components/Hero";
import WaitlistForm from "@/components/WaitlistForm";
import HowItWorks from "@/components/HowItWorks";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col bg-white">
      <div className="flex-grow">
        <Hero />
        <WaitlistForm />
        <HowItWorks />
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
            شهد © 2025 — جميع الحقوق محفوظة
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
