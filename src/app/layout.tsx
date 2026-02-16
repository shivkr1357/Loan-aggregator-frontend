import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { AuthProvider } from '@/contexts/AuthContext';
import { UserAuthProvider } from '@/contexts/UserAuthContext';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'LoanPilot - Compare Best Personal Loans',
  description: 'Compare and find the best personal loan rates from top lenders. Quick approval, competitive rates.',
  icons: {
    icon: '/icon.png',
    shortcut: '/icon.png',
    apple: '/icon.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
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
