import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function AForm() {
  const [crimeType, setCrimeType] = useState("murder");
  const [formData, setFormData] = useState({
    title: "",
    date: "",
    location: "",
    description: "",
    victimInfo: "",
    suspectInfo: "",
    weaponsUsed: "",
    suicideDetails: "",
    evidenceNotes: "",
    witnessReports: "",
    officerInCharge: "",
    caseStatus: "open",
    publicRisk: "none",
    relatedCases: "",
    mediaSource: "",
  });
  const [files, setFiles] = useState([]);
  const [isUploading, setIsUploading] = useState(false);
  const [formStep, setFormStep] = useState(1);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setIsUploading(true);
    setTimeout(() => {
      setFiles(Array.from(e.target.files));
      setIsUploading(false);
    }, 1500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Save form data to session storage for simplicity
    sessionStorage.setItem("formData", JSON.stringify(formData));
    sessionStorage.setItem("files", JSON.stringify(files));
    // Navigate to details page
    navigate("/details");
  };

  const nextStep = () => {
    setFormStep(formStep + 1);
    window.scrollTo(0, 0);
  };

  const prevStep = () => {
    setFormStep(formStep - 1);
    window.scrollTo(0, 0);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black flex flex-col">
      
      <div className="flex-grow flex items-center justify-center p-4 md:p-8">
        <div className="bg-white shadow-2xl rounded-lg w-full max-w-4xl overflow-hidden">
          {/* Form Header */}
          <div className="bg-gradient-to-r from-[#b21e23] to-[#7d1517] p-6 text-white">
            <h2 className="text-3xl font-bold">Submit Crime Report</h2>
            <p className="mt-2 opacity-80">
              Your information helps keep the public informed and safe
            </p>

            {/* Progress Indicator */}
            <div className="mt-6 flex justify-between">
              <div
                className={`flex items-center ${
                  formStep >= 1 ? "text-white" : "text-gray-300"
                }`}
              >
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    formStep >= 1 ? "bg-white text-[#b21e23]" : "bg-gray-600"
                  } font-bold`}
                >
                  1
                </div>
                <span className="ml-2 hidden sm:inline">Basic Info</span>
              </div>
              <div className="flex-grow mx-2 mt-4">
                <div className="h-1 bg-gray-600">
                  <div
                    className={`h-1 bg-white transition-all duration-500`}
                    style={{ width: `${(formStep - 1) * 50}%` }}
                  ></div>
                </div>
              </div>
              <div
                className={`flex items-center ${
                  formStep >= 2 ? "text-white" : "text-gray-300"
                }`}
              >
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    formStep >= 2 ? "bg-white text-[#b21e23]" : "bg-gray-600"
                  } font-bold`}
                >
                  2
                </div>
                <span className="ml-2 hidden sm:inline">Case Details</span>
              </div>
              <div className="flex-grow mx-2 mt-4">
                <div className="h-1 bg-gray-600">
                  <div
                    className={`h-1 bg-white transition-all duration-500`}
                    style={{ width: `${(formStep - 2) * 100}%` }}
                  ></div>
                </div>
              </div>
              <div
                className={`flex items-center ${
                  formStep >= 3 ? "text-white" : "text-gray-300"
                }`}
              >
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    formStep >= 3 ? "bg-white text-[#b21e23]" : "bg-gray-600"
                  } font-bold`}
                >
                  3
                </div>
                <span className="ml-2 hidden sm:inline">Evidence</span>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="p-6 md:p-8">
            {formStep === 1 && (
              <div className="space-y-6 animate__animated animate__fadeIn">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Crime Type */}
                  <div>
                    <label
                      htmlFor="crimeType"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Crime Type <span className="text-[#b21e23]">*</span>
                    </label>
                    <select
                      id="crimeType"
                      name="crimeType"
                      value={crimeType}
                      onChange={(e) => setCrimeType(e.target.value)}
                      className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-[#b21e23] focus:border-[#b21e23]"
                    >
                      <option value="murder">Murder</option>
                      <option value="suicide">Suicide</option>
                      <option value="assault">Assault</option>
                      <option value="robbery">Robbery</option>
                      <option value="kidnapping">Kidnapping</option>
                      <option value="other">Other Violent Crime</option>
                    </select>
                  </div>

                  {/* Case Status */}
                  <div>
                    <label
                      htmlFor="caseStatus"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Case Status
                    </label>
                    <select
                      id="caseStatus"
                      name="caseStatus"
                      value={formData.caseStatus}
                      onChange={handleChange}
                      className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-[#b21e23] focus:border-[#b21e23]"
                    >
                      <option value="open">Open/Active</option>
                      <option value="solved">Solved</option>
                      <option value="cold">Cold Case</option>
                      <option value="closed">Closed</option>
                    </select>
                  </div>
                </div>

                {/* Title */}
                <div>
                  <label
                    htmlFor="title"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Headline <span className="text-[#b21e23]">*</span>
                  </label>
                  <input
                    type="text"
                    id="title"
                    name="title"
                    placeholder="Enter a descriptive headline for this case"
                    value={formData.title}
                    onChange={handleChange}
                    className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-[#b21e23] focus:border-[#b21e23]"
                    required
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Date */}
                  <div>
                    <label
                      htmlFor="date"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Incident Date <span className="text-[#b21e23]">*</span>
                    </label>
                    <input
                      type="date"
                      id="date"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-[#b21e23] focus:border-[#b21e23]"
                      required
                    />
                  </div>

                  {/* Location */}
                  <div>
                    <label
                      htmlFor="location"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Location <span className="text-[#b21e23]">*</span>
                    </label>
                    <input
                      type="text"
                      id="location"
                      name="location"
                      placeholder="City, State, Country"
                      value={formData.location}
                      onChange={handleChange}
                      className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-[#b21e23] focus:border-[#b21e23]"
                      required
                    />
                  </div>
                </div>

                {/* Description */}
                <div>
                  <label
                    htmlFor="description"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Case Summary <span className="text-[#b21e23]">*</span>
                  </label>
                  <textarea
                    id="description"
                    name="description"
                    placeholder="Provide a detailed summary of the incident"
                    value={formData.description}
                    onChange={handleChange}
                    rows="5"
                    className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-[#b21e23] focus:border-[#b21e23]"
                    required
                  />
                  <div className="mt-1 text-sm text-gray-500">
                    Include key facts about what happened and significant
                    details that would matter to the public
                  </div>
                </div>

                {/* Public Risk Assessment */}
                <div>
                  <label
                    htmlFor="publicRisk"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Public Risk Assessment
                  </label>
                  <select
                    id="publicRisk"
                    name="publicRisk"
                    value={formData.publicRisk}
                    onChange={handleChange}
                    className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-[#b21e23] focus:border-[#b21e23]"
                  >
                    <option value="none">No Ongoing Public Risk</option>
                    <option value="low">Low Risk - Suspect in Custody</option>
                    <option value="moderate">
                      Moderate Risk - Suspect at Large
                    </option>
                    <option value="high">
                      High Risk - Public Warning Issued
                    </option>
                  </select>
                </div>

                <div className="flex justify-end pt-4">
                  <button
                    type="button"
                    onClick={nextStep}
                    className="py-3 px-8 bg-[#b21e23] hover:bg-[#9c1b1f] text-white font-semibold rounded-md shadow-md transition duration-300 flex items-center"
                  >
                    Next Step <span className="ml-2">→</span>
                  </button>
                </div>
              </div>
            )}

            {formStep === 2 && (
              <div className="space-y-6 animate__animated animate__fadeIn">
                {/* Victim Info */}
                <div>
                  <label
                    htmlFor="victimInfo"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Victim Information
                  </label>
                  <textarea
                    id="victimInfo"
                    name="victimInfo"
                    placeholder="Age, gender, name (if released), and other relevant details"
                    value={formData.victimInfo}
                    onChange={handleChange}
                    rows="3"
                    className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-[#b21e23] focus:border-[#b21e23]"
                  />
                  <div className="mt-1 text-sm text-gray-500">
                    Provide only publicly available information that has been
                    cleared for release
                  </div>
                </div>

                {/* Suspect Info (Conditional Rendering) */}
                {crimeType !== "suicide" && (
                  <div>
                    <label
                      htmlFor="suspectInfo"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Suspect Information
                    </label>
                    <textarea
                      id="suspectInfo"
                      name="suspectInfo"
                      placeholder="Description, status, name (if publicly released)"
                      value={formData.suspectInfo}
                      onChange={handleChange}
                      rows="3"
                      className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-[#b21e23] focus:border-[#b21e23]"
                    />
                  </div>
                )}

                {/* Weapons Used */}
                <div>
                  <label
                    htmlFor="weaponsUsed"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Weapons/Method Used
                  </label>
                  <input
                    type="text"
                    id="weaponsUsed"
                    name="weaponsUsed"
                    placeholder="Type of weapon or method used in the crime"
                    value={formData.weaponsUsed}
                    onChange={handleChange}
                    className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-[#b21e23] focus:border-[#b21e23]"
                  />
                </div>

                {/* Suicide Details (Conditional Rendering) */}
                {crimeType === "suicide" && (
                  <div>
                    <label
                      htmlFor="suicideDetails"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Suicide Details
                    </label>
                    <textarea
                      id="suicideDetails"
                      name="suicideDetails"
                      placeholder="Method, circumstances, and any relevant details"
                      value={formData.suicideDetails || ""}
                      onChange={handleChange}
                      rows="3"
                      className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-[#b21e23] focus:border-[#b21e23]"
                    />
                    <div className="mt-1 text-sm text-gray-500">
                      Please be sensitive and avoid unnecessary graphic details
                    </div>
                  </div>
                )}

                {/* Witness Reports */}
                <div>
                  <label
                    htmlFor="witnessReports"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Witness Statements
                  </label>
                  <textarea
                    id="witnessReports"
                    name="witnessReports"
                    placeholder="Summary of witness accounts and observations"
                    value={formData.witnessReports}
                    onChange={handleChange}
                    rows="3"
                    className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-[#b21e23] focus:border-[#b21e23]"
                  />
                </div>

                {/* Related Cases */}
                <div>
                  <label
                    htmlFor="relatedCases"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Related Cases
                  </label>
                  <textarea
                    id="relatedCases"
                    name="relatedCases"
                    placeholder="Any other cases that may be connected to this incident"
                    value={formData.relatedCases}
                    onChange={handleChange}
                    rows="2"
                    className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-[#b21e23] focus:border-[#b21e23]"
                  />
                </div>

                <div className="flex justify-between pt-4">
                  <button
                    type="button"
                    onClick={prevStep}
                    className="py-3 px-8 bg-gray-600 hover:bg-gray-700 text-white font-semibold rounded-md shadow-md transition duration-300 flex items-center"
                  >
                    <span className="mr-2">←</span> Previous
                  </button>
                  <button
                    type="button"
                    onClick={nextStep}
                    className="py-3 px-8 bg-[#b21e23] hover:bg-[#9c1b1f] text-white font-semibold rounded-md shadow-md transition duration-300 flex items-center"
                  >
                    Next Step <span className="ml-2">→</span>
                  </button>
                </div>
              </div>
            )}

            {formStep === 3 && (
              <div className="space-y-6 animate__animated animate__fadeIn">
                {/* Evidence Notes */}
                <div>
                  <label
                    htmlFor="evidenceNotes"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Evidence Notes
                  </label>
                  <textarea
                    id="evidenceNotes"
                    name="evidenceNotes"
                    placeholder="Key evidence collected or discovered at the scene"
                    value={formData.evidenceNotes}
                    onChange={handleChange}
                    rows="3"
                    className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-[#b21e23] focus:border-[#b21e23]"
                  />
                </div>

                {/* Officer In Charge */}
                <div>
                  <label
                    htmlFor="officerInCharge"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Officer/Detective In Charge
                  </label>
                  <input
                    type="text"
                    id="officerInCharge"
                    name="officerInCharge"
                    placeholder="Name and rank of lead investigator (if public)"
                    value={formData.officerInCharge}
                    onChange={handleChange}
                    className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-[#b21e23] focus:border-[#b21e23]"
                  />
                </div>

                {/* Media Source */}
                <div>
                  <label
                    htmlFor="mediaSource"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Media Source
                  </label>
                  <input
                    type="text"
                    id="mediaSource"
                    name="mediaSource"
                    placeholder="Source of this information (e.g., Police Press Release, Witness Interview)"
                    value={formData.mediaSource}
                    onChange={handleChange}
                    className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-[#b21e23] focus:border-[#b21e23]"
                  />
                </div>

                {/* Upload Files */}
                <div>
                  <label
                    htmlFor="files"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Upload Files
                  </label>
                  <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                    <div className="space-y-1 text-center">
                      <svg
                        className="mx-auto h-12 w-12 text-gray-400"
                        stroke="currentColor"
                        fill="none"
                        viewBox="0 0 48 48"
                        aria-hidden="true"
                      >
                        <path
                          d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <div className="flex text-sm text-gray-600">
                        <label
                          htmlFor="files"
                          className="relative cursor-pointer bg-white rounded-md font-medium text-[#b21e23] hover:text-[#9c1b1f] focus-within:outline-none"
                        >
                          <span>Upload images or documents</span>
                          <input
                            id="files"
                            name="files"
                            type="file"
                            multiple
                            className="sr-only"
                            onChange={handleFileChange}
                          />
                        </label>
                        <p className="pl-1">or drag and drop</p>
                      </div>
                      <p className="text-xs text-gray-500">
                        PNG, JPG, PDF up to 10MB each
                      </p>
                    </div>
                  </div>
                  {isUploading && (
                    <div className="mt-2">
                      <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <div className="bg-[#b21e23] h-2.5 rounded-full w-2/3 animate-pulse"></div>
                      </div>
                      <p className="text-xs text-gray-500 mt-1">
                        Uploading files...
                      </p>
                    </div>
                  )}
                  {files.length > 0 && !isUploading && (
                    <div className="mt-2">
                      <p className="text-sm text-gray-700">
                        {files.length} file(s) selected
                      </p>
                    </div>
                  )}
                </div>

                <div className="flex justify-between pt-4">
                  <button
                    type="button"
                    onClick={prevStep}
                    className="py-3 px-8 bg-gray-600 hover:bg-gray-700 text-white font-semibold rounded-md shadow-md transition duration-300 flex items-center"
                  >
                    <span className="mr-2">←</span> Previous
                  </button>
                  <button
                    type="submit"
                    className="py-3 px-8 bg-[#b21e23] hover:bg-[#9c1b1f] text-white font-semibold rounded-md shadow-md transition duration-300 flex items-center"
                  >
                    Submit Report <span className="ml-2">→</span>
                  </button>
                </div>
              </div>
            )}
          </form>

          {/* Form Footer */}
          <div className="bg-gray-100 p-4 border-t border-gray-300 text-sm text-gray-600">
            <p>
              By submitting this form, you confirm that all information provided
              is accurate and from reliable sources. GlobalCrimeWatch reserves
              the right to verify all submitted information.
            </p>
          </div>
        </div>
      </div>

      
    </div>
  );
}

export default AForm;