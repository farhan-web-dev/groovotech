'use client';

import { useState, useEffect, useRef } from 'react';
import { Brain, Smartphone, Globe, Cloud, Palette, Building2, Plug, Wrench } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const services = [
  {
    icon: Brain,
    title: 'AI Solutions & Automation',
    description: 'Intelligent automation, machine learning models, and AI-powered systems tailored to your business needs.',
    gradient: 'from-blue-500 to-cyan-500'
  },
  {
    icon: Smartphone,
    title: 'Mobile Application Development',
    description: 'Native and cross-platform mobile apps with seamless user experiences for iOS and Android.',
    gradient: 'from-purple-500 to-pink-500'
  },
  {
    icon: Globe,
    title: 'Web Application Development',
    description: 'Modern, responsive web applications built with cutting-edge technologies and frameworks.',
    gradient: 'from-green-500 to-emerald-500'
  },
  {
    icon: Cloud,
    title: 'Cloud & AWS Services',
    description: 'Scalable cloud infrastructure, serverless architecture, and AWS deployment solutions.',
    gradient: 'from-orange-500 to-red-500'
  },
  {
    icon: Palette,
    title: 'Graphic Designing & Branding',
    description: 'Creative designs, brand identity, and visual solutions that make your business stand out.',
    gradient: 'from-pink-500 to-rose-500'
  },
  {
    icon: Building2,
    title: 'Custom Enterprise Software',
    description: 'Enterprise-grade software solutions designed to streamline your business operations.',
    gradient: 'from-indigo-500 to-blue-500'
  },
  {
    icon: Plug,
    title: 'API Development & Integrations',
    description: 'RESTful APIs, third-party integrations, and seamless system connectivity.',
    gradient: 'from-cyan-500 to-teal-500'
  },
  {
    icon: Wrench,
    title: 'Maintenance & Support',
    description: '24/7 technical support, updates, and ongoing maintenance for your digital products.',
    gradient: 'from-amber-500 to-yellow-500'
  }
];

export default function Services() {
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
    <section id="services" ref={sectionRef} className="relative py-24 px-6">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a1f] via-[#1a1a3e] to-[#0a0a1f]" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Our <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Comprehensive digital solutions powered by cutting-edge technology and innovative thinking
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card
              key={index}
              className={`group relative bg-transparent border-gray-800 hover:border-gray-600 transition-all duration-500 hover:scale-105 hover:shadow-2xl ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{
                transitionDelay: `${index * 100}ms`,
                background: 'rgba(26, 26, 62, 0.4)',
                backdropFilter: 'blur(10px)'
              }}
            >
              <CardHeader>
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="w-7 h-7 text-white" />
                </div>
                <CardTitle className="text-xl mb-2 group-hover:text-blue-400 transition-colors">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-400 leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardContent>

              <div className={`absolute inset-0 rounded-lg bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
