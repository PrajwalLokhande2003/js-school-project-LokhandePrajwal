import React, { useEffect } from "react";
import EventData from "./EventData";

function EventModal({ text, setText, data }: { text: string, setText: React.Dispatch<React.SetStateAction<string>>, data: EventData[] | undefined }) {

  useEffect(() => {
    document.documentElement.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        setText("d-none");
      }
    });
  });

  return (
    <div role="dialog" aria-modal="true" aria-labelledby="modal-title" className={`z-3 bg-dark bg-opacity-50 top-0 start-0 w-100 h-100 position-fixed align-items-center justify-content-center ${text}`}>
      <div className="h-100 container">
        <div className="card h-100">
          {data && data.length > 0 ? (
            <>
              <div className="card-header bg-transparent justify-content-between d-flex">
                <h3 id="modal-title">{data[0].title}</h3>
                <button className="btn btn-danger" aria-label="Close modal" onClick={() => setText("d-none")}>
                  X
                </button>
              </div>
              <div className="card-body justify-content-center overflow-y-scroll row">

                <div className="d-flex flex-column align-items-center col-10 col-md-8 bg-body-tertiary p-3 rounded-4">
                  <figure className="d-flex flex-column align-items-center">
                    <img src={data[0].imageURL} alt={data[0].title} className="img-thumbnail rounded-4" />
                    <figcaption className="badge text-bg-info fs-6 m-2">{data[0].category}</figcaption>
                  </figure>
                  <p>{data[0].description}</p>
                </div>
              </div>
            </>
          ) : (
            <p>No event selected</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default EventModal;
