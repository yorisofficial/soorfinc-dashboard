"use client";

import { random } from "@/lib/Random";
import Link from "next/link";
import React from "react";

const ButtonResetPassword = () => {
  const str_random = random(100);

  return (
    <>
      <Link
        href={`/auth/reset/${str_random}`}
        aria-label="forget password"
        className="text-center text-sm duration-300 hover:text-brand"
      >
        Forget password
      </Link>
    </>
  );
};

export default ButtonResetPassword;
