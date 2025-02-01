import { Link } from 'react-scroll';
import './Navbar.css';

function Navbar() {
    return (
        <nav className="bg-white rounded-t-md">
            <div className="w-full md:h-full px-6 md:px-[6rem] flex justify-between items-center">
                <img id='' src="https://i.ibb.co/GVYVn4w/image-removebg-preview.png" alt="Logon" className="h-14 md:h-24 scale-150" />
                <div className='md:hidden'>
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost btn-circle">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                        </label>
                    </div>
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
