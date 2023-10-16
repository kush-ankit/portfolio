import {BsFillArrowUpRightCircleFill} from 'react-icons/bs'

function TechStacks() {
  return (
    <div name='Techstack' className="bg-[#ffe14e]">
      <div className="w-full h-full md:p-[3rem] px-4 py-8 bg-center bg-[url('https://i.ibb.co/58d2G7s/Component-1-3.png')]">
        <div className="flex md:flex-row flex-col gap-8 md:gap-0">
          <div className="w-[50%]">
            <h1 className="font-bold md:text-7xl text-5xl bg-white outline outline-1 w-fit p-1">TechStacks <br /> Expert</h1>
          </div>
          <div className="md:w-[50%] ">
            <div className="md:h-[150px] h-16 md:border-t-4 border-t-2 border-black  overflow-hidden flex items-center justify-between px-4 md:px-[4rem]">
              <p className="md:text-[50px] text-xl font-bold">JavaScript</p>
              <span><BsFillArrowUpRightCircleFill size={30} /></span>
            </div>
            <div className="md:h-[150px] h-16 md:border-t-4 border-t-2 border-black  overflow-hidden flex items-center justify-between px-4 md:px-[4rem]">
              <p className="md:text-[50px] text-xl font-bold">C Language</p>
              <span><BsFillArrowUpRightCircleFill size={30} /></span>
            </div>
            <div className="md:h-[150px] h-16 md:border-t-4 border-t-2 border-black  overflow-hidden flex items-center justify-between px-4 md:px-[4rem]">
              <p className="md:text-[50px] text-xl font-bold">CSharp</p>
              <span><BsFillArrowUpRightCircleFill size={30} /></span>
            </div>
            <div className="md:h-[150px] h-16 md:border-t-4 border-t-2 border-black  overflow-hidden flex items-center justify-between px-4 md:px-[4rem]">
              <p className="md:text-[50px] text-xl font-bold">Reactjs</p>
              <span><BsFillArrowUpRightCircleFill size={30} /></span>
            </div>
            <div className="md:h-[150px] h-16 md:border-t-4 border-t-2 border-black  overflow-hidden flex items-center justify-between px-4 md:px-[4rem]">
              <p className="md:text-[50px] text-xl font-bold">Nodejs</p>
              <span><BsFillArrowUpRightCircleFill size={30}  /></span>
            </div>
            <div className="md:h-[150px] h-16 md:border-t-4 border-t-2 border-black  overflow-hidden flex items-center justify-between px-4 md:px-[4rem]">
              <p className="md:text-[50px] text-xl font-bold">Expressjs</p>
              <span><BsFillArrowUpRightCircleFill size={30} /></span>
            </div>
            <div className="md:h-[150px] h-16 md:border-t-4 border-t-2 border-black  overflow-hidden flex items-center justify-between px-4 md:px-[4rem]">
              <p className="md:text-[50px] text-xl font-bold">MongoDB</p>
              <span><BsFillArrowUpRightCircleFill size={30} /></span>
            </div>
            <div className="md:h-[150px] h-16 md:border-t-4 border-t-2 border-black  overflow-hidden flex  items-center justify-between px-4 md:px-[4rem]">
              <p className="md:text-[50px] text-xl font-bold">Python</p>
              <span><BsFillArrowUpRightCircleFill size={30} /></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TechStacks
