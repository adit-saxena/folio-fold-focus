export const Footer = () => {
  return (
    <footer className="bg-text-primary text-white py-12 md:py-16">
      <div className="container-portfolio">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl md:text-2xl font-light mb-4">
              Always open to building great products.
            </h3>
            <p className="text-gray-300">
              Reach out at aditisaxena2004@gmail.com
            </p>
          </div>
          
          <div className="flex flex-col md:items-end gap-4">
            <div className="flex flex-col gap-2">
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
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-700 text-sm text-gray-400">
          Made with ❤️ by Adit | 2024
        </div>
      </div>
    </footer>
  );
};