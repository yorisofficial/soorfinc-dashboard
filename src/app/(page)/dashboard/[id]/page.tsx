import {
  Calendar,
  ChartLine,
  Toolbox,
  Wallet,
} from "@phosphor-icons/react/dist/ssr";
import { AllSchedules } from "@/lib/data/Schedules";
import { AllServices } from "@/lib/data/AllService";
import ListStatistics from "@/app/components/ListStatistics";
import CardServices from "@/app/components/Services/CardServices";
import ListSchedules from "@/app/components/Schedules/ListSchedules";

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

const DashboardPage = () => {
  return (
    <div className="container-content">
      <div className="main-page top-margin flex min-h-screen w-full flex-col gap-8">
        <div className="header-page w-full border-b border-bordered pb-4">
          <h1 className="text-2xl font-semibold">Dashboard</h1>
        </div>
        <ListStatistics data={statistics} />
        <div className="ListSchedules grid w-full grid-cols-1 gap-6 xl:grid-cols-2 xl:gap-5">
          <CardServices data={AllServices} />
          <ListSchedules data={AllSchedules} />
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
