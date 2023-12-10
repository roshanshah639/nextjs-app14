"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import axios from "axios";
import toast from "react-hot-toast";

const Login = () => {
  const router = useRouter();
  const [user, setUser] = React.useState({
    email: "",
    password: "",
  });
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [loading, setLoading] = useState(false);

  const onLogin = async () => {
    try {
      setLoading(true);

      const response = await axios.post("/api/users/login", user);
      console.log("Login Success", response.data);
      toast.success("Login Success");
      router.push("/profile");
    } catch (error: any) {
      console.log("Login failed", error.message);
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (user.email.length > 0 && user.password.length > 0) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [user]);

  useEffect(() => {}, []);

  return (
    <div className="flex h-screen w-screen items-center justify-center">
      {/* Signup from */}
      <div className="flex flex-col gap-5">
        <fieldset className="flex flex-col border-[1px] border-white p-12 rounded-md">
          <h2 className="text-2xl font-thin text-center mb-3">
            {loading ? "Processing..." : "Login"}{" "}
          </h2>
          <legend className="text-2xl text-white text-center p-1">
            Login Form
          </legend>

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
            onClick={onLogin}
            className="text-md border-[1px] border-white bg-white text-cyan-800 rounded-full p-2 m-2 mx-5 focus:outline-none"
          >
            {buttonDisabled ? "No Login" : "Login"}
          </button>

          <p className="text-white text-md mt-3">
            New to Website ? <Link href="/signup">Signup</Link>
          </p>
        </fieldset>
      </div>
    </div>
  );
};

export default Login;
