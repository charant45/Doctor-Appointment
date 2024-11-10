import { ListPatient, PageNotfound } from "../Components";
import AuthGuard from "../Middleware/AuthGuard";
import AppointmentGuard from "../Middleware/AppointmentGuard";
import {
  SearchDoctors,
  Home,
  Login,
  Signup,
  DocotrDashboard,
  DoctorHistorique,
  DoctorSettings,
  UserSettings,
  UserProfile,
  UserChangePassword,
  BookingAppointment,
  DoctorsLogin,
  DoctorsSignup,
  AuthAdmin,
  DashboardAdmin,
  DoctorsList,
  NoVerifiedDoctors,
  UserVerifyEmail,
  DoctorAppointment,
  DoctorsVerificationEmail,
  DoctorsConfirmation,
  Aboutus,
  ContactUs,
  DoctorPage,
} from "../Pages";
import AuthDoctorGuard from "../Middleware/AuthDoctorGuard";
import GuardAdmin from "../Middleware/GuardAdmin";
import VerificationEmailGuard from "../Middleware/VerificationEmailGuard";
import DoctorEmailVerification from "../Middleware/DoctorEmailVerification";
import DoctorsConfirmationGuard from "../Middleware/DoctorsConfirmationGuard";

const { createBrowserRouter } = require("react-router-dom");

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <PageNotfound />,
    element: <Home />,
  },
  {
    path: "/About",
    element: <Aboutus />,
  },
  {
    path: "/Contact",
    element: <ContactUs />,
  },
  {
    path: "/doctor/View_Profile/:id",
    element: <DoctorPage />,
  },
  {
    path: "/recherche",
    element: <SearchDoctors />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/bookingappointment/:id",
    element: (
      <AppointmentGuard>
        <BookingAppointment />
      </AppointmentGuard>
    ),
  },

  // Users Router

  {
    path: "/user/verifeyemail",
    element: (
      <VerificationEmailGuard>
        <UserVerifyEmail />
      </VerificationEmailGuard>
    ),
  },

  {
    path: "/user/profile",
    element: (
      <AuthGuard>
        <UserProfile />
      </AuthGuard>
    ),
  },

  {
    path: "/user/settings",
    element: (
      <AuthGuard>
        <UserSettings />
      </AuthGuard>
    ),
  },
  {
    path: "/user/changepassword",
    element: (
      <AuthGuard>
        <UserChangePassword />
      </AuthGuard>
    ),
  },
  //Doctors Router
  {
    path: "/doctor/login",
    element: <DoctorsLogin />,
  },
  {
    path: "/doctor/signup",
    element: <DoctorsSignup />,
  },

  {
    path: "/doctor/dashboard",
    element: (
      <AuthDoctorGuard>
        <DocotrDashboard />
      </AuthDoctorGuard>
    ),
  },
  {
    path: "/doctor/appointment",
    element: (
      <AuthDoctorGuard>
        <DoctorAppointment />
      </AuthDoctorGuard>
    ),
  },
  {
    path: "/doctor/historique",
    element: (
      <AuthDoctorGuard>
        <DoctorHistorique />
      </AuthDoctorGuard>
    ),
  },
  {
    path: "/doctor/settings",
    element: (
      <AuthDoctorGuard>
        <DoctorSettings />
      </AuthDoctorGuard>
    ),
  },
  {
    path: "/doctor/verifeyemail",
    element: (
      <DoctorEmailVerification>
        <DoctorsVerificationEmail />
      </DoctorEmailVerification>
    ),
  },
  {
    path: "/doctor/confirmation",
    element: (
      <DoctorsConfirmationGuard>
        <DoctorsConfirmation />
      </DoctorsConfirmationGuard>
    ),
  },

  // ADMIN ROUTE

  {
    path: "/admin/login",
    element: <AuthAdmin />,
  },
  {
    path: "/admin/dashboard",
    element: (
      <GuardAdmin>
        <DashboardAdmin />
      </GuardAdmin>
    ),
  },
  {
    path: "/admin/doctors",
    element: (
      <GuardAdmin>
        <DoctorsList />
      </GuardAdmin>
    ),
  },
  {
    path: "/admin/doctors/noverified",
    element: (
      <GuardAdmin>
        <NoVerifiedDoctors />
      </GuardAdmin>
    ),
  },

  {
    path: "/admin/patient",
    element: (
      <GuardAdmin>
        <ListPatient />
      </GuardAdmin>
    ),
  },
]);

export default router;
