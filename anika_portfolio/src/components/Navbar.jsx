import { CgNametag } from "react-icons/cg";
import { AiOutlineClose } from "react-icons/ai";
import { HiMenuAlt1 } from "react-icons/hi";
import { useState } from "react";


const Navbar = () => {

    const [toggle, setToggle] = useState(false);

    function OpenMenu(){
        setToggle(true);
    }

    function CloseMenu(){
        setToggle(false);
    }

    return (

        <nav>
            <div className="flex items-center justify-between p-10 lg:flex-row ">
                <div className="text-white font-mono text-3xl tracking-wider flex items-center"><CgNametag/>Anika's Portfolio</div>
                    <div className="space-x-4">
                        <div className="ssm:hidden lg:block space-x-2">
                            <a href="/skills" className="text-white hover:bg-rose-400 rounded-full px-5 py-2 text-xl">Skills</a>
                            <a href="/experiences" className="text-white hover:bg-cyan-400 rounded-full px-5 py-2 text-xl">Experiences</a>
                            <a href="/education" className="text-white hover:bg-purple-400 rounded-full px-5 py-2 text-xl">Education</a>
                            <a href="/achievements" className="text-white hover:bg-orange-400 rounded-full px-5 py-2 text-xl">Achievements</a>
                            <a href="/projects" className="text-white hover:bg-fuchsia-400 rounded-full px-5 py-2 text-xl">Projects</a> 
                            
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

                        <li>
                            <a href="/skills" className="text-white hover:bg-rose-400 text-xl mb-2 cursor-pointer">Skills</a>
                        </li>

                        <li>
                            <a href="/experiences" className="text-white hover:bg-cyan-400 text-xl mb-2 cursor-pointer">Experiences</a>
                        </li>
                        
                        <li>
                            <a href="/education" className="text-white hover:bg-purple-400 text-xl mb-2 cursor-pointer">Education</a>
                        </li>
                        
                        <li>
                            <a href="/achievements" className="text-white hover:bg-orange-400 text-xl mb-2 cursor-pointer">Achievements</a>
                        </li>
                        
                        <li>
                            <a href="/projects" className="text-white hover:bg-fuchsia-400 text-xl mb-2 cursor-pointer">Projects</a>
                        </li>
                        
                    </ul>
                </div>
             )
             :
             (
                <div> </div>
             )}   

            </div>
        </nav>

        )
    }

export default Navbar
