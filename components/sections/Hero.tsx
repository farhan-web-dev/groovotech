"use client";

import { useState, useEffect } from "react";
import { Brain, Sparkles, Code2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a1f] via-[#1a1a3e] to-[#0a0a1f]" />

      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-float" />
        <div
          className="absolute top-40 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-float"
          style={{ animationDelay: "1s" }}
        />
        <div
          className="absolute -bottom-8 left-1/3 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl animate-float"
          style={{ animationDelay: "2s" }}
        />
      </div>

      <nav className="absolute top-0 left-0 right-0 z-50 px-6 py-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between mr-40">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10  bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              {/* <Brain className="w-6 h-6 text-white" /> */}
              <img
                src="/Groovo logo.png"
                alt="GroovoTech Logo"
                className="rounded-lg"
              />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              GroovoTech
            </span>
          </div>

          <div className="hidden md:flex items-center gap-8 ">
            <a
              href="#services"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Services
            </a>
            <a
              href="#projects"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Projects
            </a>
            <a
              href="#about"
              className="text-gray-300 hover:text-white transition-colors"
            >
              About
            </a>
            <a
              href="#contact"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Contact
            </a>
            <a
              href="/profile"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Company Profile
            </a>
          </div>

          {/* <div className="flex items-center gap-3">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6">
              Get Started
            </Button>
            <Button variant="outline" className="border-green-500 text-green-500 hover:bg-green-500 hover:text-white px-6">
              Contact on WhatsApp
            </Button>
            </div> */}
        </div>
      </nav>

      <div className="relative z-10 pt-20 pb-6 max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <div
          className={`space-y-6 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20">
            <Sparkles className="w-4 h-4 text-blue-400" />
            <span className="text-sm text-blue-300">AI-Powered Solutions</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            Building{" "}
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Intelligent
            </span>{" "}
            Digital Experiences with{" "}
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              AI & Code.
            </span>
          </h1>

          <p className="text-xl text-gray-400 leading-relaxed">
            GroovoTech delivers modern AI solutions, mobile apps, web apps, and
            cloud automation.
          </p>

          {/* <div className="flex flex-wrap items-center gap-4 pt-4"> */}
          {/* <Button
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg rounded-xl shadow-lg shadow-blue-500/50 transition-all hover:shadow-blue-500/70"
            >
              Get Started →
            </Button> */}
          {/* <a
              href="https://wa.me/923139560175"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="lg"
                variant="outline"
                className="border-green-500 text-green-500 hover:bg-green-500 hover:text-white px-8 py-6 text-lg rounded-xl"
              >
                Contact on WhatsApp
              </Button>
            </a>
          </div> */}
        </div>

        <div
          className={`relative transition-all duration-1000 delay-300 ${
            isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
          }`}
        >
          <div className="relative">
            <div className="glassmorphism rounded-3xl p-8 shadow-2xl">
              <div className="relative aspect-square rounded-2xl bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 p-1">
                <div className="w-full h-full bg-[#1a1a3e] rounded-2xl flex items-center justify-center">
                  <Brain className="w-48 h-48 text-purple-400 animate-float" />
                </div>
              </div>

              <div className="absolute -top-6 -right-6 glassmorphism rounded-2xl p-4 shadow-xl">
                <div className="flex items-center gap-3">
                  <Code2 className="w-8 h-8 text-blue-400" />
                  <div>
                    <p className="text-xs text-gray-400">Lines of Code</p>
                    <p className="text-lg font-bold">1M+</p>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-6 -left-6 glassmorphism rounded-2xl p-4 shadow-xl">
                <div className="flex items-center gap-3">
                  <Sparkles className="w-8 h-8 text-purple-400" />
                  <div>
                    <p className="text-xs text-gray-400">AI Models</p>
                    <p className="text-lg font-bold">50+</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-gray-400 flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-gray-400 rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
}
