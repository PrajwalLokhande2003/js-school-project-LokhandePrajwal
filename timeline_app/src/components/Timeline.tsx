import React, { useState } from "react";
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
                      <button
                        key={i}
                        className={`rounded-circle d-flex justify-content-center  ${isValid ? "bg-danger" : "bg-danger"
                          } ${isActive ? "scale-1-5" : ""}`}
                        disabled={!isValid}
                        onClick={() => isValid && setCurr(i)}
                        style={{ width: "15px", height: "15px" }}
                      >
                        <span className="mt-2">{isValid && data[i]?.year}</span>
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
