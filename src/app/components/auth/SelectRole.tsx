"use client";

import {
  ArrowCircleRight,
  CheckCircle,
  Circle,
  User,
  UsersThree,
} from "@phosphor-icons/react";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

export const dataRole = [
  {
    title: "customer",
    iconBase: (
      <User size={24} className="text-brand group-hover:text-primary" />
    ),
    iconActive: <User size={24} className="text-primary" />,
    roleId: "GhvHOS3AdR0U7CxI324GXWl!6lB&2hV@T5fCbNG)",
  },
  {
    title: "partner",
    iconBase: (
      <UsersThree size={24} className="text-brand group-hover:text-primary" />
    ),
    iconActive: <UsersThree size={24} className="text-primary" />,
    roleId: "v&KDohBQUTthOZ#NleV1tpOLQXQZKzeqkIS72gX5",
  },
];

const SelectRole = () => {
  const router = useRouter();
  const [disable, setDisable] = useState(true);

  const [role, setRole] = useState("");

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
    router.push(`/auth/login/${role}`);
  };

  return (
    <>
      <div className="select-role flex w-full flex-col gap-4">
        {dataRole.map((item) => (
          <div key={item.roleId} className="">
            <button
              onClick={() => setRole(item.roleId)}
              className={`group flex w-full items-center justify-between gap-4 rounded-soorfinc border border-brand bg-primary p-4 text-start text-base font-semibold text-brand outline-none duration-300 hover:bg-brand hover:text-primary ${item.roleId === role ? "bg-brand text-primary" : ""}`}
            >
              {role === item.roleId ? item.iconActive : item.iconBase}
              <span className="w-full text-start">Login as {item.title}</span>
              {item.roleId === role ? (
                <CheckCircle size={32} weight="fill" className="text-primary" />
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
