import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useMediaQuery } from 'react-responsive'

const words = [
    "Full Stack Developer",
    "MERN Stack Expert",
    "UI/UX Enthusiast",
    "Problem Solver"
];

const Typewriter = () => {
    const [index, setIndex] = useState(0);
    const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % words.length);
        }, 3000); // Change word every 3 seconds

        return () => clearInterval(interval);
    }, []);

    return (
        <span className="inline-flex text-violet-400 noto-serif-bold px-1">
            <AnimatePresence mode="wait">
                <motion.span
                    key={index}
                    initial={isMobile ? false : { opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="whitespace-nowrap inline-block"
                >
                    {words[index]}
                </motion.span>
            </AnimatePresence>
        </span>
    );
};

export default Typewriter;
