import React from 'react'
import AboutCard from './AboutCard'
import AboutIcons from './AboutIcons'


const About = ({dark}) => {
    return (
        <div className="md:my-24 mt-32" id="About">
            <AboutIcons dark={dark} 
                iconHeader="flex items-center justify-center md:my-24 mt-12 mb-10"
                facebook="md:w-12 w-7"
                twitter="mx-10 md:w-12 w-7"
            />
            <div className='md:flex justify-center items-center md:mx-10 mx-5'>
                <div className="flex flex-col md:items-start items-center">
                    <h2 className="md:text-7xl text-4xl m-0 md:mb-14 mb-5">7+</h2>
                    <p className="md:text-3xl text-xl m-0 md:w-2/4">
                        Years experience and working
                    </p>
                </div>
                <AboutCard />
            </div>
        </div>
    )
}

export default About
