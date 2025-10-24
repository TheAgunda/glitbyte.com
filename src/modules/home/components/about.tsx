import Button from "@/modules/common/components/button";
import Abstract from "./abstract";
import { APP } from '@/lib/constants';
const About: React.FC<{}> = () => {
    return (
        <div className="mb-10">
            <div className="grid grid-cols-2">
                <div className="flex flex-col justify-center items-start">
                    <h2 className="h4 text-secondary pb-3 relative">
                        Welcome to <span className="text-primary text-4xl">{APP.NAME}</span>
                        <Abstract />
                    </h2>
                    <p className=" font-semibold  mb-5 h2">Where Innovation Meets Craftsmanship and Drives Performance</p>
                    <p className="text-secondary">We are a digital innovation studio that blends modern design with bulletproof development to build custom software solutions that don’t just work — they wow. With deep domain expertise and a relentless passion for technology, we deliver digital products that are intuitive, scalable, and future-ready.</p>
                    <Button title="Learn about us" className="mt-7.5"></Button>
                </div>
                <div className="flex justify-end">

                    <div>
                        <img src="/svg/about.svg" />
                        {/* <div className="w-120 h-120 bg-white/20 relative">
                  <div className="absolute w-60 h-60 -bottom-20 -right-20 bg-white/20">
                  </div>
                </div> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;