import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { auth } from "../../firebase/config";
import { useHistory } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";


export default function Login() {
  const jwtToken = localStorage.getItem('jwt')
  useEffect(() => {
    if (jwtToken && auth) {
      navigate.push("/")
    }
  });

  const generateRandomString = (myLength) => {
    const chars =
      "AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz1234567890";
    const randomArray = Array.from(
      { length: myLength },
      (v, k) => chars[Math.floor(Math.random() * chars.length)]
    );
    const randomString = randomArray.join("");
    return randomString;
  };
  const jwt = generateRandomString(60)

  const navigate = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (event) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      localStorage.setItem('jwt', jwt)
      navigate.push("/")

    } catch (error) {

      toast.error(error.code, {});
    }
  };
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={true}
        limit={1}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover={false}
        theme="light"
      />
      <div class="container-fluid px-0" data-layout="container">
        <div class="container">
          <div class="row flex-center min-vh-100 py-5">
            <div class="col-sm-10 col-md-8 col-lg-5 col-xl-5 col-xxl-3">
              <div class="text-left mb-4">
                <h3>Sign In</h3>
                <p class="text-700">Get access to your account</p>
                <hr />
              </div>
              <div class="mb-3 text-start">
                <label class="form-label" for="email">Email address</label>
                <div class="form-icon-container">
                  <input
                    class="form-control form-icon-input"
                    id="email"
                    type="email"
                    name="email"
                    placeholder="Enter the email"
                    onChange={(e) => { setEmail(e.target.value); }}
                  />
                  <span class="fas fa-user text-900 fs--1 form-icon"></span>
                </div>
              </div>
              <div class="mb-3 text-start">
                <label class="form-label" for="password">Password</label>
                <div class="form-icon-container">
                  <input
                    class="form-control form-icon-input"
                    type="password"
                    placeholder="Password"
                    onChange={(e) => { setPassword(e.target.value); }}
                  />
                  <span class="fas fa-key text-900 fs--1 form-icon"></span>
                </div>
              </div>
              <div class="row flex-between-center mb-7">
                <div class="col-auto">
                  <div class="form-check mb-0">
                    <input class="form-check-input" id="basic-checkbox" type="checkbox" checked="checked" />
                    <label class="form-check-label mb-0" for="basic-checkbox">Remember me</label>
                  </div>
                </div>
                <div class="col-auto"><a class="fs--1 fw-semi-bold" href="../../../pages/authentication/simple/forgot-password.html">Forgot Password?</a></div>
              </div>
              <button onClick={handleLogin} class="btn btn-primary w-100 mb-3">Sign In</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
