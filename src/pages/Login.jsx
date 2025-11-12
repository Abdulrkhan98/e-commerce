import React, { useContext, useState } from "react";
import { FaGoogle } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { contextApi } from "../Components/Authstatus";

const Login = () => {
  const { setIsAuthentcated, setUserName } = useContext(contextApi);
  const navigate = useNavigate();
  const [icon, setIcon] = useState(false);
  const [error, setError] = useState("");
  const [login, setLogin] = useState({
    name: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setLogin((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmitForm = async (e) => {
    e.preventDefault();
    try {
      if (login.name.trim() && login.password.trim()) {
        const res = await fetch(
          "https://e-commerce-backened-4fih.onrender.com/login",
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              username: login.name,
              password: login.password,
            }),
          }
        );

        if (res.ok) {
          setIsAuthentcated(true);
          setUserName(login.name);
          localStorage.setItem("isAuthenticated", true);
          localStorage.setItem("userName", login.name);
          navigate("/");
        } else {
          const resData = await res.json();
          setError(resData.message || "Login failed");
        }
      }
    } catch (err) {
      console.error(err);
      setError("Something went wrong. Please try again later.");
    }
  };

  return (
    <section className="flex justify-center items-center h-screen">
      <div className="bg-gray-100 shadow-sm px-5 py-5 rounded-xl">
        <p className="mt-2 text-gray-400">Please enter your details</p>
        <h1 className="mt-3 text-2xl font-bold">Welcome back</h1>

        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-2 rounded mt-3">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmitForm}>
          <div className="flex flex-col justify-center items-center gap-5 mt-5">
            <input
              className="border border-gray-400 rounded-xl p-3 w-80"
              type="text"
              placeholder="Name"
              name="name"
              required
              value={login.name}
              onChange={handleInputChange}
            />

            <div className="flex items-center">
              <input
                className="border p-3 w-80 border-gray-400 rounded-xl"
                type={icon ? "text" : "password"}
                placeholder="Password"
                name="password"
                required
                value={login.password}
                onChange={handleInputChange}
              />
              {icon ? (
                <FaEye
                  className="relative right-9 cursor-pointer"
                  onClick={() => setIcon(false)}
                />
              ) : (
                <FaEyeSlash
                  className={`${
                    login.password.length > 0 ? "relative right-9 block" : "hidden"
                  } cursor-pointer`}
                  onClick={() => setIcon(true)}
                />
              )}
            </div>
          </div>

          <div className="flex items-center justify-between mt-5">
            <div className="flex items-center gap-1">
              <input type="checkbox" id="remember" />
              <label htmlFor="remember">Remember me</label>
            </div>
            <p className="text-blue-600 underline cursor-pointer">Forgot password</p>
          </div>

          <div className="flex flex-col items-center justify-center mt-8 gap-5">
            <button className="bg-blue-600 px-10 py-3 text-white rounded-xl hover:bg-blue-500 disabled:opacity-50">
              Login
            </button>

            <button className="flex items-center gap-2 px-8 py-3 border border-gray-400 rounded-xl">
              <FaGoogle /> Sign in with Google
            </button>

            <Link to={"/signup"}>
              <p className="text-gray-400">
                Don’t have an account?{" "}
                <span className="text-blue-600 underline">Sign up</span>
              </p>
            </Link>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Login;
