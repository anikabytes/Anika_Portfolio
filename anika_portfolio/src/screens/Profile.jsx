import { BsFacebook, BsTwitter, BsLinkedin, BsGithub } from "react-icons/bs";
import MyPic from '../assets/anika_pic.jpg';
import { useState } from 'react';
 
const Profile = () => {

    const [toggle, setToggle] = useState(false);

    function ShowMore(){
        setToggle(!toggle);
    }

  return (
    <section className="flex justify-around items-center p-10 space-x-5 lg:flex-row ssm:flex-col ssm:space-y-10 text-cyan-400 ">
        <div className="lg:w-1/3 ssm:w-fit "> 
            <p className="text-4xl mb-5 font-serif text-sky-300 hover:text-sky-800">
                Hello, Everyone
            </p>
            <h1 className="text-8xl font-serif  text-bold hover:text-cyan-800">
                Anika Islam
            </h1>
            <p className="mt-10 text-xl font-sans">
            
            </p>
        </div>


        <div className='w-1/3 items-center'>
            <img src={MyPic} alt="" width={200} height={200}
            className="rounded-full w-fit border-8 border-rose-400 hover:border-rose-200">
            </img>
        </div>


        <div className='w-1/3 items-center ssm:w-fit'>
            <p className="text-4xl mb-4  text-sky-300 hover:text-sky-800 font-serif">About Me</p>
            <p className="text-slate-300 hover:text-cyan-800 font-serif ">
                An aspiring student of CSE 
                <p className="text-slate-300 hover:text-cyan-800 font-serif ">
                    with a thirst of learning new technologies 
                </p>
            </p>
            <button className="bg-yellow-300 text-slate-800 px-10 py-2 my-3 rounded-full hover:bg-yellow-400 hover:text-white " onClick={ShowMore}>
                {toggle ? "Show Less" : "Show More"}
            </button>


            <div className="flex mt-5 space-x-4 cursor-pointer ">

                <a href="https://www.facebook.com/anikaislamporoma" target="_blank" rel="noopener noreferrer">
                        <BsFacebook size={40} className="border-4 hover:border-slate-800 rounded-full"/>
                </a>

                <a href="https://www.linkedin.com/in/anika-islam-2002a08u17" target="_blank" rel="noopener noreferrer">
                <   BsLinkedin size={40} className="border-4 hover:border-slate-800 rounded-full"/> 
                </a>

                <a href="https://www.github.com/anikabytes" target="_blank" rel="noopener noreferrer">
                    <BsGithub size={40} className="border-4 hover:border-slate-800 rounded-full"/>
                </a>

                <a href="https://www.twitter.com/anikaa_tweets" target="_blank" rel="noopener noreferrer">
                <BsTwitter size={40} className="border-4 hover:border-slate-800 rounded-full"/>
                </a>

            </div>
        </div>

        

    </section>
  )
}

export default Profile
