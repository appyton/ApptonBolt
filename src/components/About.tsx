import React, { useEffect, useRef } from 'react';
import { Check } from 'lucide-react';

export const About = () => {
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

  const benefits = [
    'Certified Salesforce experts with years of industry experience',
    'Tailored solutions designed to meet your specific business needs',
    'Proven track record of successful implementations across industries',
    'Ongoing support and optimization to maximize your ROI',
  ];

  return (
    <section id="about" className="section">
      <div className="container">
        <div className="flex flex-col md:flex-row md:items-center gap-12">
          <div className="md:w-1/2">
            <div 
              ref={el => elementsRef.current[0] = el}
              className="relative animate-fade-in"
            >
              <div className="absolute inset-0 bg-blue-600 rounded-lg transform translate-x-3 translate-y-3"></div>
              <img 
                src="https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Appyton team collaborating" 
                className="relative z-10 rounded-lg shadow-lg w-full h-auto"
              />
            </div>
          </div>
          
          <div className="md:w-1/2">
            <div 
              ref={el => elementsRef.current[1] = el}
              className="animate-fade-in"
            >
              <h2 className="mb-4">About Appyton</h2>
              <p className="text-gray-700 mb-6">
                Appyton is a leading Software IT company specializing in Salesforce technology. We provide comprehensive implementation services, support projects, and specialized training to help businesses leverage the full power of the Salesforce platform.
              </p>
              <p className="text-gray-700 mb-8">
                Our team of certified Salesforce experts is dedicated to delivering high-quality solutions that drive business growth and improve operational efficiency. With years of experience across multiple industries, we have the knowledge and expertise to tackle even the most complex Salesforce challenges.
              </p>
              
              <div className="space-y-3">
                {benefits.map((benefit, index) => (
                  <div 
                    key={index}
                    ref={el => elementsRef.current[index + 2] = el}
                    className="flex items-start animate-fade-in"
                    style={{ animationDelay: `${0.1 * (index + 1)}s` }}
                  >
                    <div className="mr-3 mt-1 bg-blue-100 rounded-full p-1">
                      <Check className="h-4 w-4 text-blue-600" />
                    </div>
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};