import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Send, ChefHat, Utensils, Coffee } from 'lucide-react';
import BackgroundTexture from '../components/BackgroundTexture';

const Contact = () => {
    const handleEnquiry = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData.entries());

        const message = `* New Enquiry *\n\n * Name:* ${data.name} \n * Phone:* ${data.phone} \n * Date:* ${data.date} \n * Location:* ${data.location} \n * Type:* ${data.type} \n * Preference:* ${data.preference} \n * Time:* ${data.time} \n * Members:* ${data.members} \n * Email:* ${data.email} \n * Comments:* ${data.comments} `;

        const url = `https://wa.me/919030927239?text=${encodeURIComponent(message)}`;
        window.open(url, '_blank');
    };

    return (
        <div className="min-h-screen bg-[#FAFAFA] pt-24 pb-20 relative overflow-hidden">
            <BackgroundTexture />

            <div className="container mx-auto px-4 relative z-10">

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <span className="text-[#558B2F] uppercase tracking-[0.2em] text-sm font-bold mb-3 block">Contact Us</span>
                    <h1 className="text-4xl md:text-5xl font-playfair font-bold text-dark-green mb-4">Get In Touch</h1>
                    <div className="w-20 h-1 bg-[#558B2F] mx-auto mb-4 rounded-full"></div>
                    <p className="text-gray-600 text-lg max-w-2xl mx-auto font-light leading-relaxed">Let's discuss how we can make your event unforgettable.</p>
                </motion.div>

                <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-0 bg-white/90 backdrop-blur-sm rounded-[32px] shadow-2xl overflow-hidden mb-16 border border-white/50">

                    {/* Form Section */}
                    <div className="p-8 md:p-10 bg-white/80 relative">
                        {/* Form Background Icon */}
                        <div className="absolute bottom-4 left-4 text-[#558B2F]/5 pointer-events-none">
                            <ChefHat size={150} />
                        </div>

                        <h2 className="text-2xl font-playfair font-bold text-dark-green mb-2">Send us an Enquiry</h2>
                        <div className="inline-block bg-[#F1F8E9] text-[#33691E] px-3 py-1.5 rounded-full text-xs font-semibold mb-6 border border-[#DCEDC8]">
                            Note: Cleaning staff and Crockery not included by default
                        </div>

                        <form onSubmit={handleEnquiry} className="space-y-4 relative z-10">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-gray-700 font-medium mb-1.5 text-xs uppercase tracking-wide">Full Name</label>
                                    <input required name="name" type="text" className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-transparent focus:bg-white focus:border-[#558B2F] focus:ring-4 focus:ring-[#558B2F]/10 outline-none transition-all duration-300 text-sm" placeholder="John Doe" />
                                </div>
                                <div>
                                    <label className="block text-gray-700 font-medium mb-1.5 text-xs uppercase tracking-wide">Mobile Number</label>
                                    <input required name="phone" type="tel" className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-transparent focus:bg-white focus:border-[#558B2F] focus:ring-4 focus:ring-[#558B2F]/10 outline-none transition-all duration-300 text-sm" placeholder="+91 99999 99999" />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-gray-700 font-medium mb-1.5 text-xs uppercase tracking-wide">Event Date</label>
                                    <input required name="date" type="date" className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-transparent focus:bg-white focus:border-[#558B2F] focus:ring-4 focus:ring-[#558B2F]/10 outline-none transition-all duration-300 text-gray-600 text-sm" />
                                </div>
                                <div>
                                    <label className="block text-gray-700 font-medium mb-1.5 text-xs uppercase tracking-wide">Location</label>
                                    <input required name="location" type="text" className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-transparent focus:bg-white focus:border-[#558B2F] focus:ring-4 focus:ring-[#558B2F]/10 outline-none transition-all duration-300 text-sm" placeholder="City, Venue" />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-gray-700 font-medium mb-1.5 text-xs uppercase tracking-wide">Event Type</label>
                                    <div className="relative">
                                        <select name="type" className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-transparent focus:bg-white focus:border-[#558B2F] focus:ring-4 focus:ring-[#558B2F]/10 outline-none transition-all duration-300 text-gray-600 text-sm appearance-none cursor-pointer">
                                            <option>Wedding/Marriage</option>
                                            <option>Birthday Party</option>
                                            <option>Engagement</option>
                                            <option>Corporate Event</option>
                                            <option>House Warming</option>
                                            <option>Other</option>
                                        </select>
                                        <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                                            <svg width="10" height="6" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 1.5L6 6.5L11 1.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-gray-700 font-medium mb-1.5 text-xs uppercase tracking-wide">Preference</label>
                                    <div className="relative">
                                        <select name="preference" className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-transparent focus:bg-white focus:border-[#558B2F] focus:ring-4 focus:ring-[#558B2F]/10 outline-none transition-all duration-300 text-gray-600 text-sm appearance-none cursor-pointer">
                                            <option>Veg</option>
                                            <option>Non Veg</option>
                                            <option>Both</option>
                                        </select>
                                        <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                                            <svg width="10" height="6" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 1.5L6 6.5L11 1.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-gray-700 font-medium mb-1.5 text-xs uppercase tracking-wide">Time</label>
                                    <div className="relative">
                                        <select name="time" className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-transparent focus:bg-white focus:border-[#558B2F] focus:ring-4 focus:ring-[#558B2F]/10 outline-none transition-all duration-300 text-gray-600 text-sm appearance-none cursor-pointer">
                                            <option>Lunch</option>
                                            <option>Dinner</option>
                                            <option>High Tea</option>
                                            <option>Breakfast</option>
                                        </select>
                                        <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                                            <svg width="10" height="6" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 1.5L6 6.5L11 1.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-gray-700 font-medium mb-1.5 text-xs uppercase tracking-wide">Guests</label>
                                    <input required name="members" type="number" className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-transparent focus:bg-white focus:border-[#558B2F] focus:ring-4 focus:ring-[#558B2F]/10 outline-none transition-all duration-300 text-sm" placeholder="e.g. 100" />
                                </div>
                            </div>

                            <div>
                                <label className="block text-gray-700 font-medium mb-1.5 text-xs uppercase tracking-wide">Email</label>
                                <input name="email" type="email" className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-transparent focus:bg-white focus:border-[#558B2F] focus:ring-4 focus:ring-[#558B2F]/10 outline-none transition-all duration-300 text-sm" placeholder="email@example.com (Optional)" />
                            </div>

                            <div>
                                <label className="block text-gray-700 font-medium mb-1.5 text-xs uppercase tracking-wide">Additional Comments</label>
                                <textarea name="comments" rows="2" className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-transparent focus:bg-white focus:border-[#558B2F] focus:ring-4 focus:ring-[#558B2F]/10 outline-none transition-all duration-300 resize-none text-sm" placeholder="Anything else we should know?"></textarea>
                            </div>

                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                type="submit"
                                className="w-full bg-[#558B2F] text-white font-bold py-4 rounded-xl hover:shadow-xl hover:bg-[#33691E] transition-all duration-300 flex items-center justify-center gap-2 text-sm uppercase tracking-wide"
                            >
                                <Send size={18} />
                                Send Enquiry Now
                            </motion.button>
                        </form>
                    </div>

                    {/* Info Section - Light Green #689F38 */}
                    <div className="bg-[#689F38] p-8 md:p-10 text-white flex flex-col justify-center relative overflow-hidden">
                        {/* Background Icons Texture */}
                        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none opacity-10">
                            <Utensils className="absolute top-10 right-10 rotate-12" size={120} />
                            <Coffee className="absolute bottom-10 left-10 -rotate-12" size={100} />
                        </div>

                        <div className="relative z-10">
                            <h2 className="text-2xl font-playfair font-bold text-white mb-8">Contact Information</h2>

                            <div className="space-y-8">
                                <div className="flex items-start group">
                                    <div className="w-12 h-12 bg-white/10 border border-white/20 rounded-xl flex items-center justify-center mr-5 group-hover:bg-white group-hover:text-[#558B2F] transition-all duration-300 shadow-lg backdrop-blur-sm flex-shrink-0">
                                        <Phone size={20} className="text-white group-hover:text-[#558B2F] transition-colors" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-base mb-1 font-playfair tracking-wide text-white">Call Us</h3>
                                        <p className="text-white/90 font-light text-base">+91 90309 27239</p>
                                        <p className="text-white/70 text-xs mt-1">Mon - Sun: 9:00 AM - 9:00 PM</p>
                                    </div>
                                </div>

                                <div className="flex items-start group">
                                    <div className="w-12 h-12 bg-white/10 border border-white/20 rounded-xl flex items-center justify-center mr-5 group-hover:bg-white group-hover:text-[#558B2F] transition-all duration-300 shadow-lg backdrop-blur-sm flex-shrink-0">
                                        <Mail size={20} className="text-white group-hover:text-[#558B2F] transition-colors" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-base mb-1 font-playfair tracking-wide text-white">Email Us</h3>
                                        <p className="text-white/90 font-light text-base">info@sahcaterers.com</p>
                                        <p className="text-white/70 text-xs mt-1">We reply within 24 hours</p>
                                    </div>
                                </div>

                                <div className="flex items-start group">
                                    <div className="w-12 h-12 bg-white/10 border border-white/20 rounded-xl flex items-center justify-center mr-5 group-hover:bg-white group-hover:text-[#558B2F] transition-all duration-300 shadow-lg backdrop-blur-sm flex-shrink-0">
                                        <MapPin size={20} className="text-white group-hover:text-[#558B2F] transition-colors" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-base mb-1 font-playfair tracking-wide text-white">Visit Us</h3>
                                        <p className="text-white/90 font-light text-sm leading-relaxed">Plot No. 49, 1st Floor,<br />P & T Colony, Karkhana,<br />Secunderabad, Telangana - 500009</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Map */}
                <div className="max-w-5xl mx-auto h-[400px] w-full rounded-[32px] overflow-hidden shadow-xl border-4 border-white">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.071271708896!2d78.49887531487664!3d17.45610898803734!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9a67a6e60b21%3A0xe5f9b4f6b280148!2sSA%20Hyderabad%20Caterers!5e0!3m2!1sen!2sin!4v1677651234567!5m2!1sen!2sin"
                        width="100%"
                        height="100%"
                        style={{ border: 0, filter: 'grayscale(0.2) contrast(1.2)' }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
            </div>
        </div>
    );
};

export default Contact;
