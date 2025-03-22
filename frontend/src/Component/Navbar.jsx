// import React, { useState } from "react";
// import "../App";
// import { useTranslation } from "react-i18next";
// const Navbar = () => {
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const { i18n } = useTranslation();
//   const toggleMobileMenu = () => {
//     setIsMobileMenuOpen(!isMobileMenuOpen);
//   };
//   const changeLanguage = (lng) => {
//     i18n.changeLanguage(lng);
//     document.documentElement.dir = lng === 'ar' ? 'rtl' : 'ltr';
//   };
//   return (
//     <>
//       {/* Top Red Banner with Logo and Search */}
//       <div className="w-full bg-screen-red text-white py-3">
//         <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
//           {/* Logo */}
//           <div className="flex items-center">
//             <div className="text-6xl font-bold tracking-tighter transition-transform duration-300 hover:scale-105 hover:text-gray-200 cursor-pointer">
//               <span className="font-extrabold">CRIME</span>
//               <span className="font-light">GAZETTE</span>
//             </div>
//           </div>

//           {/* Right Side */}
//           <div className="flex items-center mt-3 md:mt-0">
//             {/* Auth Links */}
//             <div className="hidden md:flex space-x-4 text-md font-semibold mr-6">
//               <a
//                 href="signup"
//                 className="hover:bg-screen-red transition-all duration-300 px-4 py-1 rounded"
//               >
//                 REGISTER
//               </a>
//               <span>|</span>
//               <a
//                 href="#"
//                 className="hover:bg-screen-red transition-all duration-300 px-4 py-1 rounded"
//               >
//                 SUBSCRIBE
//               </a>
//               <span>|</span>
//               <a
//                 href="login"
//                 className="flex items-center hover:bg-screen-red transition-all duration-300 px-4 py-1 rounded"
//               >
//                 SIGN IN
//                 <svg
//                   className="ml-2 w-5 h-5"
//                   fill="currentColor"
//                   viewBox="0 0 24 24"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth="2"
//                     d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
//                   ></path>
//                 </svg>
//               </a>
//             </div>

//             {/* Search Bar */}
//             <div className="relative ml-4">
//               <input
//                 type="text"
//                 placeholder="Search our site"
//                 className="px-4 py-2 text-md bg-white text-black w-64 md:w-80 border border-gray-300 rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-screen-red"
//               />
//               <button className="absolute right-0 top-0 h-full px-3 bg-gray-200 rounded-r-md">
//                 <svg
//                   className="w-5 h-5 text-gray-600"
//                   fill="none"
//                   stroke="currentColor"
//                   viewBox="0 0 24 24"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth="2"
//                     d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
//                   ></path>
//                 </svg>
//               </button>
//             </div>
//    {/* Language Toggle Buttons */}
//             <div className="flex space-x-2">
//               <button
//                 onClick={() => changeLanguage("en")}
//                 className="px-3 py-1 bg-white text-screen-red font-bold rounded transition-all duration-300 hover:bg-gray-100"
//               >
//                 English
//               </button>
//               <button
//                 onClick={() => changeLanguage("ar")}
//                 className="px-3 py-1 bg-white text-screen-red font-bold rounded transition-all duration-300 hover:bg-gray-100"
//               >
//                 العربية
//               </button>
//             </div>


//           </div>
//         </div>
//       </div>

//       {/* Bottom Black Navigation Menu */}
//       <div className="w-full bg-screen-dark text-white">
//         <div className="container mx-auto px-4">
//           {/* Mobile Menu Button */}
//           <div className="md:hidden flex justify-between items-center py-3">
//             <button className="p-2" onClick={toggleMobileMenu}>
//               <svg
//                 className="w-6 h-6"
//                 fill="none"
//                 stroke="currentColor"
//                 viewBox="0 0 24 24"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="2"
//                   d="M4 6h16M4 12h16M4 18h16"
//                 ></path>
//               </svg>
//             </button>
//           </div>

//           {/* Mobile Menu */}
//           <div
//             className={`md:hidden py-2 ${
//               isMobileMenuOpen ? "block" : "hidden"
//             }`}
//           >
//             <a
//               href="#"
//               className="block py-2 px-6 text-lg hover:bg-screen-red transition-all duration-300"
//             >
//               NEWS
//             </a>
//             <a
//               href="#"
//               className="block py-2 px-6 text-lg hover:bg-screen-red transition-all duration-300"
//             >
//               REVIEWS
//             </a>
//             <a
//               href="#"
//               className="block py-2 px-6 text-lg hover:bg-screen-red transition-all duration-300"
//             >
//               FEATURES
//             </a>
//             <a
//               href="#"
//               className="block py-2 px-6 text-lg hover:bg-screen-red transition-all duration-300"
//             >
//               AWARDS
//             </a>
//             <a
//               href="#"
//               className="block py-2 px-6 text-lg hover:bg-screen-red transition-all duration-300"
//             >
//               MORE FROM »
//             </a>
//           </div>

//           {/* Desktop Navigation */}
//           <nav className="hidden md:flex flex-wrap items-center justify-center py-2">
//             <a
//               href="#"
//               className="relative px-5 py-3 text-lg font-semibold group"
//             >
//               <span className="relative inline-block px-2 py-1 transition-all duration-300 bg-transparent rounded group-hover:bg-[#b21e23] group-hover:scale-110">
//                 HOME
//               </span>
//             </a>

//             <a
//               href="#"
//               className="relative px-5 py-3 text-lg font-semibold group"
//             >
//               <span className="relative inline-block px-2 py-1 transition-all duration-300 bg-transparent rounded group-hover:bg-[#b21e23] group-hover:scale-110">
//                 NEWS
//               </span>
//             </a>

//             <a
//               href="#"
//               className="relative px-5 py-3 text-lg font-semibold group"
//             >
//               <span className="relative inline-block px-2 py-1 transition-all duration-300 bg-transparent rounded group-hover:bg-[#b21e23] group-hover:scale-110">
//                 REVIEWS
//               </span>
//             </a>

//             <a
//               href="#"
//               className="relative px-5 py-3 text-lg font-semibold group"
//             >
//               <span className="relative inline-block px-2 py-1 transition-all duration-300 bg-transparent rounded group-hover:bg-[#b21e23] group-hover:scale-110">
//                 FEATURES
//               </span>
//             </a>

//             <a
//               href="#"
//               className="relative px-5 py-3 text-lg font-semibold group"
//             >
//               <span className="relative inline-block px-2 py-1 transition-all duration-300 bg-transparent rounded group-hover:bg-[#b21e23] group-hover:scale-110">
//                 AWARDS
//               </span>
//             </a>

//             <a
//               href="#"
//               className="relative px-5 py-3 text-lg font-semibold group"
//             >
//               <span className="relative inline-block px-2 py-1 transition-all duration-300 bg-transparent rounded group-hover:bg-[#b21e23] group-hover:scale-110">
//                 MORE FROM »
//               </span>
//             </a>
//           </nav>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Navbar;
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Cookies from "js-cookie";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();
  const { i18n } = useTranslation();

  // التحقق من التوكن في الـ cookies عند تحميل الصفحة
  useEffect(() => {
    const token = Cookies.get("token");
    setIsLoggedIn(!!token); // إذا كان هناك توكن، المستخدم مسجل الدخول
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    document.documentElement.dir = lng === "ar" ? "rtl" : "ltr";
  };

  // دالة تسجيل الخروج
  const handleLogout = () => {
    Cookies.remove("token"); // حذف التوكن من الـ cookies
    Cookies.remove("user_id"); // حذف user_id إن وجد
    setIsLoggedIn(false);
    navigate("/login"); // إعادة التوجيه إلى صفحة تسجيل الدخول
  };

  return (
    <>
      {/* Top Red Banner with Logo and Search */}
      <div className="w-full bg-screen-red text-white py-3">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <Link
              to="/"
              className="text-6xl font-bold tracking-tighter transition-transform duration-300 hover:scale-105 hover:text-gray-200 cursor-pointer"
            >
              <span className="font-extrabold">CRIME</span>
              <span className="font-light">GAZETTE</span>
            </Link>
          </div>

          {/* Right Side */}
          <div className="flex items-center mt-3 md:mt-0">
            {/* Auth Links */}
            <div className="hidden md:flex space-x-4 text-md font-semibold mr-6">
              {isLoggedIn ? (
                <button
                  onClick={handleLogout}
                  className="hover:bg-screen-red transition-all duration-300 px-4 py-1 rounded"
                >
                  LOGOUT
                </button>
              ) : (
                <>
                  <Link
                    to="/signup"
                    className="hover:bg-screen-red transition-all duration-300 px-4 py-1 rounded"
                  >
                    REGISTER
                  </Link>
                  <span>|</span>
                  <Link
                    to="/subscribe"
                    className="hover:bg-screen-red transition-all duration-300 px-4 py-1 rounded"
                  >
                    SUBSCRIBE
                  </Link>
                  <span>|</span>
                  <Link
                    to="/login"
                    className="flex items-center hover:bg-screen-red transition-all duration-300 px-4 py-1 rounded"
                  >
                    SIGN IN
                    <svg
                      className="ml-2 w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      ></path>
                    </svg>
                  </Link>
                </>
              )}
            </div>

            {/* Language Toggle Buttons */}
            <div className="flex space-x-2">
              <button
                onClick={() => changeLanguage("en")}
                className="px-3 py-1 bg-white text-screen-red font-bold rounded transition-all duration-300 hover:bg-gray-100"
              >
                English
              </button>
              <button
                onClick={() => changeLanguage("ar")}
                className="px-3 py-1 bg-white text-screen-red font-bold rounded transition-all duration-300 hover:bg-gray-100"
              >
                العربية
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Black Navigation Menu */}
      <div className="w-full bg-screen-dark text-white">
        <div className="container mx-auto px-4">
          {/* Mobile Menu Button */}
          <div className="md:hidden flex justify-between items-center py-3">
            <button className="p-2" onClick={toggleMobileMenu}>
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </button>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex flex-wrap items-center justify-center py-2">
            <Link
              to="/"
              className="relative px-5 py-3 text-lg font-semibold group"
            >
              <span className="relative inline-block px-2 py-1 transition-all duration-300 bg-transparent rounded group-hover:bg-[#b21e23] group-hover:scale-110">
                HOME
              </span>
            </Link>

            <Link
              to="/ArticlesPage"
              className="relative px-5 py-3 text-lg font-semibold group"
            >
              <span className="relative inline-block px-2 py-1 transition-all duration-300 bg-transparent rounded group-hover:bg-[#b21e23] group-hover:scale-110">
                NEWS
              </span>
            </Link>

            <Link
              to="/AboutUs"
              className="relative px-5 py-3 text-lg font-semibold group"
            >
              <span className="relative inline-block px-2 py-1 transition-all duration-300 bg-transparent rounded group-hover:bg-[#b21e23] group-hover:scale-110">
                ABOUT US
              </span>
            </Link>

            <Link
              to="/contact"
              className="relative px-5 py-3 text-lg font-semibold group"
            >
              <span className="relative inline-block px-2 py-1 transition-all duration-300 bg-transparent rounded group-hover:bg-[#b21e23] group-hover:scale-110">
                CONTACT US
              </span>
            </Link>

            <Link
              to="/more"
              className="relative px-5 py-3 text-lg font-semibold group"
            >
              <span className="relative inline-block px-2 py-1 transition-all duration-300 bg-transparent rounded group-hover:bg-[#b21e23] group-hover:scale-110">
                MORE FROM »
              </span>
            </Link>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Navbar;
