import { useEffect, useState, useRef } from 'react'
import { FaHatWizard } from 'react-icons/fa'

const Navbar = () => {

    const [sidebarToggled, setSidebarToggled] = useState(false)
    const sidebar = useRef(null);

    useEffect(() =>
    {
        function handler(e)
        {
            if(sidebar.current)
            {
                if(!e.target.classList.contains('sidebar') && !e.target.classList.contains('hamburger-menu'))
                {
                    setSidebarToggled(false)
                }
            }
        }
        document.addEventListener('click', handler)

        return () =>
        {
            document.removeEventListener('click', handler)
        }
    })



    return (
        <header>
            <nav>
                <div className="logo">
                    <div className='hogwarts'>Hogwarts Legacy</div>
                </div>
                <div className='links'>
                    <a href='#home' className='nav-link'>Home</a>
                    <a href='#about' className='nav-link'>About</a>
                    <a href='#tests' className='nav-link'>Book Tests</a>
                    <a href='#info' className='nav-link'>Info</a>
                </div>
                <FaHatWizard className='hamburger-menu' onClick={() => setSidebarToggled(true)} />
            </nav>
            <aside ref={sidebar} className={`sidebar ${sidebarToggled ? 'visible' : ''}`}>
            <div className='mobile-links'>
                    <div className='hogwarts-logo-mobile'>HOGWARTS LEGACY</div>
                    <a href='#home' className='mobile-nav-links'>Home</a>
                    <a href='#about' className='mobile-nav-links'>About</a>
                    <a href='#tests' className='mobile-nav-links'>Book Tests</a>
                    <a href='#info' className='mobile-nav-links'>Info</a>
                </div>
            </aside>
        </header>
    )
}

export default Navbar