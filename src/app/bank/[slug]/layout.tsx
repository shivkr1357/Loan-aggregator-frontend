import { Metadata } from 'next';
import { generateMetadata as genMeta } from '@/lib/seo';

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const bankName = params.slug
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
  
  return genMeta({
    title: `${bankName} Personal Loan Interest Rates, Fees & Charges | LoanPilot`,
    description: `Compare ${bankName} personal loan interest rates, fees, charges, and eligibility criteria. Get detailed information about loan amounts, tenure, and apply online.`,
    keywords: [
      `${bankName} personal loan`,
      `${bankName} interest rate`,
      `${bankName} loan charges`,
      `${bankName} loan fees`,
      `personal loan ${bankName}`,
    ],
    canonical: `https://loanpilot.in/bank/${params.slug}`,
  });
}

export default function BankLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
