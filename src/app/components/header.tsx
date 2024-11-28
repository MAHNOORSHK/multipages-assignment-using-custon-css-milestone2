"use client"
import Image from 'next/image';
import { useState } from 'react';
import Logo from "@/app/images/logo.png"
import Link from 'next/link';
import "@/app/about/page";
import "@/app/blog/page";
import "@/app/team/page";
import "@/app/home/page"


const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="container">
        <div className="logoDiv">
          <Image src={Logo} alt="logo" className="logoImage" />
          <a href="#" className="heading">Nutritionist</a>
        </div>

        <button
          className="hamburger"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <Image
            src={isMenuOpen ? '/close.svg' : '/hamburger-menu.svg'}
            alt="Menu Icon"
            width={30}
            height={30}
          />
        </button>

        {/* Navigation Links */}
        <div
          className={`menuDiv ${isMenuOpen ? 'show' : ''}`}
        >
          <ul className="nav-links">
            {['Home', 'About', 'Team', 'Blog'].map((item) => (
              <li key={item} className="navItem">
                <Link href={`/${item.toLowerCase()}`} className="nav-links">
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      </nav>
  );
};

export default Navbar;