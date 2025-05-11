import React, { useState, useEffect, useRef } from 'react';
import { Phone, Mail, MapPin, Send } from 'lucide-react';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
  });
  
  const [formSubmitted, setFormSubmitted] = useState(false);
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real implementation, you would send the form data to your backend
    console.log('Form submitted:', formData);
    setFormSubmitted(true);
    // Reset form after submission
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      message: '',
    });
    // Show success message for 3 seconds
    setTimeout(() => {
      setFormSubmitted(false);
    }, 5000);
  };

  const contactInfo = [
    {
      icon: <Phone className="h-5 w-5 text-blue-600" />,
      title: 'Call Us',
      details: '+91 9966661137',
    },
    {
      icon: <Mail className="h-5 w-5 text-blue-600" />,
      title: 'Email Us',
      details: 'admin@appyton.com',
    },
    {
      icon: <MapPin className="h-5 w-5 text-blue-600" />,
      title: 'Visit Us',
      details: 'India',
    },
  ];

  return (
    <section id="contact" className="section bg-gray-50">
      <div className="container">
        <div className="text-center mb-16">
          <h2 
            ref={el => elementsRef.current[0] = el}
            className="mb-4 animate-fade-in"
          >
            Get In Touch
          </h2>
          <p 
            ref={el => elementsRef.current[1] = el}
            className="max-w-2xl mx-auto text-lg text-gray-600 animate-fade-in"
          >
            Ready to transform your business with Salesforce? Contact us today for a free consultation.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {contactInfo.map((info, index) => (
            <div
              key={index}
              ref={el => elementsRef.current[index + 2] = el}
              className="bg-white rounded-lg p-6 text-center shadow-md animate-fade-in"
              style={{ animationDelay: `${0.2 * (index + 1)}s` }}
            >
              <div className="inline-flex items-center justify-center h-12 w-12 bg-blue-100 rounded-full mb-4">
                {info.icon}
              </div>
              <h3 className="text-lg font-bold mb-2">{info.title}</h3>
              <p className="text-gray-600">{info.details}</p>
            </div>
          ))}
        </div>

        <div 
          ref={el => elementsRef.current[5] = el}
          className="bg-white rounded-lg shadow-lg overflow-hidden animate-fade-in"
        >
          <div className="grid md:grid-cols-2">
            <div className="p-8 lg:p-12">
              <h3 className="text-2xl font-bold mb-6">Send Us a Message</h3>
              
              {formSubmitted && (
                <div className="mb-6 p-4 bg-green-100 text-green-700 rounded-md">
                  Thank you for your message! We'll get back to you shortly.
                </div>
              )}
              
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                      Company Name
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="btn btn-primary w-full flex items-center justify-center"
                >
                  Send Message <Send className="ml-2 h-4 w-4" />
                </button>
              </form>
            </div>
            
            <div className="bg-blue-600 p-8 lg:p-12 text-white">
              <h3 className="text-2xl font-bold mb-6">How We Can Help</h3>
              <p className="mb-8">
                Our team of Salesforce experts is ready to help you with your specific needs. Whether you're looking to implement a new Salesforce instance, optimize your existing setup, or train your team, we've got you covered.
              </p>
              
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-bold mb-2">Salesforce Implementation</h4>
                  <p className="text-blue-100">
                    Custom Salesforce solutions tailored to your business needs.
                  </p>
                </div>
                
                <div>
                  <h4 className="text-lg font-bold mb-2">Ongoing Support</h4>
                  <p className="text-blue-100">
                    Comprehensive support to ensure your Salesforce instance runs smoothly.
                  </p>
                </div>
                
                <div>
                  <h4 className="text-lg font-bold mb-2">Training Programs</h4>
                  <p className="text-blue-100">
                    Custom training to empower your team to get the most out of Salesforce.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};