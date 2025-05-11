import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdown = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '#home' },
    { 
      name: 'Services', 
      path: '#services',
      dropdown: [
        { name: 'Salesforce Implementation', path: '#salesforce-implementation' },
        { name: 'Support Projects', path: '#support-projects' },
        { name: 'Training', path: '#training' },
      ]
    },
    { name: 'About', path: '#about' },
    { name: 'Case Studies', path: '#case-studies' },
    { name: 'Contact', path: '#contact' },
  ];

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <div className="text-2xl font-bold text-blue-600">Appyton</div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link, index) => (
            <div key={index} className="relative group">
              {link.dropdown ? (
                <div className="flex items-center cursor-pointer">
                  <a 
                    href={link.path}
                    className={`text-${isScrolled ? 'gray-800' : 'white'} hover:text-blue-600 font-medium transition-colors duration-200`}
                  >
                    {link.name}
                  </a>
                  <ChevronDown 
                    className={`ml-1 w-4 h-4 text-${isScrolled ? 'gray-800' : 'white'} group-hover:text-blue-600 transition-transform duration-200 ${activeDropdown === link.name ? 'rotate-180' : ''}`}
                    onClick={(e) => {
                      e.preventDefault();
                      toggleDropdown(link.name);
                    }}
                  />
                </div>
              ) : (
                <a 
                  href={link.path}
                  className={`text-${isScrolled ? 'gray-800' : 'white'} hover:text-blue-600 font-medium transition-colors duration-200`}
                >
                  {link.name}
                </a>
              )}

              {/* Dropdown Menu */}
              {link.dropdown && (
                <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform origin-top-right">
                  <div className="py-1" role="menu" aria-orientation="vertical">
                    {link.dropdown.map((dropdownItem, dropdownIndex) => (
                      <a
                        key={dropdownIndex}
                        href={dropdownItem.path}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-blue-600"
                        role="menuitem"
                      >
                        {dropdownItem.name}
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
          
          <a 
            href="#contact" 
            className="btn btn-primary"
          >
            Get Started
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button 
            onClick={toggleMenu}
            className={`${isScrolled ? 'text-gray-800' : 'text-white'} hover:text-blue-600 focus:outline-none transition-colors duration-200`}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div 
        className={`md:hidden bg-white w-full overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-screen opacity-100 shadow-lg' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="container mx-auto px-4 py-2">
          {navLinks.map((link, index) => (
            <div key={index} className="py-2">
              {link.dropdown ? (
                <div>
                  <div 
                    className="flex items-center justify-between py-2"
                    onClick={() => toggleDropdown(link.name)}
                  >
                    <a href={link.path} className="text-gray-800 hover:text-blue-600 font-medium">
                      {link.name}
                    </a>
                    <ChevronDown 
                      className={`w-4 h-4 text-gray-800 transition-transform duration-200 ${activeDropdown === link.name ? 'rotate-180' : ''}`}
                    />
                  </div>
                  
                  {/* Mobile Dropdown */}
                  <div 
                    className={`pl-4 space-y-2 overflow-hidden transition-all duration-200 ${
                      activeDropdown === link.name ? 'max-h-40 pt-2' : 'max-h-0'
                    }`}
                  >
                    {link.dropdown.map((dropdownItem, dropdownIndex) => (
                      <a
                        key={dropdownIndex}
                        href={dropdownItem.path}
                        className="block text-gray-600 hover:text-blue-600 py-1"
                      >
                        {dropdownItem.name}
                      </a>
                    ))}
                  </div>
                </div>
              ) : (
                <a href={link.path} className="block py-2 text-gray-800 hover:text-blue-600 font-medium">
                  {link.name}
                </a>
              )}
            </div>
          ))}
          <div className="py-4">
            <a 
              href="#contact" 
              className="btn btn-primary w-full text-center"
            >
              Get Started
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};