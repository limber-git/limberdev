
import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Github, 
  Linkedin, 
  Twitter,
  Send
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const contactInfo = [
    {
      icon: <Mail className="text-tech-blue" />,
      text: "limbertolaba@gmail.com",
      href: "mailto:limbertolaba@gmail.com"
    },
    {
      icon: <Phone className="text-tech-purple" />,
      text: "+54 XXX XXX XXXX",
      href: "tel:+54XXXXXXXXXX"
    },
    {
      icon: <MapPin className="text-tech-accent" />,
      text: "Argentina",
      href: "#"
    }
  ];

  const socialLinks = [
    {
      icon: <Github size={20} />,
      href: "https://github.com/limbertolaba",
      label: "GitHub"
    },
    {
      icon: <Linkedin size={20} />,
      href: "https://linkedin.com/in/limbertolaba",
      label: "LinkedIn"
    },
    {
      icon: <Twitter size={20} />,
      href: "https://twitter.com/limbertolaba",
      label: "Twitter"
    }
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Mensaje enviado",
        description: "Gracias por tu mensaje. Te responderé lo antes posible.",
      });
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section id="contact" className="section-padding">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 heading-gradient">Contacto</h2>
          <p className="text-lg text-foreground/80">
            ¿Interesado en trabajar juntos? Completa el formulario a continuación o contáctame directamente a través de mis canales de comunicación.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h3 className="text-xl font-bold mb-6 text-tech-blue">Información de Contacto</h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <a 
                    key={index} 
                    href={info.href}
                    className="flex items-center space-x-4 group"
                  >
                    <div className="p-3 rounded-full bg-secondary/60 group-hover:bg-tech-blue/20 transition-colors">
                      {info.icon}
                    </div>
                    <span className="text-foreground/80 group-hover:text-tech-blue transition-colors">
                      {info.text}
                    </span>
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-6 text-tech-purple">Redes Sociales</h3>
              <div className="flex space-x-4">
                {socialLinks.map((link, index) => (
                  <a 
                    key={index} 
                    href={link.href} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-3 rounded-full bg-secondary hover:bg-tech-blue/20 text-foreground/80 hover:text-tech-blue transition-colors"
                    aria-label={link.label}
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="tech-card p-6 rounded-xl">
              <div className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2 text-foreground/80">
                    Nombre
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Tu nombre"
                    required
                    className="bg-secondary/50 border-secondary/70"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2 text-foreground/80">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="tu@email.com"
                    required
                    className="bg-secondary/50 border-secondary/70"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2 text-foreground/80">
                    Mensaje
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="¿En qué puedo ayudarte?"
                    rows={5}
                    required
                    className="bg-secondary/50 border-secondary/70"
                  />
                </div>
                
                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="bg-tech-blue hover:bg-tech-blue/90 text-white w-full"
                >
                  {isSubmitting ? (
                    <span className="flex items-center">
                      <div className="animate-spin mr-2 h-4 w-4 border-2 border-white border-t-transparent rounded-full"></div>
                      Enviando...
                    </span>
                  ) : (
                    <span className="flex items-center">
                      <Send size={16} className="mr-2" />
                      Enviar Mensaje
                    </span>
                  )}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
