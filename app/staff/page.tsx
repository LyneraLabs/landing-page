'use client';

import { useState } from 'react';

interface StaffMember {
  id: number;
  name: string;
  role: string;
  bio: string;
  skills: string[];
  github?: string;
  linkedin?: string;
  twitter?: string;
}

// Sample staff data - replace with your actual team members
const staffMembers: StaffMember[] = [
  {
    id: 1,
    name: 'Zach G',
    role: 'Founder & Lead Developer',
    bio: 'Passionate about building innovative solutions that make a real impact. Creator of EngX and founder of Lynera. With years of experience in full-stack development and product design, Zach leads the vision and technical direction of all Lynera projects, ensuring every product meets the highest standards of quality and usability.',
    skills: ['TypeScript', 'React', 'Node.js', 'Product Design', 'System Architecture', 'UX Design'],
    github: 'https://github.com/ZachG05',
    linkedin: '#',
    twitter: '#',
  },
  // Add more team members here
];

export default function StaffPage() {
  const [selectedStaff, setSelectedStaff] = useState<StaffMember | null>(null);

  return (
    <main className="min-h-screen pt-20">
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Team</h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Meet the talented developers and innovators behind Lynera. 
            Our team is passionate about creating exceptional products that empower teams worldwide.
          </p>
        </div>

        {/* Staff Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {staffMembers.map((member) => (
            <div
              key={member.id}
              onClick={() => setSelectedStaff(member)}
              className="p-8 bg-[#1a1a1a] rounded-xl border border-[#2a2a2a] hover:border-[#3a3a3a] transition-all cursor-pointer hover:scale-105 hover:shadow-xl"
            >
              <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full mx-auto mb-6 flex items-center justify-center text-3xl font-bold shadow-lg">
                {member.name.charAt(0)}
              </div>
              <h3 className="text-2xl font-semibold text-center mb-2">
                {member.name}
              </h3>
              <p className="text-base text-gray-400 text-center mb-6">
                {member.role}
              </p>
              <div className="flex flex-wrap gap-2 justify-center">
                {member.skills.slice(0, 3).map((skill, index) => (
                  <span
                    key={index}
                    className="px-3 py-1.5 bg-[#2a2a2a] text-sm rounded-lg"
                  >
                    {skill}
                  </span>
                ))}
                {member.skills.length > 3 && (
                  <span className="px-3 py-1.5 bg-[#2a2a2a] text-sm rounded-lg text-gray-400">
                    +{member.skills.length - 3} more
                  </span>
                )}
              </div>
              <p className="text-center text-sm text-gray-500 mt-4">Click to view full profile</p>
            </div>
          ))}
        </div>

        {/* Add more staff message */}
        <div className="mt-16 p-10 bg-gradient-to-r from-blue-500/10 to-purple-600/10 rounded-xl border border-blue-500/20 text-center">
          <h3 className="text-3xl font-semibold mb-4">Want to join our team?</h3>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
            We&apos;re always looking for talented individuals who are passionate about technology 
            and innovation. Check back soon for exciting opportunities to be part of the Lynera family.
          </p>
        </div>
      </section>

      {/* Modal for staff profile */}
      {selectedStaff && (
        <div
          className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-6 backdrop-blur-sm"
          onClick={() => setSelectedStaff(null)}
        >
          <div
            className="bg-[#1a1a1a] rounded-xl border border-[#2a2a2a] max-w-3xl w-full p-10 relative shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedStaff(null)}
              className="absolute top-6 right-6 text-gray-400 hover:text-white transition-colors"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="w-32 h-32 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full mx-auto mb-8 flex items-center justify-center text-5xl font-bold shadow-xl">
              {selectedStaff.name.charAt(0)}
            </div>

            <h2 className="text-4xl font-bold text-center mb-3">
              {selectedStaff.name}
            </h2>
            <p className="text-xl text-gray-400 text-center mb-8">
              {selectedStaff.role}
            </p>

            <p className="text-lg text-gray-300 mb-8 leading-relaxed">{selectedStaff.bio}</p>

            <div className="mb-8">
              <h3 className="text-sm font-semibold text-gray-400 mb-4 uppercase tracking-wider">Skills & Expertise</h3>
              <div className="flex flex-wrap gap-3">
                {selectedStaff.skills.map((skill, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-[#2a2a2a] rounded-lg text-base hover:bg-[#3a3a3a] transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex gap-4 justify-center pt-4">
              {selectedStaff.github && (
                <a
                  href={selectedStaff.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-3 bg-[#2a2a2a] rounded-lg hover:bg-[#3a3a3a] transition-all hover:scale-105 font-medium"
                >
                  GitHub
                </a>
              )}
              {selectedStaff.linkedin && selectedStaff.linkedin !== '#' && (
                <a
                  href={selectedStaff.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-3 bg-[#2a2a2a] rounded-lg hover:bg-[#3a3a3a] transition-all hover:scale-105 font-medium"
                >
                  LinkedIn
                </a>
              )}
              {selectedStaff.twitter && selectedStaff.twitter !== '#' && (
                <a
                  href={selectedStaff.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-3 bg-[#2a2a2a] rounded-lg hover:bg-[#3a3a3a] transition-all hover:scale-105 font-medium"
                >
                  Twitter
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
