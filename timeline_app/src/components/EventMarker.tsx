import React, { useState } from "react";
import EventData from "./EventData";
import EventModal from "./EventModal";

function EventMaker({ data }: { data: EventData[] | undefined }) {
  const [text, setText] = useState('d-none');
  return (
    <>
      <div className=" justify-content-center d-flex p-2 row">
        {
          data && data.length > 0 ? (
            <div className="d-flex flex-column align-items-center col-10 col-md-8 bg-body-tertiary p-3 rounded-4">
              <h3>{data[0].title}</h3>
              <img src={data[0].imageURL} alt={data[0].title} className="img-thumbnail rounded-4" />
              <span className="badge text-bg-info fs-6 m-2">{data[0].category}</span>
              <p className=" justify-content-center d-flex">{data[0].description}</p>
              <button className="btn btn-primary" onClick={() => setText('d-flex')}>Load more</button>
            </div>
          ) : (
            <p>No event selected</p>
          )
        }
      </div>
      <EventModal text={text} setText={setText} data={data} />
    </>
  );
};

export default EventMaker;
