import { Metadata } from 'next';
import { generateMetadata } from '@/lib/seo';

export const metadata: Metadata = generateMetadata({
  title: 'Compare Loans | Instant Loan Comparison & Loan Comparison Website | LoanPilot',
  description:
    'Compare loans on LoanPilot — loan comparison website for India. Instant loan comparison across 20+ lenders, EMI calculator, filters by income & city. Loan Pilot / loanpilot; not a lender.',
  keywords: [
    'compare loans',
    'instant loan comparison',
    'loan comparison website',
    'loanpilot',
    'loan pilot',
    'credit pilot loan app',
    'onekredit',
    'compare personal loans',
    'loan interest rates',
    'EMI calculator',
    'best personal loan',
    'loan comparison India',
    'personal loan rates',
    'loan processing fee',
  ],
  canonical: 'https://loanpilot.in/loans',
});
