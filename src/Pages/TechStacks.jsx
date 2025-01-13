import { language } from "../assets/skillsData"
import { TechStackCardComponent } from "../Components/TechStackCardComponent"

function TechStacks() {
  return (
    <div className=''>
      <div name='Techstack' className="bg-[#ffe14e] grid grid-cols-6 gap-4">
        {language.map((skill, index) => {
          return (
            <TechStackCardComponent
              key={index}
              image={skill.image}
              tech={skill.tech}
              description={skill.description}
            />
          )
        })}
      </div>
    </div>
  )
}

export default TechStacks