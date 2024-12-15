import FormLoginPartner from "@/app/components/auth/FormLoginPartner";
import FooterAuth from "@/app/components/FooterAuth";
import Image from "next/image";
import React, { useState } from "react";

const AuthLogin = ({ params }: { params: { id: string } }) => {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-brand px-4 text-primary xl:px-0">
      <div className="top-nav fixed z-50 w-full py-4 xl:p-4">
        <Image
          src="/Brand/soorfinc-logo-white.svg"
          alt="soorfinc-logo"
          width={100}
          height={100}
          priority
          className="h-8 w-fit object-contain"
        />
      </div>
      <div className="acc-soorfinc-page absolute -bottom-10 -left-10 z-0">
        <Image
          src={"/acc/loop.svg"}
          alt="soorfinc page asset"
          width={1200}
          height={800}
          priority
          className="h-fit w-full object-contain"
        />
      </div>
      <div className="content-signin my-8 flex h-screen w-full items-center justify-center xl:my-0">
        <div className="relative z-10 flex w-[400px] flex-col items-center justify-center gap-4 rounded-soorfinc bg-[#ffffff] p-8 text-background xl:w-[500px]">
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
            <h1 className="text-3xl font-black">Hello partner</h1>
            <p className="text-sm font-light">
              Welcome back, Please enter your details
            </p>
          </div>
          <hr className="my-1 w-full" />
          <FormLoginPartner />
        </div>
      </div>
      <FooterAuth />
    </div>
  );
};

export default AuthLogin;
