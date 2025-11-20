"use client";

import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import Projects from "@/components/sections/Projects";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";
import { FaWhatsapp } from "react-icons/fa";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a1f] text-white overflow-x-hidden relative">
      <Hero />
      <Services />
      <Projects />
      <WhyChooseUs />
      <About />
      <Contact />
      <Footer />

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/923139560175"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg flex items-center justify-center transition duration-300 z-50"
      >
        <FaWhatsapp size={28} />
      </a>
    </main>
  );
}
