
// This file is no longer used by the application as authentication and subscription
// features have been removed based on the latest request.
// It is safe to delete this file.

/*
'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { onAuthStateChanged, User } from 'firebase/auth';
import { auth } from '@/lib/firebase-config';
import { Skeleton } from '@/components/ui/skeleton'; // Import Skeleton for loading state

interface AuthContextProps {
  user: User | null;
  loading: boolean;
}

// Export AuthContext so it can be used by the useAuth hook
export const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, []);

  // Display a loading state while checking auth status
  if (loading) {
    return (
      <div className="frame">
        <div className="content-area flex items-center justify-center">
           <Skeleton className="h-12 w-12 rounded-full" />
           <div className="space-y-2 ml-4">
             <Skeleton className="h-4 w-[250px]" />
             <Skeleton className="h-4 w-[200px]" />
           </div>
        </div>
      </div>
     );
  }


  return (
    <AuthContext.Provider value={{ user, loading }}>
      {children}
    </AuthContext.Provider>
  );
};
*/
