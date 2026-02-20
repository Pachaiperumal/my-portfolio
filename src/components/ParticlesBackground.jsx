import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const ParticlesBackground = () => {
    const [particles, setParticles] = useState([]);

    useEffect(() => {
        // Generate particles on the client side
        const generateParticles = () => {
            return Array.from({ length: 40 }).map((_, i) => ({
                id: i,
                size: Math.random() * 3 + 1,
                initialX: Math.random() * 100,
                initialY: Math.random() * 100,
                duration: Math.random() * 20 + 10,
                delay: Math.random() * 5,
                xOffset: Math.random() * 20 - 10,
                yOffset: Math.random() * -50 - 20, // drift upwards
            }));
        };
        setParticles(generateParticles());
    }, []);

    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
            {particles.map((p) => (
                <motion.div
                    key={p.id}
                    className="absolute rounded-full bg-white/20"
                    style={{
                        width: p.size,
                        height: p.size,
                        left: `${p.initialX}%`,
                        top: `${p.initialY}%`,
                    }}
                    animate={{
                        y: [0, p.yOffset],
                        x: [0, p.xOffset, 0],
                        opacity: [0, 0.4, 0],
                    }}
                    transition={{
                        duration: p.duration,
                        repeat: Infinity,
                        delay: p.delay,
                        ease: "linear"
                    }}
                />
            ))}
        </div>
    );
};

export default ParticlesBackground;
