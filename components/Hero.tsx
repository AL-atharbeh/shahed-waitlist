import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="pt-20 pb-12 text-center px-4">
      <div className="max-w-3xl mx-auto">
        <h1 className="font-display text-5xl md:text-7xl text-primary mb-8 slide-up" style={{ animationDelay: '0.1s' }}>
          شهد
        </h1>

        <div className="space-y-4 mb-10">
          {/* <h2 className="text-3xl md:text-5xl font-bold text-gray-900 slide-up" style={{ animationDelay: '0.2s' }}>
            اشترِ الحين، ادفع على راحتك
          </h2> */}
          <h3 className="text-xl md:text-2xl text-gray-500 font-medium tracking-wide slide-up" style={{ animationDelay: '0.3s' }}>
            Buy Now, Pay in 4 — Zero Interest
          </h3>
        </div>

        <p className="text-lg md:text-xl text-gray-600 mb-8 slide-up" style={{ animationDelay: '0.4s' }}>
          كن من الأوائل في الأردن للحصول على تجربة تسوق استثنائية
        </p>
      </div>
    </section>
  );
};

export default Hero;
