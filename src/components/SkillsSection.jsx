import { useState } from "react";
import { cn } from "@/lib/utils";

const skills = [
  // Programming Languages
  { name: "LaTeX", level: 90, category: "languages" },
  { name: "C", level: 85, category: "languages" },
  { name: "C++", level: 80, category: "languages" },
  { name: "JavaScript", level: 70, category: "languages" },
  { name: "Python", level: 65, category: "languages" },
  { name: "SQL", level: 60, category: "languages" },
  
  // Tools & Platforms
  { name: "Dynatrace", level: 95, category: "tools" },
  { name: "Git/GitHub", level: 90, category: "tools" },
  { name: "Figma", level: 80, category: "tools" },
  { name: "Codux", level: 70, category: "tools" },
  { name: "Vertica", level: 60, category: "tools" },
  { name: "Datadog", level: 50, category: "tools" },

  // Knowledge Areas
  { name: "Data Analytics", level: 80, category: "knowledge" },
  { name: "Cloud Computing", level: 70, category: "knowledge" },
  { name: "Artificial Intelligence", level: 65, category: "knowledge" },
  { name: "Machine Learning", level: 65, category: "knowledge" },
  { name: "Cybersecurity", level: 40, category: "knowledge" },
];


const categories = ["all", "languages", "tools", "knowledge"];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );
  return (
    <section id="skills" className="py-16 px-4 relative bg-secondary/30">
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
                  : "bg-secondary/70 text-forefround hover:bd-secondary"
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
              className="bg-card p-6 rounded-lg shadow-xs card-hover"
            >
              <div className="text-left mb-4">
                <h3 className="font-semibold text-lg"> {skill.name}</h3>
              </div>
              <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                <div
                  className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]"
                  style={{ width: skill.level + "%" }}
                />
              </div>

              <div className="text-right mt-1">
                <span className="text-sm text-muted-foreground">
                  {skill.level}%
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
