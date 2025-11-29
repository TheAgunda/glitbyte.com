import Footer from "@/modules/layout/templates/footer";
import Header from "@/modules/layout/templates/header";
import Image from "next/image";
import Link from "next/link";
import { APP } from '@/lib/constants';
import ContactForm from "@/modules/home/components/contact-form";
import Services from "@/modules/home/components/services";
import Abstract from "@/modules/home/components/abstract";
import WhyChooseUs from "@/modules/home/components/why-choose-us";
import About from "@/modules/home/components/about";
import CaseStudies from "@/modules/home/components/case-studies";
import FAQs from "@/modules/home/components/faqs";
import OurWork from "@/modules/home/components/our-work";
import Testing from "@/modules/home/components/testing";
import Starfield from "@/modules/layout/components/starfield";
export default function Home() {
  return (
    <div className="w-full">
      <Header />
      {/* <Starfield/> */}
      <div className="container mx-auto" >
        <div className="mt-50 mb-40 flex flex-col justify-center items-center gap-10 mx-auto py-10 z-20 relative" >
          <h1 className="h1 text-center">
            Future-Ready IT Solutions<br /> for Growing Businesses
          </h1>
          <p className="paragraph text-secondary max-w-4xl text-center">
            We craft powerful software solutions with elegance, speed, and precision — from sleek mobile apps to complex enterprise platforms.
          </p>
          <Link href={'/download-app'} className="text-base font-normal text-white leading-5 px-1.5 py-1.5 bg-[#242424] rounded-[80px] flex items-center gap-2.5 group relative after:content[''] after:w-60 after:h-0 after:rounded-none after:bg-primary  after:absolute after:-bottom-[100px] after:-left-0.5 after:hover:w-60 after:hover:h-60 after:hover:rounded-full z-10 after:transition-all after:duration-900 overflow-hidden">
            <span className="text-base font-normal z-20 ps-2">
              Get a Quote
            </span>
            <div className="z-20">
              <span className="w-11 h-11 rounded-full bg-primary text-white flex justify-center items-center">
                <svg className="w-4.5 h-4.5 rotate-[30deg] group-hover:rotate-0 transition-all duration-[1.2s]" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18.4507 32L32 18.4483L18.4507 4.89651" stroke="currentColor" strokeWidth="2.43243" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M4.90137 18.4482L32 18.4482" stroke="currentColor" strokeWidth="2.43243" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </div>
          </Link>
        </div>
        <About />
        <OurWork />
        <Services />
        <WhyChooseUs />
        <CaseStudies />
        <FAQs />
      </div>
      {/* <Testing /> */}
      <ContactForm />
      <Footer />

    </div >
  );
}
