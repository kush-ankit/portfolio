import { skills } from "../assets/Data"
import { SiJavascript, SiTypescript, SiExpress, SiTailwindcss, SiMongodb, SiKubernetes, SiOpenai, SiCanva, SiPostman } from "react-icons/si";
import { TbBrandCpp, TbBrandCSharp, TbFileTypeCss, TbFileTypeSql, TbBrandNextjs, TbBrandVscode } from "react-icons/tb";
import { FaDocker, FaNodeJs, FaReact, FaJenkins, FaLinux, FaAws, FaGithub, FaAngleDown, FaAngleUp } from "react-icons/fa";
import { LuWorkflow, LuRotateCcw } from "react-icons/lu";
import { useState } from "react";

function Skills() {

  const [showMore, setShowMore] = useState(false)

  return (
    <div className='h-full w-full'>
      <div name='Techstack' className="bg-[#ffe14e] h-full w-full flex flex-col md:flex-row md:p-6 md:px-[6rem] p-2 pt-4">
        <section className="w-full h-full md:p-0">
          <h1 className="md:text-8xl text-5xl font-bold outline-2 outline outline-gray-500 bg-white flex justify-center">Skills</h1>
          <div className="md:pt-4 pt-2 md:space-y-2 space-y-1">
            {
              skills.map((skill, index) => (
                <div key={index} className='w-full bg-white rounded-md border border-gray-800 overflow-hidden flex justify-between items-center md:px-2 px-1'>
                  <span className="flex md:gap-4 gap-2 md:py-[9px] py-1">
                    <img src={skill.image} alt={skill.name} loading="lazy" className="h-[55px] w-[55px] rounded-full" />
                    <p className='text-lg font-bold flex justify-center items-center'>{skill.name}</p>
                  </span>
                  <p>{skill.level}</p>
                </div>
              ))
            }
          </div>
        </section>
        <section className={`w-full h-full ${showMore ? 'block' : 'hidden'} md:block`}>
          <div className='flex flex-wrap md:gap-8 justify-center md:pt-0 pt-4 gap-2'>
            <div className='md:w-[45%] w-full bg-white p-2 rounded-md border-2 border-gray-800'>
              <h2 className='text-2xl font-bold border-b-2 border-black'>Languages</h2>
              <ul className="pt-2 flex flex-col gap-1">
                <li className="border border-gray-800 rounded-[4px] p-1 flex items-center gap-2"><SiJavascript size={20} /> JavaScript</li>
                <li className="border border-gray-800 rounded-[4px] p-1 flex items-center gap-2"><SiTypescript size={20} /> TypeScript</li>
                <li className="border border-gray-800 rounded-[4px] p-1 flex items-center gap-2"><TbBrandCpp size={20} />C/C++</li>
                <li className="border border-gray-800 rounded-[4px] p-1 flex items-center gap-2"><TbBrandCSharp size={20} />.NET - C#</li>
                <li className="border border-gray-800 rounded-[4px] p-1 flex items-center gap-2"><TbFileTypeCss size={20} />HTML/CSS</li>
                <li className="border border-gray-800 rounded-[4px] p-1 flex items-center gap-2"><TbFileTypeSql size={20} />SQL</li>
              </ul>
            </div>
            <div className='md:w-[45%] w-full bg-white p-2 rounded-md border-2 border-gray-800'>
              <h2 className='text-2xl font-bold border-b-2 border-black'>Frameworks</h2>
              <ul className="pt-2 flex flex-col gap-1">
                <li className="border border-gray-800 rounded-[4px] p-1 flex items-center gap-2"><FaNodeJs size={20} /> Nodejs</li>
                <li className="border border-gray-800 rounded-[4px] p-1 flex items-center gap-2"><FaReact size={20} /> Reactjs</li>
                <li className="border border-gray-800 rounded-[4px] p-1 flex items-center gap-2"><TbBrandNextjs size={20} />Nextjs</li>
                <li className="border border-gray-800 rounded-[4px] p-1 flex items-center gap-2"><SiExpress size={20} />Expressjs</li>
                <li className="border border-gray-800 rounded-[4px] p-1 flex items-center gap-2"><SiTailwindcss size={20} />TailwindCSS</li>
                <li className="border border-gray-800 rounded-[4px] p-1 flex items-center gap-2"><SiMongodb size={20} />Mongoose</li>
              </ul>
            </div>
            <div className='md:w-[45%] w-full bg-white p-2 rounded-md border-2 border-gray-800'>
              <h2 className='text-2xl font-bold border-b-2 border-black'>DevOps</h2>
              <ul className="pt-2 flex flex-col gap-1">
                <li className="border border-gray-800 rounded-[4px] p-1 flex items-center gap-2"><FaDocker size={20} /> Docker</li>
                <li className="border border-gray-800 rounded-[4px] p-1 flex items-center gap-2"><LuWorkflow size={20} /> GitHub Workflow</li>
                <li className="border border-gray-800 rounded-[4px] p-1 flex items-center gap-2"><LuRotateCcw size={20} />CI/CD</li>
                <li className="border border-gray-800 rounded-[4px] p-1 flex items-center gap-2"><SiKubernetes size={20} />Kubernetes</li>
                <li className="border border-gray-800 rounded-[4px] p-1 flex items-center gap-2"><FaJenkins size={20} />Jenkins</li>
                <li className="border border-gray-800 rounded-[4px] p-1 flex items-center gap-2"><FaLinux size={20} />Linux</li>
              </ul>
            </div>
            <div className='md:w-[45%] w-full bg-white p-2 rounded-md border-2 border-gray-800'>
              <h2 className='text-2xl font-bold border-b-2 border-black'>Tools</h2>
              <ul className="pt-2 flex flex-col gap-1">
                <li className="border border-gray-800 rounded-[4px] p-1 flex items-center gap-2"><TbBrandVscode size={20} /> VSCode</li>
                <li className="border border-gray-800 rounded-[4px] p-1 flex items-center gap-2"><SiOpenai size={20} /> ChatGPT</li>
                <li className="border border-gray-800 rounded-[4px] p-1 flex items-center gap-2"><FaAws size={20} />AWS</li>
                <li className="border border-gray-800 rounded-[4px] p-1 flex items-center gap-2"><SiCanva size={20} />Canva</li>
                <li className="border border-gray-800 rounded-[4px] p-1 flex items-center gap-2"><SiPostman size={20} />Postman</li>
                <li className="border border-gray-800 rounded-[4px] p-1 flex items-center gap-2"><FaGithub size={20} />GitHub</li>
              </ul>
            </div>
          </div>
        </section>
        <div className="w-full h-full flex justify-center items-center py-2 md:hidden">
          <button onClick={() => setShowMore(!showMore)} className="w-full h-full border-2 border-gray-800 flex items-center justify-center gap-3 p-2 bg-white">{showMore ? `Show less` : `Show more`} {!showMore ? <FaAngleDown /> : <FaAngleUp />}</button>
        </div>
      </div >
    </div >
  )
}

export default Skills