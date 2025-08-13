import { motion } from "framer-motion";

const archiveItems = [
  {
    id: "1",
    title: "Crafting digital experiences that delight users - and businesses",
    engagement: "Engagement +5K",
    methodology: "Agile Methodology",
    number: "7"
  },
  {
    id: "2", 
    title: "Crafting digital experiences that delight users - and businesses",
    engagement: "Engagement +5K",
    methodology: "Agile Methodology",
    number: "2"
  }
];

export const ArchivesSection = () => {
  return (
    <motion.section 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="container-portfolio py-8 md:py-16"
    >
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="caption mb-8 md:mb-12"
      >
        archives & explorations
      </motion.h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
        {archiveItems.map((item, index) => (
          <motion.div 
            key={item.id} 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="group"
          >
            <div className="aspect-[4/3] bg-surface rounded-xl mb-6 overflow-hidden relative">
              <div className="absolute inset-0 bg-gray-200"></div>
              <div className="absolute top-4 right-4 w-8 h-8 bg-black rounded-full flex items-center justify-center">
                <span className="text-white text-sm font-medium">{item.number}</span>
              </div>
            </div>
            
            <div className="space-y-3">
              <div className="flex items-center gap-4">
                <span className="caption">{item.engagement}</span>
                <span className="caption">{item.methodology}</span>
              </div>
              
              <h3 className="heading-md text-text-primary">
                {item.title}
              </h3>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};