'use client';

import { useEffect } from 'react';
import { logEvent } from '@/lib/firebase';
import { analyticsApi } from '@/lib/api';
import { EMICalculator } from '@/components/EMICalculator';
import { EligibilityChecker } from '@/components/EligibilityChecker';
import { HeroSection } from '@/components/home/HeroSection';
import { TrustBadges } from '@/components/home/TrustBadges';
import { HowItWorks } from '@/components/home/HowItWorks';
import { LoanTypesSection } from '@/components/home/LoanTypesSection';
import { StatisticsSection } from '@/components/home/StatisticsSection';
import { FeaturesSection } from '@/components/home/FeaturesSection';
import { TopCitiesSection } from '@/components/home/TopCitiesSection';
import { BenefitsSection } from '@/components/home/BenefitsSection';
import { FAQSection } from '@/components/home/FAQSection';
import { TestimonialsSection } from '@/components/home/TestimonialsSection';
import { EligibilityRequirementsSection } from '@/components/home/EligibilityRequirementsSection';
import { CTASection } from '@/components/home/CTASection';

export default function Home() {
  useEffect(() => {
    // Track page view
    logEvent('page_view', { page: 'home' });
    analyticsApi.recordVisit('home').catch(console.error);
  }, []);

  return (
    <div className="min-h-screen">
      <HeroSection />

      {/* Eligibility Checker - Your #1 Hook */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <EligibilityChecker />
        </div>
      </section>

      <TrustBadges />

      {/* EMI Calculator Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <EMICalculator />
        </div>
      </section>

      <HowItWorks />
      <LoanTypesSection />
      <StatisticsSection />
      <FeaturesSection />
      <TopCitiesSection />
      <BenefitsSection />
      <FAQSection />
      <TestimonialsSection />
      <EligibilityRequirementsSection />
      <CTASection />
    </div>
  );
}
