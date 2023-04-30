import React from "react";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import "./Common.css";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import about from "../images/about.webp";

function About() {
  const navigate = useNavigate();

  return (
    <div>
      <Header />
      <div>
        <div style={{ backgroundColor: "#25384e" }}>
          <div className="container-lg homeContent">
            <div className="leftpane">
              <p
                className="contentTopic"
                style={{ color: "white", fontSize: "2.5rem" }}
              >
                BodyZone Fitness
              </p>

              <p
                className="contentDesc"
                style={{
                  color: "white",
                  fontWeight: "300",
                  letterSpacing: "0.1rem",
                  wordSpacing: "0.1rem",
                }}
              >
                Welcome to our gym management system! Our system is designed to
                make managing your gym easier and more efficient. With our
                software, you can streamline your membership management, track
                your gym's finances, and manage your equipment inventory all in
                one place.
              </p>
            </div>
            <div className="rightpane">
              <img src={about} style={{ width: "500px" }} />
            </div>
          </div>
        </div>
        <div className="container-lg ps-5 lists mt-5 mb-5 pb-2 pt-3">
          <p className="text-center mb-3 values">OUR MISSION</p>
          <p className="mission text-center">
            <i>
              "Provide Day to day Premium customer experience where every member
              matters"
            </i>
          </p>
        </div>
        <div
          className="pt-1 pb-5"
          style={{ backgroundColor: "rgb(239 244 250)" }}
        >
          <div className="container-lg ps-5 lists mt-5">
            <p className="text-center mb-3 values">OUR VALUES</p>
            <ul>
              <li>
                Provide Day to day Premium customer experience where every
                member matters.
              </li>
              <li>
                Provide guarantied fitness results to every customer with every
                tailored solution
              </li>
              <li>
                Continuous Improvement in Everything we do and strive towards
                providing leading service to our customers.
              </li>
              <li>
                To practice what we preach and lead by example at all times
              </li>
              <li>
                Create a community based environment where everyone feels cared
                for and confident in achieving their goals.
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default About;
