import Footer from "@/modules/layout/templates/footer";
import Header from "@/modules/layout/templates/header";
import Image from "next/image";
import Link from "next/link";
export default function Home() {
  return (
    <div className="w-full">
      <Header />
      <div className="container mx-auto" >
        <div className="flex justify-center items-center relative">
          <div className="absolute -top-10 z-10 sm:w-[900px] h-[700px] mx-auto" style={{ backgroundImage: "radial-gradient(at center center, #A34133AD 0%, #FFFFFF00 63%)", opacity: 0.7, }}></div>
        </div>
        <div className="flex flex-col justify-center items-center gap-10 mx-auto py-20 z-20 relative" >
          <h1 className="h1 text-center">
            [Your Company] — Engineering Beautifully<br /> Functional Digital Experiences
          </h1>
          <p className="paragraph text-secondary max-w-4xl text-center">
            We craft powerful software solutions with elegance, speed, and precision — from sleek mobile apps to complex enterprise platforms.
          </p>
          <Link href={'/download-app'} className="text-base font-normal text-white leading-5 px-1.5 py-1.5 bg-[#242424] rounded-[80px] flex items-center gap-2.5 group relative after:content[''] after:w-60 after:h-0 after:rounded-none after:bg-primary  after:absolute after:-bottom-[100px] after:-left-0.5 after:hover:w-60 after:hover:h-60 after:hover:rounded-full z-10 after:transition-all after:duration-900 overflow-hidden">
            <span className="text-base font-normal z-20 ps-2">
              Get a Quote
            </span>
            <div className="z-20">
              <span className="w-11 h-11 rounded-full bg-white flex justify-center items-center">
                <svg className="w-4.5 h-4.5 rotate-[30deg] group-hover:rotate-0 transition-all duration-[1.2s]" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18.4507 32L32 18.4483L18.4507 4.89651" stroke="#242424" strokeWidth="2.43243" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M4.90137 18.4482L32 18.4482" stroke="#242424" strokeWidth="2.43243" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </div>
          </Link>
        </div>
        <div className="flex flex-col">
          <div className="flex">
            <div className="w-4.5 h-4.5">
            </div>
            <div className="w-4.5 h-4.5 ">
            </div>
            <div className="w-4.5 h-4.5 ">
            </div>
            <div className="w-4.5 h-4.5 bg-[#242424]">
            </div>
          </div>
          <div className="flex">
            <div className="w-4.5 h-4.5 bg-[#242424]">
            </div>
            <div className="w-4.5 h-4.5">
            </div>
            <div className="w-4.5 h-4.5 bg-[#242424]">
            </div>
            <div className="w-4.5 h-4.5 ">
            </div>
          </div>
          <div className="flex">
            <div className="w-4.5 h-4.5">
            </div>
            <div className="w-4.5 h-4.5 bg-primary">
            </div>
            <div className="w-4.5 h-4.5">
            </div>
            <div className="w-4.5 h-4.5">
            </div>
          </div>
        </div>
        #0C0C0E

        <div className="mt-20">
          <div className="grid grid-cols-2">
            <div>
              <h2 className="h2 mb-5">
                Welcome to [Your Company Name]
              </h2>
              <p className="text-secondary font-semibold text-lg mb-5">Innovation. Craftsmanship. Performance.</p>
              <p className="text-secondary">We are a digital innovation studio that blends modern design with bulletproof development to build custom software solutions that don’t just work — they wow. With deep domain expertise and a relentless passion for technology, we deliver digital products that are intuitive, scalable, and future-ready.</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="flex">
            <div className="w-4.5 h-4.5">
            </div>
            <div className="w-4.5 h-4.5 ">
            </div>
            <div className="w-4.5 h-4.5 bg-white/20">
            </div>

          </div>
          <div className="flex">
            <div className="w-4.5 h-4.5 ">
            </div>
            <div className="w-4.5 h-4.5 bg-[#242424]">
            </div>
            <div className="w-4.5 h-4.5 ">
            </div>

          </div>
          <div className="flex">
            <div className="w-4.5 h-4.5 bg-primary">
            </div>
            <div className="w-4.5 h-4.5 ">
            </div>
            <div className="w-4.5 h-4.5 bg-white/10">
            </div>
          </div>
        </div>

        <div className="flex flex-col mt-10 gap-10">
          <h2 className="h2">
            Our Core Services
          </h2>
          <div className="grid sm:grid-cols-3 gap-5 grid-cols-1">
            <div className=" service-card">
              <h4 className="service-heading">Mobile App Development</h4>
              <p className="service-content ">
                Custom-built iOS & Android applications that combine stunning UI/UX with robust backend architecture.
              </p>
              <ul className="service-feature">
                <li>Native & Cross-platform</li>
                <li>Scalable and secure</li>
                <li>Designed for engagement and retention</li>
              </ul>
            </div>
            <div className="service-card">
              <h4 className="service-heading">Web Development</h4>
              <p className="service-content ">Responsive, high-performance websites and platforms built with the latest tech stacks.</p>
              <ul className="service-feature">
                <li>React, Vue, Angular</li>
                <li>E-commerce, dashboards, portals</li>
                <li>SEO-friendly, optimized, and lightning-fast</li>
              </ul>
            </div>
            <div className="service-card">
              <h4 className="service-heading">Custom Software Solutions</h4>
              <p className="service-content ">We design and develop software tailored to your exact business needs.</p>
              <ul className="service-feature">
                <li>Business automation tools</li>
                <li>SaaS platforms</li>
                <li>API integrations</li>
                <li>Cloud-native apps</li>
              </ul>
            </div>
            <div className="service-card">
              <h4 className="service-heading">Desktop Application Development</h4>
              <p className="service-content ">Powerful and intuitive desktop apps for Windows, macOS, and Linux.</p>
              <ul className="service-feature">
                <li>Electron, .NET, WPF, Qt

                </li>
                <li>Smooth UI with industrial-grade performance</li>
                <li>Perfect for internal systems and enterprise tools</li>
              </ul>
            </div>
            <div className="service-card">
              <h4 className="service-heading">Software Maintenance & Support</h4>
              <p className="service-content ">Keeping your software secure, stable, and up-to-date long after deployment.</p>
              <ul className="service-feature">
                <li>Performance tuning

                </li>
                <li>Security patches</li>
                <li>Feature enhancements</li>
                <li>SLA-backed support plans</li>
              </ul>
            </div>
          </div>




        </div>





        <div className="mt-40">
          <h2 className="h2">Why Choose [Your Company Name]?</h2>
          <div className="grid grid-cols-2 gap-6 my-10">
            <div>
              <h4 className="h4">Design-Led Thinking</h4>
              <p>We don’t just write code. We craft experiences. Every product begins with UX and visual storytelling.</p>
            </div>
            <div>
              <h4 className="h4">Engineering Excellence</h4>
              <p>From architecture to deployment, we implement robust, scalable solutions with clean, modern code.</p>
            </div>
            <div>
              <h4 className="h4">Tailored to You</h4>
              <p>No templates. No shortcuts. Every line is written for your business, your needs, your future.</p>
            </div>
            <div>
              <h4 className="h4">Agile & Transparent</h4>
              <p>We work in sprints, deliver fast, and keep you in the loop — always.</p>
            </div>
            <div>
              <h4 className="h4">End-to-End Delivery</h4>
              <p>From concept to launch and beyond, we handle the full lifecycle with zero handoffs or compromises.</p>
            </div>
          </div>
        </div>

        <div className="mt-20">
          <div>
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
        </div>
        <div className="mt-20">
          <h2 className="h2">Ready to Build Software That Performs & Inspires?</h2>
          <p>We’d love to hear about your vision. Whether you're starting fresh or improving an existing system, we’re here to help.</p>
          <ul>
            🔵 Request a Free Project Consultation
            🔵 Download Our Company Profile
            🔵 Speak to a Solutions Architect
          </ul>
        </div>

        <div className="mt-20">
          <h2 className="h2">Let’s Connect</h2>
          <p>Office: [Company Address]</p>
          <p>Phone: +1 (XXX) XXX-XXXX</p>
          <p>Email: hello@yourcompany.com</p>
          <p> Website: www.yourcompany.com</p>
          <p>🔗 LinkedIn | Dribbble | GitHub</p>
          <p>Or fill out our project planner form — we’ll respond within 12 hours.</p>
        </div>
        <div className="mt-20">
          <h2 className="h2">Tech Stack Expertise
          </h2>
          <ul>
            Frontend: React, Angular, Vue, Flutter
            Backend: Node.js, .NET, Python, PHP, Java
            Mobile: Swift, Kotlin, Flutter, React Native
            Desktop: Electron, .NET/WPF, C++
            Cloud: AWS, Azure, GCP
            Database: PostgreSQL, MongoDB, MySQL, Firebase
            DevOps: Docker, GitHub Actions, CI/CD, Kubernetes
          </ul>
        </div>
      </div>
      <div className="container mx-auto">
        <div className="flex flex-wrap gap-2.5 mt-10">
          {
            ["#f46bf4", "#a683ff", "#ff6a50", "#ffce51", "#17bd5f", "#63b9ff"].map((color, index) => {
              return (
                <div className="flex gap-2.5">
                  <div className="client-review">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="h-8 w-8 rounded-full flex items-center justify-center" style={{ background: `${color}` }}>
                        K
                      </div>
                      <div className="flex flex-col">
                        <h3>Kiran Badola</h3>
                        <div className="flex gap-0.5">
                          <svg className="h-3.5 w-3.5 fill-white" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <defs>
                              <linearGradient >
                                <stop offset="0%" stopColor="#e7721b"></stop>
                                <stop offset="0%" stopColor="#ffffff" stop-opacity="1"></stop>
                              </linearGradient>
                            </defs>
                            <path d="M17.0919 25.4549L16.8335 25.299L16.5751 25.4549L7.39263 30.9971L9.82942 20.5516L9.89798 20.2577L9.66988 20.0601L1.55658 13.0315L12.2393 12.1252L12.5397 12.0997L12.6574 11.8221L16.8335 1.9688L21.0096 11.8221L21.1273 12.0997L21.4277 12.1252L32.1104 13.0315L23.9971 20.0601L23.769 20.2577L23.8376 20.5516L26.2744 30.9971L17.0919 25.4549Z" ></path>
                          </svg>
                          <svg className="h-3.5 w-3.5 fill-white" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <defs>
                              <linearGradient >
                                <stop offset="0%" stopColor="#e7721b"></stop>
                                <stop offset="0%" stopColor="#ffffff" stop-opacity="1"></stop>
                              </linearGradient>
                            </defs>
                            <path d="M17.0919 25.4549L16.8335 25.299L16.5751 25.4549L7.39263 30.9971L9.82942 20.5516L9.89798 20.2577L9.66988 20.0601L1.55658 13.0315L12.2393 12.1252L12.5397 12.0997L12.6574 11.8221L16.8335 1.9688L21.0096 11.8221L21.1273 12.0997L21.4277 12.1252L32.1104 13.0315L23.9971 20.0601L23.769 20.2577L23.8376 20.5516L26.2744 30.9971L17.0919 25.4549Z" ></path>
                          </svg>
                          <svg className="h-3.5 w-3.5 fill-white" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <defs>
                              <linearGradient >
                                <stop offset="0%" stopColor="#e7721b"></stop>
                                <stop offset="0%" stopColor="#ffffff" stop-opacity="1"></stop>
                              </linearGradient>
                            </defs>
                            <path d="M17.0919 25.4549L16.8335 25.299L16.5751 25.4549L7.39263 30.9971L9.82942 20.5516L9.89798 20.2577L9.66988 20.0601L1.55658 13.0315L12.2393 12.1252L12.5397 12.0997L12.6574 11.8221L16.8335 1.9688L21.0096 11.8221L21.1273 12.0997L21.4277 12.1252L32.1104 13.0315L23.9971 20.0601L23.769 20.2577L23.8376 20.5516L26.2744 30.9971L17.0919 25.4549Z" ></path>
                          </svg>
                          <svg className="h-3.5 w-3.5 fill-white" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <defs>
                              <linearGradient >
                                <stop offset="0%" stopColor="#e7721b"></stop>
                                <stop offset="0%" stopColor="#ffffff" stop-opacity="1"></stop>
                              </linearGradient>
                            </defs>
                            <path d="M17.0919 25.4549L16.8335 25.299L16.5751 25.4549L7.39263 30.9971L9.82942 20.5516L9.89798 20.2577L9.66988 20.0601L1.55658 13.0315L12.2393 12.1252L12.5397 12.0997L12.6574 11.8221L16.8335 1.9688L21.0096 11.8221L21.1273 12.0997L21.4277 12.1252L32.1104 13.0315L23.9971 20.0601L23.769 20.2577L23.8376 20.5516L26.2744 30.9971L17.0919 25.4549Z" ></path>
                          </svg>
                          <svg className="h-3.5 w-3.5 fill-white" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <defs>
                              <linearGradient >
                                <stop offset="0%" stopColor="#e7721b"></stop>
                                <stop offset="0%" stopColor="#ffffff" stop-opacity="1"></stop>
                              </linearGradient>
                            </defs>
                            <path d="M17.0919 25.4549L16.8335 25.299L16.5751 25.4549L7.39263 30.9971L9.82942 20.5516L9.89798 20.2577L9.66988 20.0601L1.55658 13.0315L12.2393 12.1252L12.5397 12.0997L12.6574 11.8221L16.8335 1.9688L21.0096 11.8221L21.1273 12.0997L21.4277 12.1252L32.1104 13.0315L23.9971 20.0601L23.769 20.2577L23.8376 20.5516L26.2744 30.9971L17.0919 25.4549Z" ></path>
                          </svg>
                        </div>
                      </div>
                    </div>
                    <p className="client-review-title">
                      I’ve been in business for 45 years and very seldom do I come across people like them who actually do what they say they’re going to do.
                    </p>
                  </div>
                </div>
              )
            })
          }

          <div className="flex gap-2.5">

          </div>
        </div>
        Glitbyte
      </div>
      <Footer />
    </div >
  );
}
