"use client";

import { Eye, EyeClosed, GoogleLogo, X } from "@phosphor-icons/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const FormLoginPartner = () => {
  const router = useRouter();
  const [email, setEmail] = useState("aaaaaaa@example.com");
  const [password, setPassword] = useState("1234aaaa");
  const [disable, setDisable] = useState(true);
  const [showPassword, setShowPassword] = useState(true);

  // code random
  const random = Array(32)
    .fill("")
    .map(() => String.fromCharCode(97 + Math.floor(Math.random() * 26)))
    .join("");

  useEffect(() => {
    if (email && password) {
      setDisable(false);
    } else {
      setDisable(true);
    }
  }, [email, password]);

  const handleSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (email && password) {
      router.push(`/auth/success/${random}`);
    }
  };

  return (
    <div className="w-full">
      <form
        onSubmit={handleSubmitForm}
        className="flex w-full flex-col items-center justify-center"
      >
        <label
          htmlFor="email"
          className="relative flex w-full flex-col items-start justify-start gap-2"
        >
          <small>Email address</small>
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
          <p className="invisible text-xs text-red peer-invalid:visible">
            Please enter valid email format
          </p>
          <div className="absolute right-0 top-1/2 -translate-y-1/2">
            <button type="button" onClick={() => setEmail("")} className="p-2">
              {email ? <X size={24} /> : ""}
            </button>
          </div>
        </label>
        <label
          htmlFor="password"
          className="relative flex w-full flex-col items-start justify-start gap-2"
        >
          <small>Password</small>
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
          <p className="invisible text-xs text-red peer-invalid:visible">
            Please enter valid password
          </p>
          <div className="absolute right-0 top-1/2 -translate-y-1/2">
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="p-2"
            >
              {showPassword ? <EyeClosed size={24} /> : <Eye size={24} />}
            </button>
          </div>
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
    </div>
  );
};

export default FormLoginPartner;
