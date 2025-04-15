import { useState } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';

const personas = [
  {
    id: 'innovator',
    title: 'Innovator',
    description: 'Forward-thinking, tech-savvy, and always looking for the next big thing.',
    icon: '💡',
    bgColor: 'bg-blue-600',
    hoverColor: 'hover:bg-blue-700',
    iconBg: 'bg-blue-500/20',
    traits: ['Tech-Savvy', 'Visionary', 'Early Adopter'],
    gradient: 'from-blue-500 to-cyan-500'
  },
  {
    id: 'traditionalist',
    title: 'Traditionalist',
    description: 'Value stability, proven strategies, and long-term growth.',
    icon: '📈',
    bgColor: 'bg-green-600',
    hoverColor: 'hover:bg-green-700',
    iconBg: 'bg-green-500/20',
    traits: ['Risk-Averse', 'Methodical', 'Long-term Focus'],
    gradient: 'from-green-500 to-emerald-500'
  },
  {
    id: 'adventurer',
    title: 'Adventurer',
    description: 'Thrill-seeking, high-risk, high-reward investment approach.',
    icon: '⚡',
    bgColor: 'bg-orange-600',
    hoverColor: 'hover:bg-orange-700',
    iconBg: 'bg-orange-500/20',
    traits: ['Risk-Taker', 'Opportunistic', 'Dynamic'],
    gradient: 'from-orange-500 to-red-500'
  },
  {
    id: 'athlete',
    title: 'Athlete',
    description: 'Disciplined, goal-oriented, and focused on performance metrics.',
    icon: '🎯',
    bgColor: 'bg-purple-600',
    hoverColor: 'hover:bg-purple-700',
    iconBg: 'bg-purple-500/20',
    traits: ['Disciplined', 'Performance-Driven', 'Strategic'],
    gradient: 'from-purple-500 to-pink-500'
  },
  {
    id: 'artist',
    title: 'Artist',
    description: 'Creative, intuitive, and looking for unique investment opportunities.',
    icon: '🎨',
    bgColor: 'bg-yellow-600',
    hoverColor: 'hover:bg-yellow-700',
    iconBg: 'bg-yellow-500/20',
    traits: ['Creative', 'Intuitive', 'Unique Perspective'],
    gradient: 'from-yellow-500 to-amber-500'
  }
];

export default function PersonaSelection() {
  const [selectedPersona, setSelectedPersona] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handlePersonaSelection = async (personaId) => {
    setSelectedPersona(personaId);
    setIsLoading(true);

    try {
      const userId = 'temp_' + Math.random().toString(36).substr(2, 9);
      const response = await fetch('/api/persona', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          userId,
          personaId,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to save persona selection');
      }

      router.push(`/chat?persona=${personaId}`);
    } catch (error) {
      console.error('Error saving persona selection:', error);
      alert('Failed to save your selection. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Head>
        <title>Investment Persona Selection | Financial Multiverse</title>
        <meta name="description" content="Select your investment persona to begin your personalized financial journey" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="min-h-screen bg-gradient-to-b from-gray-900 via-purple-900 to-gray-800">
        {/* Background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('/grid.svg')] opacity-5" />
          <motion.div
            className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500 rounded-full filter blur-3xl opacity-10"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.2, 0.1],
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
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Select Your Investment Persona
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Choose the investment style that best aligns with your financial goals and risk tolerance
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {personas.map((persona, index) => (
              <motion.div
                key={persona.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative cursor-pointer ${
                  personas.length < 6 && index === personas.length - 1 
                    ? 'md:col-start-2' 
                    : ''
                }`}
                onClick={() => handlePersonaSelection(persona.id)}
              >
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className={`persona-card relative overflow-hidden rounded-xl transition-all duration-300 shadow-xl`}
                >
                  {/* Gradient background */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${persona.gradient} opacity-90`} />
                  
                  {/* Card content */}
                  <div className="relative flex flex-col h-full p-8">
                    {/* Icon with floating animation */}
                    <motion.div
                      animate={{ y: [0, -5, 0] }}
                      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                      className={`persona-icon text-center mb-6 ${persona.iconBg} rounded-full w-20 h-20 mx-auto flex items-center justify-center backdrop-blur-sm`}
                    >
                      <span className="text-4xl">{persona.icon}</span>
                    </motion.div>

                    {/* Title */}
                    <h3 className="persona-title text-center mb-4 text-2xl font-semibold text-white">
                      {persona.title}
                    </h3>

                    {/* Description */}
                    <p className="persona-description text-center mb-6 text-white/90">
                      {persona.description}
                    </p>

                    {/* Traits */}
                    <div className="mt-auto">
                      <div className="flex flex-wrap justify-center gap-2">
                        {persona.traits.map((trait, i) => (
                          <motion.span
                            key={i}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: i * 0.1 }}
                            className="px-3 py-1 text-sm rounded-full bg-white/10 text-white/90 backdrop-blur-sm"
                          >
                            {trait}
                          </motion.span>
                        ))}
                      </div>
                    </div>

                    {/* Selection indicator */}
                    {selectedPersona === persona.id && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3 }}
                        className="absolute inset-0 border-4 border-white rounded-xl"
                      />
                    )}

                    {/* Hover effect overlay */}
                    <motion.div
                      className="absolute inset-0 bg-white/5 opacity-0 hover:opacity-100 transition-opacity duration-300"
                      whileHover={{ opacity: 0.1 }}
                    />
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>

          {isLoading && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="mt-12 text-center"
            >
              <div className="inline-block p-4 rounded-lg bg-gray-800/50 backdrop-blur-sm">
                <span className="inline-block w-2 h-2 bg-white rounded-full mr-1 animate-bounce" />
                <span className="inline-block w-2 h-2 bg-white rounded-full mr-1 animate-bounce" style={{ animationDelay: '0.2s' }} />
                <span className="inline-block w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: '0.4s' }} />
              </div>
            </motion.div>
          )}
        </main>
      </div>
    </>
  );
} 