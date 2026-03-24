import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Newsletter — Unsubscribed | LoanPilot',
  robots: { index: false, follow: false },
};

type Props = { searchParams: { ok?: string } };

export default function NewsletterUnsubscribedPage({ searchParams }: Props) {
  const ok = searchParams.ok === '1';

  return (
    <div className="container mx-auto px-4 py-16 max-w-lg text-center">
      <h1 className="text-2xl font-semibold text-navy-900 mb-4">
        {ok ? 'You are unsubscribed' : 'Could not update subscription'}
      </h1>
      <p className="text-gray-600 mb-8">
        {ok
          ? 'You will no longer receive our newsletter. You can subscribe again anytime from the site footer.'
          : 'The unsubscribe link may be invalid or expired. Contact support if you need help.'}
      </p>
      <Link
        href="/"
        className="inline-block px-6 py-3 rounded-lg bg-emerald-600 text-white font-medium hover:bg-emerald-500"
      >
        Back to home
      </Link>
    </div>
  );
}
