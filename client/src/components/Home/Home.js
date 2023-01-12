 import React from "react";
 import "./Home.css";
 
 const Home = () => {
  const user = JSON.parse(localStorage.getItem('profile'));
  return (

    <>
      <section className="showcase">
        <div className="container grid">
          <div className="showcase-text">
            <h1>LEARN.</h1>

            <h1>EXPLORE.</h1>

            <h1>CREATE.</h1>
          </div>

        </div>
      </section>

    </>
  );
};

export default Home;
