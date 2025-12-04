import { ArrowDown } from "lucide-react";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4 pt-20 md:pt-0"
    >
      <div className="container max-w-4xl mx-auto text-center z-10">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            <span className="opacity-0 animate-fade-in">Hi, I'm</span>
            <span className="text-primary opacity-0 animate-fade-in-delay-1">
              {" "}
              Andy
            </span>
            <span className="text-gradient opacity-0 animate-fade-in-delay-2">
              {" "}
              Lau
            </span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-3 text-justify">
            I am a Software Engineer and recent graduate of the BCIT Computer
            Systems Technology program. My passion for coding began with a
            programming course in the first year of my Civil Engineering degree
            and grew as I self-taught Python to automate logistics workflows.
            <br />
            <br />
            Professionally, I bring over a year of hands-on software development
            experience, primarily from my role as a Full-Stack Developer at
            Airble Aviation. During my time there, I integrated analytics SDK
            and built features for a complex flight booking system for private
            jets with the option to shared seats. I specialize in architecting
            end-to-end solutions and am dedicated to continuous learning and
            delivering production-ready code.
          </p>

          <div className="pt-4 opacity-0 animate-fade-in-delay-4 flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#projects" className="cosmic-button">
              View My Work
            </a>
            <a
              href="#contact"
              className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-muted-foreground mb-2">Scroll</span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>
    </section>
  );
};
