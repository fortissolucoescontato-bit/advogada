import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Maria Silva',
      role: 'Empresária',
      text: 'Profissional excepcional! Me ajudou a resolver uma questão complexa com muita competência e atenção. Recomendo sem hesitação.',
    },
    {
      name: 'João Santos',
      role: 'Executivo',
      text: 'Atendimento impecável e resultados que superaram minhas expectativas. Uma advogada que realmente se importa com seus clientes.',
    },
    {
      name: 'Ana Costa',
      role: 'Profissional Autônoma',
      text: 'Encontrei na Dra. uma parceira confiável. Sua expertise e dedicação foram fundamentais para o sucesso do meu caso.',
    },
  ];

  return (
    <section id="depoimentos" className="py-20 bg-navy">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-serif font-bold text-white mb-4">
            Depoimentos
          </h2>
          <div className="w-20 h-1 bg-gold mx-auto mb-6"></div>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            O que nossos clientes dizem sobre nosso trabalho
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-navy-dark rounded-lg p-8 shadow-xl border border-gold/20 relative"
            >
              {/* Quote Icon */}
              <div className="text-gold mb-4">
                <Quote size={40} />
              </div>
              
              {/* Testimonial Text */}
              <p className="text-white/90 mb-6 leading-relaxed italic">
                "{testimonial.text}"
              </p>
              
              {/* Author */}
              <div className="border-t border-gold/20 pt-4">
                <p className="text-gold font-semibold">{testimonial.name}</p>
                <p className="text-white/60 text-sm">{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

