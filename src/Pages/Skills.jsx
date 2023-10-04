
function Skills() {
  return (
    <div name='Skill' className="w-full h-full bg-[#FFD500] p-[3rem]">
      <div className="flex">
        <div className="w-[50%] flex flex-col items-center">
          <div className="font-bold text-[70px] w-full h-full">Skills I Have</div>
        </div>
        <div className="w-[50%] ">
          <div className="h-[200px] border-t-4 border-black text-[70px] font-bold flex overflow-hidden">
            <span>01. JavaScript</span>
            <img className="w-fit h-fit bg-center" src="https://i.ibb.co/GJj4vn8/1-6ooq0-R60ba3-UT5c-QVem-A-removebg-preview.png" alt="ii" />
          </div>
          <div className="font-bold text-[70px] border-t-4 border-black">2</div>
          <div className="font-bold text-[70px] border-t-4 border-black">3</div>
          <div className="font-bold text-[70px] border-t-4 border-black">4</div>
          <div className="font-bold text-[70px] border-t-4 border-black">5</div>
        </div>
      </div>
    </div>
  )
}

export default Skills
