import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';

/**
 * SplitText – animates text character-by-character using free GSAP.
 *
 * Gradient support: pass gradientFrom / gradientVia / gradientTo (hex/rgb/hsl)
 * and the component will distribute the gradient proportionally across all chars.
 *
 * Props:
 *  useScrollTrigger – false = simple load animation (default true)
 *  loadDelay        – delay in seconds before animation fires (default 0.3)
 *  gradientFrom     – start color of gradient  (e.g. '#a78bfa')
 *  gradientVia      – mid color of gradient    (e.g. '#c084fc')
 *  gradientTo       – end color of gradient    (e.g. '#6366f1')
 */
const SplitText = ({
    text = '',
    className = '',
    delay = 50,
    duration = 1.25,
    ease = 'power3.out',
    from = { opacity: 0, y: 40 },
    to = { opacity: 1, y: 0 },
    textAlign = 'center',
    tag = 'p',
    useScrollTrigger = true,
    loadDelay = 0.3,
    gradientFrom,
    gradientVia,
    gradientTo,
    onLetterAnimationComplete,
}) => {
    const containerRef = useRef(null);

    // ── Character list (with index tracking for gradient) ────────────────────
    const allChars = text.split('');
    const nonSpaces = allChars.filter(c => c !== ' ').length;

    // ── Gradient style per char ───────────────────────────────────────────────
    const charGradientStyle = (nonSpaceIdx) => {
        if (!gradientFrom) return {};
        const pct = nonSpaces > 1 ? (nonSpaceIdx / (nonSpaces - 1)) * 100 : 0;
        const via = gradientVia || gradientFrom;
        const to_ = gradientTo || gradientFrom;
        return {
            backgroundImage: `linear-gradient(to right, ${gradientFrom}, ${via}, ${to_})`,
            backgroundSize: `${nonSpaces * 100}% 100%`,
            backgroundPositionX: `${pct}%`,
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            color: 'transparent',
        };
    };

    // ── GSAP animation ────────────────────────────────────────────────────────
    useEffect(() => {
        const el = containerRef.current;
        if (!el) return;

        const chars = el.querySelectorAll('.split-char');
        if (!chars.length) return;

        let tween;

        const tweenConfig = {
            ...to,
            duration,
            ease,
            stagger: delay / 1000,
            willChange: 'transform, opacity',
            force3D: true,
            clearProps: 'willChange',
            onComplete: () => onLetterAnimationComplete?.(),
        };

        if (!useScrollTrigger) {
            tween = gsap.fromTo(chars, { ...from }, { ...tweenConfig, delay: loadDelay });
        } else {
            // Lazy import ScrollTrigger only when needed
            import('gsap/ScrollTrigger').then(({ ScrollTrigger }) => {
                gsap.registerPlugin(ScrollTrigger);
                tween = gsap.fromTo(chars, { ...from }, {
                    ...tweenConfig,
                    scrollTrigger: {
                        trigger: el,
                        start: 'top 90%',
                        once: true,
                    },
                });
            });
        }

        return () => {
            tween?.kill();
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [text, delay, duration, ease, useScrollTrigger, loadDelay, JSON.stringify(from), JSON.stringify(to), onLetterAnimationComplete]);

    // ── Render ────────────────────────────────────────────────────────────────
    const Tag = tag || 'p';
    let nonSpaceCounter = 0;

    return (
        <Tag
            ref={containerRef}
            className={`split-parent ${className}`}
            style={{ textAlign, display: 'inline' }}
        >
            {allChars.map((char, i) => {
                const isSpace = char === ' ';
                const gradStyle = isSpace ? {} : charGradientStyle(nonSpaceCounter);
                if (!isSpace) nonSpaceCounter++;

                return (
                    <span
                        key={i}
                        className="split-char"
                        style={{
                            display: 'inline-block',
                            whiteSpace: 'pre',
                            willChange: 'transform, opacity',
                            ...gradStyle,
                        }}
                    >
                        {char}
                    </span>
                );
            })}
        </Tag>
    );
};

export default SplitText;
