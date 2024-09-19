import {} from '@heroicons/react/outline'


function Hero() {
    return (
        <div className='nav font-["Roboto Mono"]'>
            <div className="responsive-x mt-16 sm:mt-24">

                {/* big letter HARRY */}
                {/* <h1 className="text-[5rem] font-bowlby m-0">Hi, I&apos;m<br></br> <span className='from-cyan-300 to-blue-500 bg-gradient-to-tr text-transparent bg-clip-text'>Harry</span> Russin</h1> */}

                {/* small letter student designer developer */}
                <div className="mt-2 sm:w-[80%] text-gray-800 dark:text-gray-300">
                    <p>student at <a className="text-inherit sickHover" href="https://bath.ac.uk">the 
                    university of bath </a>studying theoretical physics. <br/><br/>alumni of <a className="text-inherit sickHover">queen ethelburga's</a> as an academic scholar.</p>
                    <p>a-levels</p>
                    <br/>
                    <li>
                        <span>mathematics - A*</span>
                    </li>
                    <li>
                        <span>spanhysics - A</span>
                    </li>
                    <li>
                        <span>fmathematics - B</span>
                    </li>
                    <li>
                        <span>chemistry (as) - A</span>
                    </li>
                </div>
                {/* CTA buttons */}
                <div className="flex mt-7 flex-wrap pb-5">
                    <a href='https://www.instagram.com/harry_a_russin/' className='sickHover mr-7'>Instagram</a>
                    <a href='https://www.linkedin.com/in/harryrussin/' className='sickHover mr-7'>Linkedin</a>
                    <a href='https://www.facebook.com/profile.php?id=100068125926728' className='sickHover mr-7'>Facebook</a>
                </div>
                
            </div>

        </div>
    )
}

export default Hero
