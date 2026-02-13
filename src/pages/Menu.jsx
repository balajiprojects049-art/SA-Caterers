import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, Info, ShoppingBag } from 'lucide-react';
import BackgroundTexture from '../components/BackgroundTexture';
import { menuPackages } from '../data/menuData';
import { cn } from '../lib/utils';

const Menu = () => {
    const [activeTab, setActiveTab] = useState(menuPackages[0].id);
    const [selectedItems, setSelectedItems] = useState([]);

    const activePackage = menuPackages.find(p => p.id === activeTab) || menuPackages[0];

    const handleItemToggle = (item) => {
        setSelectedItems(prev =>
            prev.includes(item) ? prev.filter(i => i !== item) : [...prev, item]
        );
    };

    const handleEnquiry = () => {
        if (selectedItems.length === 0) {
            alert("Please select some items to enquire about.");
            return;
        }
        const message = `Hello, I am interested in the following items from the *${activePackage.label}*: \n\n${selectedItems.join(', ')}`;
        const url = `https://wa.me/919030927239?text=${encodeURIComponent(message)}`;
        window.open(url, '_blank');
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
                        </div>
                    </div>
                </div>

                <div className="max-w-[1600px] mx-auto px-4 md:px-8 py-12 relative z-10">

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
                                            <div className={`w-12 h-12 rounded-2xl ${style.iconBg} ${style.iconColor} flex items-center justify-center font-playfair font-bold text-xl`}>
                                                <span className="text-2xl">Ψ</span>
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
                                        onClick={handleEnquiry}
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
            </div>
        </div>
    );
};

export default Menu;
