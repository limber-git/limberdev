
import React from 'react';
import { BookOpen, Code2, Globe, Users } from 'lucide-react';
import { Card, CardContent, CardDescription, CardTitle } from '@/components/ui/card';

const About = () => {
  const experiences = [
    {
      icon: <Code2 className="text-tech-blue" size={24} />,
      title: "Desarrollo Web",
      description: "5+ años de experiencia en desarrollo fullstack con tecnologías modernas."
    },
    {
      icon: <Globe className="text-tech-purple" size={24} />,
      title: "APIs y Backend",
      description: "Especialista en ASP.Net Web API y servicios REST escalables."
    },
    {
      icon: <Users className="text-tech-accent" size={24} />,
      title: "Trabajo en Equipo",
      description: "Experiencia en metodologías ágiles y colaboración efectiva."
    },
    {
      icon: <BookOpen className="text-tech-blue" size={24} />,
      title: "Aprendizaje Continuo",
      description: "Constantemente actualizando conocimientos en nuevas tecnologías."
    }
  ];

  return (
    <section id="about" className="section-padding bg-secondary/20">
      <div className="container-custom">
        <div className="flex flex-col space-y-16">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 heading-gradient">Sobre Mí</h2>
            <p className="text-lg text-foreground/80 leading-relaxed">
              Soy un desarrollador de software especializado en la creación de aplicaciones web robustas y escalables. 
              Con experiencia en múltiples tecnologías de frontend y backend, disfruto resolviendo problemas complejos 
              y creando soluciones elegantes que brindan excelentes experiencias a los usuarios.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {experiences.map((item, index) => (
              <Card key={index} className="bg-secondary/40 border-secondary hover:border-tech-blue/50 transition-all">
                <CardContent className="p-6">
                  <div className="mb-4">{item.icon}</div>
                  <CardTitle className="mb-2 text-lg">{item.title}</CardTitle>
                  <CardDescription className="text-foreground/70">{item.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-tech-blue">Mi Enfoque</h3>
              <p className="text-foreground/80 leading-relaxed mb-6">
                Me apasiona la creación de soluciones tecnológicas que no solo cumplen con los requisitos técnicos, 
                sino que también ofrecen una excelente experiencia de usuario. Busco siempre el equilibrio entre 
                código limpio, rendimiento y usabilidad.
              </p>
              <p className="text-foreground/80 leading-relaxed">
                Me mantengo constantemente actualizado con las últimas tecnologías y mejores prácticas en desarrollo 
                de software, adaptándome rápidamente a nuevos frameworks y herramientas.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-4 text-tech-purple">Trayectoria Profesional</h3>
              <div className="space-y-6">
                <div className="border-l-2 border-tech-blue/50 pl-6 relative">
                  <div className="absolute w-3 h-3 bg-tech-blue rounded-full -left-[7px] top-1"></div>
                  <h4 className="font-semibold text-lg">Desarrollador Web Senior</h4>
                  <p className="text-sm text-tech-blue mb-1">2021 - Presente</p>
                  <p className="text-foreground/70">
                    Desarrollo de aplicaciones web con React, .NET Core y SQL Server. Implementación de APIs RESTful y arquitecturas escalables.
                  </p>
                </div>
                
                <div className="border-l-2 border-tech-blue/50 pl-6 relative">
                  <div className="absolute w-3 h-3 bg-tech-blue rounded-full -left-[7px] top-1"></div>
                  <h4 className="font-semibold text-lg">Desarrollador Fullstack</h4>
                  <p className="text-sm text-tech-blue mb-1">2018 - 2021</p>
                  <p className="text-foreground/70">
                    Trabajo con tecnologías frontend modernas y servicios backend en Express y ASP.NET. Desarrollo de soluciones end-to-end.
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

export default About;
