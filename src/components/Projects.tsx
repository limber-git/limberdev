import React from "react";
import { ExternalLink, Github, Server, Code2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Projects = () => {
  const masterMindImage = "/assets/mastermind.JPG";
  const portafolioimage = "/assets/portafolioimage.png";
  const projects = [
    {
      title: "Mi Portafolio",
      description:
        "Portafolio profesional donde muestro mis proyectos y habilidades como desarrollador fullstack.",
      image: portafolioimage,
      tags: ["React", "Vite", "TypeScript", "Tailwind CSS", "shadcn-ui"],
      demoLink: "#", // Cambia por tu URL real
      codeLink: "https://github.com/limber-git/tolaba-web-craft",
      features: ["formspree.io", "Optimización para mobile", "Sección de blog"],
    },
    {
      title: "CBA Web Page",
      description:
        "Sitio web institucional del Centro Boliviano Americano, optimizado para accesibilidad y SEO.",
      image:
        "https://scontent.fvvi1-2.fna.fbcdn.net/v/t39.30808-6/482243320_1061107199378358_4983178273654563984_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=cc71e4&_nc_ohc=PPsz0uLc1YQQ7kNvgG22JsT&_nc_oc=AdleBo-MgPYhe0WWoKeZUJjU2mTXIMfcgT91FSP0Ubt4zpkHlpb8dMSN4q6e4sisraIduGgz4lRyWpL3GdHgarje&_nc_zt=23&_nc_ht=scontent.fvvi1-2.fna&_nc_gid=mJ7ByBgC9oWZJsazjqbaJw&oh=00_AYHQB7g-3xf1faN79X-ZdGkqhc-ifbqHqKPwhMyvZYVylA&oe=67F1FBD1", // Usa una imagen real
      tags: ["React + Vite", "Tailwind CSS", "Express.js", "PostgreSQL"],
      demoLink: "https://cba.org.bo/about", // Si tienes el link real
      codeLink: "", // Si no es público, deja "#"
      features: ["SEO optimizado", "Dashboard available", "Autenticación Segura"],
    },
    {
      title: "ACS - Sistema de Control de Asistencia",
      description:
        "Sistema para gestión de asistencia con generación de reportes en tiempo real.",
      image:
        "https://www.sumopayroll.com/wp-content/uploads/2020/01/attendance-management-system.jpg",
      tags: ["React", "Node.js", "PostgreSQL", "Sequealize"],
      demoLink: "http://acs.cba.org.bo",
      codeLink: "https://github.com/limber-git/BOLETASCBA",
      features: [
        "Analisis de datos biometricos",
        "Generación de reportes",
        "Autenticación segura",
      ],
    },
    {
      title: "CBA Games Jeopardy",
      description:
        "Juego de preguntas estilo Jeopardy desarrollado para el Centro Boliviano Americano.",
      image: masterMindImage,
      tags: ["Vue.js", "Firebase", "Node.js"],
      demoLink: "#",
      codeLink: "https://github.com/olivio-git/GAME_QUIZZ_CBA",
      features: [
        "Sistema de puntuación",
        "Multijugador",
        "Integración con PostgreSQL",
      ],
    },
  ];

  return (
    <section id="projects" className="section-padding bg-secondary/20">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 heading-gradient">
            Proyectos Destacados
          </h2>
          <p className="text-lg text-foreground/80">
            Estos son algunos de mis proyectos más relevantes, que demuestran
            mis habilidades técnicas y capacidad para desarrollar soluciones
            completas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="bg-secondary/40 border-secondary overflow-hidden hover:border-tech-blue/50 transition-all"
            >
              <div
                className={`h-48 ${project.image} flex items-center justify-center`}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <div className="flex flex-wrap gap-2 mt-2">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge
                      key={tagIndex}
                      variant="secondary"
                      className="bg-secondary text-foreground/80"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-foreground/80 mb-4">
                  {project.description}
                </CardDescription>
                <div className="mt-4">
                  <h4 className="text-sm font-medium mb-2">Características:</h4>
                  <ul className="list-disc list-inside text-sm text-foreground/70">
                    {project.features.map((feature, featureIndex) => (
                      <li key={featureIndex}>{feature}</li>
                    ))}
                  </ul>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="ghost" className="text-tech-blue" asChild>
                  <a
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink size={16} className="mr-2" />
                    Demo
                  </a>
                </Button>
                <Button variant="ghost" className="text-tech-purple" asChild>
                  <a
                    href={project.codeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github size={16} className="mr-2" />
                    Código
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            className="bg-tech-blue hover:bg-tech-blue/90 text-white"
            asChild
          >
            <a
              href="https://github.com/limber-git?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github size={18} className="mr-2" />
              Más proyectos en GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
