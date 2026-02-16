import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { AuthProvider } from '@/contexts/AuthContext';
import { UserAuthProvider } from '@/contexts/UserAuthContext';
import { generateMetadata as genMeta, generateStructuredData } from '@/lib/seo';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = genMeta({
  title: 'LoanPilot - Compare Best Personal Loans in India | Instant Approval',
  description:
    'Compare and find the best personal loan rates from top lenders in India. Quick approval, competitive rates (10.5% onwards), flexible repayment options. Apply online now!',
  keywords: [
    'personal loan',
    'loan comparison',
    'best loan rates India',
    'instant loan approval',
    'personal loan online',
    'loan aggregator',
    'compare loans',
    'loan EMI calculator',
    'quick loan',
    'online loan application',
    'personal loan interest rate',
    'loan without collateral',
    'unsecured loan',
    'loan for salaried',
    'loan for self employed',
  ],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://loanpilot.in';
  const structuredData = generateStructuredData('WebSite');
  const orgData = generateStructuredData('Organization');

  return (
    <html lang="en-IN">
      <head>
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
