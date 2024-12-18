import ListStatistics from "@/app/components/ListStatistics";
import CardServices from "@/app/components/Services/CardServices";
import ListSchedules from "@/app/components/Schedules/ListSchedules";
import { AllSchedules } from "@/lib/data/Schedules";
import { AllServices } from "@/lib/data/AllService";
import { DataStatistics } from "@/lib/data/DataStatistics";
import { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: { username: string };
}): Promise<Metadata> {
  const title = `Dashboard | ${params.username}`;
  const description = `Dashboard for ${params.username}`;
  return {
    title,
    description,
  };
}

const DashboardPage = () => {
  return (
    <div className="container-content">
      <div className="main-page top-margin flex min-h-screen w-full flex-col gap-8">
        <div className="header-page w-full border-b border-bordered pb-4">
          <h1 className="text-2xl font-semibold">Dashboard</h1>
        </div>
        <ListStatistics data={DataStatistics} />
        <div className="ListSchedules grid w-full grid-cols-1 gap-6 xl:grid-cols-2 xl:gap-5">
          <CardServices data={AllServices} />
          <ListSchedules data={AllSchedules} />
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
