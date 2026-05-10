'use client';

import React, { useState } from 'react';

const WaitlistForm: React.FC = () => {
  const [formData, setFormData] = useState({
    phone: '',
    store: '',
    city: 'عمّان',
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    // Jordanian phone validation (07XXXXXXXX)
    const phoneRegex = /^07[789]\d{7}$/;
    if (!phoneRegex.test(formData.phone)) {
      setError('يرجى إدخال رقم هاتف أردني صحيح (مثلاً: 079XXXXXXX)');
      setLoading(false);
      return;
    }

    try {
      const response = await fetch('/api/waitlist', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        setSuccess(true);
      } else {
        setError(data.message || 'حدث خطأ ما، يرجى المحاولة لاحقاً');
      }
    } catch (err) {
      setError('تعذر الاتصال بالخادم. يرجى التحقق من اتصالك بالإنترنت.');
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <div className="max-w-md mx-auto glass-card p-10 rounded-[2.5rem] text-center animate-fade-in-up">
        <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7"></path>
          </svg>
        </div>
        <h3 className="text-2xl font-bold text-emerald-950 mb-3">شكراً لانضمامك!</h3>
        <p className="text-emerald-800/70">سنتواصل معك عبر واتساب عند الإطلاق 🎉</p>
      </div>
    );
  }

  return (
    <div className="max-w-md mx-auto glass-card p-8 md:p-12 rounded-[2.5rem] animate-fade-in-up animate-stagger-3">
      <form onSubmit={handleSubmit} className="space-y-7">
        <div className="space-y-2">
          <label htmlFor="phone" className="block text-sm font-bold text-emerald-950 mr-1">
            رقم الهاتف
          </label>
          <input
            id="phone"
            type="tel"
            placeholder="07XXXXXXXX"
            required
            className="w-full text-left font-sans"
            dir="ltr"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="store" className="block text-sm font-bold text-emerald-950 mr-1">
            المتجر الذي تود الشراء منه
          </label>
          <input
            id="store"
            type="text"
            placeholder="مثلاً: ايكيا، زارا..."
            required
            className="w-full"
            value={formData.store}
            onChange={(e) => setFormData({ ...formData, store: e.target.value })}
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="city" className="block text-sm font-bold text-emerald-950 mr-1">
            المدينة
          </label>
          <div className="relative">
            <select
              id="city"
              className="w-full appearance-none pr-5 pl-12"
              value={formData.city}
              onChange={(e) => setFormData({ ...formData, city: e.target.value })}
            >
              <option value="عمّان">عمّان</option>
              <option value="إربد">إربد</option>
              <option value="الزرقاء">الزرقاء</option>
              <option value="أخرى">أخرى</option>
            </select>
            <div className="absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none text-emerald-600">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </div>
          </div>
        </div>

        {error && (
          <p className="text-red-500 text-sm font-bold text-center animate-pulse">
            {error}
          </p>
        )}

        <button
          type="submit"
          disabled={loading}
          className="btn-primary w-full disabled:opacity-50 disabled:scale-100 flex items-center justify-center gap-3 mt-4"
        >
          {loading ? (
            <div className="w-6 h-6 border-3 border-white/30 border-t-white rounded-full animate-spin"></div>
          ) : (
            <span>انضم لقائمة الانتظار</span>
          )}
        </button>
      </form>
    </div>
  );
};

export default WaitlistForm;
