"use client";

import { useState, useEffect, useRef } from "react";
import { ArrowRight, ExternalLink } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const projects = [
  {
    href: "https://play.google.com/store/apps/details?id=com.truckersheet.wynn",
    title: "Trucker Mobile App",
    description:
      "A smart trucking management app that tracks drivers, loads, routes, and deliveries in real time.",
    image: "/trucker.jpg",
    gradient: "from-blue-600 to-cyan-600",
    tags: [
      "Mobile App",
      "Admin Dashboard",
      "Owner Operator Dashboard",
      "Driver Dashboard",
    ],
  },
  {
    href: "http://3.9.169.85:8080/",
    title: "Envision E-Commerce Store",
    description:
      "Full-featured shopping website with real-time inventory and secure payments",
    image:
      "https://images.pexels.com/photos/7988079/pexels-photo-7988079.jpeg?auto=compress&cs=tinysrgb&w=800",
    gradient: "from-purple-600 to-pink-600",
    tags: ["React", "E-Commerce", "Seller Dashboard", "Admin Panel"],
  },
  {
    href: "https://play.google.com/store/apps/details?id=com.app.udress",
    title: "uDress Mobile App Marketplace",
    description:
      "uDress is a boutique at your fingertips. Our unique platform allows users to post and sell any type of dress.",
    image: "/udress.jpg",
    gradient: "from-green-600 to-emerald-600",
    tags: ["Mobile App", "Dress MarketPlace", "React Native"],
  },
  {
    href: "https://apps.apple.com/pk/app/lift-log-app/id6747387842",
    title: "Lift Log App",
    description:
      "Lift log is simple, powerfult and privacy focused workout tracking app.",
    image: "fitness.jpg",
    gradient: "from-orange-600 to-red-600",
    tags: ["Mobile App", "Workout Tracker", "Flutter", "IOS"],
  },
];

export default function Projects() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects" ref={sectionRef} className="relative py-24 px-6">
      <div className="absolute inset-0 bg-[#0a0a1f]" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* SECTION HEADER */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Featured{" "}
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Showcasing our latest work in AI, mobile, and web development
          </p>
        </div>

        {/* PROJECTS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <a
              key={index}
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`block group`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <Card
                className={`relative overflow-hidden bg-transparent border-gray-800 hover:border-gray-600 transition-all duration-500 hover:scale-[1.02] ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
                style={{
                  background: "rgba(26, 26, 62, 0.4)",
                  backdropFilter: "blur(10px)",
                }}
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div
                    className={`absolute inset-0 bg-gradient-to-t ${project.gradient} opacity-40 group-hover:opacity-60 transition-opacity duration-300`}
                  />
                </div>

                <CardContent className="p-6">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 text-xs rounded-full bg-blue-500/20 text-blue-300 border border-blue-500/30"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <h3 className="text-2xl font-bold mb-3 group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  <Button
                    variant="outline"
                    className="group/btn border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white transition-all"
                  >
                    View Case Study
                    <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            </a>
          ))}
        </div>

        {/* VIEW ALL PROJECTS BUTTON */}
        <div className="text-center mt-12">
          <a href="#" target="_blank" rel="noopener noreferrer">
            <Button
              size="lg"
              variant="outline"
              className="border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white px-8"
            >
              View All Projects
              <ExternalLink className="ml-2 w-5 h-5" />
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}
