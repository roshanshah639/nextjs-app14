import React from "react";

const UserProfile = ({ params }: { params: { id: string } }) => {
  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <h1 className="text-xl font-bold">
        {" "}
        Profile of{" "}
        <span className="bg-orange-500 px-5 py-2 rounded-md">{params.id}</span>
      </h1>
    </div>
  );
};

export default UserProfile;
