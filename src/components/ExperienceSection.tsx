import React from "react";

type Role = {
  company: string;
  title: string;
  start: string;
  end?: string;
  summary: string;
  location?: string;
  logo?: string; // optional logo URL (public path or remote)
};

const sampleExperience: Role[] = [
  {
    company: "PREVUE HR",
    title: "Full-Stack Developer - Internship",
    start: "Sep 2024",
    end: "Dec 2024",
    location: "Vancouver, BC",
    summary:
      "Developed a production-ready mobile application from scratch that utilizes OpenAI to execute complex HR workflows via natural language. Designed the complete end-to-end architecture, orchestrating connections between the mobile UI and backend APIs to support scalable task execution.",
    logo: "/experience/prevueHr.png",
  },
  {
    company: "One iota Golf Inc.",
    title: "Backend Developer - Internship",
    start: "Apr 2024",
    end: "Dec 2024",
    location: "New Westminster, BC",
    summary:
      "Implemented backend endpoints to track athlete daily habits for health analytics and documented clear API contracts to ensure seamless integration for frontend teams.",
    logo: "/experience/oneIotaGolf.png",
  },
  {
    company: "Airble Aviation Inc.",
    title: "Full-Stack Developer",
    start: "Jan 2023",
    end: "Dec 2023",
    location: "Richmond, BC",
    summary:
      "Engineered responsive UI components to enhance the cross-platform user experience and integrated analytics to track engagement for users. Collaborated within an Agile environment to refine features and drive data-driven strategies that increased user engagement.",
    logo: "/experience/airble.png",
  },
  {
    company: "British Columbia Institute of Technology",
    title: "Education",
    start: "Jan 2022",
    end: "Dec 2024",
    location: "Burnaby, BC",
    summary:
      "Computer Systems Technology Diploma (Specialized in Database Systems), CGPA: 91%",
    logo: "/experience/bcit.png",
  },
  {
    company: "Maple Freight Partnership",
    title: "Operations Analyst",
    start: "Apr 2018",
    end: "Dec 2021",
    location: "Richmond, BC",
    summary:
      "Utilized self-taught Python skills to automate data transformation and reporting for thousands of freight records, significantly reducing processing time. Collaborated with management to analyze warehouse data and eliminate discrepancies, enhancing overall operational efficiency.",
    logo: "/experience/mapleFreight.png",
  },
  {
    company: "University of Alberta",
    title: "Education",
    start: "Sep 2012",
    end: "Apr 2016",
    location: "Edmonton, AB",
    summary:
      "Bachelor of Science in Civil Engineering (Specialized in Structural Design and Construction Management)",
    logo: "/experience/uAlberta.png",
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
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center relative overflow-hidden">
                      <span className="text-primary font-semibold z-0">
                        {initials}
                      </span>
                      {role.logo && (
                        <img
                          src={role.logo}
                          alt={`${role.company} logo`}
                          className="absolute inset-0 w-full h-full object-contain z-10"
                          onError={(e) =>
                            (e.currentTarget.style.display = "none")
                          }
                        />
                      )}
                    </div>

                    <div className="text-start">
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

                <div className="mt-4 space-y-2 text-muted-foreground flex flex-col items-start text-start">
                  {role.summary}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
