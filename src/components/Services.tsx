import React, { useEffect, useRef } from 'react';
import { CloudCog, HeartHandshake, GraduationCap, ArrowRight } from 'lucide-react';

export const Services = () => {
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

  const services = [
    {
      id: 'salesforce-implementation',
      title: 'Salesforce Implementation',
      description:
        'Comprehensive Salesforce implementation services tailored to your business needs. We handle everything from initial setup to custom development and integration.',
      icon: <CloudCog className="h-10 w-10 text-blue-600" />,
      features: [
        'Business process analysis and optimization',
        'Custom Salesforce configuration',
        'Data migration and integration',
        'User training and adoption support',
      ],
    },
    {
      id: 'support-projects',
      title: 'Support Projects',
      description:
        'Ongoing support and maintenance services to ensure your Salesforce instance continues to deliver value and adapts to your evolving business needs.',
      icon: <HeartHandshake className="h-10 w-10 text-blue-600" />,
      features: [
        '24/7 technical support',
        'Performance optimization',
        'Regular health checks and maintenance',
        'Issue resolution and troubleshooting',
      ],
    },
    {
      id: 'training',
      title: 'Training',
      description:
        'Comprehensive training programs designed to empower your team with the skills and knowledge needed to maximize the value of your Salesforce investment.',
      icon: <GraduationCap className="h-10 w-10 text-blue-600" />,
      features: [
        'Customized training programs',
        'Role-based learning paths',
        'Hands-on workshops',
        'Certification preparation',
      ],
    },
  ];

  return (
    <section id="services" className="section bg-gray-50">
      <div className="container">
        <div className="text-center mb-16">
          <h2 
            ref={el => elementsRef.current[0] = el}
            className="mb-4 animate-fade-in"
          >
            Our Services
          </h2>
          <p 
            ref={el => elementsRef.current[1] = el}
            className="max-w-2xl mx-auto text-lg text-gray-600 animate-fade-in"
          >
            We offer a comprehensive suite of Salesforce services to help your business thrive in the digital age.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.id}
              id={service.id}
              ref={el => elementsRef.current[index + 2] = el}
              className="card group hover:translate-y-[-8px] animate-fade-in"
              style={{ animationDelay: `${0.2 * (index + 1)}s` }}
            >
              <div className="mb-6">{service.icon}</div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-6">{service.description}</p>
              
              <ul className="mb-6 space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    <div className="mr-2 mt-1 text-blue-600">•</div>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <a 
                href={`#${service.id}-details`} 
                className="inline-flex items-center text-blue-600 font-medium group-hover:text-blue-700"
              >
                Learn more <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};