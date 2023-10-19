import { skills } from "../db/skills";

const Skills = () => {
  return (
    <div className="mx-auto max-w-screen-lg">
      <section className=" border-content px-4 py-20" id="skills">
        <h2 className="text-center text-2xl font-semibold">Skills</h2>
        <p className="text-center">
          The skills, tools and technologies I am really good at:
        </p>
        <ul className=" mt-6 flex flex-grow flex-wrap justify-center gap-8">
          {skills.map(({ id, name, img, url }) => (
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              key={id}
              className="md:h-30 flex h-32 w-28 flex-col gap-2 transition duration-500 hover:scale-125 md:w-32"
            >
              <img src={img} alt={name} className="h-3/4 w-full" />
              <p className="self-center">{name}</p>
            </a>
          ))}
        </ul>
      </section>
    </div>
  );
};

export { Skills };
