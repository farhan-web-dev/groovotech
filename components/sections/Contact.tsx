"use client";

import { useState, useEffect, useRef } from "react";
import { Mail, Phone, MapPin, Send, Linkedin, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Contact() {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <section id="contact" ref={sectionRef} className="relative py-24 px-6">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a1f] via-[#1a1a3e] to-[#0a0a1f]" />

      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl" />
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Get In{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Touch
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Ready to transform your ideas into reality? Let's discuss your
            project
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div
            className={`lg:col-span-2 transition-all duration-1000 delay-200 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <Card
              className="bg-transparent border-gray-800"
              style={{
                background: "rgba(26, 26, 62, 0.6)",
                backdropFilter: "blur(10px)",
              }}
            >
              <CardHeader>
                <CardTitle className="text-2xl">Send us a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium mb-2 text-gray-300"
                    >
                      Name
                    </label>
                    <Input
                      id="name"
                      type="text"
                      placeholder="Your name"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="bg-[#1a1a3e] border-gray-700 focus:border-blue-500 text-white"
                      required
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium mb-2 text-gray-300"
                    >
                      Email
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="bg-[#1a1a3e] border-gray-700 focus:border-blue-500 text-white"
                      required
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium mb-2 text-gray-300"
                    >
                      Message
                    </label>
                    <Textarea
                      id="message"
                      placeholder="Tell us about your project..."
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      className="bg-[#1a1a3e] border-gray-700 focus:border-blue-500 text-white min-h-[150px]"
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                  >
                    Send Message
                    <Send className="ml-2 w-5 h-5" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          <div
            className={`space-y-6 transition-all duration-1000 delay-400 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <Card
              className="bg-transparent border-gray-800 hover:border-blue-500 transition-colors"
              style={{
                background: "rgba(26, 26, 62, 0.6)",
                backdropFilter: "blur(10px)",
              }}
            >
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2 text-lg">Email Us</h3>
                    <p className="text-gray-400 text-sm">
                      hissamyousafzai@gmail.com
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card
              className="bg-transparent border-gray-800 hover:border-purple-500 transition-colors"
              style={{
                background: "rgba(26, 26, 62, 0.6)",
                backdropFilter: "blur(10px)",
              }}
            >
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2 text-lg">Call Us</h3>
                    <p className="text-gray-400 text-sm">+923554962991</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card
              className="bg-transparent border-gray-800 hover:border-green-500 transition-colors"
              style={{
                background: "rgba(26, 26, 62, 0.6)",
                backdropFilter: "blur(10px)",
              }}
            >
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2 text-lg">Location</h3>
                    <p className="text-gray-400 text-sm">Remote</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card
              className="bg-transparent border-gray-800"
              style={{
                background: "rgba(26, 26, 62, 0.6)",
                backdropFilter: "blur(10px)",
              }}
            >
              <CardContent className="p-6">
                <h3 className="font-semibold mb-4 text-lg">Follow Us</h3>
                <div className="flex gap-4">
                  <a
                    href="https://www.linkedin.com/search/results/all/?heroEntityKey=urn%3Ali%3Aorganization%3A109731334&keywords=Groovo%20Tech"
                    className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center hover:scale-110 transition-transform"
                  >
                    <Linkedin className="w-6 h-6 text-white" />
                  </a>
                  {/* <a
                    href="#"
                    className="w-12 h-12 rounded-xl bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center hover:scale-110 transition-transform"
                  >
                    <Github className="w-6 h-6 text-white" />
                  </a> */}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
