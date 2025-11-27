import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section
      id="inicio"
      className="relative min-h-screen bg-navy flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle, #D4AF37 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-white mb-6 leading-tight"
            >
              Defendendo seus{' '}
              <span className="text-gold">direitos</span>{' '}
              com excelência
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg sm:text-xl text-white/80 mb-8 max-w-2xl mx-auto lg:mx-0"
            >
              Experiência, dedicação e compromisso em cada caso. 
              Sua defesa jurídica com profissionalismo e resultados.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <a
                href="#contato"
                className="inline-flex items-center justify-center px-8 py-4 bg-gold text-navy font-semibold text-lg rounded-md hover:bg-gold-accent transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105"
              >
                Agendar Consulta
                <ArrowRight className="ml-2" size={20} />
              </a>
              <a
                href="#sobre"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-gold text-gold font-semibold text-lg rounded-md hover:bg-gold/10 transition-all duration-200"
              >
                Conheça mais
              </a>
            </motion.div>
          </motion.div>

          {/* Right Image Placeholder */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="relative rounded-lg overflow-hidden shadow-2xl">
              {/* Professional Photo Placeholder */}
              <div className="w-full h-[500px] sm:h-[600px] bg-gradient-to-br from-navy-dark to-navy flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-48 h-48 mx-auto mb-6 rounded-full bg-gold/20 flex items-center justify-center border-4 border-gold">
                    <svg
                      className="w-32 h-32 text-gold"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>
                  </div>
                  <p className="text-white/60 text-sm">Foto Profissional</p>
                </div>
              </div>
              
              {/* Decorative Gold Border */}
              <div className="absolute inset-0 border-2 border-gold/30 rounded-lg pointer-events-none"></div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-gold rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1.5 h-1.5 bg-gold rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;

