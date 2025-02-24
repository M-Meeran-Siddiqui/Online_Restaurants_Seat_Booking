import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

const About = () => {
  return (
    
      <section className="about" id="about">
        <div className="container">
          <div className="banner">
            <div className="top">
              <h1 className="heading">ABOUT US</h1>
              <p>The only thing we're serious about is food.</p>
            </div>
            <p className="mid">
            Our Restaurant Seat Reservation System is a modern, responsive MERN stack website designed to enhance your dining experience. Effortlessly book your preferred seats at your favorite restaurant and enjoy a seamless reservation process. Our platform ensures that your seats are ready upon arrival, providing convenience and flexibility. The user-friendly design adapts to any device, making it accessible for everyone. Reserve your seats today and make your dining experience truly special!
            </p>
            <Link to={"/"}>
              Explore Menu{" "}
              <span>
                <HiOutlineArrowNarrowRight />
              </span>
            </Link>
          </div>
          <div className="banner">
            <img src="/about.png" alt="about" />
          </div>
        </div>
      </section>
    
  );
};

export default About;