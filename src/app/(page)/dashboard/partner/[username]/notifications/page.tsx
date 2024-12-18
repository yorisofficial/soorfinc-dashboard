import LineSpaceY from "@/app/components/LineSpaceY";
import SearchNotification from "@/app/components/notification/SearchNotification";
import SortedNotification from "@/app/components/notification/SortedNotification";
import WalkBack from "@/app/components/WalkBack";
import { DataNotification } from "@/lib/data/DataNotification";
import { Metadata } from "next";
import Image from "next/image";
import React, { Fragment } from "react";

const NotificationPage = () => {
  return (
    <div className="container-content top-margin">
      <WalkBack title="All Notification" />
      <div className="content-notification">
        <div className="main-content mt-4 xl:mt-5">
          <div className="header-content mt-4 flex w-full items-center justify-between gap-4">
            <SortedNotification />
            <SearchNotification />
          </div>
          <LineSpaceY className="my-4 w-full text-primary/20" />
          <div className="min-h-screen w-full">
            <ul className="flex flex-col items-start justify-start">
              {DataNotification.length > 0 ? (
                <Fragment>
                  {DataNotification.map((item, index) => (
                    <li
                      key={index}
                      className="flex items-start justify-center gap-4 border-b border-primary/20 py-4"
                    >
                      <div className="profile-picture flex-shrink-0">
                        <Image
                          src={item.picture}
                          alt={`notification from ${item.title}`}
                          width={100}
                          height={100}
                          className="h-10 w-10 rounded-full object-cover"
                        />
                      </div>
                      <div className="details">
                        <h1 className="text-base font-bold">{item.title}</h1>
                        <p className="text-xs font-light">{item.description}</p>
                      </div>
                    </li>
                  ))}
                </Fragment>
              ) : (
                <div className="null-data flex h-[300px] w-full items-center justify-center rounded-soorfinc border-4 border-dashed border-primary opacity-20">
                  <h1 className="text-4xl font-bold">No notification</h1>
                </div>
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotificationPage;
