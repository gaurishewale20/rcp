 import React,{useState} from "react";
 import "./Home.css";
 import vjti_photo from '../../assets/images/vjti_photo.jpg';
 
 const Home = () => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));

  return (

    <>

  <div classname="head_section">
      <div className="grid">
        <div className="section1_info section__margin pb-4">
          <div className="words gradient__text">
            {" "}
            <h3>Welcome</h3>
            <h3>to VJTI's</h3>
            <h3>Railway Ticket</h3>
            <h3>Concession</h3>
            <h3>Portal</h3>
          </div>

          <br />
          <h4 className="future pt-2 gradient__text1"><a href="/login">Login</a> to access concession services.</h4>
          <h4 className="future pt-2 gradient__text1">Don't have an account? <a href="/signup">Click here to Signup</a></h4>
        </div>

        {/* <div className="caru">
          <Carousell />
        </div> */}
        <div id="map">
                <img src={vjti_photo} className="img-fluid rounded" loading="lazy" alt="vjti"></img>
              </div>
      </div>
    </div>
    </>
  );
};

export default Home;

   {/* <section className="showcase">
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
      </section>*/}