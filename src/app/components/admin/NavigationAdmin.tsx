"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import LineSpaceY from "../partner/LineSpaceY";
import {
  Bell,
  List,
  MapPinArea,
  Power,
  SealPercent,
  User,
  Users,
  Wrench,
  X,
} from "@phosphor-icons/react";

export const manajementMenus = [
  {
    title: "Notification",
    status: true,
    iconBase: <Bell size={20} />,
    url: "/",
  },
  {
    title: "Partnership list",
    status: true,
    iconBase: <Users size={20} />,
    url: "/",
  },
  {
    title: "Partnership request",
    status: false,
    iconBase: <Users size={20} />,
    url: "/",
  },
];

export const manajementContent = [
  {
    title: "List location",
    status: true,
    IconBase: <MapPinArea size={20} />,
    url: "/",
  },
  {
    title: "List services",
    status: true,
    IconBase: <Wrench size={20} />,
    url: "/",
  },
  {
    title: "Discount",
    status: false,
    IconBase: <SealPercent size={20} />,
    url: "/",
  },
  {
    title: "Locals highlight",
    status: false,
    IconBase: <Users size={20} />,
    url: "/",
  },
];

const NavigationAdmin = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [scroll, setScroll] = useState(false);
  const [showMenus, setshowMenus] = useState(false);
  const router = useRouter();
  const pathName = usePathname();

  // function toggle menu
  const toggleMenu = () => {
    setshowMenus(!showMenus);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScroll(true);
        if (showMenus) {
          setshowMenus(false);
        }
      } else {
        setScroll(false);
        setshowMenus(false);
      }
    };

    // outside click
    document.addEventListener("click", (e) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setshowMenus(false);
      }
    });

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scroll, showMenus]);

  console.log(showMenus);

  return (
    <>
      <div
        ref={ref}
        className={`${scroll && "bg-foreground"} ${pathName.includes("partner") && "hidden"} ${pathName.includes("auth") && "hidden"} navigation-bar-container fixed left-0 top-0 z-40 w-full border-b border-bordered px-4 py-5 drop-shadow-xl transition-all`}
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
          <div className="toggle-menus relative z-10 w-fit">
            <div className="toggle-button">
              <button
                type="button"
                onClick={() => toggleMenu()}
                title="toggle menu navigastion"
                aria-label="toggle menu navigastion"
                className={`btn-toggle border border-background ${showMenus && "bg-red"} relative flex h-fit w-fit items-center justify-center gap-4 rounded-full bg-foreground px-3 py-2`}
              >
                <div
                  className={`flex h-8 w-8 items-center justify-center rounded-full ${showMenus ? "border border-foreground bg-foreground" : "bg-red"}`}
                >
                  <Users size={16} weight="fill" />
                </div>
                {"Admin"}
                {showMenus ? (
                  <X size={16} className="" />
                ) : (
                  <List size={16} className="" />
                )}{" "}
              </button>
            </div>
            {showMenus && (
              <div className="absolute-menu absolute right-0 top-full z-40 w-[230px] translate-y-8 rounded-soorfinc border border-background bg-foreground p-4">
                <div className="profile-tag relative flex flex-col gap-4 overflow-hidden rounded-soorfinc bg-[#0F172A] p-2">
                  <div className="acc absolute -right-8 -top-6 h-[100px] w-[100px] rounded-full bg-red/20"></div>
                  <div className="acc absolute -right-4 -top-4 h-[50px] w-[50px] animate-pulse rounded-full bg-[#C9C9C9]/20"></div>
                  <div className="badges-tag h-fit w-fit rounded-full bg-red px-2 py-1 text-[10px] font-light text-primary">
                    ADMIN ROLE
                  </div>
                  <div className="relative z-10 flex items-center justify-start gap-2">
                    <User size={20} />
                    <h1 className="text-sm">Wellcome, Yoris</h1>
                  </div>
                </div>
                <LineSpaceY className="my-4 text-primary/20" />
                <div className="manajement-partnership">
                  <div className="header-content">
                    <h1 className="text-xs font-light uppercase">
                      management partner
                    </h1>
                  </div>
                  <ul className="flex flex-col items-start">
                    {manajementMenus.map((item, index) => (
                      <li key={index} className="group">
                        <button
                          type="button"
                          disabled={!item.status}
                          onClick={() => router.push(item.url)}
                          className="flex items-center justify-start gap-2 py-3 text-sm first-letter:uppercase disabled:opacity-20 group-hover:text-brand disabled:group-hover:text-primary"
                        >
                          {item.iconBase}
                          {item.title}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
                <LineSpaceY className="my-4 text-primary/20" />
                <div className="flex flex-col items-start justify-center">
                  <div className="header-content">
                    <h1 className="text-xs font-light uppercase">
                      management partner
                    </h1>
                  </div>
                  <ul className="flex w-full flex-col items-start justify-start gap-2">
                    {manajementContent.map((item, index) => (
                      <li key={index} className="">
                        <button
                          type="button"
                          disabled={!item.status}
                          aria-label="item menus"
                          onClick={() => router.push(item.url)}
                          className={`flex w-full items-start justify-center gap-2 py-2 text-primary hover:text-brand disabled:opacity-20 disabled:hover:text-primary`}
                        >
                          {item.IconBase}
                          {item.title}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
                <LineSpaceY className="my-4 text-primary/20" />
                <div className="w-full">
                  <button
                    type="button"
                    aria-label="logout"
                    className="flex w-full items-center justify-center gap-4 rounded-inner bg-red px-4 py-2 text-center text-primary duration-300 hover:bg-red/80"
                  >
                    <Power size={20} /> Log out
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default NavigationAdmin;
