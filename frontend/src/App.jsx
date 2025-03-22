// import { BrowserRouter as Router, Routes, Route,Lo } from "react-router-dom";
// import React from "react";
// import SubscriptionCardDisplay from "./pages/Subscription/SubscriptionCardDisplay";
// import Navbar from "./Component/Navbar";
// import { useTranslation } from 'react-i18next';
// function App() {
//   const { t, i18n } = useTranslation();
//   const location = useLocation();

//   useEffect(() => {
//     document.documentElement.dir = i18n.language === 'ar' ? 'rtl' : 'ltr';
//   }, [i18n.language]);
//   return (
//     <>

//      {location.pathname !== "/Login" && location.pathname !== "/dashboard" && <Navbar />}
//       <Routes>
//       <Route path="/" element={<SubscriptionCardDisplay/>} />

//       </Routes>
//       {/* {location.pathname !== "/Login" && location.pathname !== "/dashboard" && <Footer />} */}
//     </>
//  );
// }

// export default App;
//the emport of our site
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import React from "react";
import SubscriptionCardDisplay from "./pages/Subscription/SubscriptionCardDisplay";
import Navbar from "./Component/Navbar";
import Footer from "./Component/Footer";
import { useTranslation } from "react-i18next";
import SubscriptionCardForm from "./pages/Subscription/test";
import AboutUs from "../src/pages/AboutUs";
import Home from "./pages/Home";
import SidebarDoners from "./Component/AdminDashbord/SidebarDoners";
import ArticlesPage from "./pages/ArticlesPage";
import ContactUs from "./pages/contact";
import Login from "./pages/LogIn";
import Signup from "./pages/SignUp";
import UserProfile from "./pages/UserProfile";
import Overview from "./Component/AdminDashbord/overview";
import FormDetails from "./Component/AdminDashbord/ArticalCards";
import PaymentPage from "./pages/Subscription/Payment";
import AForm from "./pages/detail/AForm";
function App() {
  const { t } = useTranslation();
  const location = useLocation();

  return (
    <>
      {/*Display the navbar in the right component  DONT TOUCH*/}
      {![
        "/login",
        "/dashboard",
        "/signup",
        "/subformDash",
        "/articlescardsDash",
      ].includes(location.pathname) && <Navbar />}

      {/* عرض SidebarDoners في صفحات الداشبورد */}
      {["/dashboard", "/articlescardsDash", "/subformDash"].includes(
        location.pathname
      ) && <SidebarDoners />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route
          path="/SubscriptionCardDisplay"
          element={<SubscriptionCardDisplay />}
        />
        <Route
          path="/SubscriptionCardForm"
          element={<SubscriptionCardForm />}
        />
        <Route path="login" element={<Login />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/userprofile" element={<UserProfile />} />
        <Route path="/payment" element={<PaymentPage />} />
        <Route path="/dashboard" element={<Overview />} />
        <Route path="/articlescardsDash" element={<FormDetails />} />
        <Route path="/subformDash" element={<SubscriptionCardForm />} />
        <Route path="/" element={<Home />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/aform" element={<AForm />} />
        <Route
          path="/SubscriptionCardDisplay"
          element={<SubscriptionCardDisplay />}
        />
        <Route
          path="/SubscriptionCardForm"
          element={<SubscriptionCardForm />}
        />
        <Route path="login" element={<Login />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/userprofile" element={<UserProfile />} />
        <Route path="/payment" element={<PaymentPage />} />
        <Route path="/ArticlesPage" element={<ArticlesPage />} />
      </Routes>
      {/*Displat the footer in the right component DONT TOUCH*/}
      {![
        "/login",
        "/signup",
        "/dashboard",
        "/subformDash",
        "/articlescardsDash",
      ].includes(location.pathname) && <Footer />}
    </>
  );
}

export default App;