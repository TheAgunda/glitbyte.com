"use client";
import { useRef, useState, useEffect } from 'react';
const Testing = () => {
    const [activeSection, setActiveSection] = useState("section1");
    const sectionsRef = useRef<any[]>([]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            { threshold: 0.6 } // triggers when 60% of a section is visible
        );

        sectionsRef.current.forEach((section) => section && observer.observe(section));
        return () => observer.disconnect();
    }, []);

    const scrollToSection = (id: string) => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <div className="flex h-screen bg-gray-100 w-full ">
            {/* Sidebar */}
            <aside className=" bg-white border-r overflow-y-auto scroll-smooth">
                <nav className="flex flex-col gap-2 py-4">
                    {["section1", "section2", "section3", "section4"].map((id) => (
                        <button
                            key={id}
                            onClick={() => scrollToSection(id)}
                            className={`px-4 py-2 text-left rounded-md transition-colors duration-200 ${activeSection === id
                                ? "bg-blue-500 text-white"
                                : "hover:bg-gray-200 text-gray-700"
                                }`}
                        >
                            {id.toUpperCase()}
                        </button>
                    ))}
                </nav>
            </aside>

            {/* Content */}
            {/* <main className="flex-1 overflow-y-auto scroll-smooth px-12 py-8 space-y-24">
                {["section1", "section2", "section3", "section4"].map((id, i) => (
                    <section
                        key={id}
                        id={id}
                        ref={(el) => (sectionsRef.current[i] = el)}
                        className="h-screen flex items-center justify-center bg-white rounded-md shadow-md"
                    >
                        <h2 className="text-2xl font-bold text-gray-800">{`This is ${id}`}</h2>
                    </section>
                ))}
            </main> */}
        </div>
    );
};

export default Testing;