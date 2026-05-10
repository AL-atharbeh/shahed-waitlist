import React from 'react';
import Image from 'next/image';

interface HeroProps {
  lang: 'ar' | 'en';
}

const Hero: React.FC<HeroProps> = ({ lang }) => {
  const content = {
    ar: {
      title: 'اشترِ اللي نفسك فيه، وادفع على راحتك',
      sub: 'Buy Now, Pay Later in 4 — Zero Interest',
      desc: 'رح نكون معكم بالأردن قريباً جداً. انضم للقائمة وخليك أول واحد بيعرف.',
    },
    en: {
      title: 'Buy what you love, and pay at your convenience',
      sub: 'Buy Now, Pay Later in 4 — Zero Interest',
      desc: "We're coming to Jordan very soon. Join the list and be the first to know.",
    }
  };

  const t = content[lang];

  return (
    <section className="pt-20 pb-8 text-center px-6">
      <div className="max-w-xl mx-auto">
        <div className="flex justify-center mb-10">
          <Image 
            src="/images/logo_shahadd.png" 
            alt="شهد" 
            width={100} 
            height={40} 
            className="h-10 w-auto object-contain"
            priority
          />
        </div>
        
        <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
          {lang === 'ar' ? (
            <>اشترِ اللي <span className="text-emerald-600">نفسك فيه</span>، وادفع على راحتك</>
          ) : (
            <>Buy what you <span className="text-emerald-600">love</span>, pay at your ease</>
          )}
        </h1>
        
        <p className="text-lg text-gray-500 mb-2 font-medium">
          {t.sub}
        </p>
        
        <p className="text-base text-gray-400">
          {t.desc}
        </p>
      </div>
    </section>
  );
};

export default Hero;
