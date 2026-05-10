import React from 'react';
import Image from 'next/image';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-24 pb-12 text-center px-4 overflow-hidden">
      {/* Decorative Blobs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-50 rounded-full blur-3xl -z-10 opacity-60 animate-pulse"></div>
      <div className="absolute -bottom-20 -left-20 w-[400px] h-[400px] bg-emerald-100/50 rounded-full blur-3xl -z-10"></div>

      <div className="max-w-4xl mx-auto">
        <div className="flex justify-center mb-12 animate-fade-in-down">
          <Image 
            src="/images/logo_shahadd.png" 
            alt="Logo Shahed" 
            width={120} 
            height={48} 
            className="h-12 w-auto object-contain"
          />
        </div>
        
        <div className="space-y-6 mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-emerald-950 leading-tight animate-fade-in-up">
            اشترِ الحين، <span className="text-emerald-600">ادفع على راحتك</span>
          </h1>
          <h2 className="text-xl md:text-2xl text-emerald-800/60 font-medium tracking-tight animate-fade-in-up animate-stagger-1">
            Buy Now, Pay in 4 — Zero Interest
          </h2>
        </div>
        
        <p className="text-lg md:text-xl text-emerald-900/70 max-w-2xl mx-auto leading-relaxed animate-fade-in-up animate-stagger-2">
          شهد هي طريقتك الجديدة للتسوق في الأردن. قسم مشترياتك على 4 أقساط سهلة بدون أي فوائد أو رسوم خفية.
        </p>
      </div>
    </section>
  );
};

export default Hero;
