import { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";

export default function ContactUs() {
  const [formdata, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formdata, [e.target.name]: e.target.value });
  };

  const handlesubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
        await axios.post(
        "http://localhost:5000/app/message",
        formdata
      );
      Swal.fire({
        title: "Sent successfully!",
        text: "We will contact you soon",
        icon: "success",
        confirmButtonColor: "#61090b",
      });
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error(error);
      Swal.fire({
        title: "Error",
        text: "Failed to send message, please try again",
        icon: "error",
        confirmButtonColor: "#61090b",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <div className="bg-white rounded-lg shadow-xl overflow-hidden">
          <div className="grid md:grid-cols-2">
            {/* Contact Info Section */}
            <div
              className="bg-gradient-to-br from-red-900 to-red-800"
              style={{ backgroundColor: "#61090b" }}
            >
              <div className="p-8 md:p-12 text-white">
                <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
                <p className="mb-8 opacity-90">
                  We're here to answer your questions. You can contact us via
                  the form below or the contact information below.
                </p>

                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="mt-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    </div>
                    <div className="mr-4">
                      <h3 className="text-lg font-semibold">address</h3>
                      <p className="mt-1 opacity-90">
                       jordan
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="mt-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <div className="mr-4">
                      <h3 className="text-lg font-semibold">Gmail</h3>
                      <p className="mt-1 opacity-90">info@example.com</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="mt-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                    </div>
                    <div className="mr-4">
                      <h3 className="text-lg font-semibold">Phone</h3>
                      <p className="mt-1 opacity-90">+966 12 345 6789</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form Section */}
            <div className="p-8 md:p-12">
              <h2 className="text-3xl font-bold mb-6 text-gray-900">
                Send Message
              </h2>

              <form onSubmit={handlesubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formdata.name}
                    onChange={handleChange}
                    className="block w-full rounded-md border border-gray-300 px-4 py-3 focus:border-red-900 focus:ring-red-900 outline-none transition duration-150"
                    style={{ borderColor: formdata.name ? "#61090b" : "" }}
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formdata.email}
                    onChange={handleChange}
                    className="block w-full rounded-md border border-gray-300 px-4 py-3 focus:border-red-900 focus:ring-red-900 outline-none transition duration-150"
                    style={{ borderColor: formdata.email ? "#61090b" : "" }}
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    value={formdata.message}
                    onChange={handleChange}
                    rows={5}
                    className="block w-full rounded-md border border-gray-300 px-4 py-3 focus:border-red-900 focus:ring-red-900 outline-none transition duration-150"
                    style={{ borderColor: formdata.message ? "#61090b" : "" }}
                  />
                </div>

                <div>
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full rounded-md px-4 py-3 text-white font-medium transition duration-150 flex items-center justify-center"
                    style={{ backgroundColor: "#61090b" }}
                  >
                    {loading ? (
                      <svg
                        className="animate-spin h-5 w-5 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                    ) : (
                      "Send Message"
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
