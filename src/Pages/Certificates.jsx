import { FaAngleDown, FaAngleUp, FaExternalLinkAlt } from "react-icons/fa";
import { certificates } from "../assets/Data";
import { useState } from "react";


export default function Project() {
  const [showMore, setShowMore] = useState(false)

  return (
    <div name='Project' className="bg-[#ffe14e] md:py-[1rem] md:px-[6rem] p-2 pt-4">
      <div className="md:space-y-8 space-y-2">
        <section>
          <div className="md:text-8xl text-5xl p-1 font-bold outline-2 outline outline-gray-500 bg-white">Latest Projects</div>
        </section>
        <section className="w-full h-full flex flex-wrap md:gap-6 gap-2">
          {
            certificates.slice().reverse().slice(0, showMore ? certificates.length : 5).map((certificate, index) => (
              <div key={index} className='md:w-[32%] w-full bg-white rounded-md border border-gray-800 overflow-hidden px-4 py-2'>
                <div className="flex justify-between items-center p-2">
                  <h2 className='text-2xl font-bold'>{certificate.name}</h2>
                  <button className="text-sm bg-gray-700 text-white p-1 px-2 rounded-full">By {certificate.institution}</button>
                </div>
                <img src={certificate.image} alt="project" loading="lazy" className="rounded-md h-[15rem] w-full" />
                <div className="flex justify-end items-center py-2">
                  <a href={certificate.link} target="_blank" rel="noreferrer" className="border border-black px-4 py-2 rounded-md bg-white flex gap-2 items-center">View Project <FaExternalLinkAlt /></a>
                </div>
              </div>
            ))
          }
          <div className="w-full h-full flex justify-center items-center">
            <button onClick={() => setShowMore(!showMore)} className="w-full h-full border-2 border-gray-800 flex items-center justify-center gap-3 p-2 bg-white font-semibold">{showMore ? `Show less` : `Show more`} {!showMore ? <FaAngleDown /> : <FaAngleUp />}</button>
          </div>
        </section>
      </div>
    </div>
  )
}