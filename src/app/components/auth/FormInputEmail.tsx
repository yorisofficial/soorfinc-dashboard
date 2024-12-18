"use client";

import { random } from "@/lib/Random";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import SoorfincLogo from "../partner/acc/SoorfincLogo";
import Link from "next/link";

const FormInputEmail = () => {
  const [email, setEmail] = useState("example@example.com");
  const [disable, setDisable] = useState(true);
  const router = useRouter();
  const [modal, setModal] = useState(false);

  useEffect(() => {
    if (email) {
      setDisable(false);
    } else {
      setDisable(true);
    }
  }, [email]);

  const handleSubmit = () => {
    if (email) {
      setDisable(false);
      setModal(true);
    }
    // router.push(`/auth/reset/${random(32)}`);
  };

  return (
    <>
      {modal && (
        <div className="absolute left-1/2 top-1/2 z-50 flex h-screen w-screen -translate-x-1/2 -translate-y-1/2 items-center justify-center bg-background/80 px-4 backdrop-blur-sm">
          <div className="flex h-fit w-fit flex-col items-center justify-center gap-4 rounded-soorfinc bg-primary p-6 text-center text-lightblack drop-shadow-lg xl:w-[500px]">
            <SoorfincLogo />
            <p className="text-sm font-light">
              We&apos;ve sent you an email with a link to reset your password.
              Please check your inbox and spam folder to find the email. If you
              haven&apos;t received it, please try again.
            </p>

            {/* dummy button */}
            <div className="flex w-full items-center justify-center">
              <Link
                href={`/auth/reset/${random(32)}`}
                className="text-xs font-light underline-offset-4 hover:underline"
              >
                Continue
              </Link>
            </div>
          </div>
        </div>
      )}
      <form
        action={handleSubmit}
        className="relative flex w-full flex-col gap-4"
      >
        <label
          htmlFor="input-email"
          className="input-email flex flex-col gap-2"
        >
          <span className="text-sm font-bold">
            Input email <span className="text-red">*</span>
          </span>
          <input
            type="email"
            name="input-email"
            id="input-email"
            value={email}
            required
            autoComplete="off"
            aria-label="input email"
            title="input your email address to continue reset password"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Ex: example@example.com"
            className="w-full rounded-inner border border-background bg-bordered p-2 text-sm outline-none"
          />
          {disable && <p className="text-xs text-red">Email required</p>}
        </label>
        <div className="w-full">
          <button
            type="submit"
            disabled={disable}
            className="w-full rounded-inner bg-brand px-4 py-3 text-primary duration-300 hover:bg-brand/90 disabled:opacity-20"
          >
            Send verify link
          </button>
        </div>
      </form>
    </>
  );
};

export default FormInputEmail;
