'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'ok' | 'error'>('idle');
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('loading');
    setError(null);

    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error(await res.text());
      setStatus('ok');
      form.reset();
    } catch (err: unknown) {
      setStatus('error');
      const message = err instanceof Error ? err.message : 'Failed to send';
      setError(message);
    }
  }

  return (
    <form onSubmit={onSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div>
        <label className="block text-sm font-semibold text-slate-700 mb-2">First name *</label>
        <input 
          name="firstName" 
          required 
          className="w-full rounded-xl border border-slate-300 p-4 focus:ring-2 focus:ring-[#010775] focus:border-[#010775] transition-colors" 
          placeholder="Enter your first name"
        />
      </div>
      <div>
        <label className="block text-sm font-semibold text-slate-700 mb-2">Last name *</label>
        <input 
          name="lastName" 
          required 
          className="w-full rounded-xl border border-slate-300 p-4 focus:ring-2 focus:ring-[#010775] focus:border-[#010775] transition-colors" 
          placeholder="Enter your last name"
        />
      </div>
      <div>
        <label className="block text-sm font-semibold text-slate-700 mb-2">Phone</label>
        <input 
          name="phone" 
          inputMode="tel" 
          className="w-full rounded-xl border border-slate-300 p-4 focus:ring-2 focus:ring-[#010775] focus:border-[#010775] transition-colors" 
          placeholder="Enter your phone number"
        />
      </div>
      <div>
        <label className="block text-sm font-semibold text-slate-700 mb-2">Email *</label>
        <input 
          name="email" 
          type="email" 
          required 
          className="w-full rounded-xl border border-slate-300 p-4 focus:ring-2 focus:ring-[#010775] focus:border-[#010775] transition-colors" 
          placeholder="Enter your email address"
        />
      </div>
      <div className="md:col-span-2">
        <label className="block text-sm font-semibold text-slate-700 mb-2">Message *</label>
        <textarea 
          name="message" 
          required 
          rows={5} 
          className="w-full rounded-xl border border-slate-300 p-4 focus:ring-2 focus:ring-[#010775] focus:border-[#010775] transition-colors resize-none" 
          placeholder="Tell us about your IT needs, current challenges, or questions about our services..."
        />
      </div>
      <div className="md:col-span-2">
        <button 
          type="submit" 
          disabled={status === 'loading'} 
          className="w-full rounded-2xl px-8 py-4 bg-[#010775] text-white font-semibold shadow-lg hover:bg-[#2A3BCF] disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 hover:scale-105"
        >
          {status === 'loading' ? 'Sending Message...' : 'Send Message to consulting@temrink.com'}
        </button>
      </div>

      {status === 'ok' && (
        <div className="md:col-span-2 p-4 bg-green-50 border border-green-200 rounded-xl">
          <p className="text-green-800 font-medium">✅ Thanks! We'll be in touch shortly at consulting@temrink.com</p>
        </div>
      )}
      {status === 'error' && (
        <div className="md:col-span-2 p-4 bg-red-50 border border-red-200 rounded-xl">
          <p className="text-red-800 font-medium">❌ Error: {error}</p>
        </div>
      )}
    </form>
  );
}
