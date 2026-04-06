"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './Navbar.module.css';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Close mobile menu on resize to desktop dimensions
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1024 && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isOpen]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Handle scroll behavior for hiding navbar
  useEffect(() => {
    const handleScroll = () => {
      if (typeof window !== 'undefined') {
        const currentScrollY = window.scrollY;
        
        // Hide if scrolling down and scrolled past a tiny threshold
        if (currentScrollY > lastScrollY && currentScrollY > 80) {
          setIsVisible(false);
        } else {
          // Show if scrolling up or at the top
          setIsVisible(true);
        }
        
        // Always show the navbar if the mobile menu is open
        if (isOpen) {
          setIsVisible(true);
        }
        
        setLastScrollY(currentScrollY);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY, isOpen]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <>
      <header className={`${styles.header} ${(!isVisible && !isOpen) ? styles.hidden : ''}`}>
        <div className={styles.container}>
        {/* Left: Logo */}
        <div className={styles.logo}>
          <Link href="/" onClick={closeMenu}>
            <div className={styles.logoWrapper}>
              <Image 
                src="/images/shared/pegasus-logo-nav.png" 
                alt="Pegasus Web Design Logo"
                fill
                sizes="(max-width: 768px) 130px, 160px"
                className={styles.logoImage}
                priority
              />
            </div>
          </Link>
        </div>

        {/* Center: Desktop Nav Links */}
        <nav className={styles.desktopNav}>
          <Link href="/work" className={styles.navLink}>Work</Link>
          <Link href="/what-we-do" className={styles.navLink}>What We Do</Link>
          <Link href="/about" className={styles.navLink}>About</Link>
        </nav>

        {/* Right: Desktop CTA */}
        <div className={styles.ctaWrapper}>
          <button className={styles.ctaButton}>
            Get your free proposal
            <span className={styles.arrow}>&rarr;</span>
          </button>
        </div>

        {/* Mobile: Hamburger Button */}
        <button 
          className={styles.mobileToggle} 
          onClick={toggleMenu} 
          data-open={isOpen}
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          <div className={styles.bar}></div>
          <div className={styles.bar}></div>
          <div className={styles.bar}></div>
        </button>
      </div>

      {/* Mobile: Fullscreen Menu Dropdown */}
      <div className={styles.mobileMenu} data-open={isOpen}>
        <nav className={styles.mobileNavLinks}>
          <Link href="/work" className={styles.mobileNavLink} onClick={closeMenu}>Work</Link>
          <Link href="/what-we-do" className={styles.mobileNavLink} onClick={closeMenu}>What We Do</Link>
          <Link href="/about" className={styles.mobileNavLink} onClick={closeMenu}>About</Link>
        </nav>
        
        <div className={styles.mobileCtaWrapper}>
          <button className={styles.ctaButton} onClick={closeMenu}>
            Get your free proposal
            <span className={styles.arrow}>&rarr;</span>
          </button>
        </div>
      </div>
    </header>
    <div className={styles.spacer}></div>
    </>
  );
}
