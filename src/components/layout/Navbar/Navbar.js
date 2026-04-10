"use client";

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './Navbar.module.css';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ArrowRight } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isNavigating, setIsNavigating] = useState(false);
  const navRef = useRef(null);

  useGSAP(() => {
    gsap.set(navRef.current, { visibility: "visible" });
    gsap.from(navRef.current, {
      opacity: 0,
      duration: 0.8,
      ease: "power3.out"
    });
  }, { scope: navRef });

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

        if (isNavigating) {
          setLastScrollY(currentScrollY);
          return;
        }

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
  }, [lastScrollY, isOpen, isNavigating]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const handleNavClick = () => {
    setIsVisible(false);
    setIsNavigating(true);
    setIsOpen(false);
    setTimeout(() => {
      setIsNavigating(false);
    }, 1000);
  };

  // Route navigation to /work (and case study pages under it) keeps navbar visible for first-view UX.
  const handleWorkNavClick = () => {
    setIsVisible(true);
    setIsNavigating(false);
    setIsOpen(false);
  };

  useEffect(() => {
    const handleProgrammaticNav = () => {
      setIsVisible(false);
      setIsNavigating(true);
      setTimeout(() => {
        setIsNavigating(false);
      }, 1000);
    };

    window.addEventListener('programmaticNav', handleProgrammaticNav);
    return () => window.removeEventListener('programmaticNav', handleProgrammaticNav);
  }, []);

  return (
    <>
      <header ref={navRef} className={`${styles.header} ${(!isVisible && !isOpen) ? styles.hidden : ''}`} style={{ visibility: 'hidden' }}>
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
            <Link href="/#services-alt" className={styles.navLink} onClick={handleNavClick}>Services</Link>
            <Link href="/work" className={styles.navLink} onClick={handleWorkNavClick}>Work</Link>
            <Link href="/#about" className={styles.navLink} onClick={handleNavClick}>About Us</Link>
            <Link href="/work/mac-auto-services" className={styles.navLink} onClick={handleWorkNavClick}>Case Study</Link>
          </nav>

          {/* Right: Desktop CTA */}
          <div className={styles.ctaWrapper}>
            <Link href="/#contact" className={styles.ctaButton} onClick={handleNavClick}>
              Get your free proposal
              <ArrowRight size={20} className={styles.arrow} />
            </Link>
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
            <Link href="/#services-alt" className={styles.mobileNavLink} onClick={handleNavClick}>Services</Link>
            <Link href="/work" className={styles.mobileNavLink} onClick={handleWorkNavClick}>Work</Link>
            <Link href="/#about" className={styles.mobileNavLink} onClick={handleNavClick}>About US</Link>
            <Link href="/work/mac-auto-services" className={styles.mobileNavLink} onClick={handleWorkNavClick}>Case Study</Link>
          </nav>

          <div className={styles.mobileCtaWrapper}>
            <Link href="#contact" className={styles.ctaButton} onClick={handleNavClick}>
              Get your free proposal
              <ArrowRight size={20} className={styles.arrow} />
            </Link>
          </div>
        </div>
      </header>
      <div className={styles.spacer}></div>
    </>
  );
}
