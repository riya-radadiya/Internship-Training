'use client';

import React, { useState } from 'react';
import '../../../i18n';
import { useTranslation } from 'react-i18next';

export default function UserProfile() {
  const { t, i18n } = useTranslation();
  const [profile, setProfile] = useState({
    name: "John Doe",
    email: "user@mailinator.com",
    street: "123 Main Street",
    city: "Surat"
  });

  const handleToggleLanguage = () => {
    const nextLang = i18n.language === 'en' ? 'es' : 'en';
    i18n.changeLanguage(nextLang);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-between font-sans">
      {/* Dynamic Header */}
      <header className="bg-white shadow-sm p-4 px-8 flex justify-between items-center">
        <h2 className="text-xl font-bold text-gray-800">{t('profile')}</h2>
        <button 
          onClick={handleToggleLanguage}
          className="px-4 py-1.5 border rounded-lg text-sm bg-gray-100 hover:bg-gray-200 font-bold transition text-black"
        >
          🌐 {i18n.language === 'en' ? 'Español' : 'English'}
        </button>
      </header>

      {/* Profile Details Layout Content Card */}
      <main className="flex-1 max-w-xl w-full mx-auto p-6 my-auto bg-white rounded-xl shadow-md border mt-10">
        <h3 className="text-2xl font-bold mb-4 text-gray-900">{t('welcome')}, {profile.name}</h3>
        <div className="space-y-4 text-black">
          <div>
            <label className="block text-xs font-semibold uppercase text-gray-500 mb-1">Email Address</label>
            <input 
              type="text" 
              value={profile.email}
              onChange={(e) => setProfile({...profile, email: e.target.value})}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500" 
            />
          </div>
          <div>
            <label className="block text-xs font-semibold uppercase text-gray-500 mb-1">{t('address')}</label>
            <input 
              type="text" 
              value={profile.street}
              onChange={(e) => setProfile({...profile, street: e.target.value})}
              className="w-full px-4 py-2 border rounded-lg mb-2 focus:ring-2 focus:ring-blue-500" 
            />
            <input 
              type="text" 
              value={profile.city}
              onChange={(e) => setProfile({...profile, city: e.target.value})}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500" 
            />
          </div>
        </div>
      </main>

      {/* Mandatory Regulatory Footer Section */}
      <footer className="bg-white border-t p-4 text-center text-sm text-gray-500 flex justify-center gap-6">
        <a href="#" className="hover:underline font-medium">{t('privacy')}</a>
        <a href="#" className="hover:underline font-medium">{t('terms')}</a>
      </footer>
    </div>
  );
}