import { BsFacebook, BsTwitter, BsLinkedin, BsGithub } from "react-icons/bs";
import MyPic from '../assets/anika_pic.jpg';
import { useState } from 'react';
 
const Profile = () => {

    const [toggle, setToggle] = useState(false);

    function ShowMore(){
        setToggle(!toggle);
    }

  return (
    <section className="flex justify-around items-center p-10 space-x-10 lg:flex-row ssm:flex-col ssm:space-y-10 text-white">
        <div className="lg:w-1/3 ssm:w-fit "> 
            <p className="text-4xl mb-5 text-slate-300 ">
                I'm 
            </p>
            <h1 className="text-6xl ">
                Anika Islam
            </h1>
            <hr/>
            <p className="mt-10 text-xl font-sans">
            Will be adding this part later ... 
            </p>
        </div>


        <div className='w-1/3 items-center ssm:w-fit'>
            <img src={MyPic} alt="" width={250} height={250}
            className="rounded-full w-full border-8 border-white">
            </img>
        </div>


        <div className='w-1/3 items-center ssm:w-fit'>
            <p className="text-4xl mb-4">About Me</p>
            <p className="text-slate-300 ">
                Will add this part later on .... 
            </p>
            <button className="bg-white text-blue-800 px-10 py-2 my-3 rounded-full hover:bg-blue-700 hover:text-white " onClick={ShowMore}>
                {toggle ? "Show Less" : "Show More"}
            </button>
        </div>

        
        <div className="flex mt-5 space-x-4 cursor-pointer">

            <a href="https://www.facebook.com/anikaislamporoma" target="_blank" rel="noopener noreferrer">
                    <BsFacebook size={40} className="border-4 hover:border-blue-800 rounded-full"/>
            </a>

            <a href="https://www.linkedin.com/in/anika-islam-2002a08u17" target="_blank" rel="noopener noreferrer">
            <   BsLinkedin size={40} className="border-4 hover:border-blue-800 rounded-full"/> 
            </a>
            
            <a href="https://www.github.com/anikabytes" target="_blank" rel="noopener noreferrer">
                <BsGithub size={40} className="border-4 hover:border-blue-800 rounded-full"/>
            </a>

            <a href="https://www.twitter.com/anikaa_tweets" target="_blank" rel="noopener noreferrer">
            <BsTwitter size={40} className="border-4 hover:border-blue-800 rounded-full"/>
            </a>

        </div>
    </section>
  )
}

export default Profile
