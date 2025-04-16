import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X, UtensilsCrossed } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-white shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <NavLink to="/" className="text-xl font-bold text-gray-800 flex items-center gap-2">
              <UtensilsCrossed className="text-orange-500" />
              CampusBites
            </NavLink>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLink to="/" className={({ isActive }) => 
              `text-gray-600 hover:text-gray-900 transition-colors ${isActive ? 'text-orange-500' : ''}`
            }>
              Home
            </NavLink>
            <NavLink to="/about" className={({ isActive }) => 
              `text-gray-600 hover:text-gray-900 transition-colors ${isActive ? 'text-orange-500' : ''}`
            }>
              About
            </NavLink>
            <NavLink to="/services" className={({ isActive }) => 
              `text-gray-600 hover:text-gray-900 transition-colors ${isActive ? 'text-orange-500' : ''}`
            }>
              Services
            </NavLink>
            <NavLink to="/faq" className={({ isActive }) => 
              `text-gray-600 hover:text-gray-900 transition-colors ${isActive ? 'text-orange-500' : ''}`
            }>
              FAQ
            </NavLink>
            <NavLink to="/feedback" className={({ isActive }) => 
              `text-gray-600 hover:text-gray-900 transition-colors ${isActive ? 'text-orange-500' : ''}`
            }>
              Feedback
            </NavLink>
            <NavLink to="/contact" className={({ isActive }) => 
              `text-gray-600 hover:text-gray-900 transition-colors ${isActive ? 'text-orange-500' : ''}`
            }>
              Contact
            </NavLink>
            <NavLink to="/order" 
              className="bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600 transition-colors"
            >
              Join Now
            </NavLink>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-gray-900 focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <NavLink to="/" 
                className="block px-3 py-2 text-gray-600 hover:text-gray-900"
                onClick={() => setIsOpen(false)}
              >
                Home
              </NavLink>
              <NavLink to="/about"
                className="block px-3 py-2 text-gray-600 hover:text-gray-900"
                onClick={() => setIsOpen(false)}
              >
                About
              </NavLink>
              <NavLink to="/services"
                className="block px-3 py-2 text-gray-600 hover:text-gray-900"
                onClick={() => setIsOpen(false)}
              >
                Services
              </NavLink>
              <NavLink to="/faq"
                className="block px-3 py-2 text-gray-600 hover:text-gray-900"
                onClick={() => setIsOpen(false)}
              >
                FAQ
              </NavLink>
              <NavLink to="/feedback"
                className="block px-3 py-2 text-gray-600 hover:text-gray-900"
                onClick={() => setIsOpen(false)}
              >
                Feedback
              </NavLink>
              <NavLink to="/contact"
                className="block px-3 py-2 text-gray-600 hover:text-gray-900"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </NavLink>
              <NavLink to="/order"
                className="block px-3 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600"
                onClick={() => setIsOpen(false)}
              >
                Join Now
              </NavLink>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}