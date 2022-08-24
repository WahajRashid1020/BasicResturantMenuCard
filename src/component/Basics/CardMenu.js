import React from "react";

const CardMenu = ({ menuData }) => {
  return (
    <>
      <section className="main-card--cointainer">
        {menuData.map((c) => {
          return (
            <>
              <div className="card-container" key={c.id}>
                <div className="card">
                  <div className="card-body">
                    <span className="card-number card-circle subtle">
                      {c.id}
                    </span>
                    <span className="card-author subtle">{c.name}</span>
                    <span className="card-description subtle">
                      {c.description}
                    </span>
                    <div className="card-read">Read</div>
                  </div>
                  <img src={c.image} alt="images" className="card-media" />
                  <span className="card-tag subtle">Order Now</span>
                </div>
              </div>
            </>
          );
        })}
      </section>
    </>
  );
};

export default CardMenu;
