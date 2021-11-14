import "./Contact.css";
import { useRef, useState, useEffect } from "react";
import emailjs from "emailjs-com";
import {Keys} from "../../config.js"
import AboutIcons from "../about/AboutIcons";


const Contact = ({ dark }) => {
    const formRef = useRef();
    const [done, setDone] = useState(false)


    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            Keys.service,
            Keys.template,
            formRef.current,
            Keys.service
        )
        .then(
            (result) => {
            console.log(result.text);
            setDone(true)
            },
            (error) => {
            console.log(error.text);
            }
        );
    };

    useEffect(() => {
        const timer = setTimeout(() => {
            setDone(false)
        }, 2000)
        return () => clearTimeout(timer)
    }, [done]);

    return (
        <div className=" " id="Contact">
            <div className="text-center">
                <h2 className="md:text-4xl text-base md:font-semibold dark:text-green-light text-green-dark mb-5">Contact Us</h2>
                <p>Any question or remarks? Just write a message!</p>
            </div>
            <div className="md:flex block justify-between items-center mx-10 mt-10 pb-10 ">
                <div className=" rounded bg-green-dark flex-2 p-10" >
                    <div>
                        <h4 className="text-2xl">Contact Information</h4>
                        <p className="text-sm mt-7">Fill the form and we will get back to you within 24 hours</p>
                    </div>
                    <div className="flex items-center mt-8">
                        <svg aria-hidden="true" role="img" width="20" height="20" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
                            <path d="M20.487 17.14l-4.065-3.696a1.001 1.001 0 0 0-1.391.043l-2.393 2.461c-.576-.11-1.734-.471-2.926-1.66c-1.192-1.193-1.553-2.354-1.66-2.926l2.459-2.394a1 1 0 0 0 .043-1.391L6.859 3.513a1 1 0 0 0-1.391-.087l-2.17 1.861a1 1 0 0 0-.29.649c-.015.25-.301 6.172 4.291 10.766C11.305 20.707 16.323 21 17.705 21c.202 0 .326-.006.359-.008a.992.992 0 0 0 .648-.291l1.86-2.171a.997.997 0 0 0-.085-1.39z" fill={dark ? "#333" : "#fff"}/>
                        </svg>
                        <p className="md:ml-2">+234 8156218098</p> 
                    </div>
                    <div className="flex items-center mt-8">
                        <svg aria-hidden="true" role="img" width="20" height="20" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
                            <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-.4 4.25l-7.07 4.42c-.32.2-.74.2-1.06 0L4.4 8.25a.85.85 0 1 1 .9-1.44L12 11l6.7-4.19a.85.85 0 1 1 .9 1.44z" fill={dark ? "#333" : "#fff"}/>
                        </svg>
                        <p className="md:ml-2">contact@gmail.com</p>
                    </div>
                    <div className="flex items-center mt-8 ">
                        <svg aria-hidden="true" role="img" width="20" height="20" preserveAspectRatio="xMidYMid meet" viewBox="0 0 32 32">
                            <defs/><path d="M16 2A11.013 11.013 0 0 0 5 13a10.889 10.889 0 0 0 2.216 6.6s.3.395.349.452L16 30l8.439-9.953c.044-.053.345-.447.345-.447l.001-.003A10.885 10.885 0 0 0 27 13A11.013 11.013 0 0 0 16 2zm0 15a4 4 0 1 1 4-4a4.005 4.005 0 0 1-4 4z" fill={dark ? "#333" : "#fff"}/><circle id="_Inner-Path_" cx="16" cy="13" r="4" fill={dark ? "#59b256" : "#333"}/>
                        </svg>
                        <p className="md:ml-2">245 King Street, Touterie Victoria 8520 Australia</p>
                    </div>
                    <AboutIcons iconHeader="flex pt-8 items-center" facebook="w-4" twitter="w-4 mx-5" />
                </div>
                
                <div className="flex-1 w-full md:ml-10 mt-10 md:mt-0">
                    <div className="md:flex flex-col items-center justify-center">
                        <p className="font-extralight">
                            <b>What’s your story?</b> Get in touch. Always available for
                            freelancing if the right project comes along. me.
                        </p>
                        <form ref={formRef} onSubmit={handleSubmit} className="mt-5">
                            <input  type="text" placeholder="Name" name="user_name" className="w-full h-14 rounded-sm border-2 border-solid border-black md:my-1.5 mb-2 pl-1.5 text-sm dark:text-green text-green-dark dark:border-black border-green-dark" />
                            <input  type="text" placeholder="Subject" name="user_subject" className="w-full h-14 rounded-sm border-2 border-solid border-black md:my-1.5 mb-2 pl-1.5 text-sm dark:text-green text-green-dark dark:border-black border-green-dark"  />
                            <input  type="text" placeholder="Email" name="user_email" className="w-full h-14 rounded-sm border-2 border-solid border-black md:my-1.5 pl-1.5  mb-2 text-sm dark:text-green text-green-dark dark:border-black border-green-dark"   />
                            <textarea  rows="5" placeholder="Message" name="message" className="w-full text-sm pl-1.5 md:my-1.5 dark:text-green text-green-dark  mb-2 border-2 border-solid dark:border-black border-green-dark" />
                            <div className="flex justify-end">
                                <button className="p-5 bg-green-dark text-green-light font-bold cursor-pointer rounded-md w-2/4">Submit</button>
                            </div>
                            {done && "Thank you..."}
                        </form>
                    
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;