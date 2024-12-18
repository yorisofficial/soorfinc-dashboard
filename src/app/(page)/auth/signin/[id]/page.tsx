import FormLoginPartner from "@/app/components/auth/FormLoginPartner";
import FooterAuth from "@/app/components/FooterAuth";
import Image from "next/image";
import React from "react";
import WaveTexture from "../../../../components/acc/WaveTexture";

const AuthLogin = ({ params }: { params: { id: string } }) => {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-brand px-4 text-primary xl:px-0">
      <WaveTexture zindex={"z-10"} />
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
            <h1 className="text-3xl font-black">Hello {params.id}</h1>
            <p className="text-sm font-light">
              Welcome back, Please enter your details
            </p>
          </div>
          <hr className="my-1 w-full" />
          <FormLoginPartner getParams={params.id} />
        </div>
      </div>
      <FooterAuth />
    </div>
  );
};

export default AuthLogin;
