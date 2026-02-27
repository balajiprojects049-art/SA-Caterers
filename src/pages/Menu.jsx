import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, Info, ShoppingBag, CupSoda, Coffee, Dessert, UtensilsCrossed, Soup, ChefHat, CookingPot, Wine, Drumstick, Fish, Flame, Store, Pizza, X } from 'lucide-react';
import BackgroundTexture from '../components/BackgroundTexture';
import { menuPackages } from '../data/menuData';
import { cn } from '../lib/utils';

const getCategoryIcon = (categoryName) => {
    const lower = categoryName.toLowerCase();
    if (lower.includes('juice') || lower.includes('milk shake') || lower.includes('punch') || lower.includes('beverage')) return <CupSoda size={28} strokeWidth={1.5} />;
    if (lower.includes('coffee') || lower.includes('tea')) return <Coffee size={28} strokeWidth={1.5} />;
    if (lower.includes('sweet') || lower.includes('mithai')) return <Dessert size={28} strokeWidth={1.5} />;
    if (lower.includes('chat') || lower.includes('stall')) return <Store size={28} strokeWidth={1.5} />;
    if (lower.includes('global') || lower.includes('pizza') || lower.includes('italian')) return <Pizza size={28} strokeWidth={1.5} />;
    if (lower.includes('curry') || lower.includes('dal') || lower.includes('masala')) return <Soup size={28} strokeWidth={1.5} />;
    if (lower.includes('rice') || lower.includes('biryani') || lower.includes('main') || lower.includes('basic')) return <UtensilsCrossed size={28} strokeWidth={1.5} />;
    if (lower.includes('bread') || lower.includes('dosa') || lower.includes('south indian') || lower.includes('breakfast')) return <CookingPot size={28} strokeWidth={1.5} />;
    if (lower.includes('chicken') || lower.includes('mutton') || lower.includes('non-veg') || lower.includes('meat')) return <Drumstick size={28} strokeWidth={1.5} />;
    if (lower.includes('fish') || lower.includes('prawn')) return <Fish size={28} strokeWidth={1.5} />;
    if (lower.includes('alcohol') || lower.includes('drink')) return <Wine size={28} strokeWidth={1.5} />;
    if (lower.includes('starter') || lower.includes('fry') || lower.includes('snack')) return <Flame size={28} strokeWidth={1.5} />;
    return <ChefHat size={28} strokeWidth={1.5} />;
};

const Menu = () => {
    const [activeTab, setActiveTab] = useState(menuPackages[0].id);
    const [selectedItems, setSelectedItems] = useState([]);
    const [isFormOpen, setIsFormOpen] = useState(false);
    const [formData, setFormData] = useState({ name: '', phone: '', date: '', location: '', guests: '' });

    const activePackage = menuPackages.find(p => p.id === activeTab) || menuPackages[0];

    const handleItemToggle = (item) => {
        setSelectedItems(prev =>
            prev.includes(item) ? prev.filter(i => i !== item) : [...prev, item]
        );
    };

    const handleFormChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleEnquiryClick = () => {
        if (selectedItems.length === 0) {
            alert("Please select some items to enquire about.");
            return;
        }
        setIsFormOpen(true);
    };

    const submitEnquiry = (e) => {
        e.preventDefault();
        const { name, phone, date, location, guests } = formData;

        let message = `*NEW CATERING INQUIRY*\n`;
        message += `---------------------------------------\n\n`;

        message += `*CLIENT DETAILS*\n`;
        message += `👤 *Name:* ${name}\n`;
        message += `📞 *Phone:* ${phone}\n`;
        message += `📅 *Event Date:* ${date}\n`;
        if (guests) message += `� *Guest Count:* ${guests} pax\n`;
        if (location) message += `� *Venue/Area:* ${location}\n\n`;

        message += `*MENU SELECTION*\n`;
        message += `🏷️ *Package:* ${activePackage.label}\n`;
        message += `📋 *Items Selected (${selectedItems.length}):*\n`;
        message += selectedItems.map(item => `   ▪ ${item}`).join('\n');

        message += `\n---------------------------------------\n`;
        message += `_Sent via SA Caterers Website_`;

        const url = `https://wa.me/919030927239?text=${encodeURIComponent(message)}`;
        window.open(url, '_blank');
        setIsFormOpen(false);
    }

    return (
        <div className="min-h-screen bg-[#FAFAFA] pb-32 relative overflow-hidden">
            <BackgroundTexture />
            <div className="relative z-10">
                {/* Hero Section */}
                <div className="relative h-[60vh] min-h-[500px] overflow-hidden mb-12">
                    <div className="absolute inset-0">
                        <img
                            src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=1920&auto=format&fit=crop"
                            alt="Catering Menu"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70"></div>
                    </div>
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4 z-10">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <span className="text-luxury-gold uppercase tracking-[0.3em] font-bold text-sm md:text-base mb-4 block drop-shadow-md">
                                Taste the Tradition
                            </span>
                            <h1 className="text-5xl md:text-7xl font-playfair font-bold text-white mb-6 drop-shadow-xl">
                                Our Royal Menus
                            </h1>
                            <div className="w-24 h-1 bg-luxury-gold mx-auto mb-6 rounded-full"></div>
                            <p className="text-gray-200 text-lg md:text-xl max-w-2xl font-light leading-relaxed drop-shadow-md">
                                A curated selection of authentic flavors, crafted to perfection for your grand celebrations.
                            </p>
                        </motion.div>
                    </div>
                </div>
                {/* Decorative Background Elements */}
                <div className="absolute top-0 left-0 w-full h-[300px] bg-gradient-to-b from-dark-green/5 to-transparent pointer-events-none"></div>


                {/* Top Navigation Tabs */}
                <div className="sticky top-[80px] z-30 bg-cream/95 backdrop-blur-md shadow-sm border-b border-luxury-gold/20 overflow-x-auto no-scrollbar">
                    <div className="max-w-[1600px] mx-auto px-4 md:px-8">
                        <div className="flex space-x-3 py-4 min-w-max">
                            {menuPackages.map((pkg) => (
                                <button
                                    key={pkg.id}
                                    onClick={() => setActiveTab(pkg.id)}
                                    className={cn(
                                        "px-6 py-2.5 rounded-full font-playfair font-semibold tracking-wide transition-all duration-300 border whitespace-nowrap text-sm md:text-base",
                                        activeTab === pkg.id
                                            ? "bg-dark-green border-dark-green text-luxury-gold shadow-lg transform -translate-y-[1px]"
                                            : "bg-white border-gray-200 text-gray-600 hover:border-luxury-gold hover:text-dark-green hover:bg-luxury-gold/5"
                                    )}
                                >
                                    {pkg.label}
                                </button>
                            ))}
                            <button
                                onClick={() => setActiveTab('premium')}
                                className={cn(
                                    "px-6 py-2.5 rounded-full font-playfair font-semibold tracking-wide transition-all duration-300 border whitespace-nowrap text-sm md:text-base",
                                    activeTab === 'premium'
                                        ? "bg-dark-green border-dark-green text-luxury-gold shadow-lg transform -translate-y-[1px]"
                                        : "bg-white border-gray-200 text-gray-600 hover:border-luxury-gold hover:text-dark-green hover:bg-luxury-gold/5"
                                )}
                            >
                                Premium Plans
                            </button>
                        </div>
                    </div>
                </div>

                <div className="max-w-[1600px] mx-auto px-4 md:px-8 py-12 relative z-10">

                    {activeTab === 'premium' ? (
                        <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                            <div className="text-center mb-16">
                                <h1 className="text-4xl md:text-6xl font-playfair font-bold text-dark-green mb-4 drop-shadow-sm">Premium Service Tiers</h1>
                                <div className="w-24 h-1 bg-luxury-gold mx-auto mb-6 rounded-full opacity-80"></div>
                                <p className="text-gray-600 max-w-2xl mx-auto font-poppins text-lg leading-relaxed">Choose the perfect service level for your special occasion.</p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                {/* Silver Plan */}
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.1 }}
                                    className="bg-white rounded-[2rem] p-8 border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden group"
                                >
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-gray-100 rounded-bl-[100%] -mr-8 -mt-8 opacity-50 group-hover:scale-110 transition-transform"></div>
                                    <h3 className="text-3xl font-playfair font-bold text-gray-800 mb-2">Silver</h3>
                                    <p className="text-gray-500 mb-6 text-sm font-medium tracking-wide uppercase">Essential Catering</p>
                                    <div className="w-12 h-1 bg-gray-300 mb-8"></div>
                                    <ul className="space-y-4 mb-8">
                                        <li className="flex items-start text-gray-600">
                                            <Check size={18} className="text-gray-400 mr-3 mt-1 flex-shrink-0" />
                                            <span>Standard Buffet Setup</span>
                                        </li>
                                        <li className="flex items-start text-gray-600">
                                            <Check size={18} className="text-gray-400 mr-3 mt-1 flex-shrink-0" />
                                            <span>Professional Service Staff</span>
                                        </li>
                                        <li className="flex items-start text-gray-600">
                                            <Check size={18} className="text-gray-400 mr-3 mt-1 flex-shrink-0" />
                                            <span>Basic Cutlery & Crockery</span>
                                        </li>
                                        <li className="flex items-start text-gray-600">
                                            <Check size={18} className="text-gray-400 mr-3 mt-1 flex-shrink-0" />
                                            <span>Drinking Water Bottles</span>
                                        </li>
                                    </ul>
                                    <button className="w-full py-3 border-2 border-gray-800 text-gray-800 font-bold rounded-full hover:bg-gray-800 hover:text-white transition-colors">
                                        Select Silver
                                    </button>
                                </motion.div>

                                {/* Gold Plan */}
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.2 }}
                                    className="bg-[#FFFDF5] rounded-[2rem] p-8 border border-luxury-gold shadow-[0_20px_50px_-12px_rgba(212,175,55,0.25)] relative overflow-hidden transform md:-translate-y-4 md:h-[calc(100%+2rem)] flex flex-col justify-center group"
                                >
                                    <div className="absolute top-0 inset-x-0 h-2 bg-gradient-to-r from-yellow-300 via-luxury-gold to-yellow-300"></div>
                                    <div className="absolute top-4 right-4 bg-luxury-gold text-dark-green text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">Popular</div>
                                    <h3 className="text-4xl font-playfair font-bold text-dark-green mb-2">Gold</h3>
                                    <p className="text-luxury-gold mb-6 text-sm font-bold tracking-wide uppercase">Premium Experience</p>
                                    <div className="w-12 h-1 bg-luxury-gold mb-8"></div>
                                    <ul className="space-y-4 mb-8">
                                        <li className="flex items-start text-dark-green">
                                            <Check size={18} className="text-luxury-gold mr-3 mt-1 flex-shrink-0" />
                                            <span>Grand Buffet Display</span>
                                        </li>
                                        <li className="flex items-start text-dark-green">
                                            <Check size={18} className="text-luxury-gold mr-3 mt-1 flex-shrink-0" />
                                            <span>Uniformed Waitstaff & Chefs</span>
                                        </li>
                                        <li className="flex items-start text-dark-green">
                                            <Check size={18} className="text-luxury-gold mr-3 mt-1 flex-shrink-0" />
                                            <span>Premium Bone China Crockery</span>
                                        </li>
                                        <li className="flex items-start text-dark-green">
                                            <Check size={18} className="text-luxury-gold mr-3 mt-1 flex-shrink-0" />
                                            <span>Welcome Drinks Served</span>
                                        </li>
                                        <li className="flex items-start text-dark-green">
                                            <Check size={18} className="text-luxury-gold mr-3 mt-1 flex-shrink-0" />
                                            <span>Live Food Counters</span>
                                        </li>
                                    </ul>
                                    <button className="w-full py-4 bg-luxury-gold text-dark-green font-bold rounded-full shadow-lg hover:bg-[#d6a54e] transition-colors relative overflow-hidden">
                                        <span className="relative z-10">Select Gold</span>
                                    </button>
                                </motion.div>

                                {/* Platinum Plan */}
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.3 }}
                                    className="bg-white rounded-[2rem] p-8 border border-gray-300 shadow-xl hover:shadow-2xl transition-all duration-300 relative overflow-hidden group"
                                >
                                    <div className="absolute top-0 right-0 w-40 h-40 bg-gray-900 rounded-bl-[100%] -mr-10 -mt-10 opacity-5 group-hover:scale-110 transition-transform"></div>
                                    <h3 className="text-3xl font-playfair font-bold text-gray-900 mb-2">Platinum</h3>
                                    <p className="text-gray-500 mb-6 text-sm font-medium tracking-wide uppercase">Royal Luxury</p>
                                    <div className="w-12 h-1 bg-gray-800 mb-8"></div>
                                    <ul className="space-y-4 mb-8">
                                        <li className="flex items-start text-gray-700">
                                            <Check size={18} className="text-gray-600 mr-3 mt-1 flex-shrink-0" />
                                            <span>Exquisite Themed Setup</span>
                                        </li>
                                        <li className="flex items-start text-gray-700">
                                            <Check size={18} className="text-gray-600 mr-3 mt-1 flex-shrink-0" />
                                            <span>VVIP Service Protocol</span>
                                        </li>
                                        <li className="flex items-start text-gray-700">
                                            <Check size={18} className="text-gray-600 mr-3 mt-1 flex-shrink-0" />
                                            <span>Imported Premium Glassware</span>
                                        </li>
                                        <li className="flex items-start text-gray-700">
                                            <Check size={18} className="text-gray-600 mr-3 mt-1 flex-shrink-0" />
                                            <span>Multiple Live Stations</span>
                                        </li>
                                        <li className="flex items-start text-gray-700">
                                            <Check size={18} className="text-gray-600 mr-3 mt-1 flex-shrink-0" />
                                            <span>Floral Decor for Tables</span>
                                        </li>
                                    </ul>
                                    <button className="w-full py-3 bg-gray-900 text-white font-bold rounded-full hover:bg-gray-800 transition-colors">
                                        Select Platinum
                                    </button>
                                </motion.div>
                            </div>
                        </div>
                    ) : (
                        <>
                            {/* Header Section */}
                            <motion.div
                                key={activeTab} // To re-trigger animation on tab change
                                initial={{ opacity: 0, y: 15 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                                className="text-center mb-16"
                            >
                                <h1 className="text-4xl md:text-6xl font-playfair font-bold text-dark-green mb-4 drop-shadow-sm">{activePackage.label}</h1>
                                <div className="w-24 h-1 bg-luxury-gold mx-auto mb-6 rounded-full opacity-80"></div>
                                <p className="text-gray-600 max-w-2xl mx-auto font-poppins text-lg leading-relaxed">{activePackage.description || "Craft your perfect menu with our premium selection of authentic dishes."}</p>

                                <div className="mt-8 flex items-center justify-center p-4 bg-luxury-gold/10 text-dark-green rounded-xl max-w-xl mx-auto border border-luxury-gold/30 shadow-sm">
                                    <Info className="w-5 h-5 mr-3 flex-shrink-0 text-luxury-gold" />
                                    <p className="text-sm font-medium">Note: Cleaning staff and Crockery not included. Transport charges extra.</p>
                                </div>
                            </motion.div>

                            {/* Menu Grid */}
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={activeTab + "-grid"}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.4 }}
                                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                                >
                                    {activePackage.categories.map((category, idx) => {
                                        // Pastel colors based on index to verify against the reference image style
                                        const cardStyles = [
                                            { bg: "bg-[#eff6ff]", border: "border-blue-100", iconBg: "bg-blue-100", iconColor: "text-blue-600", titleColor: "text-blue-900" }, // Blue (Welcome Juice)
                                            { bg: "bg-[#eff6ff]", border: "border-blue-100", iconBg: "bg-blue-100", iconColor: "text-blue-600", titleColor: "text-blue-900" }, // Blue (Crush Juices) - matching 2nd card
                                            { bg: "bg-[#fff7ed]", border: "border-orange-100", iconBg: "bg-orange-100", iconColor: "text-orange-600", titleColor: "text-orange-900" }, // Orange (Veg Starters)
                                            { bg: "bg-[#fdf4ff]", border: "border-purple-100", iconBg: "bg-purple-100", iconColor: "text-purple-600", titleColor: "text-purple-900" }, // Purple (Live Stalls)
                                            { bg: "bg-[#fff1f2]", border: "border-pink-100", iconBg: "bg-pink-100", iconColor: "text-pink-600", titleColor: "text-pink-900" }, // Pink (Sweet Counter)
                                            { bg: "bg-[#fff1f2]", border: "border-pink-100", iconBg: "bg-pink-100", iconColor: "text-pink-600", titleColor: "text-pink-900" }, // Pink (Fruit Counter)
                                            { bg: "bg-[#fdf4ff]", border: "border-purple-100", iconBg: "bg-purple-100", iconColor: "text-purple-600", titleColor: "text-purple-900" }, // Purple (Chat Counter)
                                            { bg: "bg-[#eff6ff]", border: "border-blue-100", iconBg: "bg-blue-100", iconColor: "text-blue-600", titleColor: "text-blue-900" }, // Blue (Mocktail)
                                            { bg: "bg-[#ecfdf5]", border: "border-green-100", iconBg: "bg-green-100", iconColor: "text-green-600", titleColor: "text-green-900" }, // Green (South Indian)
                                        ];

                                        const style = cardStyles[idx % cardStyles.length];

                                        return (
                                            <motion.div
                                                key={category.category}
                                                initial={{ opacity: 0, y: 20 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ delay: idx * 0.05 + 0.1 }}
                                                className={`${style.bg} rounded-[32px] shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden border ${style.border} group relative`}
                                            >
                                                {/* Card Header */}
                                                <div className="px-8 pt-8 pb-4 flex items-center space-x-4">
                                                    <div className={`w-14 h-14 rounded-2xl ${style.iconBg} ${style.iconColor} flex items-center justify-center shadow-inner`}>
                                                        {getCategoryIcon(category.category)}
                                                    </div>
                                                    <h3 className={`text-xl font-playfair font-bold ${style.titleColor} tracking-wide`}>{category.category}</h3>
                                                </div>

                                                {/* Items List */}
                                                <div className="px-8 pb-8 pt-2 space-y-3">
                                                    {category.items.map((item) => {
                                                        const isSelected = selectedItems.includes(item);
                                                        return (
                                                            <div
                                                                key={item}
                                                                onClick={() => handleItemToggle(item)}
                                                                className="flex items-center cursor-pointer group/item py-1"
                                                            >
                                                                <div className={cn(
                                                                    "w-5 h-5 rounded-[4px] border flex items-center justify-center mr-3 transition-all duration-200 shrink-0",
                                                                    isSelected
                                                                        ? "bg-gray-800 border-gray-800"
                                                                        : "bg-white border-gray-400 group-hover/item:border-gray-600"
                                                                )}>
                                                                    {isSelected && <Check size={14} className="text-white stroke-[3]" />}
                                                                </div>
                                                                <span className={cn(
                                                                    "font-poppins text-[15px] font-medium transition-colors",
                                                                    isSelected ? "text-gray-900" : "text-gray-700"
                                                                )}>
                                                                    {item}
                                                                </span>
                                                            </div>
                                                        );
                                                    })}
                                                </div>
                                            </motion.div>
                                        );
                                    })}
                                </motion.div>
                            </AnimatePresence>
                        </>
                    )}
                </div>

                {/* Floating Summary Bar */}
                <AnimatePresence>
                    {selectedItems.length > 0 && (
                        <motion.div
                            initial={{ y: 100, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: 100, opacity: 0 }}
                            className="fixed bottom-6 left-4 right-4 md:left-1/2 md:-translate-x-1/2 md:max-w-4xl bg-dark-green/95 backdrop-blur-md border border-luxury-gold/30 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.3)] rounded-2xl p-4 z-50 text-white"
                        >
                            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                                <div className="flex items-center space-x-4">
                                    <div className="bg-luxury-gold text-dark-green font-bold w-10 h-10 rounded-full flex items-center justify-center shadow-lg">
                                        {selectedItems.length}
                                    </div>
                                    <div>
                                        <span className="font-playfair font-bold text-lg text-luxury-gold block">Your Selection</span>
                                        <p className="text-sm text-gray-300">Ready to customize your menu?</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-3 w-full md:w-auto">
                                    <button
                                        onClick={() => setSelectedItems([])}
                                        className="px-5 py-2.5 rounded-full border border-gray-500 text-gray-300 hover:bg-white/10 hover:text-white hover:border-white transition-colors text-sm font-medium flex-1 md:flex-none whitespace-nowrap"
                                    >
                                        Clear
                                    </button>
                                    <button
                                        onClick={handleEnquiryClick}
                                        className="px-6 py-2.5 rounded-full bg-luxury-gold text-dark-green font-bold shadow-lg hover:bg-[#d6a54e] hover:shadow-luxury-gold/20 hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2 flex-[2] md:flex-none whitespace-nowrap"
                                    >
                                        <ShoppingBag size={18} strokeWidth={2.5} />
                                        <span>Enquire via WhatsApp</span>
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Enquiry Form Modal */}
                <AnimatePresence>
                    {isFormOpen && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 z-[9999] flex items-center justify-center p-4 pt-24 pb-8 bg-black/60 backdrop-blur-sm overflow-y-auto"
                        >
                            <motion.div
                                initial={{ scale: 0.95, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                exit={{ scale: 0.95, opacity: 0 }}
                                className="bg-white rounded-[2rem] p-6 md:p-8 max-w-md w-full shadow-2xl relative my-auto"
                            >
                                <button
                                    onClick={() => setIsFormOpen(false)}
                                    className="absolute top-6 right-6 text-gray-400 hover:text-gray-800 transition-colors"
                                >
                                    <X size={24} />
                                </button>

                                <h3 className="text-2xl md:text-3xl font-playfair font-bold text-dark-green mb-2">Event Details</h3>
                                <p className="text-gray-500 mb-6 text-sm">Please provide your details so we can assist you better.</p>

                                <form onSubmit={submitEnquiry} className="space-y-4">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Name *</label>
                                        <input required type="text" name="name" value={formData.name} onChange={handleFormChange} className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-dark-green focus:border-dark-green transition-all" placeholder="Your Name" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Phone *</label>
                                        <input required type="tel" name="phone" value={formData.phone} onChange={handleFormChange} className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-dark-green focus:border-dark-green transition-all" placeholder="Your Phone Number" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Event Date *</label>
                                        <input required type="date" name="date" value={formData.date} onChange={handleFormChange} className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-dark-green focus:border-dark-green transition-all" />
                                    </div>
                                    <div className="grid grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-1">Guests</label>
                                            <input type="number" name="guests" value={formData.guests} onChange={handleFormChange} className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-dark-green focus:border-dark-green transition-all" placeholder="E.g. 200" />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
                                            <input type="text" name="location" value={formData.location} onChange={handleFormChange} className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-dark-green focus:border-dark-green transition-all" placeholder="City / Area" />
                                        </div>
                                    </div>

                                    <button type="submit" className="w-full mt-6 py-4 bg-dark-green text-luxury-gold font-bold text-lg rounded-xl shadow-lg hover:bg-[#1a3826] transition-colors flex items-center justify-center gap-2">
                                        <ShoppingBag size={20} />
                                        Send to WhatsApp
                                    </button>
                                </form>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
};

export default Menu;
