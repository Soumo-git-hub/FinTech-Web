import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';

export default function Chat() {
  const router = useRouter();
  const { persona } = router.query;
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const personaData = {
    innovator: {
      name: 'Innovator',
      color: 'from-blue-500 to-cyan-500',
      icon: '🚀'
    },
    traditionalist: {
      name: 'Traditionalist',
      color: 'from-green-500 to-emerald-500',
      icon: '🏛️'
    },
    adventurer: {
      name: 'Adventurer',
      color: 'from-orange-500 to-red-500',
      icon: '🏔️'
    },
    athlete: {
      name: 'Athlete',
      color: 'from-purple-500 to-pink-500',
      icon: '🏆'
    },
    artist: {
      name: 'Artist',
      color: 'from-yellow-500 to-amber-500',
      icon: '🎨'
    }
  };

  useEffect(() => {
    if (persona) {
      setMessages([
        {
          type: 'bot',
          text: `Welcome, ${personaData[persona]?.name}! I'm your AI financial guide. How can I help you today?`
        }
      ]);
    }
  }, [persona]);

  const handleSend = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const newMessage = {
      type: 'user',
      text: input
    };

    setMessages([...messages, newMessage]);
    setInput('');
    setIsTyping(true);

    // Simulate bot response
    setTimeout(() => {
      setMessages(prev => [...prev, {
        type: 'bot',
        text: 'I understand your question. As an AI, I can help you explore investment opportunities that match your persona.'
      }]);
      setIsTyping(false);
    }, 1000);
  };

  return (
    <>
      <Head>
        <title>AI Chat - Financial Multiverse</title>
        <meta name="description" content="Chat with your AI financial guide" />
      </Head>

      <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
        <main className="container mx-auto px-4 py-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <div className="flex items-center justify-center mb-8">
              <div className={`text-4xl mr-4 ${personaData[persona]?.icon}`} />
              <h1 className="text-3xl font-bold">
                Chat with your {personaData[persona]?.name} Guide
              </h1>
            </div>

            <div className="bg-gray-800 rounded-xl p-6 h-[60vh] overflow-y-auto mb-6">
              {messages.map((message, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className={`mb-4 ${
                    message.type === 'user' ? 'text-right' : 'text-left'
                  }`}
                >
                  <div
                    className={`inline-block p-4 rounded-lg ${
                      message.type === 'user'
                        ? 'bg-gradient-to-r from-purple-500 to-pink-500'
                        : 'bg-gray-700'
                    }`}
                  >
                    {message.text}
                  </div>
                </motion.div>
              ))}
              {isTyping && (
                <div className="text-left">
                  <div className="inline-block p-4 rounded-lg bg-gray-700">
                    <span className="inline-block w-2 h-2 bg-white rounded-full mr-1 animate-bounce" />
                    <span className="inline-block w-2 h-2 bg-white rounded-full mr-1 animate-bounce" style={{ animationDelay: '0.2s' }} />
                    <span className="inline-block w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: '0.4s' }} />
                  </div>
                </div>
              )}
            </div>

            <form onSubmit={handleSend} className="flex gap-4">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type your message..."
                className="flex-1 bg-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <button
                type="submit"
                className="px-6 py-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg font-semibold hover:from-purple-600 hover:to-pink-600 transform hover:scale-105 transition-all duration-300"
              >
                Send
              </button>
            </form>
          </motion.div>
        </main>
      </div>
    </>
  );
} 