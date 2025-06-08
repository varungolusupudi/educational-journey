import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const CourseConnections = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  const connections = [
    {
      theme: "Educational Tracking",
      description: "My experience in the Indian education system reflects Oakes' analysis of how tracking reproduces social inequalities. Like many students, I was initially channeled into a predetermined path based on early academic performance.",
      quote: "Tracking not only reflects but helps to reproduce social inequalities... [it] appears to foster lower self-esteem among students placed in lower tracks.",
      source: "Oakes, J. (2005). Keeping Track: How Schools Structure Inequality",
      color: "from-red-500/20 to-orange-500/20"
    },
    {
      theme: "Fugitivity in Education",
      description: "My journey through sports and later computer science exemplifies Stovall's concept of fugitivity - finding alternative spaces for growth and learning outside traditional academic structures.",
      quote: "Fugitivity represents both escape from oppressive structures and the creation of new possibilities for learning and being.",
      source: "Stovall, D. (2018). Are We Ready for 'School' Abolition?",
      color: "from-blue-500/20 to-purple-500/20"
    },
    {
      theme: "Liberatory Computing",
      description: "Through teaching and developing AequitasAI, I'm engaging with Philip & Sengupta's vision of computing as a tool for liberation and social change.",
      quote: "Computing education must create spaces for students to imagine and create alternative futures.",
      source: "Philip & Sengupta (2021). Contrapuntal Computing",
      color: "from-green-500/20 to-teal-500/20"
    }
  ];

  const targetAudience = {
    primary: [
      "Students experiencing educational tracking",
      "International students navigating academic transitions",
      "Aspiring technologists from non-traditional backgrounds",
      "Educators interested in alternative teaching approaches"
    ],
    impact: [
      "Share personal narrative as inspiration",
      "Provide practical strategies for academic navigation",
      "Demonstrate the possibility of educational transformation",
      "Offer resources and connection opportunities"
    ]
  };

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
          <h2 className="text-4xl font-bold text-white mb-4">Course Connections</h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            Exploring how my journey intersects with key course themes and readings
          </p>
        </motion.div>

        {/* Target Audience Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="bg-white/5 backdrop-blur-sm rounded-xl p-8 mb-16"
        >
          <h3 className="text-2xl font-bold text-white mb-6">Target Audience & Impact</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-xl font-semibold text-purple-300 mb-4">Primary Audience</h4>
              <ul className="space-y-3">
                {targetAudience.primary.map((item, index) => (
                  <li key={index} className="flex items-center text-gray-300">
                    <span className="mr-2">👥</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-semibold text-purple-300 mb-4">Intended Impact</h4>
              <ul className="space-y-3">
                {targetAudience.impact.map((item, index) => (
                  <li key={index} className="flex items-center text-gray-300">
                    <span className="mr-2">🎯</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Course Themes */}
        <div className="space-y-8">
          {connections.map((connection, index) => (
            <motion.div
              key={connection.theme}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              transition={{ delay: 0.4 + index * 0.2, duration: 0.8 }}
              className={`p-8 rounded-xl bg-gradient-to-br ${connection.color}`}
            >
              <h3 className="text-2xl font-bold text-white mb-4">{connection.theme}</h3>
              <p className="text-gray-200 mb-6">{connection.description}</p>
              <blockquote className="border-l-4 border-white/30 pl-4 italic text-gray-300 mb-4">
                {connection.quote}
              </blockquote>
              <p className="text-sm text-gray-400">{connection.source}</p>
            </motion.div>
          ))}
        </div>

        {/* Bibliography Button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mt-12 text-center"
        >
          <a
            href="#"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-black bg-white hover:bg-gray-100 transition-colors duration-300"
          >
            View Full Bibliography
            <svg className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M6.293 3.293a1 1 0 011.414 0L14.414 10l-6.707 6.707a1 1 0 01-1.414-1.414L11.586 10 6.293 4.707a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default CourseConnections; 