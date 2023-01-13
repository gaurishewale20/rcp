 import React,{useState} from "react";
 import "./Home.css";
 import vjti_photo from '../../assets/images/vjti_photo.jpg';
 
 const Home = () => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));

  return (

    <>
      <section className="showcase">
        <div className="container grid">
          <div className="showcase-text">
            {user?.result?(<h3>Hello {user?.result.name}</h3>):(<h3>Want to apply for concession? Click on Login above!</h3>)}
            <div className="showcase-img">
                 <img src={vjti_photo} loading="lazy" alt="showcase_image" />
            </div>
            <div className="mt-2">
              Quick Links<br/>
              <a href="https://vjti.ac.in/">VJTI MAIN PAGE</a>
            </div>
          </div>

        </div>
      </section>

    </>
  );
};

export default Home;
