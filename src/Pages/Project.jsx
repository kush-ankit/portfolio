import { BsGithub, BsFillArrowUpRightSquareFill } from 'react-icons/bs';




function Project() {
  return (
    <div name='Project' className="bg-white p-[2rem]">
      <div className="flex">
        <div className="w-full h-full space-y-12">
          <div className="text-8xl font-bold outline-2 outline outline-gray-500 bg-[#ffe14e]">Latest Projects</div>
          <div className="p-4">
            <div >
              <h2 className="text-4xl font-bold outline-2 outline outline-gray-500 bg-[#ffe14e]">CSI-Srmcem Website</h2>
              <img src="https://i.ibb.co/bBxySPZ/csi-srmcem-web-app.png" alt="p1" className="outline-2 outline outline-gray-500" />
              <div className='outline-2 outline outline-gray-500 bg-[#ffe14e] text-xl'>
                <h2>Landing Website for the collage club CSI-SRMCEM</h2>
                <div className="flex justify-around p-4 outline-2 outline outline-gray-500">
                  <a href='https://github.com/kush-ankit/csiportal' target='_blank' rel="noreferrer"><BsGithub size={30} /></a>
                  <a href='https://csi-srmcem.web.app/' target='_blank' rel="noreferrer"><BsFillArrowUpRightSquareFill size={30} /></a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full">
          <div className=" p-4 w-full h-full flex flex-col justify-center">
            <div className="">
              <h2 className="text-4xl font-bold outline-2 outline outline-gray-500 bg-[#ffe14e]">Portfolio</h2>
              <img src="https://i.ibb.co/XJmMMtr/screencapture-localhost-5173-2023-10-07-19-48-59.png" alt="p1" className="outline-2 outline outline-gray-500" />
              <div className='outline-2 outline outline-gray-500 bg-[#ffe14e] text-xl'>
                <h2>Web App with detailed info about myself</h2>
                <div className="flex justify-around p-4 outline-2 outline outline-gray-500">
                  <a href='https://github.com/kush-ankit/portfolio' target='_blank' rel="noreferrer"><BsGithub size={30} /></a>
                  <a href='https://kush-ankit.web.app/' target='_blank' rel="noreferrer"><BsFillArrowUpRightSquareFill size={30} /></a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full">
          <div className=" p-4 space-y-8 w-full h-full flex flex-col justify-center">
            <div >
              <h2 className="text-4xl font-bold outline-2 outline outline-gray-500 bg-[#ffe14e]">LearnWithQuiz</h2>
              <img src="https://i.ibb.co/M1Gvdw5/Screenshot-20221217-131511.png" alt="p1" className="outline-2 outline outline-gray-500" />
              <div className='outline-2 outline outline-gray-500 bg-[#ffe14e] text-xl'>
                <h2>LearnWithQuiz is a online solution for learning</h2>
                <div className="flex justify-around p-4 outline-2 outline outline-gray-500">
                  <a href='#' target='_blank' rel="noreferrer"><BsGithub size={30} /></a>
                  <a href='#' target='_blank' rel="noreferrer"><BsFillArrowUpRightSquareFill size={30} /></a>
                </div>
              </div>
            </div>
            <div >
              <h2 className="text-4xl font-bold outline-2 outline outline-gray-500 bg-[#ffe14e]">MyOnlineTodos</h2>
              <img src="https://i.ibb.co/BG0gvhb/screencapture-myonlinetodoapp-web-app-2023-10-07-19-51-29.png" alt="p1" className="outline-2 outline outline-gray-500" />
              <div className='outline-2 outline outline-gray-500 bg-[#ffe14e] text-xl'>
                <h2>MyonlineTodo is use to store your daily todos without forgetting</h2>
                <div className="flex justify-around p-4 outline-2 outline outline-gray-500">
                  <a href='https://github.com/kush-ankit/todos' target='_blank' rel="noreferrer"><BsGithub size={30} /></a>
                  <a href='https://myonlinetodoapp.web.app/' target='_blank' rel="noreferrer"><BsFillArrowUpRightSquareFill size={30} /></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Project
