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

    const phoneRegex = /^07[789]\d{7}$/;
    if (!phoneRegex.test(formData.phone)) {
      setError('يرجى إدخال رقم هاتف صحيح 07XXXXXXXX');
      setLoading(false);
      return;
    }

    try {
      const response = await fetch('/api/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      if (data.success) setSuccess(true);
      else setError(data.message || 'حدث خطأ ما');
    } catch (err) {
      setError('يرجى التحقق من اتصالك بالإنترنت');
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <div className="max-w-md mx-auto py-12 px-6 text-center fade-in">
        <div className="text-4xl mb-4">🎉</div>
        <h3 className="text-2xl font-bold text-gray-900 mb-2">تم تسجيلك بنجاح!</h3>
        <p className="text-gray-500">سنتواصل معك عبر واتساب قريباً جداً.</p>
      </div>
    );
  }

  return (
    <div className="max-w-md mx-auto px-6 pb-12 fade-in">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-xs font-bold text-gray-400 uppercase mb-2 mr-1">رقم الهاتف</label>
          <input
            type="tel"
            placeholder="07XXXXXXXX"
            required
            dir="ltr"
            className="font-sans"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          />
        </div>

        <div>
          <label className="block text-xs font-bold text-gray-400 uppercase mb-2 mr-1">المتجر المفضل</label>
          <input
            type="text"
            placeholder="مثلاً: زارا، أيكيا..."
            required
            value={formData.store}
            onChange={(e) => setFormData({ ...formData, store: e.target.value })}
          />
        </div>

        <div>
          <label className="block text-xs font-bold text-gray-400 uppercase mb-2 mr-1">المدينة</label>
          <select
            value={formData.city}
            onChange={(e) => setFormData({ ...formData, city: e.target.value })}
          >
            <option value="عمّان">عمّان</option>
            <option value="إربد">إربد</option>
            <option value="الزرقاء">الزرقاء</option>
            <option value="أخرى">أخرى</option>
          </select>
        </div>

        {error && <p className="text-red-500 text-sm font-bold text-center">{error}</p>}

        <button type="submit" disabled={loading} className="btn-primary w-full mt-2">
          {loading ? 'جاري التحميل...' : 'سجّل اهتمامك الآن'}
        </button>
      </form>
    </div>
  );
};

export default WaitlistForm;
