import React from 'react';

const steps = [
  {
    number: '1',
    title: 'اختر ما تريد شراءه',
    desc: 'تسوق من متاجرك المفضلة واختر شهد عند الدفع.',
  },
  {
    number: '2',
    title: 'ادفع الربع الأول فقط',
    desc: 'سدّد 25% من قيمة مشترياتك فوراً.',
  },
  {
    number: '3',
    title: 'والباقي على 3 أقساط',
    desc: 'قسّم المتبقي على 3 شهور بدون أي فوائد أو رسوم خفية.',
  },
];

const HowItWorks: React.FC = () => {
  return (
    <section className="py-20 px-4 bg-white/50">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-16 slide-up" style={{ animationDelay: '0.6s' }}>
          كيف تعمل شهد؟
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="relative text-center p-6 rounded-2xl hover:bg-white hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 slide-up"
              style={{ animationDelay: `${0.7 + index * 0.1}s` }}
            >
              <div className="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-6">
                {step.number}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{step.title}</h3>
              <p className="text-gray-600 leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
