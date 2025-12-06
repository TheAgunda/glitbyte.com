import Image from "next/image";
import Footer from "@/modules/layout/templates/footer";
import Header from "@/modules/layout/templates/header";

import Link from "next/link";
import { APP } from '@/lib/constants';
import ContactForm from "@/modules/home/components/contact-form";
import Services from "@/modules/home/components/services";
import Abstract from "@/modules/home/components/abstract";
import WhyChooseUs from "@/modules/home/components/why-choose-us";
import About from "@/modules/home/components/about";
export default function Home() {
  return (
    <div className="w-full">
      <Header />
      <div className="container mx-auto" >
        <div className="flex justify-center items-center relative">
          <div className="absolute -top-10 z-10 sm:w-[900px] h-[700px] mx-auto" style={{ backgroundImage: "radial-gradient(at center center, #A34133AD 0%, #FFFFFF00 63%)", opacity: 0.7, }}></div>
        </div>
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
        <Services />
        <WhyChooseUs />
        <div className="container mx-auto">
          <div className="flex flex-col items-center justify-center">
            <h2 className="h2">What Our Clients Say</h2>
            <div className="">
              <p>They didn’t just deliver software — they delivered an experience. Our app feels premium, performs flawlessly, and our users love it.”</p>
              <span>-- James B., Product Owner at a FinTech Startup</span>
            </div>
            <div className="">
              <p>The team understood our complex requirements and translated them into a smooth, efficient desktop solution. Maintenance has been seamless</p>
              <span>—- Karen D., CIO at HealthTech Enterprise</span>
            </div>
          </div>
          <div className="container">
            <div className="bg-white/10 rounded-[20px] py-12 px-15 w-7xl mx-auto">
              <div className="grid grid-cols-2">
                <div>
                  <h2 className="h2">Ready to Build Software
                    That Performs & Inspires?</h2>
                  <p className="my-2.5">
                    We’re here to bring your vision to life — whether you’re starting from scratch or optimizing an existing system.
                  </p>

                  <a href="javascript:;" className="py-2.5 px-5 h-9 block w-fit bg-indigo-600 rounded-full shadow-sm text-xs text-white mx-auto transition-all  duration-500 hover:bg-indigo-700 lg:mx-0">
                    Request a Free Project Consultation
                  </a>
                  <ul>

                    {/* Download Our Company Profile
                Speak to a Solutions Architect */}
                  </ul>
                </div>
                <div className="flex justify-end relative">
                  <img src="https://azim.commonsupport.com/Emu/assets/images/icons/rocket-1.png" className="w-50 -top-20 absolute" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container mx-auto">
          <div className="mt-20">
            <h2 className="h2">Let’s Connect</h2>
            <p>Office: [Company Address]</p>
            <p>Phone: +1 (XXX) XXX-XXXX</p>
            <p>Email: hello@yourcompany.com</p>
            <p> Website: www.yourcompany.com</p>
            <p>🔗 LinkedIn | Dribbble | GitHub</p>
            <p>Or fill out our project planner form — we’ll respond within 12 hours.</p>
          </div>
        </div>
      </div>
      <div className="container mx-auto flex flex-col gap-2">
        <div className="flex justify-center items-center">
          <h2 className="h2">Tech Stack Expertise</h2>
        </div>
        <ul>
          Frontend: React, Angular, Vue, Flutter
          Backend: Node.js, .NET, Python, PHP, Java
          Mobile: Swift, Kotlin, Flutter, React Native
          Desktop: Electron, .NET/WPF, C++
          Cloud: AWS, Azure, GCP
          Database: PostgreSQL, MongoDB, MySQL, Firebase
          DevOps: Docker, GitHub Actions, CI/CD, Kubernetes
        </ul>
        <div className="1bg-white/10 rounded-[20px] py-12 px-8 w-7xl mx-auto">
          <h4 className="h4">Frontend</h4>
          <div className="flex gap-5">
            <div className="flex  gap-2 items-center justify-center  text-base font-bold ">
              <img height={50} src="/svg/technology/reactjs.svg" />
              React
            </div>
            <div className="flex  gap-2 items-center justify-center  text-base font-bold">
              <img width={200} height={50} src="/svg/technology/android-logo.svg" />
              Android
            </div>
            <div className="flex  gap-2 items-center justify-center  text-base font-bold">
              <img width={50} height={50} src="/svg/technology/ts-logo-512.svg" />
              Typescript
            </div>
            <div className="flex  gap-2 items-center justify-center  text-base font-bold">
              <img width={50} height={50} src="/svg/technology/new-php-logo.svg" />
              PHP
            </div>
          </div>
        </div>
        <div className="1bg-white/10 rounded-[20px] py-12 px-8 w-7xl mx-auto">
          <h4 className="h4">Backend</h4>
          <div className="flex gap-5">
            <div className="flex  gap-2 items-center justify-center  text-base font-bold ">
              <img width={50} height={50} src="/svg/technology/js-icon-green.svg" />
              Node.js,
            </div>
            <div className="flex  gap-2 items-center justify-center  text-base font-bold">
              <img width={50} height={50} src="/svg/technology/python-logo-only.svg" />
              Python
            </div>
            <div className="flex  gap-2 items-center justify-center  text-base font-bold">
              <img width={50} height={50} src="/svg/technology/ts-logo-512.svg" />
              Typescript
            </div>
            <div className="flex  gap-2 items-center justify-center  text-base font-bold">
              <img width={50} height={50} src="/svg/technology/new-php-logo.svg" />
              PHP
            </div>
          </div>
        </div>

        <div className="1bg-white/10 rounded-[20px] py-12 px-8 w-7xl mx-auto">
          <h4 className="h4">Cloud</h4>
          <div className="flex gap-5">
            <div className="flex  gap-2 items-center justify-center  text-base font-bold ">
              <img width={50} height={50} src="/svg/technology/amazon-web-services-logo.svg" />
              AWS
            </div>
            <div className="flex  gap-2 items-center justify-center  text-base font-bold">
              <img height={20} src="/svg/technology/microsoft-azure-logo.svg" />
              Azure
            </div>
            {/* <div className="flex  gap-2 items-center justify-center  text-base font-bold">
              <img width={50} height={50} src="/svg/technology/ts-logo-512.svg" />
              Typescript
            </div>
            <div className="flex  gap-2 items-center justify-center  text-base font-bold">
              <img width={50} height={50} src="/svg/technology/new-php-logo.svg" />
              PHP
            </div> */}
          </div>
        </div>


        <div className="1bg-white/10 rounded-[20px] py-12 px-8 w-7xl mx-auto">
          <h4 className="h4">Database</h4>
          <div className="flex gap-5">
            <div className="flex  gap-2 items-center justify-center  text-base font-bold ">
              <img width={50} height={50} src="/svg/technology/js-icon-green.svg" />
              PostgreSQL
            </div>
            <div className="flex  gap-2 items-center justify-center  text-base font-bold">
              <img width={50} height={50} src="/svg/technology/python-logo-only.svg" />
              MongoDB
            </div>
            <div className="flex  gap-2 items-center justify-center  text-base font-bold">
              <img width={50} height={50} src="/svg/technology/ts-logo-512.svg" />
              MySQL
            </div>
            <div className="flex  gap-2 items-center justify-center  text-base font-bold">
              <img width={200} src="/svg/technology/firebase.svg" />
              Firebase
            </div>
          </div>
        </div>
        <div className="1bg-white/10 rounded-[20px] py-12 px-8 w-7xl mx-auto">
          <h4 className="h4">DevOps</h4>
          <div className="flex gap-5">
            <div className="flex  gap-2 items-center justify-center  text-base font-bold ">
              <img width={200} height={80} src="/svg/technology/docker-logo-blue.svg" />
              Docker
            </div>
            <div className="flex  gap-2 items-center justify-center  text-base font-bold">
              <img width={50} height={50} src="/svg/technology/github-mark-white.svg" />
              GitHub
            </div>
            <div className="flex  gap-2 items-center justify-center  text-base font-bold">
              <img width={50} height={50} src="/svg/technology/ts-logo-512.svg" />
              CI/CD
            </div>
            <div className="flex  gap-2 items-center justify-center  text-base font-bold">
              <img width={50} height={50} src="/svg/technology/new-php-logo.svg" />
              Kubernetes
            </div>
          </div>
        </div>


      </div>


      <ContactForm />
      <Footer />
    </div >
  );
}
