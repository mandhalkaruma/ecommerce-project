import React, { useState } from "react";
import { TextField, Button } from "@mui/material";
import axios from 'axios';
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { GoogleLogin } from "@react-oauth/google";


const Register = () => {

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleRegister = async () => {
    try {
      const res = await axios.post(
        "http://localhost:5000/api/auth/register",
        {
          firstName, lastName, email, password
        }
      );

      localStorage.setItem("token", res.data.token);
      localStorage.setItem("role", res.data.user.role);

      toast.success("Registered successfully 🎉")
      console.log(res.data);

      if (res.data.user.role === "admin") {
        navigate('/admin/dashboard');
      } else {
        navigate('/');
      }

    } catch (error) {
      toast.error(
        error.response?.data?.message || "Registration failed"
      );
    }
  };

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

      toast.success("Sign up with Google ");

      if (res.data.user.role === "admin") {
        navigate("/admin/dashboard");
      }
      else {
        navigate("/");
      }

      window.location.reload();
    } catch (error) {
      console.log(error);
      toast.error("Google Sign-up failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="w-full max-w-md bg-white p-8 rounded-xl shadow-md">

        <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">
          Create Account
        </h2>

        <div className="space-y-4">
          <div className="flex gap-3">
            <TextField
              label="First Name"
              fullWidth
              required
              onChange={(e) => setFirstName(e.target.value)}
              value={firstName}
            />
            <TextField
              label="Last Name"
              fullWidth
              required
              onChange={(e) => setLastName(e.target.value)}
              value={lastName}
            />
          </div>

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

          <div className="flex justify-center mt-2">
            <GoogleLogin
              onSuccess={handleGoogleSucecess}
              onError={() => toast.error("Google sign-up failed")}
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
            onClick={handleRegister}
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
            Register
          </Button>
        </div>

        <p className="text-center text-sm text-gray-600 mt-5">
          Already have an account?
          <span onClick={() => navigate('/login')} className="text-[#9155FD] ml-1 cursor-pointer font-medium">
            Login
          </span>
        </p>



      </div>
    </div>
  );
};

export default Register;
