import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import jsosifbanner from '../assets/jsosifbanner.png';

export default function Header() {
  return (
    <header className="flex items-center justify-between px-8 py-4 bg-white shadow-md">
      {/* Logo Section */}
      <div>
        <Link href="/" passHref legacyBehavior>
          <a>
            <Image src={jsosifbanner} alt="Logo" className="w-40 h-30 ms-20" />
          </a>
        </Link>
      </div>

      {/* Navigation Links */}
      <nav className="flex space-x-8 text-gray-600">
        <Link href="/about" passHref legacyBehavior>
          <a className="hover:text-blue-500">About</a>
        </Link>
        <Link href="/portfolio" passHref legacyBehavior>
          <a className="hover:text-blue-500">Portfolio</a>
        </Link>
        <Link href="/team" passHref legacyBehavior>
          <a className="hover:text-blue-500">Team</a>
        </Link>
        <Link href="/bloomberg" passHref legacyBehavior>
          <a className="hover:text-blue-500">Bloomberg</a>
        </Link>
      </nav>
    </header>
  );
}
