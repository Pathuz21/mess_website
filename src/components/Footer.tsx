import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">CampusBites</h3>
            <p className="text-gray-400">
              Serving quality meals to students since 2020. Your home away from home dining experience.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-400 hover:text-white">About Us</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-white">Our Menu</Link></li>
              <li><Link to="/faq" className="text-gray-400 hover:text-white">FAQ</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-white">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Meal Plans</h4>
            <ul className="space-y-2">
              <li><Link to="/services" className="text-gray-400 hover:text-white">Monthly Plan</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-white">Weekly Plan</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-white">Tiffin Service</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-white">Special Diet</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-3 text-gray-400">
                <MapPin size={20} />
                <span>123 Campus Street, Student Block</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-400">
                <Phone size={20} />
                <span>(555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-400">
                <Mail size={20} />
                <span>info@campusbites.com</span>
              </div>
              <div className="flex space-x-4 mt-4">
                <a href="#" className="text-gray-400 hover:text-white">
                  <Facebook size={24} />
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <Instagram size={24} />
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <Twitter size={24} />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 CampusBites. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}