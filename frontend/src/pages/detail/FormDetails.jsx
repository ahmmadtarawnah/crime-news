import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import jsPDF from "jspdf";

function FormDetails() {
  const [formData, setFormData] = useState({});
  const [files, setFiles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    // Retrieve data from session storage
    const storedFormData = sessionStorage.getItem("formData");
    const storedFiles = sessionStorage.getItem("files");
    
    if (storedFormData) {
      setFormData(JSON.parse(storedFormData));
    }
    
    if (storedFiles) {
      setFiles(JSON.parse(storedFiles));
    }
    
    // Simulate loading
    setTimeout(() => {
      setIsLoading(false);
    }, 800);
  }, []);

  const handleBackToForm = () => {
    navigate("/");
  };
const handleShare = () => {
  const currentUrl = window.location.href;
  const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(currentUrl)}`;
  window.open(whatsappUrl, "_blank");
};
const handleExportPDF = () => {
  const doc = new jsPDF();
  doc.html(document.querySelector("#caseDetails"), {
    callback: (doc) => {
      doc.save("case_details.pdf");
    },
    x: 10,
    y: 10,
  });
};
  const formatDate = (dateString) => {
    if (!dateString) return "";
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    }).format(date);
  };

  const getCaseStatusBadge = (status) => {
    const statusMap = {
      "open": "bg-blue-500 text-white",
      "solved": "bg-green-500 text-white",
      "cold": "bg-gray-500 text-white",
      "closed": "bg-purple-500 text-white"
    };
    
    return statusMap[status] || "bg-gray-500 text-white";
  };

  const getRiskBadge = (risk) => {
    const riskMap = {
      "none": "bg-green-500 text-white",
      "low": "bg-yellow-500 text-white",
      "moderate": "bg-orange-500 text-white",
      "high": "bg-red-500 text-white"
    };
    
    return riskMap[risk] || "bg-gray-500 text-white";
  };

  const getCrimeTypeBadge = (type) => {
    const typeMap = {
      "murder": "bg-red-500 text-white",
      "suicide": "bg-gray-500 text-white",
      "assault": "bg-orange-500 text-white",
      "robbery": "bg-yellow-500 text-white",
      "kidnapping": "bg-purple-500 text-white",
      "other": "bg-blue-500 text-white"
    };
    
    return typeMap[type] || "bg-gray-500 text-white";
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-[#b21e23] mx-auto"></div>
          <p className="mt-4 text-white text-xl">Loading Case Details...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Top Navigation Bar */}

      {/* Case Header */}
      <header className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div>
              <h1 className="text-4xl font-bold tracking-tight">
                {formData.title || "Untitled Case"}
              </h1>
              <div className="mt-3 flex flex-wrap gap-2">
                <span
                  className={`px-3 py-1 rounded-full text-xs font-semibold ${getCrimeTypeBadge(
                    formData.crimeType
                  )}`}
                >
                  {formData.crimeType || "Unknown Type"}
                </span>
                <span
                  className={`px-3 py-1 rounded-full text-xs font-semibold ${getCaseStatusBadge(
                    formData.caseStatus
                  )}`}
                >
                  {formData.caseStatus === "open"
                    ? "Open Case"
                    : formData.caseStatus === "solved"
                    ? "Solved"
                    : formData.caseStatus === "cold"
                    ? "Cold Case"
                    : formData.caseStatus === "closed"
                    ? "Closed"
                    : "Unknown Status"}
                </span>
                <span
                  className={`px-3 py-1 rounded-full text-xs font-semibold ${getRiskBadge(
                    formData.publicRisk
                  )}`}
                >
                  {formData.publicRisk === "none"
                    ? "No Public Risk"
                    : formData.publicRisk === "low"
                    ? "Low Risk"
                    : formData.publicRisk === "moderate"
                    ? "Moderate Risk"
                    : formData.publicRisk === "high"
                    ? "High Risk"
                    : "Unknown Risk"}
                </span>
              </div>
            </div>
            <div className="mt-4 md:mt-0 flex space-x-4">
              <button
                onClick={handleShare}
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md shadow flex items-center"
              >
                <svg
                  className="w-5 h-5 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
                  />
                </svg>
                Share
              </button>
              <button className="bg-white hover:bg-gray-100 text-gray-800 px-4 py-2 rounded-md shadow flex items-center">
                <svg
                  className="w-5 h-5 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"
                  />
                </svg>
                Print
              </button>
            </div>
          </div>

          <div className="mt-6 flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-6 text-sm text-gray-300">
            <div className="flex items-center">
              <svg
                className="w-5 h-5 opacity-75 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                ></path>
              </svg>
              <span>{formatDate(formData.date)}</span>
            </div>
            <div className="flex items-center">
              <svg
                className="w-5 h-5 opacity-75 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                ></path>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                ></path>
              </svg>
              <span>{formData.location}</span>
            </div>
            <div className="flex items-center">
              <svg
                className="w-5 h-5 opacity-75 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                ></path>
              </svg>
              <span>Lead: {formData.officerInCharge || "Unassigned"}</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Column - Main Content */}
          <div className="lg:w-2/3">
            {/* Case Description */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-6 border-b border-gray-200 pb-2">
                The Story
              </h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 leading-relaxed text-lg whitespace-pre-line">
                  {formData.description || "No description provided."}
                </p>
              </div>
            </section>

            {/* Case Details Tabs */}
            <div className="mb-12">
              <div className="border-b border-gray-200">
                <nav className="-mb-px flex space-x-8">
                  <a
                    href="#"
                    className="border-[#b21e23] text-[#b21e23] whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm"
                  >
                    Case Details
                  </a>
                  <a
                    href="#"
                    className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm"
                  >
                    Evidence
                  </a>
                  <a
                    href="#"
                    className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm"
                  >
                    Timeline
                  </a>
                  <a
                    href="#"
                    className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm"
                  >
                    Files
                  </a>
                </nav>
              </div>

              <div className="mt-8 grid md:grid-cols-2 gap-6">
                {/* Victim Information */}
                <div className="bg-white shadow-sm rounded-lg overflow-hidden">
                  <div className="px-6 py-4 bg-gray-50 border-b">
                    <h3 className="text-lg font-semibold text-gray-800">
                      Victim Information
                    </h3>
                  </div>
                  <div className="p-6">
                    <p className="text-gray-700 whitespace-pre-line">
                      {formData.victimInfo || "No victim information provided."}
                    </p>
                  </div>
                </div>

                {/* Suspect Information */}
                {formData.crimeType !== "suicide" && (
                  <div className="bg-white shadow-sm rounded-lg overflow-hidden">
                    <div className="px-6 py-4 bg-gray-50 border-b">
                      <h3 className="text-lg font-semibold text-gray-800">
                        Suspect Information
                      </h3>
                    </div>
                    <div className="p-6">
                      <p className="text-gray-700 whitespace-pre-line">
                        {formData.suspectInfo ||
                          "No suspect information provided."}
                      </p>
                    </div>
                  </div>
                )}

                {/* Suicide Details */}
                {formData.crimeType === "suicide" && (
                  <div className="bg-white shadow-sm rounded-lg overflow-hidden">
                    <div className="px-6 py-4 bg-gray-50 border-b">
                      <h3 className="text-lg font-semibold text-gray-800">
                        Suicide Details
                      </h3>
                    </div>
                    <div className="p-6">
                      <p className="text-gray-700 whitespace-pre-line">
                        {formData.suicideDetails || "No details provided."}
                      </p>
                    </div>
                  </div>
                )}

                {/* Weapons Used */}
                <div className="bg-white shadow-sm rounded-lg overflow-hidden">
                  <div className="px-6 py-4 bg-gray-50 border-b">
                    <h3 className="text-lg font-semibold text-gray-800">
                      Weapons/Method Used
                    </h3>
                  </div>
                  <div className="p-6">
                    <p className="text-gray-700">
                      {formData.weaponsUsed ||
                        "No weapon information provided."}
                    </p>
                  </div>
                </div>

                {/* Witness Reports */}
                <div className="bg-white shadow-sm rounded-lg overflow-hidden">
                  <div className="px-6 py-4 bg-gray-50 border-b">
                    <h3 className="text-lg font-semibold text-gray-800">
                      Witness Statements
                    </h3>
                  </div>
                  <div className="p-6">
                    <p className="text-gray-700 whitespace-pre-line">
                      {formData.witnessReports ||
                        "No witness statements provided."}
                    </p>
                  </div>
                </div>

                {/* Evidence Notes */}
                <div className="bg-white shadow-sm rounded-lg overflow-hidden">
                  <div className="px-6 py-4 bg-gray-50 border-b">
                    <h3 className="text-lg font-semibold text-gray-800">
                      Evidence Notes
                    </h3>
                  </div>
                  <div className="p-6">
                    <p className="text-gray-700 whitespace-pre-line">
                      {formData.evidenceNotes || "No evidence notes provided."}
                    </p>
                  </div>
                </div>

                {/* Related Cases */}
                <div className="bg-white shadow-sm rounded-lg overflow-hidden">
                  <div className="px-6 py-4 bg-gray-50 border-b">
                    <h3 className="text-lg font-semibold text-gray-800">
                      Related Cases
                    </h3>
                  </div>
                  <div className="p-6">
                    <p className="text-gray-700 whitespace-pre-line">
                      {formData.relatedCases ||
                        "No related cases information provided."}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Case Timeline */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-6 border-b border-gray-200 pb-2">
                Case Timeline
              </h2>

              <div className="relative">
                {/* Timeline Line */}
                <div className="absolute left-0 md:left-4 top-0 h-full w-0.5 bg-gray-200"></div>

                {/* Timeline Item 1 */}
                <div className="relative pl-8 md:pl-12 pb-8">
                  <div className="absolute left-0 md:left-4 mt-1.5">
                    <div className="w-8 h-8 bg-[#b21e23] rounded-full flex items-center justify-center ring-4 ring-white">
                      <svg
                        className="w-4 h-4 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                        />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <time className="text-sm font-semibold text-[#b21e23]">
                      {formatDate(formData.date) || "March 13, 2025"}
                    </time>
                    <h3 className="text-xl font-bold text-gray-800 mt-1">
                      Case Opened
                    </h3>
                    <p className="mt-2 text-gray-600 text-base">
                      Initial report filed by{" "}
                      {formData.officerInCharge || "responding officer"}. Crime
                      scene secured and preliminary investigation begins.
                    </p>
                  </div>
                </div>

                {/* Timeline Item 2 */}
                <div className="relative pl-8 md:pl-12 pb-8">
                  <div className="absolute left-0 md:left-4 mt-1.5">
                    <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center ring-4 ring-white">
                      <svg
                        className="w-4 h-4 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                        />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <time className="text-sm font-semibold text-blue-500">
                      March 10, 2025
                    </time>
                    <h3 className="text-xl font-bold text-gray-800 mt-1">
                      Evidence Collection
                    </h3>
                    <p className="mt-2 text-gray-600 text-base">
                      Forensic team collected samples from the scene. Witness
                      interviews conducted with neighbors and potential
                      witnesses.
                    </p>
                  </div>
                </div>

                {/* Timeline Item 3 */}
                <div className="relative pl-8 md:pl-12">
                  <div className="absolute left-0 md:left-4 mt-1.5">
                    <div className="w-8 h-8 bg-gray-400 rounded-full flex items-center justify-center ring-4 ring-white">
                      <svg
                        className="w-4 h-4 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                        />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <time className="text-sm font-semibold text-gray-500">
                      Today
                    </time>
                    <h3 className="text-xl font-bold text-gray-800 mt-1">
                      Case Details Added
                    </h3>
                    <p className="mt-2 text-gray-600 text-base">
                      Full case details entered into the system. Investigation
                      continues.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* File Gallery */}
            {files.length > 0 && (
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-gray-800 mb-6 border-b border-gray-200 pb-2">
                  Case Files
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                  {files.map((file, index) => (
                    <div
                      key={index}
                      className="group bg-white shadow-sm rounded-lg overflow-hidden border border-gray-200 hover:shadow-md transition-shadow"
                    >
                      <div className="aspect-w-16 aspect-h-9 bg-gray-100 flex items-center justify-center">
                        <svg
                          className="w-16 h-16 text-gray-400"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                          />
                        </svg>
                      </div>
                      <div className="p-4">
                        <h4 className="text-sm font-medium text-gray-900 truncate group-hover:text-[#b21e23]">
                          {file.name || `File ${index + 1}`}
                        </h4>
                        <p className="mt-1 text-xs text-gray-500">
                          {file.type || "Document"}
                        </p>
                        <button className="mt-3 text-xs font-medium text-[#b21e23] hover:text-[#9a1a1e] flex items-center">
                          View file
                          <svg
                            className="ml-1 w-4 h-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M14 5l7 7m0 0l-7 7m7-7H3"
                            />
                          </svg>
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}
          </div>

          {/* Right Column - Sidebar */}
          <div className="lg:w-1/3">
            {/* Case Actions */}
            <div className="bg-white shadow-sm rounded-lg overflow-hidden mb-8">
              <div className="px-6 py-4 bg-gray-50 border-b">
                <h3 className="text-lg font-semibold text-gray-800">
                  Case Actions
                </h3>
              </div>
              <div className="p-6 space-y-4">
                <button
                  onClick={handleExportPDF}
                  className="w-full py-3 bg-gray-800 hover:bg-gray-900 text-white font-semibold rounded-md shadow flex items-center justify-center"
                >
                  <svg
                    className="w-5 h-5 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                  Export Report
                </button>
              </div>
            </div>

            {/* Case Meta Information */}
            <div className="bg-white shadow-sm rounded-lg overflow-hidden mb-8">
              <div className="px-6 py-4 bg-gray-50 border-b">
                <h3 className="text-lg font-semibold text-gray-800">
                  Case Information
                </h3>
              </div>
              <div className="p-6">
                <dl className="space-y-4">
                  <div>
                    <dt className="text-sm font-medium text-gray-500">
                      Case ID
                    </dt>
                    <dd className="mt-1 text-sm text-gray-900">
                      #{Math.floor(Math.random() * 900000) + 100000}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-sm font-medium text-gray-500">
                      Status
                    </dt>
                    <dd className="mt-1 text-sm text-gray-900">
                      <span
                        className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getCaseStatusBadge(
                          formData.caseStatus
                        )}`}
                      >
                        {formData.caseStatus === "open"
                          ? "Open Case"
                          : formData.caseStatus === "solved"
                          ? "Solved"
                          : formData.caseStatus === "cold"
                          ? "Cold Case"
                          : formData.caseStatus === "closed"
                          ? "Closed"
                          : "Unknown Status"}
                      </span>
                    </dd>
                  </div>
                  <div>
                    <dt className="text-sm font-medium text-gray-500">
                      Officer In Charge
                    </dt>
                    <dd className="mt-1 text-sm text-gray-900">
                      {formData.officerInCharge || "Unassigned"}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-sm font-medium text-gray-500">
                      Public Risk
                    </dt>
                    <dd className="mt-1 text-sm text-gray-900">
                      <span
                        className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getRiskBadge(
                          formData.publicRisk
                        )}`}
                      >
                        {formData.publicRisk === "none"
                          ? "No Public Risk"
                          : formData.publicRisk === "low"
                          ? "Low Risk"
                          : formData.publicRisk === "moderate"
                          ? "Moderate Risk"
                          : formData.publicRisk === "high"
                          ? "High Risk"
                          : "Unknown Risk"}
                      </span>
                    </dd>
                  </div>
                  <div>
                    <dt className="text-sm font-medium text-gray-500">Date</dt>
                    <dd className="mt-1 text-sm text-gray-900">
                      {formatDate(formData.date) || "Unknown Date"}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-sm font-medium text-gray-500">
                      Location
                    </dt>
                    <dd className="mt-1 text-sm text-gray-900">
                      {formData.location || "Unknown Location"}
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
export default FormDetails;