import { FiArrowUpRight } from 'react-icons/fi'


function Contact() {
  return (
    <div name='Contact' className="bg-white md:p-8 px-4 py-8">
      <div>
        <h1 className="md:text-8xl text-5xl md:p-4 font-bold bg-[#FFD500] outline outline-1 w-fit">Let&apos;s Discuss <br /> Your Project </h1>
        <div className="flex flex-col md:flex-row justify-center items-center">
          <div className="w-full py-8 space-y-6">
            <div className=" flex justify-around items-center ">
              <div className="flex md:border-t-[3px] border-t-2 border-black p-4 gap-4">
                <img src="https://i.ibb.co/M8bZV3K/image.png" alt="emaillogo" className="md:h-[4rem] h-8" />
                <div className="">
                  <h2 className="text-xl ">Email</h2>
                  <input type="text" placeholder="er.ankitkush@gmail.com" className="outline-none bg-transparent" />
                </div>
              </div>
            </div>
            <div className=" flex justify-around items-center ">
              <div className="flex md:border-t-[3px] border-t-2 border-black p-4 gap-4">
                <img src="https://i.ibb.co/NCYnzfy/gps.png" alt="emaillogo" className="md:h-[4rem] h-8" />
                <div className="">
                  <h2 className="text-xl ">Location</h2>
                  <p className="text-gray-500">Siswa Dixit, Salempur, UP</p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full">
            <div className="w-full h-full flex justify-center items-center">
              <div className="  md:w-[406px] w-[250px] h-[250px] md:h-[406px] bg-cover rounded-full bg-[url('https://i.ibb.co/3d6ZSQD/Group-1-1.png')] flex justify-end items-center md:p-24 p-12">
                <button className="bg-[#FFD500] md:p-4 rounded-full"><FiArrowUpRight size={50} color='white' /></button>
              </div>
            </div>
          </div>
        </div>
        <div className="p-8">
          <footer className="flex justify-around border-t-4 p-4 border-black">
            <span>&copy; 2021 All rights Reserved</span>
            <span>Designed By Ankit Kushwaha</span>
            <a href="mailto:er.ankitkush@gmail.com">er.ankitKushwaha@gmail.com</a>
          </footer>
        </div>
      </div>
    </div>
  )
}

export default Contact
