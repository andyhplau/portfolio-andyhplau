import { useState } from "react";
import { cn } from "@/lib/utils";

const skills = [
  {
    name: "TypeScript",
    image: "/skills/typescript.png",
    category: "languages",
  },
  {
    name: "JavaScript",
    image: "/skills/javascript.png",
    category: "languages",
  },
  { name: "Python", image: "/skills/python.png", category: "languages" },
  { name: "Java", image: "/skills/java.png", category: "languages" },
  { name: "C", image: "/skills/c.png", category: "languages" },
  { name: "React", image: "/skills/react.png", category: "frameworks" },
  {
    name: "React Native",
    image: "/skills/react.png",
    category: "frameworks",
  },
  { name: "Next.js", image: "/skills/nextjs.png", category: "frameworks" },
  { name: "NestJS", image: "/skills/nestjs.png", category: "frameworks" },
  {
    name: "Express.js",
    image: "/skills/expressjs.png",
    category: "frameworks",
  },
  { name: "Django", image: "/skills/django.png", category: "frameworks" },
  { name: "Node.js", image: "/skills/nodejs.png", category: "tools" },
  { name: "MySQL", image: "/skills/mysql.png", category: "databases" },
  { name: "Prisma", image: "/skills/prisma.png", category: "tools" },
  { name: "Git", image: "/skills/git.png", category: "tools" },
  { name: "GitHub", image: "/skills/github.png", category: "tools" },
  {
    name: "TailwindCSS",
    image: "/skills/tailwindcss.png",
    category: "frameworks",
  },
  { name: "HTML5", image: "/skills/html5.png", category: "languages" },
  { name: "CSS3", image: "/skills/css3.png", category: "languages" },
  { name: "Kotlin", image: "/skills/kotlin.png", category: "languages" },
  { name: "Bootstrap", image: "/skills/bootstrap.png", category: "frameworks" },
  { name: "Pandas", image: "/skills/pandas.png", category: "frameworks" },
  { name: "NumPy", image: "/skills/numpy.png", category: "frameworks" },
  { name: "jQuery", image: "/skills/jquery.png", category: "frameworks" },
  {
    name: "PostgreSQL",
    image: "/skills/postgresql.png",
    category: "databases",
  },
  { name: "MongoDB", image: "/skills/mongodb.png", category: "databases" },
  { name: "GraphQL", image: "/skills/graphql.png", category: "databases" },
  { name: "Firebase", image: "/skills/firebase.png", category: "tools" },
  { name: "Swagger", image: "/skills/swagger.png", category: "tools" },
  { name: "OpenAPI", image: "/skills/openapi.png", category: "tools" },
  { name: "Postman", image: "/skills/postman.png", category: "tools" },
  { name: "Trello", image: "/skills/trello.png", category: "tools" },
  { name: "Jira", image: "/skills/jira.png", category: "tools" },
  { name: "Power BI", image: "/skills/powerbi.png", category: "tools" },
  { name: "VBA", image: "/skills/vba.png", category: "languages" },
  { name: "R", image: "/skills/r.png", category: "languages" },
  { name: "MATLAB", image: "/skills/matlab.png", category: "languages" },
  { name: "MS Office", image: "/skills/msoffice.png", category: "tools" },
];

const categories = ["all", "languages", "frameworks", "databases", "tools"];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );

  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary"> Skills</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-foreground hover:bg-secondary"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, key) => (
            <div
              key={key}
              className="bg-card/80 backdrop-blur-[2px] p-4 rounded-lg shadow-xs card-hover flex justify-start items-center relative z-10"
            >
              <div className="m-4 flex items-center space-x-4">
                <img src={skill.image} alt={skill.name} className="w-20 h-20" />
                <h3 className="font-semibold text-lg">{skill.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
