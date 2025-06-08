import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const FutureVision = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900 to-black">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-500/20 via-transparent to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Looking Forward</h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            As I prepare to graduate in June 2025, I'm excited to continue my journey of growth and impact
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Salesforce Journey */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="bg-white/5 backdrop-blur-sm rounded-xl p-8"
          >
            <div className="flex items-center mb-6">
              <img
                src="/images/salesforce-logo.png"
                alt="Salesforce"
                className="w-12 h-12 mr-4"
              />
              <h3 className="text-2xl font-bold text-white">Return to Salesforce</h3>
            </div>
            <p className="text-gray-300 mb-6">
              Excited to rejoin Salesforce as a Software Engineer after graduation, building on my previous
              experience with CCaaS and Service Cloud Voice to create impactful enterprise solutions.
            </p>
            <div className="space-y-3">
              <div className="flex items-center text-gray-200">
                <span className="mr-2">🎯</span>
                <span>Contributing to Service Cloud innovations</span>
              </div>
              <div className="flex items-center text-gray-200">
                <span className="mr-2">🔄</span>
                <span>Full-stack development with enterprise scale</span>
              </div>
              <div className="flex items-center text-gray-200">
                <span className="mr-2">🌱</span>
                <span>Growing in a Fortune 500 tech environment</span>
              </div>
            </div>
          </motion.div>

          {/* Personal Growth */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="space-y-8"
          >
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8">
              <h3 className="text-2xl font-bold text-white mb-4">Continuing Education</h3>
              <p className="text-gray-300 mb-6">
                Committed to ongoing learning and professional development while working
              </p>
              <div className="space-y-3">
                <div className="flex items-center text-gray-200">
                  <span className="mr-2">📚</span>
                  <span>Advanced software architecture patterns</span>
                </div>
                <div className="flex items-center text-gray-200">
                  <span className="mr-2">🤖</span>
                  <span>AI/ML integration in enterprise systems</span>
                </div>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8">
              <h3 className="text-2xl font-bold text-white mb-4">Community Impact</h3>
              <p className="text-gray-300 mb-6">
                Planning to continue mentoring and contributing to tech education
              </p>
              <div className="space-y-3">
                <div className="flex items-center text-gray-200">
                  <span className="mr-2">👥</span>
                  <span>Mentoring early-career developers</span>
                </div>
                <div className="flex items-center text-gray-200">
                  <span className="mr-2">🌍</span>
                  <span>Contributing to open-source projects</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FutureVision; 