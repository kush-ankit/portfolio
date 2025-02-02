import { LuExternalLink } from "react-icons/lu";
import { BsGithub, BsLinkedin, BsInstagram } from 'react-icons/bs';
import Typewriter from 'typewriter-effect';


function Home() {
    return (
        <div name='Home' className="bg-white w-full h-full">
            <div className="md:flex md:flex-row-reverse space-y-4 md:space-y-0 pb-4" >
                <div className="md:w-[40%] flex justify-center items-center p-4 md:p-0">
                    <img src="https://i.ibb.co/NdsW1dVb/profile-pic.png" alt="myimg" className="h-[70%] md:mr-16 md:mb-8" />
                </div>

                <div className="md:w-[60%] flex flex-col justify-evenly items-center md:gap-4">
                    <div className='md:space-y-8 space-y-4 w-full md:w-[70%] md:ml-[5rem] px-4 md:px-0'>
                        <div >
                            <div className="text-[#FF8C5B] md:text-2xl text-md font-bold">Namaste, I&apos;m</div>
                            <div>
                                <h1 className='text-black text-4xl md:text-7xl font-bold'>
                                    <Typewriter
                                        options={{
                                            strings: ['Ankit Kushwaha'],
                                            autoStart: true,
                                            loop: true,
                                        }}
                                    />
                                </h1>
                            </div>
                            <div className="text-[#FF8C5B] font-bold md:text-2xl text-md">Full Stack Developer</div>
                            <div className="text-lg text-gray-800 hidden md:flex">Passionate software developer dedicated to building innovative and <br /> user-centric applications while continuously expanding my skills.</div>
                        </div>
                        <div className='flex justify-between'>
                            <span>
                                <button className='border-2 border-[#000] rounded-md p-2 hover:scale-150 duration-300 flex items-center gap-2'>Resume <LuExternalLink /></button>
                            </span>
                            <div className='flex md:gap-6 gap-3 border-2 border-[#000] rounded-md md:p-2 p-1 hover:scale-150 duration-300'>
                                <a href='https://github.com/kush-ankit' target='_blank' rel="noreferrer" className='hover:scale-150  duration-300' ><BsGithub size={30} /></a>
                                <a href='https://www.linkedin.com/in/ankit-kushwaha-135817227' target='_blank' rel="noreferrer" className='hover:scale-150 duration-300'><BsLinkedin size={30} /></a>
                                <a href='https://instagram.com/kush_ankit_?igshid=OGQ5ZDc2ODk2ZA==' target='_blank' rel="noreferrer" className='hover:scale-150 duration-300'><BsInstagram size={30} /></a>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Home;
