import { Metadata } from 'next';
import { generateMetadata } from '@/lib/seo';

export const metadata: Metadata = generateMetadata({
  title: 'Apply for Personal Loan Online - Quick Approval | LoanPilot',
  description:
    'Apply for personal loan online with instant approval. Fill simple form, get matched with best lenders, and receive loan offers within minutes. No paperwork required!',
  keywords: [
    'apply personal loan',
    'online loan application',
    'instant loan approval',
    'personal loan apply',
    'quick loan application',
    'loan application form',
    'apply loan online India',
  ],
  canonical: 'https://loanpilot.in/apply',
});
