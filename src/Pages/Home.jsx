import { Link } from 'react-scroll';
import './Home.css'
import { BsGithub, BsLinkedin, BsInstagram } from 'react-icons/bs';


function Home() {
    return (
        <div name='Home' className="bg-white w-full h-full">
            <div className="md:flex md:flex-row-reverse space-y-4 md:space-y-0" >
                <div className="md:w-[50%] flex justify-center items-center pt-8">
                    <img src="https://i.ibb.co/Gn8yYS5/picofme-3.png" alt="myimg" className="m-auto md:w-auto w-[80%] md:h-[40rem]" />
                </div>

                <div className="md:h-[40rem]  md:w-[50%] flex flex-col justify-evenly items-center md:gap-4 gap-16 p-4">
                    <div className='space-y-8'>
                        <div >
                            <div className="text-[#FF8C5B] text-lg font-bold">Namaste, I&apos;m hello</div>
                            <div className="text-black text-5xl md:text-7xl font-bold">
                                Ankit Kushwaha
                            </div>
                            <div className="text-[#FF8C5B] font-bold text-lg">Full Stack Web Developer</div>
                            <div className="text-sm text-gray-500 hidden md:flex">A passionate computer science student eager to innovate <br /> in web development and embrace cutting-edge technologies <br /> for  user-centric  solutions at the forefront of digital advancements.</div>
                        </div>
                        <div className='flex gap-8 items-baseline'>
                            <Link id='button' to="Contact" smooth duration={1500} className='cursor-pointer'> Contact me </Link>
                            <a href='https://i.ibb.co/Wct580X/resume.jpg' className='button' download={true} target='_blank' rel="noreferrer"> Get Resume </a>
                        </div>
                    </div>
                    <div className='flex md:gap-10 gap-4'>
                        <div>Check out my: </div>
                        <div className='flex md:gap-10 gap-4'>
                            <a href='https://github.com/kush-ankit' target='_blank' rel="noreferrer" className='Logo-github hover:scale-125 duration-300' ><BsGithub size={30} /></a>
                            <a href='https://www.linkedin.com/in/ankit-kushwaha-135817227' target='_blank' rel="noreferrer" className='Logo-linkedin hover:scale-125 duration-300'><BsLinkedin size={30} /></a>
                            <a href='https://instagram.com/kush_ankit_?igshid=OGQ5ZDc2ODk2ZA==' target='_blank' rel="noreferrer" className='Logo-insta hover:scale-125 duration-300'><BsInstagram size={30} /></a>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Home
