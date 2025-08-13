import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

interface WorkItem {
  id: string;
  title: string;
  description: string;
  engagement: string;
  methodology: string;
  image: string;
  layout: 'horizontal' | 'vertical';
}

const workItems: WorkItem[] = [
  {
    id: "1",
    title: "Crafting digital experiences that delight users - and businesses",
    description: "Crafting digital experiences that delight users - and businesses",
    engagement: "Engagement +5K",
    methodology: "Agile Methodology",
    image: "/api/placeholder/400/300",
    layout: 'horizontal'
  },
  {
    id: "2", 
    title: "Crafting digital experiences that delight users - and businesses",
    description: "Crafting digital experiences that delight users - and businesses",
    engagement: "Engagement +5K",
    methodology: "Agile Methodology", 
    image: "/api/placeholder/400/300",
    layout: 'horizontal'
  },
  {
    id: "3",
    title: "Crafting digital experiences that delight users - and businesses", 
    description: "Crafting digital experiences that delight users - and businesses",
    engagement: "Engagement +5K",
    methodology: "Agile Methodology",
    image: "/api/placeholder/400/300",
    layout: 'vertical'
  },
  {
    id: "4",
    title: "Crafting digital experiences that delight users - and businesses",
    description: "Crafting digital experiences that delight users - and businesses", 
    engagement: "Engagement +5K",
    methodology: "Agile Methodology",
    image: "/api/placeholder/400/300",
    layout: 'vertical'
  }
];

export const WorksSection = () => {
  return (
    <motion.section 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="container-portfolio py-8 md:py-16"
    >
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-8 md:mb-12"
      >
        <h2 className="caption mb-4">selected works</h2>
        <div className="w-24 h-px bg-text-primary mx-auto"></div>
      </motion.div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
        {workItems.map((item, index) => (
          <motion.div 
            key={item.id} 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="group"
          >
            {item.layout === 'horizontal' ? (
              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-1/2">
                  <div className="aspect-[4/3] bg-surface rounded-xl overflow-hidden relative">
                    <div className="absolute inset-0 bg-gray-200"></div>
                  </div>
                </div>
                <div className="md:w-1/2 space-y-4">
                  <div className="flex items-center gap-4">
                    <span className="caption">{item.engagement}</span>
                    <span className="caption">{item.methodology}</span>
                  </div>
                  
                  <h3 className="heading-md text-text-primary">
                    {item.title}
                  </h3>
                  
                  <p className="body-base text-text-secondary">
                    {item.description}
                  </p>
                  
                  <Button variant="default" className="rounded-full">
                    View Project
                    <span className="ml-2">→</span>
                  </Button>
                </div>
              </div>
            ) : (
              <div>
                <div className="aspect-[4/3] bg-surface rounded-xl mb-6 overflow-hidden relative">
                  <div className="absolute inset-0 bg-gray-200"></div>
                  <div className="absolute top-4 left-4 space-x-2">
                    <span className="px-2 py-1 rounded-full bg-gray-500/80 text-white text-xs font-medium">
                      {item.engagement}
                    </span>
                    <span className="px-2 py-1 rounded-full bg-gray-500/80 text-white text-xs font-medium">
                      {item.methodology}
                    </span>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <h3 className="heading-md text-text-primary">
                    {item.title}
                  </h3>
                  
                  <p className="body-base text-text-secondary">
                    {item.description}
                  </p>
                  
                  <Button variant="default" className="rounded-full">
                    View Project
                    <span className="ml-2">→</span>
                  </Button>
                </div>
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};