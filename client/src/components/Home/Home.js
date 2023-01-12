 import React,{useState} from "react";
 import "./Home.css";
 
 const Home = () => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));

  return (

    <>
      <section className="showcase">
        <div className="container grid">
          <div className="showcase-text">
            {user?.result?(<h3>Hello {user?.result.name}</h3>):(<h3>Want to apply for concession? Click on Login above!</h3>)}
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
