
// This file is no longer used by the application as authentication and subscription
// features have been removed based on the latest request.
// It is safe to delete this file.

/*
'use client';

import { useState, useEffect } from 'react';
import { doc, onSnapshot, DocumentData } from 'firebase/firestore';
import { db } from '@/lib/firebase-config';

interface SubscriptionStatus {
  isSubscribed: boolean | null;
  loading: boolean;
  error: Error | null;
}

export const useSubscription = (userId: string | undefined): SubscriptionStatus => {
  const [isSubscribed, setIsSubscribed] = useState<boolean | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    if (!userId) {
      setIsSubscribed(false); // Not subscribed if no user ID
      setLoading(false);
      return;
    }

    setLoading(true);
    setError(null);

    const userDocRef = doc(db, 'users', userId);

    const unsubscribe = onSnapshot(
      userDocRef,
      (docSnap) => {
        if (docSnap.exists()) {
          const data = docSnap.data() as DocumentData;
          setIsSubscribed(!!data.isSubscribed || !!data.stripeCustomerId);
        } else {
          setIsSubscribed(false);
        }
        setLoading(false);
      },
      (err) => {
        console.error("Error fetching subscription status:", err);
        setError(err);
        setIsSubscribed(false);
        setLoading(false);
      }
    );

    return () => unsubscribe();
  }, [userId]);

  return { isSubscribed, loading, error };
};
*/
