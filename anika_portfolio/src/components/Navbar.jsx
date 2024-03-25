import { CgNametag } from "react-icons/cg";
import { AiOutlineClose } from "react-icons/ai";
import { HiMenuAlt1 } from "react-icons/hi";
import { useState } from 'react';

const Navbar = () => {

    const [toggle, setToggle] = useState(false);

    function OpenMenu(){
        setToggle(true);
    }

    function CloseMenu(){
        setToggle(false);
    }

    return (
        <>
            <div className="flex items-center justify-between p-10 lg:flex-row ">
                <div className="text-white font-mono text-3xl tracking-wider flex items-center"><CgNametag/>Anika's Portfolio</div>
                    <div className="space-x-4">
                        <div className="ssm:hidden lg:block space-x-2">
                            <a href="#" className="text-white hover:bg-blue-700 rounded-full px-5 py-2 text-xl">Skills</a>
                            <a href="#" className="text-white hover:bg-blue-700 rounded-full px-5 py-2 text-xl">Experiences</a>
                            <a href="#" className="text-white hover:bg-blue-700 rounded-full px-5 py-2 text-xl">Education</a>
                            <a href="#" className="text-white hover:bg-blue-700 rounded-full px-5 py-2 text-xl">Achievements</a>
                            <a href="#" className="text-white hover:bg-blue-700 rounded-full px-5 py-2 text-xl">Projects</a>
                        </div>

                        <div className="ssm:block lg:hidden">
                            {toggle ? (
                                <AiOutlineClose onClick={CloseMenu} size={30} className="text-white cursor-pointer"/>
                            ):(<HiMenuAlt1 onClick={OpenMenu} size={30} className="text-white "/>)}
                            
                        </div>
                        
                    </div>
            </div>

            <div className="ssm:block lg:hidden">

             {toggle ? (
                <div className="flex justify-between ">
                    <ul>
                        <li className="text-white hover:bg-blue-700 text-xl mb-2 cursor-pointer">Skills</li>
                        <li className="text-white hover:bg-blue-700 text-xl mb-2 cursor-pointer">Experience</li>
                        <li className="text-white hover:bg-blue-700 text-xl mb-2 cursor-pointer">Education</li>
                        <li className="text-white hover:bg-blue-700 text-xl mb-2 cursor-pointer">Achievements</li>
                        <li className="text-white hover:bg-blue-700 text-xl mb-2 cursor-pointer">Projects</li>
                    </ul>
                </div>
             )
             :
             (
                <div> </div>
             )}   

            </div>
        </>
        )
    }

export default Navbar
