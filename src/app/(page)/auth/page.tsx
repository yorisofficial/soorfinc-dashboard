"use client";

import SelectRole from "@/app/components/auth/SelectRole";
import Image from "next/image";
import React from "react";

const AuthPage = () => {
  return (
    <div className="relative flex min-h-screen w-full items-center justify-center bg-brand">
      <div className="flex flex-col items-center justify-center gap-4 rounded-soorfinc bg-primary p-8 text-background">
        <div className="logo-brand">
          <Image
            src={"/Brand/soorfinc-logo.svg"}
            alt="soorfinc-logo"
            width={100}
            height={100}
            quality={75}
            priority
            className="h-8 w-full"
          />
        </div>
        <div className="w-full text-center">
          <h1 className="text-3xl font-black">Wellcome back</h1>
          <p className="text-base font-light">
            Welcome back, Please enter your details
          </p>
        </div>
        <SelectRole />
      </div>
    </div>
  );
};

export default AuthPage;
