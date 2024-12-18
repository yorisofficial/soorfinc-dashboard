"use client";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

const DashboardHome = () => {
  const router = useRouter();
  useEffect(() => {
    const second = setTimeout(() => {
      router.push("/auth");
    }, 1000);

    return () => {
      clearTimeout(second);
    };
  }, [router]);

  return (
    <div className="flex h-screen w-full items-center justify-center">
      You have redirect to auth page
    </div>
  );
};

export default DashboardHome;
