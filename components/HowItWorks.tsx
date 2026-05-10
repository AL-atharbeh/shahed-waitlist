import React from 'react';

const steps = [
  {
    number: '01',
    title: 'اختر مشترياتك',
    desc: 'تسوق من أي متجر تحبه في الأردن واختر "شهد" كوسيلة دفع.',
  },
  {
    number: '02',
    title: 'ادفع الربع فقط',
    desc: 'قم بسداد 25% من القيمة الإجمالية عند الشراء مباشرة.',
  },
  {
    number: '03',
    title: 'قسّم الباقي',
    desc: 'ادفع المتبقي على 3 دفعات شهرية متساوية بدون أي فوائد.',
  },
];

const HowItWorks: React.FC = () => {
  return (
    <section className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20 animate-fade-in-up">
          <h2 className="text-3xl md:text-5xl font-bold text-emerald-950 mb-4">
            كيف تعمل <span className="text-emerald-600">شهد؟</span>
          </h2>
          <p className="text-emerald-800/60 max-w-xl mx-auto">
            خطوات بسيطة تفصلك عن امتلاك ما تريد والدفع لاحقاً بكل سهولة وأمان
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden md:block absolute top-1/2 left-[15%] right-[15%] h-0.5 bg-gradient-to-r from-emerald-100 via-emerald-200 to-emerald-100 -z-10"></div>
          
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="group glass-card p-10 rounded-[3rem] text-center hover:bg-emerald-50/50 transition-all duration-500 animate-fade-in-up"
              style={{ animationDelay: `${0.4 + index * 0.1}s` }}
            >
              <div className="w-16 h-16 bg-emerald-600 text-white rounded-2xl flex items-center justify-center text-2xl font-bold mx-auto mb-8 rotate-3 group-hover:rotate-0 transition-transform duration-500 shadow-lg shadow-emerald-600/20">
                {step.number}
              </div>
              <h3 className="text-2xl font-bold text-emerald-950 mb-4">{step.title}</h3>
              <p className="text-emerald-800/70 leading-relaxed font-medium">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
