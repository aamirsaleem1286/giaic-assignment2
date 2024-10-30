"use client"
import { useState } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex justify-around items-center p-4 bg-gray-800 text-white">
      <div className="flex items-center">
        <Link href="/" className='text-2xl text-bold'>
        BrandName
        </Link>
      </div>
      <div className="hidden md:flex space-x-4">
      <Link href="/about">Home</Link>
        <Link href="/about">Product</Link>
        <Link href="/services">Price</Link>
        <Link href="/contact">Contact</Link>
      </div>
      <button
        className="md:hidden"
        onClick={() => setIsOpen(!isOpen)}
      >
        ☰
      </button>
      {isOpen && (
        <div className="absolute top-16 right-0 bg-gray-800 w-full md:hidden">
          <Link href="/about" className="block p-4 hover:underline">About
          </Link>
          <Link href="/services" className="block p-4 hover:underline">Services
          </Link>
          <Link href="/contact" className="block p-4 hover:underline">Contact
          </Link>
        </div>
      )}
      <div className='flex items-center justify-center'>
      <Link href="/contact" className="block p-4 hover:underline">Login
          </Link>
        <button className="px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded">
          Join Us
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
