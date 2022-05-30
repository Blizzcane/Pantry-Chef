import React from "react";

const CardItems = ({ currentItems }) => {
  return (
    <div className="row row-cols-1 row-cols-md-4 g-4">
      {currentItems.map((item, idx) => (
        <div className="col">
          <div className="card h-100">
            <img src="..." className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{item[0]}</h5>
              <p className="card-text">
                This is a longer card with supporting text below as a natural
                lead-in to additional content.
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardItems;
