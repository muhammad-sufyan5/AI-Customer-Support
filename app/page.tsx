'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="fixed top-0 w-full flex items-center justify-between p-4 bg-gradient-to-r from-transparent via-transparent to-gray-800 backdrop-blur-lg">
        <div className="text-white text-2xl font-bold">
          <Link href="/">Chat App</Link>
        </div>
        <nav className="flex space-x-6">
          <Link href="#features" className="text-white hover:text-gray-300">Features</Link>
          <Link href="#pricing" className="text-white hover:text-gray-300">Pricing</Link>
          <Link href="#contact" className="text-white hover:text-gray-300">Contact</Link>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="flex-grow bg-[url('/images/hero-bg.jpg')] bg-cover bg-center mt-16 flex items-center justify-center text-center text-white">
        <div className="bg-black bg-opacity-50 p-8 rounded-lg">
          <motion.h1
            className="text-4xl md:text-6xl font-extrabold mb-4"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            AI Customer Support
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl mb-6"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Unlock the next level of communication with intelligent AI responses and effortless connectivity.
          </motion.p>
          <Link href="/auth">
            <motion.button
              className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full font-bold text-xl transition"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              Get Started
            </motion.button>
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-gray-100 text-gray-900">
        <div className="text-center mb-16">
          <motion.h2
            className="text-3xl md:text-4xl font-bold"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            What Sets Us Apart?
          </motion.h2>
        </div>
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          {/* Repeat for each feature */}
          <motion.div
            className="p-6 bg-white rounded-lg shadow-lg hover:bg-gray-50 transition"
            whileHover={{ scale: 1.05 }}
          >
            <div className="text-3xl mb-4">🔒</div>
            <h3 className="text-2xl font-semibold mb-2">Secure Communication</h3>
            <p>Ensure your conversations are protected with industry-leading encryption and data privacy protocols.</p>
          </motion.div>
          <motion.div
            className="p-6 bg-white rounded-lg shadow-lg hover:bg-gray-50 transition"
            whileHover={{ scale: 1.05 }}
          >
            <div className="text-3xl mb-4">🤖</div>
            <h3 className="text-2xl font-semibold mb-2">AI-Powered Assistance</h3>
            <p>Our AI-driven chat system offers smart, instant replies to enhance your communication.</p>
          </motion.div>
          <motion.div
            className="p-6 bg-white rounded-lg shadow-lg hover:bg-gray-50 transition"
            whileHover={{ scale: 1.05 }}
          >
            <div className="text-3xl mb-4">🛠️</div>
            <h3 className="text-2xl font-semibold mb-2">Collaborative Tools</h3>
            <p>Enhance teamwork with integrated file sharing, task management, and group chats all in one place.</p>
          </motion.div>
          
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-20">
        <div className="text-center mb-16">
          <motion.h2
            className="text-3xl md:text-4xl font-bold"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            Our Process
          </motion.h2>
        </div>
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          {/* Repeat for each step */}
          <motion.div
            className="p-6 bg-white text-black rounded-lg shadow-lg hover:bg-gray-50 transition"
            whileHover={{ scale: 1.05 }}
          >
            <div className="text-3xl mb-4">1️⃣</div>
            <h3 className="text-2xl font-semibold mb-2">Step 1</h3>
            <p>Sign Up or Log In to access your account.</p>
          </motion.div>
          <motion.div
            className="p-6 bg-white text-black rounded-lg shadow-lg hover:bg-gray-50 transition"
            whileHover={{ scale: 1.05 }}
          >
            <div className="text-3xl mb-4">2️⃣</div>
            <h3 className="text-2xl font-semibold mb-2">Step 2</h3>
            <p>Connect with your contacts or initiate a new conversation.</p>
          </motion.div>
          <motion.div
            className="p-6 bg-white text-black rounded-lg shadow-lg hover:bg-gray-50 transition"
            whileHover={{ scale: 1.05 }}
          >
            <div className="text-3xl mb-4">3️⃣</div>
            <h3 className="text-2xl font-semibold mb-2">Step 3</h3>
            <p>Experience real-time, seamless communication with our advanced chat interface.</p>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-gray-100 text-gray-900">
        <div className="text-center mb-16">
          <motion.h2
            className="text-3xl md:text-4xl font-bold"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            Hear From Our Users
          </motion.h2>
        </div>
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
          {/* Repeat for each testimonial */}
          <motion.div
            className="p-6 bg-white rounded-lg shadow-lg hover:bg-gray-50 transition"
            whileHover={{ scale: 1.05 }}
          >
            <p>"The integration of AI in this chat app has been a game-changer for our team."</p>
            <p className="mt-4 font-semibold">- Ahmad Ali</p>
          </motion.div>
          <motion.div
            className="p-6 bg-white rounded-lg shadow-lg hover:bg-gray-50 transition"
            whileHover={{ scale: 1.05 }}
          >
            <p>"I appreciate how user-friendly and responsive this app is. It simplifies our daily communication and enhances our productivity."</p>
            <p className="mt-4 font-semibold">- Subhan Ali</p>
          </motion.div>
          <motion.div
            className="p-6 bg-white rounded-lg shadow-lg hover:bg-gray-50 transition"
            whileHover={{ scale: 1.05 }}
          >
            <p>"This app's seamless integration with our existing tools has made a huge difference. The AI features are particularly impressive."</p>
            <p className="mt-4 font-semibold">- Sarah Lee</p>
          </motion.div>
          <motion.div
            className="p-6 bg-white rounded-lg shadow-lg hover:bg-gray-50 transition"
            whileHover={{ scale: 1.05 }}
          >
            <p>"From day one, this app has been a breeze to use. Its real-time features and intuitive design have greatly improved our workflow."</p>
            <p className="mt-4 font-semibold">- John</p>
          </motion.div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-green-600 text-white text-center py-20">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-8"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            Dive In with us to Experience More!
          </motion.h2>
          <Link href="/auth">
            <motion.button
              className="bg-black hover:bg-gray-900 text-white px-8 py-4 rounded-full font-bold text-xl transition"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              Sign Up Today
            </motion.button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-black text-white text-center">
        <p>&copy; 2024 Your Chat App. All Rights Reserved.</p>
      </footer>
    </div>
  );
}
