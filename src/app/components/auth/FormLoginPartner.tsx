"use client";

import { Eye, EyeClosed, GoogleLogo, X } from "@phosphor-icons/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import ButtonResetPassword from "../ButtonResetPassword";

const FormLoginPartner = () => {
  const router = useRouter();
  const [email, setEmail] = useState("aaaaaaa@example.com");
  const [password, setPassword] = useState("12345678");
  const [disable, setDisable] = useState(true);
  const [showPassword, setShowPassword] = useState(true);

  // code random
  const random = Array(32)
    .fill("")
    .map(() => String.fromCharCode(97 + Math.floor(Math.random() * 26)))
    .join("");

  useEffect(() => {
    if (email) {
      setDisable(false);
    } else {
      setDisable(true);
    }
  }, [email]);

  const handleSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (email) {
      // router.push(`/auth/success/${random}`);
      router.push(`/dashboard/yorisofficial`);
    }
  };

  return (
    <div className="w-full">
      <form
        onSubmit={handleSubmitForm}
        className="flex w-full flex-col items-center justify-center gap-4"
      >
        <label
          htmlFor="email"
          className="relative flex w-full flex-col items-start justify-start gap-2"
        >
          <small className="text-sm font-bold">
            Email address <span className="font-light text-red">*</span>
          </small>
          <div className="relative h-fit w-full">
            <input
              required
              type="email"
              name="email"
              id="email"
              aria-label="input email"
              autoComplete="off"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Ex: examaple@example.com"
              className="peer h-10 w-full rounded-inner border border-background p-2 outline outline-lightblack/10"
            />

            <div className="absolute right-0 top-1/2 -translate-y-1/2">
              <button
                type="button"
                onClick={() => setEmail("")}
                className="p-2"
              >
                {email ? <X size={24} /> : ""}
              </button>
            </div>
          </div>
          {email === "" && (
            <p className="text-xs text-red">Please enter your email address</p>
          )}
        </label>
        <label
          htmlFor="password"
          className="relative flex w-full flex-col items-start justify-start gap-2"
        >
          <span className="text-sm font-bold">
            New password <span className="font-light text-red">*</span>
          </span>
          <div className="relative h-fit w-full">
            <input
              required
              type={showPassword ? "password" : "text"}
              name="password"
              id="password"
              aria-label="input password"
              autoComplete="off"
              value={password}
              minLength={8}
              onChange={(e) => setPassword(e.target.value)}
              className="peer h-10 w-full rounded-inner border border-background p-2 outline outline-lightblack/10"
            />

            <div className="absolute right-0 top-1/2 -translate-y-1/2">
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="p-2"
              >
                {showPassword ? <EyeClosed size={24} /> : <Eye size={24} />}
              </button>
            </div>
          </div>
          {password.length < 8 && (
            <p className="text-xs text-red">
              Password must be at least 8 characters
            </p>
          )}
        </label>
        <div className="mt-4 w-full">
          <button
            type="submit"
            aria-label="login"
            disabled={disable}
            className="w-full rounded-soorfinc bg-brand py-3 text-primary transition-all duration-300 hover:bg-brand/90 disabled:opacity-20"
          >
            Login
          </button>
        </div>
      </form>
      <div className="my-4 flex items-center gap-2">
        <hr className="w-full" />
        <span>or</span>
        <hr className="w-full" />
      </div>
      <div className="login-google-platform">
        <Link
          href={"/"}
          aria-label="login with google account"
          className="flex w-full items-center justify-center gap-2 rounded-soorfinc bg-brand py-3 text-primary duration-300 hover:bg-brand/90"
        >
          <GoogleLogo size={24} weight="bold" />
          Login with Google
        </Link>
      </div>
      <div className="mt-4 flex flex-col gap-2 text-center">
        <ButtonResetPassword />
        <span className="text-sm">
          Already have account?{" "}
          <Link
            href={`/auth/reset/input-email`}
            aria-label="forget password"
            className="text-center font-semibold text-brand underline underline-offset-4"
          >
            Click here
          </Link>
        </span>
      </div>
    </div>
  );
};

export default FormLoginPartner;
