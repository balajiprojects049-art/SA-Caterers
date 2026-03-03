import { useState } from 'react';
import { motion } from 'framer-motion';
import {
    User, Phone, Calendar, Users, MapPin, Award,
    MessageSquare, MessageCircle, PhoneCall, Instagram
} from 'lucide-react';

const EVENT_TYPES = [
    'Wedding Reception',
    'Engagement Ceremony',
    'Birthday Party',
    'Corporate Event',
    'Baby Shower',
    'Anniversary Dinner',
    'Outdoor Catering',
    'Religious Function',
    'Other',
];

const inputBase =
    'w-full bg-white rounded-2xl px-5 py-4 pl-12 text-gray-800 text-[15px] font-poppins placeholder-gray-400 border border-transparent focus:outline-none focus:border-luxury-gold/60 focus:ring-2 focus:ring-luxury-gold/20 transition-all shadow-sm';

const IconWrap = ({ children }) => (
    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
        {children}
    </span>
);

const FieldLabel = ({ children }) => (
    <label className="block text-[#D4AF37] font-semibold text-sm mb-2 font-poppins tracking-wide">
        {children}
    </label>
);

const QuoteForm = () => {
    const [form, setForm] = useState({
        name: '',
        phone: '',
        date: '',
        guests: '',
        location: '',
        eventType: '',
        menuRequirements: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
    };

    const buildMessage = () => {
        let msg = `*🍽️ NEW CATERING QUOTE REQUEST*\n`;
        msg += `━━━━━━━━━━━━━━━━━━━━━━━\n\n`;
        msg += `👤 *Name:* ${form.name}\n`;
        msg += `📞 *Contact:* ${form.phone}\n`;
        msg += `📅 *Event Date:* ${form.date}\n`;
        if (form.guests) msg += `👥 *Guests:* ${form.guests} pax\n`;
        if (form.location) msg += `📍 *Venue:* ${form.location}\n`;
        if (form.eventType) msg += `🎉 *Event Type:* ${form.eventType}\n`;
        if (form.menuRequirements) {
            msg += `\n📋 *Menu Requirements:*\n${form.menuRequirements}\n`;
        }
        msg += `\n━━━━━━━━━━━━━━━━━━━━━━━\n`;
        msg += `_Sent via SA Caterers Quote Form_`;
        return msg;
    };

    const validate = () => {
        if (!form.name.trim()) { alert('Please enter your name.'); return false; }
        if (!form.phone.trim()) { alert('Please enter your contact number.'); return false; }
        if (!form.date) { alert('Please select an event date.'); return false; }
        if (!form.guests.trim()) { alert('Please enter the number of guests.'); return false; }
        if (!form.location.trim()) { alert('Please enter the event location.'); return false; }
        if (!form.eventType) { alert('Please select an event type.'); return false; }
        if (!form.menuRequirements.trim()) { alert('Please describe your menu requirements.'); return false; }
        return true;
    };

    const handleWhatsApp = (e) => {
        e.preventDefault();
        if (!validate()) return;
        const msg = buildMessage();
        window.open(`https://wa.me/919030927239?text=${encodeURIComponent(msg)}`, '_blank');
    };

    const handleSMS = (e) => {
        e.preventDefault();
        if (!validate()) return;
        const msg = buildMessage();
        window.open(`sms:+919030927239?body=${encodeURIComponent(msg)}`, '_blank');
    };

    return (
        <div
            className="min-h-screen flex flex-col items-center justify-start py-10 px-4"
            style={{ background: 'linear-gradient(160deg, #1a3520 0%, #0f2415 60%, #162b1a 100%)' }}
        >
            {/* Card */}
            <motion.div
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="w-full max-w-md"
            >
                {/* Logo */}
                <div className="mb-6 flex justify-center">
                    <img
                        src="/logo.jpeg"
                        alt="SA Caterers Logo"
                        className="w-full h-auto object-contain max-w-[280px] rounded-xl shadow-lg border border-luxury-gold/20"
                    />
                </div>

                {/* Heading */}
                <div className="text-center mb-8">
                    <h1 className="font-playfair font-bold text-[#D4AF37] text-3xl mb-2">
                        Request&nbsp;a&nbsp;Quote
                    </h1>
                    <p className="text-gray-300 text-sm font-poppins">
                        Fill in your details and we'll get back to you
                    </p>
                </div>

                {/* Form */}
                <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>

                    {/* Name */}
                    <div>
                        <FieldLabel>Your Name *</FieldLabel>
                        <div className="relative">
                            <IconWrap><User size={17} /></IconWrap>
                            <input
                                type="text"
                                name="name"
                                value={form.name}
                                onChange={handleChange}
                                placeholder="Enter your full name"
                                className={inputBase}
                            />
                        </div>
                    </div>

                    {/* Phone */}
                    <div>
                        <FieldLabel>Contact Number *</FieldLabel>
                        <div className="relative">
                            <IconWrap><Phone size={17} /></IconWrap>
                            <input
                                type="tel"
                                name="phone"
                                value={form.phone}
                                onChange={handleChange}
                                placeholder="Enter your phone number"
                                className={inputBase}
                            />
                        </div>
                    </div>

                    {/* Event Date */}
                    <div>
                        <FieldLabel>Event Date *</FieldLabel>
                        <div className="relative">
                            <IconWrap><Calendar size={17} /></IconWrap>
                            <input
                                type="date"
                                name="date"
                                value={form.date}
                                onChange={handleChange}
                                className={inputBase + ' cursor-pointer'}
                            />
                        </div>
                    </div>

                    {/* Guests */}
                    <div>
                        <FieldLabel>Number of Guests *</FieldLabel>
                        <div className="relative">
                            <IconWrap><Users size={17} /></IconWrap>
                            <input
                                type="number"
                                name="guests"
                                value={form.guests}
                                onChange={handleChange}
                                placeholder="Expected number of guests"
                                className={inputBase}
                                min="1"
                            />
                        </div>
                    </div>

                    {/* Location */}
                    <div>
                        <FieldLabel>Event Location *</FieldLabel>
                        <div className="relative">
                            <IconWrap><MapPin size={17} /></IconWrap>
                            <input
                                type="text"
                                name="location"
                                value={form.location}
                                onChange={handleChange}
                                placeholder="Enter venue address"
                                className={inputBase}
                            />
                        </div>
                    </div>

                    {/* Event Type */}
                    <div>
                        <FieldLabel>Event Type *</FieldLabel>
                        <div className="relative">
                            <IconWrap><Award size={17} /></IconWrap>
                            <select
                                name="eventType"
                                value={form.eventType}
                                onChange={handleChange}
                                className={inputBase + ' appearance-none cursor-pointer'}
                            >
                                <option value="" disabled>Select event type</option>
                                {EVENT_TYPES.map((t) => (
                                    <option key={t} value={t}>{t}</option>
                                ))}
                            </select>
                            {/* Custom chevron */}
                            <span className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                    <polyline points="6 9 12 15 18 9" />
                                </svg>
                            </span>
                        </div>
                    </div>

                    {/* Menu Requirements */}
                    <div>
                        <FieldLabel>Menu Requirements *</FieldLabel>
                        <div className="relative">
                            <span className="absolute left-4 top-4 text-gray-400">
                                <MessageSquare size={17} />
                            </span>
                            <textarea
                                name="menuRequirements"
                                value={form.menuRequirements}
                                onChange={handleChange}
                                rows={5}
                                placeholder={`Describe your menu requirements...\n\nExample:\n- South Indian breakfast\n- Lunch with variety rice\n- Sweets and snacks\n- Any specific dishes`}
                                className="w-full bg-white rounded-2xl px-5 py-4 pl-12 text-gray-800 text-[15px] font-poppins placeholder-gray-400 border border-transparent focus:outline-none focus:border-luxury-gold/60 focus:ring-2 focus:ring-luxury-gold/20 transition-all shadow-sm resize-none"
                            />
                        </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="grid grid-cols-2 gap-4 pt-2">
                        <motion.button
                            whileTap={{ scale: 0.96 }}
                            onClick={handleWhatsApp}
                            className="flex items-center justify-center gap-2 bg-[#25D366] text-white font-bold font-poppins py-4 rounded-2xl shadow-lg text-[15px] hover:bg-[#1ebe5d] transition-colors"
                        >
                            {/* WhatsApp SVG */}
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.555 4.116 1.528 5.845L.057 23.715a.5.5 0 0 0 .612.612l5.87-1.471A11.943 11.943 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.891 0-3.667-.519-5.188-1.425l-.372-.22-3.846.963.983-3.776-.243-.388A9.956 9.956 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
                            </svg>
                            WhatsApp
                        </motion.button>

                        <motion.button
                            whileTap={{ scale: 0.96 }}
                            onClick={handleSMS}
                            className="flex items-center justify-center gap-2 bg-[#C9973A] text-white font-bold font-poppins py-4 rounded-2xl shadow-lg text-[15px] hover:bg-[#b8852e] transition-colors"
                        >
                            <MessageCircle size={20} />
                            SMS
                        </motion.button>
                    </div>

                    {/* Or connect with us */}
                    <div className="pt-4">
                        <p className="text-center text-gray-400 text-sm font-poppins mb-4">
                            Or connect with us
                        </p>
                        <div className="flex justify-center gap-4">
                            <a
                                href="tel:+919030927239"
                                className="flex items-center gap-2 border border-[#D4AF37] text-[#D4AF37] px-6 py-2.5 rounded-full text-sm font-semibold font-poppins hover:bg-[#D4AF37]/10 transition-colors"
                            >
                                <PhoneCall size={16} />
                                Call
                            </a>
                            <a
                                href="https://www.instagram.com/sa.hyderabadcaterers"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 border border-[#D4AF37] text-[#D4AF37] px-6 py-2.5 rounded-full text-sm font-semibold font-poppins hover:bg-[#D4AF37]/10 transition-colors"
                            >
                                <Instagram size={16} />
                                Instagram
                            </a>
                        </div>
                    </div>
                </form>

                {/* Footer tagline */}
                <div className="text-center mt-10 pb-4">
                    <p className="text-[#D4AF37] italic text-sm font-poppins">
                        Where Every Plate Tells a Story of a Tasty Soul
                    </p>
                    <p className="text-gray-500 text-xs mt-1 font-poppins">
                        @sa.hyderabadcaterers
                    </p>
                </div>
            </motion.div>
        </div>
    );
};

export default QuoteForm;
