import SoorfincLogo from "@/app/components/acc/SoorfincLogo";
import WaveTexture from "@/app/components/acc/WaveTexture";
import FooterAuth from "@/app/components/FooterAuth";
import FormResetPassword from "@/app/components/auth/FormResetPassword";
import React from "react";

const ResetPasswordPage = () => {
  return (
    <div className="relative flex min-h-screen w-full items-center justify-center bg-brand text-primary">
      <WaveTexture />
      <div className="content-signin my-8 flex h-screen w-full items-center justify-center xl:my-0">
        <div className="relative z-10 flex w-[400px] flex-col items-center justify-center gap-4 rounded-soorfinc bg-[#ffffff] p-8 text-background xl:w-[500px]">
          <SoorfincLogo />
          <div className="w-full text-center">
            <h1 className="text-3xl font-black">RESET PASSWORD</h1>
          </div>
          <hr className="my-1 w-full opacity-20" />
          <FormResetPassword />
        </div>
      </div>
      <FooterAuth />
    </div>
  );
};

export default ResetPasswordPage;
