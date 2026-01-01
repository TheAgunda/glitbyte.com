"use client";
import { APP } from "@/lib/constants";
import { useState } from "react";
import Heading from "@/modules/common/components/ui/heading";
import Link from "next/link";
import { motion } from "framer-motion"
import { fadeIn } from "@/utils/helper";
import APP_SETTINGS from "@/animation-setting";
import Image from "next/image";
const Hero: React.FC<{}> = () => {
    const [active, setActive] = useState(-1);
    return (
        <div className="flex justify-center">
            {/* mx-auto py-10  */}
            <div className="pt-80 pb-30 flex flex-col justify-center items-center gap-10 z-20 relative max-w-[1080px]" >
                <motion.div
                    variants={fadeIn('up', 0.3)} initial="hidden" whileInView={'show'} viewport={{ once: APP_SETTINGS.animationOnce, amount: 0.7 }}
                >
                    <Heading className="text-white text-center" >
                        Build Intelligent Digital Products with <span className="text-primary text-5xl md:text-6xl">AI-Driven Excellence</span>
                    </Heading>
                </motion.div>
                <motion.p variants={fadeIn('up', 0.5)} initial="hidden" whileInView={'show'} viewport={{ once: APP_SETTINGS.animationOnce, amount: 0.7 }} className="paragraph text-secondary max-w-4xl text-center">
                   We are an AI-powered IT solutions company delivering high-performance digital products through human-centered design, clean architecture, and future-ready technology. From concept to continuous support, we help businesses innovate faster, scale smarter, and operate better.
                   {/* Transform your ideas into reliable, scalable software. */}
                </motion.p>
                <motion.div
                    variants={fadeIn('up', 0.6)} initial="hidden" whileInView={'show'} viewport={{ once: APP_SETTINGS.animationOnce, amount: 0.7 }}
                >
                    <Link href={'/download-app'} className="text-base font-normal text-white leading-5 px-1.5 py-1.5 bg-[#242424] rounded-[80px] flex items-center gap-2.5 group relative after:content[''] after:w-60 after:h-0 after:rounded-none after:bg-primary  after:absolute after:-bottom-[100px] after:-left-0.5 after:hover:w-60 after:hover:h-60 after:hover:rounded-full z-10 after:transition-all after:duration-900 overflow-hidden">
                        <span className="text-base font-normal z-20 ps-2">
                            Get a Quote
                        </span>
                        <div className="z-20 ">
                            <span className="w-11 h-11 rounded-full bg-primary text-white flex justify-center items-center relative">
                                <svg className="absolute w-4.5 h-4.5 rotate-[30deg] group-hover:rotate-0 transition-all duration-[1.2s]" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M18.4507 32L32 18.4483L18.4507 4.89651" stroke="currentColor" strokeWidth="2.43243" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M4.90137 18.4482L32 18.4482" stroke="currentColor" strokeWidth="2.43243" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </span>
                        </div>
                    </Link>
                </motion.div>
            </div>
            {/* <div className="flex items-end">
                <motion.div 
                  variants={fadeIn('up', 0.6)} initial="hidden" whileInView={'show'} viewport={{ once: APP_SETTINGS.animationOnce, amount: 0.7 }}
                className="w-full relative">
                    <Image src="/images/spaceman-rotate.png" width={500} height={500} alt="" className="w-150 h-full" />
                </motion.div>
            </div> */}
        </div >

    )
}
export default Hero;