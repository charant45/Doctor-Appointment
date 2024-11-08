import React, { useEffect, useState } from "react";
import { Footer, Header, AuthButton } from "../Components";
import axiosClient from "../AxiosClient.js";
import { useDispatch, useSelector } from "react-redux";
import { signUpSuccess } from "../Redux/SliceAuthUser";
import { get, storeInLocalStorage } from "../Services/LocalStorageService";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

export default function Signup() {
  document.title = "Signup";

  const userData = useSelector((state) => state.authUser);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (userData.isAuthenticated && get("TOKEN_USER")) {
      navigate("/user/profile");
    }
  }, [navigate, userData.isAuthenticated]);

  const [DataForm, setData] = useState({
    firstname: "",
    lastname: "",
    cin: "",
    email: "",
    password: "",
    password_confirmation: "",
  });

  const [error, setError] = useState({
    firstname: "",
    lastname: "",
    cin: "",
    email: "",
    password: "",
  });

  const HandleChangeData = (e) => {
    const { name, value } = e.target;
    setData({ ...DataForm, [name]: value });
  };

  const HandleSubmit = (e) => {
    setLoading(true);
    e.preventDefault();

    axiosClient
      .post("/user/register", DataForm)
      .then(({ data }) => {
        dispatch(signUpSuccess(data));
        storeInLocalStorage("TOKEN_USER", data.token);
        setLoading(false);
        navigate("/user/profile");
      })
      .catch((er) => {
        setLoading(false);
        if (er.response && er.response.status === 422) {
          setError({ ...error, ...er.response.data.errors });
        } else {
          console.log(er);
        }
      });
  };

  return (
    <div className="min-h-screen flex flex-col bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('https://img.freepik.com/free-photo/high-angle-doctor-holding-patient-s-hand_23-2149941457.jpg?t=st=1731052811~exp=1731056411~hmac=46354da0a7ac6821bdfa03517173e707c8153567d72d56f02ccfa49fc85a909c&w=740')" }}>
      <Header />
      <main className="flex-grow flex items-center justify-center px-4 py-12">
        <div className="max-w-md w-full bg-white rounded-lg shadow-xl overflow-hidden">
          <div className="p-6">
            <div className="text-center mb-6">
              <img src="/img/logo.png" alt="DocAppoint Logo" className="mx-auto w-32 mb-4" />
              <h1 className="text-2xl font-semibold text-gray-900">Welcome to DocAppoint</h1>
              <p className="text-sm text-gray-600 mt-2">
                Create your DocAppoint account to get an appointment with a doctor!
              </p>
            </div>
            <form onSubmit={HandleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="FirstName" className="block text-sm font-medium text-gray-700">
                    First Name
                  </label>
                  <input
                    type="text"
                    id="FirstName"
                    name="firstname"
                    className={`mt-1 block w-full rounded-md shadow-sm ${
                      error.firstname ? 'border-red-300' : 'border-gray-300'
                    } focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50`}
                    placeholder="First Name"
                    required
                    onChange={HandleChangeData}
                  />
                  {error.firstname && (
                    <p className="mt-1 text-xs text-red-600">{error.firstname[0]}</p>
                  )}
                </div>
                <div>
                  <label htmlFor="LastName" className="block text-sm font-medium text-gray-700">
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="LastName"
                    name="lastname"
                    className={`mt-1 block w-full rounded-md shadow-sm ${
                      error.lastname ? 'border-red-300' : 'border-gray-300'
                    } focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50`}
                    placeholder="Last Name"
                    required
                    onChange={HandleChangeData}
                  />
                  {error.lastname && (
                    <p className="mt-1 text-xs text-red-600">{error.lastname[0]}</p>
                  )}
                </div>
              </div>
              <div>
                <label htmlFor="cin" className="block text-sm font-medium text-gray-700">
                  National ID
                </label>
                <input
                  type="text"
                  id="cin"
                  name="cin"
                  className={`mt-1 block w-full rounded-md shadow-sm ${
                    error.cin ? 'border-red-300' : 'border-gray-300'
                  } focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50`}
                  placeholder="National ID"
                  required
                  onChange={HandleChangeData}
                />
                {error.cin && <p className="mt-1 text-xs text-red-600">{error.cin[0]}</p>}
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className={`mt-1 block w-full rounded-md shadow-sm ${
                    error.email ? 'border-red-300' : 'border-gray-300'
                  } focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50`}
                  placeholder="exemple@gmail.com"
                  required
                  onChange={HandleChangeData}
                />
                {error.email && <p className="mt-1 text-xs text-red-600">{error.email[0]}</p>}
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="Password" className="block text-sm font-medium text-gray-700">
                    Password
                  </label>
                  <input
                    type="password"
                    id="Password"
                    name="password"
                    className={`mt-1 block w-full rounded-md shadow-sm ${
                      error.password ? 'border-red-300' : 'border-gray-300'
                    } focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50`}
                    placeholder="•••••••••"
                    required
                    onChange={HandleChangeData}
                  />
                  {error.password && (
                    <p className="mt-1 text-xs text-red-600">{error.password[0]}</p>
                  )}
                </div>
                <div>
                  <label htmlFor="PasswordConfirmation" className="block text-sm font-medium text-gray-700">
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    id="PasswordConfirmation"
                    name="password_confirmation"
                    className="mt-1 block w-full rounded-md shadow-sm border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                    placeholder="•••••••••"
                    required
                    onChange={HandleChangeData}
                  />
                </div>
              </div>
              <div>
                <AuthButton Text="Create an account" Loading={loading} />
              </div>
            </form>
            <div className="mt-4 text-center">
              <p className="text-sm text-gray-600">
                Already have an account?{" "}
                <Link to="/login" className="font-medium text-indigo-600 hover:text-indigo-500">
                  Login
                </Link>
              </p>
            </div>
            <div className="mt-2 text-center">
              <Link to="/doctor/signup" className="text-sm font-medium text-indigo-600 hover:text-indigo-500">
                Are you a doctor?
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}