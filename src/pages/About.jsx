import { motion } from 'framer-motion';
import { ChefHat, Award, Users, Utensils, Heart, Calendar, Briefcase, Home, Flame, Check, Star, ShieldCheck, Clock, MapPin, Phone, Mail, ArrowRight } from 'lucide-react';
import BackgroundTexture from '../components/BackgroundTexture';

const About = () => {
    return (
        <div className="min-h-screen bg-[#FAFAFA] pt-24 pb-20 relative overflow-hidden">
            <BackgroundTexture />
            <div className="container mx-auto px-4 relative z-10">

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h1 className="text-4xl md:text-6xl font-playfair font-bold text-dark-green mb-6">Our Legacy</h1>
                    <div className="w-24 h-1 bg-luxury-gold mx-auto mb-6 rounded-full"></div>
                    <p className="max-w-3xl mx-auto text-lg text-gray-600 leading-relaxed font-poppins">
                        Since 2010, SA Caterers has been synonymous with culinary excellence and royal hospitality. We don't just serve food; we curate experiences that linger on your palate and in your memories.
                    </p>
                </motion.div>

                {/* Mission Section */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
                    {[
                        { icon: <ChefHat size={40} />, title: "Culinary Mastery", desc: "Expert chefs crafting authentic flavors." },
                        { icon: <Award size={40} />, title: "Premium Quality", desc: "Only the finest ingredients for your feast." },
                        { icon: <Users size={40} />, title: "Royal Hospitality", desc: "Service that makes every guest feel like royalty." }
                    ].map((item, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:border-luxury-gold transition-all text-center group"
                        >
                            <div className="w-16 h-16 bg-luxury-gold/10 rounded-full flex items-center justify-center mx-auto mb-6 text-dark-green group-hover:bg-luxury-gold group-hover:text-white transition-colors">
                                {item.icon}
                            </div>
                            <h3 className="text-2xl font-playfair font-bold text-dark-green mb-3">{item.title}</h3>
                            <p className="text-gray-500">{item.desc}</p>
                        </motion.div>
                    ))}
                </div>

                {/* Story Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <img
                            src="https://images.unsplash.com/photo-1577106263724-2c8e03bfe9cf?auto=format&fit=crop&w=800&q=80"
                            alt="Chef Cooking"
                            className="rounded-2xl shadow-2xl border-4 border-white"
                        />
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl md:text-4xl font-playfair font-bold text-dark-green mb-6">A Tradition of Taste</h2>
                        <p className="text-gray-600 mb-6 leading-relaxed">
                            Our journey began with a simple passion: to bring the authentic, rich flavors of the Nizam's kitchens to modern celebrations. Over the years, we have evolved, blending traditional recipes with contemporary presentation techniques.
                        </p>
                        <p className="text-gray-600 leading-relaxed">
                            Whether it's a grand wedding for thousands or an intimate gathering, our commitment remains the same—perfection in every bite.
                        </p>
                    </motion.div>
                </div>

                {/* What We Offer Section */}
                <div className="mt-32">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <span className="text-luxury-gold uppercase tracking-[0.2em] text-sm font-bold mb-3 block">Our Capabilities</span>
                        <h2 className="text-4xl md:text-5xl font-playfair font-bold text-dark-green">What We Offer</h2>
                        <div className="w-20 h-1 bg-luxury-gold mx-auto mt-6 rounded-full"></div>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                icon: <Heart size={32} />,
                                title: "Wedding & Reception",
                                desc: "Tailored catering solutions with professional presentation and serving staff for your special day."
                            },
                            {
                                icon: <Calendar size={32} />,
                                title: "Engagement & Birthday",
                                desc: "Celebrate your milestones with our exquisite menus and delightful service."
                            },
                            {
                                icon: <Briefcase size={32} />,
                                title: "Corporate Events",
                                desc: "Impress your clients and colleagues with our professional corporate catering services."
                            },
                            {
                                icon: <Home size={32} />,
                                title: "Housewarming & Religious",
                                desc: "Traditional and authentic flavors perfect for housewarmings and religious ceremonies."
                            },
                            {
                                icon: <Utensils size={32} />,
                                title: "Customized Menus",
                                desc: "We design menus that perfectly match your taste, dietary requirements, and theme."
                            },
                            {
                                icon: <Flame size={32} />,
                                title: "Live Food Counters",
                                desc: "Add excitement to your event with our interactive live food stations and counters."
                            }
                        ].map((item, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group text-left"
                            >
                                <div className="w-14 h-14 bg-luxury-gold/10 rounded-2xl flex items-center justify-center mb-6 text-luxury-gold group-hover:bg-luxury-gold group-hover:text-white transition-colors duration-300">
                                    {item.icon}
                                </div>
                                <h3 className="text-2xl font-playfair font-bold text-dark-green mb-3 group-hover:text-luxury-gold transition-colors">{item.title}</h3>
                                <p className="text-gray-500 leading-relaxed text-sm">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Professional Setup Banner */}
            <div className="bg-[#001529] py-16 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-luxury-gold/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                <div className="container mx-auto px-4 relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-3">Need a Professional Setup?</h2>
                        <p className="text-gray-300 text-lg max-w-2xl">We provide live food counters, buffet setups, and professional serving staff to elevate your event.</p>
                    </div>
                    <button onClick={() => window.open('https://wa.me/919030927239', '_blank')} className="px-8 py-4 bg-luxury-gold text-dark-green font-bold rounded-full hover:bg-white transition-all shadow-lg hover:shadow-xl whitespace-nowrap">
                        Get a Quote
                    </button>
                </div>
            </div>

            {/* Food Philosophy Section */}
            <div className="py-24 bg-white">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <span className="text-luxury-gold uppercase tracking-[0.2em] text-sm font-bold mb-3 block">Our Standards</span>
                            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-dark-green mb-6">Our Food Philosophy</h2>
                            <p className="text-gray-600 text-lg leading-relaxed mb-6 font-poppins">
                                We believe great food starts with the finest ingredients. At SA Caterers, we use <span className="font-semibold text-dark-green">fresh vegetables, premium spices</span>, and carefully sourced raw materials to ensure rich flavors and consistent quality.
                            </p>
                            <p className="text-gray-600 leading-relaxed mb-8">
                                Our chefs balance traditional recipes with modern presentation, ensuring every dish looks as good as it tastes. Hygiene and food safety are followed at every step — from preparation to service.
                            </p>
                        </motion.div>

                        <div className="space-y-6">
                            {[
                                { icon: <Star size={24} />, title: "Finest Ingredients", desc: "We never compromise on the quality of raw materials used." },
                                { icon: <ChefHat size={24} />, title: "Traditional Recipes", desc: "Authentic preparations passed down through generations." },
                                { icon: <ShieldCheck size={24} />, title: "Hygiene Priority", desc: "Strict adherence to safety and cleanliness standards." }
                            ].map((item, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, x: 30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1 }}
                                    className="flex items-start p-6 rounded-2xl bg-cream border border-luxury-gold/10 hover:border-luxury-gold/30 transition-colors"
                                >
                                    <div className="min-w-12 h-12 bg-white rounded-full flex items-center justify-center text-luxury-gold shadow-sm mr-5">
                                        {item.icon}
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-playfair font-bold text-dark-green mb-2">{item.title}</h4>
                                        <p className="text-gray-600 text-sm">{item.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Experience & Why Choose Us */}
            <div className="py-24 bg-cream relative">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
                        {/* Left Column */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-4xl font-playfair font-bold text-dark-green mb-8 relative inline-block">
                                Experience You Can Trust
                                <span className="absolute -bottom-2 left-0 w-1/3 h-1 bg-luxury-gold rounded-full"></span>
                            </h2>
                            <div className="space-y-6">
                                {[
                                    "Over 10 years of hands-on catering experience",
                                    "Skilled chefs with regional & multi-cuisine expertise",
                                    "Well-trained professional service staff",
                                    "Timely delivery & flawless event execution",
                                    "Hundreds of successful events & happy clients"
                                ].map((text, i) => (
                                    <div key={i} className="flex items-center space-x-4">
                                        <div className="w-6 h-6 rounded-full bg-dark-green flex items-center justify-center flex-shrink-0">
                                            <Check size={14} className="text-luxury-gold" strokeWidth={3} />
                                        </div>
                                        <span className="text-gray-700 text-lg">{text}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Right Column */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                        >
                            <h2 className="text-4xl font-playfair font-bold text-dark-green mb-8 relative inline-block">
                                Why Choose Us?
                                <span className="absolute -bottom-2 left-0 w-1/3 h-1 bg-luxury-gold rounded-full"></span>
                            </h2>
                            <div className="space-y-4">
                                {[
                                    { title: "Consistent Taste", desc: "Authentic recipes stay the same every time." },
                                    { title: "Flexible Packages", desc: "Transparent pricing that fits your budget." },
                                    { title: "Menu Planning", desc: "Personalized approach to fit your theme." },
                                    { title: "Punctual Service", desc: "Neat presentation delivered on time." },
                                    { title: "Dedicated Support", desc: "Support from planning to execution." }
                                ].map((item, i) => (
                                    <div key={i} className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all">
                                        <h4 className="font-playfair font-bold text-dark-green text-lg mb-1">{item.title}</h4>
                                        <p className="text-gray-500 text-sm">{item.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>

                    <div className="mt-20 text-center max-w-4xl mx-auto">
                        <p className="font-playfair text-2xl md:text-3xl text-dark-green italic leading-relaxed">
                            "Your celebration deserves nothing but the best — and that's exactly what we deliver."
                        </p>
                    </div>
                </div>
            </div>

            {/* CTA Footer Section */}
            <div className="bg-[#0f172a] py-20 text-white relative overflow-hidden">
                {/* Decorative elements */}
                <div className="absolute top-0 left-0 w-96 h-96 bg-luxury-gold/5 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-dark-green/20 rounded-full blur-[100px] translate-x-1/2 translate-y-1/2 pointer-events-none"></div>

                <div className="container mx-auto px-4 relative z-10">
                    <div className="text-center max-w-4xl mx-auto mb-16">
                        <h2 className="text-4xl md:text-6xl font-playfair font-bold mb-6 text-white">Let's Make Your Event Special</h2>
                        <p className="text-gray-400 text-lg md:text-xl font-light">Planning an event? Let us handle the food while you enjoy the celebration.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-16">
                        <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-2xl text-center hover:bg-white/10 transition-all group cursor-pointer" onClick={() => window.open('tel:+919030927239')}>
                            <div className="w-16 h-16 rounded-full bg-luxury-gold/20 flex items-center justify-center mx-auto mb-6 group-hover:bg-luxury-gold transition-colors">
                                <Phone className="text-luxury-gold group-hover:text-dark-green transition-colors" size={32} />
                            </div>
                            <h3 className="text-xl font-playfair font-bold mb-2 text-luxury-gold">Call Us</h3>
                            <p className="text-gray-300">8555969207 / 9030927239</p>
                        </div>

                        <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-2xl text-center hover:bg-white/10 transition-all group cursor-pointer" onClick={() => window.open('mailto:staffarccaterings@gmail.com')}>
                            <div className="w-16 h-16 rounded-full bg-luxury-gold/20 flex items-center justify-center mx-auto mb-6 group-hover:bg-luxury-gold transition-colors">
                                <Mail className="text-luxury-gold group-hover:text-dark-green transition-colors" size={32} />
                            </div>
                            <h3 className="text-xl font-playfair font-bold mb-2 text-luxury-gold">Email</h3>
                            <p className="text-gray-300">staffarccaterings@gmail.com</p>
                        </div>

                        <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-2xl text-center hover:bg-white/10 transition-all group">
                            <div className="w-16 h-16 rounded-full bg-luxury-gold/20 flex items-center justify-center mx-auto mb-6 group-hover:bg-luxury-gold transition-colors">
                                <MapPin className="text-luxury-gold group-hover:text-dark-green transition-colors" size={32} />
                            </div>
                            <h3 className="text-xl font-playfair font-bold mb-2 text-luxury-gold">Location</h3>
                            <p className="text-gray-300">Secunderabad Hyderabad</p>
                        </div>
                    </div>

                    <div className="text-center">
                        <button
                            onClick={() => window.open('https://wa.me/919030927239', '_blank')}
                            className="px-10 py-5 bg-luxury-gold text-dark-green text-lg font-bold rounded-full shadow-[0_0_20px_rgba(212,175,55,0.4)] hover:shadow-[0_0_30px_rgba(212,175,55,0.6)] hover:bg-white transition-all transform hover:-translate-y-1"
                        >
                            Book Your Catering Today
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
