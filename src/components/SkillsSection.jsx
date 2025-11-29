import { useState } from "react";

const skills = [
  // Languages and Frameworks
  { name: "Ruby (Ruby on Rails)", category: "programming" },
  { name: "Python (Django)", category: "programming" },
  { name: "Javascript (React)", category: "programming" },
  { name: "SQL", category: "programming" },
  { name: "HTML", category: "programming" },
  { name: "CSS", category: "programming" },

  // Databases and Cloud
  { name: "PostgreSQL", category: "cloudbase" },
  { name: "AWS (EC2, S3, RDS, Lambda)", category: "cloudbase" },
  { name: "Salesforce", category: "cloudbase" },
  { name: "Docker", category: "cloudbase" },
  { name: "MongoDB", category: "cloudbase" },

  // Tools and DevOps
  { name: "Git/Github", category: "tools" },
  { name: "Auth0", category: "tools" },
  { name: "Sentry", category: "tools" },
  { name: "CircleCI", category: "tools" },
  { name: "Jenkins", category: "tools" },
  { name: "Black Duck", category: "tools" },
  { name: "Segment", category: "tools" },
  { name: "Confluence", category: "tools" },
];

const categories = [
  { id: "all", name: "All" },
  { id: "programming", name: "Languages & Frameworks" },
  { id: "cloudbase", name: "Databases & Cloud" },
  { id: "tools", name: "Tools & DevOps" },
];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl font-bold mb-6">
          My <span className="text-primary"> Skills</span>
        </h2>
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-5 py-2 rounded-full transition-colors duration-300 ${
                activeCategory === category.id
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-foreground hover:bg-secondary"
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills
            .filter(
              (skill) =>
                activeCategory === "all" || skill.category === activeCategory
            )
            .map((skill, index) => (
              <div
                key={index}
                className="bg-card p-6 rounded-lg shadow-xs card-hover"
              >
                <h3 className="font-semibold text-lg">{skill.name}</h3>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};
