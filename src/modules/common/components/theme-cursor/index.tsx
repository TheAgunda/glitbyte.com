"use client";
import React from "react";

import { motion, AnimatePresence, useSpring, useMotionValue } from "framer-motion";
const ThemeCursor = (props: any) => {
    const cursorX = useMotionValue(-100);
    const cursorY = useMotionValue(-100);

    const springConfig = {
        damping: 35,
        stiffness: 700,
        mass: 1
    };
    const cursorXSpring = useSpring(cursorX, springConfig);
    const cursorYSpring = useSpring(cursorY, springConfig);

    React.useEffect(() => {
        const moveCursor = (e: any) => {
            cursorX.set(e.clientX);
            cursorY.set(e.clientY);
        };

        window.addEventListener("mousemove", moveCursor);

        return () => {
            window.removeEventListener("mousemove", moveCursor);
        };

    }, []);

    return (
        <motion.div

            style={{
                translateX: cursorXSpring,
                translateY: cursorYSpring,
            }}
            className="fixed z-[99999] w-0 h-0 bg-primary">
            {!props.hideCursor == true ?
                <motion.div layoutId="cursor" className="absolute w-4 h-4 -top-1.5 -left-1.5 bg-primary pointer-events-none  ">
                </motion.div>
                :
                null
            }
        </motion.div>
    )
}

export default ThemeCursor;