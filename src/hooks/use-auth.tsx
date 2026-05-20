import React, { createContext, useContext, useState, useEffect } from 'react';
import { User } from '../types';
import { MockDB } from '../store/mock-db';

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  signup: (name: string, email: string, password: string) => Promise<void>;
  logout: () => void;
  isLoading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const savedUser = MockDB.getCurrentUser();
    if (savedUser) setUser(savedUser);
    setIsLoading(false);
  }, []);

  const login = async (email: string, password: string) => {
    const users = MockDB.getUsers();
    const foundUser = users.find(u => u.email === email && u.password === password);
    
    if (foundUser) {
      setUser(foundUser);
      MockDB.setCurrentUser(foundUser);
    } else {
      throw new Error('Invalid email or password');
    }
  };

  const signup = async (name: string, email: string, password: string) => {
    const users = MockDB.getUsers();
    if (users.find(u => u.email === email)) {
      throw new Error('User already exists');
    }

    const newUser: User = {
      id: Math.random().toString(36).substr(2, 9),
      name,
      email,
      password,
      avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${name}`,
    };

    MockDB.saveUser(newUser);
    setUser(newUser);
    MockDB.setCurrentUser(newUser);
  };

  const logout = () => {
    setUser(null);
    MockDB.setCurrentUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, signup, logout, isLoading }}>
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