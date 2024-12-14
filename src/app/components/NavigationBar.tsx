"use client";

import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { SealCheck } from "@phosphor-icons/react";
import Link from "next/link";

const NavigationBar = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [scroll, setScroll] = useState(false);
  const [show, setShow] = useState(false);

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
        className={`${scroll && "bg-foreground"} navigation-bar-container fixed left-0 top-0 z-50 w-full border-b border-bordered px-4 py-5 drop-shadow-xl transition-all`}
      >
        <div className="navigation-bar mx-auto flex h-fit w-full max-w-5xl items-center justify-between">
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
          <div ref={ref} className="relative">
            <button
              onClick={() => toggleMenu()}
              className={`card-profile flex w-fit items-center gap-4 rounded-soorfinc border border-bordered ${show ? "bg-background" : "bg-foreground"} px-4 py-2`}
            >
              <Image
                src={"/Dummy/profile-picture.png"}
                alt="profile-picture"
                width={500}
                height={500}
                className="h-10 w-10 rounded-full object-cover"
              />
              <div className="flex items-center gap-2">
                <div className="profile-name w-32">
                  <p className="w-32 truncate text-start text-base font-bold">
                    Yorisofficial
                  </p>
                </div>
                <div className="status-verify">
                  <SealCheck size={24} weight="fill" className="text-brand" />
                </div>
              </div>
            </button>
            {show && (
              <div className="absolute right-0 top-full translate-y-2 rounded-soorfinc border border-bordered bg-foreground p-4 drop-shadow-xl">
                <p className="text-justify">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Consectetur a magni laboriosam vitae nisi cumque enim, omnis
                  porro odit placeat dolore, optio sapiente illo dignissimos ad
                  vero ab in possimus. Quod, delectus. Lorem ipsum dolor sit
                  amet consectetur adipisicing elit. Debitis, qui dolore. Minima
                  minus distinctio, alias impedit necessitatibus deleniti.
                  Eveniet, vel?
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default NavigationBar;
