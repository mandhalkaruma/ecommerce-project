import React, { useState } from "react";
import { TextField, Button } from "@mui/material";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { GoogleLogin } from "@react-oauth/google";

const Login = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate()

  const handleLogin = async () => {
    try {
      const res = await axios.post("http://localhost:5000/api/auth/login", {
        email, password
      });

      // console.log(res.data);
      // console.log("Email ", email);
      // console.log("password ", password);

      localStorage.setItem("token", res.data.token);
      localStorage.setItem("role", res.data.user.role);
      localStorage.setItem("user", JSON.stringify(res.data.user));
      toast.success("Login successful");

      if (res.data.user.role === "admin") {
        navigate("/admin/dashboard")
      }
      else {
        navigate('/');
      }

    } catch (error) {
      console.log(error.response?.data);
      toast.error(error.response?.data?.message || "Invalid credentials");
    }
  }

  const handleGoogleSucecess = async (credentialResponse) => {
    try {
      const res = await axios.post(
        "http://localhost:5000/api/auth/google",
        {
          credential: credentialResponse.credential
        }
      );

      localStorage.setItem("token", res.data.token);
      localStorage.setItem("role", res.data.user.role);

      toast.success("Sign in with Google ");

      if (res.data.user.role === "admin") {
        navigate("/admin/dashboard");
      }
      else {
        navigate("/");
      }

      window.location.reload();
    } catch (error) {
      console.log(error);
      toast.error("Google Sign-in failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="w-full max-w-md bg-white p-8 rounded-xl shadow-md">

        <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">
          Sign In
        </h2>

        <div className="space-y-4">

          <TextField
            label="Email"
            type="email"
            fullWidth
            required
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />

          <TextField
            label="Password"
            type="password"
            fullWidth
            required
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            sx={{ mt: 2 }}
          />

          {/* google code */}
          <div className="flex justify-center mt-2">
            <GoogleLogin
              onSuccess={handleGoogleSucecess}
              onError={() => toast.error("Google sign-in failed")}
              theme="outline"
              size="large"
            />
          </div>

          <div className="flex items-center my-4">
            <div className="flex-grow border-t border-gray-300" />
            <span className="mx-3 text-sm text-gray-500">OR</span>
            <div className="flex-grow border-t border-gray-300" />
          </div>

          <Button
            fullWidth
            variant="contained"
            onClick={handleLogin}
            sx={{
              mt: 2,
              backgroundColor: "#9155FD",
              padding: "12px",
              fontSize: "16px",
              "&:hover": {
                backgroundColor: "#7b40f7",
              },
            }}
          >
            Login
          </Button>
        </div>


        <p className="text-center text-sm text-gray-600 mt-5">
          Don't have an account?
          <span onClick={() => navigate('/register')} className="text-[#9155FD] ml-1 cursor-pointer font-medium">
            Sign Up
          </span>
        </p>

      </div>
    </div>
  );
};

export default Login;
