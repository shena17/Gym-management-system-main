import React from "react";
import "./Home.css";
import { Button } from "@mui/material";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { useNavigate } from "react-router-dom";
import whey from "../../images/whey.png";
import session from "../../images/session.png";
import access from "../../images/access.png";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div>
      <Header />
      <div className="homeImg">
        <div className="intro">
          <p className="introMain m-0">Make your life easier with</p>
          <p className="introMain introMain2 ">BodyZone Fitness</p>
          <p className="introDesc">
            BodyZone gym management software is for gyms and health clubs of all
            sizes and stages. Helping you have happier members, healthy business
            growth, and more time for you to do the things that you love
          </p>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "red",
              padding: "12px 30px",
              borderRadius: "10px",
              border: "1px solid red",
              "&:hover": {
                backgroundColor: "white",
                boxShadow: "none",
                border: "1px solid red",
                color: "red",
              },
            }}
            onClick={() => {
              navigate("/about");
            }}
            className="mt-3"
          >
            Explore More
          </Button>
        </div>
      </div>
      <div className="container-lg homeContent mt-5">
        <div className="leftpane">
          <p className="contentTopic">24/7 Gym access control</p>
          <p className="contentDesc">
            Whether you want a quick 24/7 solution, or complete control over
            member movement within your facility, GymMaster has the answer
          </p>
          <p className="contentDesc mt-4">
            BodyZone Access Control System provides an easy to implement and
            convenient way for members to access your facility giving you added
            security and peace of mind. Our network-based reader is designed as
            a low-cost and reliable way to provide access control for your
            members.
          </p>
        </div>
        <div className="rightpane">
          <img src={access} style={{ width: "600px" }} />
        </div>
      </div>
      <div style={{ backgroundColor: "#CAD6DD" }}>
        <div className="container-lg homeContent">
          <div className="rightpane">
            <img src={whey} />
          </div>
          <div className="leftpane ps-5">
            <p className="contentTopic">Our Products</p>
            <p className="contentDesc">
              To help you make an informed decision, we’ve narrowed down the
              field and compiled this comprehensive, nutritionist-backed guide
              to the best muscle building supplements on the market.
            </p>
            <p className="contentDesc mt-4">
              We’ve prioritized specific supplements that are scientifically
              proven to help build muscle, including mass gainers, protein
              powders, creatine and BCAAs So, if you're ready to hit the ground
              running, here are our top picks for the best muscle building
              supplements to help you crush those fitness goals.
            </p>

            <Button
              variant="contained"
              sx={{
                backgroundColor: "red",
                width: "200px",
                padding: "12px 30px",
                borderRadius: "10px",
                border: "1px solid red",
                "&:hover": {
                  backgroundColor: "white",
                  boxShadow: "none",
                  border: "1px solid red",
                  color: "red",
                },
              }}
              onClick={() => {
                navigate("/suppliments");
              }}
              className="mt-4"
            >
              Explore More
            </Button>
          </div>
        </div>
      </div>
      <div className="container-lg homeContent mt-5">
        <div className="leftpane">
          <p className="contentTopic">Session Management</p>

          <p className="contentDesc">
            Maximize Member Sign-ups and Experience Our new tool boosts gym
            sales efforts and improves the member experience by helping sales
            teams efficiently manage and prioritize leads, tailor sales pitches,
            track progress, and offer personalized promotions. The result is
            stronger relationships with current members, higher retention, and
            more sign-ups.
          </p>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "red",
              width: "200px",
              padding: "12px 30px",
              borderRadius: "10px",
              border: "1px solid red",
              "&:hover": {
                backgroundColor: "white",
                boxShadow: "none",
                border: "1px solid red",
                color: "red",
              },
            }}
            onClick={() => {
              navigate("/session");
            }}
            className="mt-4"
          >
            Explore More
          </Button>
        </div>
        <div className="rightpane">
          <img src={session} />
        </div>
      </div>
      <Footer />
    </div>
  );
}
