// pages/index.js
import { motion } from 'framer-motion';
import Head from 'next/head';
import Link from 'next/link';
import { fadeIn, staggerContainer, floatingAnimation, gradientText } from '../utils/animations';

export default function Home() {
  return (
    <>
      <Head>
        <title>Financial Multiverse - Your Gateway to Vibe-Based Investing</title>
        <meta name="description" content="Discover your investing persona and start your financial journey" />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-b from-gray-900 via-purple-900 to-gray-800 text-white overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('/grid.svg')] opacity-10" />
          <motion.div
            className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500 rounded-full filter blur-3xl opacity-20"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.2, 0.3, 0.2],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-pink-500 rounded-full filter blur-3xl opacity-20"
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.3, 0.2, 0.3],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>

        <main className="container mx-auto px-4 py-16 relative z-10">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate="animate"
            className="text-center"
          >
            <motion.h1 
              variants={fadeIn}
              className="text-5xl md:text-7xl font-bold mb-8"
              style={{
                background: 'linear-gradient(90deg, #8B5CF6, #EC4899, #8B5CF6)',
                backgroundSize: '200% auto',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                animation: 'gradient 3s linear infinite'
              }}
            >
              Welcome to the Financial Multiverse
            </motion.h1>
            
            <motion.p 
              variants={fadeIn}
              className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto mb-12"
            >
              Where your investing journey meets your unique vibe. Discover your financial persona and unlock your potential.
            </motion.p>

            <motion.div
              variants={fadeIn}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link href="/persona">
                <button className="relative px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-lg font-semibold overflow-hidden group">
                  <span className="relative z-10">Discover Your Investing Persona</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </button>
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate="animate"
            className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              {
                title: "Innovative Investing",
                description: "Discover cutting-edge investment strategies tailored to your style.",
                icon: "🚀"
              },
              {
                title: "Vibe-Based Approach",
                description: "Match your investments with your personality and goals.",
                icon: "🎯"
              },
              {
                title: "Future-Ready",
                description: "Stay ahead with AI-powered insights and recommendations.",
                icon: "🤖"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                whileHover={{ 
                  scale: 1.05,
                  transition: {
                    type: "spring",
                    stiffness: 300,
                    damping: 10
                  }
                }}
                className="relative p-6 rounded-xl bg-gray-800/50 backdrop-blur-sm border border-gray-700/50"
              >
                <motion.div
                  variants={floatingAnimation}
                  className="text-4xl mb-4"
                >
                  {feature.icon}
                </motion.div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </main>
      </div>

      <style jsx global>{`
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
    </>
  );
}