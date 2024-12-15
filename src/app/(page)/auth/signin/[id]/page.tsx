import FormLoginPartner from "@/app/components/auth/FormLoginPartner";
import { Eye } from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const AuthLogin = ({ params }: { params: { id: string } }) => {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-brand text-primary">
      <div className="top-nav fixed z-50 w-full p-4">
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
      <div className="content-signin bored flex h-screen w-full items-center justify-center">
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
      <div className="absolute bottom-4 left-1/2 z-0 flex -translate-x-1/2 items-center gap-4">
        <ul className="flex w-full items-center gap-4">
          <li className="w-full text-nowrap border-r pr-4">
            <Link
              target="_blank"
              href="https://soorfinc.vercel.app/en/about"
              className="text-xs font-light underline-offset-4 hover:underline"
            >
              About us
            </Link>
          </li>
          <li className="w-full text-nowrap border-r pr-4">
            <Link
              target="_blank"
              href="https://soorfinc.vercel.app/en/support"
              className="text-xs font-light underline-offset-4 hover:underline"
            >
              Customer support
            </Link>
          </li>
          <li className="w-full text-nowrap">
            <Link
              target="_blank"
              href="https://soorfinc.vercel.app/en/regulation"
              className="text-xs font-light underline-offset-4 hover:underline"
            >
              Term and regulations
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AuthLogin;
