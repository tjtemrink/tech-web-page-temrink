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
    <form onSubmit={onSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div>
        <label className="block text-sm font-medium mb-1">First name</label>
        <input name="firstName" required className="w-full rounded-xl border p-3" />
      </div>
      <div>
        <label className="block text-sm font-medium mb-1">Last name</label>
        <input name="lastName" required className="w-full rounded-xl border p-3" />
      </div>
      <div>
        <label className="block text-sm font-medium mb-1">Phone</label>
        <input name="phone" inputMode="tel" className="w-full rounded-xl border p-3" />
      </div>
      <div>
        <label className="block text-sm font-medium mb-1">Email</label>
        <input name="email" type="email" required className="w-full rounded-xl border p-3" />
      </div>
      <div className="md:col-span-2">
        <label className="block text-sm font-medium mb-1">Message</label>
        <textarea name="message" required rows={5} className="w-full rounded-xl border p-3" />
      </div>
      <div className="md:col-span-2">
        <button type="submit" disabled={status === 'loading'} className="rounded-2xl px-5 py-3 bg-blue-600 text-white hover:bg-blue-700">
          {status === 'loading' ? 'Sending…' : 'Send message'}
        </button>
      </div>

      {status === 'ok' && <p className="md:col-span-2 text-green-700">Thanks! We’ll be in touch shortly.</p>}
      {status === 'error' && <p className="md:col-span-2 text-red-700">Error: {error}</p>}
    </form>
  );
}
