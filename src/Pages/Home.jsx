import { Link } from 'react-router-dom';
import './Home.css'
import { BsGithub, BsLinkedin, BsInstagram } from 'react-icons/bs';


function Home() {
    return (
        <div className="bg-white w-full h-full">
            <div className="md:flex md:flex-row-reverse " >
                <div className="md:w-[50%] h-[30rem] md:h-auto flex justify-center items-center">
                    <img src="https://i.ibb.co/Gn8yYS5/picofme-3.png" alt="myimg" className="m-auto md:w-auto w-[80%] md:h-[40rem]" />
                </div>

                <div className="md:h-[40rem] h-[20rem] md:w-[50%] flex flex-col justify-evenly items-center gap-8 p-4">
                    <div className='space-y-8'>
                        <div >
                            <div className="text-[#FF8C5B] text-lg font-bold">Namaste, I&apos;m</div>
                            <div className="text-black text-5xl font-bold">
                                Ankit Kushwaha
                            </div>
                            <div className="text-[#FF8C5B] font-bold text-lg">Full Stack Web Developer</div>
                            <div className="text-sm text-gray-500 hidden md:flex">A passionate computer science student eager to innovate <br /> in web development and embrace cutting-edge technologies <br /> for  user-centric  solutions at the forefront of digital advancements.</div>
                        </div>
                        <div className='flex gap-8 items-baseline'>
                            <Link id='button' to={'/contact'}> Contact me </Link>
                            <button className='button'> Get Resume </button>
                        </div>
                    </div>
                    <div className='flex gap-10'>
                        <div>Check out my </div>
                        <div className='flex gap-10'>
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
