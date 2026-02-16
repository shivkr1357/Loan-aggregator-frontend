import { initializeApp, getApps, FirebaseApp } from 'firebase/app';
import { getAnalytics, Analytics } from 'firebase/analytics';

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

let app: FirebaseApp | undefined;
let analytics: Analytics | undefined;

if (typeof window !== 'undefined' && firebaseConfig.apiKey) {
  if (!getApps().length) {
    app = initializeApp(firebaseConfig);
  } else {
    app = getApps()[0];
  }

  if (app) {
    analytics = getAnalytics(app);
  }
}

export { app, analytics };

export const logEvent = (eventName: string, params?: Record<string, any>) => {
  if (typeof window !== 'undefined' && analytics) {
    import('firebase/analytics').then(({ logEvent: firebaseLogEvent }) => {
      firebaseLogEvent(analytics!, eventName, params);
    });
  }
};
