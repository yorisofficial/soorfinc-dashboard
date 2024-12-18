"use client";
import WaveTexture from "@/app/components/partner/acc/WaveTexture";
import { Info } from "@phosphor-icons/react";
import Link from "next/link";
import React from "react";

const SuccessPage = () => {
  return (
    <div className="relative bg-brand">
      <div className="flex min-h-screen w-full items-center justify-center overflow-hidden">
        <div className="flex h-fit flex-col items-center justify-center gap-8 rounded-soorfinc bg-primary text-background drop-shadow-lg xl:w-[500px] xl:p-8">
          <div className="flex w-fit items-center justify-center rounded-full border-8 border-brand">
            <Info size={52} weight="fill" className="text-brand" />
          </div>
          <div className="body-content text-center">
            <h1 className="text-2xl font-bold text-brand">
              VERIFY LINK WAS SENDED
            </h1>
            <p className="text-xs font-light xl:text-base">
              To finish verify, please kindly to check the link send to your
              email, and click the link to verify your account. Check spam
              folder if you can&apos;t find the email
            </p>
            <div className="mt-4 flex items-center justify-center">
              <Link
                href={"/auth"}
                className="rounded-soorfinc bg-brand px-5 py-3 text-primary duration-300 hover:bg-brand/90"
              >
                Back to login page
              </Link>
            </div>
          </div>
        </div>
        <WaveTexture />
      </div>
    </div>
  );
};

export default SuccessPage;
