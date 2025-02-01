import { devOps, frameworks, languages, skills, tools } from "../assets/skillsData"

function Skills() {
  return (
    <div className='h-screen w-full'>
      <div name='Techstack' className="bg-[#ffe14e] h-full w-full flex p-8">
        <section className="w-full h-full">
          <h1 className="md:text-8xl text-5xl font-bold outline-2 outline outline-gray-500 bg-white">Skills</h1>
          <div className="pt-4 space-y-2">
            {
              skills.map((skill, index) => (
                <div key={index} className='w-full bg-white rounded-md border border-gray-800 overflow-hidden flex justify-between'>
                  <span className={`bg-red-300 flex justify-between p-2 w-[${skill.level}%]`}>
                    <span className="flex gap-4">
                      <img src={skill.image} alt={skill.name} className="h-[55px] w-[55px] rounded-full" />
                      <p className='text-2xl font-bold flex justify-center items-center'>{skill.name}</p>
                    </span>
                  </span>
                </div>
              ))
            }
          </div>
        </section>
        <section className="w-full h-full">
          <div className='flex flex-wrap gap-8 justify-center'>
            <div className='w-[40%] bg-white p-2 rounded-md border-2 border-gray-800'>
              <h2 className='text-2xl font-bold border-b-2 border-black'>Languages</h2>
              <ul className="pt-2 flex flex-col gap-1">
                {
                  languages.map((language, index) => (
                    <li key={index} className="border border-gray-800 rounded-[4px] p-1">{language}</li>
                  ))
                }
              </ul>
            </div>
            <div className='w-[40%] bg-white p-2 rounded-md border-2 border-gray-800'>
              <h2 className='text-2xl font-bold border-b-2 border-black'>Frameworks</h2>
              <ul className="pt-2 flex flex-col gap-1">
                {
                  frameworks.map((framework, index) => (
                    <li key={index} className="border border-gray-800 rounded-[4px] p-1">{framework}</li>
                  ))
                }
              </ul>
            </div>
            <div className='w-[40%] bg-white p-2 rounded-md border-2 border-gray-800'>
              <h2 className='text-2xl font-bold border-b-2 border-black'>DevOps</h2>
              <ul className="pt-2 flex flex-col gap-1">
                {
                  devOps.map((data, index) => (
                    <li key={index} className="border border-gray-800 rounded-[4px] p-1">{data}</li>
                  ))
                }
              </ul>
            </div>
            <div className='w-[40%] bg-white p-2 rounded-md border-2 border-gray-800'>
              <h2 className='text-2xl font-bold border-b-2 border-black'>Tools</h2>
              <ul className="pt-2 flex flex-col gap-1">
                {
                  tools.map((data, index) => (
                    <li key={index} className="border border-gray-800 rounded-[4px] p-1">{data}</li>
                  ))
                }
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Skills