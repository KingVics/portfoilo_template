import Toggle from "../toggle/Toggle"


const Nav = ({ dark, setDark}) => {
    return (
        <div className="flex items-center justify-between mx-5 md:mx-10 sm:pt-8 pt-4">
            <div>
                <h2 className="font-bold text-sm md:text-xl"><span>Vic</span><span className="dark:text-green-dark">Code</span></h2>
            </div>
            <div className="flex items-center">
                <ul className="hidden md:flex items-center dark:text-green-light text-green text-sm md:text-lg">
                    <li className="mr-5 ml-5"><a href="#Home" className="hover:text-green-dark ">Home</a></li>
                    <li className="mr-5 ml-5"><a href="#About" className="hover:text-green-dark">About</a></li>
                    <li className="mr-5 ml-5"><a href="#Work" className="hover:text-green-dark">Work</a></li>
                    <li className="mr-5 ml-5"><a href="#Contact" className="hover:text-green-dark">Contact</a></li>
                </ul>
                <Toggle dark={dark} setDark={setDark} className=""/>
            </div>
        </div>
    )
}

export default Nav
