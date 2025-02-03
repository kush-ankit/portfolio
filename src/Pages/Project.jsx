import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { projects } from "../assets/Data";


export default function Project() {
  return (
    <div name='Project' className="bg-white md:py-[1rem] md:px-[6rem]">
      <div className="space-y-8">
        <section>
          <div className="md:text-8xl text-5xl font-bold outline-2 outline outline-gray-500 bg-[#ffe14e]">Latest Projects</div>
        </section>
        <section className="w-full h-full flex flex-wrap justify-between gap-6">
          {
            projects.map((project, index) => (
              <div key={index} className='md:w-[32%] w-full bg-[#ffe14e] rounded-md border border-gray-800 overflow-hidden px-4 py-2'>
                <div className="flex justify-between items-center">
                  <h2 className='text-2xl font-bold'>{project.name}</h2>
                  <button className="text-sm bg-gray-700 text-white p-1 px-2 rounded-full">Website</button>
                </div>
                <div className="flex flex-wrap gap-2 py-2">
                  <button className="text-sm bg-[#fdfbd4] p-1 px-2 rounded-full">MERN</button>
                  <button className="text-sm bg-[#bdb96a] p-1 px-2 rounded-full">API</button>
                  <button className="text-sm bg-[#c1bfff] p-1 px-2 rounded-full">Server</button>
                  <button className="text-sm bg-orange-500 p-1 px-2 rounded-full">VSCode</button>
                  <button className="text-sm bg-[#caf1de] p-1 px-2 rounded-full">Web Development</button>
                </div>
                <img src={project.image} alt="project" className="rounded-md" />
                <div className="flex justify-between items-center py-2">
                  <a href={project.demo} target="_blank" rel="noreferrer" className="border border-black px-4 py-2 rounded-md bg-white flex gap-2 items-center">View Project <FaExternalLinkAlt /></a>
                  <a href={project.github} target="_blank" rel="noreferrer" className="border border-black px-4 py-2 rounded-md bg-white flex gap-2 items-center">GitHub <FaGithub /></a>
                </div>
              </div>
            ))
          }
        </section>
      </div>
    </div>
  )
}