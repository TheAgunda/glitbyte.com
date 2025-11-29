import { APP } from '@/lib/constants';
const WhyChooseUs: React.FC<{}> = () => {
    return (
        <div className="mb-10">
            <div className='flex flex-col justify-center items-center gap-6 my-20'>
                <h2 className="h2">Why Choose {APP.NAME}?</h2>
                <p className='text-[#ffffffb3] text-lg'>Smart infrastructure and design flexibility to scale AI experiences, fast.</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5'>
                <div className='feature-card'>
                    <div className='feature-detail-div'>
                        <img src="https://cdn.prod.website-files.com/6880e261cef3bfa6896ed9d3/6889e8c1e3f3f370494e7144_feature-icon1.svg" loading="lazy" alt="" className="feature-icon"></img>
                        <div className="feature-heading-div">
                            <div className="large-text">Multilingual by Design</div>
                            <p className="small-paragraph feature-paragraph">
                                Speak to users in 100+ languages - no plugins.
                            </p>
                        </div>
                    </div>
                    <div className="feature-image-div">
                        <img src="https://cdn.prod.website-files.com/6880e261cef3bfa6896ed9d3/6889e8cce683d7ff74ecea7e_feature-image1.webp" loading="lazy" sizes="100vw" alt="" className="feature-image" />
                    </div>
                </div>
                <div className='feature-card'>
                    <div className='feature-detail-div'>
                        <img src="https://cdn.prod.website-files.com/6880e261cef3bfa6896ed9d3/6889e8c131ca754fc527697a_feature-icon2.svg" loading="lazy" alt="" className="feature-image" />
                        <div className="feature-heading-div" >
                            <div className="large-text">Intelligent Tool Hooks</div>
                            <p className="small-paragraph feature-paragraph">
                                Connect tools or services to trigger contextual actions.
                            </p>
                        </div>
                    </div>
                    <div className="feature-icon-div">
                        <img src="https://cdn.prod.website-files.com/6880e261cef3bfa6896ed9d3/6889e8dd767ddfe94c6ce21f_feature-tool-image1.svg" loading="lazy" alt="" className="feature-tool-icon-01" />
                        <img src="https://cdn.prod.website-files.com/6880e261cef3bfa6896ed9d3/6889e8c4ccdb8b520943eb3e_feature-tool-image2.svg" loading="lazy" alt="" className="feature-tool-icon-02" />
                        <img src="https://cdn.prod.website-files.com/6880e261cef3bfa6896ed9d3/6889e8e2735f9d1ea401af32_feature-tool-image3.svg" loading="lazy" alt="" className="feature-tool-icon-03" />
                        <img src="https://cdn.prod.website-files.com/6880e261cef3bfa6896ed9d3/6889e8c03db2d01858aee6d4_feature-tool-image4.svg" loading="lazy" alt="" className="feature-tool-icon-04" />
                        <img src="https://cdn.prod.website-files.com/6880e261cef3bfa6896ed9d3/6889e8c238d780ac1ece181c_feature-tool-image5.svg" loading="lazy" alt="" className="feature-tool-icon-05" />
                    </div>
                </div>
                <div className='flex flex-col gap-5'>
                    <div className='feature-card'>
                        <div className='feature-detail-div height'>
                            <img src="https://cdn.prod.website-files.com/6880e261cef3bfa6896ed9d3/6889e8c394dddd006f53caf8_feature-icon3.svg" loading="lazy" alt="" className="feature-icon" />
                            <div className="feature-heading-div" >
                                <div className="large-text">Intelligent Tool Hooks</div>
                                <p className="small-paragraph feature-paragraph">
                                    Connect tools or services to trigger contextual actions.
                                </p>
                            </div>
                        </div>

                    </div>
                    <div className='feature-card'>
                        <div className='feature-detail-div height'>
                            <img src="https://cdn.prod.website-files.com/6880e261cef3bfa6896ed9d3/6889e8c131ca754fc527697a_feature-icon2.svg" loading="lazy" alt="" className="feature-icon" />
                            <div className="feature-heading-div" >
                                <div className="large-text">Intelligent Tool Hooks</div>
                                <p className="small-paragraph feature-paragraph">
                                    Connect tools or services to trigger contextual actions.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='feature-card'>
                    <div className='feature-detail-div'>
                        <img src="https://cdn.prod.website-files.com/6880e261cef3bfa6896ed9d3/6889e8d4d0724f1b125623ca_feature-icon5.svg" loading="lazy" alt="" className="feature-icon" />
                        <div className="feature-heading-div" >
                            <div className="large-text">Intelligent Tool Hooks</div>
                            <p className="small-paragraph feature-paragraph">
                                Connect tools or services to trigger contextual actions.
                            </p>
                        </div>
                    </div>
                    <div className="feature-image-div">
                        <img src="https://cdn.prod.website-files.com/6880e261cef3bfa6896ed9d3/6889e8c15912ad3d1db55e64_feature-image2.webp" loading="lazy" alt="" className="feature-image" />
                    </div>
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-6'>
                <div className="compliance-card">
                    <div className="compliance-icon-div _01">
                        <img src="https://cdn.prod.website-files.com/6880e261cef3bfa6896ed9d3/6889e8c3410a2c9e30be7f6f_compliance-icon1.svg" loading="lazy" alt="" className="compliance-icon" />
                    </div>
                    <div className="compliance-detail-div">
                        <div className="large-paragraph white-text medium-font">99.9% Uptime</div>
                        <p className="small-paragraph">Enterprise-grade audio infra built.</p>
                    </div>
                </div>
                <div className="compliance-card">
                    <div className="compliance-icon-div _02">
                        <img src="https://cdn.prod.website-files.com/6880e261cef3bfa6896ed9d3/6889e8d2026e584fa3b8f93b_compliance-icon2.svg" loading="lazy" alt="" className="compliance-icon" />
                    </div>
                    <div className="compliance-detail-div">
                        <div className="large-paragraph white-text medium-font">99.9% Uptime</div>
                        <p className="small-paragraph">Enterprise-grade audio infra built.</p>
                    </div>
                </div>
                <div className="compliance-card">
                    <div className="compliance-icon-div _03">
                        <img src="https://cdn.prod.website-files.com/6880e261cef3bfa6896ed9d3/6889e8d285cc2caabf4f2d8d_compliance-icon3.svg" loading="lazy" alt="" className="compliance-icon" />
                    </div>
                    <div className="compliance-detail-div">
                        <div className="large-paragraph white-text medium-font">99.9% Uptime</div>
                        <p className="small-paragraph">Enterprise-grade audio infra built.</p>
                    </div>
                </div>
                <div className="compliance-card">
                    <div className="compliance-icon-div _04">
                        <img src="https://cdn.prod.website-files.com/6880e261cef3bfa6896ed9d3/6889e8c25d841b499b96b27f_compliance-icon4.svg" loading="lazy" alt="" className="compliance-icon" />
                    </div>
                    <div className="compliance-detail-div">
                        <div className="large-paragraph white-text medium-font">99.9% Uptime</div>
                        <p className="small-paragraph">Enterprise-grade audio infra built.</p>
                    </div>
                </div>
            </div>
            {/* Old Design */}
            <div className="grid grid-cols-2 hidden">
                <div className="px-10 flex justify-center items-center">
                    <img src="/svg/why-us.svg" />
                </div>
                <div className="grid grid-cols-2 gap-4 my-10">
                    <div className="bg-white/10 rounded-[16px] px-5 py-4">
                        <div className="flex items-center gap-4">
                            <div>
                                <div className="flex rounded-lg bg-[#ffa99b] w-10 h-10 p-2 justify-center items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" aria-labelledby="title" aria-describedby="desc" role="img" width="32" height="32"><title>Chat</title>
                                        <desc>A line styled icon from Orion Icon Library.</desc><path data-name="layer2" d="M42 8H22a20 20 0 0 0 0 40h2v10l12-10h6a20 20 0 0 0 0-40z" fill="none" stroke="#000000" stroke-miterlimit="10" stroke-width="4" stroke-linejoin="miter" stroke-linecap="round"></path><circle data-name="layer1" cx="20" cy="28" r="2" fill="none" stroke="#000000" stroke-miterlimit="10" stroke-width="4" stroke-linejoin="miter" stroke-linecap="round"></circle><circle data-name="layer1" cx="32" cy="28" r="2" fill="none" stroke="#000000" stroke-miterlimit="10" stroke-width="4" stroke-linejoin="miter" stroke-linecap="round"></circle><circle data-name="layer1" cx="44" cy="28" r="2" fill="none" stroke="#000000" stroke-miterlimit="10" stroke-width="4" stroke-linejoin="miter" stroke-linecap="round"></circle></svg>
                                </div>
                            </div>
                            <div className="flex flex-col gap-1 items-start justify-center">
                                <h4 className="h6">Design-Led Thinking</h4>
                                <p className="text-secondary text-xs font-normal">We don’t just write code. We craft experiences. Every product begins with UX and visual storytelling.</p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white/10 rounded-[16px] px-5 py-4">
                        <div className="flex items-center gap-4">
                            <div>
                                <div className="flex rounded-lg bg-[#d8d0ed] w-10 h-10 p-2 justify-center items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" aria-labelledby="title" aria-describedby="desc" role="img" width="32" height="32"><title>Chat</title>
                                        <desc>A line styled icon from Orion Icon Library.</desc><path data-name="layer2" d="M42 8H22a20 20 0 0 0 0 40h2v10l12-10h6a20 20 0 0 0 0-40z" fill="none" stroke="#000000" stroke-miterlimit="10" stroke-width="4" stroke-linejoin="miter" stroke-linecap="round"></path><circle data-name="layer1" cx="20" cy="28" r="2" fill="none" stroke="#000000" stroke-miterlimit="10" stroke-width="4" stroke-linejoin="miter" stroke-linecap="round"></circle><circle data-name="layer1" cx="32" cy="28" r="2" fill="none" stroke="#000000" stroke-miterlimit="10" stroke-width="4" stroke-linejoin="miter" stroke-linecap="round"></circle><circle data-name="layer1" cx="44" cy="28" r="2" fill="none" stroke="#000000" stroke-miterlimit="10" stroke-width="4" stroke-linejoin="miter" stroke-linecap="round"></circle></svg>
                                </div>
                            </div>
                            <div className="flex flex-col gap-1 items-start justify-center">
                                <h4 className="h6">Design-Led Thinking</h4>
                                <p className="text-secondary text-xs font-normal">We don’t just write code. We craft experiences. Every product begins with UX and visual storytelling.</p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white/10 rounded-[16px] px-5 py-4">
                        <div className="flex items-center gap-4">
                            <div>
                                <div className="flex rounded-lg bg-[#fecd6a] w-10 h-10 p-2 justify-center items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" aria-labelledby="title" aria-describedby="desc" role="img" width="32" height="32"><title>Chat</title>
                                        <desc>A line styled icon from Orion Icon Library.</desc><path data-name="layer2" d="M42 8H22a20 20 0 0 0 0 40h2v10l12-10h6a20 20 0 0 0 0-40z" fill="none" stroke="#000000" stroke-miterlimit="10" stroke-width="4" stroke-linejoin="miter" stroke-linecap="round"></path><circle data-name="layer1" cx="20" cy="28" r="2" fill="none" stroke="#000000" stroke-miterlimit="10" stroke-width="4" stroke-linejoin="miter" stroke-linecap="round"></circle><circle data-name="layer1" cx="32" cy="28" r="2" fill="none" stroke="#000000" stroke-miterlimit="10" stroke-width="4" stroke-linejoin="miter" stroke-linecap="round"></circle><circle data-name="layer1" cx="44" cy="28" r="2" fill="none" stroke="#000000" stroke-miterlimit="10" stroke-width="4" stroke-linejoin="miter" stroke-linecap="round"></circle></svg>
                                </div>
                            </div>
                            <div className="flex flex-col gap-1 items-start justify-center">
                                <h4 className="h6">Engineering Excellence</h4>
                                <p className="text-secondary text-xs font-normal">From architecture to deployment, we implement robust, scalable solutions with clean, modern code.</p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white/10 rounded-[16px] px-5 py-4">
                        <div className="flex items-center gap-4">
                            <div>
                                <div className="flex rounded-lg bg-[#f1f1e8] w-10 h-10 p-2 justify-center items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" aria-labelledby="title" aria-describedby="desc" role="img" width="32" height="32"><title>Chat</title>
                                        <desc>A line styled icon from Orion Icon Library.</desc><path data-name="layer2" d="M42 8H22a20 20 0 0 0 0 40h2v10l12-10h6a20 20 0 0 0 0-40z" fill="none" stroke="#000000" stroke-miterlimit="10" stroke-width="4" stroke-linejoin="miter" stroke-linecap="round"></path><circle data-name="layer1" cx="20" cy="28" r="2" fill="none" stroke="#000000" stroke-miterlimit="10" stroke-width="4" stroke-linejoin="miter" stroke-linecap="round"></circle><circle data-name="layer1" cx="32" cy="28" r="2" fill="none" stroke="#000000" stroke-miterlimit="10" stroke-width="4" stroke-linejoin="miter" stroke-linecap="round"></circle><circle data-name="layer1" cx="44" cy="28" r="2" fill="none" stroke="#000000" stroke-miterlimit="10" stroke-width="4" stroke-linejoin="miter" stroke-linecap="round"></circle></svg>
                                </div>
                            </div>
                            <div className="flex flex-col gap-1 items-start justify-center">
                                <h4 className="h6">Tailored to You</h4>
                                <p className="text-secondary text-xs font-normal">No templates. No shortcuts. Every line is written for your business, your needs, your future.</p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white/10 rounded-[16px] px-5 py-4">
                        <div className="flex items-center gap-4">
                            <div>
                                <div className="flex rounded-lg bg-[#b1f2d0] w-10 h-10 p-2 justify-center items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" aria-labelledby="title" aria-describedby="desc" role="img" width="32" height="32"><title>Chat</title>
                                        <desc>A line styled icon from Orion Icon Library.</desc><path data-name="layer2" d="M42 8H22a20 20 0 0 0 0 40h2v10l12-10h6a20 20 0 0 0 0-40z" fill="none" stroke="#000000" stroke-miterlimit="10" stroke-width="4" stroke-linejoin="miter" stroke-linecap="round"></path><circle data-name="layer1" cx="20" cy="28" r="2" fill="none" stroke="#000000" stroke-miterlimit="10" stroke-width="4" stroke-linejoin="miter" stroke-linecap="round"></circle><circle data-name="layer1" cx="32" cy="28" r="2" fill="none" stroke="#000000" stroke-miterlimit="10" stroke-width="4" stroke-linejoin="miter" stroke-linecap="round"></circle><circle data-name="layer1" cx="44" cy="28" r="2" fill="none" stroke="#000000" stroke-miterlimit="10" stroke-width="4" stroke-linejoin="miter" stroke-linecap="round"></circle></svg>
                                </div>
                            </div>
                            <div className="flex flex-col gap-1 items-start justify-center">
                                <h4 className="h6">Agile & Transparent</h4>
                                <p className="text-secondary text-xs font-normal">We work in sprints, deliver fast, and keep you in the loop — always.</p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white/10 rounded-[16px] px-5 py-4">
                        <div className="flex items-center gap-4">
                            <div>
                                <div className="flex rounded-lg bg-[#ffab6e] w-10 h-10 p-2 justify-center items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" aria-labelledby="title" aria-describedby="desc" role="img" width="32" height="32"><title>Chat</title>
                                        <desc>A line styled icon from Orion Icon Library.</desc><path data-name="layer2" d="M42 8H22a20 20 0 0 0 0 40h2v10l12-10h6a20 20 0 0 0 0-40z" fill="none" stroke="#000000" stroke-miterlimit="10" stroke-width="4" stroke-linejoin="miter" stroke-linecap="round"></path><circle data-name="layer1" cx="20" cy="28" r="2" fill="none" stroke="#000000" stroke-miterlimit="10" stroke-width="4" stroke-linejoin="miter" stroke-linecap="round"></circle><circle data-name="layer1" cx="32" cy="28" r="2" fill="none" stroke="#000000" stroke-miterlimit="10" stroke-width="4" stroke-linejoin="miter" stroke-linecap="round"></circle><circle data-name="layer1" cx="44" cy="28" r="2" fill="none" stroke="#000000" stroke-miterlimit="10" stroke-width="4" stroke-linejoin="miter" stroke-linecap="round"></circle></svg>
                                </div>
                            </div>
                            <div className="flex flex-col gap-1 items-start justify-center">
                                <h4 className="h6">End-to-End Delivery</h4>
                                <p className="text-secondary text-xs font-normal">From concept to launch and beyond, we handle the full lifecycle with zero handoffs or compromises.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}
export default WhyChooseUs;