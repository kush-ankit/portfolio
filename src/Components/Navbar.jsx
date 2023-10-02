import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
    return (
        <nav name='Navbar' className="bg-white rounded-t-md">
            <div className="w-full md:h-full px-6 md:px-[6rem] flex justify-between items-center">
                <img id='logoimage' src="https://i.ibb.co/GVYVn4w/image-removebg-preview.png" alt="Logon" className="h-14 md:h-24" />
                <div className='md:hidden'>
                    hello
                </div>
                <div className='hidden md:flex gap-4'>
                    <div className='hover:animate-bounce'><Link to={'/'}>Home</Link></div>
                    <div className='hover:animate-bounce'><Link to={'/skills'}>Skills</Link></div>
                    <div className='hover:animate-bounce'><Link to={'/projects'}>Projects</Link></div>
                    <div className='hover:animate-bounce'><Link to={'/certificates'}>Certificates</Link></div>
                </div>
            </div>
        </nav>

    )
}

export default Navbar
