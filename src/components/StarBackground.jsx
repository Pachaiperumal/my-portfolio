import { useEffect, useRef } from 'react';

const StarBackground = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let animationFrameId;

        const setCanvasSize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        setCanvasSize();
        window.addEventListener('resize', setCanvasSize);

        // Create stars array (150 stars)
        const stars = Array.from({ length: 150 }, () => ({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            radius: Math.random() * 1.5, // Tiny radius
            alpha: Math.random(), // Initial opacity
            velocity: (Math.random() * 0.1) + 0.05, // Movement speed upwards
            blinkDelay: Math.random() * 100 // Delay before modifying opacity
        }));

        const render = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            stars.forEach(star => {
                // Slowly drift upward
                star.y -= star.velocity;

                // Wrap around when it hits the top
                if (star.y < 0) {
                    star.y = canvas.height;
                    star.x = Math.random() * canvas.width;
                }

                // Twinkle effect (rapid shift in opacity)
                star.blinkDelay -= 1;
                if (star.blinkDelay < 0) {
                    star.alpha = star.alpha > 0.5 ? Math.random() * 0.5 : Math.random() * 0.5 + 0.5;
                    star.blinkDelay = Math.random() * 100 + 50;
                }

                ctx.beginPath();
                ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(255, 255, 255, ${star.alpha})`;
                ctx.fill();
            });

            animationFrameId = requestAnimationFrame(render);
        };

        render();

        return () => {
            window.removeEventListener('resize', setCanvasSize);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 pointer-events-none z-0 mix-blend-screen"
            style={{ opacity: 0.6 }}
        />
    );
};

export default StarBackground;
