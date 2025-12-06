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
import Heading from "@/modules/common/components/ui/heading";
import Hero from "@/modules/home/components/hero";
import HeroBackground from "@/modules/home/components/hero-background";
export default function Home() {
  return (
    <div className="w-full  ">
      <Header />
      {/* <Starfield /> */}
      <div className="relative  w-full">
        <HeroBackground />
        {/* <img src="/svg/looper-bg.svg" className="absolute rotate-[196deg] -top-20 right-19" /> */}
      </div>
      <div className="container mx-auto" >
        <Hero />
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
