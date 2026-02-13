import React from 'react';
import { ChefHat, Utensils, Coffee } from 'lucide-react';

const BackgroundTexture = () => {
    // Determine random positions on client side to avoid hydration mismatch if using SSR (though this is Vite client-side so it's fine, but good practice to be consistent or just use CSS/deterministic random if possible. For now, since it's client-side only React, basic random is okay, but `useEffect` or fixed seed is better to avoid 'jump' on re-render if any parent re-renders. However, since this is a static background component likely only mounted once per page load, it's acceptable. To make it stable, we can generate the array once.)

    // Generating fixed random-like values based on index to ensure consistency during re-renders if index is key
    const getStyle = (i) => {
        const random = (seed) => {
            var x = Math.sin(seed++) * 10000;
            return x - Math.floor(x);
        };

        return {
            top: `${random(i * 123) * 100}%`,
            left: `${random(i * 456) * 100}%`,
            transform: `rotate(${random(i * 789) * 360}deg) scale(${0.5 + random(i * 321)})`,
        };
    };

    return (
        <div className="fixed inset-0 pointer-events-none overflow-hidden h-full w-full z-0">
            {/* Background Texture - Catering Icons Pattern */}
            <div className="absolute inset-0 z-0 opacity-5">
                {[...Array(20)].map((_, i) => (
                    <div key={i} className="absolute text-dark-green" style={getStyle(i)}>
                        {i % 3 === 0 ? <ChefHat size={120} /> : i % 3 === 1 ? <Utensils size={100} /> : <Coffee size={90} />}
                    </div>
                ))}
            </div>

            {/* Repeating Watermark Text */}
            <div className="absolute inset-0 z-0 opacity-[0.03] flex flex-wrap content-center justify-center gap-24 select-none">
                {[...Array(10)].map((_, i) => (
                    <div key={i} className="text-6xl md:text-8xl font-black font-playfair -rotate-12 whitespace-nowrap text-dark-green">
                        SA CATERERS
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BackgroundTexture;
