import React from "react";


function Modal({ setOpenModal }) {
  return (
    <div className="modalBackground w-full h-screen bg-[#F2F2F2] bg-fixed flex justify-center items-center">
      <div className="modalContainer w-[300px] h-[600px] rounded-tr-xl bg-white shadow-gray-800 flex flex-cols  p-[25px] absolute inset-0 ml-20 mt-44 ">
        <div className="titleCloseBtn">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
          className="bg-red-600 w-8 rounded-md text-white">
            X
          </button>
        </div>
        <div className="title  mt-10 ml-10 flex flex-row  ">
          <h1 className="text-lg pr-1 ">Edit</h1>
          <h1 className="text-lg  ">Profile</h1>
        </div>
        <div className="body flex flex-col ntent-end mt-24 mr-24 absolute inset-0 ">
            <form className="mt-4">
                <label className="ml-1">Firts Name</label>
                <input
                    className="rounded-md bg-gray-50 ml-1"
                    type="text"
                    id="firstName"
                    name="firstName"
                    
                    />
            </form>
            <form className="mt-4">
                <label className="ml-1">Last Name</label>
                <input
                    className="rounded-md bg-gray-50 ml-1"
                    type="text"
                    id="lastName"
                    name="lastName"
                    
                    />
            </form>
            <form className="mt-4">
                <label className="ml-1">Title</label>
                <input
                    className="rounded-md bg-gray-50 ml-1"
                    type="text"
                    id="title"
                    name="title"
                    
                    />
            </form>
            <form className="mt-4">
                <label className="ml-1">Description</label>
                <textarea className=" bg-gray-50 ml-1 rounded-md" id="w3review" name="w3review" rows="3" cols="30"></textarea>
            </form>
        </div>
        <div className="footer absolute inset-x-0 bottom-0 ml-10 mb-2  ">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
            id="cancelBtn"
           className="rounded-md w-24 bg-blue-700 text-white">
            Cancel
          </button>

          <button className="rounded-md w-28 bg-green-500 text-white">Save changes</button>
        </div>
      </div>
    </div>
  );
}

export default Modal;