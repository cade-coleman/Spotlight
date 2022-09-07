import React , {useState} from "react";
import Nav from "../components/Nav/Nav";
import LDmode from "../components/LDmode/LDmode";
import { Link } from "react-router-dom";
import Content from "../components/Content/Content";
import Modal from "../components/modal";

const Account = () => {

  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div name="backgorund" className="bg-[#EAEBE6] w-full">
      <div name="top section" className="">
        <div className=" flex justify-between items-center bg-[#35BDF2] text-white ">
          <LDmode />

          <Link className="pr-2 text-bo" to="/editProfile"></Link>
          <button
        className="openModalBtn mr-2"
        onClick={() => {
          setModalOpen(true);
        }}
      >
        Edit Profile
      </button>
        </div>
      </div>

      <div name="profileCover" className="h-[320px] relative">
        {/* <img
              className='w-full h-full object-cover'
              src={require('../assets/cover.png')} 
              alt='cover'
            /> */}
        <img
          className="w-[295px] h-[300px] rounded-[50px] object-cover absolute m-auto pt-0 left-0 right-0 top-0 bottom-0"
          src={require("../assets/usericon.png")}
          alt="cover"
        />
      </div>

      <div name="bioDescription" className=" ">
        <div className=" bg-[#DDDED9] border-solid border-transparent rounded-md w-98 ml-16 mr-14">
          <h1 className="text-3xl text-center">John Doe</h1>
          <p className="text-center">
            Musician || Self-taught guitarrist and drum player
          </p>
        </div>

        <div className="bg-[#DDDED9] border-solid border-transparent rounded-md w-98 h-28 ml-16 mr-14 mt-4">
          <h2 className="text-lg flex justify-between ml-1">
            About {/* ADD TERNARY STATEMENT    <FiEdit2 className="mr-2" /> */}
          </h2>
          <form className="">
            {/* ADD TERNARY STATEMENT */}
            <p
              className="rounded-md w-4/5 bg-white h-18 h-16 ml-3"
              type="text"
              id="about"
              placeholder="Tell us about yourself"
            />
          </form>
        </div>

        <div>
          <Content />
        </div>

        <div
          name="contac"
          className="bg-[#DDDED9] border-solid border-transparent rounded-md w-98 h-28 ml-16 mr-14 mt-4"
        >
          <div>
            <h2 className="ml-1 text-lg">Contact Me</h2>
            {/* <ul>
                <li className='text-white'><FaFacebook className='text-[#3477F2]' size= {30}/></li>
                <li className='text-white'><FaLinkedin className='text-[#51A6DA]'size= {30}/></li>
                
              </ul> */}
          </div>
        </div>

        <div className=" bg-[#35BDF2] mt-24">
          <a
            href="localhost:3000/Login"
            className="flex justify-end pr-2 text-white"
          >
            Log Out
          </a>
        </div>
        <div className="bg-gray-300 fixed bottom-0 min-w-full">
          <Nav />
          {modalOpen && <Modal setOpenModal={setModalOpen} />}
        </div>
      </div>

      
    </div>

    
  );
};

export default Account;
