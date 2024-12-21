import FormServiceDetails from "@/app/components/admin/FormServiceDetails";
import React from "react";

const DetailsServicePage = ({ params }: { params: { id: string } }) => {
  return (
    <div className="container-content top-margin">
      <div className="header-content flex h-fit flex-col gap-2">
        <h1 className="text-2xl font-bold">Management service the partner</h1>
        <p className="text-sm font-light xl:w-3/4 xl:text-base">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis
          praesentium alias molestiae rerum quia, iusto quidem ullam illum harum
          incidunt maxime cumque amet? Pariatur et voluptatem maiores ad odio
          excepturi, praesentium mollitia.
        </p>
      </div>
      <div className="content-body mt-4">
        <div className="h-fit w-full">
          <div className="form-details rounded-soorfinc bg-foreground p-4">
            <h1 className="text-lg font-bold">Profile details</h1>
            <FormServiceDetails />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsServicePage;
