"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import axios from "axios";
import toast from "react-hot-toast";

const Signup = () => {
  const router = useRouter();
  const [user, setUser] = React.useState({
    username: "",
    email: "",
    password: "",
  });

  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [loading, setLoading] = useState(false);

  const onSignup = async () => {
    try {
      setLoading(true);
      const response = await axios.post("/api/users/signup", user);
      console.log("Signup Success", response.data);

      router.push("/login");
    } catch (error: any) {
      toast.error(error.message);
      console.log("Singup failed", error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (
      user.email.length > 0 &&
      user.password.length > 0 &&
      user.username.length > 0
    ) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [user]);

  return (
    <div className="flex h-screen w-screen items-center justify-center">
      {/* Signup from */}
      <div className="flex flex-col gap-5">
        <fieldset className="flex flex-col border-[1px] border-white p-12 rounded-md">
          <h2 className="text-2xl font-thin text-center mb-3">
            {loading ? "Processing..." : "Signup "}{" "}
          </h2>
          <legend className="text-2xl text-white text-center">
            Signup Form
          </legend>
          {/* Username */}
          <label className="mb-2" htmlFor="username">
            Username
          </label>
          <input
            className="border-[1px] border-white text-white rounded-md p-2 focus:outline-none mb-3"
            id="username"
            type="text"
            value={user.username}
            onChange={(e) => setUser({ ...user, username: e.target.value })}
            placeholder="Username"
          />
          {/* Email */}
          <label className="mb-2" htmlFor="email">
            Email
          </label>
          <input
            className="border-[1px] border-white text-white rounded-md p-2 focus:outline-none mb-3"
            id="email"
            type="email"
            value={user.email}
            onChange={(e) => setUser({ ...user, email: e.target.value })}
            placeholder="Email"
          />
          {/* Password */}
          <label className="mb-2" htmlFor="password">
            Password
          </label>
          <input
            className="border-[1px] border-white text-white rounded-md p-2 focus:outline-none mb-3"
            id="password"
            type="password"
            value={user.password}
            onChange={(e) => setUser({ ...user, password: e.target.value })}
            placeholder="Password"
          />
          <button
            onClick={onSignup}
            className="text-md border-[1px] border-white bg-white text-cyan-800 rounded-full p-2 mb-4 mx-5 focus:outline-none"
          >
            {buttonDisabled ? "No Signup" : "Signup"}
          </button>

          <p className="text-white text-md">
            Already have an account? <Link href="/login">Login</Link>
          </p>
        </fieldset>
      </div>
    </div>
  );
};

export default Signup;
