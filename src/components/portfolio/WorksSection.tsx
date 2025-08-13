import { Button } from "@/components/ui/button";

interface WorkItem {
  id: string;
  title: string;
  description: string;
  engagement: string;
  methodology: string;
  image: string;
}

const workItems: WorkItem[] = [
  {
    id: "1",
    title: "Crafting digital experiences that delight users - and businesses",
    description: "Crafting digital experiences that delight users - and businesses",
    engagement: "Engagement +5K",
    methodology: "Agile Methodology",
    image: "/api/placeholder/400/300"
  },
  {
    id: "2", 
    title: "Crafting digital experiences that delight users - and businesses",
    description: "Crafting digital experiences that delight users - and businesses",
    engagement: "Engagement +5K",
    methodology: "Agile Methodology", 
    image: "/api/placeholder/400/300"
  },
  {
    id: "3",
    title: "Crafting digital experiences that delight users - and businesses", 
    description: "Crafting digital experiences that delight users - and businesses",
    engagement: "Engagement +5K",
    methodology: "Agile Methodology",
    image: "/api/placeholder/400/300"
  },
  {
    id: "4",
    title: "Crafting digital experiences that delight users - and businesses",
    description: "Crafting digital experiences that delight users - and businesses", 
    engagement: "Engagement +5K",
    methodology: "Agile Methodology",
    image: "/api/placeholder/400/300"
  }
];

export const WorksSection = () => {
  return (
    <section className="container-portfolio py-8 md:py-16">
      <h2 className="caption mb-8 md:mb-12">selected works</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
        {workItems.map((item, index) => (
          <div key={item.id} className="group">
            <div className="aspect-[4/3] bg-surface rounded-xl mb-6 overflow-hidden relative">
              <div className="absolute inset-0 bg-gray-200"></div>
              {index >= 2 && (
                <div className="absolute top-4 right-4 w-8 h-8 bg-black rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-medium">{index - 1}</span>
                </div>
              )}
            </div>
            
            <div className="space-y-4">
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
        ))}
      </div>
    </section>
  );
};