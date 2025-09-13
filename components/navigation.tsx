'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navigation() {
  const pathname = usePathname();

  const navItems = [
    { name: 'Index', href: '/' },
    { name: 'Overview', href: '/overview' },
    { name: 'About', href: '/about' }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      <div className="w-full px-5 py-4">
        <div className="grid-8 items-center h-16">
          {/* Logo - Left side */}
          <div className="col-span-2 flex items-center">
            <Link href="/" className="text-sm font-normal text-gray-900 dark:text-gray-100 hover:text-gray-600 dark:hover:text-gray-300 transition-colors">
              SGW Studio
            </Link>
          </div>

          {/* Menu - Center */}
          <div className="col-span-4 flex justify-center">
            <div className="flex items-center space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`text-sm font-normal transition-colors ${
                    pathname === item.href
                      ? 'text-gray-900 dark:text-gray-100'
                      : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Right side - Empty for now */}
          <div className="col-span-2"></div>
        </div>
      </div>
    </nav>
  );
}
