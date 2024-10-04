import  "./Intro.css"
import Me from "../Images/me1.png"
import MobileImg from "../Images/me-mobile.png"
import useMediaQuery  from "../../hooks/useMediaQuery";

const Intro = ({dark}) => {
    // const theme = useContext(ThemeContext)
    // const darkMode = theme.state.darkMode
    const isLarge = useMediaQuery("(max-width: 760px)")

    

    return (
        <div className="md:flex h-screen">
            <div className="md:ml-10 md:flex flex-col justify-center flex-1 intro-text">
                <h2 className="md:text-7xl text-4xl md:font-bold leading-2 md:mb-5 md:w-1/2">Victor Okoromi</h2>
                <div className="h-12 overflow-hidden md:my-8 px-5 md:px-0">
                    <div className="i-title-wrapper h-full">
                        <div className="h-12 md:text-xl text-sm md:font-bold md:text-green-dark flex md:block items-center justify-center">A Full Stack Developer and Cross Platform Mobile Developer. I build awesome User Interface.</div>
                        <div className="h-13 md:text-xl text-sm md:font-bold md:text-green-dark flex md:block items-center justify-center">A UI/UX Designer. I bring your idea's into visualization.</div>
                        <div className="h-12 md:text-xl text-sm md:font-bold md:text-green-dark flex md:block items-center justify-center">I work with Vanila JavaScript, TypeScript, React, NextJS, Node, Express, React Native.</div>
                    </div>
                </div>
                <button className="md:w-1/4 w-2/4 rounded-xl dark:bg-green-dark bg-green text-green-light py-5">Learn More</button>
            </div>
            <div className="flex-1 md:relative md:mt-10">
                <div className="clip md:block hidden bg-green-dark md:h-full h-3/4 w-full absolute top-0 right-0"></div> 
                <picture>
                    <source media="(max-width: 768px)" srcSet={`${MobileImg}`}  className="absolute md:h-full h-3/4 w-full object-cover md:dark:opacity-90" style={{opacity:  dark && isLarge && '0.6' }}/>
                    <source media="(min-width: 769px)" srcSet={`${Me}`} className="absolute md:h-full h-3/4 w-full object-cover md:dark:opacity-90" style={{opacity:  dark && isLarge && '0.6' }} />
                    <img src={Me} alt="" className="absolute md:h-full h-3/4 w-full object-cover md:dark:opacity-90" style={{opacity:  dark && isLarge && '0.6' }}/> 
                </picture>
            </div>
        </div>
    );
};

export default Intro;