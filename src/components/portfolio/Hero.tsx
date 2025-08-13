import { motion } from "framer-motion";

export const Hero = () => {
  return (
    <motion.section 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.6 }}
      className="container-portfolio py-8 md:py-16"
    >
      <div className="max-w-4xl mx-auto text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="heading-xl text-balance mb-6 md:mb-8"
        >
          <span className="text-text-primary" style={{ 
            WebkitTextStroke: '2px black', 
            WebkitTextFillColor: 'transparent' 
          }}>
            crafting 
          </span>
          <span className="italic font-script text-gold" style={{ 
            WebkitTextStroke: '2px black', 
            WebkitTextFillColor: 'hsl(var(--gold))' 
          }}>
            digital products 
          </span>
          <span className="text-text-primary" style={{ 
            WebkitTextStroke: '2px black', 
            WebkitTextFillColor: 'transparent' 
          }}>
            that delight users - and businesses
          </span>
        </motion.h1>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="text-text-secondary body-lg"
        >
          <span>designed across e-commerce 🛒 | media 📺 | agri-tech 🌱</span>
        </motion.div>
      </div>
    </motion.section>
  );
};