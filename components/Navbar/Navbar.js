import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

// Components
import Input from '../Input/Input';
import Navlink from './Navlink/Navlink';

// Icons
import { Cart, User, Favorites, Nav, Brand } from '../Icons/Icons';

const Navbar = () => {
  const { pathname } = useRouter();

  return (
    <>
      <nav className="py-10 px-4 flex items-center justify-between border-b-2 border-grey-500">
        <div className="flex items-center gap-4 md:gap-12">
          {/* Navbar Button */}
          <button className="flex flex-col gap-1">
            <Nav className="w-8" />
          </button>

          {/* Brand Logo */}
          <Link href="/">
            <a>
              <Brand className="w-8" />
            </a>
          </Link>

          {/* Nav Links */}
          <div className="hidden md:flex items-center gap-6">
            <Navlink href="/new" linkText="NEW" activePath={pathname} />
            <Navlink href="/sale" linkText="SALE" activePath={pathname} />
            <Navlink href="/man" linkText="MEN" activePath={pathname} />
            <Navlink href="/" linkText="WOMEN" activePath={pathname} />
          </div>
        </div>

        <div className="flex items-center gap-4 md:gap-12">
          {/* Right Nav Links */}
          <button className="hidden md:block">
            <Favorites className="w-8" />
          </button>
          <Input className="hidden md:block" placeholder="Search" />
          <button>
            <Cart className="w-8" />
          </button>
          <button className="hidden md:block">
            <User className="w-8" />
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
