/* eslint-disable jsx-a11y/no-redundant-roles */
import React, { useState, useEffect, useRef } from "react";
import EventData from "./EventData";
import EventMaker from "./EventMarker";
import FilterPanel from "./FilterPanel";

interface TimelineProps {
  data?: EventData[];
  currIndex: number;
}

export default function Timeline({ data = [], currIndex }: TimelineProps) {
  const [curr, setCurr] = useState(currIndex);

  const prev = curr - 2;
  const next = curr + 2;

  useEffect(() => {
  function handleKeyDown(e: KeyboardEvent) {
    if (e.key === "ArrowRight") {
      setCurr((prev) => (prev < data.length - 1 ? prev + 1 : 0));
    }
    if (e.key === "ArrowLeft") {
      setCurr((prev) => (prev > 0 ? prev - 1 : data.length - 1));
    }
  }

  document.addEventListener("keydown", handleKeyDown);

  return () => {
    document.removeEventListener("keydown", handleKeyDown);
  };
  
}, [data.length]);

  return (
    <div className="container mt-3">
      <div className="card justify-content-center rounded-4">
        <div className="card-header bg-transparent p-2 justify-content-center py-5">
          <div className="timeline">
            <div className="bg-primary p-1 w-100 rounded h-0 d-flex justify-content-around align-items-center">
              <div className="timeline-event d-flex w-100 justify-content-evenly">
                {Array.from({ length: next - prev + 1 }, (_, idx) => {
                  const i = prev + idx;
                  const isValid = i >= 0 && i < data.length;
                  const isActive = i === curr;

                  return (
                    <>
                      <button key={i} role="button" aria-label={`Timeline marker for year ${data[i]?.year}`} aria-current={isActive ? "step" : undefined} className={`rounded-circle d-flex bg-danger justify-content-center ${isActive ? "scale-1-5" : ""}`} disabled={!isValid} onClick={() => isValid && setCurr(i)} style={{ width: "20px", height: "20px" }}>
                        <span className="my-3">
                          {isValid && data[i]?.year}
                        </span>
                      </button>
                    </>
                  );
                })}
              </div>
            </div>
            <div className=" mt-5">
              <FilterPanel />
            </div>
          </div>
        </div>

        <EventMaker data={data[curr] ? [data[curr]] : []} />
      </div>
    </div>
  );
}
