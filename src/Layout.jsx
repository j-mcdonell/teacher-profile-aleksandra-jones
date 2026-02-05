import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, BookOpen, FileText, Award, Quote, Home } from 'lucide-react';
import { Button } from "@/components/ui/button";

export default function Layout({ children }) {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', path: '/', icon: Home },
    { name: 'CV / Resume', path: '/resume', icon: FileText },
    { name: 'Philosophy', path: '/philosophy', icon: BookOpen },
    { name: 'Credentials', path: '/credentials', icon: Award },
    { name: 'References', path: '/recommendations', icon: Quote },
  ];

  const isActive = (path) => {
    if (path === '/' && location.pathname !== '/') return false;
    return location.pathname === path;
  };

  return (
    <div className="min-h-screen bg-slate-50/50 text-slate-900 font-sans">
      <nav className="sticky top-0 z-50 border-b border-slate-200 bg-white/80 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            
            <Link 
              to="/" 
              onClick={() => setMobileMenuOpen(false)}
              className="font-bold text-xl text-purple-950 hover:opacity-80 transition-opacity"
            >
              Aleksandra Jones
            </Link>

            <div className="hidden md:flex items-center gap-1">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium transition-all ${
                    isActive(item.path)
                      ? 'bg-purple-50 text-purple-950' // UPDATED
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                  }`}
                >
                  <item.icon className="w-4 h-4" />
                  {item.name}
                </Link>
              ))}
            </div>

            <div className="md:hidden">
              <Button 
                variant="ghost" 
                size="icon"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X className="w-6 h-6 text-slate-600" /> : <Menu className="w-6 h-6 text-slate-600" />}
              </Button>
            </div>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden border-t border-slate-200 bg-white shadow-lg absolute w-full left-0">
            <div className="flex flex-col p-4 space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center gap-3 px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                    isActive(item.path)
                      ? 'bg-purple-50 text-purple-950' // UPDATED
                      : 'text-slate-600 hover:bg-slate-50'
                  }`}
                >
                  <item.icon className="w-5 h-5" />
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>

      <main className="animate-in fade-in duration-500">
        {children}
      </main>
    </div>
  );
}