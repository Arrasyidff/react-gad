import React from "react";

function Card({ data }) {
  const month = data.dob.date.split("T")[0].split("-")[1];
  const day = data.dob.date.split("T")[0].split("-")[2];
  return (
    <>
      <div className="card rounded-lg shadow">
        <div className="head-card">
          <p>
            Personnel ID: <span>{data.id.value}</span>
          </p>
          <i class="fas fa-ellipsis-h"></i>
        </div>
        <div className="card-middle">
          <div className="photo-card">
            <div>
              <img src={data.picture.large} alt="" />
            </div>
          </div>
          <div className="card-desc">
            <h4>Name</h4>
            <p>
              {data.name.first} {data.name.last}
            </p>
            <h4>Telephone</h4>
            <p>{data.phone}</p>
            <h4 className="dob-card-title">Birthday</h4>
            <p className="dob-card-desc">
              {month}-{day}
            </p>
            <h4 className="email-card-title">Email</h4>
            <p className="email-card-desc">{data.email}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
