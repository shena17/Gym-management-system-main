import React from "react";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import "./Common.css";
import PublicIcon from "@mui/icons-material/Public";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";
import ShareIcon from "@mui/icons-material/Share";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import PinterestIcon from "@mui/icons-material/Pinterest";
import logo from "../images/logo-color.png";

function Contact() {
  return (
    <div>
      <Header />
      <div style={{ minHeight: "75vh" }}>
        <div className="container-lg ps-5 lists mt-5 mb-5 pb-2 pt-3">
          <img
            src={logo}
            alt="logo"
            style={{ height: "80px" }}
            className="mx-auto me-auto mb-5"
          />
          <p
            className="text-center mb-3 values"
            style={{
              fontSize: "2rem",
              fontWeight: "500",
            }}
          >
            THE BEST GYM EQUIPMENT SUPPLIER OVER THE YEARS WITH HIGHEST STANDARD
            OF PROFESSIONAL SERVICE.
          </p>
          <p className="mission text-center">
            <i>
              "Provide Day to day Premium customer experience where every member
              matters"
            </i>
          </p>
        </div>
        <div className="contact container-lg">
          <div>
            <PublicIcon
              fontSize="inherit"
              sx={{ fontSize: "2.8rem", color: "red", marginBottom: "10px" }}
            />
            <p className="contactTopic">ADDRESS</p>
            <p className="contactDesc">424, Payyangane Paara, Hikuwada</p>
          </div>
          <div>
            <LocalPhoneIcon
              fontSize="inherit"
              sx={{ fontSize: "2.8rem", color: "red", marginBottom: "10px" }}
            />
            <p className="contactTopic">PHONE</p>
            <p className="contactDesc">+94 77 461 2468</p>
          </div>
          <div>
            <EmailIcon
              fontSize="inherit"
              sx={{ fontSize: "2.8rem", color: "red", marginBottom: "10px" }}
            />
            <p className="contactTopic">EMAIL</p>
            <p className="contactDesc">thimeshMalKumaraya@pem.lk</p>
          </div>
          <div>
            <ShareIcon
              fontSize="inherit"
              sx={{ fontSize: "2.8rem", color: "red", marginBottom: "10px" }}
            />
            <p className="contactTopic">FOLLOW US</p>
            <p className="contactDesc">
              <InstagramIcon
                fontSize="inherit"
                sx={{ fontSize: "2rem", marginLeft: "5px" }}
              />
              <FacebookIcon
                fontSize="inherit"
                sx={{ fontSize: "2rem", marginLeft: "5px" }}
              />
              <LinkedInIcon
                fontSize="inherit"
                sx={{ fontSize: "2rem", marginLeft: "5px" }}
              />
              <PinterestIcon
                fontSize="inherit"
                sx={{ fontSize: "2rem", marginLeft: "5px" }}
              />
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Contact;
