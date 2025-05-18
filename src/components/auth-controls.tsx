
// This file is no longer used by the application as authentication and subscription
// features have been removed based on the latest request.
// It is safe to delete this file.

/*
'use client';

import React from 'react';
import { signInWithPopup, GoogleAuthProvider, signOut } from 'firebase/auth';
import { auth } from '@/lib/firebase-config';
import { Button } from '@/components/ui/button';
import { LogIn, LogOut, User as UserIcon } from 'lucide-react';
import { useAuth } from '@/hooks/use-auth';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { cn } from '@/lib/utils';

interface AuthControlsProps {
  className?: string;
}

export const AuthControls: React.FC<AuthControlsProps> = ({ className }) => {
  const { user, loading } = useAuth();

  const handleSignIn = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      // Login successful, user state will update via AuthProvider
    } catch (error) {
      console.error("Error signing in with Google: ", error);
      // Handle errors (e.g., show a toast notification)
    }
  };

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      // Sign out successful, user state will update via AuthProvider
    } catch (error) {
      console.error("Error signing out: ", error);
      // Handle errors
    }
  };

  if (loading) {
    return <Button variant="ghost" size="sm" disabled className={cn(className)}>Loading...</Button>;
  }

  return (
    <div className={cn("flex items-center gap-2", className)}>
      {user ? (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="relative h-8 w-8 rounded-full">
              <Avatar className="h-8 w-8">
                <AvatarImage src={user.photoURL ?? undefined} alt={user.displayName ?? 'User'} />
                <AvatarFallback>
                  {user.displayName ? user.displayName.charAt(0).toUpperCase() : <UserIcon size={16} />}
                </AvatarFallback>
              </Avatar>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56" align="end" forceMount>
            <DropdownMenuLabel className="font-normal">
              <div className="flex flex-col space-y-1">
                <p className="text-sm font-medium leading-none">{user.displayName || 'User'}</p>
                <p className="text-xs leading-none text-muted-foreground">
                  {user.email}
                </p>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={handleSignOut}>
              <LogOut className="mr-2 h-4 w-4" />
              <span>Log out</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      ) : (
        <Button variant="outline" size="sm" onClick={handleSignIn}>
          <LogIn className="mr-2 h-4 w-4" />
          Sign In
        </Button>
      )}
    </div>
  );
};
*/
