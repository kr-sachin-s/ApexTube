import React from "react";
import { AiOutlineGithub, AiOutlineGoogle } from "react-icons/ai";
import { BsTwitter } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import { useInput } from "../../CustomHooks/CustomHooks";
import { useUserSignupMutation } from "../../features/api/auth/authSliceApi";
import { MobileSidebar } from "../../components/Sidebar/MobileSidebar/MobileSidebar";

export const SignupPage = () => {
  const { inputState, inputUpdate } = useInput({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const navigate = useNavigate();

  const [signupUser, { isLoading, isSuccess }] = useUserSignupMutation();

  React.useEffect(() => {
    if (isSuccess) {
      navigate("/");
    }
  }, [isSuccess, navigate]);

  const handleSignUp = (e) => {
    e.preventDefault();
    if (inputState.password.length < 4) {
      toast.info("please add at least 4 characters ");
      return;
    }
    const passwordMatch = inputState.password === inputState.confirmPassword;
    if (passwordMatch && inputState.password !== "") {
      signupUser(inputState);
    } else {
      if (!passwordMatch) {
        toast.error(`passwords don't match`);
        return;
      }
      toast.error("please enter correct details");
    }
  };

  return (
    <>
      <div className="main">
        <main className="section-outer grid-center auth-section container outer-grid">
          <form action="#" className="form form-signup">
            <div className="m-bottom-small flex-jc-center">
              <h3
                className="m-bottom-small"
              >
                Sign Up
              </h3>
            </div>
            <div className="form-group flex">
              <a href="#">
                {/* <i className="font-icon fa fa-brands fs-medium m-right-small fa-google" /> */}
                <AiOutlineGithub
                  color="white"
                  className="font-icon  fs-medium m-right-small "
                />
              </a>
              <a href="#">
                <AiOutlineGoogle
                  color="white"
                  className="font-icon  fs-medium m-right-small "
                />
              </a>
              <a href="#">
                <BsTwitter
                  color="white"
                  className="font-icon  fs-medium m-right-small "
                />
              </a>
            </div>
            <div className="form-group">
              <p className="form-divider">
                <span className="or">or</span>
              </p>
            </div>
            <div className="form-signup-group">
              <input
                id="name"
                type="name"
                name="fullName"
                onChange={inputUpdate}
                className="form-input"
                placeholder="Full Name"
                required
              />
              <label htmlFor="name" className="form-label">
                Full Name
              </label>
            </div>
            <div className="form-signup-group">
              <input
                id="email"
                name="email"
                onChange={inputUpdate}
                type="email"
                className="form-input"
                placeholder="Email Address"
                required
              />
              <label htmlFor="email" className="form-label">
                Email Address
              </label>
            </div>
            <div className="form-signup-group">
              <input
                id="signup-password"
                type="password"
                name="password"
                onChange={inputUpdate}
                className="form-input"
                placeholder="Password"
                minLength="4"
                required
              />
              <label htmlFor="password" className="form-label">
                Password
              </label>
            </div>
            <div className="form-signup-group">
              <input
                id="password"
                type="password"
                name="confirmPassword"
                onChange={inputUpdate}
                className="form-input"
                placeholder="Confirm Password"
                minLength="4"
                required
              />
              <label htmlFor="password" className="form-label">
                Confirm Password
              </label>
            </div>

            <div className="form-group">
              <button
                type="submit"
                className="btn_2"
                disabled={isLoading && isLoading}
                onClick={(e) => handleSignUp(e)}
              >
                Sign Up
              </button>
            </div>
          </form>
        </main>
        <div className="mobile">
          <MobileSidebar />
        </div>
      </div>
    </>
  );
};
