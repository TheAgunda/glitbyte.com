"use client";
import Button from "@/modules/common/components/button";
import Link from "next/link";
import { motion } from "framer-motion"
import { fadeIn } from "@/utils/helper";
import APP_SETTINGS from "@/animation-setting";
const OurWork = () => {
    const works = [
        {
            title: "Nanobot – AI Chat Experience",
            description: "Streamlined UX for smarter candidate filtering and team collaboration.",
            keywords: [
                "Product Design",
                "AI SaaS",
                "UX Strategy"
            ],
            image: "https://cdn.prod.website-files.com/688877cbc5e1fabc679dc7c5/6888a70c23271c7ea5b19417_work-small6-p-1080.webp"
        },
        {
            title: "Echo – AI Analytics Platform Design",
            description: "Data-rich dashboards with a clean interface for better decision-making.",
            keywords: [
                "Interaction",
                "AI SaaS",
                "Data Visualization"
            ],
            image: "https://cdn.prod.website-files.com/688877cbc5e1fabc679dc7c5/6888a61fb8fa8536eedd474d_work-small5.webp"
        },
        {
            title: "Echo – AI Analytics Platform Design",
            description: "Data-rich dashboards with a clean interface for better decision-making.",
            keywords: [
                "AI Design",
                "Product Strategy",
                "UI/UX Design"
            ],
            image: "https://cdn.prod.website-files.com/688877cbc5e1fabc679dc7c5/68889f2b98ec5d6ab457a788_work-small1.webp"
        },
        {
            title: "Vireo – Mental Health Care App",
            description: "Guided SaaS onboarding with real-time tips to drive faster user activation.",
            keywords: [
                "Healthcare",
                "Mobile App Design",
                "Brand Identity"
            ],
            image: "https://cdn.prod.website-files.com/688877cbc5e1fabc679dc7c5/6888a9f55c4b5a41eed8932f_work-small9.webp"
        },
        {
            title: "Clarity – Healthcare Onboarding Dashboard",
            description: "Guided SaaS onboarding with real-time tips to drive faster user activation.",
            keywords: [
                "UX Flow",
                "SaaS Design",
                "Frontend Development"
            ],
            image: "https://cdn.prod.website-files.com/688877cbc5e1fabc679dc7c5/6888a4088cfd5f1f3e072a78_work-small2.webp"
        },
        {
            title: "OrbitPay – Banking and Fintech App",
            description: "Modern banking reimagined with intuitive UI and secure user flows.",
            keywords: [
                "Fintech",
                "UI/UX Design",
                "App Development"
            ],
            image: "https://cdn.prod.website-files.com/688877cbc5e1fabc679dc7c5/6888a8e401f8eb3392bdb79b_work-small7.webp"
        }
    ]
    return (
        <div className="mb-10">
            <div
                className="flex items-start justify-between gap-6 mb-10"

            >
                <motion.h2
                    variants={fadeIn('up', 0.5)}
                    initial="hidden"
                    whileInView={'show'}
                    viewport={{ once: APP_SETTINGS.animationOnce, amount: 0.7 }}
                    className="h2 max-w-md"
                >
                    Featured Design + AI Project portfolio
                </motion.h2>
                <motion.div
                    variants={fadeIn('up', 0.5)}
                    initial="hidden"
                    whileInView={'show'}
                    viewport={{ once: APP_SETTINGS.animationOnce, amount: 0.7 }}
                    className="flex flex-col items-start justify-start gap-6"
                >
                    <p className="text-secondary text-lg max-w-[400px]">
                        We team up with startups, SaaS companies, and digital brands to create design-driven solutions that look great — and perform even better.
                    </p>
                    <div>
                        <Button title="See more projects"></Button>
                    </div>
                </motion.div>
            </div>
            <div className="our-work-tab-wrapper grid grid-cols-3">
                <div className="our-work-sticky-tab-menu flex flex-col gap-3" >
                    <div className="work-tab-link w-inline-block w-tab-link w--current">
                        E-Commerce
                    </div>
                    <div className="work-tab-link w-inline-block w-tab-link w--current">
                        Artificial Intelligence
                    </div>
                    <div className="work-tab-link w-inline-block w-tab-link w--current">
                        ECOMMERCE
                    </div>
                </div>
                <div className="col-span-2 grid grid-cols-2 gap-10 mt-10"  >
                    {
                        works.map((work, index) => {
                            return (
                                <div
                                    key={index}

                                    className="our-work-tab-card px-2.5">
                                    <div className="work-brand-icon">
                                        <svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <rect width="45" height="45" fill="url(#paint0_linear_2029_254)" />
                                            <path d="M20.0606 10.9078C21.2573 9.23608 23.7427 9.23608 24.9394 10.9078L28.4687 15.8381C28.6602 16.1056 28.8944 16.3398 29.1619 16.5313L34.0922 20.0606C35.7639 21.2573 35.7639 23.7427 34.0922 24.9394L29.1619 28.4687C28.8944 28.6602 28.6602 28.8944 28.4687 29.1619L24.9394 34.0922C23.7427 35.7639 21.2573 35.7639 20.0606 34.0922L16.5313 29.1619C16.3398 28.8944 16.1056 28.6602 15.8381 28.4687L10.9078 24.9394C9.23608 23.7427 9.23608 21.2573 10.9078 20.0606L15.8381 16.5313C16.1056 16.3398 16.3398 16.1056 16.5313 15.8381L20.0606 10.9078Z" fill="white" />
                                            <defs>
                                                <linearGradient id="paint0_linear_2029_254" x1="34.5" y1="41" x2="0" y2="0" gradientUnits="userSpaceOnUse">
                                                    <stop stop-color="#00C4A3" />
                                                    <stop offset="0.265" stop-color="#10633A" />
                                                    <stop offset="1" stop-color="#067914" />
                                                </linearGradient>
                                            </defs>
                                        </svg>
                                    </div>
                                    <div className="our-work-heading-div">
                                        <h3 className="h3-heading">
                                            {work.title}
                                        </h3>
                                        <p className="paragraph work-text">
                                            {work.description}
                                        </p>
                                    </div>
                                    <div className="work-label-div">
                                        {
                                            work.keywords.map((keyword) => (
                                                <div className="small-paragraph work-label-text">{keyword}</div>
                                            ))
                                        }
                                    </div>
                                    <Link href={'#'} className="work-small-image-div w-inline-block">
                                        <img src={work.image} className="work-small-image" />
                                    </Link>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default OurWork;