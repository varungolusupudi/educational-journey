import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Bibliography = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  const sources = [
    {
      author: "Oakes, J.",
      year: "2005",
      title: "Keeping Track: How Schools Structure Inequality",
      publisher: "Yale University Press",
      edition: "2nd Edition",
      category: "Educational Tracking"
    },
    {
      author: "Stovall, D.",
      year: "2018",
      title: "Are We Ready for 'School' Abolition?: Thoughts and Practices of Radical Imaginary in Education",
      journal: "Taboo: The Journal of Culture and Education",
      volume: "17",
      issue: "1",
      category: "Fugitivity"
    },
    {
      author: "Philip, T. M., & Sengupta, P.",
      year: "2021",
      title: "Theories of Learning as Theories of Society: A Contrapuntal Approach to Expanding Disciplinary Education in Computing",
      journal: "Journal of the Learning Sciences",
      volume: "30",
      issue: "2",
      category: "Liberatory Computing"
    },
    {
      author: "Freire, P.",
      year: "1970",
      title: "Pedagogy of the Oppressed",
      publisher: "Continuum",
      category: "Critical Pedagogy"
    },
    {
      author: "hooks, b.",
      year: "1994",
      title: "Teaching to Transgress: Education as the Practice of Freedom",
      publisher: "Routledge",
      category: "Critical Pedagogy"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-gray-900 to-black" id="bibliography">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Bibliography</h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            Academic sources that informed and inspired this project
          </p>
        </motion.div>

        <div className="grid gap-8">
          {sources.map((source, index) => (
            <motion.div
              key={`${source.author}-${source.year}`}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              className="bg-white/5 backdrop-blur-sm rounded-xl p-6"
            >
              <div className="flex flex-wrap items-start justify-between">
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-2">
                    {source.author} ({source.year})
                  </h3>
                  <p className="text-purple-300 font-semibold mb-2">
                    {source.title}
                  </p>
                  <p className="text-gray-400">
                    {source.journal ? (
                      <>
                        {source.journal}, {source.volume}({source.issue})
                      </>
                    ) : (
                      <>
                        {source.publisher}
                        {source.edition && `, ${source.edition}`}
                      </>
                    )}
                  </p>
                </div>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-purple-500/20 text-purple-300 mt-2 md:mt-0">
                  {source.category}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Bibliography; 