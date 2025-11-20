'use client';

import { useState, useEffect, useRef } from 'react';
import { Brain, Users, Zap, Code2 } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const features = [
  {
    icon: Brain,
    title: 'AI-Driven Approach',
    description: 'Leveraging cutting-edge AI and machine learning to create intelligent, adaptive solutions that evolve with your needs.',
    gradient: 'from-blue-500 to-cyan-500'
  },
  {
    icon: Users,
    title: 'Experienced Developers',
    description: 'A team of seasoned professionals with expertise across multiple technologies and industries.',
    gradient: 'from-purple-500 to-pink-500'
  },
  {
    icon: Zap,
    title: 'Fast Delivery',
    description: 'Agile methodology and efficient workflows ensure rapid development without compromising quality.',
    gradient: 'from-green-500 to-emerald-500'
  },
  {
    icon: Code2,
    title: 'Modern Tech Stack',
    description: 'Built with the latest technologies, frameworks, and best practices for optimal performance and scalability.',
    gradient: 'from-orange-500 to-red-500'
  }
];

export default function WhyChooseUs() {
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
    <section id="why-choose-us" ref={sectionRef} className="relative py-24 px-6">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a1f] via-[#1a1a3e] to-[#0a0a1f]" />

      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-10 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl" />
        <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Why Choose <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">GroovoTech</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            We combine innovation, expertise, and efficiency to deliver exceptional digital solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card
              key={index}
              className={`group relative overflow-hidden bg-transparent border-gray-800 hover:border-gray-600 transition-all duration-500 hover:scale-105 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{
                transitionDelay: `${index * 100}ms`,
                background: 'rgba(26, 26, 62, 0.6)',
                backdropFilter: 'blur(10px)'
              }}
            >
              <CardHeader>
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-2xl mb-3 group-hover:text-blue-400 transition-colors">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400 leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>

              <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />

              <div className={`absolute -bottom-20 -right-20 w-40 h-40 bg-gradient-to-br ${feature.gradient} rounded-full opacity-20 blur-3xl group-hover:opacity-40 transition-opacity duration-300`} />
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
