import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const FinalSection = () => {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  const [showForm, setShowForm] = useState(false);

  const resources = [
    {
      title: "Understanding Educational Tracking",
      author: "Jeannie Oakes",
      link: "https://example.com/tracking",
      description: "A comprehensive guide to understanding and challenging tracking systems in education."
    },
    {
      title: "Fugitive Pedagogy",
      author: "David Stovall",
      link: "https://example.com/fugitive",
      description: "Exploring alternative educational spaces and resistance in learning."
    },
    {
      title: "Critical Digital Pedagogy",
      author: "Philip & Sengupta",
      link: "https://example.com/digital",
      description: "Reimagining technology's role in liberatory education."
    }
  ];

  return (
    <section ref={ref} className="relative min-h-screen bg-gradient-to-br from-purple-900 to-black py-32">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-purple-500/20 via-transparent to-transparent" />
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
      >
        <motion.h2
          initial={{ y: 50, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold text-white mb-8"
        >
          Embracing Educational Liberation
        </motion.h2>

        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="max-w-3xl mx-auto space-y-8"
        >
          <p className="text-xl text-gray-300 leading-relaxed">
            My journey from being tracked in India to finding liberation through technology
            reflects the transformative power of education when we dare to question,
            resist, and reimagine learning spaces.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 transform hover:scale-105 transition-transform duration-300">
              <h3 className="text-xl font-semibold text-purple-400 mb-4">Tracking</h3>
              <p className="text-gray-300">
                From experiencing the limitations of rigid educational sorting
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 transform hover:scale-105 transition-transform duration-300">
              <h3 className="text-xl font-semibold text-blue-400 mb-4">Fugitivity</h3>
              <p className="text-gray-300">
                Through finding spaces of resistance and alternative paths
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 transform hover:scale-105 transition-transform duration-300">
              <h3 className="text-xl font-semibold text-green-400 mb-4">Liberation</h3>
              <p className="text-gray-300">
                To reclaiming agency over my learning journey
              </p>
            </div>
          </div>

          <blockquote className="text-2xl italic text-gray-200 mt-16">
            "Education is not preparation for life; education is life itself."
            <span className="block text-sm mt-2 text-gray-400">- John Dewey</span>
          </blockquote>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="mt-12"
          >
            <a
              href="#"
              className="inline-flex items-center px-8 py-4 border border-transparent text-lg font-medium rounded-md text-black bg-white hover:bg-gray-100 transition-colors duration-300"
            >
              Continue the Conversation
              <svg className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </a>
          </motion.div>
        </motion.div>

        {/* Resources Section */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-16 bg-white/5 backdrop-blur-sm rounded-xl p-8"
        >
          <h3 className="text-2xl font-semibold text-white mb-6">Further Reading & Resources</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {resources.map((resource, index) => (
              <div key={index} className="bg-white/5 rounded-lg p-6 text-left">
                <h4 className="text-xl font-medium text-purple-300 mb-2">{resource.title}</h4>
                <p className="text-sm text-gray-300 mb-2">By {resource.author}</p>
                <p className="text-gray-400 mb-4">{resource.description}</p>
                <a 
                  href={resource.link}
                  className="text-purple-400 hover:text-purple-300 transition-colors duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Learn More →
                </a>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Share Your Story Section */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mt-16"
        >
          <button
            onClick={() => setShowForm(!showForm)}
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 transition-colors duration-300"
          >
            Share Your Educational Journey
          </button>

          {showForm && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-8 max-w-2xl mx-auto"
            >
              <form className="space-y-6 text-left">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="mt-1 block w-full rounded-md bg-white/10 border-transparent focus:border-purple-500 focus:bg-white/20 focus:ring-0 text-white"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="story" className="block text-sm font-medium text-gray-300">
                    Your Story
                  </label>
                  <textarea
                    id="story"
                    rows={4}
                    className="mt-1 block w-full rounded-md bg-white/10 border-transparent focus:border-purple-500 focus:bg-white/20 focus:ring-0 text-white"
                    placeholder="Share your educational journey..."
                  />
                </div>
                <div>
                  <button
                    type="submit"
                    className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-black bg-white hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
                  >
                    Submit Your Story
                  </button>
                </div>
              </form>
            </motion.div>
          )}
        </motion.div>

        {/* Social Sharing */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="mt-16"
        >
          <h3 className="text-xl font-semibold text-white mb-4">Share This Journey</h3>
          <div className="flex justify-center space-x-4">
            {['Twitter', 'Facebook', 'LinkedIn'].map((platform) => (
              <button
                key={platform}
                className="px-4 py-2 bg-white/10 rounded-md text-white hover:bg-white/20 transition-colors duration-300"
              >
                Share on {platform}
              </button>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default FinalSection; 