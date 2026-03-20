import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { AuthProvider } from '@/contexts/AuthContext';
import { UserAuthProvider } from '@/contexts/UserAuthContext';
import { generateMetadata as genMeta, generateStructuredData } from '@/lib/seo';

const inter = Inter({ subsets: ['latin'] });

// Default metadata for pages without their own metadata
export const metadata: Metadata = {
  ...genMeta({
    title: 'LoanPilot | Compare Loans, Instant Loan Comparison & Loan Comparison Website India',
    description:
      'LoanPilot (Loan Pilot) — free loan comparison website in India. Compare loans from 20+ banks & NBFCs, instant loan comparison, EMI calculator. Searches for credit pilot loan app or loan pilot lead here. Independent; not a lender.',
    keywords: [
      'loanpilot',
      'loan pilot',
      'credit pilot loan app',
      'compare loans',
      'instant loan comparison',
      'loan comparison website',
      'onekredit',
      'loan',
      'loan comparison',
      'best loan rates India',
      'instant loan approval',
      'loan online',
      'loan aggregator',
      'loan EMI calculator',
      'quick loan',
      'online loan application',
      'loan interest rate',
      'loan without collateral',
      'unsecured loan',
      'loan for salaried',
      'loan for self employed',
      'personal loan',
      'business loan',
      'home loan',
    ],
    canonical: 'https://loanpilot.in',
  }),
  metadataBase: new URL('https://loanpilot.in'),
  other: {
    'verify-admitad': 'b37a211f6b',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const structuredData = generateStructuredData('WebSite');
  const orgData = generateStructuredData('Organization');

  return (
    <html lang="en-IN">
      <head>
        <meta name="verify-admitad" content="b37a211f6b" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgData) }}
        />
      </head>
      <body className={inter.className}>
        <AuthProvider>
          <UserAuthProvider>
            <Header />
            <main>{children}</main>
            <Footer />
          </UserAuthProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
