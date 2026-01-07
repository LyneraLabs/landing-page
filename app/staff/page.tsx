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
    bio: 'Passionate about building innovative solutions. Creator of EngX and founder of Lynera.',
    skills: ['TypeScript', 'React', 'Node.js', 'Product Design'],
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
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-4">Our Team</h1>
          <p className="text-xl text-gray-400">
            Meet the talented developers behind Lynera
          </p>
        </div>

        {/* Staff Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {staffMembers.map((member) => (
            <div
              key={member.id}
              onClick={() => setSelectedStaff(member)}
              className="p-6 bg-[#1a1a1a] rounded-lg border border-[#2a2a2a] hover:border-[#3a3a3a] transition-all cursor-pointer hover:scale-105"
            >
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center text-2xl font-bold">
                {member.name.charAt(0)}
              </div>
              <h3 className="text-xl font-semibold text-center mb-1">
                {member.name}
              </h3>
              <p className="text-sm text-gray-400 text-center mb-4">
                {member.role}
              </p>
              <div className="flex flex-wrap gap-2 justify-center">
                {member.skills.slice(0, 3).map((skill, index) => (
                  <span
                    key={index}
                    className="px-2 py-1 bg-[#2a2a2a] text-xs rounded"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Add more staff message */}
        <div className="mt-12 p-8 bg-[#1a1a1a] rounded-lg border border-[#2a2a2a] text-center">
          <h3 className="text-xl font-semibold mb-2">Want to join our team?</h3>
          <p className="text-gray-400">
            We&apos;re always looking for talented individuals. Check back for opportunities.
          </p>
        </div>
      </section>

      {/* Modal for staff profile */}
      {selectedStaff && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-6"
          onClick={() => setSelectedStaff(null)}
        >
          <div
            className="bg-[#1a1a1a] rounded-lg border border-[#2a2a2a] max-w-2xl w-full p-8 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedStaff(null)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full mx-auto mb-6 flex items-center justify-center text-3xl font-bold">
              {selectedStaff.name.charAt(0)}
            </div>

            <h2 className="text-3xl font-bold text-center mb-2">
              {selectedStaff.name}
            </h2>
            <p className="text-lg text-gray-400 text-center mb-6">
              {selectedStaff.role}
            </p>

            <p className="text-gray-300 mb-6">{selectedStaff.bio}</p>

            <div className="mb-6">
              <h3 className="text-sm font-semibold text-gray-400 mb-3">SKILLS</h3>
              <div className="flex flex-wrap gap-2">
                {selectedStaff.skills.map((skill, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-[#2a2a2a] rounded text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex gap-4 justify-center">
              {selectedStaff.github && (
                <a
                  href={selectedStaff.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-2 bg-[#2a2a2a] rounded-lg hover:bg-[#3a3a3a] transition-colors"
                >
                  GitHub
                </a>
              )}
              {selectedStaff.linkedin && selectedStaff.linkedin !== '#' && (
                <a
                  href={selectedStaff.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-2 bg-[#2a2a2a] rounded-lg hover:bg-[#3a3a3a] transition-colors"
                >
                  LinkedIn
                </a>
              )}
              {selectedStaff.twitter && selectedStaff.twitter !== '#' && (
                <a
                  href={selectedStaff.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-2 bg-[#2a2a2a] rounded-lg hover:bg-[#3a3a3a] transition-colors"
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
