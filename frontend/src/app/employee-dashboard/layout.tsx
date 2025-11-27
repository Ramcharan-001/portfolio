
'use client';

import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useAuth } from '@/hooks/use-auth';
import { Briefcase, User as UserIcon, Layers, FileText } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
  LogOut,
  ChevronDown,
  Loader2,
} from 'lucide-react';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { useUser } from '@/hooks/use-user'; // A new hook to get user data

const navItems = [
  { href: '/employee-dashboard', icon: <UserIcon />, label: 'About Me' },
  { href: '/employee-dashboard/leaves', icon: <Layers />, label: 'Projects' },
  { href: '/employee-dashboard/payroll', icon: <FileText />, label: 'Blog' },
  { href: '/employee-dashboard/profile', icon: <UserIcon />, label: 'Contact' },
];


function TopNav() {
  const pathname = usePathname();
  const { user, signOut } = useAuth(); // Auth user for logout
  const portfolioUser = useUser(); // Public user data

  const getInitials = (name: string) => {
    const names = name.split(' ');
    if (names.length > 1) {
      return `${names[0][0]}${names[1][0]}`;
    }
    return name.substring(0, 2);
  };

  return (
     <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur-sm">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-6">
                <Link href="/" className="flex items-center gap-2">
                    <Briefcase className="size-7 text-primary" />
                    <span className="text-lg font-semibold">{portfolioUser?.name}'s Portfolio</span>
                </Link>
                <nav className="hidden items-center gap-2 md:flex">
                    {navItems.map((item) => (
                        <Link
                        key={item.href}
                        href={item.href}
                        className={cn(
                            "rounded-md px-3 py-2 text-sm font-medium transition-colors",
                            pathname === item.href
                            ? "bg-primary/10 text-primary"
                            : "text-muted-foreground hover:text-foreground"
                        )}
                        >
                        {item.label}
                        </Link>
                    ))}
                </nav>
            </div>
            
            <div className="flex items-center gap-2">
                {user && (
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="ghost" className="h-auto justify-start p-2">
                                <div className="flex items-center gap-3">
                                <Avatar className="size-8">
                                    <AvatarImage src={user?.avatarUrl} />
                                    <AvatarFallback>{user ? getInitials(user.name) : 'S'}</AvatarFallback>
                                </Avatar>
                                <div className="hidden text-left sm:block">
                                    <p className="text-sm font-medium">{user?.name}</p>
                                </div>
                                <ChevronDown className="hidden size-4 text-muted-foreground sm:block" />
                                </div>
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="w-56" side="bottom" align="end">
                            <DropdownMenuLabel>My Account</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                             <DropdownMenuItem asChild>
                              <Link href="/admin-dashboard">Dashboard</Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem onClick={signOut}>
                                <LogOut className="mr-2 size-4" />
                                <span>Log out</span>
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                )}
            </div>
        </div>
    </header>
  );
}


export default function PortfolioLayout({ children }: { children: React.ReactNode }) {
  const { loading } = useAuth();
  const portfolioUser = useUser();

  if (loading || !portfolioUser) {
    return (
      <div className="flex h-screen items-center justify-center bg-background/50">
        <Loader2 className="h-8 w-8 animate-spin" />
      </div>
    );
  }
  
 return (
     <div className="min-h-screen w-full bg-transparent text-foreground">
        <TopNav />
        <main className="mx-auto max-w-7xl p-4 sm:p-6 lg:p-8">{children}</main>
    </div>
  );
}
