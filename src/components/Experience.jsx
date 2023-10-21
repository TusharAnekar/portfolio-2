import { workExperience } from "../db/workExperience";

const Experience = () => {
  return (
    <div className="mx-auto max-w-screen-lg">
      <section id="work-experience" className="border-content p-8 py-20">
        <h2 className="text-center text-2xl font-semibold">Work Experience</h2>
        <p className="mt-4 text-center">
          Here is a quick summary of my most recent experiences:
        </p>
        <ul className="mt-8 flex flex-col gap-8">
          {workExperience.map(
            ({
              id,
              companyImg,
              name,
              position,
              projects,
              period,
              jobDescription,
            }) => (
              <li
                key={id}
                className="flex flex-col gap-4 rounded-2xl border border-content p-4 md:flex-row md:justify-between"
              >
                <img
                  src={companyImg}
                  alt={name}
                  className="md:w-26 aspect-auto w-36 items-start md:h-14"
                />
                <p className="md:order-last">{period}</p>
                <div className="flex flex-col gap-4 md:w-3/5">
                  <p>
                    <strong>{position}</strong>
                  </p>
                  <p>Worked on projects like {projects}</p>
                  <ul className="list-disc pl-4">
                    {jobDescription.map(({ id, activity }) => (
                      <li key={id}>{activity}</li>
                    ))}
                  </ul>
                </div>
              </li>
            ),
          )}
        </ul>
      </section>
    </div>
  );
};

export { Experience };
