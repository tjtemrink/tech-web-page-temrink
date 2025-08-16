'use client';

import Link from 'next/link';
import Image from 'next/image';
import React, { useCallback, useMemo, useState } from 'react';
import { Transition } from '@headlessui/react';
import { HiOutlineXMark, HiBars3 } from 'react-icons/hi2';
import { usePathname } from 'next/navigation';

import Container from './Container';
import { siteDetails } from '@/data/siteDetails';
import { menuItems as baseMenuItems } from '@/data/menuItems';

type NavItem = { text: string; url: string };

// normalize any item url to '/#section' (and force 'contact' to '/#contact')
function normalizeUrl(url: string): string {
  if (!url) return '/';
  const u = url.trim();
  if (u === '/contact' || u === 'contact' || u === '#contact') return '/#contact';
  if (u.startsWith('/#')) return u;
  if (u.startsWith('#')) return `/${u}`;
  return u;
}

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  // Inject "Home" as the first item and normalize all anchors to '/#...'
  const navItems: NavItem[] = useMemo(() => {
    const items = baseMenuItems.map<NavItem>((i: any) => ({
      text: i.text,
      url: normalizeUrl(String(i.url ?? '')),
    }));
    return [{ text: 'Home', url: '/#hero' }, ...items];
  }, []);

  const toggleMenu = () => setIsOpen((v) => !v);
  const closeMenu = () => setIsOpen(false);

  // Smooth-scroll on '/' for '#section' links; default navigation elsewhere
  const handleAnchorClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
      if (pathname === '/' && href.startsWith('/#')) {
        e.preventDefault();
        const id = href.split('#')[1];
        const el = document.getElementById(id);
        if (el) {
          window.history.pushState(null, '', href);
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
      closeMenu();
    },
    [pathname]
  );

  return (
    <header className="bg-transparent fixed top-0 left-0 right-0 md:absolute z-50 mx-auto w-full">
      <Container className="!px-0">
        <nav className="shadow-md md:shadow-none bg-white md:bg-transparent mx-auto flex justify-between items-center py-2 px-5 md:py-10">
          {/* Brand -> Home (hero) */}
          <Link
            href="/#hero"
            aria-label="Temrink home"
            className="flex items-center gap-3"
            onClick={(e) => handleAnchorClick(e, '/#hero')}
          >
            <Image
              src={siteDetails.siteLogo} // /images/temrink-logo.png
              alt="Temrink"
              width={160}
              height={36}
              priority
              className="h-9 w-auto"
            />
            <span className="sr-only">{siteDetails.siteName}</span>
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <li key={item.text}>
                <Link
                  href={item.url}
                  className="text-foreground hover:text-foreground-accent transition-colors"
                  prefetch={false}
                  onClick={(e) => handleAnchorClick(e, item.url)}
                >
                  {item.text}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/#contact"
                className="text-black bg-primary hover:bg-primary-accent px-8 py-3 rounded-full transition-colors"
                prefetch={false}
                onClick={(e) => handleAnchorClick(e, '/#contact')}
              >
                Get a demo
              </Link>
            </li>
          </ul>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              type="button"
              className="bg-primary text-black focus:outline-none rounded-full w-10 h-10 flex items-center justify-center"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
            >
              {isOpen ? (
                <HiOutlineXMark className="h-6 w-6" aria-hidden="true" />
              ) : (
                <HiBars3 className="h-6 w-6" aria-hidden="true" />
              )}
              <span className="sr-only">Toggle navigation</span>
            </button>
          </div>
        </nav>
      </Container>

      {/* Mobile Menu */}
      <Transition
        show={isOpen}
        enter="transition ease-out duration-200 transform"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="transition ease-in duration-75 transform"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <div id="mobile-menu" className="md:hidden bg-white shadow-lg">
          <ul className="flex flex-col space-y-4 pt-1 pb-6 px-6">
            {navItems.map((item) => (
              <li key={item.text}>
                <Link
                  href={item.url}
                  className="text-foreground hover:text-primary block"
                  prefetch={false}
                  onClick={(e) => handleAnchorClick(e, item.url)}
                >
                  {item.text}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/#contact"
                className="text-black bg-primary hover:bg-primary-accent px-5 py-2 rounded-full block w-fit"
                prefetch={false}
                onClick={(e) => handleAnchorClick(e, '/#contact')}
              >
                Get a demo
              </Link>
            </li>
          </ul>
        </div>
      </Transition>
    </header>
  );
};

export default Header;
