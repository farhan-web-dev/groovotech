"use client";

import { Card, CardContent } from "@/components/ui/card";

const team = [
  {
    name: "Engr Hissam Umair",
    role: "Founder & Software Engineer, Groovo Tech",
    image: "/founder.jpg", // put this in public folder
    bio: "Hissam is a seasoned software engineer and entrepreneur who founded Groovo Tech with a mission to revolutionize the technology landscape. With a strong passion for innovation and a keen eye for detail, Hissam leads the company's strategic direction and drives the development of cutting-edge software solutions. His expertise in software engineering, combined with his leadership skills, enables Groovo Tech to deliver exceptional products and services that exceed client expectations.",
  },
  {
    name: "Engr Mubashir",
    role: "Co-Founder & Software Engineer, Groovo Tech",
    image: "/cofounder.jpg", // put this in public folder
    bio: "Mubashir is a skilled software engineer and co-founder of Groovo Tech, bringing a wealth of technical expertise and innovative thinking to the company. With a strong background in software development, Mubashir plays a key role in driving the company's product development and engineering efforts. His collaborative approach and commitment to excellence make him a valuable asset to the Groovo Tech team, ensuring the delivery of high-quality software solutions that meet the evolving needs of clients.",
  },
];

export default function ProfilePage() {
  return (
    <main className="min-h-screen bg-[#0a0a1f] text-white overflow-x-hidden py-24 px-6">
      {/* Header */}
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          Our{" "}
          <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Team
          </span>
        </h1>
        <p className="text-xl text-gray-400 max-w-3xl mx-auto">
          Meet the founders driving our company forward and shaping the future.
        </p>
      </div>

      {/* Team Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
        {team.map((member, index) => (
          <Card
            key={index}
            className="relative overflow-hidden bg-transparent border-gray-800 hover:border-gray-600 transition-all duration-500 hover:scale-[1.02]"
            style={{
              background: "rgba(26, 26, 62, 0.5)",
              backdropFilter: "blur(12px)",
            }}
          >
            <CardContent className="p-6 text-center flex flex-col items-center">
              {/* Circular Image */}
              <div className="w-40 h-40 mb-6 rounded-full overflow-hidden border-4 border-purple-500 shadow-lg transition-transform duration-500 hover:scale-105">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>

              <h3 className="text-2xl text-white font-bold mb-2">{member.name}</h3>
              <p className="text-purple-400 mb-4 font-semibold">
                {member.role}
              </p>
              <p className="text-gray-400 leading-relaxed">{member.bio}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Mission / Why Choose Us Section */}
      <section className="mt-24 max-w-5xl mx-auto text-center px-4">
        <h2 className="text-4xl font-bold mb-6">
          Why Choose{" "}
          <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Us
          </span>
        </h2>
        <p className="text-gray-400 text-lg mb-4">
          We combine innovation, experience, and passion to deliver top-notch
          solutions for our clients. Our team is dedicated to creating products
          that solve real-world problems efficiently.
        </p>
        <p className="text-gray-400 text-lg">
          With a strong focus on collaboration, creativity, and cutting-edge
          technology, we ensure that every project exceeds expectations and
          drives meaningful impact.
        </p>
      </section>
    </main>
  );
}
