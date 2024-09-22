import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <Link href="https://www.instagram.com" target="_blank" className="hover:underline">
              @KinderGarden
            </Link>
          </div>
          <div className="mb-4 md:mb-0">
            <Link href="mailto:example@example.com" className="hover:underline">
              exemple@gmail.com
            </Link>
          </div>
          <div>
            <p>00220 3842612</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
