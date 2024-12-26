"use client";

import React from "react";
import InputText from "./InputText";
import LineSpaceY from "../partner/LineSpaceY";
import { ImageSquare, PlusCircle } from "@phosphor-icons/react";
import { TimePicker } from "@/lib/TimePicker";
import SelectSection from "./SelectSection";

const FormServiceDetails = () => {
  return (
    <>
      <form
        action=""
        className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:gap-5"
      >
        <div className="flex flex-col items-start gap-2">
          <InputText
            name="servicename"
            title="Service name"
            value={"2 Hours learn wave"}
            onChange={(e) => console.log(e)}
          />
          <label htmlFor="description" className="h-fit min-h-[150px] w-full">
            <span className="text-sm">Description</span>
            <textarea
              name="description"
              id="description"
              value={
                "Consequatur rerum odio expedita quis possimus nobis. Minima enim facere. Quidem voluptate eius vero exercitationem. Molestias aut laboriosam doloremque harum totam corporis. Deleniti quo esse."
              }
              onChange={(e) => console.log(e)}
              className="mt-1 min-h-[150px] w-full rounded-inner bg-background p-4 text-sm text-primary outline-none"
            />
          </label>
          <label htmlFor="hightlight" className="flex items-center gap-2 py-4">
            <input
              type="checkbox"
              name="hightlight"
              id="highlight"
              className="h-4 w-4 rounded-inner bg-foreground checked:bg-brand"
            />
            <span>Highlight the services</span>
          </label>
          <LineSpaceY className="w-full text-primary/20" />
          <div className="input-image w-full">
            <h1 className="text-lg font-bold">Add picture service</h1>
            <div className="mt-4 grid w-full grid-cols-2 items-center gap-2 md:grid-cols-4 xl:grid-cols-2">
              <label htmlFor="img-1">
                <button
                  onClick={() => document.getElementById("img-1")!.click()}
                  className="flex h-[100px] w-full items-center justify-center rounded-soorfinc border-4 border-dashed border-bordered bg-background p-4 hover:bg-background/90 xl:h-[150px]"
                >
                  <ImageSquare size={24} />{" "}
                </button>
                <input
                  type="file"
                  name="img-1"
                  id="img-1"
                  className="hidden h-[100px] w-full rounded-inner object-contain xl:h-[150px]"
                />
              </label>
              <label htmlFor="img-2">
                <button
                  onClick={() => document.getElementById("img-2")!.click()}
                  className="flex h-[100px] w-full items-center justify-center rounded-soorfinc border-4 border-dashed border-bordered bg-background p-4 hover:bg-background/90 xl:h-[150px]"
                >
                  <ImageSquare size={24} />{" "}
                </button>
                <input
                  type="file"
                  name="img-2"
                  id="img-2"
                  className="hidden h-[100px] w-full rounded-inner object-contain xl:h-[150px]"
                />
              </label>
              <label htmlFor="img-3">
                <button
                  onClick={() => document.getElementById("img-3")!.click()}
                  className="flex h-[100px] w-full items-center justify-center rounded-soorfinc border-4 border-dashed border-bordered bg-background p-4 hover:bg-background/90 xl:h-[150px]"
                >
                  <ImageSquare size={24} />{" "}
                </button>
                <input
                  type="file"
                  name="img-3"
                  id="img-3"
                  className="hidden h-[100px] w-full rounded-inner object-contain xl:h-[150px]"
                />
              </label>
              <label htmlFor="img-4">
                <button
                  onClick={() => document.getElementById("img-4")!.click()}
                  className="flex h-[100px] w-full items-center justify-center rounded-soorfinc border-4 border-dashed border-bordered bg-background p-4 hover:bg-background/90 xl:h-[150px]"
                >
                  <ImageSquare size={24} />{" "}
                </button>
                <input
                  type="file"
                  name="img-4"
                  id="img-4"
                  className="hidden h-[100px] w-full rounded-inner object-contain xl:h-[150px]"
                />
              </label>
            </div>
          </div>
        </div>
        <div className="input-session-services">
          <h1 className="text-lg font-bold">Management sections</h1>
          <LineSpaceY className="my-2 text-primary/20" />
          <div className="section-service mt-2 flex w-full flex-col items-start gap-4">
            <SelectSection title={"section 1"} startTime={""} endTime={""} />
            <SelectSection title={"section 2"} startTime={""} endTime={""} />
            <SelectSection title={"section 3"} startTime={""} endTime={""} />
            <SelectSection title={"section 4"} startTime={""} endTime={""} />
          </div>
          <LineSpaceY className="my-2 text-primary/20" />
          <button
            type="button"
            aria-label="add new section"
            className="flex w-full items-center justify-center gap-2 rounded-inner border border-foreground bg-background py-2 duration-300 hover:bg-background/90"
          >
            <PlusCircle size={24} /> Add section
          </button>
          <LineSpaceY className="my-2 text-primary/20" />
          <div className="submit-section flex w-full flex-col gap-2">
            <button
              type="submit"
              className="btn-primary flex w-full items-center justify-center gap-2 rounded-inner border border-foreground bg-brand py-2 duration-300 hover:bg-brand/90"
            >
              Save change
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default FormServiceDetails;
