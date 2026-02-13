import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, UtensilsCrossed, Briefcase, Cake, Star, Quote } from 'lucide-react';

const Home = () => {
    const { scrollY } = useScroll();
    const heroY = useTransform(scrollY, [0, 500], [0, 150]);

    return (
        <div className="w-full overflow-hidden">
            {/* Hero Section */}
            <section className="h-screen relative flex items-center justify-center overflow-hidden">
                <motion.div
                    style={{ y: heroY }}
                    className="absolute inset-0 z-0"
                >
                    <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-transparent z-10"></div>
                    <img
                        src="https://images.unsplash.com/photo-1555244162-803834f70033?q=80&w=2600&auto=format&fit=crop"
                        alt="Royal Catering Banquet"
                        className="w-full h-full object-cover"
                    />
                </motion.div>

                <div className="relative z-20 text-center px-4 max-w-6xl mx-auto mt-10 md:mt-0">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <div className="inline-flex items-center justify-center space-x-4 mb-6">
                            <div className="h-[1px] w-8 md:w-16 bg-luxury-gold"></div>
                            <h2 className="text-luxury-gold tracking-[0.3em] text-xs md:text-sm uppercase font-semibold drop-shadow-md">
                                Sri Adithya
                            </h2>
                            <div className="h-[1px] w-8 md:w-16 bg-luxury-gold"></div>
                        </div>

                        <h1 className="text-5xl md:text-7xl lg:text-9xl font-playfair font-bold text-white mb-8 leading-none drop-shadow-2xl">
                            <span className="text-gradient-gold">SA</span> Caterers
                        </h1>

                        <p className="text-gray-200 text-lg md:text-2xl font-light mb-12 max-w-3xl mx-auto leading-relaxed drop-shadow-md font-playfair italic">
                            "Where Every Plate Tells a Story of a Tasty Soul"
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                            <Link
                                to="/menu"
                                className="w-full sm:w-auto px-10 py-4 bg-luxury-gold text-dark-green font-bold text-lg rounded-full hover:bg-white transition-all duration-500 shadow-[0_0_20px_rgba(212,175,55,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)] transform hover:-translate-y-1"
                            >
                                Explore Menu
                            </Link>
                            <Link
                                to="/contact"
                                className="w-full sm:w-auto px-10 py-4 border border-white/60 bg-white/5 backdrop-blur-md text-white font-medium text-lg rounded-full hover:bg-white hover:text-dark-green transition-all duration-500"
                            >
                                Book An Event
                            </Link>
                        </div>
                    </motion.div>
                </div>

                {/* Scroll Indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 1 }}
                    className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 text-white/50 flex flex-col items-center"
                >
                    <span className="text-[10px] uppercase tracking-[0.3em] mb-3">Scroll to Discover</span>
                    <div className="w-[1px] h-16 bg-gradient-to-b from-luxury-gold via-white/50 to-transparent"></div>
                </motion.div>
            </section>

            {/* Introduction Section */}
            <section className="py-20 md:py-32 bg-cream relative overflow-hidden">
                <div className="container mx-auto px-4 relative z-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        {/* Text Content */}
                        <div className="text-left">
                            <div className="mb-6 flex justify-start">
                                <div className="w-12 h-12 rounded-full bg-luxury-gold/10 flex items-center justify-center">
                                    <Quote className="text-luxury-gold w-6 h-6" />
                                </div>
                            </div>

                            <span className="text-luxury-gold uppercase tracking-[0.2em] text-xs font-bold mb-4 block">Who We Are</span>

                            <h2 className="text-3xl md:text-5xl font-playfair text-dark-green mb-6 leading-tight">
                                We believe that food is the heart of every <span className="text-luxury-gold italic">celebration.</span>
                            </h2>

                            <p className="text-gray-600 leading-relaxed text-base md:text-lg mb-8 font-light">
                                At <span className="font-playfair font-bold text-dark-green">SA Caterers</span>, we bring flavors, freshness, and creativity to every table. From intimate gatherings to grand celebrations, our team crafts delicious dishes with high-quality ingredients, customized menus, and exceptional service.
                            </p>

                            <div className="grid grid-cols-2 gap-4 mb-8">
                                <ul className="space-y-2">
                                    {['Fresh Ingredients', 'Professional Team'].map((item, i) => (
                                        <li key={i} className="flex items-center text-sm text-gray-700">
                                            <span className="w-2 h-2 rounded-full bg-luxury-gold mr-3"></span>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                                <ul className="space-y-2">
                                    {['Customized Menus', 'Timely Service'].map((item, i) => (
                                        <li key={i} className="flex items-center text-sm text-gray-700">
                                            <span className="w-2 h-2 rounded-full bg-luxury-gold mr-3"></span>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <Link to="/about" className="inline-block border-b-2 border-luxury-gold pb-1 text-dark-green font-bold uppercase tracking-widest text-sm hover:text-luxury-gold transition-colors">
                                More About Us
                            </Link>
                        </div>

                        {/* Image Content */}
                        <div className="relative">
                            <div className="relative rounded-[2rem] overflow-hidden shadow-2xl">
                                <img
                                    src="https://images.unsplash.com/photo-1577106263724-2c8e03bfe9cf?auto=format&fit=crop&q=80&w=1000"
                                    alt="Chefs Cooking"
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-dark-green/10"></div>
                            </div>

                            {/* Experience Badge */}
                            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl flex items-center space-x-4 max-w-xs animate-fade-in-up">
                                <div className="w-12 h-12 rounded-full bg-luxury-gold/20 flex items-center justify-center text-luxury-gold">
                                    <Star size={24} fill="currentColor" />
                                </div>
                                <div>
                                    <span className="block text-xs text-gray-400 uppercase tracking-wider font-bold">Experience</span>
                                    <p className="text-2xl font-playfair font-bold text-dark-green"><span className="text-luxury-gold">10+</span> Years</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Decorative background element */}
                <div className="absolute top-0 right-0 w-96 h-96 bg-luxury-gold/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-dark-green/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>
            </section>

            {/* Services Section */}
            <section className="py-16 md:py-24 bg-green-texture text-white relative overflow-hidden" id="services">
                {/* Background Pattern */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-transparent pointer-events-none"></div>

                <div className="container mx-auto px-4 relative z-10">
                    <div className="text-center mb-12 md:mb-16 max-w-3xl mx-auto">
                        <span className="text-luxury-gold uppercase tracking-[0.2em] text-xs font-bold mb-4 block">What We Do</span>
                        <h2 className="text-4xl md:text-5xl font-playfair leading-tight mb-6">Services We Offer <span className="text-white/50 italic">For Every Occasion</span></h2>
                        <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                            From intimate gatherings to grand weddings, we bring perfection to your plate with our bespoke catering solutions.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            {
                                icon: <UtensilsCrossed size={28} />,
                                title: "Wedding Catering",
                                desc: "Grand feasts for your special day, handled with royal precision.",
                                img: "https://images.unsplash.com/photo-1519225468765-a6a1c4717f79?q=80&w=800&auto=format&fit=crop"
                            },
                            {
                                icon: <Cake size={28} />,
                                title: "Birthday Bashes",
                                desc: "Delightful menus for birthdays that kids and adults adore.",
                                img: "https://images.unsplash.com/photo-1558636508-e0db3814bd1d?q=80&w=800&auto=format&fit=crop"
                            },
                            {
                                icon: <Briefcase size={28} />,
                                title: "Corporate Events",
                                desc: "Professional catering services to impress your clients and team.",
                                img: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=800"
                            },
                            {
                                icon: <Star size={28} />,
                                title: "Outdoor Catering",
                                desc: "Perfectly executed outdoor dining experiences, anywhere.",
                                img: "https://images.unsplash.com/photo-1533777857889-4be7c70b33f7?auto=format&fit=crop&q=80&w=800"
                            }
                        ].map((service, idx) => (
                            <motion.div
                                key={idx}
                                whileHover={{ y: -8 }}
                                className="group relative h-[400px] rounded-[2rem] overflow-hidden cursor-pointer shadow-xl border border-white/5"
                            >
                                <div className="absolute inset-0">
                                    <img src={service.img} alt={service.title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-dark-green via-dark-green/70 to-transparent opacity-90 transition-opacity duration-500 group-hover:opacity-80"></div>
                                </div>

                                <div className="absolute bottom-0 left-0 right-0 p-8 flex flex-col items-center text-center h-full justify-end">
                                    <div className="w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center text-luxury-gold mb-6 border border-white/10 group-hover:bg-luxury-gold group-hover:text-dark-green transition-all duration-500 transform group-hover:scale-110">
                                        {service.icon}
                                    </div>
                                    <h3 className="text-xl font-playfair font-bold mb-3 text-white group-hover:text-luxury-gold transition-colors">{service.title}</h3>
                                    <p className="text-gray-300 text-sm leading-relaxed mb-6 opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-4 group-hover:translate-y-0 duration-500">
                                        {service.desc}
                                    </p>
                                    <div className="w-8 h-[2px] bg-luxury-gold/50 group-hover:w-16 transition-all duration-500"></div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Catering Menus Section */}
            <section className="py-20 bg-cream relative overflow-hidden">
                <div className="container mx-auto px-4 relative z-10">
                    <div className="text-center mb-16">
                        <span className="text-luxury-gold uppercase tracking-[0.2em] text-xs font-bold mb-3 block">Explore Our Offerings</span>
                        <h2 className="text-4xl md:text-5xl font-playfair text-dark-green mb-4">Our Catering Menus</h2>
                        <div className="w-20 h-1 bg-luxury-gold mx-auto mb-6"></div>
                        <p className="text-gray-500 italic text-sm">Select a category to view our carefully curated dishes for every occasion.</p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
                        {[
                            { title: "Full Veg Menu", img: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=600" },
                            { title: "Full Non Veg Menu", img: "https://images.unsplash.com/photo-1596560548464-f010549b8416?auto=format&fit=crop&q=80&w=600" },
                            { title: "Veg Below 200", img: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=600" },
                            { title: "Non Veg Below 200", img: "https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?auto=format&fit=crop&q=80&w=600" },
                            { title: "Birthday Menu", img: "https://images.unsplash.com/photo-1558636508-e0db3814bd1d?auto=format&fit=crop&q=80&w=600" },
                            { title: "House Warming/Pooja", img: "https://images.unsplash.com/photo-1610452608404-51c3605c4883?auto=format&fit=crop&q=80&w=600" },
                            { title: "Regular Veg Menu", img: "https://images.unsplash.com/photo-1534069818817-57842fac2e8f?auto=format&fit=crop&q=80&w=600" },
                            { title: "Regular Non Veg Menu", img: "https://images.unsplash.com/photo-1570773950664-585d8527a20c?auto=format&fit=crop&q=80&w=600" }
                        ].map((menu, i) => (
                            <div key={i} className="group cursor-pointer">
                                <div className="relative h-[280px] md:h-[350px] rounded-[2rem] overflow-hidden shadow-lg transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-[0_20px_40px_-15px_rgba(255,203,101,0.3)] group-hover:ring-4 group-hover:ring-luxury-gold/50">
                                    <img
                                        src={menu.img}
                                        alt={menu.title}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    {/* Dark Gradient Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>

                                    {/* Content */}
                                    <div className="absolute inset-x-0 bottom-0 p-6 flex flex-col items-center justify-end text-center pb-10">
                                        <h3 className="text-xl md:text-2xl font-playfair font-bold text-white drop-shadow-md mb-3 leading-tight">{menu.title}</h3>
                                        <div className="w-8 h-[2px] bg-white/50 group-hover:w-16 group-hover:bg-luxury-gold transition-all duration-300"></div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-16 text-center">
                        <Link to="/menu" className="inline-flex items-center text-dark-green font-bold text-lg hover:text-luxury-gold transition-colors duration-300 group">
                            Explore All Options
                            <ArrowRight className="ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-2" />
                        </Link>
                    </div>
                </div>
            </section>

            {/* Gallery Strip with Marquee effect concept (simplified implementation) */}
            <section className="py-12 bg-green-texture text-center border-t border-luxury-gold/20 overflow-hidden">
                <div className="mb-8 text-center">
                    <h3 className="font-playfair text-2xl text-luxury-gold italic">Captured Moments</h3>
                </div>
                <div className="flex space-x-4 overflow-x-auto pb-4 scrollbar-hide px-4 md:justify-center">
                    {[1, 2, 3, 4, 5].map((i) => (
                        <div key={i} className="min-w-[220px] h-[250px] md:h-[300px] rounded-xl overflow-hidden relative group shrink-0">
                            <img
                                src={`https://images.unsplash.com/photo-${i % 2 === 0 ? '1555244162-803834f70033' : '1504674900247-0877df9cc836'}?auto=format&fit=crop&w=600&q=80`}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                                alt="Gallery"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </div>
                    ))}
                </div>
            </section >

            {/* CTA Section */}
            < section className="py-20 relative bg-fixed bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=1920')" }}>
                <div className="absolute inset-0 bg-black/60"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-dark-green/90 to-transparent"></div>

                <div className="container mx-auto px-4 relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    <div className="text-left">
                        <span className="text-luxury-gold uppercase tracking-[0.2em] text-xs font-bold mb-3 block">Book Your Event</span>
                        <h2 className="text-4xl md:text-6xl font-playfair font-bold text-white mb-4 leading-none">Ready to create <br /><span className="italic text-luxury-gold">memories?</span></h2>
                        <p className="text-lg text-gray-200 mb-0 max-w-lg leading-relaxed font-light">
                            Book SA Caterers for your next event and let us serve you an experience of a lifetime.
                        </p>
                    </div>
                    <div className="text-left md:text-right">
                        <Link to="/contact" className="inline-block px-10 py-4 bg-white text-dark-green font-bold text-lg rounded-full shadow-[0_0_30px_rgba(255,255,255,0.2)] hover:shadow-[0_0_50px_rgba(212,175,55,0.4)] hover:bg-luxury-gold hover:text-white hover:scale-105 transition-all duration-300">
                            Get In Touch
                        </Link>
                    </div>
                </div>
            </section >

        </div >
    );
};

export default Home;
