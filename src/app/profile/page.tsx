import React from "react";

const Profile = () => {
  return (
    <div className="bg-cyan-900 text-white max-w-3xl mx-auto p-8 mt-5 rounded-lg shadow-md">
      <div className="flex items-center bg-cyan-900">
        <img
          className="w-24 h-24 rounded-full mr-6 border-4 border-blue-300"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRb3hRVx8Le1Hss4fCVZTngm0Nrwa1WXFCL2usvyCuH1XRM40kgCvOuihFXiMn4ODJOa9Q&usqp=CAU"
          alt="Profile"
        />
        <div className="bg-cyan-900">
          <h2 className="text-2xl bg-cyan-900 ">Roshan Shah</h2>
          <p className=" bg-cyan-900">Software Developer</p>
          <p className=" bg-cyan-900">Kathmandu, Nepal</p>
        </div>
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
    </div>
  );
};

export default Profile;
