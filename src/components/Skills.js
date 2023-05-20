import { frontSkills } from "../utils/skills/frontSkils";
import { backSkills } from "../utils/skills/backSkills";

export default function Skills() {
  return (
    <>
      <h5 className="bg-gray-900 text-gray-50 inline-block p-2 font-bold rounded-md shadow-lg my-6 text-xl">
        Proficiencies
      </h5>
      <div className="px-4 pb-4 pt-2 bg-gray-100 flex flex-col">
        <article>
          <h3 className="bg-orange text-white my-4 inline-block p-2 rounded-md shadow-lg font-bold">
            Front-end
          </h3>
          <div className="px-4 flex flex-wrap gap-4">
            {frontSkills.map((skill) => (
              <div className="w-12">{skill}</div>
            ))}
          </div>
        </article>
        <article>
          <h3 className="bg-orange text-white my-4 inline-block p-2 rounded-md shadow-lg font-bold">
            Back-end
          </h3>
          <div className="px-4 flex flex-wrap gap-4">
            {backSkills.map((skill) => (
              <div className="w-12">{skill}</div>
            ))}
          </div>
        </article>
      </div>
    </>
  );
}
