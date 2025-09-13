import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "AI-NOW SaaS",
    description: "A beautiful landing page app using React and Next.js.",
    image: "/projects/GIT.png",
    tags: ["React", "Prisma", "Supabase", "Clerk"],
    githubUrl: "https://github.com/pigchip/AI-NOW",
  },
  {
    id: 2,
    title: "FoodForLess",
    description:
      "Interactive platform for exploring and visualizing food prices across different regions.",
    image: "/projects/GIT.png",
    tags: ["Angular", "Spring Boot", "Supabase","TypeScript"],
    githubUrl: "https://github.com/DarKbYte02/FoodForLess",
  },
  {
    id: 3,
    title: "Mikro E-commerce",
    description:
      "E-commerce page with product listings, shopping cart, and checkout functionality.",
    image: "/projects/GIT.png",
    tags: ["React", "Supabase", "Stripe","MySQL"],
    githubUrl: "https://github.com/hecarrillo/mikro",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-16 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
         Here are some of my featured projects and collaborations.  
         Each one reflects my focus on building scalable, secure, and efficient solutions,  
         combining modern technologies.
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
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
      
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300 "
                    >
                      <Github size={35} />
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
            href="https://github.com/Juan-Antonio-FA"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
