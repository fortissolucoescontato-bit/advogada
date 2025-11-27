import React from 'react';
import { motion } from 'framer-motion';
import {
  Scale,
  Building2,
  Users,
  FileText,
  Home,
  Heart,
  Briefcase,
} from 'lucide-react';

const PracticeAreas = () => {
  const areas = [
    {
      icon: <Scale size={32} />,
      title: 'Direito Civil',
      description: 'Contratos, responsabilidade civil, direito das coisas e sucessões.',
    },
    {
      icon: <Building2 size={32} />,
      title: 'Direito Empresarial',
      description: 'Sociedades, contratos comerciais, recuperação judicial e falências.',
    },
    {
      icon: <Users size={32} />,
      title: 'Direito Trabalhista',
      description: 'Defesa de direitos trabalhistas, rescisões e acordos coletivos.',
    },
    {
      icon: <FileText size={32} />,
      title: 'Direito Tributário',
      description: 'Planejamento tributário, consultoria e defesa em processos fiscais.',
    },
    {
      icon: <Home size={32} />,
      title: 'Direito Imobiliário',
      description: 'Compra e venda, locação, usucapião e regularização de imóveis.',
    },
    {
      icon: <Heart size={32} />,
      title: 'Direito de Família',
      description: 'Divórcios, guarda de filhos, pensão alimentícia e inventários.',
    },
  ];

  return (
    <section id="servicos" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-serif font-bold text-navy mb-4">
            Áreas de Atuação
          </h2>
          <div className="w-20 h-1 bg-gold mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Especialização em diversas áreas do Direito para atender todas as suas necessidades jurídicas
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {areas.map((area, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="bg-white rounded-lg p-8 shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer group border-2 border-transparent hover:border-gold"
            >
              <div className="text-gold mb-4 group-hover:scale-110 transition-transform duration-300">
                {area.icon}
              </div>
              <h3 className="text-xl font-serif font-semibold text-navy mb-3">
                {area.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {area.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PracticeAreas;

