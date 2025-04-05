
import React, { useState, useEffect, useRef } from 'react';
import { Mail, MapPin, Send } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  
  const contactRef = useRef<HTMLDivElement>(null);
  const { translations, language } = useLanguage();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const elements = entry.target.querySelectorAll('.animate-on-scroll');
          elements.forEach((el, index) => {
            setTimeout(() => {
              el.classList.add('animate-slide-up');
              el.classList.remove('opacity-0');
            }, index * 150);
          });
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (contactRef.current) {
      observer.observe(contactRef.current);
    }

    return () => {
      if (contactRef.current) {
        observer.unobserve(contactRef.current);
      }
    };
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setName('');
      setEmail('');
      setSubject('');
      setMessage('');
      
      // Reset submission status after 5 seconds
      setTimeout(() => {
        setSubmitted(false);
      }, 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="section-padding bg-bio-dark/50" ref={contactRef}>
      <div className="container mx-auto">
        <div className="mb-16 text-center animate-on-scroll opacity-0">
          <span className="inline-block glass-card py-1 px-3 rounded-full text-sm text-bio-accent mb-3">
            {translations.contact}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            {translations.contactTitle}
          </h2>
          <div className="h-1 w-20 bg-bio-accent mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5 animate-on-scroll opacity-0">
            <div className="glass-card p-8 rounded-xl h-full">
              <h3 className="text-2xl font-bold mb-6">
                {translations.getInTouch}
              </h3>
              
              <p className="text-white/80 mb-8">
                {language === 'en' 
                  ? 'Feel free to reach out if you\'re looking for a collaborator, have a question, or just want to connect.'
                  : 'Sinta-se à vontade para entrar em contato se estiver procurando um colaborador, tiver uma pergunta ou apenas quiser se conectar.'}
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full glass-button flex items-center justify-center mr-4 flex-shrink-0">
                    <Mail className="h-5 w-5 text-bio-accent" />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium mb-1">Email</h4>
                    <a href="mailto:br.joao.aires@gmail.com" className="text-white/70 hover:text-bio-accent transition-colors">
                      br.joao.aires@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full glass-button flex items-center justify-center mr-4 flex-shrink-0">
                    <MapPin className="h-5 w-5 text-bio-accent" />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium mb-1">
                      {translations.location}
                    </h4>
                    <p className="text-white/70">
                      Gurupi, Tocantins, Brasil
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-12">
                <h4 className="text-lg font-medium mb-4">
                  {translations.followMe}
                </h4>
                <div className="flex space-x-4">
                  <a href="https://github.com/jvtarss" target="_blank" rel="noreferrer" className="social-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                    </svg>
                  </a>
                  <a href="https://www.linkedin.com/in/jo%C3%A3o-vitor-aires-teixeira-55b97b225/" target="_blank" rel="noreferrer" className="social-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 animate-on-scroll opacity-0" style={{ animationDelay: '0.3s' }}>
            <div className="glass-card p-8 rounded-xl">
              <h3 className="text-2xl font-bold mb-6">
                {translations.sendMessage}
              </h3>
              
              {submitted ? (
                <div className="glass-card bg-bio-accent/20 border-bio-accent/30 p-6 rounded-lg text-center">
                  <div className="mb-4 inline-flex items-center justify-center w-16 h-16 rounded-full glass-button">
                    <svg className="w-8 h-8 text-bio-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <h4 className="text-xl font-medium mb-2">
                    {translations.messageSent}
                  </h4>
                  <p className="text-white/80">
                    {translations.thankYou}
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="name" className="block text-white/80 mb-2 text-sm">
                        {translations.name}
                      </label>
                      <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full glass-card bg-white/5 border-white/10 focus:border-bio-accent/50 p-3 rounded-lg text-white outline-none transition-all"
                        required
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-white/80 mb-2 text-sm">Email</label>
                      <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full glass-card bg-white/5 border-white/10 focus:border-bio-accent/50 p-3 rounded-lg text-white outline-none transition-all"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="subject" className="block text-white/80 mb-2 text-sm">
                      {translations.subject}
                    </label>
                    <select
                      id="subject"
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      className="w-full glass-card bg-white/5 border-white/10 focus:border-bio-accent/50 p-3 rounded-lg text-white outline-none transition-all"
                      required
                    >
                      <option value="" className="bg-bio-dark">
                        {translations.selectSubject}
                      </option>
                      <option value="collaboration" className="bg-bio-dark">
                        {translations.collaboration}
                      </option>
                      <option value="project" className="bg-bio-dark">
                        {translations.projectInquiry}
                      </option>
                      <option value="hiring" className="bg-bio-dark">
                        {translations.jobOpportunity}
                      </option>
                      <option value="other" className="bg-bio-dark">
                        {translations.other}
                      </option>
                    </select>
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="message" className="block text-white/80 mb-2 text-sm">
                      {translations.message}
                    </label>
                    <textarea
                      id="message"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      rows={5}
                      className="w-full glass-card bg-white/5 border-white/10 focus:border-bio-accent/50 p-3 rounded-lg text-white outline-none transition-all"
                      required
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`accent-button flex items-center justify-center px-6 py-3 rounded-lg w-full md:w-auto ${
                      isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                    }`}
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-bio-dark" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        {translations.sending}
                      </>
                    ) : (
                      <>
                        <Send className="mr-2 h-5 w-5" />
                        {translations.send}
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
