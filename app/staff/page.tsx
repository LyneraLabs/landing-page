'use client';

import { useState } from 'react';

interface TeamMember {
  id: number;
  name: string;
  role: string;
  bio: string;
  avatar: string;
  skills: string[];
  linkedin?: string;
  github?: string;
}

const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: 'John Doe',
    role: 'CEO & Founder',
    bio: 'Visionary leader with over 15 years of experience in technology and innovation. Passionate about building products that make a difference.',
    avatar: '👨‍💼',
    skills: ['Leadership', 'Strategy', 'Product Vision', 'Business Development'],
    linkedin: '#',
    github: '#',
  },
  {
    id: 2,
    name: 'Jane Smith',
    role: 'Lead Developer',
    bio: 'Full-stack developer with expertise in modern web technologies. Specializes in building scalable and performant applications.',
    avatar: '👩‍💻',
    skills: ['React', 'Node.js', 'TypeScript', 'Cloud Architecture'],
    linkedin: '#',
    github: '#',
  },
  {
    id: 3,
    name: 'Mike Johnson',
    role: 'Senior Engineer',
    bio: 'Backend specialist focused on creating robust and efficient systems. Enthusiast of clean code and best practices.',
    avatar: '👨‍🔧',
    skills: ['Python', 'Go', 'Microservices', 'DevOps'],
    linkedin: '#',
    github: '#',
  },
  {
    id: 4,
    name: 'Sarah Williams',
    role: 'UX/UI Designer',
    bio: 'Creative designer with a keen eye for detail and user experience. Dedicated to creating beautiful and intuitive interfaces.',
    avatar: '👩‍🎨',
    skills: ['UI Design', 'UX Research', 'Figma', 'Design Systems'],
    linkedin: '#',
    github: '#',
  },
  {
    id: 5,
    name: 'David Chen',
    role: 'DevOps Engineer',
    bio: 'Infrastructure expert ensuring smooth deployments and reliable systems. Passionate about automation and continuous improvement.',
    avatar: '👨‍🚀',
    skills: ['Kubernetes', 'AWS', 'CI/CD', 'Monitoring'],
    linkedin: '#',
    github: '#',
  },
  {
    id: 6,
    name: 'Emily Brown',
    role: 'Product Manager',
    bio: 'Strategic thinker bridging technology and business. Focuses on delivering value to users and driving product success.',
    avatar: '👩‍💼',
    skills: ['Product Strategy', 'Agile', 'User Research', 'Analytics'],
    linkedin: '#',
    github: '#',
  },
];

export default function Staff() {
  const [selectedMember, setSelectedMember] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-purple-950/20 to-black">
      {/* Header */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-white mb-6 animate-fadeIn">
            Our Team
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto animate-fadeIn">
            Meet the talented individuals driving innovation at Lynera
          </p>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {teamMembers.map((member) => (
              <div
                key={member.id}
                onClick={() => setSelectedMember(selectedMember === member.id ? null : member.id)}
                className={`p-6 rounded-xl cursor-pointer transition-all duration-300 transform hover:scale-105 ${
                  selectedMember === member.id
                    ? 'bg-gradient-to-br from-purple-900/60 to-violet-900/40 border-2 border-purple-500'
                    : 'bg-gradient-to-br from-purple-900/30 to-violet-900/20 border border-purple-500/20 hover:border-purple-500/40'
                }`}
              >
                {/* Avatar */}
                <div className="flex justify-center mb-4">
                  <div className="w-24 h-24 gradient-purple rounded-full flex items-center justify-center text-5xl shadow-lg">
                    {member.avatar}
                  </div>
                </div>

                {/* Basic Info */}
                <h3 className="text-xl font-bold text-white text-center mb-1">
                  {member.name}
                </h3>
                <p className="text-purple-400 text-center mb-4 font-semibold">
                  {member.role}
                </p>

                {/* Expanded Content */}
                {selectedMember === member.id && (
                  <div className="mt-4 animate-fadeIn">
                    <p className="text-gray-300 text-sm mb-4">
                      {member.bio}
                    </p>

                    {/* Skills */}
                    <div className="mb-4">
                      <h4 className="text-white font-semibold mb-2 text-sm">Skills</h4>
                      <div className="flex flex-wrap gap-2">
                        {member.skills.map((skill, index) => (
                          <span
                            key={index}
                            className="px-3 py-1 bg-purple-500/20 text-purple-300 text-xs rounded-full"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Social Links */}
                    <div className="flex gap-3 justify-center">
                      {member.linkedin && (
                        <a
                          href={member.linkedin}
                          onClick={(e) => e.stopPropagation()}
                          className="p-2 bg-purple-500/20 rounded-lg hover:bg-purple-500/30 transition-colors"
                        >
                          <svg className="w-5 h-5 text-purple-400" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                          </svg>
                        </a>
                      )}
                      {member.github && (
                        <a
                          href={member.github}
                          onClick={(e) => e.stopPropagation()}
                          className="p-2 bg-purple-500/20 rounded-lg hover:bg-purple-500/30 transition-colors"
                        >
                          <svg className="w-5 h-5 text-purple-400" fill="currentColor" viewBox="0 0 24 24">
                            <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                          </svg>
                        </a>
                      )}
                    </div>
                  </div>
                )}

                {/* Click indicator */}
                <div className="mt-4 text-center">
                  <span className="text-purple-400 text-xs">
                    {selectedMember === member.id ? 'Click to collapse' : 'Click to expand'}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Us Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Want to Join Our Team?
          </h2>
          <p className="text-gray-400 mb-8">
            We're always looking for talented individuals to join our growing team. If you're passionate about technology and innovation, we'd love to hear from you!
          </p>
          <button className="px-8 py-4 gradient-purple text-white font-semibold rounded-lg shadow-lg hover:shadow-purple-500/50 transition-all duration-300 transform hover:scale-105">
            View Open Positions
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-purple-900/20 bg-black/50">
        <div className="max-w-6xl mx-auto text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Lynera. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
