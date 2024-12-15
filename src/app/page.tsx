"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
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
    <main>
      <div className="absolute left-0 top-0 z-50 flex h-screen w-full items-center justify-center bg-brand">
        You have redirect to auth page
      </div>
    </main>
  );
}
