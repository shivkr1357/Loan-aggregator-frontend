import { initializeApp, getApps, FirebaseApp } from 'firebase/app';
import { getAnalytics, Analytics } from 'firebase/analytics';
import { getAuth, Auth, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY || "AIzaSyApqKKaE05kLzJbiLtJ0h1RqkoveoVGw30",
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN || "loan-aggregator.firebaseapp.com",
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID || "loan-aggregator",
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET || "loan-aggregator.firebasestorage.app",
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID || "237312898188",
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID || "1:237312898188:web:d1a94de2ec9fae8327f7a9",
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID || "G-NZBL36KSQJ",
};

let app: FirebaseApp | undefined;
let analytics: Analytics | undefined;
let auth: Auth | undefined;

if (typeof window !== 'undefined' && firebaseConfig.apiKey) {
  if (!getApps().length) {
    app = initializeApp(firebaseConfig);
  } else {
    app = getApps()[0];
  }

  if (app) {
    analytics = getAnalytics(app);
    auth = getAuth(app);
  }
}

export { app, analytics, auth };
export const googleProvider = new GoogleAuthProvider();

export const logEvent = (eventName: string, params?: Record<string, any>) => {
  if (typeof window !== 'undefined' && analytics) {
    import('firebase/analytics').then(({ logEvent: firebaseLogEvent }) => {
      firebaseLogEvent(analytics!, eventName, params);
    });
  }
};
