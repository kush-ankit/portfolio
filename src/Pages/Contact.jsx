import { FiMail } from 'react-icons/fi';
import { BsTelephone } from 'react-icons/bs';
import { MdLocationPin } from 'react-icons/md';


function Contact() {
  return (
    <div name='Contact' className='bg-white md:py-[1rem] md:px-[6rem] p-2 pt-4'>
      <div className='md:space-y-4 space-y-2'>
        <section>
          <div className="md:text-8xl text-5xl p-1 font-bold outline-2 outline outline-gray-500 bg-[#ffe14e]">Contact us</div>
        </section>
        <section className='h-full w-full rounded-md shadow-2xl flex md:flex-row flex-col justify-center items-center bg-[#ffe14e] border-2 border-black'>
          <div className='w-1/2 h-full rounded-l-md md:flex  justify-center items-center hidden '>
            <div className='md:h-[80%] md:w-[80%]'>
              <div className='md:h-1/3 w-fit flex flex-col justify-evenly gap-2'>
                <div className='text-5xl'>Let&apos;s Talk</div>
                <div className=''>Do Comment your thought it will be highly appreciable.</div>
              </div>
              <div className='h-full flex justify-evenly flex-col py-5'>
                <div className='flex text-1xl '>
                  <BsTelephone size={20} />
                  <div className='pl-5 hover:text-blue-500'>+91 96961 17951</div>
                </div>
                <div className='flex text-1xl  py-5'>
                  <FiMail size={20} />
                  <p><a href="mailto:work.ankitkush@gmail.com" className='pl-5 hover:text-blue-500'>work.ankitkush@gmail.com</a></p>
                </div>
                <div className='flex text-1xl '>
                  <MdLocationPin size={20} />
                  <div className='pl-5 hover:text-blue-500'>Siswa Dixit, Salempur, Deoria, UP </div>
                </div>
              </div>
              
            </div>
          </div>
          <div className='md:w-1/2 w-full h-full rounded-r-md md:p-10 backdrop-blur-lg md:backdrop-blur-none'>
            <div className='h-full w-full  flex justify-center items-center md:bg-white bg-[#ffe14e] rounded-md border border-black'>
              <div className='w-full h-full p-4'>
                <form action="" method="POST">
                  <p className='pt-3'>Your Name</p>
                  <input name='Name' type="text" placeholder='Fullname' className='w-full p-2 border-2 bg-slate-200 hover:border-blue-500 outline-none rounded-md' />
                  <p className='pt-3'>Your Email</p>
                  <input name='email' type="text" placeholder='Email' className='w-full p-2 border-2 bg-slate-200 rounded-md hover:border-blue-500 outline-none' />
                  <p className='pt-3'>Comment here</p>
                  <textarea name="Description" id="Desc" cols="30" rows="5" placeholder='Comment' className='w-full p-1  border-2 bg-slate-200 rounded-md hover:border-blue-500 outline-none' ></textarea>
                  <div className='h-full w-full py-2'>
                    <button type='submit' className='bg-white border border-black py-2 px-5 rounded-md hover:bg-slate-200 duration-200 '>Submit</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section >
      </div>
    </div >
  )
}

export default Contact