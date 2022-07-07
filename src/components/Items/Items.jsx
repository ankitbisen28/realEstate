import React from "react";
import "./Items.css";
import mockData from "./MOCK_DATA.json";

export const Items = () => {
  return (
    <>
      <div className="container">
        {mockData.map((val, key) => {
          return (
            <div className="card" style={{ width: "18rem" }}>
              <img src="..." className="card-img-top" alt="..." />
              <div className="card-body">
                <p className="card-title">{val.price}</p>
                <h5 className="card-text">{val.placename}</h5>
                <p className="text-primary">{val.location}</p>
                <div className="parent">
                  <p className="text-primary">
                    {val.Beds} Bedrooms
                  </p>
                  <p className="text-primary mx-2"> {val.Bathroom} Bathroom</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};
