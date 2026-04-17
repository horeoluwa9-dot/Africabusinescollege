
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
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<UserProfile | null>(() => {
    const saved = localStorage.getItem('abc_user');
    return saved ? JSON.parse(saved) : null;
  });

  const login = (profile: UserProfile) => {
    setUser(profile);
    localStorage.setItem('abc_user', JSON.stringify(profile));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('abc_user');
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
    <AuthContext.Provider value={{ user, login, logout, updateProfile, isLoggedIn, hasImage }}>
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
