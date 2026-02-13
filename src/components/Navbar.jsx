import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Instagram } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '../lib/utils';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Menu', path: '/menu' },
        { name: 'About', path: '/about' },
        { name: 'Contact', path: '/contact' },
    ];

    const isHome = location.pathname === '/';
    const isScrolledOrNotHome = isScrolled || !isHome;

    return (
        <nav
            className={cn(
                'fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out',
                isScrolledOrNotHome ? 'bg-dark-green/95 backdrop-blur-md shadow-lg py-4 border-b border-luxury-gold/20' : 'bg-transparent py-6'
            )}
        >
            <div className="container mx-auto px-4 flex justify-between items-center">
                {/* Logo */}
                <Link to="/" className="text-2xl md:text-3xl font-bold font-playfair text-luxury-gold drop-shadow-sm">
                    SA Caterers
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center space-x-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.path}
                            className="relative text-white font-poppins text-lg hover:text-luxury-gold transition-colors group tracking-wide"
                        >
                            {link.name}
                            <span className="absolute left-0 bottom-[-5px] w-0 h-[2px] bg-luxury-gold transition-all duration-300 group-hover:w-full"></span>
                        </Link>
                    ))}
                    <Link
                        to="/contact"
                        className="bg-luxury-gold text-dark-green px-6 py-2.5 rounded-full hover:bg-white hover:text-dark-green transition-all duration-300 font-bold shadow-lg transform hover:-translate-y-0.5"
                    >
                        Book Event
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden">
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="text-white hover:text-luxury-gold transition-colors"
                    >
                        {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Drawer */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ x: '100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '100%' }}
                        transition={{ type: 'tween', duration: 0.3 }}
                        className="fixed inset-y-0 right-0 w-[80%] max-w-sm bg-dark-green shadow-xl z-50 flex flex-col p-8 md:hidden border-l border-luxury-gold/30"
                    >
                        <div className="flex justify-between items-center mb-10 border-b border-white/10 pb-4">
                            <span className="font-playfair text-luxury-gold text-xl font-bold">SA Caterers</span>
                            <button onClick={() => setIsMobileMenuOpen(false)} className="text-white p-2">
                                <X size={28} />
                            </button>
                        </div>

                        <div className="flex flex-col space-y-6">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    to={link.path}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="text-white text-xl font-poppins pb-2 hover:text-luxury-gold transition-colors border-b border-transparent hover:border-luxury-gold w-max"
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <Link
                                to="/contact"
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="bg-luxury-gold text-dark-green text-center py-3 rounded-full font-bold mt-4 shadow-lg active:scale-95 transition-transform"
                            >
                                Book Your Event Today
                            </Link>
                        </div>

                        <div className="mt-auto flex justify-center space-x-8 pt-8 border-t border-white/10">
                            <a href="#" className="text-white hover:text-luxury-gold transition-colors"><Instagram size={24} /></a>
                            <a href="tel:9030927239" className="text-white hover:text-luxury-gold transition-colors"><Phone size={24} /></a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
