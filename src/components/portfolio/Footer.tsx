import { motion } from "framer-motion";

export const Footer = () => {
  return (
    <motion.footer 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="bg-text-primary text-white py-12 md:py-16"
    >
      <div className="container-portfolio">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl md:text-2xl font-light mb-4">
              Always open to building great products.
            </h3>
            <p className="text-gray-300">
              Reach out at aditisaxena2004@gmail.com
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col md:items-end gap-4"
          >
            <div className="flex flex-col gap-2 md:items-end">
              <a href="#" className="text-gray-300 hover:text-white transition-colors flex items-center gap-2">
                Behance
                <span className="text-xs">↗</span>
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors flex items-center gap-2">
                LinkedIn
                <span className="text-xs">↗</span>
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors flex items-center gap-2">
                Instagram
                <span className="text-xs">↗</span>
              </a>
            </div>
          </motion.div>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12 pt-8 border-t border-gray-700 text-sm text-gray-400"
        >
          Made with ❤️ by Adit | 2024
        </motion.div>
      </div>
    </motion.footer>
  );
};