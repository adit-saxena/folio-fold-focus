import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export const Header = () => {
  return (
    <motion.header 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="container-portfolio py-8 md:py-12"
    >
      <div className="flex items-center justify-between">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <img 
            src="/lovable-uploads/42e2a967-6bd2-423f-bbe1-baaa1a14d7e7.png" 
            alt="Abit Logo" 
            className="h-8 md:h-10 w-auto"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Button 
            variant="outline" 
            size="sm" 
            className="rounded-full"
            asChild
          >
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
              resume
            </a>
          </Button>
        </motion.div>
      </div>
    </motion.header>
  );
};