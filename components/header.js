import React from 'react';
import Link from 'next/link';

function Header() {
  return (
    <header className="fixed top-0 left-1/2 -translate-x-1/2 z-[1000] w-full bg-white shadow-md py-4">
      <div className="max-w-[120rem] text-black px-6 md:px-8 lg:px-10">
        <nav className="flex items-center justify-between">
          <Link href="/" className="text-gray-800 flex items-center">
            <svg 
              className="h-8 w-8 mr-2" 
              viewBox="0 0 512 512" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect x="94" y="81" width="40" height="350" fill="currentColor"></rect>
              <rect x="264" y="81" width="40" height="350" fill="currentColor"></rect>
              <circle cx="199" cy="131" r="50" fill="currentColor"></circle>
              <circle cx="199" cy="246" r="50" fill="currentColor"></circle>
              <circle cx="369" cy="131" r="50" fill="currentColor"></circle>
              <circle cx="369" cy="246" r="50" fill="currentColor"></circle>
            </svg>
          </Link>
          <div className="flex-1 hidden md:flex items-center justify-center">
            <ul className="mx-auto inline-flex gap-8 text-sm font-light">
              <li>
                <Link 
                  href="/presentation" 
                  className="relative text-lg transition-transform duration-300 ease-in-out transform hover:translate-y-[-5px] hover:text-accent-500"
                >
                  Présentation
                </Link>
              </li>
              <li>
                <Link 
                  href="/events" 
                  className="relative text-lg transition-transform duration-300 ease-in-out transform hover:translate-y-[-5px] hover:text-accent-500"
                >
                  Événements
                </Link>
              </li>
              <li>
                <Link 
                  href="/personnel" 
                  className="relative text-lg transition-transform duration-300 ease-in-out transform hover:translate-y-[-5px] hover:text-accent-500"
                >
                  Notre personnel
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
