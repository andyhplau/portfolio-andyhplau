import { ArrowRight, ExternalLink, Github } from "lucide-react";

type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  demoUrl?: string;
  gitHubUrl: string;
};

const projects: Project[] = [
  {
    id: 1,
    title: "QArticle",
    description:
      "Built a secure, question-answering application that delivers accurate, context-aware answers and summaries from user-uploaded articles. Implemented authentication and usage limits to manage secure document processing and query allowances.",
    image: "/projects/pythonCodeImage.png",
    tags: ["Academic Project", "Python", "Django", "AI"],
    gitHubUrl: "https://github.com/andyhplau/comp4537_c2p_api_server",
  },
  {
    id: 2,
    title: "My Apple Pie",
    description:
      "This platform fosters a supportive ecosystem for wellness by integrating social connection with a gamified habit tracker that rewards consistency. Through our unique 'apples-to-pies' incentive structure, we encourage long-term user retention by making healthy routines both collaborative and rewarding.",
    image: "/projects/myApplePie.png",
    tags: ["Hackathon", "JavaScript", "HTML", "CSS"],
    demoUrl: "https://devpost.com/software/qds-2024-apple-pie",
    gitHubUrl: "https://github.com/kevin-bcit/qds_team17",
  },
  {
    id: 3,
    title: "Snake Game",
    description:
      "A classic Snake game implemented in Python with Pygame, featuring score tracking, restart-on-game-over, and an optional auto-pilot mode.",
    image: "/projects/snake.png",
    tags: ["Academic Project", "Python", "Pygame"],
    demoUrl: "https://youtu.be/4dFAM63RSQE",
    gitHubUrl: "https://github.com/andyhplau/snake-game",
  },
  {
    id: 4,
    title: "Tetris",
    description:
      "A Python Tetris clone with freeze and bomb tetrominoes, next-piece preview, and scoring; implemented with clean OOP and factory-based tetromino generation.",
    image: "/projects/tetris.png",
    tags: ["Academic Project", "Python", "Pygame"],
    demoUrl: "https://youtu.be/x9Wi3KAxEOE",
    gitHubUrl: "https://github.com/andyhplau/tetris",
  },
  {
    id: 5,
    title: "Maze Runner",
    description:
      "Developed a time-sensitive maze navigation game where players guide a selected Pokémon to the exit before the clock runs out. The application features a persistent history module, allowing users to track and review their past performance data.",
    image: "/projects/mazeRunner.png",
    tags: ["Academic Project", "Java", "JavaFX"],
    demoUrl: "https://youtu.be/t-ldVlIE2dg",
    gitHubUrl:
      "https://github.com/andyhplau/2522-202230-Term-Project-MazeRunner",
  },
];

export const ProjectSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience in
          mind.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card/80 backdrop-blur-[2px] rounded-lg overflow-hidden shadow-xs card-hover relative z-10"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <div className="flex flex-wrap justify-center gap-2 mb-4">
                  {project.tags.map((tag, key) => (
                    <span
                      key={key}
                      className="px-2 py-1 text-xs font-medium border rounded-full bg-primary/20 text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4 text-start">
                  {project.description}
                </p>
                <div className="flex justify-center items-center">
                  <div className="flex space-x-3">
                    {project.demoUrl && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        className="text-foreground/80 border rounded-full p-2 hover:text-primary bg-primary/20 transition-colors duration-300"
                      >
                        <ExternalLink size={20} />
                      </a>
                    )}
                    <a
                      href={project.gitHubUrl}
                      target="_blank"
                      className="text-foreground/80 border rounded-full p-2 hover:text-primary bg-primary/20 transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/andyhplau"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
