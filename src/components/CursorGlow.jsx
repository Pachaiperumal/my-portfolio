import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useMediaQuery } from 'react-responsive';

const CursorGlow = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

    useEffect(() => {
        if (isMobile) return;

        const updateMousePosition = (e) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };

        window.addEventListener('mousemove', updateMousePosition);

        return () => {
            window.removeEventListener('mousemove', updateMousePosition);
        };
    }, [isMobile]);

    if (isMobile) return null;

    return (
        <motion.div
            className="fixed top-0 left-0 w-[500px] h-[500px] rounded-full pointer-events-none mix-blend-screen z-50 overflow-hidden"
            animate={{
                x: mousePosition.x - 160, // center horizontal
                y: mousePosition.y - 160, // center vertical
                opacity: 0.5,
            }}
            transition={{
                type: "spring",
                stiffness: 150,
                damping: 15,
                mass: 0.1
            }}
            style={{
                background: 'radial-gradient(circle, rgba(139, 92, 246, 0.6) 0%, rgba(217, 70, 239, 0.3) 40%, rgba(0,0,0,0) 70%)',
                filter: 'blur(50px)',
            }}
        />
    );
};

export default CursorGlow;
