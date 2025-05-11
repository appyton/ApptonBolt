import React, { useEffect, useRef } from 'react';
import { Cloud, Server, Shield, BarChart } from 'lucide-react';

export const CloudSolutions = () => {
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

  const solutions = [
    {
      title: 'Sales Cloud',
      description: 'Drive sales performance with AI-powered insights, automation and integrated tools to close more deals faster.',
      icon: <BarChart className="h-8 w-8 text-blue-600" />,
    },
    {
      title: 'Service Cloud',
      description: 'Deliver exceptional customer service experiences across every channel and touchpoint.',
      icon: <Cloud className="h-8 w-8 text-blue-600" />,
    },
    {
      title: 'Experience Cloud',
      description: 'Build branded digital experiences that connect customers, partners, and employees with your business.',
      icon: <Server className="h-8 w-8 text-blue-600" />,
    },
    {
      title: 'Financial Services Cloud',
      description: 'Transform financial services with a unified platform designed for banks, insurance, and wealth management.',
      icon: <Shield className="h-8 w-8 text-blue-600" />,
    },
  ];

  return (
    <section className="section bg-gradient-to-r from-blue-900 to-blue-700 text-white">
      <div className="container">
        <div className="text-center mb-16">
          <h2 
            ref={el => elementsRef.current[0] = el}
            className="mb-4 text-white animate-fade-in"
          >
            Cloud Solutions
          </h2>
          <p 
            ref={el => elementsRef.current[1] = el}
            className="max-w-2xl mx-auto text-lg text-blue-100 animate-fade-in"
          >
            We specialize in implementing and optimizing various Salesforce cloud solutions to meet your specific business needs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {solutions.map((solution, index) => (
            <div
              key={index}
              ref={el => elementsRef.current[index + 2] = el}
              className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${0.2 * (index + 1)}s` }}
            >
              <div className="bg-white/20 inline-flex rounded-full p-3 mb-4">
                {solution.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">{solution.title}</h3>
              <p className="text-blue-100">{solution.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};