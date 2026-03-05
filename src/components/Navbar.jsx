import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Instagram, UtensilsCrossed } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const DARK_GREEN = '#1B3B2D';
const GOLD = '#FFCB65';
const WHITE = '#ffffff';

const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Menu', path: '/menu' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
];

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const location = useLocation();

    const isHome = location.pathname === '/';
    const showSolid = isScrolled || !isHome;

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close menu on route change
    useEffect(() => {
        setIsMobileMenuOpen(false);
    }, [location.pathname]);

    return (
        <>
            {/* ─── Main Nav Bar ─── */}
            <nav
                style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    right: 0,
                    zIndex: 100,
                    transition: 'background-color 0.3s ease, padding 0.3s ease',
                    backgroundColor: showSolid ? DARK_GREEN : 'transparent',
                    borderBottom: showSolid ? `1px solid rgba(255,203,101,0.25)` : 'none',
                    padding: showSolid ? '12px 0' : '20px 0',
                }}
            >
                <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>

                    {/* Logo */}
                    <Link to="/" style={{ display: 'flex', alignItems: 'center' }}>
                        <img src="/logo.png" alt="SA Caterers" className={`nav-logo ${showSolid ? 'scrolled' : ''}`} />
                    </Link>

                    {/* Desktop Links */}
                    <div style={{ display: 'none' }} className="desktop-nav-links">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                style={{ color: WHITE, textDecoration: 'none', fontSize: '17px', fontWeight: 500, letterSpacing: '0.5px', position: 'relative', padding: '4px 0' }}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <Link
                            to="/contact"
                            style={{ backgroundColor: GOLD, color: DARK_GREEN, textDecoration: 'none', padding: '10px 24px', borderRadius: '50px', fontWeight: 700, fontSize: '15px' }}
                        >
                            Book Event
                        </Link>
                    </div>

                    {/* Hamburger Button (mobile only) */}
                    <button
                        onClick={() => setIsMobileMenuOpen(true)}
                        className="mobile-hamburger"
                        style={{
                            background: 'none',
                            border: 'none',
                            cursor: 'pointer',
                            padding: '8px',
                            color: WHITE,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}
                        aria-label="Open menu"
                    >
                        <Menu size={28} color={WHITE} />
                    </button>
                </div>
            </nav>

            {/* ─── Mobile Full-Screen Menu ─── */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            key="backdrop"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.25 }}
                            onClick={() => setIsMobileMenuOpen(false)}
                            style={{
                                position: 'fixed',
                                inset: 0,
                                backgroundColor: 'rgba(0,0,0,0.55)',
                                zIndex: 200,
                            }}
                        />

                        {/* Drawer Panel */}
                        <motion.div
                            key="drawer"
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ type: 'tween', duration: 0.3 }}
                            style={{
                                position: 'fixed',
                                top: 0,
                                right: 0,
                                bottom: 0,
                                width: '80%',
                                maxWidth: '320px',
                                backgroundColor: '#1B3B2D',
                                zIndex: 300,
                                display: 'flex',
                                flexDirection: 'column',
                                padding: '0',
                                boxShadow: '-8px 0 40px rgba(0,0,0,0.4)',
                            }}
                        >
                            {/* Header */}
                            <div style={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                padding: '20px 24px',
                                borderBottom: '1px solid rgba(255,203,101,0.2)',
                            }}>
                                <img src="/logo.png" alt="SA Caterers" style={{ height: '64px', width: 'auto', objectFit: 'contain' }} />
                                <button
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '6px', borderRadius: '50%', backgroundColor: 'rgba(255,255,255,0.08)' }}
                                    aria-label="Close menu"
                                >
                                    <X size={22} color={WHITE} />
                                </button>
                            </div>

                            {/* Nav Links */}
                            <div style={{ flex: 1, padding: '32px 24px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                                {navLinks.map((link, i) => (
                                    <motion.div
                                        key={link.name}
                                        initial={{ opacity: 0, x: 30 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.1 + i * 0.07 }}
                                    >
                                        <Link
                                            to={link.path}
                                            onClick={() => setIsMobileMenuOpen(false)}
                                            style={{
                                                display: 'block',
                                                color: location.pathname === link.path ? GOLD : WHITE,
                                                textDecoration: 'none',
                                                fontSize: '22px',
                                                fontWeight: location.pathname === link.path ? 700 : 500,
                                                padding: '14px 16px',
                                                borderRadius: '12px',
                                                backgroundColor: location.pathname === link.path ? 'rgba(255,203,101,0.12)' : 'transparent',
                                                borderLeft: location.pathname === link.path ? `3px solid ${GOLD}` : '3px solid transparent',
                                                letterSpacing: '0.3px',
                                                transition: 'all 0.2s ease',
                                            }}
                                        >
                                            {link.name}
                                        </Link>
                                    </motion.div>
                                ))}
                            </div>

                            {/* CTA Button */}
                            <div style={{ padding: '0 24px 24px' }}>
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.45 }}
                                >
                                    <Link
                                        to="/contact"
                                        onClick={() => setIsMobileMenuOpen(false)}
                                        style={{
                                            display: 'block',
                                            backgroundColor: GOLD,
                                            color: DARK_GREEN,
                                            textDecoration: 'none',
                                            textAlign: 'center',
                                            padding: '15px',
                                            borderRadius: '50px',
                                            fontWeight: 700,
                                            fontSize: '16px',
                                            letterSpacing: '0.3px',
                                        }}
                                    >
                                        Book Your Event Today
                                    </Link>
                                </motion.div>
                            </div>

                            {/* Footer */}
                            <div style={{
                                display: 'flex',
                                justifyContent: 'center',
                                gap: '28px',
                                padding: '20px 24px',
                                borderTop: '1px solid rgba(255,255,255,0.1)',
                            }}>
                                <a href="https://instagram.com" target="_blank" rel="noreferrer" style={{ color: WHITE }}>
                                    <Instagram size={22} />
                                </a>
                                <a href="tel:9030927239" style={{ color: WHITE }}>
                                    <Phone size={22} />
                                </a>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>

            {/* ─── Responsive desktop styles ─── */}
            <style>{`
                .nav-logo {
                    width: auto;
                    object-fit: contain;
                    transition: height 0.3s ease;
                    height: 80px;
                }
                .nav-logo.scrolled {
                    height: 64px;
                }

                @media (min-width: 768px) {
                    .nav-logo {
                        height: 130px;
                    }
                    .nav-logo.scrolled {
                        height: 96px;
                    }
                    .desktop-nav-links {
                        display: flex !important;
                        align-items: center;
                        gap: 36px;
                    }
                    .mobile-hamburger {
                        display: none !important;
                    }
                }
            `}</style>
        </>
    );
};

export default Navbar;
