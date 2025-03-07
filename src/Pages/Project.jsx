import { FaAngleDown, FaAngleUp, FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { projects } from "../assets/Data";
import { useState } from "react";

export default function Project() {
  const [showMore, setShowMore] = useState(false)

  return (
    <div name='Project' className="bg-white md:py-[1rem] md:px-[6rem] p-2 pt-4">
      <div className="md:space-y-8 space-y-2">
        <section>
          <div className="md:text-8xl text-5xl p-1 font-bold outline-2 outline outline-gray-500 bg-[#ffe14e]">Latest Projects</div>
        </section>
        <section className="w-full h-full flex flex-wrap md:gap-6 gap-2">
          {
            projects.slice(0, !showMore ? 5 : projects.length).map((project, index) => (
              <div key={index} className='md:w-[32%] w-full bg-[#ffe14e] rounded-md border border-gray-800 overflow-hidden px-4 py-2 hover:scale-105 duration-200'>
                <div className="flex justify-between items-center">
                  <h2 className='text-2xl font-bold'>{project.name}</h2>
                  <button className="text-sm bg-gray-700 text-white p-1 px-2 rounded-full">{project.type}</button>
                </div>
                <div className="flex flex-wrap gap-2 py-2">
                  {
                    project.techstack.map((tech, index) => (
                      <button key={index} className={`text-sm p-1 px-2 rounded-full bg-white`}>{tech}</button>
                    ))
                  }
                </div>
                <img src={project.image} alt="project" loading="lazy" className="rounded-md" />
                <div className="flex justify-between items-center py-2">
                  <a href={project.demo} target="_blank" rel="noreferrer" className="border border-black px-4 py-2 rounded-md bg-white flex gap-2 items-center">View Project <FaExternalLinkAlt /></a>
                  <a href={project.github} target="_blank" rel="noreferrer" className="border border-black px-4 py-2 rounded-md bg-white flex gap-2 items-center">GitHub <FaGithub /></a>
                </div>
              </div>
            ))
          }
          <div className="w-full h-full flex justify-center items-center">
            <button onClick={() => setShowMore(!showMore)} className="w-full h-full border-2 border-gray-800 flex items-center justify-center gap-3 p-2 bg-[#ffe14e] font-semibold">{showMore ? `Show less` : `Show more`} {!showMore ? <FaAngleDown /> : <FaAngleUp />}</button>
          </div>
        </section>
      </div>
    </div>
  )
}