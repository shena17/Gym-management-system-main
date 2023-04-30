import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, CardActions, Grid } from "@mui/material";
import "./suppliments.css";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import EastIcon from "@mui/icons-material/East";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

export default function Suppliments() {
  const [store, setStore] = useState([]);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("http://localhost:8020/item/")
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
            Explore Our Products
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
                    }}
                    key={item._id}
                  >
                    <CardActionArea>
                      <CardContent>
                        <img
                          class="rounded-t-lg h-52 mx-auto pt-2"
                          src={item.image}
                          alt={item.name}
                        />
                        <p
                          style={{
                            fontSize: "1.3rem",
                            color: "var(--dark-blue)",
                            fontFamily: "var(--font-family-titles)",
                          }}
                          className="mt-2"
                        >
                          {item.item_name}
                        </p>
                        <Typography
                          variant="body2"
                          color="text.secondary"
                          sx={{ color: "gray" }}
                        >
                          {item.description}
                        </Typography>
                        <Typography
                          gutterBottom
                          variant="h6"
                          component="div"
                          className="mt-2"
                          sx={{ color: "#797979" }}
                        >
                          Rs.{item.price}
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                    <CardActions
                      sx={{
                        display: "flex",
                        justifyContent: "right",
                      }}
                    >
                      <Button
                        variant="contained"
                        sx={{
                          backgroundColor: "var(--light-blue)",
                          width: "100px",
                          padding: "5px 30px",
                          borderRadius: "10px",
                          border: "1px solid var(--light-blue)",
                          "&:hover": {
                            backgroundColor: "white",
                            boxShadow: "none",
                            border: "1px solid var(--light-blue)",
                            color: "var(--light-blue)",
                          },
                        }}
                        onClick={() => {
                          navigate("/suppliments");
                        }}
                        endIcon={<EastIcon />}
                        className="mb-2"
                      >
                        Shop
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
