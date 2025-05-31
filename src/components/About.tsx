import React from "react";
import { BookOpen, Code2, Globe, Users } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";

const About = () => {
  const experiences = [
    {
      icon: <Code2 className="text-tech-blue" size={24} />,
      title: "Desarrollo Web",
      description:
        "2+ años de experiencia en desarrollo fullstack con tecnologías modernas.",
    },
    {
      icon: <Globe className="text-tech-purple" size={24} />,
      title: "APIs y Backend",
      description: "ASP.Net Web API y servicios REST escalables.",
    },
    {
      icon: <Users className="text-tech-accent" size={24} />,
      title: "Trabajo en Equipo",
      description:
        "Experiencia en metodologías ágiles y colaboración efectiva.",
    },
    {
      icon: <BookOpen className="text-tech-blue" size={24} />,
      title: "Aprendizaje Continuo",
      description:
        "Constantemente actualizando conocimientos en nuevas tecnologías.",
    },
  ];

  return (
    <section id="about" className="section-padding bg-secondary/20">
      <div className="container-custom">
        <div className="flex flex-col space-y-16">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 heading-gradient">
              Sobre Mí
            </h2>
            <p className="text-lg text-foreground/80 leading-relaxed">
              Soy un desarrollador de software, disfruto crear aplicaciones web
              modernas, servicios y APIs escalables y optimizadas.Trabajo con
              tecnologías de frontend y backend, disfrutando cada desafío que
              implique resolver problemas complejos y diseñar soluciones
              elegantes que mejoren la experiencia del usuario.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {experiences.map((item, index) => (
              <Card
                key={index}
                className="bg-secondary/40 border-secondary hover:border-tech-blue/50 transition-all"
              >
                <CardContent className="p-6">
                  <div className="mb-4">{item.icon}</div>
                  <CardTitle className="mb-2 text-lg">{item.title}</CardTitle>
                  <CardDescription className="text-foreground/70">
                    {item.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-tech-blue">
                Mi Enfoque
              </h3>
              <p className="text-foreground/80 leading-relaxed mb-6">
                Me especializo en el desarrollo de soluciones tecnológicas
                enfocadas en rendimiento, usabilidad y escalabilidad. Cada
                proyecto que realizo busca no solo cumplir con los requisitos
                técnicos, sino también ofrecer una experiencia de usuario
                intuitiva y fluida.
              </p>
              <p className="text-foreground/80 leading-relaxed">
                Mantengo una mentalidad de aprendizaje continuo, explorando
                nuevas herramientas y mejores prácticas para adaptar mis
                habilidades a los desafíos actuales del desarrollo de software.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-4 text-tech-purple">
                Trayectoria Profesional
              </h3>
              <div className="space-y-6">
                {/* Desarrollador Web Pasante - CBA */}
                <div className="border-l-2 border-tech-blue/50 pl-6 relative">
                  <div className="absolute w-3 h-3 bg-tech-blue rounded-full -left-[7px] top-1"></div>
                  <h4 className="font-semibold text-lg">
                    Web Developer
                  </h4>
                  <p className="text-sm text-tech-blue mb-1">
                    2023 - 2024 | Centro Boliviano Americano (CBA)
                  </p>
                  <p className="text-foreground/70">
                    Desarrollo de aplicaciones web con React + Vite, Node.js con
                    Express y PostgreSQL. Implementación de APIs RESTful y
                    arquitecturas escalables.
                  </p>

                  {/* Proyectos dentro del CBA */}
                  <div className="mt-3 space-y-2">
                    <p className="text-tech-blue font-semibold">
                      Proyectos Destacados:
                    </p>

                    <div className="pl-4 border-l-2 border-tech-blue/30">
                      <h5 className="font-medium">📌 CBA Games Jeopardy</h5>
                      <p className="text-sm text-foreground/70">
                        Aplicación interactiva basada en React para juegos
                        educativos estilo Jeopardy.
                      </p>
                    </div>

                    <div className="pl-4 border-l-2 border-tech-blue/30">
                      <h5 className="font-medium">📌 CBA Web Page</h5>
                      <p className="text-sm text-foreground/70">
                        Diseño y desarrollo de la página web institucional con
                        tecnologías modernas.
                      </p>
                    </div>

                    <div className="pl-4 border-l-2 border-tech-blue/30">
                      <h5 className="font-medium">
                        📌 ACS - Attendance Control System
                      </h5>
                      <p className="text-sm text-foreground/70">
                        Desarrollo de un sistema para la gestión de asistencia
                        utilizando React, Node.js y PostgreSQL.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Desarrollador Fullstack */}
                <div className="border-l-2 border-tech-blue/50 pl-6 relative">
                  <div className="absolute w-3 h-3 bg-tech-blue rounded-full -left-[7px] top-1"></div>
                  <h4 className="font-semibold text-lg">Proyectos propios</h4>
                  <p className="text-sm text-tech-blue mb-1">2024 - 2025</p>
                  <p className="text-foreground/70">
                    Trabajo con tecnologías frontend modernas y servicios
                    backend en NodeJS con Express y .NET.
                  </p>
                  <div className="mt-3 space-y-2">
                    <p className="text-tech-blue font-semibold">Proyectos:</p>

                    <div className="pl-4 border-l-2 border-tech-blue/30">
                      <h5 className="font-medium">📌 Proyecto Portafolio</h5>
                      <p className="text-sm text-foreground/70">
                        Aplicación informativa sobre mi experiancia laboral y
                        habilidades.
                      </p>
                    </div>
                  </div>
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
