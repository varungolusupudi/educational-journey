import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Achievements = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  const achievements = [
    {
      title: "Teaching Impact",
      stat: "360+",
      description: "Students mentored in C and Python programming",
      icon: "👨‍🏫",
      color: "from-blue-500/20 to-cyan-500/20"
    },
    {
      title: "Startup Success",
      stat: "1%",
      description: "Acceptance rate into Berkeley SkyDeck's Pad-13 Program",
      icon: "🚀",
      color: "from-purple-500/20 to-pink-500/20"
    },
    {
      title: "Academic Excellence",
      stat: "9.25",
      description: "CGPA in Business/Commerce before pivoting to CS",
      icon: "📚",
      color: "from-green-500/20 to-emerald-500/20"
    },
    {
      title: "Leadership",
      stat: "4",
      description: "Active club memberships including Competitive Programming",
      icon: "🎾",
      color: "from-yellow-500/20 to-orange-500/20"
    }
  ];

  const skills = [
    {
      category: "Languages",
      items: ["Python", "C", "JavaScript", "TypeScript", "Dart"]
    },
    {
      category: "Frontend",
      items: ["React", "Flutter", "Tailwind CSS", "Framer Motion"]
    },
    {
      category: "Backend",
      items: ["Node.js", "Express", "CCaaS", "DevOps"]
    },
    {
      category: "Tools",
      items: ["Git", "Docker", "AWS", "Salesforce"]
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Milestones & Skills</h2>
          <p className="text-gray-400 text-lg">Tracking growth through numbers and knowledge</p>
        </motion.div>

        {/* Achievement Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              className={`p-6 rounded-xl bg-gradient-to-br ${achievement.color} backdrop-blur-sm`}
            >
              <div className="text-4xl mb-4">{achievement.icon}</div>
              <h3 className="text-2xl font-bold text-white mb-2">{achievement.stat}</h3>
              <p className="text-lg font-semibold text-white/90 mb-2">{achievement.title}</p>
              <p className="text-gray-300">{achievement.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skillGroup, index) => (
            <motion.div
              key={skillGroup.category}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: index * 0.2 + 0.4, duration: 0.8 }}
              className="p-6 rounded-xl bg-white/5 backdrop-blur-sm"
            >
              <h3 className="text-xl font-semibold text-white mb-4">{skillGroup.category}</h3>
              <div className="flex flex-wrap gap-2">
                {skillGroup.items.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 rounded-full text-sm font-medium bg-white/10 text-white hover:bg-white/20 transition-colors duration-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements; 