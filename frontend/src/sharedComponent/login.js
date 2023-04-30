import * as React from "react";
import toast from "react-hot-toast";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import login from "../images/login.jpg";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./login.css";
import logo from "../images/logo-color.png";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        GymMaster
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const theme = createTheme();

export default function Login() {
  let navigate = useNavigate();
  const initialValues = {
    email: "",
    password: "",
  };
  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email address").required("Required"),
    password: Yup.string().required("Required"),
  });

  const onSubmit = (values) => {
    if (values.email == "admin@gmail.com" && values.password == "1234") {
      navigate("/dashboard");
    } else {
      const responses = axios

        .post(`http://localhost:8020/user/login`, {
          email: values.email,
          password: values.password,
        })
        .then((response) => {
          navigate("/home");
          localStorage.setItem("logged", true);
        });
    }
  };

  return (
    <section className="flex  h-screen ">
      <div className="w-100 mainContainer">
        <a href="/home">
          <img src={logo} style={{ width: "300px" }} />
        </a>
        <div className="p-10 loginForm mt-4">
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
          >
            {({ errors, touched }) => (
              <Form>
                <div className="flex-col w-full">
                  <div className="ll">
                    {" "}
                    <p className="font-semibold">Email</p>
                  </div>
                  <div className="ll">
                    {" "}
                    <Field
                      className="border border-grey-dark text-sm p-3 my-1  rounded-md w-full"
                      type="email"
                      name="email"
                    />
                  </div>

                  <ErrorMessage
                    component="div"
                    className="text-red-500 text-xs"
                    name="email"
                  />
                </div>

                <div className="flex-col mt-3">
                  <div className="ll">
                    {" "}
                    <p className="font-semibold">Password</p>
                  </div>
                  <div className="ll">
                    {" "}
                    <Field
                      className="border border-grey-dark text-sm p-3 my-1 rounded-md w-full"
                      type="password"
                      name="password"
                    />
                  </div>

                  <ErrorMessage
                    component="div"
                    className="text-red-500 text-xs italic"
                    name="password"
                  />
                </div>

                <button className="loginBtn" type="submit">
                  LOGIN
                </button>
                <div className="text-center mt-4">
                  <a
                    href="/register"
                    variant="body2"
                    className="underline signUp"
                  >
                    Don't have an account? Sign Up
                  </a>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </section>
  );
}
