import React from 'react';

const steps = [
  {
    title: 'تسوق من متاجرك المفضلة',
    desc: 'اختر شهد عند الدفع في أي متجر مشترك.',
  },
  {
    title: 'ادفع 25% فقط',
    desc: 'سدّد الربع الأول من قيمة مشترياتك فوراً.',
  },
  {
    title: 'والباقي على 3 شهور',
    desc: 'قسّم المتبقي على 3 أقساط بدون فوائد.',
  },
];

const HowItWorks: React.FC = () => {
  return (
    <section className="py-12 px-6 bg-gray-50">
      <div className="max-w-md mx-auto">
        <h2 className="text-2xl font-bold text-gray-900 mb-10 text-center">
          كيف تستخدم <span className="text-emerald-600">شهد؟</span>
        </h2>
        
        <div className="space-y-8">
          {steps.map((step, index) => (
            <div key={index} className="flex items-start gap-5">
              <div className="flex-shrink-0 w-8 h-8 bg-emerald-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                {index + 1}
              </div>
              <div>
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
