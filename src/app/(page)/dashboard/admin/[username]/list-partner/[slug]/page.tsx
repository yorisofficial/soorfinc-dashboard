import DetailsPartnerCard from "@/app/components/admin/DetailsPartnerCard";
import ProfilePreviews from "@/app/components/admin/ProfilePreviews";
import TableServices from "@/app/components/admin/TableServices";
import LineSpaceY from "@/app/components/partner/LineSpaceY";
import { DataServices } from "@/lib/admin/DataService";
import { dataPartner } from "@/lib/DataPartner";
import React from "react";

const DetailsPartner = ({ params }: { params: { slug: string } }) => {
  return (
    <div className="container-content top-margin">
      <div className="grid grid-cols-1 gap-4 xl:grid-cols-2 xl:gap-5">
        <ProfilePreviews data={dataPartner} params={params.slug} />
        <DetailsPartnerCard data={dataPartner} params={params.slug} />
      </div>
      <LineSpaceY className="my-8 text-primary/20" />
      <div className="section-service-table">
        <div className="flex w-full flex-col justify-start gap-2">
          <h1 className="text-2xl font-bold">List of services</h1>
        </div>
        <TableServices data={DataServices} params={params.slug} />
      </div>
    </div>
  );
};

export default DetailsPartner;
