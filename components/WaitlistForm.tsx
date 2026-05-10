'use client';

import React, { useState } from 'react';

interface WaitlistFormProps {
  lang: 'ar' | 'en';
}

const WaitlistForm: React.FC<WaitlistFormProps> = ({ lang }) => {
  const [formData, setFormData] = useState({
    phone: '',
    store: '',
    city: 'عمّان',
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const content = {
    ar: {
      phoneLabel: 'رقم تلفونك',
      storeLabel: 'شو المحل اللي حاب تشتري منه؟',
      cityLabel: 'إنت بأي محافظة؟',
      submitBtn: 'سجل معنا هسا',
      loading: 'جاري التحميل...',
      successTitle: 'تم! سجلنا اسمك عندنا',
      successSub: 'رح نتواصل معك على الواتساب قريباً جداً.',
      errorPhone: 'يرجى إدخال رقم هاتف صح (07XXXXXXXX)',
      errorGeneral: 'صار خطأ بسيط، جرب كمان شوي',
      errorNetwork: 'تأكد من النت عندك وجرب مرة ثانية',
      cities: ["عمّان", "إربد", "الزرقاء", "البلقاء", "مادبا", "الكرك", "معان", "العقبة", "المفرق", "جرش", "عجلون", "الطفيلة"]
    },
    en: {
      phoneLabel: 'Your Phone Number',
      storeLabel: 'Which store do you want to buy from?',
      cityLabel: 'Which city are you in?',
      submitBtn: 'Join Now',
      loading: 'Loading...',
      successTitle: "Success! You're on the list",
      successSub: "We'll contact you via WhatsApp very soon.",
      errorPhone: 'Please enter a valid phone number (07XXXXXXXX)',
      errorGeneral: 'Something went wrong, please try again',
      errorNetwork: 'Check your internet connection and try again',
      cities: ["Amman", "Irbid", "Zarqa", "Balqa", "Madaba", "Karak", "Ma'an", "Aqaba", "Mafraq", "Jerash", "Ajloun", "Tafileh"]
    }
  };

  const t = content[lang];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    const phoneRegex = /^07[789]\d{7}$/;
    if (!phoneRegex.test(formData.phone)) {
      setError(t.errorPhone);
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
      else setError(t.errorGeneral);
    } catch (err) {
      setError(t.errorNetwork);
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <div className="max-w-md mx-auto py-12 px-6 text-center fade-in">
        <div className="text-4xl mb-4">🎉</div>
        <h3 className="text-2xl font-bold text-gray-900 mb-2">{t.successTitle}</h3>
        <p className="text-gray-500">{t.successSub}</p>
      </div>
    );
  }

  return (
    <div className="max-w-md mx-auto px-6 pb-12 fade-in">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className={`block text-xs font-bold text-gray-400 uppercase mb-2 ${lang === 'ar' ? 'mr-1' : 'ml-1'}`}>{t.phoneLabel}</label>
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
          <label className={`block text-xs font-bold text-gray-400 uppercase mb-2 ${lang === 'ar' ? 'mr-1' : 'ml-1'}`}>{t.storeLabel}</label>
          <input
            type="text"
            placeholder={lang === 'ar' ? "مثلاً: زارا، أيكيا، سيتي مول..." : "e.g. Zara, IKEA, City Mall..."}
            required
            value={formData.store}
            onChange={(e) => setFormData({ ...formData, store: e.target.value })}
          />
        </div>

        <div>
          <label className={`block text-xs font-bold text-gray-400 uppercase mb-2 ${lang === 'ar' ? 'mr-1' : 'ml-1'}`}>{t.cityLabel}</label>
          <select
            value={formData.city}
            onChange={(e) => setFormData({ ...formData, city: e.target.value })}
          >
            {t.cities.map((city) => (
              <option key={city} value={city}>{city}</option>
            ))}
          </select>
        </div>

        {error && <p className="text-red-500 text-sm font-bold text-center">{error}</p>}

        <button type="submit" disabled={loading} className="btn-primary w-full mt-2">
          {loading ? t.loading : t.submitBtn}
        </button>
      </form>
    </div>
  );
};

export default WaitlistForm;
