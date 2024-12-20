"use client";

import { PartnerProps } from "@/lib/DataPartner";
import React, { useState } from "react";
import LineSpaceY from "../partner/LineSpaceY";
import InputText from "./InputText";
import InputDate from "./InputDate";

const DetailsPartnerCard = ({
  data,
  params,
}: {
  data: PartnerProps[];
  params: string;
}) => {
  const getPartnerDetails = data.find((item) => item.slug === params);
  const [profile, setProfile] = useState({
    fullName: getPartnerDetails?.fullName,
    slug: getPartnerDetails?.slug,
    email: getPartnerDetails?.email,
    phone: getPartnerDetails?.phone,
    birthdate: getPartnerDetails?.birthdate,
    partnership: getPartnerDetails?.partnership,
    description: getPartnerDetails?.description,
  });
  return (
    <div className="w-full rounded-soorfinc border border-bordered bg-foreground p-4">
      <h1 className="text-2xl font-bold">Profile details</h1>
      <LineSpaceY />
      <div className="h-fit w-full">
        <form
          action=""
          method="get"
          className="flex w-full flex-col items-start justify-start gap-2 bg-foreground"
        >
          <InputText
            title="Full name"
            name="fullname"
            value={profile.fullName || ""}
            onChange={(e) =>
              setProfile({ ...profile, fullName: e.target.value })
            }
            placeholder="John Doe"
            className="w-full"
          />
          <InputText
            title="Nickname"
            name="nickname"
            value={profile.fullName?.split(" ")[0] || ""}
            onChange={(e) =>
              setProfile({ ...profile, fullName: e.target.value })
            }
            className="w-full"
          />
          <InputDate
            title="Birth date"
            name="birthdate"
            value={new Date()}
            onChange={(e) =>
              setProfile({ ...profile, fullName: e.target.value })
            }
            className="w-full text-primary"
          />
          <InputText
            title="Email address"
            name="email"
            value={profile.email || ""}
            onChange={(e) => setProfile({ ...profile, email: e.target.value })}
            className="w-full"
          />
          <label htmlFor="description" className="w-full">
            <span className="text-sm font-light">Description</span>
            <textarea
              name="description"
              id=""
              value={profile.description}
              onChange={(e) =>
                setProfile({ ...profile, description: e.target.value })
              }
              className="mt-1 h-48 w-full rounded-inner border border-bordered bg-background px-4 py-2 text-primary"
            />
          </label>
          <div className="w-full">
            <button
              type="submit"
              className="w-full rounded-inner bg-brand py-2 text-primary"
            >
              Save change
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default DetailsPartnerCard;
