import React from 'react';

interface HowItWorksProps {
  lang: 'ar' | 'en';
}

const HowItWorks: React.FC<HowItWorksProps> = ({ lang }) => {
  const content = {
    ar: {
      title: 'كيف بتستخدم شهد؟',
      steps: [
        {
          title: 'تسوق من متاجرك اللي بتحبها',
          desc: 'كل اللي عليك تختار "شهد" لما توصل للدفع في المحلات المشتركة.',
        },
        {
          title: 'ادفع الربع بس',
          desc: 'بتدفع أول دفعة (25%) من قيمة مشترياتك وأنت بالمحل.',
        },
        {
          title: 'والباقي قسّمه على 3 شهور',
          desc: 'الباقي بيتوزع على 3 دفعات شهرية، بدون فوائد وبدون أي زيادة.',
        },
      ]
    },
    en: {
      title: 'How to use Shahed?',
      steps: [
        {
          title: 'Shop at your favorite stores',
          desc: 'Just choose "Shahed" at checkout at any participating store.',
        },
        {
          title: 'Pay only 25%',
          desc: 'Pay the first installment (25%) of your purchase instantly.',
        },
        {
          title: 'Divide the rest over 3 months',
          desc: 'The remaining balance is split into 3 monthly payments, with zero interest.',
        },
      ]
    }
  };

  const t = content[lang];

  return (
    <section className="py-12 px-6 bg-gray-50">
      <div className="max-w-md mx-auto">
        <h2 className="text-2xl font-bold text-gray-900 mb-10 text-center">
          {t.title}
        </h2>
        
        <div className="space-y-8">
          {t.steps.map((step, index) => (
            <div key={index} className="flex items-start gap-5">
              <div className="flex-shrink-0 w-8 h-8 bg-emerald-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                {index + 1}
              </div>
              <div className={lang === 'ar' ? 'text-right' : 'text-left'}>
                <h3 className="font-bold text-gray-900 mb-1">{step.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
