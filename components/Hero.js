
function Hero() {
    return (
        <div className='nav'>
            <div className="responsive-x mt-10 sm:mt-10">

                {/* big letter HARRY */}

                <h1 className="text-[5rem] font-bowlby m-0">Hi, I&apos;m<br></br> <span className='from-cyan-300 to-blue-500 bg-gradient-to-tr text-transparent bg-clip-text'>Harry</span> Russin</h1>

                {/* small letter student designer developer */}
                <div className="mt-2 sm:w-[80%] text-gray-800 dark:text-gray-300">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi quis consequuntur suscipit vero et voluptate exercitationem harum dolorum ratione, impedit provident vel voluptatem, cumque nihil iste sequi. Voluptatum, architecto tempore?</p>
                </div>
                {/* CTA buttons */}
                <div className="flex mt-7 flex-wrap pb-5">
                    <button className=' button mr-7'>Instagram</button>
                    <button className='button mr-7'>Facebook</button>
                    <button className='button mt-5 xs:mt-0 mr-auto'>Twitter</button>
                    <a className="" href='#content'>move down</a>
                </div>
                
            </div>

        </div>
    )
}

export default Hero
