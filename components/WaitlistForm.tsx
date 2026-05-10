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
      <div className="max-w-md mx-auto bg-white p-8 rounded-3xl shadow-xl shadow-primary/5 border border-primary/10 text-center animate-fade-in">
        <div className="w-20 h-20 bg-green-50 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
          </svg>
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-2">شكراً لانضمامك!</h3>
        <p className="text-gray-600">سنتواصل معك عند الإطلاق 🎉</p>
      </div>
    );
  }

  return (
    <div className="max-w-md mx-auto bg-white p-8 md:p-10 rounded-3xl shadow-2xl shadow-primary/10 border border-gray-100 slide-up" style={{ animationDelay: '0.5s' }}>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
            رقم الهاتف
          </label>
          <input
            id="phone"
            type="tel"
            placeholder="07XXXXXXXX"
            required
            className="w-full text-left"
            dir="ltr"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          />
        </div>

        <div>
          <label htmlFor="store" className="block text-sm font-semibold text-gray-700 mb-2">
            اختر المتجر المفضل
          </label>
          <input
            id="store"
            type="text"
            placeholder="مثلاً: زارا، أيكيا..."
            required
            className="w-full"
            value={formData.store}
            onChange={(e) => setFormData({ ...formData, store: e.target.value })}
          />
        </div>

        <div>
          <label htmlFor="city" className="block text-sm font-semibold text-gray-700 mb-2">
            المدينة
          </label>
          <select
            id="city"
            className="w-full appearance-none bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23666%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E')] bg-[length:12px] bg-[position:left_1rem_center] bg-no-repeat"
            value={formData.city}
            onChange={(e) => setFormData({ ...formData, city: e.target.value })}
          >
            <option value="عمّان">عمّان</option>
            <option value="إربد">إربد</option>
            <option value="الزرقاء">الزرقاء</option>
            <option value="أخرى">أخرى</option>
          </select>
        </div>

        {error && (
          <p className="text-red-500 text-sm font-medium animate-pulse text-center">
            {error}
          </p>
        )}

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-primary hover:bg-primary-dark text-white font-bold py-4 rounded-xl shadow-lg shadow-primary/20 transition-all flex items-center justify-center space-x-2"
        >
          {loading ? (
            <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
          ) : (
            <span>سجّل اهتمامك</span>
          )}
        </button>
      </form>
    </div>
  );
};

export default WaitlistForm;
