import { Metadata } from 'next';
import { generateMetadata } from '@/lib/seo';

export const metadata: Metadata = generateMetadata({
  title: 'Compare Personal Loans - Best Interest Rates & EMI Calculator | LoanPilot',
  description:
    'Compare personal loan rates from top banks and NBFCs in India. Use our EMI calculator, filter by interest rate, processing fee, and employment type. Find the best loan deals instantly!',
  keywords: [
    'compare personal loans',
    'loan interest rates',
    'EMI calculator',
    'best personal loan',
    'loan comparison India',
    'personal loan rates',
    'loan processing fee',
    'instant loan comparison',
  ],
  canonical: 'https://loanpilot.in/loans',
});
