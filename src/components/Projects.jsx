import { NavLink } from "react-router-dom";
import { projects } from "../db/projects";

const Projects = () => {
  return (
    <div className="mx-auto max-w-screen-lg">
      <section className="border-content p-8 py-20" id="projects">
        <h2 className="text-center text-2xl font-semibold">Projects</h2>
        <p className="mt-4 text-center">
          Some of the noteworthy projects I have built:
        </p>

        <ul className="mt-8 flex flex-col gap-8">
          {projects.map(
            (
              {
                id,
                projectHeroImg,
                name,
                description,
                features,
                techStack,
                projectURL,
                githubRepoURL,
              },
              index,
            ) => (
              <li
                key={id}
                className="flex flex-col gap-8 rounded-2xl border border-content p-4 md:aspect-auto md:flex-row"
              >
                <div className={`p-4 ${index % 2 && "md:order-last"}`}>
                  <img
                    src={projectHeroImg}
                    alt={name}
                    className="w-full rounded-xl md:aspect-auto md:h-full"
                  />
                </div>
                <div className="flex flex-col justify-center gap-2">
                  <div className="flex flex-col gap-2">
                    <p className="text-xl font-semibold">{name}</p>
                    <p>{description}</p>
                    <p>
                      <strong>Features</strong>: {features}
                    </p>
                    <div className="flex gap-4">
                      <p>
                        <strong>Tech Stack:</strong> {techStack}
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <NavLink
                      to={projectURL}
                      target="_blank"
                      rel="noopener norefferrer"
                      className={"rounded-xl bg-orange-500 px-4 py-2"}
                    >
                      Live Website
                    </NavLink>
                    <NavLink
                      to={githubRepoURL}
                      target="_blank"
                      rel="noopener norefferrer"
                      className={"rounded-xl bg-orange-500 px-4 py-2"}
                    >
                      GitHub Repo
                    </NavLink>
                  </div>
                </div>
              </li>
            ),
          )}
        </ul>
      </section>
    </div>
  );
};

export { Projects };
