import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Send, ChefHat, Utensils, Coffee, Clock } from 'lucide-react';
import BackgroundTexture from '../components/BackgroundTexture';

const Contact = () => {
    const handleEnquiry = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData.entries());

        const message = `*✨ New Deluxe Enquiry ✨*\n\n*Name:* ${data.name}\n*Phone:* ${data.phone}\n*Date:* ${data.date}\n*Location:* ${data.location}\n*Type:* ${data.type}\n*Preference:* ${data.preference}\n*Time:* ${data.time}\n*Guests:* ${data.members}\n*Email:* ${data.email}\n*Comments:* ${data.comments}`;

        const url = `https://wa.me/919030927239?text=${encodeURIComponent(message)}`;
        window.open(url, '_blank');
    };

    return (
        <div className="min-h-screen bg-cream relative overflow-hidden pt-32 pb-24">
            <BackgroundTexture />

            {/* Background glowing orbs */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-dark-green/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-luxury-gold/5 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>

            <div className="container mx-auto px-8 md:px-12 lg:px-24 xl:px-32 relative z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-center mb-16 max-w-3xl mx-auto"
                >
                    <span className="text-luxury-gold uppercase tracking-[0.3em] font-bold text-sm mb-4 block">Let's Connect</span>
                    <h1 className="text-5xl md:text-7xl font-playfair font-bold text-dark-green mb-6 drop-shadow-sm">
                        Get In Touch
                    </h1>
                    <div className="w-32 h-[2px] bg-luxury-gold mx-auto mb-8 relative">
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full border-2 border-luxury-gold bg-cream"></div>
                    </div>
                    <p className="text-gray-600 text-xl font-light font-poppins leading-relaxed">
                        Ready to make your event unforgettable? Our event specialists are here to craft the perfect culinary experience for you.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-5 gap-0 bg-transparent rounded-[3rem] shadow-[0_30px_60px_rgba(0,0,0,0.08)] mb-24 mt-16 md:mt-20 lg:mt-0 border border-gray-100 flex-col-reverse lg:flex-row relative z-20">

                    {/* Left Side: Contact Information (Dark Green) */}
                    <div className="lg:col-span-2 bg-dark-green p-10 lg:p-12 text-white relative overflow-visible flex flex-col justify-between rounded-t-[3rem] lg:rounded-t-none lg:rounded-l-[3rem]">
                        <div className="relative z-10 flex flex-col flex-grow pt-48 lg:pt-60">
                            {/* Overflowing Avatar element */}
                            <div className="absolute top-12 lg:top-16 left-1/2 -translate-x-1/2 w-72 h-80 lg:w-80 lg:h-96 flex items-start justify-center z-20 pointer-events-none drop-shadow-2xl mb-12">
                                <img src="/avatar.png" alt="Contact Support Character" className="h-full object-contain" style={{ filter: 'drop-shadow(0 15px 20px rgba(0,0,0,0.4))' }} />
                            </div>

                            <h2 className="text-3xl font-playfair font-black text-white mb-10 tracking-wide mt-56 lg:mt-64">Get in Touch</h2>

                            <div className="space-y-8 w-full">
                                <motion.div whileHover={{ x: 3 }} className="flex items-center group cursor-pointer" onClick={() => window.open('https://maps.google.com')}>
                                    <div className="w-12 h-12 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center mr-5 transition-colors duration-300 flex-shrink-0 shadow-md">
                                        <MapPin size={20} className="text-[#faba50] transition-colors group-hover:text-dark-green" />
                                    </div>
                                    <div className="flex flex-col">
                                        <h3 className="font-playfair font-bold text-lg text-white tracking-wide">Our Location</h3>
                                        <p className="text-gray-300 font-light text-sm mt-1">Secunderabad Hyderabad</p>
                                    </div>
                                </motion.div>

                                <motion.div whileHover={{ x: 3 }} className="flex items-center group cursor-pointer" onClick={() => window.open('tel:+918555969207')}>
                                    <div className="w-12 h-12 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center mr-5 transition-colors duration-300 flex-shrink-0 shadow-md">
                                        <Phone size={20} className="text-[#faba50] transition-colors group-hover:text-dark-green" />
                                    </div>
                                    <div className="flex flex-col">
                                        <h3 className="font-playfair font-bold text-lg text-white tracking-wide">Phone Number</h3>
                                        <p className="text-gray-300 font-light text-sm mt-1">8555969207</p>
                                    </div>
                                </motion.div>

                                <motion.div whileHover={{ x: 3 }} className="flex items-center group cursor-pointer" onClick={() => window.open('mailto:shrithikcatering@gmail.com')}>
                                    <div className="w-12 h-12 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center mr-5 transition-colors duration-300 flex-shrink-0 shadow-md">
                                        <Mail size={20} className="text-[#faba50] transition-colors group-hover:text-dark-green" />
                                    </div>
                                    <div className="flex flex-col">
                                        <h3 className="font-playfair font-bold text-lg text-white tracking-wide">Email Address</h3>
                                        <p className="text-gray-300 font-light text-sm mt-1">shrithikcatering@gmail.com</p>
                                    </div>
                                </motion.div>
                            </div>
                        </div>

                        <div className="relative z-10 mt-12 pt-8 border-t border-white/10">
                            <h3 className="font-playfair font-bold text-lg text-white tracking-wide mb-6">Business Hours</h3>

                            <div className="space-y-3 text-[15px] font-light">
                                <div className="flex justify-between items-center text-gray-300">
                                    <span>Mon - Fri:</span>
                                    <span>10:00 AM - 8:00 PM</span>
                                </div>
                                <div className="flex justify-between items-center text-gray-300">
                                    <span>Saturday:</span>
                                    <span>10:00 AM - 9:00 PM</span>
                                </div>
                                <div className="flex justify-between items-center text-gray-300">
                                    <span>Sunday:</span>
                                    <span>11:00 AM - 8:00 PM</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Side: The Form */}
                    <div className="lg:col-span-3 p-12 lg:p-16 bg-white relative rounded-b-[3rem] lg:rounded-b-none lg:rounded-r-[3rem]">
                        <h2 className="text-4xl font-playfair font-bold text-dark-green mb-2">Send an Enquiry</h2>
                        <p className="text-gray-500 font-light mb-8">Fill out the details below, and we'll get back to you with a curated proposal.</p>

                        <div className="inline-block bg-cream text-dark-green px-4 py-2 rounded-full text-sm font-medium mb-8 border border-luxury-gold/30 flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-luxury-gold"></span>
                            Note: Cleaning staff and Crockery not included by default
                        </div>

                        <form onSubmit={handleEnquiry} className="space-y-6 relative z-10">
                            {/* Row 1 */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-dark-green uppercase tracking-widest px-1">Full Name</label>
                                    <input required name="name" type="text" className="w-full px-5 py-4 rounded-xl bg-gray-50/50 border border-gray-200 focus:bg-white focus:border-luxury-gold focus:ring-4 focus:ring-luxury-gold/10 outline-none transition-all duration-300" placeholder="John Doe" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-dark-green uppercase tracking-widest px-1">Mobile Number</label>
                                    <input required name="phone" type="tel" className="w-full px-5 py-4 rounded-xl bg-gray-50/50 border border-gray-200 focus:bg-white focus:border-luxury-gold focus:ring-4 focus:ring-luxury-gold/10 outline-none transition-all duration-300" placeholder="+91 99999 99999" />
                                </div>
                            </div>

                            {/* Row 2 */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-dark-green uppercase tracking-widest px-1">Event Date</label>
                                    <input required name="date" type="date" className="w-full px-5 py-4 rounded-xl bg-gray-50/50 border border-gray-200 focus:bg-white focus:border-luxury-gold focus:ring-4 focus:ring-luxury-gold/10 outline-none transition-all duration-300 text-gray-700" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-dark-green uppercase tracking-widest px-1">Location</label>
                                    <input required name="location" type="text" className="w-full px-5 py-4 rounded-xl bg-gray-50/50 border border-gray-200 focus:bg-white focus:border-luxury-gold focus:ring-4 focus:ring-luxury-gold/10 outline-none transition-all duration-300" placeholder="City or Venue Name" />
                                </div>
                            </div>

                            {/* Row 3 */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-dark-green uppercase tracking-widest px-1">Event Type</label>
                                    <div className="relative">
                                        <select name="type" className="w-full px-5 py-4 rounded-xl bg-gray-50/50 border border-gray-200 focus:bg-white focus:border-luxury-gold focus:ring-4 focus:ring-luxury-gold/10 outline-none transition-all duration-300 text-gray-700 appearance-none cursor-pointer">
                                            <option>Wedding & Reception</option>
                                            <option>Birthday Party</option>
                                            <option>Engagement</option>
                                            <option>Corporate Event</option>
                                            <option>House Warming</option>
                                            <option>Other Event</option>
                                        </select>
                                        <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-luxury-gold">
                                            <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 1.5L6 6.5L11 1.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                                        </div>
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-dark-green uppercase tracking-widest px-1">Dietary Preference</label>
                                    <div className="relative">
                                        <select name="preference" className="w-full px-5 py-4 rounded-xl bg-gray-50/50 border border-gray-200 focus:bg-white focus:border-luxury-gold focus:ring-4 focus:ring-luxury-gold/10 outline-none transition-all duration-300 text-gray-700 appearance-none cursor-pointer">
                                            <option>Vegetarian</option>
                                            <option>Non-Vegetarian</option>
                                            <option>Mixed (Both Veg & Non-Veg)</option>
                                        </select>
                                        <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-luxury-gold">
                                            <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 1.5L6 6.5L11 1.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Row 4 */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-dark-green uppercase tracking-widest px-1">Time of Event</label>
                                    <div className="relative">
                                        <select name="time" className="w-full px-5 py-4 rounded-xl bg-gray-50/50 border border-gray-200 focus:bg-white focus:border-luxury-gold focus:ring-4 focus:ring-luxury-gold/10 outline-none transition-all duration-300 text-gray-700 appearance-none cursor-pointer">
                                            <option>Lunch</option>
                                            <option>Dinner</option>
                                            <option>High Tea</option>
                                            <option>Breakfast</option>
                                        </select>
                                        <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-luxury-gold">
                                            <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 1.5L6 6.5L11 1.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                                        </div>
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-dark-green uppercase tracking-widest px-1">Expected Guests</label>
                                    <input required name="members" type="number" className="w-full px-5 py-4 rounded-xl bg-gray-50/50 border border-gray-200 focus:bg-white focus:border-luxury-gold focus:ring-4 focus:ring-luxury-gold/10 outline-none transition-all duration-300" placeholder="e.g., 500" />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-bold text-dark-green uppercase tracking-widest px-1">Email Address</label>
                                <input name="email" type="email" className="w-full px-5 py-4 rounded-xl bg-gray-50/50 border border-gray-200 focus:bg-white focus:border-luxury-gold focus:ring-4 focus:ring-luxury-gold/10 outline-none transition-all duration-300" placeholder="johndoe@example.com (Optional)" />
                            </div>

                            <div className="space-y-2 pt-2">
                                <label className="text-sm font-bold text-dark-green uppercase tracking-widest px-1">Additional Details</label>
                                <textarea name="comments" rows="3" className="w-full px-5 py-4 rounded-xl bg-gray-50/50 border border-gray-200 focus:bg-white focus:border-luxury-gold focus:ring-4 focus:ring-luxury-gold/10 outline-none transition-all duration-300 resize-none" placeholder="Any special themes, dietary requirements, or specific dishes you'd like?"></textarea>
                            </div>

                            <div className="pt-4">
                                <motion.button
                                    whileHover={{ scale: 1.01, y: -2 }}
                                    whileTap={{ scale: 0.98 }}
                                    type="submit"
                                    className="w-full bg-dark-green text-luxury-gold font-bold py-5 rounded-2xl shadow-[0_10px_30px_rgba(0,21,41,0.2)] hover:shadow-[0_15px_40px_rgba(0,21,41,0.3)] transition-all duration-300 flex items-center justify-center gap-3 text-lg uppercase tracking-widest border border-luxury-gold/20 hover:border-luxury-gold"
                                >
                                    <Send size={22} className="stroke-[2.5]" />
                                    Submit Enquiry via WhatsApp
                                </motion.button>
                            </div>
                        </form>
                    </div>

                </div>

                {/* Map Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="w-full rounded-[3rem] overflow-hidden shadow-2xl relative border-8 border-white bg-white h-[450px]"
                >
                    <div className="absolute top-6 left-6 z-10 bg-white/90 backdrop-blur-md px-6 py-4 rounded-2xl shadow-xl border border-gray-100 hidden md:block">
                        <h3 className="font-playfair font-bold text-dark-green text-xl mb-1">Our Kitchen Base</h3>
                        <p className="text-gray-500 font-light text-sm">Open 9AM - 9PM</p>
                    </div>

                    <iframe
                        title="SA Caterers Location map"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.071271708896!2d78.49887531487664!3d17.45610898803734!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9a67a6e60b21%3A0xe5f9b4f6b280148!2sSA%20Hyderabad%20Caterers!5e0!3m2!1sen!2sin!4v1677651234567!5m2!1sen!2sin"
                        width="100%"
                        height="100%"
                        style={{ border: 0, filter: 'grayscale(0.3) saturate(0.8) contrast(1.1) brightness(1.05)', mixBlendMode: 'multiply' }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </motion.div>
            </div>
        </div>
    );
};

export default Contact;
