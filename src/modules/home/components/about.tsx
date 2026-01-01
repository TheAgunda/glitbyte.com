"use client";
import Button from "@/modules/common/components/button";
import Abstract from "./abstract";
import { APP } from '@/lib/constants';
import { motion } from "framer-motion"
import { fadeIn } from "@/utils/helper";
import APP_SETTINGS from "@/animation-setting";
import { useEffect } from "react";
import { animate } from "animejs";
const About: React.FC<{}> = () => {
    useEffect(() => {

        animate(
            ".mars",
            {
                rotate: '360deg',
                duration: 800000,
                easing: 'linear',
                loop: true
            }
        );
    }, [])
    return (
        <div className="mb-10">
            <div className="flex">
                <motion.div
                    variants={fadeIn('right', 0.3)} initial="hidden" whileInView={'show'} viewport={{ once: APP_SETTINGS.animationOnce, amount: 0.3 }}
                    className="flex flex-col justify-center items-start max-w-[720px]"
                >
                    <h2 className="h4 text-secondary pb-3 relative">
                        Why Choose <span className="text-primary text-4xl">{APP.NAME}</span>
                        <Abstract />
                    </h2>
                    <p className="font-semibold mb-5 h2">AI-First. Quality-Driven. Business-Focused.</p>
                    <p className="text-secondary">
                        We combine artificial intelligence, industry best practices, and deep engineering expertise to create digital solutions that are secure, scalable, and built to last.
                    </p>
                    <ul className="mt-5">
                        <li>
                            AI-enhanced development workflows
                        </li>
                        <li>
                            Clean, maintainable, and scalable code
                        </li>
                        <li>
                            Agile & DevOps best practices
                        </li>
                        <li>
                            Security and performance by design
                        </li>
                        <li>
                            Transparent communication & delivery
                        </li>
                    </ul>
                    <Button title="Learn about us" className="mt-7.5"></Button>
                </motion.div>
                <motion.div
                    variants={fadeIn('left', 0.3)}
                    initial="hidden"
                    whileInView={'show'}
                    viewport={{ once: APP_SETTINGS.animationOnce, amount: 0.3 }}
                    className="flex justify-end">
                    <div className="about-image-div relative">
                        <img src="/images/mars-2.png" alt="About Image" className="about-image mars w-140" />
                    </div>
                </motion.div>
            </div>
        </div >
    )
}

export default About;