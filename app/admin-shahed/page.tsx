'use client';

import React, { useState, useEffect } from 'react';

interface WaitlistEntry {
  phone: string;
  store: string;
  city: string;
  timestamp: string;
}

export default function AdminDashboard() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [data, setData] = useState<WaitlistEntry[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password.trim() === 'A_hmad@99') {
      setIsAuthenticated(true);
      fetchData();
    } else {
      setError('كلمة المرور غير صحيحة');
    }
  };

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await fetch(`/api/admin/waitlist?token=A_hmad@99`);
      const result = await response.json();
      if (Array.isArray(result)) {
        setData(result.reverse()); // Show newest first
      } else {
        setError('تعذر تحميل البيانات');
      }
    } catch (err) {
      setError('خطأ في الاتصال بالسيرفر');
    } finally {
      setLoading(false);
    }
  };

  const downloadCSV = () => {
    const headers = ['Phone', 'Store', 'City', 'Date'];
    const rows = data.map(entry => [
      entry.phone,
      entry.store,
      entry.city,
      new Date(entry.timestamp).toLocaleString('ar-JO')
    ]);
    
    const csvContent = [
      headers.join(','),
      ...rows.map(row => row.map(cell => `"${cell}"`).join(','))
    ].join('\n');

    const blob = new Blob([`\ufeff${csvContent}`], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = `shahed_waitlist_${new Date().toLocaleDateString()}.csv`;
    link.click();
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
        <div className="max-w-md w-full bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
          <h1 className="text-2xl font-bold text-center text-emerald-950 mb-8">لوحة تحكم شهد</h1>
          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">كلمة المرور</label>
              <input
                type="password"
                className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 outline-none focus:border-emerald-500"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="ادخل كلمة المرور"
              />
            </div>
            {error && <p className="text-red-500 text-sm text-center font-bold">{error}</p>}
            <button type="submit" className="w-full bg-emerald-600 text-white font-bold py-3 rounded-xl hover:bg-emerald-700 transition-colors">
              دخول
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 md:px-8" dir="rtl">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-6">
          <div>
            <h1 className="text-3xl font-bold text-emerald-950">قائمة الانتظار</h1>
            <p className="text-gray-500 mt-1">إجمالي المسجلين: {data.length}</p>
          </div>
          <button 
            onClick={downloadCSV}
            className="bg-white border border-emerald-600 text-emerald-600 font-bold py-2 px-6 rounded-xl hover:bg-emerald-50 transition-all flex items-center gap-2"
          >
            <span>تحميل ملف Excel (CSV)</span>
          </button>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-right">
              <thead className="bg-gray-50 border-b border-gray-100">
                <tr>
                  <th className="px-6 py-4 text-sm font-bold text-gray-600">رقم الهاتف</th>
                  <th className="px-6 py-4 text-sm font-bold text-gray-600">المتجر</th>
                  <th className="px-6 py-4 text-sm font-bold text-gray-600">المدينة</th>
                  <th className="px-6 py-4 text-sm font-bold text-gray-600">التاريخ</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {loading ? (
                  <tr>
                    <td colSpan={4} className="px-6 py-10 text-center text-gray-400">جاري التحميل...</td>
                  </tr>
                ) : data.length === 0 ? (
                  <tr>
                    <td colSpan={4} className="px-6 py-10 text-center text-gray-400">لا يوجد مسجلين بعد</td>
                  </tr>
                ) : (
                  data.map((entry, index) => (
                    <tr key={index} className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4 font-sans text-gray-900" dir="ltr">{entry.phone}</td>
                      <td className="px-6 py-4 text-gray-700">{entry.store}</td>
                      <td className="px-6 py-4 text-gray-700">{entry.city}</td>
                      <td className="px-6 py-4 text-gray-500 text-sm">
                        {new Date(entry.timestamp).toLocaleString('ar-JO')}
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
