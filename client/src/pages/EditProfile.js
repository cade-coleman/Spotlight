import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useQuery, useMutation } from "@apollo/client";
import { EDIT_USER } from "../utils/mutations";
import { QUERY_LOGGED_IN } from "../utils/queries";

const EditProfile = () => {
  const [formState, setFormState] = useState({
    username: "",
    email: "",
    firstName: "",
    lastName: "",
    title: "",
    bio: "",
  });
  const { loading, qdata } = useQuery(QUERY_LOGGED_IN);

  const user = qdata?.loggedIn || {};

  const [editUser, { error, data }] = useMutation(EDIT_USER);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };


  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await editUser({
        variables: { ...formState }
      });

    } catch (e) {
      console.error(e);
    }
  };
  console.log(user);
  return (
    <div className="modalBackground w-full h-screen bg-[#F2F2F2] bg-fixed flex justify-center items-center">
      
        
        {data ? (
          <p>
            Success! You may now head{" "}
            <Link to="/account">back to your account.</Link>
          </p>
        ) : (
          <form className="mt-4" onSubmit={handleFormSubmit}>
        <div className="title  mt-10 ml-10 flex flex-row  ">
        </div>
        <div className="body flex flex-col ntent-end mt-24 mr-24 absolute inset-0 ">

                <label className="ml-1">First Name</label>
                <input
                    className="rounded-md bg-gray-50 ml-1"
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formState.firstName}
                    onChange={handleChange}
                    />
                <label className="ml-1">Last Name</label>
                <input
                    className="rounded-md bg-gray-50 ml-1"
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formState.lastName}
                    onChange={handleChange}
                    />
                <label className="ml-1">Title</label>
                <input
                    className="rounded-md bg-gray-50 ml-1"
                    type="text"
                    id="title"
                    name="title"
                    value={formState.title}
                    onChange={handleChange}
                    />

                <label className="ml-1">About</label>
                <input
                className=" bg-gray-50 ml-1 rounded-md"
                rows="3" 
                cols="30"
                id="bio"
                name="bio"
                value={formState.bio}
                onChange={handleChange}
                />
            
        </div>
        <div className="footer absolute inset-x-0 bottom-0 ml-10 mb-2  ">
          <button className="rounded-md w-28 bg-green-500 text-white"
          type="submit"
          >Save changes</button>
        </div>
        </form>
        )}
    </div>
  );
}

export default EditProfile;