"use client";
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Pagination } from 'swiper/modules';

const CaseStudies: React.FC<{}> = () => {
    return (
        <div>
            <div className="flex flex-col justify-center items-center gap-2 text-center">
                <h2 className="h2">
                    Case Studies & Insights
                </h2>
                <p className="text-secondary text-base max-w-3xl">
                    we partner with ambitious teams to solve real problems, ship better products, and drive lasting results.
                </p>
            </div>
            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                freeMode={true}
                pagination={{
                    type: "bullets",
                    clickable: true,
                }}
                modules={[FreeMode, Pagination]}
                className="blog-slider-wrapper"
            >
                <SwiperSlide>
                    <div className="blog-card">
                        <div className="blog-thumb-image-div">
                            <img src="https://cdn.prod.website-files.com/688877cbc5e1fabc679dc7c5/688b6d8c822b084fff5930ea_blog-thumb13.webp" loading="lazy" alt="Blog Image" sizes="100vw" />
                        </div>
                        <div className="blog-category-div">
                            <div className="small-paragraph ibm-plex-mono-font orange-text">Product</div>
                            <div className="blog-dot">

                            </div>
                            <div className="small-paragraph ibm-plex-mono-font white-500-color">July 31, 2025</div>
                        </div>
                        <div className="h5-heading">Building Reliable MVPs: Our Lean Product Framework</div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="blog-card">
                        <div className="blog-thumb-image-div">
                            <img src="https://cdn.prod.website-files.com/688877cbc5e1fabc679dc7c5/688b6c36702119f2ad978ffa_blog-thumb12.jpg" loading="lazy" alt="Blog Image" sizes="100vw" />
                        </div>
                        <div className="blog-category-div">
                            <div className="small-paragraph ibm-plex-mono-font orange-text">Product</div>
                            <div className="blog-dot">

                            </div>
                            <div className="small-paragraph ibm-plex-mono-font white-500-color">July 31, 2025</div>
                        </div>
                        <div className="h5-heading">Why Product-Market Fit Starts with Onboarding, Not Features</div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="blog-card">
                        <div className="blog-thumb-image-div">
                            <img src="https://cdn.prod.website-files.com/688877cbc5e1fabc679dc7c5/688b6beab1e5447e50887fd0_blog-thumb11.webp" loading="lazy" alt="Blog Image" sizes="100vw" />
                        </div>
                        <div className="blog-category-div">
                            <div className="small-paragraph ibm-plex-mono-font orange-text">Product</div>
                            <div className="blog-dot">

                            </div>
                            <div className="small-paragraph ibm-plex-mono-font white-500-color">July 31, 2025</div>
                        </div>
                        <div className="h5-heading">Designing Complex AI Interfaces That Users Actually Understand</div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="blog-card">
                        <div className="blog-thumb-image-div">
                            <img src="https://cdn.prod.website-files.com/688877cbc5e1fabc679dc7c5/688b6b744ba5e29ca37b7e7a_blog-thumb10.jpg" loading="lazy" alt="Blog Image" sizes="100vw" />
                        </div>
                        <div className="blog-category-div">
                            <div className="small-paragraph ibm-plex-mono-font orange-text">Product</div>
                            <div className="blog-dot">

                            </div>
                            <div className="small-paragraph ibm-plex-mono-font white-500-color">July 31, 2025</div>
                        </div>
                        <div className="h5-heading">
                            Micro-Interactions That Make Interfaces Feel Alive
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div >
    )
}
export default CaseStudies;