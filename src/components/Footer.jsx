import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Linkedin, Instagram, Facebook } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contato" className="bg-navy text-white py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* About Section */}
          <div>
            <h3 className="text-2xl font-serif font-bold mb-4 text-gold">
              Advogada
            </h3>
            <p className="text-white/70 mb-4 leading-relaxed">
              Defendendo seus direitos com excelência, profissionalismo e dedicação.
            </p>
            <div className="mt-4">
              <p className="text-white/80 font-semibold mb-1">OAB/SP</p>
              <p className="text-gold">123.456</p>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-serif font-semibold mb-4">Contato</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Phone className="text-gold mr-3 mt-1 flex-shrink-0" size={20} />
                <a href="tel:+5511999999999" className="text-white/70 hover:text-gold transition-colors">
                  (11) 99999-9999
                </a>
              </li>
              <li className="flex items-start">
                <Mail className="text-gold mr-3 mt-1 flex-shrink-0" size={20} />
                <a href="mailto:contato@advogada.com.br" className="text-white/70 hover:text-gold transition-colors">
                  contato@advogada.com.br
                </a>
              </li>
              <li className="flex items-start">
                <MapPin className="text-gold mr-3 mt-1 flex-shrink-0" size={20} />
                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/70 hover:text-gold transition-colors"
                >
                  Av. Paulista, 1000<br />
                  São Paulo - SP, 01310-100
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-serif font-semibold mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <a href="#inicio" className="text-white/70 hover:text-gold transition-colors">
                  Início
                </a>
              </li>
              <li>
                <a href="#sobre" className="text-white/70 hover:text-gold transition-colors">
                  Sobre
                </a>
              </li>
              <li>
                <a href="#servicos" className="text-white/70 hover:text-gold transition-colors">
                  Serviços
                </a>
              </li>
              <li>
                <a href="#depoimentos" className="text-white/70 hover:text-gold transition-colors">
                  Depoimentos
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="text-xl font-serif font-semibold mb-4">Redes Sociais</h4>
            <div className="flex space-x-4">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-navy-dark rounded-full flex items-center justify-center text-gold hover:bg-gold hover:text-navy transition-all duration-200"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-navy-dark rounded-full flex items-center justify-center text-gold hover:bg-gold hover:text-navy transition-all duration-200"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-navy-dark rounded-full flex items-center justify-center text-gold hover:bg-gold hover:text-navy transition-all duration-200"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
            </div>
            <div className="mt-6">
              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 border-2 border-gold text-gold rounded-md hover:bg-gold hover:text-navy transition-all duration-200"
              >
                <MapPin className="mr-2" size={18} />
                Ver no Mapa
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gold/20 pt-8 mt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <p className="text-white/60 text-sm mb-4 sm:mb-0">
              © {currentYear} Advogada. Todos os direitos reservados.
            </p>
            <p className="text-white/60 text-sm">
              Desenvolvido com excelência
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

