"use client";

import { useEffect, useRef } from "react";
import { usePageTransition } from "@/app/TransitionContext";
import { COVER_DURATION, UNCOVER_DURATION } from "@/app/transitionConfig";
import "./PageTransitionOverlay.css";

const MAX_CURVE = 190;
const LETTER_STAGGER = 15; // ms — har letter ke beech delay

function easeInOutCubic(t) {
    return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
}

export default function PageTransitionOverlay() {
    const { phase, textVisible, label } = usePageTransition();
    const pathRef = useRef(null);
    const rafRef = useRef(null);
    const dims = useRef({ w: 0, h: 0 });

    useEffect(() => {
        const updateDims = () => {
            dims.current = { w: window.innerWidth, h: window.innerHeight };
        };
        updateDims();
        window.addEventListener("resize", updateDims);
        return () => window.removeEventListener("resize", updateDims);
    }, []);

    const drawCoverPath = (yTop, curve) => {
        const { w, h } = dims.current;
        const path = pathRef.current;
        if (!path) return;
        const bottomFixed = h;
        const d = `M 0,${bottomFixed} L ${w},${bottomFixed} L ${w},${yTop} C ${w * 0.75},${yTop - curve} ${w * 0.25},${yTop - curve} 0,${yTop} Z`;
        path.setAttribute("d", d);
    };

    const drawUncoverPath = (yBottom, curve) => {
        const { w, h } = dims.current;
        const path = pathRef.current;
        if (!path) return;
        const topFixed = -h;
        const d = `M 0,${topFixed} L ${w},${topFixed} L ${w},${yBottom} C ${w * 0.75},${yBottom + curve} ${w * 0.25},${yBottom + curve} 0,${yBottom} Z`;
        path.setAttribute("d", d);
    };

    useEffect(() => {
        if (rafRef.current) cancelAnimationFrame(rafRef.current);
        const h = dims.current.h || window.innerHeight;

        if (phase === "hidden") {
            drawCoverPath(h, 0);
            return;
        }

        const isCover = phase === "cover";
        const from = h;
        const to = 0;
        const duration = isCover ? COVER_DURATION : UNCOVER_DURATION;

        const start = performance.now();

        const tick = (now) => {
            const elapsed = now - start;
            const t = Math.min(elapsed / duration, 1);
            const eased = easeInOutCubic(t);
            const y = from + (to - from) * eased;
            const curve = MAX_CURVE * Math.sin(Math.PI * t);

            if (isCover) {
                drawCoverPath(y, curve);
            } else {
                drawUncoverPath(y, curve);
            }

            if (t < 1) {
                rafRef.current = requestAnimationFrame(tick);
            }
        };

        rafRef.current = requestAnimationFrame(tick);
        return () => cancelAnimationFrame(rafRef.current);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [phase]);

    // Label ko letters mein todo (spaces preserve karte hue)
    const letters = label.split("");

    return (
        <div
            className="PageTransition-overlay"
            style={{ pointerEvents: phase === "cover" ? "auto" : "none" }}
        >
            <svg className="PageTransition-svg" preserveAspectRatio="none">
                <path ref={pathRef} />
            </svg>
            <span className="PageTransition-text">
                {letters.map((char, i) => (
                    <span
                        key={i}
                        className={`PageTransition-letter ${textVisible ? "is-visible" : ""}`}
                        style={{
                            transitionDelay: textVisible
                                ? `${i * LETTER_STAGGER}ms`
                                : `${(letters.length - i) * (LETTER_STAGGER * 0.6)}ms`,
                        }}
                    >
                        {char === " " ? "\u00A0" : char}
                    </span>
                ))}
            </span>
        </div>
    );
}