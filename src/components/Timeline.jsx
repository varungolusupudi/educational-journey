import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Timeline = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  const timelineEvents = [
    {
      year: '2007-2019',
      title: 'Early Education',
      description: 'Balanced tennis and academics at Jubilee Hills Public School',
      theme: 'tracking',
      color: 'bg-red-500'
    },
    {
      year: '2018-2019',
      title: 'Sports Leadership',
      description: 'Served as Sports Secretary, organizing competitions and leading teams',
      theme: 'fugitivity',
      color: 'bg-blue-500'
    },
    {
      year: '2021',
      title: 'UCSC Journey Begins',
      description: 'Started Computer Science at UCSC, joining competitive programming and Indian Student Association',
      theme: 'liberation',
      color: 'bg-green-500'
    },
    {
      year: '2023-2024',
      title: 'Teaching & Mentoring',
      description: 'Group Tutor and Reader for CSE courses, guiding 360+ students',
      theme: 'fugitivity',
      color: 'bg-yellow-500'
    },
    {
      year: '2024',
      title: 'Tech Innovation',
      description: 'Co-founded AequitasAI at Berkeley SkyDeck to democratize legal access',
      theme: 'liberation',
      color: 'bg-purple-500'
    }
  ];

  return (
    <div ref={ref} className="py-16">
      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 1 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <h2 className="text-3xl font-bold text-white mb-12 text-center">Journey Timeline</h2>
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-700" />
          
          {/* Timeline events */}
          {timelineEvents.map((event, index) => (
            <motion.div
              key={event.year}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              className={`relative mb-12 ${index % 2 === 0 ? 'text-right pr-8 md:ml-auto md:pl-8' : 'text-left pl-8'}`}
            >
              <div className={`flex items-center ${index % 2 === 0 ? 'justify-end' : 'justify-start'}`}>
                {/* Year bubble */}
                <div className={`absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full ${event.color}`} />
                
                {/* Content */}
                <div className="w-5/12">
                  <div className={`p-4 rounded-lg bg-white/5 backdrop-blur-sm ${index % 2 === 0 ? 'mr-8' : 'ml-8'}`}>
                    <span className="text-sm font-semibold text-gray-400">{event.year}</span>
                    <h3 className="text-xl font-bold text-white mt-1">{event.title}</h3>
                    <p className="text-gray-300 mt-2">{event.description}</p>
                    <span className={`inline-block mt-2 px-2 py-1 rounded-full text-xs font-medium
                      ${event.theme === 'tracking' ? 'bg-red-500/20 text-red-200' :
                        event.theme === 'fugitivity' ? 'bg-blue-500/20 text-blue-200' :
                        'bg-green-500/20 text-green-200'}`}>
                      #{event.theme}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Timeline; 