
"use client";
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Pagination } from 'swiper/modules';
import { Swiper as SwiperType } from 'swiper';
import React, { useRef } from 'react';
import { motion } from 'framer-motion';
export const breakpoints = {
    // When window width is >= 320px
    320: {
        slidesPerView: 1,
        spaceBetween: 10,
    },
    // When window width is >= 480px
    480: {
        slidesPerView: 2,
        spaceBetween: 15,
    },
    // When window width is >= 768px
    768: {
        slidesPerView: 3,
        spaceBetween: 20,
    },
    // When window width is >= 1024px
    1024: {
        slidesPerView: 4,
        spaceBetween: 30,
    },
    // // When window width is >= 1440px
    // 1440: {
    //     slidesPerView: 5,
    //     spaceBetween: 40,
    // },
}

const PrevSliderButton: React.FC<{
    onClick: React.MouseEventHandler<HTMLButtonElement> | undefined
}> = ({ onClick }) => {
    return (
        <button type='button' className='slider-arrow' onClick={onClick}>
            <svg className='rotate-180' width="29" height="29" viewBox="0 0 29 29" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M19.1653 15.5102L6.99313 15.5102L6.99313 13.5105L19.1645 13.5098L13.8012 8.14642L15.2154 6.73221L22.9935 14.5104L15.2154 22.2886L13.8011 20.8743L19.1653 15.5102Z" fill="" />
            </svg>
        </button>
    )
}

const NextSliderButton: React.FC<{
    onClick: React.MouseEventHandler<HTMLButtonElement> | undefined
}> = ({ onClick }) => {
    return (
        <button className='slider-arrow' onClick={onClick}>
            <svg width="29" height="29" viewBox="0 0 29 29" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M19.1653 15.5102L6.99313 15.5102L6.99313 13.5105L19.1645 13.5098L13.8012 8.14642L15.2154 6.73221L22.9935 14.5104L15.2154 22.2886L13.8011 20.8743L19.1653 15.5102Z" fill="" />
            </svg>
        </button>
    )
}

const Services: React.FC<{}> = () => {
    const swiperRef = useRef<SwiperType | null>(null);
    const services = [
        {
            icon: <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24" fill="#fff"><g fill="none" stroke="#fff" stroke-linecap="round" stroke-width="1.5"><path stroke-linejoin="round" d="m12 19.01l.01-.011"></path><path d="M18 18v3.4a.6.6 0 0 1-.6.6H6.6a.6.6 0 0 1-.6-.6V18M18 6V2.6a.6.6 0 0 0-.6-.6H6.6a.6.6 0 0 0-.6.6V6"></path><path stroke-linejoin="round" d="M15.5 8.5L19 12l-3.5 3.5m-7-7L5 12l3.5 3.5"></path></g></svg>,
            title: "Mobile App Development",
            backgroundImage: "https://cdn.prod.website-files.com/6880e261cef3bfa6896ed9d3/6889ad167a671786732c026c_service-small2.webp",
            description: "Custom-built iOS & Android applications that combine stunning UI/UX with robust backend architecture.",
            features: [
                "Native & Cross-platform",
                "Scalable and secure",
                "Designed for engagement and retention",
            ],
        },
        {
            icon: <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 14 14" fill="#fff"><g fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round"><path d="M7 13.5a6.5 6.5 0 1 0 0-13a6.5 6.5 0 0 0 0 13M.5 7h13"></path><path d="M9.5 7A11.22 11.22 0 0 1 7 13.5A11.22 11.22 0 0 1 4.5 7A11.22 11.22 0 0 1 7 .5A11.22 11.22 0 0 1 9.5 7"></path></g></svg>,
            title: "Web Development",
            backgroundImage: "https://cdn.prod.website-files.com/6880e261cef3bfa6896ed9d3/6889ad151f3f2224e327ddb4_service-small3.webp",
            description: "Responsive, high-performance websites and platforms built with the latest tech stacks.",
            features: [
                "React, Vue, Angular",
                "E-commerce, dashboards, portals",
                "SEO-friendly, optimized, and lightning-fast",
            ],
        },
        {
            icon: <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24" fill="#fff"><g fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><path d="M10 10a2 2 0 1 0 4 0a2 2 0 0 0-4 0"></path><path d="M18.245 15a8 8 0 1 0-12.49 0M3 18.5c0-1.404 0-2.107.303-2.611c.132-.218.3-.406.497-.552C4.254 15 4.886 15 6.15 15h11.7c1.264 0 1.896 0 2.35.337c.197.146.365.334.497.552c.303.504.303 1.207.303 2.611s0 2.107-.303 2.611c-.132.218-.3.406-.497.552c-.454.337-1.086.337-2.35.337H6.15c-1.264 0-1.896 0-2.35-.337a1.9 1.9 0 0 1-.497-.552C3 20.607 3 19.904 3 18.5m8-.5h2m2.89-11.39l2.012-2.01"></path></g></svg>,
            title: "Custom Software Solutions",
            backgroundImage: "https://cdn.prod.website-files.com/6880e261cef3bfa6896ed9d3/6889ad140c988deab69a716a_service-small5.webp",
            description: "We design and develop software tailored to your exact business needs.",
            features: [
                "Business automation tools",
                "SaaS platforms",
                "API integrations",
                "Cloud-native apps",
            ],
        },
        {
            icon: <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24"><path fill="#fff" d="M18.175 2.78c-.365-.03-.81-.03-1.345-.03H7.17c-.535 0-.98 0-1.345.03c-.38.03-.736.098-1.073.27A2.75 2.75 0 0 0 3.55 4.252c-.172.337-.24.693-.27 1.073c-.03.365-.03.81-.03 1.345V13l.004.077q.005.329.026.598c.03.38.098.736.27 1.073a2.75 2.75 0 0 0 1.202 1.202c.337.172.693.24 1.073.27c.365.03.81.03 1.345.03h3.248a1.75 1.75 0 0 0 3.164 0h3.249c.534 0 .98 0 1.344-.03c.38-.03.736-.098 1.073-.27a2.75 2.75 0 0 0 1.202-1.201c.172-.338.24-.694.27-1.074q.021-.27.026-.598L20.75 13V6.57c0-.49-.002-.903-.03-1.245c-.03-.38-.098-.736-.27-1.073a2.75 2.75 0 0 0-1.2-1.202c-.338-.172-.694-.24-1.074-.27M13 14.75H7.2c-.572 0-.957 0-1.253-.025c-.287-.023-.424-.065-.514-.111a1.25 1.25 0 0 1-.547-.546a1 1 0 0 1-.09-.318h14.407a1 1 0 0 1-.09.318a1.25 1.25 0 0 1-.546.546c-.09.046-.227.088-.515.111c-.295.024-.68.025-1.252.025zm6.25-2.5H4.75V6.595c0-.515.002-.87.025-1.148c.023-.287.065-.424.111-.514a1.25 1.25 0 0 1 .547-.547c.09-.046.227-.088.514-.111c.296-.024.68-.025 1.253-.025h9.6c.572 0 .957 0 1.252.025c.288.023.425.065.515.111c.236.12.427.311.547.547c.046.09.088.227.111.514c.024.296.025.68.025 1.253z"></path><path fill="#fff" d="M10 16.75a.75.75 0 0 1 .75.75v.284c0 .818-.43 1.555-1.099 1.966h4.698a2.31 2.31 0 0 1-1.099-1.966V17.5a.75.75 0 0 1 1.5 0v.284c0 .37.252.693.611.783l.396.1a1.311 1.311 0 0 1-.319 2.583H8.562a1.312 1.312 0 0 1-.319-2.584l.396-.099a.81.81 0 0 0 .611-.783V17.5a.75.75 0 0 1 .75-.75"></path></svg>,
            title: "Desktop Application Development",
            backgroundImage: "https://cdn.prod.website-files.com/6880e261cef3bfa6896ed9d3/6889ad151f3f2224e327ddb4_service-small3.webp",
            description: "Powerful and intuitive desktop apps for Windows, macOS, and Linux.",
            features: [
                "Polished UI, built to perform",
                "Electron, .NET, WPF, Qt",
                "Perfect for internal systems and enterprise tools",
            ],
        },
        {
            icon: <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24"><path fill="none" stroke="#fff" stroke-width="2" d="M19 10V2H7v12h7V7H2v12h8m4 4l6-6m1-3a2 2 0 1 0 2 2"></path></svg>,
            title: "Software Maintenance & Support",
            backgroundImage: "https://cdn.prod.website-files.com/6880e261cef3bfa6896ed9d3/6889ad14b26d8eef50f26b60_service-small4.webp",
            description: "Keeping your software secure, stable, and up-to-date long after deployment.",
            features: [
                "Performance tuning",
                "Security patches",
                "Feature enhancements",
                "SLA-backed support plans",
            ],
        },
        {
            icon: <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24"><path fill="none" stroke="#fff" stroke-width="1.5" d="M9.5.5V2A1.5 1.5 0 0 0 11 3.5h2A1.5 1.5 0 0 0 14.5 2V.5m-4.5 20h4M4.5.75S5 7.492 5 12s-.5 11.25-.5 11.25v.25h15v-.25S19 16.508 19 12S19.5.75 19.5.75V.5h-15v.25Z"></path></svg>,
            title: "UI/UX Design",
            description: "Crafting intuitive, visually compelling digital experiences that drive user satisfaction and business results.",
            backgroundImage: "https://cdn.prod.website-files.com/6880e261cef3bfa6896ed9d3/6889ad143ae9dc8c2143ead7_service-small1.webp",
            features: [
                "Prototypes & wireframes",
                "Mobile-first design",
                "Research-driven decisions",
            ],
        },
    ];
    return (
        <div className="mb-10">
            <div className="flex flex-col justify-between items-center gap-8">
                <div className='flex justify-between items-end w-full'>
                    <div className="flex flex-col justify-center items-start gap-2">
                        <h2 className="h2">
                            Our Core Services
                        </h2>
                        <p className="text-secondary text-base max-w-3xl">We deliver a full range of digital solutions, from mobile and web development to custom software and desktop applications, built with modern technologies for performance, scalability, and security.</p>
                    </div>
                    <div className='hidden sm:flex gap-2'>
                        <PrevSliderButton onClick={() => swiperRef?.current?.slidePrev()} />
                        <NextSliderButton onClick={() => swiperRef?.current?.slideNext()} />
                    </div>
                </div>
                <Swiper
                    onSwiper={(swiper) => (swiperRef.current = swiper)}
                    slidesPerView={4}
                    spaceBetween={30}
                    freeMode={true}
                    pagination={{
                        el: ".service-pagination",
                        type: "bullets",
                        clickable: true,
                        dynamicBullets: true,
                        dynamicMainBullets: 3,
                        bulletElement: "button",
                        bulletClass: "swiper-bullet",
                        bulletActiveClass: "swiper-bullet-active",
                        modifierClass: "service-pagination-",
                        hideOnClick: false,
                        renderBullet: (index, className) => {
                            return `<button class="${className}"><span class="sr-only">${index + 1}</span></button>`;
                        },
                    }}
                    modules={[FreeMode, Pagination]}
                    className=""
                    loop={true}
                    speed={700}
                    style={{
                        transitionTimingFunction: "ease-in-out", // smooth easing
                    }}
                    breakpoints={breakpoints}
                >
                    {
                        services && services.map((data, index) => {
                            return (
                                <SwiperSlide>
                                    <motion.div
                                        className="relative flex  h-110 rounded-[14px] border border-[#e3e3fe14] bg-white/10 hover:translate-y-1 transition-all duration-700 opacity-90 hover:opacity-100 overflow-hidden group">
                                        <img src={data.backgroundImage} className="align-middle object-cover h-full" />
                                        <div className="absolute h-full p-6 flex flex-col justify-between">
                                            <div className="flex flex-col gap-2.5">
                                                <h4 className="text-2xl font-semibold mb-2 text">{data.title}</h4>
                                                <p className="text-base text-white/60 tracking-wider font-normal font-nunito text-left">
                                                    {
                                                        data.description
                                                    }
                                                </p>
                                            </div>
                                            <a href="#" className="bg-[#ffffff3d] inline-flex rounded-2xl h-11 w-11 justify-center items-center">
                                                <svg className="fill-current group-hover:rotate-45 transition-transform duration-700" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                    <path d="M16.0039 9.414L7.39691 18.021L5.98291 16.607L14.5889 8H7.00391V6H18.0039V17H16.0039V9.414Z" />
                                                </svg>
                                            </a>
                                        </div>
                                    </motion.div>
                                </SwiperSlide>
                            )
                        })
                    }
                    <div className="service-pagination" />
                    <div className='md:hidden flex gap-2 justify-center items-center mt-2'>
                        <PrevSliderButton onClick={() => swiperRef?.current?.slidePrev()} />
                        <NextSliderButton onClick={() => swiperRef?.current?.slideNext()} />
                    </div>
                </Swiper>
            </div>
            <div className="hidden">
                {/* Second Design  */}
                <div className="grid sm:grid-cols-4 gap-5 grid-cols-1">
                    <div className="service-card">
                        <div className="flex justify-center items-center py-3">
                            <div className="w-15 h-15 flex justify-center items-center rounded-2xl bg-[#ffa99b] relative z-50">
                                <div className="w-15 h-15 flex justify-center items-center absolute  border -top-3 left-3 rounded-2xl -z-20">
                                </div>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" aria-labelledby="title" aria-describedby="desc" role="img" width="32" height="32"><title>Chat</title>
                                    <desc>A line styled icon from Orion Icon Library.</desc><path data-name="layer2" d="M42 8H22a20 20 0 0 0 0 40h2v10l12-10h6a20 20 0 0 0 0-40z" fill="none" stroke="#000000" stroke-miterlimit="10" stroke-width="4" stroke-linejoin="miter" stroke-linecap="round"></path><circle data-name="layer1" cx="20" cy="28" r="2" fill="none" stroke="#000000" stroke-miterlimit="10" stroke-width="4" stroke-linejoin="miter" stroke-linecap="round"></circle><circle data-name="layer1" cx="32" cy="28" r="2" fill="none" stroke="#000000" stroke-miterlimit="10" stroke-width="4" stroke-linejoin="miter" stroke-linecap="round"></circle><circle data-name="layer1" cx="44" cy="28" r="2" fill="none" stroke="#000000" stroke-miterlimit="10" stroke-width="4" stroke-linejoin="miter" stroke-linecap="round"></circle></svg>
                            </div>
                        </div>

                        {/* <div className="flex justify-center items-center pb-10">
                        <div className="w-40 h-30 flex justify-center items-center">
                            <svg className="" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                                <path fill="#242424" d="M55.7,-65.6C71,-53.5,81.3,-34.8,85.1,-14.8C88.9,5.2,86,26.6,76.1,44C66.2,61.4,49.1,74.8,29.9,81.7C10.6,88.6,-11,89,-29.1,81.7C-47.3,74.3,-62,59.3,-72,41.7C-81.9,24.1,-87.1,3.9,-84.9,-16.1C-82.8,-36.2,-73.3,-56.2,-58,-68.2C-42.6,-80.2,-21.3,-84.2,-0.6,-83.6C20.2,-82.9,40.4,-77.6,55.7,-65.6Z" transform="translate(100 100)" />
                            </svg>
                        </div>
                    </div> */}
                        <h4 className="service-heading">Mobile App Development</h4>
                        <p className="service-content ">
                            Custom-built iOS & Android applications that combine stunning UI/UX with robust backend architecture.
                        </p>
                        <ul className="service-feature-list">
                            <li className="service-feature">Native & Cross-platform</li>
                            <li className="service-feature">Scalable and secure</li>
                            <li className="service-feature">Designed for engagement and retention</li>
                        </ul>
                    </div >
                    <div className="service-card">
                        <div className="flex justify-center items-center py-3">
                            <div className="w-15 h-15 flex justify-center items rounded-2xl bg-amber-100 relative">
                                <div className="w-15 h-15 flex justify-center items-center absolute  border -top-3 left-3 rounded-2xl">
                                    a
                                </div>

                            </div>
                        </div>
                        {/* <div className="flex justify-center items-center pb-10">
                        <div className="w-40 h-30">
                            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                                <path fill="#242424" d="M53.7,-64.5C68.6,-51.5,79,-33.6,82.6,-14.4C86.2,4.8,83,25.5,73.7,43.6C64.5,61.8,49.2,77.5,30.7,84.1C12.2,90.7,-9.5,88.3,-28.7,80.6C-47.8,72.8,-64.3,59.7,-73.8,42.8C-83.3,25.9,-85.8,5.2,-82.3,-14.4C-78.7,-34,-69,-52.3,-54.3,-65.4C-39.5,-78.4,-19.8,-86.2,-0.2,-86C19.4,-85.7,38.8,-77.5,53.7,-64.5Z" transform="translate(100 100)" />
                            </svg>
                        </div>
                    </div> */}
                        <h4 className="service-heading">Web Development</h4>
                        <p className="service-content ">Responsive, high-performance websites and platforms built with the latest tech stacks.</p>
                        <ul className="service-feature-list">
                            <li className="service-feature">React, Vue, Angular</li>
                            <li className="service-feature">E-commerce, dashboards, portals</li>
                            <li className="service-feature">SEO-friendly, optimized, and lightning-fast</li>
                        </ul>
                    </div>
                    <div className="service-card">
                        <div className="flex justify-center items-center py-3">
                            <div className="w-15 h-15 flex justify-center items rounded-2xl bg-amber-100 relative">
                                <div className="w-15 h-15 flex justify-center items-center absolute  border -top-3 left-3 rounded-2xl">
                                    a
                                </div>

                            </div>
                        </div>
                        {/* <div className="flex justify-center items-center pb-10">
                        <div className="w-40 h-30">
                            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                                <path fill="#242424" d="M49.8,-56C66.1,-45.6,82,-31.4,85.6,-14.6C89.2,2.3,80.6,21.9,69.7,39.8C58.8,57.6,45.8,73.7,28.9,80.1C12.1,86.5,-8.5,83.3,-26.3,75.4C-44,67.5,-58.9,55.1,-67.8,39.3C-76.8,23.5,-79.8,4.5,-76.2,-13C-72.6,-30.5,-62.4,-46.4,-48.6,-57.2C-34.8,-67.9,-17.4,-73.6,-0.3,-73.2C16.7,-72.8,33.5,-66.3,49.8,-56Z" transform="translate(100 100)" />
                            </svg>
                        </div>
                    </div> */}
                        <h4 className="service-heading">Custom Software Solutions</h4>
                        <p className="service-content ">We design and develop software tailored to your exact business needs.</p>
                        <ul className="service-feature-list">
                            <li className="service-feature">Business automation tools</li>
                            <li className="service-feature">SaaS platforms</li>
                            <li className="service-feature">API integrations</li>
                            <li className="service-feature">Cloud-native apps</li>
                        </ul>
                    </div>
                    <div className="service-card">
                        <div className="flex justify-center items-center py-3">
                            <div className="w-15 h-15 flex justify-center items rounded-2xl bg-amber-100 relative">
                                <div className="w-15 h-15 flex justify-center items-center absolute  border -top-3 left-3 rounded-2xl">
                                    a
                                </div>

                            </div>
                        </div>
                        {/* <div className="flex justify-center items-center pb-10">
                        <div className="w-40 h-30">
                            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                                <path fill="#242424" d="M52.8,-64.3C66.4,-51.5,74,-32.9,76.7,-14.1C79.3,4.7,76.9,23.9,67.7,38.6C58.6,53.3,42.8,63.6,25.1,71C7.4,78.3,-12.2,82.7,-30.5,78.4C-48.8,74,-65.9,61,-76.4,43.7C-86.9,26.4,-90.8,4.8,-86,-13.9C-81.1,-32.5,-67.5,-48.4,-51.7,-60.8C-35.9,-73.2,-18,-82.2,0.8,-83.2C19.6,-84.2,39.1,-77.1,52.8,-64.3Z" transform="translate(100 100)" />
                            </svg>
                        </div>
                    </div> */}
                        <h4 className="service-heading">Desktop Application Development</h4>
                        <p className="service-content ">Powerful and intuitive desktop apps for Windows, macOS, and Linux.</p>
                        <ul className="service-feature-list">
                            <li className="service-feature">Polished UI, built to perform</li>
                            <li className="service-feature">Electron, .NET, WPF, Qt
                            </li>

                            <li className="service-feature">Perfect for internal systems and enterprise tools</li>
                        </ul>
                    </div>
                    <div className="service-card">
                        <div className="flex justify-center items-center py-3">
                            <div className="w-15 h-15 flex justify-center items rounded-2xl bg-amber-100 relative">
                                <div className="w-15 h-15 flex justify-center items-center absolute  border -top-3 left-3 rounded-2xl">
                                    a
                                </div>

                            </div>
                        </div>
                        {/* <div className="flex justify-center items-center pb-10">
                        <div className="w-40 h-30">
                            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                                <path fill="#242424" d="M52.8,-64.4C66,-51.9,72.5,-32.9,77,-12.8C81.5,7.4,84,28.6,76.1,45.5C68.2,62.3,49.9,74.6,30.3,80.7C10.6,86.7,-10.4,86.5,-28.4,79.4C-46.5,72.3,-61.5,58.2,-70.7,41.3C-80,24.3,-83.5,4.5,-79.4,-13.3C-75.4,-31,-63.9,-46.7,-49.4,-59C-34.9,-71.2,-17.5,-80.1,1.2,-81.5C19.8,-82.9,39.6,-76.9,52.8,-64.4Z" transform="translate(100 100)" />
                            </svg>
                        </div>
                    </div> */}
                        <h4 className="service-heading">Software Maintenance & Support</h4>
                        <p className="service-content ">Keeping your software secure, stable, and up-to-date long after deployment.</p>
                        <ul className="service-feature-list">
                            <li className="service-feature">Performance tuning

                            </li>
                            <li className="service-feature">Security patches</li>
                            <li className="service-feature">Feature enhancements</li>
                            <li className="service-feature">SLA-backed support plans</li>
                        </ul>
                    </div>
                    <div className="service-card">
                        <div className="flex justify-center items-center py-3">
                            <div className="w-15 h-15 flex justify-center items rounded-2xl bg-amber-100 relative">
                                <div className="w-15 h-15 flex justify-center items-center absolute  border -top-3 left-3 rounded-2xl">
                                    a
                                </div>

                            </div>
                        </div>
                        {/* <div className="flex justify-center items-center pb-10">
                        <div className="w-40 h-30">
                            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                                <path fill="#242424" d="M51.4,-63.2C64.4,-50.4,71.2,-32.1,74.2,-13.4C77.1,5.4,76.3,24.5,68.6,41.2C60.9,58,46.3,72.5,28.4,79.7C10.6,86.9,-10.5,86.9,-28.6,79.8C-46.6,72.7,-61.6,58.4,-69.4,41.7C-77.2,24.9,-77.8,5.5,-74.3,-12.9C-70.8,-31.3,-63.2,-48.8,-50.1,-61.6C-37.1,-74.4,-18.5,-82.5,0.3,-82.9C19.2,-83.3,38.4,-76,51.4,-63.2Z" transform="translate(100 100)" />
                            </svg>
                        </div>
                    </div> */}
                        <h4 className="service-heading">UI/UX Design</h4>
                        <p className="service-content">Crafting intuitive, visually compelling digital experiences that drive user satisfaction and business results.</p>
                        <ul className="service-feature-list">
                            <li className="service-feature">Prototypes & wireframes
                            </li>
                            <li className="service-feature">Mobile-first design</li>
                            <li className="service-feature">Research-driven decisions</li>
                        </ul>
                    </div>
                </div>
                {/* Third Design  */}
                <div className="grid sm:grid-cols-3 gap-5 grid-cols-1">
                    {
                        services && services.map((data, index) => {
                            return (
                                <div className="service-card">
                                    <div className="flex justify-center items-center pb-3">
                                        <div className="w-16 h-16 flex justify-center items-center rounded-full bg-primary relative z-50">
                                            {data.icon}
                                        </div>
                                    </div>
                                    <h4 className="service-heading">{data.title}</h4>
                                    <p className="service-content ">
                                        {
                                            data.description
                                        }
                                    </p>
                                    {/* <ul className="service-feature-list">
                                        {
                                            data.features && data.features.map((feature) => (<li className="service-feature">{feature}</li>))
                                        }
                                    </ul> */}
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div >
    )
}



export default Services;

