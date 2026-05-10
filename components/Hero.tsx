import React from 'react';
import Image from 'next/image';

const Hero: React.FC = () => {
  return (
    <section className="pt-16 pb-8 text-center px-6">
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
        
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
          اشترِ اللي <span className="text-emerald-600">نفسك فيه</span>، وادفع على راحتك
        </h1>
        
        <p className="text-lg text-gray-500 mb-2 font-medium">
          Buy Now, Pay Later in 4 — Zero Interest
        </p>
        
        <p className="text-base text-gray-400">
          رح نكون معكم بالأردن قريباً جداً. انضم للقائمة وخليك أول واحد بيعرف.
        </p>
      </div>
    </section>
  );
};

export default Hero;
