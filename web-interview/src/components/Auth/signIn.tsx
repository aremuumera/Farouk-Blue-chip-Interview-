'use client'

import Image from "next/image";
import Link from "next/link";
import React, { useState, FormEvent } from "react";

const SignIn: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [errors, setErrors] = useState<{ email: string; password: string }>({
    email: "",
    password: "",
  });



  const validateForm = (): boolean => {
    let valid = true;
    const newErrors = { email: "", password: "" };

    if (!email) {
      valid = false;
      newErrors.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      valid = false;
      newErrors.email = "Enter a valid email address.";
    }

    if (!password) {
      valid = false;
      newErrors.password = "Password is required.";
    } else if (password.length < 6) {
      valid = false;
      newErrors.password = "Password must be at least 6 characters.";
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validateForm()) {
      // console.log("Form submitted successfully!");
    }
  };

  return (
    <div className="min-h-[95vh] flex flex-col">
      <div className="flex text-center flex-grow flex-col justify-center items-center">
        <div className="w-full">
          <div>
            <h1 className="text-black text-[26px] font-[700]">
              Sign In to Craft
            </h1>
            <h3 className="text-[18px] font-[500]">
              <span className="text-[#a8a8a8]">New Here?</span>{" "}
              <span className="text-primary">Create an Account</span>{" "}
            </h3>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="pt-[20px] flex-col flex gap-[15px] justify-start">
              <label className="text-left font-[700]" htmlFor="email">
                Email
              </label>
              <input
                className="w-full max-w-[380px] p-[8px] rounded-[6px] bg-[#F5F8FA] h-[54px]"
                type="email"
                id="email"
                value={email}
                onChange={(e) => {setEmail(e.target.value); validateForm()}}
              />
              {errors.email && (
                <span className="text-left text-red-500 text-sm">{errors.email}</span>
              )}
            </div>
            <div className="pt-[20px] flex-col flex gap-[15px] justify-start">
              <label className="text-left font-[700]" htmlFor="password">
                Password
              </label>
              <input
                className="w-full max-w-[380px] p-[8px] rounded-[6px] bg-[#F5F8FA] h-[54px]"
                type="password"
                id="password"
                value={password}
                onChange={(e) => {setPassword(e.target.value); validateForm()}}
              />
              {errors.password && (
                <span className="text-left text-red-500 text-sm">{errors.password}</span>
              )}
            </div>
            <div className="flex justify-center items-center gap-[20px] pt-[20px]">
              <button
                type="submit"
                className="text-white bg-primary p-[10px] rounded-[6px] w-[28%]"
              >
                Sign In
              </button>
              <button className="flex py-[12px] px-[15px] justify-center items-center gap-[10px] text-[16px] font-[700] text-primary bg-secondary rounded-[6px]">
                <Image
                  src={"/google.png"}
                  alt="google.png"
                  width={20}
                  height={20}
                />
                Sign in with Google
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="">
        <ul className="flex gap-[30px] text-[16px] font-[600] justify-center text-[#B5B5C3]">
          <Link href={"/"}>Terms</Link>
          <Link href={"/"}>Plans</Link>
          <Link href={"/"}>Contact Us</Link>
        </ul>
      </div>
    </div>
  );
};

export default SignIn;
