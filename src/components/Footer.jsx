import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Instagram, Facebook, Twitter, Clock, ArrowRight, Check } from 'lucide-react';

const Footer = () => {
    const [email, setEmail] = useState('');
    const [subscribed, setSubscribed] = useState(false);

    const handleSubscribe = (e) => {
        e.preventDefault();
        if (email) {
            // Open user's email client to send the subscription request
            const subject = encodeURIComponent("New Newsletter Subscription Request");
            const body = encodeURIComponent(`Hello SA Caterers,\n\nPlease add my email address to your newsletter subscription list.\n\nMy Email: ${email}\n\nThank you!`);
            window.location.href = `mailto:info@sahcaterers.com?subject=${subject}&body=${body}`;

            setSubscribed(true);
            setEmail('');
            // Reset success message after 3 seconds
            setTimeout(() => setSubscribed(false), 3000);
        }
    };

    return (
        <footer className="bg-green-texture text-white relative overflow-hidden pt-10">
            {/* Top Gold Line */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-luxury-gold to-transparent opacity-80"></div>

            {/* Decorative Background Glows */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-luxury-gold/5 rounded-full blur-[120px] pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-dark-green/50 rounded-full blur-[100px] pointer-events-none"></div>

            <div className="container mx-auto px-4 py-12 relative z-10 max-w-7xl">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
                    {/* Brand & Socials */}
                    <div className="pr-4">
                        <Link to="/" className="text-3xl font-playfair font-bold text-luxury-gold mb-6 block drop-shadow-sm">
                            SA Caterers
                        </Link>
                        <p className="text-gray-300 mb-8 max-w-sm text-[15px] leading-relaxed font-poppins font-light">
                            Elevating your celebrations with the authentic, royal taste of Hyderabad. We bring passion, tradition, and perfection to every plate we serve.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-luxury-gold hover:text-dark-green hover:border-luxury-gold transition-all duration-300 group shadow-lg">
                                <Instagram size={18} className="text-gray-300 group-hover:text-dark-green transition-colors" />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-luxury-gold hover:text-dark-green hover:border-luxury-gold transition-all duration-300 group shadow-lg">
                                <Facebook size={18} className="text-gray-300 group-hover:text-dark-green transition-colors" />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-luxury-gold hover:text-dark-green hover:border-luxury-gold transition-all duration-300 group shadow-lg">
                                <Twitter size={18} className="text-gray-300 group-hover:text-dark-green transition-colors" />
                            </a>
                        </div>
                    </div>

                    {/* Quick & Service Links */}
                    <div className="grid grid-cols-2 gap-4 lg:gap-8 col-span-1 md:col-span-2 lg:col-span-1">
                        <div>
                            <h4 className="text-lg font-playfair font-bold mb-6 text-luxury-gold tracking-wide uppercase text-sm">Explore</h4>
                            <ul className="space-y-3 font-poppins">
                                {[
                                    { label: 'Home', path: '/' },
                                    { label: 'About Us', path: '/about' },
                                    { label: 'Menu', path: '/menu' },
                                    { label: 'Contact', path: '/contact' }
                                ].map((item) => (
                                    <li key={item.label}>
                                        <Link
                                            to={item.path}
                                            className="text-gray-400 hover:text-luxury-gold transition-colors inline-block text-[15px] hover:translate-x-1 transform duration-200"
                                        >
                                            {item.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-lg font-playfair font-bold mb-6 text-luxury-gold tracking-wide uppercase text-sm">Services</h4>
                            <ul className="space-y-3 font-poppins">
                                {['Wedding Catering', 'Corporate Events', 'Private Parties', 'Live Counters', 'Outdoor Catering'].map((item) => (
                                    <li key={item}>
                                        <a href="#" className="text-gray-400 hover:text-luxury-gold transition-colors inline-block text-[15px] hover:translate-x-1 transform duration-200">
                                            {item}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-lg font-playfair font-bold mb-6 text-luxury-gold tracking-wide uppercase text-sm">Get in Touch</h4>
                        <ul className="space-y-5 font-poppins">
                            <li className="flex items-start">
                                <div className="w-8 h-8 rounded-full bg-luxury-gold/10 flex items-center justify-center mr-4 flex-shrink-0 mt-0.5">
                                    <MapPin className="text-luxury-gold" size={16} />
                                </div>
                                <span className="text-gray-400 text-[15px] leading-relaxed">Plot No. 49, 1st Floor, P & T Colony, Karkhana, Secunderabad, Telangana - 500009</span>
                            </li>
                            <li className="flex items-center">
                                <div className="w-8 h-8 rounded-full bg-luxury-gold/10 flex items-center justify-center mr-4 flex-shrink-0">
                                    <Phone className="text-luxury-gold" size={16} />
                                </div>
                                <a href="tel:9030927239" className="text-gray-400 hover:text-luxury-gold transition-colors text-[15px]">+91 90309 27239</a>
                            </li>
                            <li className="flex items-center">
                                <div className="w-8 h-8 rounded-full bg-luxury-gold/10 flex items-center justify-center mr-4 flex-shrink-0">
                                    <Mail className="text-luxury-gold" size={16} />
                                </div>
                                <a href="mailto:info@sahcaterers.com" className="text-gray-400 hover:text-luxury-gold transition-colors text-[15px]">info@sahcaterers.com</a>
                            </li>
                        </ul>
                    </div>

                    {/* Newsletter & Hours */}
                    <div className="lg:pl-4">
                        <h4 className="text-lg font-playfair font-bold mb-6 text-luxury-gold tracking-wide uppercase text-sm">Stay Updated</h4>
                        <p className="text-gray-400 text-[14px] mb-4 font-poppins">
                            Subscribe to receive exclusive offers and seasonal menu updates.
                        </p>
                        <form className="mb-8 relative h-[46px]" onSubmit={handleSubscribe}>
                            {subscribed ? (
                                <div className="absolute inset-0 bg-luxury-gold/20 border border-luxury-gold/50 rounded-full flex items-center px-5 text-sm font-poppins text-luxury-gold backdrop-blur-sm animate-in fade-in duration-300">
                                    <Check size={18} className="mr-2" strokeWidth={3} />
                                    Successfully subscribed!
                                </div>
                            ) : (
                                <>
                                    <input
                                        type="email"
                                        placeholder="Your email address"
                                        required
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        className="w-full h-full bg-white/5 border border-white/20 rounded-full px-5 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-luxury-gold focus:bg-white/10 transition-all font-poppins"
                                    />
                                    <button
                                        type="submit"
                                        className="absolute right-1.5 top-1.5 bottom-1.5 w-[34px] h-[34px] my-auto bg-luxury-gold rounded-full flex items-center justify-center text-dark-green hover:bg-[#d6a54e] transition-colors"
                                    >
                                        <ArrowRight size={18} strokeWidth={2.5} />
                                    </button>
                                </>
                            )}
                        </form>

                        <div className="flex items-start">
                            <Clock className="text-luxury-gold mr-3 mt-1 flex-shrink-0" size={18} />
                            <div>
                                <h5 className="text-white text-sm font-bold font-poppins mb-1">Working Hours</h5>
                                <p className="text-gray-400 text-sm font-poppins">Mon - Sun: 9:00 AM - 9:00 PM</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-white/10 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-500 text-[13px] font-poppins">
                    <p>&copy; {new Date().getFullYear()} SA Caterers. All rights reserved.</p>
                    <div className="flex space-x-6 mt-4 md:mt-0">
                        <a href="#" className="hover:text-luxury-gold transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-luxury-gold transition-colors">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
