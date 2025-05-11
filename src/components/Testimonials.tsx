import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

export const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
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

  const testimonials = [
    {
      quote: "Appyton's team delivered an exceptional Salesforce implementation that transformed our sales process. Their attention to detail and commitment to our success was impressive.",
      author: "Sarah Johnson",
      position: "VP of Sales, TechCorp Inc.",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      quote: "The training provided by Appyton was comprehensive and tailored to our specific needs. Our team is now fully equipped to maximize the potential of our Salesforce investment.",
      author: "Michael Chen",
      position: "CTO, Global Solutions",
      image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      quote: "We've been working with Appyton for our Salesforce support needs for over three years. Their responsiveness and technical expertise have been invaluable to our organization.",
      author: "Jennifer Lopez",
      position: "Director of Operations, Innovative Systems",
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    }
  ];

  const nextTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="section bg-gray-50">
      <div className="container">
        <div className="text-center mb-16">
          <h2 
            ref={el => elementsRef.current[0] = el}
            className="mb-4 animate-fade-in"
          >
            What Our Clients Say
          </h2>
          <p 
            ref={el => elementsRef.current[1] = el}
            className="max-w-2xl mx-auto text-lg text-gray-600 animate-fade-in"
          >
            Hear from businesses that have transformed their operations with our Salesforce solutions.
          </p>
        </div>

        <div 
          ref={el => elementsRef.current[2] = el}
          className="max-w-4xl mx-auto animate-fade-in"
        >
          <div className="relative bg-white rounded-lg shadow-lg p-8 md:p-12">
            <div className="absolute top-8 left-8 text-blue-600 opacity-20">
              <Quote size={60} />
            </div>
            
            <div className="relative z-10">
              <p className="text-xl md:text-2xl text-gray-700 italic mb-8">
                "{testimonials[activeIndex].quote}"
              </p>
              
              <div className="flex items-center">
                <div className="mr-4">
                  <img 
                    src={testimonials[activeIndex].image} 
                    alt={testimonials[activeIndex].author}
                    className="h-14 w-14 rounded-full object-cover"
                  />
                </div>
                <div>
                  <p className="font-bold text-gray-900">{testimonials[activeIndex].author}</p>
                  <p className="text-gray-600">{testimonials[activeIndex].position}</p>
                </div>
              </div>
            </div>
            
            <div className="absolute bottom-8 right-8 flex space-x-2">
              <button 
                onClick={prevTestimonial}
                className="p-2 rounded-full bg-gray-100 hover:bg-blue-100 text-gray-600 hover:text-blue-600 transition-colors duration-200"
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={20} />
              </button>
              <button 
                onClick={nextTestimonial}
                className="p-2 rounded-full bg-gray-100 hover:bg-blue-100 text-gray-600 hover:text-blue-600 transition-colors duration-200"
                aria-label="Next testimonial"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
          
          <div className="flex justify-center mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`h-2 w-2 rounded-full mx-1 transition-all duration-200 ${
                  index === activeIndex ? 'bg-blue-600 w-6' : 'bg-gray-300'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};