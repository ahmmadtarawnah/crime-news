import { useState } from 'react';

const reports = [
  { id: 1, title: "Major Bank Heist: $10 Million Stolen in Daring Daylight Robbery", time: "5 hours ago", views: "235K", category: "Robbery" },
  { id: 1, title: "Major Bank Heist: $10 Million Stolen in Daring Daylight Robbery", time: "5 hours ago", views: "235K", category: "Robbery" },
  { id: 1, title: "Major Bank Heist: $10 Million Stolen in Daring Daylight Robbery", time: "5 hours ago", views: "235K", category: "Robbery" },
  { id: 2, title: "Serial Killer Case Reopened After New DNA Evidence Emerges", time: "8 hours ago", views: "195K", category: "Murder" },
  { id: 3, title: "Cybercrime Ring Dismantled in International Police Operation", time: "12 hours ago", views: "217K", category: "Cybercrime" },
  { id: 5, title: "Drug Cartel Leader Captured After Decade-Long Manhunt", time: "36 hours ago", views: "420K", category: "Drugs" },
  { id: 3, title: "Cybercrime Ring Dismantled in International Police Operation", time: "12 hours ago", views: "217K", category: "Cybercrime" },
  { id: 4, title: "High-Profile Corruption Case Sends Shockwaves Through Government", time: "24 hours ago", views: "156K", category: "Corruption" },
  { id: 5, title: "Drug Cartel Leader Captured After Decade-Long Manhunt", time: "36 hours ago", views: "420K", category: "Drugs" },
  { id: 6, title: "Art Theft at National Museum: Priceless Paintings Stolen", time: "48 hours ago", views: "340K", category: "Theft" },
];

const MostViewedReports = () => {
  const [selectedCategory, setSelectedCategory] = useState("Robbery");

  // فلترة التقارير حسب الفئة المختارة
  const filteredReports = reports.filter(report => report.category === selectedCategory);

  return (
    <div className="max-w-7xl mx-auto p-4 md:p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold">Most Viewed Reports</h2>
      </div>

      {/* أزرار اختيار الفئة */}
      <div className="flex overflow-x-auto space-x-4 mb-6 pb-2">
        {["Robbery", "Murder", "Cybercrime", "Corruption", "Drugs", "Theft"].map(category => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 font-medium rounded-md border-b-2 transition-colors ${
              selectedCategory === category
                ? "bg-white text-black border-[var(--primary-color)]"
                : "text-gray-500 hover:text-black"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* عرض التقارير المفلترة */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredReports.map((report, index) => (
          <div key={`${report.id}-${index}`} className="bg-gray-100 rounded-lg overflow-hidden">
            <div className="relative">
              <span className="absolute top-3 left-3 bg-[var(--primary-color)] text-[var(--text-color)] text-xs font-bold px-2 py-1 rounded">
                {report.category}
              </span>
              <div className="h-48 bg-gray-200 flex items-center justify-center">
                <img
                  src="/placeholder.svg"
                  alt="News thumbnail"
                  className="w-full h-full object-cover"
                  width="400"
                  height="200"
                />
              </div>
            </div>
            <div className="p-4">
              <h3 className="font-bold text-[var(--background-color)] text-lg mb-2">{report.title}</h3>
              <div className="flex items-center text-sm text-gray-500 mt-4">
                <div className="flex items-center mr-4">
                  <span className="w-4 h-4 mr-1">🕒</span>
                  <span>{report.time}</span>
                </div>
                <div className="flex items-center">
                  <span className="w-4 h-4 mr-1">👁️</span>
                  <span>{report.views} views</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MostViewedReports;
