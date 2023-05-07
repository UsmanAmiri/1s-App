import React from 'react';
import vg from "../assests/software.avif";
import {AiFillAmazonCircle,AiFillGoogleCircle,AiFillInstagram,AiFillYoutube} from "react-icons/ai"

function Home() {
  return (
    <>
      <div className='home'>
        <main>
          <h1>TechStar</h1>
          <p>solution to your software</p>
        </main>
      </div>

      <div className='home2'> 
        <img src={vg} alt="Graphics" />
        <div>
          <p>
            we are your one and only solution to the problem
            you face every day. we are leading tech company whose aim is to 
            increase the
            problem solving ability in children 
          </p>
        </div>
      </div>

      <div className='home3' id='about' >
        <div>
          <h1>who we are</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
            Reprehenderit, enim tenetur exercitationem ipsum esse rem illum 
            dolorum, optio consectetur consequatur ea quisquam vitae minima 
            ad similique laboriosam fugit. Sit, laudantium?
          </p>
        </div>
      </div>
      <div className="home4" id="brands">
        <div>
          <h1>Brands</h1>

          <article>
            <div
              style={{
                animationDelay: "0.3s",
              }}
            >
              <AiFillGoogleCircle />
              <p>Google</p>
            </div>

            <div
              style={{
                animationDelay: "0.5s",
              }}
            >
              <AiFillAmazonCircle />
              <p>Amazon</p>
            </div>

            <div
              style={{
                animationDelay: "0.7s",
              }}
            >
              <AiFillYoutube />
              <p>Youtube</p>
            </div>

            <div
              style={{
                animationDelay: "1s",
              }}
            >
              <AiFillInstagram />
              <p>Instagram</p>
            </div>
          </article>
        </div>
      </div>
    </>
  );
};

export default Home;

