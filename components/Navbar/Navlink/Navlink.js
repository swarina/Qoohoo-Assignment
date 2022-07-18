import React from 'react';
import Link from 'next/link';

const Navlink = ({ href, linkText, activePath }) => {
  const isActive = href === activePath;

  return (
    <Link href={href}>
      <a className="relative base-nav-link">
        <span className="font-medium">{linkText}</span>
        {!!isActive && (
          <span className="absolute -bottom-12 left-0 h-[0.14rem] w-full bg-red-400 mt-4 pointer-events-none" />
        )}
      </a>
    </Link>
  );
};

export default Navlink;
