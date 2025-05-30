import React from "react";
import { ArrowDown, Code, Database, Server } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center pt-20 pb-10 relative overflow-hidden"
    >
      {/* Background grid */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="w-full h-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="flex flex-col space-y-6 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
              <span className="heading-gradient">Limber Tolaba</span>
            </h1>
            <p className="text-lg md:text-xl text-foreground/60 max-w-xl">
              Desarrollador de software especializado en la creación de
              aplicaciones web modernas, optimizadas y escalables. Trabajo con
              tecnologías como React, Next.js, Node.js, ExpressJS, ASP.NET Web
              API y bases de datos SQL como PostgreSQL y SQL Server.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <a href="#projects" className="inline-block">
                <Button className="bg-tech-blue hover:bg-tech-blue/90 text-white">
                  Ver proyectos
                </Button>
              </a>

              <a href="#contact" className="inline-block">
                <Button
                  variant="outline"
                  className="border-tech-purple text-tech-purple hover:bg-tech-purple/10"
                >
                  Contáctame
                </Button>
              </a>
            </div>

            <div className="pt-8">
              <a
                href="#about"
                className="inline-flex items-center text-foreground/60 hover:text-tech-blue transition-colors"
              >
                <span className="mr-2">Conocer más</span>
                <ArrowDown size={16} className="animate-bounce" />
              </a>
            </div>
          </div>

          <div className="hidden lg:flex justify-center items-center">
            <div className="relative w-[350px] h-[350px]">
              {/* Fondo con gradiente */}
              <div className="absolute inset-0 bg-gradient-to-br from-tech-blue/20 to-tech-purple/20 rounded-full"></div>

              {/* Iconos flotantes */}
              <div className="absolute -top-4 left-1/4 p-3 bg-secondary rounded-xl shadow-lg">
                <Code className="text-tech-blue" size={28} />
              </div>
              <div className="absolute top-1/3 -right-4 p-3 bg-secondary rounded-xl shadow-lg">
                <Server className="text-tech-purple" size={28} />
              </div>
              <div className="absolute bottom-0 left-1/4 p-3 bg-secondary rounded-xl shadow-lg">
                <Database className="text-tech-accent" size={28} />
              </div>

              {/* Imagen de perfil */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[250px] h-[250px] rounded-full bg-gradient-to-br from-tech-blue to-tech-purple p-1">
                <img
                  src="assets/limbeloper.jpg"
                  alt="profile"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
