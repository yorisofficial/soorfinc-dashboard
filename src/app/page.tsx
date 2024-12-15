import {
  ArrowUpRight,
  Calendar,
  ChartLine,
  Toolbox,
  Wallet,
} from "@phosphor-icons/react/dist/ssr";
import ListStatistics from "./components/ListStatistics";
import CardServices from "./components/Services/CardServices";
import { ServiceProps } from "@/lib/type/type";
import Link from "next/link";
import LineSpaceY from "./components/LineSpaceY";
import { AllSchedules } from "@/lib/data/Schedules";
import Image from "next/image";
import StatusBadges from "./components/StatusBadges";
import ListSchedules from "./components/Schedules/ListSchedules";
import { AllServices } from "@/lib/data/AllService";

export const statistics = [
  {
    id: "1",
    title: "Total performance",
    value: 4,
    icon: <ChartLine size={32} weight="fill" className="flex-shrink-0" />,
  },
  {
    id: "2",
    title: "Total balance",
    value: 4000000,
    icon: <Wallet size={32} weight="fill" className="flex-shrink-0" />,
  },
  {
    id: "3",
    title: "Total services",
    value: 4,
    icon: <Toolbox size={32} weight="fill" className="flex-shrink-0" />,
  },
  {
    id: "3",
    title: "Total schedules",
    value: 4,
    icon: <Calendar size={32} weight="fill" className="flex-shrink-0" />,
  },
];

export default function Home() {
  return (
    <main className="mx-auto h-fit min-h-screen w-full max-w-5xl px-4 pb-8 xl:px-0">
      <div className="main-page mt-[130px] flex min-h-screen w-full flex-col gap-8">
        <div className="header-page w-full border-b border-bordered pb-4">
          <h1 className="text-2xl font-semibold">Dashboard</h1>
        </div>
        <ListStatistics data={statistics} />
        <div className="ListSchedules grid w-full grid-cols-1 gap-6 xl:grid-cols-2 xl:gap-5">
          <CardServices data={AllServices} />
          <ListSchedules data={AllSchedules} />
        </div>
      </div>
    </main>
  );
}
