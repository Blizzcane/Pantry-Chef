import React from "react";

const CardItems = ({ currentItems }) => {
  const placeholder = "https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg";
  return (
    <div className="d-flex flex-wrap justify-content-evenly ">
      {currentItems.map((item, idx) => (
        <div className="card m-2" style={{width: "16rem"}}>
        <img src={placeholder} className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">{item[0]}</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" className="btn btn-primary">View Recipe</a>
        </div>
      </div>
      ))}
    </div>
  );
};

export default CardItems;
