import { Metadata } from 'next';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string[];
  canonical?: string;
  ogImage?: string;
  noindex?: boolean;
  type?: 'website' | 'article';
}

export function generateMetadata({
  title = 'LoanPilot - Compare Best Personal Loans in India',
  description = 'Compare and find the best personal loan rates from top lenders in India. Quick approval, competitive rates, flexible repayment options. Apply now!',
  keywords = [
    'personal loan',
    'loan comparison',
    'best loan rates',
    'instant loan',
    'personal loan India',
    'loan aggregator',
    'compare loans',
    'loan EMI calculator',
    'quick loan approval',
    'online loan application',
  ],
  canonical,
  ogImage = '/icon.png',
  noindex = false,
  type = 'website',
}: SEOProps = {}): Metadata {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://loanpilot.in';
  const canonicalUrl = canonical || baseUrl;

  return {
    title,
    description,
    keywords: keywords.join(', '),
    authors: [{ name: 'LoanPilot' }],
    creator: 'LoanPilot',
    publisher: 'LoanPilot',
    robots: {
      index: !noindex,
      follow: !noindex,
      googleBot: {
        index: !noindex,
        follow: !noindex,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    openGraph: {
      type,
      locale: 'en_IN',
      url: canonicalUrl,
      siteName: 'LoanPilot',
      title,
      description,
      images: [
        {
          url: ogImage.startsWith('http') ? ogImage : `${baseUrl}${ogImage}`,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage.startsWith('http') ? ogImage : `${baseUrl}${ogImage}`],
    },
    alternates: {
      canonical: canonicalUrl,
    },
    verification: {
      google: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION,
    },
  };
}

export function generateStructuredData(type: 'WebSite' | 'FinancialProduct' | 'Organization', data?: any) {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://loanpilot.in';

  const baseStructuredData = {
    '@context': 'https://schema.org',
    '@type': type,
  };

  switch (type) {
    case 'WebSite':
      return {
        ...baseStructuredData,
        name: 'LoanPilot',
        url: baseUrl,
        description:
          'Compare and find the best personal loan rates from top lenders in India. Quick approval, competitive rates.',
        potentialAction: {
          '@type': 'SearchAction',
          target: {
            '@type': 'EntryPoint',
            urlTemplate: `${baseUrl}/loans?q={search_term_string}`,
          },
          'query-input': 'required name=search_term_string',
        },
        publisher: {
          '@type': 'Organization',
          name: 'LoanPilot',
          logo: {
            '@type': 'ImageObject',
            url: `${baseUrl}/icon.png`,
          },
        },
      };

    case 'FinancialProduct':
      return {
        ...baseStructuredData,
        name: data?.name || 'Personal Loan',
        description: data?.description || 'Personal loan with competitive interest rates',
        provider: {
          '@type': 'FinancialService',
          name: 'LoanPilot',
          url: baseUrl,
        },
        interestRate: data?.interestRate || '10.5%',
        loanTerm: data?.loanTerm || '12-60 months',
        loanAmount: {
          '@type': 'MonetaryAmount',
          currency: 'INR',
          value: data?.loanAmount || '50000',
        },
      };

    case 'Organization':
      return {
        ...baseStructuredData,
        name: 'LoanPilot',
        url: baseUrl,
        logo: `${baseUrl}/icon.png`,
        description:
          'Loan aggregator platform helping users compare and find the best personal loan rates in India',
        contactPoint: {
          '@type': 'ContactPoint',
          contactType: 'Customer Service',
          email: 'support@loanpilot.in',
        },
        sameAs: [
          // Add social media links here when available
        ],
      };

    default:
      return baseStructuredData;
  }
}
