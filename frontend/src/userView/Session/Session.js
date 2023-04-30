import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, CardActions, Grid } from "@mui/material";
import "./Session.css";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import EastIcon from "@mui/icons-material/East";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

function Session() {
  const [store, setStore] = useState([]);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("http://localhost:8020/session/")
      .then((response) => {
        setStore(response.data);
        if (store != undefined) {
          console.log(store);
        }
        setLoading(false);
      })
      .catch((error) => console.error(error));
  }, [store]);

  return (
    <div>
      <Header />
      <div style={{ backgroundColor: "rgb(239 244 250)", minHeight: "85vh" }}>
        <div className="container pt-5 pb-5">
          <p
            className="text-center mb-5"
            style={{
              color: "var(--dark-blue)",
              fontSize: "2.1rem",
              fontFamily: "var(--font-family-titles)",
              fontWeight: "500",
            }}
          >
            Your Sessions
          </p>
          {loading ? (
            <Box
              sx={{
                display: "flex",
                height: "200px",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <CircularProgress />
            </Box>
          ) : (
            <Grid container xs={12} spacing={3}>
              {store.map((item) => (
                <Grid item lg={4} xl={3}>
                  <Card
                    sx={{
                      boxShadow: "0px 0px 10px lightgray",
                      borderRadius: "10px",
                      // backgroundColor: "#25384E",
                    }}
                    key={item._id}
                  >
                    <CardActionArea>
                      <CardContent>
                        <p className="mt-2 sessionDetails text-center">
                          <p className="topic">Instructor</p>{" "}
                          {item.instructor_name}
                        </p>
                        <p className="sessionDetails">
                          <span className="topic">Location</span> :{" "}
                          {item.location}
                        </p>
                        <p className="sessionDetails sessionDesc">
                          {item.description}
                        </p>
                        <p className="sessionDetails">
                          <p className="topic">Start Time</p>
                          {new Date(item.start_time).toUTCString()}
                        </p>
                        <p className="sessionDetails">
                          <p className="topic"> End Time</p>
                          {new Date(item.end_time).toUTCString()}
                        </p>
                      </CardContent>
                    </CardActionArea>
                    <CardActions
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                      }}
                    >
                      <Button
                        variant="outlined"
                        sx={{
                          // backgroundColor: "var(--light-blue)",
                          padding: "5px 30px",
                          borderRadius: "10px",
                          border: "1px solid red",
                          color: "red",
                          "&:hover": {
                            backgroundColor: "red",
                            boxShadow: "none",
                            border: "1px solid red",
                            color: "white",
                          },
                        }}
                        onClick={() => {
                          navigate("/session");
                        }}
                        className="mb-2"
                      >
                        Complete Session
                      </Button>
                    </CardActions>
                  </Card>
                </Grid>
              ))}
            </Grid>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Session;
