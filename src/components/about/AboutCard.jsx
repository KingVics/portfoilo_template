const AboutCard = () => {
    return (
        <div className="mt-5 md:mt-0">
            <h3 className="md:text-4xl text-base md:font-semibold font-light m-0 md:mb-14">Product Designer and Developer, specialized in UI/UX, and digital designs.</h3>
            <div className="grid md:grid-cols-3 grid-cols-1 md:gap-x-7 gap-y-4 mt-5">
                <div className="flex-1 flex flex-col justify-center bg-gray-light shadow-md px-5 py-10 text-green text-lg font-semibold hover:bg-green dark:hover:bg-green-dark hover:text-green-light cursor-pointer">
                    <div>
                        <svg aria-hidden="true" role="img" width="40" height="40" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
                            <g stroke-width="1.5" fill="none"><path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10s10-4.477 10-10S17.523 2 12 2z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M8 21.168V14l4-7l4 7v7.168" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M8 14s1.127 1 2 1s2-1 2-1s1.127 1 2 1s2-1 2-1" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/></g>
                        </svg>
                    </div>
                    <div>
                        <p>Product Designer</p>
                    </div>
                    <div className="text-sm mt-10 flex items-center w-full">
                        <p className="">Discover More</p>
                        <svg aria-hidden="true" role="img" width="30"  preserveAspectRatio="xMidYMid meet" viewBox="0 0 512 512" className="pl-1 ">
                            <path fill="currentColor" d="M359.873 121.377l-22.627 22.627l95.997 95.997H16v32.001h417.24l-95.994 95.994l22.627 22.627L494.498 256L359.873 121.377z"/>
                        </svg>
                    </div>
                </div>
                <div className="bg-green-dark flex-1 flex flex-col justify-center bg-gray-light shadow-md px-5 py-10 text-green text-lg font-semibold hover:bg-green dark:hover:bg-green-dark hover:text-green-light cursor-pointer">
                    <div>
                        <svg  aria-hidden="true" role="img" width="40" height="40" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
                            <path d="M3 18h18a1 1 0 0 1 0 2H3a1 1 0 0 1 0-2zM4 4h16a2 2 0 0 1 2 2v10a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a2 2 0 0 1 2-2zm16 11V6H4v9h16z" fill="currentColor"/>
                        </svg>
                    </div>
                    <div>
                        <p>Frontend Developer</p>
                    </div>
                    <div className="text-sm mt-10 flex items-center w-full">
                        <p className="">Discover More</p>
                        <svg aria-hidden="true" role="img" width="30"  preserveAspectRatio="xMidYMid meet" viewBox="0 0 512 512" className="pl-1 ">
                            <path fill="currentColor" d="M359.873 121.377l-22.627 22.627l95.997 95.997H16v32.001h417.24l-95.994 95.994l22.627 22.627L494.498 256L359.873 121.377z"/>
                        </svg>
                    </div>
                </div>
                <div className="bg-green-dark flex-1 flex flex-col justify-center bg-gray-light shadow-md px-5 py-10 text-green text-lg font-semibold hover:bg-green dark:hover:bg-green-dark hover:text-green-light cursor-pointer">
                    <div>
                        <svg  aria-hidden="true" role="img" width="40" height="40" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
                            <path d="M3 18h18a1 1 0 0 1 0 2H3a1 1 0 0 1 0-2zM4 4h16a2 2 0 0 1 2 2v10a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a2 2 0 0 1 2-2zm16 11V6H4v9h16z" fill="currentColor"/>
                        </svg>
                    </div>
                    <div>
                        <p>Font Developer</p>
                    </div>
                    <div className="text-sm mt-10 flex items-center w-full">
                        <p className="">Discover More</p>
                        <svg aria-hidden="true" role="img" width="30"  preserveAspectRatio="xMidYMid meet" viewBox="0 0 512 512" className="pl-1 ">
                            <path fill="currentColor" d="M359.873 121.377l-22.627 22.627l95.997 95.997H16v32.001h417.24l-95.994 95.994l22.627 22.627L494.498 256L359.873 121.377z"/>
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutCard
