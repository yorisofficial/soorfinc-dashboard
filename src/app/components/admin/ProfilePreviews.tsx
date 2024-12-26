"use client";

import { PartnerProps } from "@/lib/DataPartner";
import {
  EnvelopeSimple,
  Phone,
  PhosphorLogo,
  WhatsappLogo,
} from "@phosphor-icons/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProfilePreviews = ({
  data,
  params,
}: {
  data: PartnerProps[];
  params: string;
}) => {
  const getPartnerDetails = data.find((item) => item.slug === params);

  return (
    <>
      <div className="profile-partner">
        <div className="image-partner flex w-full items-start justify-start gap-4 rounded-soorfinc border border-bordered bg-foreground p-4">
          <Image
            src={"/Dummy/profile-picture.png"}
            alt={"profile picture"}
            width={100}
            height={100}
            priority
            className="h-12 w-12 rounded-full object-cover"
          />
          <div className="flex flex-col items-start justify-start gap-2">
            <h1 className="text-base font-bold">
              {getPartnerDetails?.fullName}
            </h1>
            <span className="flex text-xs font-light">
              {getPartnerDetails?.partnership.map((item) => item).join(" | ")}
            </span>
          </div>
        </div>
        <div className="contact-person mt-4 rounded-soorfinc border border-bordered bg-foreground p-4">
          <h1 className="text-base font-bold">Personal contact</h1>
          <div className="mt-4 grid grid-cols-3 gap-4">
            <Link href={"/"} className="contact-box">
              <Phone size={24} className="h-8 w-8" />
              Phone number
            </Link>
            <Link href={"/"} className="contact-box">
              <EnvelopeSimple size={24} className="h-8 w-8" />
              Email address
            </Link>
            <Link href={"/"} className="contact-box">
              <WhatsappLogo size={24} className="h-8 w-8" />
              WhatsApp
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfilePreviews;
