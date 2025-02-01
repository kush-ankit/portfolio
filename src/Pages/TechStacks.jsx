import { skills } from "../assets/skillsData"

function TechStacks() {
  return (
    <div className='h-screen w-full'>
      <div name='Techstack' className="bg-[#ffe14e] h-full w-full flex p-8">
        <section className="w-full h-full">
          <h1 className="md:text-8xl text-5xl font-bold outline-2 outline outline-gray-500 bg-white">Skills</h1>
          <div className="py-4 space-y-2">
            {
              skills.map((skill, index) => (
                <div key={index} className='w-full bg-white rounded-xl overflow-hidden flex justify-between'>
                  <span className={`bg-red-300 flex justify-between p-2 w-[90%]`}>
                    <span className="flex gap-4">
                      <img src={skill.image} alt={skill.name} className="h-[4rem] rounded-full" />
                      <p className='text-2xl font-bold flex justify-center items-center'>{skill.name}</p>
                    </span>
                  </span>
                </div>
              ))
            }
            <div className='w-full h-[5rem] bg-white p-4 rounded-xl flex'>
              <img src="https://i.ibb.co/tcBw4yV/virtual-lab.gif" alt="CS" />
              <p className='text-2xl font-bold'>Computer Science</p>
            </div>
          </div>
        </section>
        <section className="w-full h-full">
          <div className='flex flex-wrap justify-center'>
            <div className='w-1/4 h-1/4 bg-white m-4 p-4 rounded-xl'>
              <h2 className='text-2xl font-bold'>Frontend</h2>
              <ul>
                <li>React</li>
                <li>Vue</li>
                <li>Angular</li>
              </ul>
            </div>
            <div className='w-1/4 h-1/4 bg-white m-4 p-4 rounded-xl'>
              <h2 className='text-2xl font-bold'>Backend</h2>
              <ul>
                <li>Node.js</li>
                <li>Express.js</li>
                <li>Spring Boot</li>
              </ul>
            </div>
            <div className='w-1/4 h-1/4 bg-white m-4 p-4 rounded-xl'>
              <h2 className='text-2xl font-bold'>Database</h2>
              <ul>
                <li>MySQL</li>
                <li>MongoDB</li>
                <li>PostgreSQL</li>
              </ul>
            </div>
            <div className='w-1/4 h-1/4 bg-white m-4 p-4 rounded-xl'>
              <h2 className='text-2xl font-bold'>DevOps</h2>
              <ul>
                <li>Docker</li>
                <li>Kubernetes</li>
                <li>CI/CD</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default TechStacks