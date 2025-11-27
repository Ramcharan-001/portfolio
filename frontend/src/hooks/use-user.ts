
'use client';
import { useState, useEffect } from 'react';
import { User } from '@/types';
import { mockUsers } from '@/lib/data';

/**
 * Hook to get the public portfolio owner's data.
 * For this demo, it just returns the first admin user.
 * In a real app, this might fetch data from a public API endpoint.
 */
export const useUser = (): User | null => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    // Find the first user with the 'Admin' role to serve as the portfolio owner
    const portfolioOwner = mockUsers.find(u => u.role === 'Admin');
    if (portfolioOwner) {
      setUser(portfolioOwner);
    }
  }, []);

  return user;
};
