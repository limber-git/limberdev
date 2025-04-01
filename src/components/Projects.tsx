
import React from 'react';
import { 
  ExternalLink,
  Github,
  Server,
  Code2
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Projects = () => {
  const projects = [
    {
      title: "Sistema de Gestión Empresarial",
      description: "Aplicación web fullstack para la gestión integral de recursos empresariales, incluyendo inventario, ventas y reportes.",
      image: "bg-gradient-to-br from-blue-500/30 to-purple-500/30",
      tags: ["ASP.NET Web API", "React", "SQL Server", "Azure"],
      demoLink: "#",
      codeLink: "#",
      features: ["Autenticación JWT", "Panel de administración", "Reportes en tiempo real"]
    },
    {
      title: "API de Comercio Electrónico",
      description: "Servicio RESTful para plataforma de e-commerce con gestión de productos, carrito de compras y procesamiento de pagos.",
      image: "bg-gradient-to-br from-purple-500/30 to-pink-500/30",
      tags: ["Express", "MongoDB", "Docker", "AWS"],
      demoLink: "#",
      codeLink: "#",
      features: ["Microservicios", "Pasarela de pagos", "Cache con Redis"]
    },
    {
      title: "Portal de Noticias",
      description: "Sitio web responsive para publicación y consumo de noticias con funcionalidades de búsqueda y filtrado avanzado.",
      image: "bg-gradient-to-br from-indigo-500/30 to-cyan-500/30",
      tags: ["NextJS", "TypeScript", "Tailwind CSS", "GraphQL"],
      demoLink: "#",
      codeLink: "#",
      features: ["SSR", "Modo offline", "PWA"]
    },
    {
      title: "Dashboard Analítico",
      description: "Panel de control interactivo para visualización de datos y métricas de negocio con gráficos personalizables.",
      image: "bg-gradient-to-br from-green-500/30 to-blue-500/30",
      tags: ["React", "D3.js", "ASP.NET Core", "SQL"],
      demoLink: "#",
      codeLink: "#",
      features: ["Gráficos en tiempo real", "Exportación de datos", "Roles de usuario"]
    }
  ];

  return (
    <section id="projects" className="section-padding bg-secondary/20">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 heading-gradient">Proyectos Destacados</h2>
          <p className="text-lg text-foreground/80">
            Estos son algunos de mis proyectos más relevantes, que demuestran mis habilidades técnicas y capacidad para desarrollar soluciones completas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="bg-secondary/40 border-secondary overflow-hidden hover:border-tech-blue/50 transition-all">
              <div className={`h-48 ${project.image} flex items-center justify-center`}>
                <div className="flex space-x-4">
                  <Server size={32} className="text-white" />
                  <Code2 size={32} className="text-white" />
                </div>
              </div>
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <div className="flex flex-wrap gap-2 mt-2">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="secondary" className="bg-secondary text-foreground/80">
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
                  <a href={project.demoLink} target="_blank" rel="noopener noreferrer">
                    <ExternalLink size={16} className="mr-2" />
                    Demo
                  </a>
                </Button>
                <Button variant="ghost" className="text-tech-purple" asChild>
                  <a href={project.codeLink} target="_blank" rel="noopener noreferrer">
                    <Github size={16} className="mr-2" />
                    Código
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button className="bg-tech-blue hover:bg-tech-blue/90 text-white" asChild>
            <a href="https://github.com/limbertolaba" target="_blank" rel="noopener noreferrer">
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
