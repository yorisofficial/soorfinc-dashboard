"use client";

import React, { useEffect, useState } from "react";
import ButtonResetPassword from "../ButtonResetPassword";
import Link from "next/link";
import { Eye, EyeClosed, X } from "@phosphor-icons/react";
import { useRouter } from "next/navigation";

const FormResetPassword = () => {
  const router = useRouter();
  const [password, setPassword] = useState("12345678");
  const [password2, setPassword2] = useState("12345678");
  const [disable, setDisable] = useState(true);
  const [showPassword, setShowPassword] = useState(true);
  const [showPassword2, setShowPassword2] = useState(true);

  // code random
  const random = Array(32)
    .fill("")
    .map(() => String.fromCharCode(97 + Math.floor(Math.random() * 26)))
    .join("");

  useEffect(() => {
    if (password && password2 && password === password2) {
      setDisable(false);
    } else {
      setDisable(true);
    }
  }, [password, password2]);

  const handleSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (password && password2) {
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
          htmlFor="password"
          className="relative flex w-full flex-col items-start justify-start gap-2"
        >
          <span className="text-sm font-bold">New password</span>
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
        <label
          htmlFor="password2"
          className="relative flex w-full flex-col items-start justify-start gap-2"
        >
          <span className="text-sm font-bold">Confirm password</span>
          <div className="relative h-fit w-full">
            <input
              required
              type={showPassword2 ? "password" : "text"}
              name="password2"
              id="password2"
              aria-label="confirm password"
              autoComplete="off"
              value={password2}
              minLength={8}
              onChange={(e) => setPassword2(e.target.value)}
              className="peer h-10 w-full rounded-inner border border-background p-2 outline outline-lightblack/10"
            />
            <div className="absolute right-0 top-1/2 -translate-y-1/2">
              <button
                type="button"
                onClick={() => setShowPassword2(!showPassword2)}
                className="p-2"
              >
                {showPassword2 ? <EyeClosed size={24} /> : <Eye size={24} />}
              </button>
            </div>
          </div>
          {password !== password2 && (
            <p className="text-xs text-red">Please enter match password</p>
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
    </div>
  );
};

export default FormResetPassword;
