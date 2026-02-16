# Loan Aggregator Frontend

Next.js 14 + TypeScript frontend for the Loan Aggregator Platform.

## Setup

1. Install dependencies:
```bash
npm install
```

2. Create `.env.local` file:
```bash
NEXT_PUBLIC_API_URL=http://localhost:3001
NEXT_PUBLIC_FIREBASE_API_KEY=your-firebase-api-key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your-project.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your-project-id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your-project.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your-sender-id
NEXT_PUBLIC_FIREBASE_APP_ID=your-app-id
```

3. Run development server:
```bash
npm run dev
```

## Pages

- `/` - Landing page
- `/loans` - Loan comparison and EMI calculator
- `/apply` - Lead application form
- `/admin` - Admin dashboard
- `/city/[city]` - SEO city landing pages
- `/privacy` - Privacy policy
- `/terms` - Terms & conditions
- `/disclaimer` - Disclaimer
- `/contact` - Contact page

## Features

- Firebase Analytics integration
- Responsive design with TailwindCSS
- Form validation with Zod
- Charts with Recharts
- SEO optimized pages
