import { motion, useScroll, useTransform } from 'framer-motion';
import { ChefHat, Award, Users, Utensils, Heart, Calendar, Briefcase, Home, Flame, Check, Star, ShieldCheck, Phone, Mail, MapPin } from 'lucide-react';
import { useRef } from 'react';
import BackgroundTexture from '../components/BackgroundTexture';

const About = () => {
    const heroRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: heroRef,
        offset: ["start start", "end start"]
    });
    const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

    return (
        <div className="min-h-screen bg-cream relative overflow-hidden">
            <BackgroundTexture />

            {/* Hero Section with Parallax */}
            <div ref={heroRef} className="relative h-[70vh] min-h-[600px] flex items-center justify-center overflow-hidden">
                <motion.div
                    style={{ y, opacity }}
                    className="absolute inset-0 w-full h-full"
                >
                    <div className="absolute inset-0 bg-dark-green/70 z-10 mix-blend-multiply"></div>
                    <img
                        src="https://images.unsplash.com/photo-1555244162-803834f87a4d?auto=format&fit=crop&w=2000&q=80"
                        alt="Fine Dining Setup"
                        className="w-full h-full object-cover"
                    />
                </motion.div>

                <div className="relative z-20 text-center px-8 md:px-12 lg:px-24 xl:px-32 max-w-5xl mx-auto mt-20">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <span className="text-luxury-gold uppercase tracking-[0.3em] font-bold text-sm mb-4 block">Welcome to SA Caterers</span>
                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-playfair font-bold text-white mb-6 drop-shadow-xl">
                            Our Legacy
                        </h1>
                        <div className="w-32 h-[2px] bg-luxury-gold mx-auto mb-8 relative">
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full border-2 border-luxury-gold bg-dark-green"></div>
                        </div>
                        <p className="text-xl md:text-2xl text-gray-200 font-light font-poppins drop-shadow-lg">
                            Curating extraordinary culinary experiences since 2010.
                        </p>
                    </motion.div>
                </div>
            </div>

            {/* Mission Section (Overlapping Cards) */}
            <div className="relative z-30 container mx-auto px-8 md:px-12 lg:px-24 xl:px-32 -mt-24 mb-16">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
                    {[
                        { icon: <ChefHat size={36} />, title: "Culinary Mastery", desc: "Expert chefs crafting authentic flavors." },
                        { icon: <Award size={36} />, title: "Premium Quality", desc: "Only the finest ingredients for your feast." },
                        { icon: <Users size={36} />, title: "Royal Hospitality", desc: "Service that makes every guest feel like royalty." }
                    ].map((item, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ delay: idx * 0.15, duration: 0.6 }}
                            className="bg-white/90 backdrop-blur-xl p-10 rounded-[2rem] shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-white/50 hover:border-luxury-gold/50 transition-all duration-500 group"
                        >
                            <div className="w-20 h-20 bg-dark-green rounded-full flex items-center justify-center mb-8 text-luxury-gold shadow-lg group-hover:scale-110 transition-transform duration-500">
                                {item.icon}
                            </div>
                            <h3 className="text-2xl font-playfair font-bold text-dark-green mb-4">{item.title}</h3>
                            <p className="text-gray-600 leading-relaxed font-light">{item.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* The Story - Editorial Layout */}
            <div className="py-16 bg-white relative">
                <div className="container mx-auto px-8 md:px-12 lg:px-24 xl:px-32">
                    <div className="flex flex-col lg:flex-row gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="w-full lg:w-1/2 relative"
                        >
                            <div className="aspect-[4/5] rounded-[2rem] overflow-hidden relative shadow-2xl">
                                <img
                                    src="https://images.unsplash.com/photo-1577106263724-2c8e03bfe9cf?auto=format&fit=crop&w=1000&q=80"
                                    alt="Chef Cooking"
                                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-dark-green/80 to-transparent flex flex-col justify-end p-10">
                                    <div className="text-luxury-gold font-playfair italic text-3xl mb-2">Since</div>
                                    <div className="text-white font-playfair font-bold text-6xl">2010</div>
                                </div>
                            </div>
                            <div className="absolute -bottom-8 -right-8 w-64 aspect-square rounded-[2rem] overflow-hidden shadow-2xl border-8 border-white hidden md:block z-10">
                                <img
                                    src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=600&q=80"
                                    alt="Elegant Dish"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="w-full lg:w-1/2 lg:pl-10"
                        >
                            <span className="text-luxury-gold uppercase tracking-[0.2em] font-bold text-sm mb-4 block">Our Story</span>
                            <h2 className="text-4xl md:text-6xl font-playfair font-bold text-dark-green mb-8 leading-tight">A Tradition of Taste & Elegance</h2>
                            <div className="space-y-6 text-lg text-gray-600 font-light leading-relaxed">
                                <p>
                                    Our journey began with a simple passion: to bring the authentic, rich flavors of the Nizam's kitchens to modern celebrations. Over the years, we have evolved, blending traditional recipes with contemporary presentation techniques.
                                </p>
                                <p>
                                    Every dish tells a story. We believe that food is not just sustenance; it is an art form, a conversation starter, and the centerpiece of every memorable gathering.
                                </p>
                                <p className="font-medium text-dark-green border-l-4 border-luxury-gold pl-6 italic font-playfair text-xl">
                                    "Whether it's a grand wedding for thousands or an intimate gathering, our commitment remains the same—perfection in every bite."
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* What We Offer Section */}
            <div className="py-16 bg-cream">
                <div className="container mx-auto px-8 md:px-12 lg:px-24 xl:px-32">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-20"
                    >
                        <span className="text-luxury-gold uppercase tracking-[0.2em] text-sm font-bold mb-3 block">Our Capabilities</span>
                        <h2 className="text-5xl md:text-6xl font-playfair font-bold text-dark-green">What We Offer</h2>
                        <div className="w-24 h-1 bg-luxury-gold mx-auto mt-8 rounded-full"></div>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            { icon: <Heart size={32} />, title: "Wedding & Reception", desc: "Tailored catering solutions with professional presentation." },
                            { icon: <Calendar size={32} />, title: "Engagement & Birthdays", desc: "Celebrate milestones with our exquisite menus." },
                            { icon: <Briefcase size={32} />, title: "Corporate Events", desc: "Impress clients with professional corporate catering." },
                            { icon: <Home size={32} />, title: "Housewarming", desc: "Traditional flavors for your new beginnings." },
                            { icon: <Utensils size={32} />, title: "Customized Menus", desc: "Menus perfectly matched to your taste and theme." },
                            { icon: <Flame size={32} />, title: "Live Food Counters", desc: "Interactive and exciting live food stations." }
                        ].map((item, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ delay: idx * 0.1, duration: 0.5 }}
                                className="bg-white p-10 rounded-[2rem] hover:shadow-2xl transition-all duration-300 group relative overflow-hidden"
                            >
                                <div className="absolute top-0 right-0 w-32 h-32 bg-luxury-gold/5 rounded-bl-[100px] -z-0 transition-transform duration-500 group-hover:scale-110"></div>
                                <div className="relative z-10 w-16 h-16 bg-cream rounded-2xl flex items-center justify-center mb-8 text-dark-green group-hover:bg-dark-green group-hover:text-luxury-gold transition-colors duration-300 shadow-sm text-xl border border-gray-100">
                                    {item.icon}
                                </div>
                                <h3 className="relative z-10 text-2xl font-playfair font-bold text-dark-green mb-4 group-hover:text-luxury-gold transition-colors">{item.title}</h3>
                                <p className="relative z-10 text-gray-500 font-light leading-relaxed">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Food Philosophy Section */}
            <div className="py-16 bg-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-dark-green/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

                <div className="container mx-auto px-8 md:px-12 lg:px-24 xl:px-32 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <span className="text-luxury-gold uppercase tracking-[0.2em] text-sm font-bold mb-4 block">Our Standards</span>
                            <h2 className="text-4xl md:text-6xl font-playfair font-bold text-dark-green mb-8">Our Food Philosophy</h2>
                            <p className="text-gray-600 text-xl font-light leading-relaxed mb-8">
                                We believe great food starts with the finest ingredients. At SA Caterers, we use <span className="font-medium text-dark-green">fresh produce, premium spices</span>, and carefully sourced raw materials to ensure rich flavors and unparalleled quality.
                            </p>

                            <div className="space-y-6 mt-12">
                                {[
                                    { icon: <Star size={24} />, title: "Finest Ingredients", desc: "No compromises on the quality of raw materials." },
                                    { icon: <ChefHat size={24} />, title: "Traditional Recipes", desc: "Authentic preparations passed down through generations." },
                                    { icon: <ShieldCheck size={24} />, title: "Immaculate Hygiene", desc: "Strict adherence to safety and cleanliness standards." }
                                ].map((item, idx) => (
                                    <motion.div
                                        key={idx}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: idx * 0.2 }}
                                        className="flex items-start group hover:-translate-y-1 transition-transform"
                                    >
                                        <div className="min-w-14 h-14 bg-cream rounded-xl flex items-center justify-center text-luxury-gold shadow-sm mr-6 group-hover:bg-dark-green transition-colors">
                                            {item.icon}
                                        </div>
                                        <div>
                                            <h4 className="text-2xl font-playfair font-bold text-dark-green mb-2">{item.title}</h4>
                                            <p className="text-gray-500 font-light">{item.desc}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="relative h-[600px] rounded-[3rem] overflow-hidden shadow-2xl"
                        >
                            <img
                                src="https://images.unsplash.com/photo-1600891964092-4316c288032e?auto=format&fit=crop&w=1000&q=80"
                                alt="Spices and Ingredients"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-dark-green/20"></div>
                            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-dark-green p-10">
                                <p className="text-white font-playfair text-2xl italic text-center drop-shadow-lg">"Quality is never an accident; it is always the result of intelligent effort."</p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Experience & Trust Section */}
            <div className="py-16 bg-dark-green relative text-white">
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23d4af37\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }}></div>

                <div className="container mx-auto px-8 md:px-12 lg:px-24 xl:px-32 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-10 text-white">Experience You Can Trust</h2>
                            <div className="space-y-6">
                                {[
                                    "Over 10 years of hands-on catering experience",
                                    "Skilled chefs with regional & multi-cuisine expertise",
                                    "Well-trained professional service staff",
                                    "Timely delivery & flawless event execution",
                                    "Hundreds of successful events & happy clients"
                                ].map((text, i) => (
                                    <div key={i} className="flex items-center space-x-5">
                                        <div className="w-8 h-8 rounded-full bg-luxury-gold/20 flex items-center justify-center flex-shrink-0">
                                            <Check size={16} className="text-luxury-gold" strokeWidth={3} />
                                        </div>
                                        <span className="text-gray-300 text-lg font-light">{text}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                        >
                            <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-10 text-white">Why Choose Us?</h2>
                            <div className="space-y-6">
                                {[
                                    { title: "Consistent Taste", desc: "Authentic recipes stay the same every time." },
                                    { title: "Flexible Packages", desc: "Transparent pricing that fits your budget." },
                                    { title: "Punctual Service", desc: "Neat presentation delivered on time." }
                                ].map((item, i) => (
                                    <div key={i} className="bg-white/5 backdrop-blur-md p-6 rounded-2xl border border-white/10 hover:border-luxury-gold/30 transition-colors">
                                        <h4 className="font-playfair font-bold text-luxury-gold text-xl mb-2">{item.title}</h4>
                                        <p className="text-gray-400 font-light">{item.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* CTA Footer Section */}
            <div className="bg-dark-green py-16 text-white relative overflow-hidden border-t border-white/10">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-luxury-gold/10 rounded-full blur-[120px] pointer-events-none"></div>

                <div className="container mx-auto px-8 md:px-12 lg:px-24 xl:px-32 relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="max-w-4xl mx-auto mb-16"
                    >
                        <span className="text-luxury-gold uppercase tracking-[0.2em] font-bold text-sm mb-6 block">Ready to start?</span>
                        <h2 className="text-5xl md:text-7xl font-playfair font-bold mb-8 text-white drop-shadow-md">Let's Make Your Event Special</h2>
                        <p className="text-gray-300 text-xl font-light mb-12 max-w-2xl mx-auto">Planning an event? Let us handle the culinary experience while you focus on making memories.</p>

                        <button
                            onClick={() => window.open('https://wa.me/919030927239', '_blank')}
                            className="px-12 py-5 bg-luxury-gold text-dark-green text-xl font-bold rounded-full shadow-[0_10px_30px_rgba(212,175,55,0.4)] hover:shadow-[0_15px_40px_rgba(212,175,55,0.6)] hover:-translate-y-2 transition-all duration-300"
                        >
                            Book Your Catering Today
                        </button>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mt-20">
                        {[
                            { icon: <Phone size={28} />, title: "Call Us", desc: "8555969207 / 9030927239", link: "tel:+919030927239" },
                            { icon: <Mail size={28} />, title: "Email", desc: "staffarccaterings@gmail.com", link: "mailto:staffarccaterings@gmail.com" },
                            { icon: <MapPin size={28} />, title: "Location", desc: "Secunderabad, Hyderabad", link: null }
                        ].map((item, idx) => (
                            <div
                                key={idx}
                                onClick={() => item.link && window.open(item.link)}
                                className={`flex flex-col items-center group ${item.link ? 'cursor-pointer' : ''}`}
                            >
                                <div className="w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-6 text-luxury-gold group-hover:bg-luxury-gold group-hover:text-dark-green group-hover:scale-110 transition-all duration-300 shadow-xl">
                                    {item.icon}
                                </div>
                                <h3 className="text-2xl font-playfair font-bold mb-2 text-white">{item.title}</h3>
                                <p className="text-gray-400 font-light">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;

