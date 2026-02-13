import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-green-texture text-white relative overflow-hidden">
            {/* Top Gold Line */}
            <div className="w-full h-1 bg-gradient-to-r from-transparent via-luxury-gold to-transparent opacity-80"></div>

            {/* Decorative Background */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-luxury-gold/5 rounded-full blur-[100px] pointer-events-none"></div>

            <div className="container mx-auto px-4 py-12 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
                    {/* Brand */}
                    <div className="col-span-1 md:col-span-2">
                        <Link to="/" className="text-2xl font-playfair font-bold text-luxury-gold mb-4 block">
                            SA Caterers
                        </Link>
                        <p className="text-gray-300 mb-6 max-w-sm text-sm leading-relaxed">
                            Bringing the royal taste of Hyderabad to your celebrations. We specialize in authentic catering for weddings, corporate events, and private parties.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center hover:bg-luxury-gold hover:text-dark-green hover:border-luxury-gold transition-all duration-300 group">
                                <Instagram size={16} />
                            </a>
                            <a href="#" className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center hover:bg-luxury-gold hover:text-dark-green hover:border-luxury-gold transition-all duration-300 group">
                                <Facebook size={16} />
                            </a>
                            <a href="#" className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center hover:bg-luxury-gold hover:text-dark-green hover:border-luxury-gold transition-all duration-300 group">
                                <Twitter size={16} />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-playfair font-bold mb-4 text-luxury-gold">Quick Links</h4>
                        <ul className="space-y-2">
                            {['Home', 'About Us', 'Menu', 'Contact'].map((item) => (
                                <li key={item}>
                                    <Link
                                        to={item === 'Home' ? '/' : `/${item.toLowerCase().replace(' ', '-')}`}
                                        className="text-gray-300 hover:text-luxury-gold transition-colors block py-0.5 text-sm"
                                    >
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-lg font-playfair font-bold mb-4 text-luxury-gold">Contact Us</h4>
                        <ul className="space-y-3 text-sm">
                            <li className="flex items-start">
                                <MapPin className="mr-3 text-luxury-gold mt-0.5 flex-shrink-0" size={18} />
                                <span className="text-gray-300">Plot No. 49, 1st Floor, P & T Colony, Karkhana, Secunderabad, Telangana - 500009</span>
                            </li>
                            <li className="flex items-center">
                                <Phone className="mr-3 text-luxury-gold flex-shrink-0" size={18} />
                                <a href="tel:9030927239" className="text-gray-300 hover:text-luxury-gold transition-colors">+91 90309 27239</a>
                            </li>
                            <li className="flex items-center">
                                <Mail className="mr-3 text-luxury-gold flex-shrink-0" size={18} />
                                <a href="mailto:info@sahcaterers.com" className="text-gray-300 hover:text-luxury-gold transition-colors">info@sahcaterers.com</a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/10 mt-12 pt-6 text-center text-gray-500 text-xs">
                    <p>&copy; {new Date().getFullYear()} SA Caterers. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
