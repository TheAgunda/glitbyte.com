"use client";
import { APP } from "@/lib/constants";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
const FAQs: React.FC<{}> = () => {
    const [active, setActive] = useState(-1);
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-0 my-30">
            <div className="flex flex-col gap-6">
                <h2 className="h2 max-w-sm">Frequently Asked Questions</h2>
                <p className="text-secondary text-lg max-w-[400px]">
                    We’ve heard it all. Here’s everything you need to know before working with us.
                </p>
            </div>
            <div className="flex flex-col items-center">
                {
                    Array(5).fill(0).map((_, index) => {
                        return (
                            <motion.div
                                key={index}
                                className="accordion dropdown"
                                animate={{
                                    height: index === active ? "auto" : 70,
                                }}
                                transition={{
                                    duration: 0.5
                                }}
                                onClick={() => {
                                    if (index === active) {
                                        setActive(-1)
                                    } else {
                                        setActive(index)
                                    }
                                }}
                            >
                                <div className={`accordion-toggle dropdown-toggle ${index === active ? 'open' : ''}`}>
                                    <motion.span
                                        animate={{
                                            rotate: index === active ? 180 : 0,
                                            backgroundColor: index === active ? 'var(--color-primary)' : 'rgba(0, 0, 0, 0)',
                                            borderColor: index === active ? 'var(--color-primary)' : '#ffffff80',
                                        }}
                                        transition={{
                                            duration: 0.2
                                        }}
                                        className="faq-icon-div"
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                                            <path d="M11.817 4.08008C12.0614 3.91903 12.3932 3.94588 12.608 4.16113C12.8533 4.40706 12.8529 4.80539 12.607 5.05078L8.06309 9.58496C7.77007 9.87797 7.38491 10.0243 7.00059 10.0244C6.61587 10.0244 6.22958 9.87836 5.93613 9.58496L1.39317 5.05078C1.14724 4.80536 1.1468 4.40707 1.39219 4.16113L1.49082 4.08008C1.73483 3.91871 2.06667 3.94547 2.28184 4.16016L6.82578 8.69434L6.86485 8.72656C6.9603 8.78922 7.08984 8.77853 7.17344 8.69531H7.17442L11.7184 4.16016L11.817 4.08008Z" fill="white" stroke="white" stroke-width="0.383226" />
                                        </svg>
                                    </motion.span>
                                    <p className="large-paragraph faq-heading">
                                        What types of clients do you work with?
                                    </p>
                                </div>
                                <div className={`accordion-list dropdown-list ${index === active ? 'open' : ''}`}>
                                    <p className="large-paragraph faq-ans">
                                        We partner with early-stage startups, scaling SaaS teams, and enterprise AI companies.
                                    </p>
                                </div>
                            </motion.div>
                        )
                    })
                }
            </div>
        </div >
    )
}
export default FAQs;