import React from "react";
import EventData from "./EventData";

function EventModal({ text, setText, data }: { text: string, setText: React.Dispatch<React.SetStateAction<string>>, data: EventData[] | undefined }) {
  return (
    <div className={"z-3 bg-dark bg-opacity-50 top-0 start-0 w-100 h-100 position-fixed align-items-center justify-content-center " + (text)}>
      <div className="card h-75 container">
        <div className="card-header bg-transparent justify-content-end d-flex ">
          <span className="btn btn-danger " onClick={() => { setText('d-none') }}>X</span>
        </div>
        <div className=" justify-content-center d-flex p-2 card-body overflow-y-scroll row">
          {
            data && data.length > 0 ? (
              <div className="d-flex flex-column align-items-center col-10 col-md-8 bg-body-tertiary p-3 rounded-4">
                <h3>{data[0].title}</h3>
                <img src={data[0].imageURL} alt={data[0].title} className="img-thumbnail rounded-4" />
                <span className="badge text-bg-info fs-6 m-2">{data[0].category}</span>
                <p className=" justify-content-center d-flex">{data[0].description}</p>
              </div>
            ) : (
              <p>No event selected</p>
            )
          }
        </div>
      </div>
    </div>
  );
};

export default EventModal;
