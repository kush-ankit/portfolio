// import { BsFillArrowUpRightSquareFill, BsGithub } from "react-icons/bs";
import { skillSet } from "../assets/skillsData";
import { TechStackCardComponent } from "./TechStackCardComponent";

const TechGrid = () => {
  return (
    <div className="w-full h-full flex flex-col items-center gap-8">
      <section>
        <div className="md:text-8xl text-5xl font-bold outline-2 outline outline-gray-500 bg-[#ffe14e] m-1 w-fit">Frontend skills</div>
      </section>
      <section className="grid grid-cols-7 gap-2">
        {skillSet.map((skill, index) => {
          return (
            <TechStackCardComponent
              key={index}
              image={skill.image}
              tech={skill.tech}
              description={skill.description}
            />
          )
        })}
      </section >
    </div >
  );
};

export default TechGrid;
