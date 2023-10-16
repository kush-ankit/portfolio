import { Link } from 'react-scroll';
import {HiMenu} from 'react-icons/hi'
import './Navbar.css';

function Navbar() {
    return (
        <nav className="bg-white rounded-t-md">
            <div className="w-full md:h-full px-6 md:px-[6rem] flex justify-between items-center">
                <img id='logoimage' src="https://i.ibb.co/GVYVn4w/image-removebg-preview.png" alt="Logon" className="h-14 md:h-24" />
                <div className='md:hidden'>
                    <HiMenu size={30}/>
                </div>
                <div className='hidden md:flex gap-4'>
                    <div className='hover:animate-bounce cursor-pointer'><Link to="Home" smooth duration={500}>Home</Link></div>
                    <div className='hover:animate-bounce cursor-pointer'><Link to="Techstack" smooth duration={500}>Techstack</Link></div>
                    <div className='hover:animate-bounce cursor-pointer'><Link to="Project" smooth duration={500}>Projects</Link></div>
                    <div className='hover:animate-bounce cursor-pointer'><Link to="Certificate" smooth duration={500}>Certificates</Link></div>
                </div>
            </div>
        </nav>

    )
}

export default Navbar
