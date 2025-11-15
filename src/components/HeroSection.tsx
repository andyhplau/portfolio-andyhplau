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

          <p className="text-lg md:text-xl text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-3 text-left">
            I am a software engineer who enjoys building end-to-end
            solutions—front to back—and using data to guide better product
            decisions. My experience spans full-stack development, API design,
            SQL databases, analytics integrations, and automation.
            <br />
            <br />I have built production features for consumer-facing
            applications, integrated analytics to track users, and created
            backend services and pipelines that improve performance and
            reliability. With a foundation in software development from BCIT and
            hands-on operational analysis experience, I bring a mix of
            engineering skill, analytical thinking, and product awareness to
            every project.
          </p>

          <div className="pt-4 opacity-0 animate-fade-in-delay-4 flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#projects" className="cosmic-button">
              View My Work
            </a>
            <a
              href=""
              className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
            >
              Download Resume
            </a>
            <a href="#contact" className="cosmic-button">
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
