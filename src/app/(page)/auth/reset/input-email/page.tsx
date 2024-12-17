import SoorfincLogo from "@/app/components/acc/SoorfincLogo";
import WaveTexture from "@/app/components/acc/WaveTexture";
import FormInputEmail from "@/app/components/auth/FormInputEmail";
import FooterAuth from "@/app/components/FooterAuth";
import LineSpaceY from "@/app/components/LineSpaceY";
import React from "react";

const InputEmailPage = () => {
  return (
    <div className="relative flex min-h-screen w-full items-center justify-center px-4">
      <div className="w-full max-w-[350px] rounded-soorfinc bg-primary p-4 text-lightblack drop-shadow-xl">
        <SoorfincLogo />
        <p className="mt-4 text-center text-sm font-light">
          Please enter your email, we will send a link to reset your password
        </p>
        <LineSpaceY />
        <FormInputEmail />
      </div>
      <WaveTexture />
      <FooterAuth />
    </div>
  );
};

export default InputEmailPage;
