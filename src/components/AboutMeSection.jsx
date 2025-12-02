import { Briefcase, Code, User } from "lucide-react";

export const AboutMeSection = () => {
  return (
    <section id="about" className="py-16 bg-background/50 backdrop-blur-xs">
      <div>
        <h2 className="text-3xl font-bold mb-6">
          About <span className="text-primary">Me</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Passionate Software Developer and Entrepreneur
            </h3>
            <p className="text-muted-foreground">
              I’m a software developer with experience building backend systems,
              data pipelines, and internal tools across genomics, analytics, and
              consumer platforms. I enjoy solving complex problems, improving
              system performance, and delivering products that genuinely help
              people. I’m currently an Application Developer at Sequence Bio
              Inc., building software that enables Nurse Coordinators and
              Bioinformatics teams to collect participant samples, manage
              genomic workflows, and process DNA extractions that contribute to
              the development of better treatments and medicines. My biggest
              passion professionally is building my own products & companies
              that can help people.
            </p>
            <p className="text-muted-foreground">
              When I'm not coding, you'll find me travelling to underrated
              countries, at the gym, or trying out new recipes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="main-button">
                {" "}
                Get in Touch
              </a>
              <a
                href=""
                className="px-6 py-2 border border-primary text-primary rounded-md hover:bg-primary/10 transition-colors text-center"
                download
              >
                Download Resume
              </a>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary"></Code>
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Web Development</h4>
                  <p className="text-muted-foreground">
                    Experienced in building responsive and dynamic web
                    applications using modern frameworks and technologies.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary"></User>
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">To Do</h4>
                  <p className="text-muted-foreground">
                    Experienced in building responsive and dynamic web
                    applications using modern frameworks and technologies.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary"></Briefcase>
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">To Do</h4>
                  <p className="text-muted-foreground">
                    Experienced in building responsive and dynamic web
                    applications using modern frameworks and technologies.
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
