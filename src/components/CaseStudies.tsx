import React, { useEffect, useRef } from 'react';
import { ArrowUpRight } from 'lucide-react';

export const CaseStudies = () => {
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

  const caseStudies = [
    {
      title: "Global Manufacturing Company",
      category: "Sales Cloud Implementation",
      description: "Streamlined sales processes resulting in 35% increase in productivity and 28% boost in revenue.",
      image: "https://images.pexels.com/photos/2760243/pexels-photo-2760243.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      title: "Healthcare Provider Network",
      category: "Service Cloud Optimization",
      description: "Improved customer satisfaction by 42% and reduced case resolution time by 60%.",
      image: "https://images.pexels.com/photos/1170979/pexels-photo-1170979.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      title: "Retail Chain",
      category: "Multi-Cloud Integration",
      description: "Unified customer data across platforms, leading to 50% increase in marketing campaign effectiveness.",
      image: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    }
  ];

  return (
    <section id="case-studies" className="section">
      <div className="container">
        <div className="text-center mb-16">
          <h2 
            ref={el => elementsRef.current[0] = el}
            className="mb-4 animate-fade-in"
          >
            Success Stories
          </h2>
          <p 
            ref={el => elementsRef.current[1] = el}
            className="max-w-2xl mx-auto text-lg text-gray-600 animate-fade-in"
          >
            Explore how we've helped organizations across various industries transform their business with Salesforce.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <div
              key={index}
              ref={el => elementsRef.current[index + 2] = el}
              className="group animate-fade-in overflow-hidden rounded-lg shadow-lg"
              style={{ animationDelay: `${0.2 * (index + 1)}s` }}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={study.image} 
                  alt={study.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-6">
                  <span className="inline-block px-3 py-1 bg-blue-600 text-white text-xs font-medium rounded-full mb-2">
                    {study.category}
                  </span>
                  <h3 className="text-white text-xl font-bold">{study.title}</h3>
                </div>
              </div>
              <div className="p-6 bg-white">
                <p className="text-gray-600 mb-4">{study.description}</p>
                <a 
                  href="#" 
                  className="inline-flex items-center text-blue-600 font-medium group-hover:text-blue-700"
                >
                  Read case study <ArrowUpRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </a>
              </div>
            </div>
          ))}
        </div>

        <div 
          ref={el => elementsRef.current[5] = el}
          className="text-center mt-12 animate-fade-in"
        >
          <a href="#" className="btn btn-primary">View All Case Studies</a>
        </div>
      </div>
    </section>
  );
};