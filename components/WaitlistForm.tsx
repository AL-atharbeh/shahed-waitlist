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
      setError('يرجى إدخال رقم هاتف صح (07XXXXXXXX)');
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
      else setError(data.message || 'صار خطأ بسيط، جرب كمان شوي');
    } catch (err) {
      setError('تأكد من النت عندك وجرب مرة ثانية');
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <div className="max-w-md mx-auto py-12 px-6 text-center fade-in">
        <div className="text-4xl mb-4">🎉</div>
        <h3 className="text-2xl font-bold text-gray-900 mb-2">تم! سجلنا اسمك عندنا</h3>
        <p className="text-gray-500">رح نتواصل معك على الواتساب قريباً جداً.</p>
      </div>
    );
  }

  return (
    <div className="max-w-md mx-auto px-6 pb-12 fade-in">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-xs font-bold text-gray-400 uppercase mb-2 mr-1">رقم تلفونك</label>
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
          <label className="block text-xs font-bold text-gray-400 uppercase mb-2 mr-1">شو المحل اللي حاب تشتري منه؟</label>
          <input
            type="text"
            placeholder="مثلاً: زارا، أيكيا، سيتي مول..."
            required
            value={formData.store}
            onChange={(e) => setFormData({ ...formData, store: e.target.value })}
          />
        </div>

        <div>
          <label className="block text-xs font-bold text-gray-400 uppercase mb-2 mr-1">إنت بأي محافظة؟</label>
          <select
            value={formData.city}
            onChange={(e) => setFormData({ ...formData, city: e.target.value })}
          >
            <option value="عمّان">عمّان</option>
            <option value="إربد">إربد</option>
            <option value="الزرقاء">الزرقاء</option>
            <option value="البلقاء">البلقاء</option>
            <option value="مادبا">مادبا</option>
            <option value="الكرك">الكرك</option>
            <option value="معان">معان</option>
            <option value="العقبة">العقبة</option>
            <option value="المفرق">المفرق</option>
            <option value="جرش">جرش</option>
            <option value="عجلون">عجلون</option>
            <option value="الطفيلة">الطفيلة</option>
          </select>
        </div>

        {error && <p className="text-red-500 text-sm font-bold text-center">{error}</p>}

        <button type="submit" disabled={loading} className="btn-primary w-full mt-2">
          {loading ? 'جاري التحميل...' : 'سجل معنا هسا'}
        </button>
      </form>
    </div>
  );
};

export default WaitlistForm;
