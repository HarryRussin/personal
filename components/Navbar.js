import { HomeIcon, MenuIcon, XIcon, MoonIcon, CogIcon, SunIcon, AcademicCapIcon, BookOpenIcon, MailIcon } from '@heroicons/react/outline'
import { useEffect, useState } from 'react'
import { useRecoilState } from 'recoil'
import { darkmode } from '../atoms/darkModeAtom'


function Navbar() {
    const [DarkMode, setDarkMode] = useRecoilState(darkmode)
    const [Transition, setTransition] = useState(false)
    const [MTransition, setMTransition] = useState(false)
    const [open, setopen] = useState(false)
    const [load, setload] = useState(false)

    const setDark = () => {
        setTransition(true)
        setTimeout(() => { setDarkMode(!DarkMode); setTransition(false) }, 300)
    }

    const toggleMenu = () => {
        setMTransition(true)
        setTimeout(() => { setopen(!open); setMTransition(false) }, 300)
    }

    useEffect(() => {
        setload(true)
    }, [])

    return (
        <div className={`bg-transparent pb-5 font-akaya text-xl  ${load?'opacity-100 mt-0':'opacity-0 mt-20'} transition-all duration-1000`}>

            {/* Desktop */}

            <div className={`sm:flex items-center pt-5 hidden responsive-x transition-all duration-500`}>
 
                <div className="flex flex-1"></div>

                <div className="flex items-center space-x-10">
                    <MoonIcon onClick={setDark} className={`w-6 nav ${Transition && 'scale-0'}  ${DarkMode && 'hidden'}  transition-all`} />
                    <SunIcon onClick={setDark} className={`w-6 nav ${Transition && 'scale-0'}  ${!DarkMode && 'hidden'}  transition-all`} />
                    <CogIcon className='nav w-6 hover:rotate-[520deg] transition-all duration-200' />
                </div>

                {/* right section - dark toggle, dashboard */}
            </div>

            {/* Mobile */}

            <div className="sm:hidden absolute dark:bg-[#1b2536] bg-[#f6f5bd] flex z-10 min-w-full justify-between">
                <div className={`transition-all ${open ?'min-h-screen border-r-2':'bg-transparent h-[4.5rem]'} ${DarkMode?' border-slate-400':''}  pt-5 px-5`}>
                    {/* Hamburger transition */}
                    <div className={` nav transition-all flex `}>
                        <div >
                            <MenuIcon onClick={toggleMenu} className={`w-8  ${MTransition && 'scale-0'}  ${open && 'hidden'}  transition-all`} />
                            <XIcon onClick={toggleMenu} className={`w-8  ${MTransition && 'scale-0'}  ${!open && 'hidden'}  transition-all`} />
                        </div>
                    </div>

                </div>
                <div className="flex space-x-5 pt-5 mr-5">
                    <MoonIcon onClick={setDark} className={`w-8 h-8 nav ${Transition && 'scale-0'}  ${DarkMode && 'hidden'}  transition-all`} />
                    <SunIcon onClick={setDark} className={`w-8 h-8 nav ${Transition && 'scale-0'}  ${!DarkMode && 'hidden'}  transition-all`} />
                    <CogIcon className='nav h-8 w-8 hover:rotate-[520deg] transition-all duration-200' />
                </div>
            </div>

        </div>
    )
}

export default Navbar
