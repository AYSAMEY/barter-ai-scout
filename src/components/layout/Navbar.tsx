import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../../hooks/use-auth';
import { Button } from '../ui/button';
import { 
  Handshake, 
  LayoutDashboard, 
  User as UserIcon, 
  LogOut,
  Menu,
  X
} from 'lucide-react';

export const Navbar: React.FC = () => {
  const { user, logout } = useAuth();
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  const navigation = [
    { name: 'Dashboard', href: '/dashboard', icon: LayoutDashboard },
    { name: 'My Profile', href: '/profile', icon: UserIcon },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link to="/" className="flex items-center gap-2 font-bold text-xl tracking-tight">
              <div className="bg-primary p-1.5 rounded-lg text-primary-foreground">
                <Handshake size={24} />
              </div>
              <span className="hidden sm:inline-block">Opportunity Scout</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {user ? (
              <>
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`flex items-center gap-2 text-sm font-medium transition-colors hover:text-primary ${
                      isActive(item.href) ? 'text-primary' : 'text-muted-foreground'
                    }`}
                  >
                    <item.icon size={18} />
                    {item.name}
                  </Link>
                ))}
                <div className="h-6 w-[1px] bg-border mx-2" />
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-2">
                    <img 
                      src={user.avatar} 
                      alt={user.name} 
                      className="h-8 w-8 rounded-full border border-border"
                    />
                    <span className="text-sm font-medium hidden lg:inline-block">{user.name}</span>
                  </div>
                  <Button variant="ghost" size="icon" onClick={logout} title="Logout">
                    <LogOut size={18} />
                  </Button>
                </div>
              </>
            ) : (
              <div className="flex items-center gap-4">
                <Link to="/login">
                  <Button variant="ghost">Log in</Button>
                </Link>
                <Link to="/signup">
                  <Button>Sign up</Button>
                </Link>
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t bg-background px-4 py-4 space-y-4">
          {user ? (
            <>
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`flex items-center gap-3 p-2 rounded-lg text-base font-medium ${
                    isActive(item.href) ? 'bg-accent text-primary' : 'text-muted-foreground hover:bg-muted'
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <item.icon size={20} />
                  {item.name}
                </Link>
              ))}
              <div className="pt-4 border-t">
                <div className="flex items-center gap-3 mb-4 px-2">
                  <img src={user.avatar} alt={user.name} className="h-10 w-10 rounded-full" />
                  <div>
                    <p className="text-sm font-medium">{user.name}</p>
                    <p className="text-xs text-muted-foreground">{user.email}</p>
                  </div>
                </div>
                <Button variant="outline" className="w-full justify-start gap-3" onClick={logout}>
                  <LogOut size={18} />
                  Logout
                </Button>
              </div>
            </>
          ) : (
            <div className="flex flex-col gap-2">
              <Link to="/login" onClick={() => setIsMobileMenuOpen(false)}>
                <Button variant="outline" className="w-full">Log in</Button>
              </Link>
              <Link to="/signup" onClick={() => setIsMobileMenuOpen(false)}>
                <Button className="w-full">Sign up</Button>
              </Link>
            </div>
          )}
        </div>
      )}
    </nav>
  );
};