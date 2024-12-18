"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import {
  Bell,
  Calendar,
  Headset,
  Layout,
  List,
  Power,
  SealCheck,
} from "@phosphor-icons/react";
import { usePathname } from "next/navigation";

export const menus = [
  {
    title: "Dashboard",
    url: "/dashboard/yorisofficial",
    IconBase: <Layout size={24} />,
  },
  {
    title: "Notifications",
    url: "/dashboard/yorisofficial/notifications",
    IconBase: <Bell size={24} />,
  },
  {
    title: "Schedules",
    url: "/dashboard/yorisofficial/schedules",
    IconBase: <Calendar size={24} />,
  },
  {
    title: "Support",
    url: "https://soorfinc.vercel.app/en/support",
    IconBase: <Headset size={24} />,
  },
  {
    title: "Log out",
    url: "/",
    IconBase: <Power size={24} />,
  },
];

const NavigationBar = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [scroll, setScroll] = useState(false);
  const [show, setShow] = useState(false);
  const pathName = usePathname();

  // function toggle menu
  const toggleMenu = () => {
    setShow(!show);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScroll(true);
        if (show) {
          setShow(false);
        }
      } else {
        setScroll(false);
        setShow(false);
      }
    };

    // outside click
    document.addEventListener("click", (e) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setShow(false);
      }
    });

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scroll, show]);

  return (
    <>
      <div
        ref={ref}
        className={`${scroll && "bg-foreground"} ${pathName.includes("auth") && "hidden"} navigation-bar-container fixed left-0 top-0 z-40 w-full border-b border-bordered px-4 py-5 drop-shadow-xl transition-all`}
      >
        <div className="navigation-bar mx-auto flex h-fit w-full max-w-5xl items-center justify-between gap-4">
          <div className="brand-logo">
            <Link href={"/"} aria-label="soorfinc home page">
              <Image
                src={"/Brand/soorfinc-logo.svg"}
                alt="soorfinc-logo"
                width={120}
                height={120}
                className="object-fit h-7 w-[133px]"
              />
            </Link>
          </div>
          <div className="flex items-center justify-center gap-2 xl:relative xl:gap-4">
            <div className="relative">
              <Link
                href={"/dashboard/yorisofficial/notifications"}
                className="flex p-4"
              >
                <Bell size={24} weight="fill" />
              </Link>
              <div className="absolute right-3 top-3 h-3 w-3 animate-pulse rounded-full bg-red after:contents"></div>
            </div>
            <div className="w-fit">
              <button
                onClick={() => toggleMenu()}
                className={`card-profile flex w-fit items-center gap-4 rounded-soorfinc border border-bordered ${show ? "bg-background" : "bg-foreground"} p-2`}
              >
                <Image
                  src={"/Dummy/profile-picture.png"}
                  alt="profile-picture"
                  width={500}
                  height={500}
                  className="h-10 w-10 rounded-full object-cover"
                />
                <div className="hidden w-fit items-center gap-2 xl:flex">
                  <div className="profile-name w-20">
                    <p className="w-20 truncate text-start text-base font-bold xl:w-32">
                      Ade Yoga
                    </p>
                  </div>
                  <div className="status-verify">
                    <SealCheck size={24} weight="fill" className="text-brand" />
                  </div>
                </div>
                <div className="h-fit w-fit xl:hidden">
                  <List size={24} />
                </div>
              </button>
            </div>
            {show && (
              <div className="absolute left-0 top-full w-full translate-y-4 px-4 xl:left-auto xl:right-0 xl:w-[400px] xl:px-0">
                <div className="card-profile flex w-full flex-col items-center gap-4 rounded-soorfinc border border-bordered/10 bg-foreground p-4 drop-shadow-xl">
                  <div className="w-full border-b border-bordered pb-4">
                    <h1 className="text-start text-2xl font-semibold">Menus</h1>
                  </div>
                  <ul className="flex w-full flex-col items-center gap-2">
                    {menus.map((item, index) => (
                      <li key={index} className="flex w-full">
                        <Link
                          onClick={() => setShow(false)}
                          href={`${item.url}`}
                          className="flex w-full gap-4 rounded-inner border border-bordered p-4 duration-300 hover:bg-background"
                        >
                          {item.IconBase}
                          {item.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default NavigationBar;
