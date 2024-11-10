import React, { useEffect, useState } from "react";
import {
  AlertErrorMessage,
  AuthButton,
  Footer,
  Header,
} from "../../Components";
import { useDispatch, useSelector } from "react-redux";
import { get, storeInLocalStorage } from "../../Services/LocalStorageService";
import { useNavigate } from "react-router";
import axiosClient from "../../AxiosClient";
import { loginSuccess } from "../../Redux/SliceAuthDoctor";
import { Link } from "react-router-dom";

const Login = () => {
  document.title = "Doctors Connexion";

  const doctorData = useSelector((state) => state.AuthDoctor);
  const navigate = useNavigate();
  console.log(doctorData);
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    if (doctorData.isAuthenticated && get("TOKEN_DOCTOR")) {
      navigate("/doctor/dashboard");
    }
  }, [navigate, doctorData.isAuthenticated]);

  const [DataForm, setDataForm] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");

  const HandleChangeData = (ev) => {
    const { name, value } = ev.target;
    setDataForm({ ...DataForm, [name]: value });
  };

  const HandleSubmit = (e) => {
    setLoading(true);
    e.preventDefault();
    axiosClient
      .post("/doctor/login", DataForm)
      .then(({ data }) => {
        console.log({ data });
        dispatch(loginSuccess(data));

        storeInLocalStorage("TOKEN_DOCTOR", data.token);
        setLoading(false);
        navigate("/doctor/dashboard");
      })
      .catch((err) => {
        setLoading(false);
        if (err.response && err.response.status === 422) {
          setError(err.response.data.message);
          console.log(err);
        } else {
          console.log(err);
        }
      });
  };

  return (
    <div className="min-h-screen flex flex-col bg-cover bg-center bg-no-repeat" 
        style={{ backgroundImage: "url('https://img.freepik.com/free-photo/high-angle-doctor-holding-patient-s-hand_23-2149941457.jpg?t=st=1731052811~exp=1731056411~hmac=46354da0a7ac6821bdfa03517173e707c8153567d72d56f02ccfa49fc85a909c&w=740')" }}>
      <Header />
      <main className="flex-grow flex justify-center items-center px-4 py-12 ">
        <div className="w-full max-w-md bg-white rounded-lg shadow-xl overflow-hidden">
          <div className="p-6 sm:p-8">
            <div className="text-center">
              <img src="/img/logo.png" className="w-32 mx-auto mb-4" alt="DocAppoint Logo" />
              <h1 className="text-2xl font-semibold text-gray-900 mb-2">
                Welcome to DocAppoint
              </h1>
              <p className="text-sm text-gray-600 mb-6">
                Log in to your DocAppoint account to manage your appointments
              </p>
            </div>
            {error && <AlertErrorMessage message={error} />}
            <form className="space-y-4" onSubmit={HandleSubmit}>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="mt-1 block w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-md text-sm shadow-sm placeholder-gray-400
                            focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                  placeholder="exemple@gmail.com"
                  required
                  onChange={HandleChangeData}
                />
              </div>
              <div>
                <label
                  htmlFor="Password"
                  className="block text-sm font-medium text-gray-700"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="Password"
                  name="password"
                  className="mt-1 block w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-md text-sm shadow-sm placeholder-gray-400
                            focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                  placeholder="•••••••••"
                  required
                  onChange={HandleChangeData}
                />
              </div>
              <div className="flex items-center justify-end">
                <a href="/forgot-password" className="text-sm text-blue-600 hover:underline">
                  Forgot your password?
                </a>
              </div>
              <div>
                <AuthButton Text="Log in" Loading={loading} />
              </div>
            </form>
            <div className="mt-6 text-center">
              <p className="text-sm text-gray-600">
                Don't have an account?{" "}
                <Link to="doctor/signup" className="font-medium text-blue-600 hover:underline">
                  Sign up
                </Link>
              </p>
            </div>
            <div className="mt-2 text-center">
              <Link to="/doctor/login" className="text-sm font-medium text-blue-600 hover:underline">
                Are you a doctor?
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer colorText="black" />
    </div>
  );
};


export default Login;
