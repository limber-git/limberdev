
import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-tech-dark py-8">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-center">         
          <div className="text-foreground/60 text-sm">
            &copy; {currentYear} Limber Tolaba. Todos los derechos reservados.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
