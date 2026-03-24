'use client';

import { useState, FormEvent } from 'react';
import { newsletterApi } from '@/lib/api';

export function FooterNewsletter() {
  const [email, setEmail] = useState('');
  const [consent, setConsent] = useState(false);
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>(
    'idle'
  );
  const [message, setMessage] = useState('');

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    if (!consent) {
      setStatus('error');
      setMessage('Please accept marketing emails to subscribe.');
      return;
    }
    setStatus('loading');
    setMessage('');
    try {
      const res = await newsletterApi.subscribe({
        email,
        marketingConsent: true,
        source: 'footer',
      });
      const msg =
        res?.data?.message || res?.message || 'Thanks for subscribing!';
      setStatus('success');
      setMessage(msg);
      setEmail('');
      setConsent(false);
    } catch (err: unknown) {
      setStatus('error');
      const ax = err as { response?: { data?: { message?: string } } };
      setMessage(
        ax?.response?.data?.message || 'Something went wrong. Try again later.'
      );
    }
  }

  return (
    <div className="md:col-span-1">
      <h4 className="font-semibold mb-4">Newsletter</h4>
      <p className="text-gray-400 text-sm mb-3">
        Rate alerts and borrowing tips. Unsubscribe anytime.
      </p>
      <form onSubmit={onSubmit} className="space-y-3 text-left">
        <input
          type="email"
          required
          placeholder="Your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-3 py-2 rounded-md bg-navy-800 border border-navy-700 text-white text-sm placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald-500"
          autoComplete="email"
          disabled={status === 'loading'}
        />
        <label className="flex items-start gap-2 text-xs text-gray-400 cursor-pointer">
          <input
            type="checkbox"
            checked={consent}
            onChange={(e) => setConsent(e.target.checked)}
            className="mt-0.5 rounded border-navy-600"
            disabled={status === 'loading'}
          />
          <span>
            I agree to receive marketing emails from LoanPilot about loans and
            related offers (see{' '}
            <a href="/privacy" className="underline hover:text-white">
              Privacy
            </a>
            ).
          </span>
        </label>
        <button
          type="submit"
          disabled={status === 'loading'}
          className="w-full py-2 rounded-md bg-emerald-600 hover:bg-emerald-500 text-white text-sm font-medium disabled:opacity-50"
        >
          {status === 'loading' ? 'Subscribing…' : 'Subscribe'}
        </button>
        {message && (
          <p
            className={
              status === 'error' ? 'text-amber-300 text-xs' : 'text-emerald-300 text-xs'
            }
          >
            {message}
          </p>
        )}
      </form>
    </div>
  );
}
