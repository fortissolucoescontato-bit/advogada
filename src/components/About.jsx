import React from 'react';
import { motion } from 'framer-motion';
import { Award, GraduationCap, Briefcase } from 'lucide-react';

const About = () => {
  const credentials = [
    {
      icon: <GraduationCap size={32} />,
      title: 'Formação Acadêmica',
      description: 'Graduada em Direito com especialização em Direito Civil e Empresarial',
    },
    {
      icon: <Award size={32} />,
      title: 'Experiência Comprovada',
      description: 'Mais de 15 anos de experiência em defesa jurídica de excelência',
    },
    {
      icon: <Briefcase size={32} />,
      title: 'Casos de Sucesso',
      description: 'Centenas de casos resolvidos com resultados favoráveis aos clientes',
    },
  ];

  return (
    <section id="sobre" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl sm:text-5xl font-serif font-bold text-navy mb-6">
              Sobre Mim
            </h2>
            <div className="w-20 h-1 bg-gold mb-8"></div>
            
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Com uma trajetória sólida e dedicada ao Direito, atuo com compromisso 
              e excelência na defesa dos direitos dos meus clientes. Minha abordagem 
              combina conhecimento jurídico aprofundado com atenção personalizada 
              a cada caso.
            </p>
            
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Acredito que cada situação jurídica é única e merece uma estratégia 
              cuidadosamente elaborada. Meu objetivo é não apenas resolver questões 
              legais, mas também proporcionar tranquilidade e segurança aos meus clientes.
            </p>

            {/* Credentials Grid */}
            <div className="grid sm:grid-cols-3 gap-6 mt-10">
              {credentials.map((credential, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-gold mb-3 flex justify-center">
                    {credential.icon}
                  </div>
                  <h3 className="font-semibold text-navy mb-2 text-sm">
                    {credential.title}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {credential.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Image/Video Placeholder */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-lg overflow-hidden shadow-xl">
              <div className="w-full h-[500px] bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center border-2 border-gold/20">
                <div className="text-center p-8">
                  <div className="w-32 h-32 mx-auto mb-4 rounded-lg bg-gold/10 flex items-center justify-center border-2 border-gold/30">
                    <svg
                      className="w-16 h-16 text-gold/50"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <p className="text-gray-500 text-sm">Vídeo de Apresentação</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;

