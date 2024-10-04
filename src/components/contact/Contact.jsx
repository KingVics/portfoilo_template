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
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill={dark ? "#333" : "#fff"} d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967c-.273-.099-.471-.148-.67.15c-.197.297-.767.966-.94 1.164c-.173.199-.347.223-.644.075c-.297-.15-1.255-.463-2.39-1.475c-.883-.788-1.48-1.761-1.653-2.059c-.173-.297-.018-.458.13-.606c.134-.133.298-.347.446-.52s.198-.298.298-.497c.099-.198.05-.371-.025-.52s-.669-1.612-.916-2.207c-.242-.579-.487-.5-.669-.51a13 13 0 0 0-.57-.01c-.198 0-.52.074-.792.372c-.272.297-1.04 1.016-1.04 2.479c0 1.462 1.065 2.875 1.213 3.074s2.096 3.2 5.077 4.487c.709.306 1.262.489 1.694.625c.712.227 1.36.195 1.871.118c.571-.085 1.758-.719 2.006-1.413s.248-1.289.173-1.413c-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214l-3.741.982l.998-3.648l-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884c2.64 0 5.122 1.03 6.988 2.898a9.82 9.82 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.82 11.82 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.9 11.9 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.82 11.82 0 0 0-3.48-8.413"/></svg>
                        <p className="md:ml-2">+234 8156218098</p> 
                    </div>
                    <div className="flex items-center mt-8">
                        <svg aria-hidden="true" role="img" width="20" height="20" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
                            <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-.4 4.25l-7.07 4.42c-.32.2-.74.2-1.06 0L4.4 8.25a.85.85 0 1 1 .9-1.44L12 11l6.7-4.19a.85.85 0 1 1 .9 1.44z" fill={dark ? "#333" : "#fff"}/>
                        </svg>
                        <p className="md:ml-2">okoromivictorsunday@gmail.com</p>
                    </div>
                    <div className="flex items-center mt-8 ">
                        <svg aria-hidden="true" role="img" width="20" height="20" preserveAspectRatio="xMidYMid meet" viewBox="0 0 32 32">
                            <defs/><path d="M16 2A11.013 11.013 0 0 0 5 13a10.889 10.889 0 0 0 2.216 6.6s.3.395.349.452L16 30l8.439-9.953c.044-.053.345-.447.345-.447l.001-.003A10.885 10.885 0 0 0 27 13A11.013 11.013 0 0 0 16 2zm0 15a4 4 0 1 1 4-4a4.005 4.005 0 0 1-4 4z" fill={dark ? "#333" : "#fff"}/><circle id="_Inner-Path_" cx="16" cy="13" r="4" fill={dark ? "#59b256" : "#333"}/>
                        </svg>
                        <p className="md:ml-2">Apapa Lagos, Nigeria</p>
                    </div>
                    <AboutIcons iconHeader="flex pt-8 items-center" facebook="w-4" twitter="w-4 mx-5"  whatsapp={true}/>
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