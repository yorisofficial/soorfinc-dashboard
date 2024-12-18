"use client";

import { AdminUser } from "@/lib/admin/data";
import {
  ArrowCircleRight,
  CheckCircle,
  Circle,
  IdentificationBadge,
  User,
  UsersThree,
} from "@phosphor-icons/react";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

export const dataRole = [
  {
    title: "customer",
    iconBase: (
      <User size={32} className="text-brand group-hover:text-primary" />
    ),
    iconActive: <User size={32} weight="fill" className="" />,
    roleId: "customer",
  },
  {
    title: "partner",
    iconBase: (
      <UsersThree size={32} className="text-brand group-hover:text-primary" />
    ),
    iconActive: <UsersThree weight="fill" size={32} className="" />,
    roleId: "partner",
  },
  {
    title: AdminUser,
    iconBase: (
      <IdentificationBadge
        size={32}
        className="text-brand group-hover:text-primary"
      />
    ),
    iconActive: <IdentificationBadge weight="fill" size={32} className="" />,
    roleId: AdminUser,
  },
];

const SelectRole = () => {
  const router = useRouter();
  const [disable, setDisable] = useState(true);

  const [role, setRole] = useState<string | null>(AdminUser);

  useEffect(() => {
    if (role) {
      setDisable(false);
    } else {
      setDisable(true);
    }
  }, [role]);

  const handleClick = () => {
    if (role) {
      setDisable(false);
    }
    if (role === "customer") {
      router.push(`https://soorfinc.vercel.app/en/user-auth/signin`);
    } else if (role === "partner" || role === AdminUser) {
      router.push(`/auth/signin/${role}`);
    } else {
      setDisable(true);
    }
  };

  console.log(role);

  return (
    <>
      <div className="select-role flex w-full flex-col gap-4">
        {dataRole.map((item) => (
          <div key={item.roleId} className="">
            <button
              onClick={() => setRole(item.roleId)}
              className={`flex w-full items-center gap-4 rounded-soorfinc border border-brand p-4 ${role === item.roleId ? "bg-brand text-primary" : ""}`}
            >
              {role === item.roleId ? item.iconActive : item.iconBase}
              <span className="w-full text-start">Login as {item.title}</span>
              {role === item.roleId ? (
                <CheckCircle size={32} weight="fill" className="" />
              ) : (
                <Circle
                  size={32}
                  className="text-brand group-hover:text-primary"
                />
              )}
            </button>
          </div>
        ))}
        <hr />
        <div className="relative w-full">
          <button
            disabled={disable}
            onClick={handleClick}
            className="group flex w-full items-center justify-center gap-4 rounded-soorfinc bg-brand py-3 text-primary disabled:opacity-20"
          >
            Continue{" "}
            <ArrowCircleRight
              weight="fill"
              size={24}
              className="absolute right-6 top-1/2 -translate-y-1/2 text-primary opacity-0 transition-all duration-300 group-hover:translate-x-2 group-hover:opacity-100 group-disabled:hidden"
            />
          </button>
        </div>
      </div>
    </>
  );
};

export default SelectRole;
