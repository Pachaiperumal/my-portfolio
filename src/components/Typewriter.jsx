import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const words = [
    "Full Stack Developer",
    "MERN Stack Expert",
    "UI/UX Enthusiast",
    "Problem Solver"
];

const Typewriter = () => {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % words.length);
        }, 3000); // Change word every 3 seconds

        return () => clearInterval(interval);
    }, []);

    return (
        <span className="inline-flex text-violet-400 font-bold px-1">
            <AnimatePresence mode="wait">
                <motion.span
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
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
