import { LuExternalLink } from "react-icons/lu";
import { BsGithub, BsLinkedin, BsInstagram } from 'react-icons/bs';
import Typewriter from 'typewriter-effect';


function Home() {
    return (
        <div name='Home' className="bg-white w-full h-full">
            <div className="md:flex md:flex-row-reverse space-y-4 md:space-y-0" >
                <div className="md:w-[40%] flex justify-center items-center">
                    <img src="https://i.ibb.co/NdsW1dVb/profile-pic.png" alt="myimg" className=" h-[70%] mr-16 mb-8" />
                </div>

                <div className="md:w-[60%] flex flex-col justify-evenly items-center md:gap-4 gap-16">
                    <div className='space-y-8 w-[70%] ml-[10rem]'>
                        <div >
                            <div className="text-[#FF8C5B] text-2xl font-bold">Namaste, I&apos;m</div>
                            <div>
                                <h1 className='text-black text-5xl md:text-7xl font-bold'>
                                    <Typewriter
                                        options={{
                                            strings: ['Ankit Kushwaha'],
                                            autoStart: true,
                                            loop: true,
                                        }}
                                    />
                                </h1>
                            </div>
                            <div className="text-[#FF8C5B] font-bold text-2xl">Full Stack Developer</div>
                            <div className="text-lg text-gray-800 hidden md:flex">Passionate software developer dedicated to building innovative and <br /> user-centric applications while continuously expanding my skills.</div>
                        </div>
                        <div className='flex justify-between'>
                            <span>
                                <button className='border-2 border-[#000] rounded-md p-2 hover:scale-150 duration-300 flex items-center gap-2'>Resume <LuExternalLink /></button>
                            </span>
                            <div className='flex md:gap-6 gap-4 border-2 border-[#000] rounded-md p-2 hover:scale-150 duration-300'>
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
