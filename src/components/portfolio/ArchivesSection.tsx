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
    <section className="container-portfolio py-8 md:py-16">
      <h2 className="caption mb-8 md:mb-12">archives & explorations</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
        {archiveItems.map((item) => (
          <div key={item.id} className="group">
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
          </div>
        ))}
      </div>
    </section>
  );
};