"use client";
import React, { useState } from "react";
import axios from "axios";
import Link from "next/link";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

const Profile = () => {
  const router = useRouter();
  const [data, setData] = useState("User Details");
  const logout = async () => {
    try {
      await axios.get("/api/users/logout");
      toast.success("Logged out successfully");
      router.push("/login");
    } catch (error: any) {
      console.log(error.message);
      toast.error(error.message);
    }
  };

  const getUserDetails = async () => {
    const response = await axios.get("/api/users/me");
    console.log(response.data);
    setData(response.data.data._id);
  };

  return (
    <div className="bg-cyan-900 text-white max-w-3xl mx-auto p-8 mt-5 rounded-lg shadow-md">
      <div className="flex items-center bg-cyan-900">
        <img
          className="w-24 h-24 rounded-full mr-6 border-4 border-blue-300"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRb3hRVx8Le1Hss4fCVZTngm0Nrwa1WXFCL2usvyCuH1XRM40kgCvOuihFXiMn4ODJOa9Q&usqp=CAU"
          alt="Profile"
        />
        <div className="bg-cyan-900 ">
          <h2 className="text-2xl bg-cyan-900 ">Roshan Shah</h2>
          <p className=" bg-cyan-900">Software Developer</p>
          <p className=" bg-cyan-900">Kathmandu, Nepal</p>
        </div>
      </div>
      <div className="bg-cyan-700 mt-5 mr-5 p-4 rounded-md flex items-center justify-center text-white">
        <h2 className="bg-transparent">
          {data === "User Details" ? (
            "User Details"
          ) : (
            <Link className="bg-transparent" href={`/profile/${data}`}>
              {data}
            </Link>
          )}
        </h2>
      </div>
      <div className="mt-8 bg-cyan-900">
        <h2 className="text-xl font-bold mb-4 bg-cyan-900">
          Professional Summary
        </h2>
        <p className=" bg-cyan-900">
          Results-driven Software Developer with a proven track record in
          designing and implementing high-quality software solutions.
          Specialized in front-end development with a focus on creating
          responsive and user-friendly interfaces.
        </p>
      </div>
      <button
        onClick={logout}
        className="bg-cyan-600 mt-5 hover:bg-cyan-500 text-white py-2 px-9 rounded-full text-xl"
      >
        Logout
      </button>
      <button
        onClick={getUserDetails}
        className="bg-green-600 mt-5 ml-3 hover:bg-green-500 text-white py-2 px-9 rounded-full text-xl"
      >
        Get User Details
      </button>
    </div>
  );
};

export default Profile;
