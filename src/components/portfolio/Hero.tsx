export const Hero = () => {
  return (
    <section className="container-portfolio py-8 md:py-16">
      <div className="max-w-4xl">
        <h1 className="heading-xl text-balance mb-6 md:mb-8">
          <span className="text-text-primary">crafting </span>
          <span className="italic text-text-primary">digital products </span>
          <span className="text-text-primary">that delight users - and businesses</span>
        </h1>
        
        <div className="flex items-center gap-4 text-text-secondary body-lg">
          <span>designed across</span>
          <div className="flex items-center gap-3">
            <span className="px-3 py-1 rounded-full bg-red-500 text-white text-sm">e-commerce</span>
            <span className="px-3 py-1 rounded-full bg-gray-200 text-gray-800 text-sm">media</span>
            <span className="px-3 py-1 rounded-full bg-green-500 text-white text-sm">agri-tech</span>
          </div>
        </div>
      </div>
    </section>
  );
};