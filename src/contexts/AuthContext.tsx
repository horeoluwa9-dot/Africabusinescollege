
import React, { createContext, useContext, useState, useEffect } from 'react';

interface UserProfile {
  name: string;
  email: string;
  avatarUrl?: string; // If this is present, "provided their image" is true
}

interface AuthContextType {
  user: UserProfile | null;
  login: (profile: UserProfile) => void;
  logout: () => void;
  updateProfile: (profile: Partial<UserProfile>) => void;
  isLoggedIn: boolean;
  hasImage: boolean;
  isApplied: boolean;
  isPaid: boolean;
  setApplied: (status: boolean) => void;
  setPaid: (status: boolean) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<UserProfile | null>(() => {
    const saved = localStorage.getItem('abc_user');
    return saved ? JSON.parse(saved) : null;
  });

  const [isApplied, setIsApplied] = useState<boolean>(() => {
    return localStorage.getItem('abc_is_applied') === 'true';
  });

  const [isPaid, setIsPaid] = useState<boolean>(() => {
    return localStorage.getItem('abc_is_paid') === 'true';
  });

  const login = (profile: UserProfile) => {
    setUser(profile);
    localStorage.setItem('abc_user', JSON.stringify(profile));
  };

  const logout = () => {
    setUser(null);
    setIsApplied(false);
    setIsPaid(false);
    localStorage.removeItem('abc_user');
    localStorage.removeItem('abc_is_applied');
    localStorage.removeItem('abc_is_paid');
  };

  const setApplied = (status: boolean) => {
    setIsApplied(status);
    localStorage.setItem('abc_is_applied', String(status));
  };

  const setPaid = (status: boolean) => {
    setIsPaid(status);
    localStorage.setItem('abc_is_paid', String(status));
  };

  const updateProfile = (profile: Partial<UserProfile>) => {
    const newUser = user ? { ...user, ...profile } : null;
    if (newUser) {
      setUser(newUser as UserProfile);
      localStorage.setItem('abc_user', JSON.stringify(newUser));
    }
  };

  const isLoggedIn = !!user;
  const hasImage = !!user?.avatarUrl;

  return (
    <AuthContext.Provider value={{ 
      user, 
      login, 
      logout, 
      updateProfile, 
      isLoggedIn, 
      hasImage,
      isApplied,
      isPaid,
      setApplied,
      setPaid
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
