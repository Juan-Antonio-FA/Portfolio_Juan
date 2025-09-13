import { Briefcase, Code, User } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-16 px-4 relative">
      {" "}
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary"> Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Service Delivery Consultant & Data Engineer
            </h3>

            <p className="text-muted-foreground">
              Computer Systems Engineering student with hands-on experience in 
              <strong> application performance monitoring (APM)</strong>, 
              <strong> data pipelines</strong>, and <strong>cloud technologies</strong>. 
              Skilled in tools like Dynatrace, Datadog, and Vertica, I bring both 
              analytical and technical expertise to optimize systems and ensure 
              reliable solutions.
            </p>

            <p className="text-muted-foreground">
              Passionate about <strong>cloud computing, cybersecurity, and artificial intelligence</strong>, 
              I constantly seek to expand my knowledge and apply innovative approaches 
              to solve complex challenges in data-driven environments.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                {" "}
                Get In Touch
              </a>

              <a
                target="_blank"
                href="https://drive.google.com/file/d/1WBm1EsnfSQR-z6kaFyFTtt5kw9AEafir/view?usp=drive_link"
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download CV
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg"> Delivery Consultant</h4>
                  <p className="text-muted-foreground">
                    Supporting enterprise systems with monitoring, reporting, and 
                    performance optimization using APM tools.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg"> Data Engineer</h4>
                  <p className="text-muted-foreground">
                    Developing ETL processes, managing servers, and applying 
                    machine learning models for advanced data analysis.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>

                <div className="text-left">
                  <h4 className="font-semibold text-lg">Backend Developer</h4>
                  <p className="text-muted-foreground">
                    Building scalable web solutions with React, Next.js, and 
                    database design, ensuring both functionality and performance.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
