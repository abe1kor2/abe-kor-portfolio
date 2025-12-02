import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Happy Hour NL",
    description: "A platform for finding and sharing happy hour deals.",
    image: "../public/projects/happy-hour.png",
    tags: ["Ruby on Rails", "Ruby", "PostgresQL", "Tailwind CSS", "AWS"],
    projectUrl: "#",
    githubUrl: "https://github.com/abe1kor2/happy-hour",
  },
  {
    id: 2,
    title: "Cold Email Generator",
    description: "A AI tool to generate personalized cold emails for outreach.",
    image: "../public/projects/cold-email.png",
    tags: ["AI", "Python", "GroqCloud", "llama-3.3", "OpenAI"],
    projectUrl: "#",
    githubUrl: "https://github.com/abe1kor2/cold-email-generator",
  },
  {
    id: 3,
    title: "Bot Detector",
    description:
      "Instagram Bot Detector is a tool to identify bot accounts on Instagram.",
    image: "",
    tags: ["Python"],
    projectUrl: "#",
    githubUrl: "#",
  },
  // Add more projects as needed
];

export const ProjectSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          My <span className="text-primary">Projects</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of the projects I've worked on recently.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-fill transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.projectUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
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
            href="https://github.com/abe1kor2"
            target="_blank"
            className="main-button w-fit flex items-center mx-auto gap-2"
          >
            View More on GitHub <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
