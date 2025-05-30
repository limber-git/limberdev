import React from "react";
import {
  Monitor,
  Server,
  Database,
  GitBranch,
  Layout,
  Terminal,
  Code2,
  Layers,
} from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      icon: <Monitor size={24} className="text-tech-blue" />,
      skills: [
        { name: "React", level: 55 },
        { name: "Angular", level: 50 },
        { name: "ASP.NET", level: 60 },
        { name: "NextJS", level: 55 },
        { name: "JavaScript", level: 70 },
        { name: "Tailwind CSS", level: 65 },
      ],
    },
    {
      title: "Backend",
      icon: <Server size={24} className="text-tech-purple" />,
      skills: [
        { name: "ASP.NET Web API", level: 70 },
        { name: "C#", level: 60 },
        { name: "Node.js", level: 60 },
        { name: "REST APIs", level: 65 },
      ],
    },
    {
      title: "Bases de Datos",
      icon: <Database size={24} className="text-tech-accent" />,
      skills: [
        { name: "SQL Server", level: 60 },
        { name: "MySQL", level: 60 },
        { name: "MongoDB", level: 55 },
        { name: "ORM (Entity Framework)", level: 60 },
        { name: "ORM (Sequealize)", level: 65 },
        { name: "PostgreSQL", level: 60 },
      ],
    },
    {
      title: "Herramientas & DevOps",
      icon: <GitBranch size={24} className="text-tech-blue" />,
      skills: [
        { name: "Git", level: 72 },
        { name: "Docker", level: 60 },
        { name: "CI/CD", level: 62 },
      ],
    },
  ];

  const otherSkills = [
    { name: "Responsive Design", icon: <Layout size={20} /> },
    { name: "SOLID Principles", icon: <Code2 size={20} /> },
    { name: "ACID Principles", icon: <Layers size={20} /> },
    { name: "Agile/Scrum", icon: <GitBranch size={20} /> },
    { name: "UI/UX Basics", icon: <Monitor size={20} /> },
  ];

  return (
    <section id="skills" className="section-padding">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 heading-gradient">
            Mis Habilidades
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
          {skillCategories.map((category, index) => (
            <div key={index} className="tech-card p-6">
              <div className="flex items-center mb-6">
                {category.icon}
                <h3 className="text-xl font-bold ml-3">{category.title}</h3>
              </div>

              <div className="space-y-5">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between mb-1">
                      <span className="text-foreground/80">{skill.name}</span>
                      <span className="text-tech-blue">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-secondary/80 h-2 rounded-full">
                      <div
                        className="bg-gradient-to-r from-tech-blue to-tech-purple h-2 rounded-full"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div>
          <h3 className="text-xl font-bold mb-6 text-center">
            Otras Habilidades
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {otherSkills.map((skill, index) => (
              <div
                key={index}
                className="flex items-center bg-secondary/40 px-4 py-2 rounded-full"
              >
                <span className="mr-2 text-tech-purple">{skill.icon}</span>
                <span className="text-foreground/80">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
