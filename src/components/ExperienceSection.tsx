import React from "react";

type Role = {
  company: string;
  title: string;
  start: string;
  end?: string;
  bullets: string[];
  location?: string;
  logo?: string; // optional logo URL (public path or remote)
};

const sampleExperience: Role[] = [
  {
    company: "Acme Corp",
    title: "Senior Software Engineer",
    start: "Jan 2023",
    end: "Present",
    location: "Vancouver, BC",
    bullets: [
      "Led a team of 3 engineers to deliver a customer-facing React app.",
      "Designed and shipped an analytics pipeline to track feature usage.",
      "Improved API latency by 40% through targeted optimizations.",
    ],
    logo: "/skills/python.png",
  },
  {
    company: "Beta Systems",
    title: "Full-stack Developer",
    start: "Jun 2020",
    end: "Dec 2022",
    location: "Remote",
    bullets: [
      "Built end-to-end features using TypeScript, Node.js, and Postgres.",
      "Owned the CI/CD pipeline and reduced release friction.",
    ],
  },
];

export const ExperienceSection: React.FC<{ data?: Role[] }> = ({
  data = sampleExperience,
}) => {
  return (
    <section id="experience" className="py-24 px-4">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary"> Experience</span>
        </h2>

        <div className="space-y-8">
          {data.map((role, key) => {
            const initials = role.company
              .split(" ")
              .map((s) => s[0])
              .slice(0, 2)
              .join("");

            return (
              <article
                key={key}
                className="bg-card/80 backdrop-blur-[2px] p-6 rounded-lg shadow-xs hover:shadow-md transition-shadow relative z-10"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center relative overflow-hidden">
                      <span className="text-primary font-semibold z-0">
                        {initials}
                      </span>
                      {role.logo && (
                        <img
                          src={role.logo}
                          alt={`${role.company} logo`}
                          className="absolute inset-0 w-full h-full object-cover z-10"
                          onError={(e) =>
                            (e.currentTarget.style.display = "none")
                          }
                        />
                      )}
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold">{role.title}</h3>
                      <p className="text-sm text-muted-foreground">
                        {role.company}{" "}
                        {role.location ? `• ${role.location}` : ""}
                      </p>
                    </div>
                  </div>

                  <div className="mt-3 md:mt-0 text-sm text-muted-foreground">
                    {role.start} — {role.end ?? "Present"}
                  </div>
                </div>

                <ul className="mt-4 list-disc list-inside space-y-2 text-muted-foreground flex flex-col items-start">
                  {role.bullets.map((b, i) => (
                    <li key={i}>{b}</li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
