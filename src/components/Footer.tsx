import { Facebook, Instagram, Twitter } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-amber-900 text-amber-50">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">Safiri Kenya</h3>
            <p className="text-amber-200">Experience the magic of Kenya's wilderness with our curated safari experiences.</p>
          </div>
          
          <div>
            <h4 className="text-xl font-semibold mb-4">Contact</h4>
            <p>info@safirikenya.com</p>
            <p>+254 700 000000</p>
            <p>Nairobi, Kenya</p>
          </div>

          <div>
            <h4 className="text-xl font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" 
                className="hover:text-amber-300 transition-colors">
                <Facebook />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"
                className="hover:text-amber-300 transition-colors">
                <Instagram />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"
                className="hover:text-amber-300 transition-colors">
                <Twitter />
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-amber-800 text-center text-amber-300">
          <p>&copy; {new Date().getFullYear()} Safiri Kenya. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};