import React from 'react';
import { Outlet } from 'react-router-dom';
import { Navbar } from './Navbar';
import { Toaster } from 'sonner';

export const AppLayout: React.FC = () => {
  return (
    <div className="min-h-screen bg-background font-sans antialiased">
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        <Outlet />
      </main>
      <footer className="border-t bg-muted/50 py-12">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p className="text-sm">© 2025 Autonomous Opportunity Scout. Built for community trade.</p>
        </div>
      </footer>
      <Toaster position="top-center" richColors />
    </div>
  );
};