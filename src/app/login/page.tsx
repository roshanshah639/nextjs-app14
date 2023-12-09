"use client";
import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import axios from "axios";

const Login = () => {
  const router = useRouter();
  const [user, setUser] = React.useState({
    email: "",
    password: "",
  });

  const onLogin = async () => {};

  return (
    <div className="flex h-screen w-screen items-center justify-center">
      {/* Signup from */}
      <form action="" className="flex flex-col gap-5">
        <fieldset className="flex flex-col border-[1px] border-white p-12 rounded-md">
          <h2 className="text-2xl font-thin text-center mb-3">Login </h2>
          <legend className="text-2xl text-white text-center p-1">
            Login Form
          </legend>

          {/* Email */}
          <label className="mb-2" htmlFor="email">
            Email
          </label>
          <input
            className="border-[1px] border-white text-white rounded-md p-2 focus:outline-none mb-3"
            type="email"
            name="email"
            id="email"
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
            type="password"
            name="password"
            id="password"
            value={user.password}
            onChange={(e) => setUser({ ...user, password: e.target.value })}
            placeholder="Password"
          />
          <button
            onClick={onLogin}
            className="text-md border-[1px] border-white bg-white text-cyan-800 rounded-full p-2 m-2 mx-5 focus:outline-none"
          >
            Login
          </button>

          <p className="text-white text-md mt-3">
            New to Website ? <Link href="/signup">Signup</Link>
          </p>
        </fieldset>
      </form>
    </div>
  );
};

export default Login;
