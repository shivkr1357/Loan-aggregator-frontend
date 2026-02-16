'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import {
  User,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth';
import { auth, googleProvider } from '@/lib/firebase';
import { authApi } from '@/lib/api';

interface UserAuthContextType {
  user: User | null;
  backendUser: any | null;
  loading: boolean;
  signInWithGoogle: () => Promise<void>;
  logout: () => Promise<void>;
}

const UserAuthContext = createContext<UserAuthContextType | undefined>(
  undefined
);

export function UserAuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [backendUser, setBackendUser] = useState<any | null>(null);
  const [loading, setLoading] = useState(true);

  const syncUserWithBackend = async (firebaseUser: User) => {
    try {
      const idToken = await firebaseUser.getIdToken();
      const userData = await authApi.syncUser({
        idToken: firebaseUser.uid, // Use UID instead of token for now
        email: firebaseUser.email || '',
        displayName: firebaseUser.displayName || undefined,
        photoURL: firebaseUser.photoURL || undefined,
        phoneNumber: firebaseUser.phoneNumber || undefined,
      });
      setBackendUser(userData.data.user);
    } catch (error) {
      console.error('Error syncing user with backend:', error);
    }
  };

  useEffect(() => {
    if (!auth) {
      setLoading(false);
      return;
    }

    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
      setUser(firebaseUser);
      
      if (firebaseUser) {
        // Sync user with backend when authenticated
        await syncUserWithBackend(firebaseUser);
      } else {
        setBackendUser(null);
      }
      
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const signInWithGoogle = async () => {
    if (!auth) return;
    try {
      const result = await signInWithPopup(auth, googleProvider);
      // User will be synced via onAuthStateChanged
    } catch (error) {
      console.error('Error signing in with Google:', error);
      throw error;
    }
  };

  const logout = async () => {
    if (!auth) return;
    try {
      await signOut(auth);
      setBackendUser(null);
    } catch (error) {
      console.error('Error signing out:', error);
      throw error;
    }
  };

  return (
    <UserAuthContext.Provider
      value={{ user, backendUser, loading, signInWithGoogle, logout }}
    >
      {children}
    </UserAuthContext.Provider>
  );
}

export function useUserAuth() {
  const context = useContext(UserAuthContext);
  if (context === undefined) {
    throw new Error('useUserAuth must be used within a UserAuthProvider');
  }
  return context;
}
