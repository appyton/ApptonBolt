import React, { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';

export const Hero = () => {
  const elementsRef = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    elementsRef.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => {
      elementsRef.current.forEach((el) => {
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center pt-16 overflow-hidden"
      style={{
        backgroundImage: 'linear-gradient(135deg, #1a365d 0%, #2a4365 100%)',
      }}
    >
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute -right-64 -top-64 w-96 h-96 rounded-full bg-blue-400"></div>
        <div className="absolute -left-64 -bottom-64 w-96 h-96 rounded-full bg-blue-300"></div>
      </div>

      <div className="container mx-auto px-4 py-20 md:py-32 relative z-10">
        <div className="flex flex-col md:flex-row md:items-center">
          <div className="md:w-1/2 md:pr-10">
            <h1 
              ref={el => elementsRef.current[0] = el}
              className="text-white mb-6 animate-fade-in"
              style={{animationDelay: '0.1s'}}
            >
              Salesforce Solutions That Transform Your Business
            </h1>
            <p 
              ref={el => elementsRef.current[1] = el}
              className="text-blue-100 text-lg md:text-xl mb-8 animate-fade-in"
              style={{animationDelay: '0.3s'}}
            >
              Appyton specializes in Salesforce implementation, support, and training to help you maximize your CRM investment and drive business growth.
            </p>
            <div 
              ref={el => elementsRef.current[2] = el}
              className="flex flex-col sm:flex-row gap-4 animate-fade-in"
              style={{animationDelay: '0.5s'}}
            >
              <a 
                href="#services" 
                className="btn btn-primary"
              >
                Explore Services
              </a>
              <a 
                href="#contact" 
                className="btn btn-secondary bg-transparent border-white text-white hover:bg-white/10"
              >
                Contact Us <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </div>
          </div>
          <div className="md:w-1/2 mt-10 md:mt-0">
            <div 
              ref={el => elementsRef.current[3] = el}
              className="relative animate-fade-in rounded-lg overflow-hidden shadow-2xl"
              style={{animationDelay: '0.7s'}}
            >
              <img 
                src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Team collaborating on Salesforce solutions"
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};