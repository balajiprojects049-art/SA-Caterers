import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, UtensilsCrossed, Briefcase, Cake, Star, Quote } from 'lucide-react';
import BackgroundTexture from '../components/BackgroundTexture';

const Home = () => {
    const { scrollY } = useScroll();
    const heroY = useTransform(scrollY, [0, 500], [0, 150]);

    const heroImages = [
        "/indian_catering_hero_1_1772217303649.png",
        "/indian_catering_hero_2_1772217316756.png",
        "/indian_catering_hero_3_1772217333811.png"
    ];

    const [currentImage, setCurrentImage] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImage((prev) => (prev + 1) % heroImages.length);
        }, 5000); // Change image every 5 seconds
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="w-full overflow-hidden">
            {/* Hero Section */}
            <section className="h-screen relative flex items-center justify-center overflow-hidden">
                <motion.div
                    style={{ y: heroY }}
                    className="absolute inset-0 z-0 bg-black"
                >
                    <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-transparent z-10 pointer-events-none"></div>
                    <AnimatePresence>
                        <motion.img
                            key={currentImage}
                            src={heroImages[currentImage]}
                            alt={`Royal Catering Banquet ${currentImage + 1}`}
                            className="absolute inset-0 w-full h-full object-cover"
                            style={{
                                imageRendering: "high-quality",
                                WebkitFontSmoothing: "antialiased",
                                filter: "contrast(1.05) saturate(1.05)" // Slight bump to make colors pop like 8k HDR
                            }}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 1.5, ease: "easeInOut" }}
                        />
                    </AnimatePresence>
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

                        <h1 className="text-5xl md:text-7xl lg:text-9xl font-bold text-white mb-8 leading-none drop-shadow-2xl">
                            <span className="text-gradient-gold">SA</span> Caterers
                        </h1>

                        <p className="text-gray-200 text-lg md:text-2xl font-light mb-12 max-w-3xl mx-auto leading-relaxed drop-shadow-md italic">
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

            {/* Introduction Section - Professional & Premium Layout */}
            <section className="py-24 md:py-32 bg-[#FFFCF5] relative overflow-hidden">
                <BackgroundTexture />

                {/* Decorative Elements */}
                <div className="absolute top-0 right-0 w-1/3 h-full bg-dark-green/[0.02] -skew-x-12 translate-x-1/2 pointer-events-none"></div>
                <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-luxury-gold/5 rounded-full blur-3xl pointer-events-none"></div>

                <div className="container mx-auto px-8 md:px-16 lg:px-24 relative z-10">
                    <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">

                        <div className="w-full lg:w-3/5">
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8 }}
                                className="relative z-10"
                            >
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="h-[2px] w-12 bg-luxury-gold"></div>
                                    <span className="text-luxury-gold uppercase tracking-[0.3em] text-xs font-black">Since 2014</span>
                                </div>

                                <h2 className="text-4xl md:text-6xl font-black text-dark-green mb-8 leading-[1.1] tracking-tight">
                                    Best Catering Services <br />
                                    in <span className="text-luxury-gold italic">Hyderabad</span>
                                </h2>

                                <div className="space-y-6 text-gray-600 text-lg md:text-xl font-light leading-relaxed mb-10 max-w-2xl">
                                    <p>
                                        Experience the epitome of catering excellence with <span className="font-bold text-dark-green uppercase tracking-tighter">SA Caterers</span>. We have been redefining celebrations across South India with our signature luxurious and gourmet approach.
                                    </p>
                                    <p>
                                        From royal weddings to prestigious corporate galas, we bring global culinary standards and authentic local charm to every plate. Each dish is a masterpiece, crafted with precision to turn your special moments into extraordinary memories.
                                    </p>
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-12">
                                    <div className="flex items-center gap-5 p-4 bg-white/50 backdrop-blur-sm border border-luxury-gold/10 hover:border-luxury-gold/30 transition-colors group">
                                        <div className="w-16 h-16 bg-luxury-gold/10 flex items-center justify-center text-luxury-gold transition-colors group-hover:bg-luxury-gold group-hover:text-white">
                                            <Star size={28} fill="currentColor" />
                                        </div>
                                        <div>
                                            <p className="text-dark-green font-black text-3xl leading-none mb-1">10+</p>
                                            <p className="text-gray-500 text-[10px] uppercase tracking-[0.2em] font-bold">Years Experience</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-5 p-4 bg-white/50 backdrop-blur-sm border border-luxury-gold/10 hover:border-luxury-gold/30 transition-colors group">
                                        <div className="w-16 h-16 bg-luxury-gold/10 flex items-center justify-center text-luxury-gold transition-colors group-hover:bg-luxury-gold group-hover:text-white">
                                            <UtensilsCrossed size={28} />
                                        </div>
                                        <div>
                                            <p className="text-dark-green font-black text-3xl leading-none mb-1">5K+</p>
                                            <p className="text-gray-500 text-[10px] uppercase tracking-[0.2em] font-bold">Happy Clients</p>
                                        </div>
                                    </div>
                                </div>

                                <Link to="/about" className="group flex items-center gap-4 w-max">
                                    <span className="text-dark-green font-black text-lg uppercase tracking-[0.2em] group-hover:text-luxury-gold transition-colors">Know More..</span>
                                    <div className="w-12 h-12 rounded-full bg-luxury-gold flex items-center justify-center text-white group-hover:bg-dark-green group-hover:translate-x-2 transition-all duration-300 shadow-lg">
                                        <ArrowRight size={20} />
                                    </div>
                                </Link>
                            </motion.div>
                        </div>

                        <div className="w-full lg:w-2/5">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95, x: 30 }}
                                whileInView={{ opacity: 1, scale: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 1 }}
                                className="relative"
                            >
                                {/* Luxury Frame Decoration */}
                                <div className="absolute -top-10 -right-10 w-full h-full border-[10px] border-luxury-gold/10 rounded-none -z-10"></div>
                                <div className="absolute -bottom-10 -left-10 w-full h-full border-[10px] border-dark-green/[0.03] rounded-none -z-10"></div>

                                {/* Main Image Container */}
                                <div className="relative shadow-[0_50px_100px_-20px_rgba(0,0,0,0.3)] border-[15px] border-white">
                                    <img
                                        src="/indian_chefs_cooking_1772217808721.jpeg"
                                        alt="SA Caterers Professional Chef"
                                        className="w-full h-auto object-cover"
                                    />
                                    <div className="absolute inset-0 border border-luxury-gold/20 m-4"></div>
                                </div>

                                {/* Floating Trust Badge */}
                                <div className="absolute top-10 -left-10 bg-dark-green p-5 shadow-2xl z-20 hidden xl:block border border-luxury-gold/20">
                                    <div className="text-center">
                                        <p className="text-luxury-gold text-3xl font-black mb-1">15 Years</p>
                                        <p className="text-white text-[8px] font-bold uppercase tracking-[0.2em] whitespace-nowrap">Experience</p>
                                    </div>
                                </div>
                            </motion.div>
                        </div>

                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section className="py-16 md:py-24 bg-green-texture text-white relative overflow-hidden" id="services">
                {/* Background Pattern */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-transparent pointer-events-none"></div>

                <div className="container mx-auto px-4 relative z-10">
                    <div className="text-center mb-12 md:mb-16 max-w-3xl mx-auto">
                        <span className="text-luxury-gold uppercase tracking-[0.2em] text-xs font-bold mb-4 block">What We Do</span>
                        <h2 className="text-4xl md:text-5xl leading-tight mb-6">Services We Offer <span className="text-white/50 italic">For Every Occasion</span></h2>
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
                                img: "/Wedding Catering.jpeg"
                            },
                            {
                                icon: <Cake size={28} />,
                                title: "Birthday Bashes",
                                desc: "Delightful menus for birthdays that kids and adults adore.",
                                img: "/Birthday Bashes.png"
                            },
                            {
                                icon: <Briefcase size={28} />,
                                title: "Corporate Events",
                                desc: "Professional catering services to impress your clients and team.",
                                img: "/Corporate Events.png"
                            },
                            {
                                icon: <Star size={28} />,
                                title: "Outdoor Catering",
                                desc: "Perfectly executed outdoor dining experiences, anywhere.",
                                img: "/Outdoor Catering.png"
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
                                    <h3 className="text-xl font-bold mb-3 text-white group-hover:text-luxury-gold transition-colors">{service.title}</h3>
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
            <section className="py-20 bg-[#FAFAFA] relative overflow-hidden">
                <BackgroundTexture />
                <div className="container mx-auto px-4 relative z-10">
                    <div className="text-center mb-16">
                        <span className="text-luxury-gold uppercase tracking-[0.2em] text-xs font-bold mb-3 block">Explore Our Offerings</span>
                        <h2 className="text-4xl md:text-5xl text-dark-green mb-4">Our Catering Menus</h2>
                        <div className="w-20 h-1 bg-luxury-gold mx-auto mb-6"></div>
                        <p className="text-gray-500 italic text-sm">Select a category to view our carefully curated dishes for every occasion.</p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
                        {[
                            { title: "Full Veg Menu", img: "/Veg-Menu.png" },
                            { title: "Full Non Veg Menu", img: "/NON-Veg.jpg" },
                            { title: "Veg Below 200", img: "/Veg 1.png" },
                            { title: "Non Veg Below 200", img: "/Non Veg 1.png" },
                            //{ title: "Regular Non Veg Menu", img: "https://images.unsplash.com/photo-1570773950664-585d8527a20c?auto=format&fit=crop&q=80&w=600" }
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
                                        <h3 className="text-xl md:text-2xl font-bold text-white drop-shadow-md mb-3 leading-tight">{menu.title}</h3>
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
                    <h3 className="text-2xl text-luxury-gold italic">Captured Moments</h3>
                </div>
                <div className="flex space-x-4 overflow-x-auto pb-4 scrollbar-hide px-4">
                    {[
                        "/ap_hyd_gallery_1_1772218641518.png",
                        "/gallery_moment_1_1772218443129.png",
                        "/ap_hyd_gallery_2_1772218656042.png",
                        "/gallery_moment_2_1772218457394.png",
                        "/ap_hyd_gallery_3_1772218670479.png",
                        "/gallery_moment_3_1772218470648.png",
                        "/ap_hyd_gallery_4_1772218684599.png",
                        "/gallery_moment_4_1772218490214.png",
                        "/ap_hyd_gallery_5_1772218698698.png",
                        "/gallery_moment_5_1772218505264.png"
                    ].map((src, i) => (
                        <div key={i} className="min-w-[250px] md:min-w-[300px] h-[250px] md:h-[300px] rounded-xl overflow-hidden relative group shrink-0 shadow-lg border border-white/10">
                            <img
                                src={src}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                style={{ imageRendering: "high-quality", filter: "contrast(1.02) saturate(1.05)" }}
                                alt={`Gallery Moment ${i + 1}`}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
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
                        <h2 className="text-4xl md:text-6xl font-bold text-white mb-4 leading-none">Ready to create <br /><span className="italic text-luxury-gold">memories?</span></h2>
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
