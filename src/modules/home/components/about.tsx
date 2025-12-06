"use client";
import Button from "@/modules/common/components/button";
import Abstract from "./abstract";
import { APP } from '@/lib/constants';
import { motion } from "framer-motion"
import { fadeIn } from "@/utils/helper";
import APP_SETTINGS from "@/animation-setting";
const About: React.FC<{}> = () => {
    return (
        <div className="mb-10">
            <div className="grid grid-cols-2">

                <motion.div
                    variants={fadeIn('right', 0.3)} initial="hidden" whileInView={'show'} viewport={{ once: APP_SETTINGS.animationOnce, amount: 0.3 }}
                    className="flex flex-col justify-center items-start max-w-[600px]"
                >
                    <h2 className="h4 text-secondary pb-3 relative">
                        Welcome to <span className="text-primary text-4xl">{APP.NAME}</span>
                        <Abstract />
                    </h2>
                    <p className=" font-semibold  mb-5 h2">Where Innovation Meets Craftsmanship and Drives Performance</p>
                    <p className="text-secondary">We are a digital innovation studio that blends modern design with bulletproof development to build custom software solutions that don’t just work — they wow. With deep domain expertise and a relentless passion for technology, we deliver digital products that are intuitive, scalable, and future-ready.</p>
                    <Button title="Learn about us" className="mt-7.5"></Button>
                </motion.div>
                <motion.div
                    variants={fadeIn('left', 0.3)} initial="hidden" whileInView={'show'} viewport={{ once: APP_SETTINGS.animationOnce, amount: 0.3 }}
                    className="flex justify-end">
                    <div className="about-image-div">
                        <img src="https://cdn.prod.website-files.com/6880e261cef3bfa6896ed9d3/68821a3fbceb02ba524dd178_90f32a709b618c5590a4294c01832519_about.webp" alt="About Image" className="about-image" />
                    </div>
                </motion.div>
            </div>
        </div >
    )
}

export default About;