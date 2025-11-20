'use client';

import { useState, useEffect, useRef } from 'react';
import { CheckCircle, Award, Target, TrendingUp } from 'lucide-react';

const stats = [
  { label: 'Projects Delivered', value: '200+', icon: CheckCircle },
  { label: 'Years Experience', value: '10+', icon: Award },
  { label: 'Client Satisfaction', value: '98%', icon: Target },
  { label: 'Team Growth', value: '150%', icon: TrendingUp }
];

export default function About() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="relative py-24 px-6">
      <div className="absolute inset-0 bg-[#0a0a1f]" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="relative">
              <div className="glassmorphism rounded-3xl p-8 shadow-2xl">
                <div className="aspect-square rounded-2xl bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 p-1">
                  <div className="w-full h-full bg-[#1a1a3e] rounded-2xl overflow-hidden">
                    <img
                      src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800"
                      alt="Team collaboration"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-8 -right-8 glassmorphism rounded-2xl p-6 shadow-xl">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center">
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold">200+</p>
                    <p className="text-sm text-gray-400">Projects Done</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={`space-y-8 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div>
              <h2 className="text-5xl md:text-6xl font-bold mb-6">
                About <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">GroovoTech</span>
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mb-8" />
            </div>

            <p className="text-xl text-gray-300 leading-relaxed">
              GroovoTech is a performance-first software company providing AI-powered solutions, cloud services, mobile apps, and enterprise-grade software systems.
            </p>

            <p className="text-lg text-gray-400 leading-relaxed">
              We specialize in transforming ideas into reality through innovative technology, creative design, and strategic thinking. Our mission is to empower businesses with digital solutions that drive growth and efficiency.
            </p>

            <div className="grid grid-cols-2 gap-6 pt-4">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="glassmorphism rounded-2xl p-6 hover:scale-105 transition-transform duration-300"
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <stat.icon className="w-8 h-8 text-blue-400 mb-3" />
                  <p className="text-3xl font-bold mb-1 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                    {stat.value}
                  </p>
                  <p className="text-sm text-gray-400">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
