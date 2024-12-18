import FooterAuth from "@/app/components/partner/FooterAuth";
import SearchSchedules from "@/app/components/partner/notification/SearchNotification";
import ContentSchedules from "@/app/components/partner/Schedules/ContentSchedules";
import SortedSchedules from "@/app/components/partner/Schedules/SortedSchedules";
import WalkBack from "@/app/components/partner/WalkBack";
import { AllSchedules } from "@/lib/data/Schedules";

const SchedulesPage = () => {
  return (
    <div className="container-content top-margin relative">
      <WalkBack title="Schedule list" />
      <div className="header-content mt-4 flex w-full items-center justify-between gap-4 xl:mt-5">
        <SortedSchedules />
        <SearchSchedules />
      </div>
      <ContentSchedules data={AllSchedules} />
      <FooterAuth />
    </div>
  );
};

export default SchedulesPage;
