import { FiArrowUpRight} from 'react-icons/fi'


function Contact() {
  return (
    <div name='Contact' className="bg-white p-8">
      <div>
        <div className="flex">
          <div className="w-full">
            <h1 className="text-8xl p-4 font-bold">Let&apos;s Discuss Your Project </h1>
            <div className="p-8 flex justify-around items-center ">
              <div className="flex border-t-[3px] border-black p-4">
                <img src="https://i.ibb.co/M8bZV3K/image.png" alt="emaillogo" className="h-[4rem]" />
                <div className="px-12">
                  <h2 className="text-xl ">Email</h2>
                  <input type="text" placeholder="er.ankitkush@gmail.com" className="outline-none bg-transparent" />
                </div>
              </div>
            </div>
            <div className="p-8 flex justify-around items-center ">
              <div className="flex border-t-[3px] border-black p-4">
                <img src="https://i.ibb.co/NCYnzfy/gps.png" alt="emaillogo" className="h-[4rem]" />
                <div className="px-12">
                  <h2 className="text-xl ">Location</h2>
                  <p className="text-gray-500">Siswa Dixit, Salempur, UP</p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full">
            <div className="w-full h-full flex justify-center items-center">
              <div className="  w-[406px] h-[406px] rounded-full bg-[url('https://i.ibb.co/3d6ZSQD/Group-1-1.png')] flex justify-end items-center p-24">
                  <button className="bg-[#ffe14e] p-4 rounded-full"><FiArrowUpRight size={50} color='white'/></button>
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
