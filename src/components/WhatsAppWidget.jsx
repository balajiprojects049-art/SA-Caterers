import { motion } from 'framer-motion';

const WhatsAppWidget = () => {
    const defaultMessage = "Hello! I am reaching out from your website and would like to know more about your catering service options.";
    const url = `https://wa.me/919030927239?text=${encodeURIComponent(defaultMessage)}`;

    return (
        <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 z-[999] group flex items-center"
        >
            <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ type: "spring", stiffness: 260, damping: 20, delay: 1 }}
                whileHover={{ scale: 1.1 }}
                className="w-14 h-14 md:w-16 md:h-16 bg-[#25D366] rounded-full flex items-center justify-center shadow-[0_10px_20px_rgba(37,211,102,0.4)] relative"
            >
                {/* Pulse ring animation */}
                <span className="absolute inset-0 rounded-full border-2 border-[#25D366] animate-[ping_2s_cubic-bezier(0,0,0.2,1)_infinite] opacity-50"></span>

                {/* Clean WhatsApp SVG Icon */}
                <svg className="w-8 h-8 md:w-9 md:h-9 text-white z-10" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a5.8 5.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
                </svg>
            </motion.div>

            {/* Hover Tooltip Box */}
            <div className="absolute right-full mr-5 top-1/2 -translate-y-1/2 w-max px-5 py-3 bg-white text-dark-green text-sm font-bold font-poppins rounded-xl shadow-[0_8px_30px_rgba(0,0,0,0.12)] opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-4 group-hover:translate-x-0 pointer-events-none hidden md:block border border-gray-100">
                Hi! Need catering help? Let's chat 👋
            </div>
            {/* Small tooltip pointer arrow */}
            <div className="absolute right-full mr-[11px] top-1/2 -translate-y-1/2 w-3 h-3 bg-white rotate-45 border-t border-r border-gray-100 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-4 group-hover:translate-x-0 pointer-events-none hidden md:block"></div>
        </a>
    );
};

export default WhatsAppWidget;
