import React from "react";

const UserArticlesDashboard = () => {
  // بيانات نموذجية
  const users = [
    {
      _id: "67d324ada9562f47deacbecd",
      username: "mmmm",
      email: "ahmadalnajjar772@gmail.com",
      isActivated: false,
      role: "user",
      createdAt: "2025-03-13T18:32:13.367+00:00",
    },
    {
      _id: "67d324ada9562f47deacbecd",
      username: "mmmm",
      email: "ahmadalnajjar772@gmail.com",
      isActivated: false,
      role: "user",
      createdAt: "2025-03-13T18:32:13.367+00:00",
    },
    {
      _id: "67d324ada9562f47deacbecd",
      username: "mmmm",
      email: "ahmadalnajjar772@gmail.com",
      isActivated: false,
      role: "user",
      createdAt: "2025-03-13T18:32:13.367+00:00",
    },
    {
      _id: "67d324ada9562f47deacbecd",
      username: "mmmm",
      email: "ahmadalnajjar772@gmail.com",
      isActivated: false,
      role: "user",
      createdAt: "2025-03-13T18:32:13.367+00:00",
    },
    {
      _id: "67d324ada9562f47deacbecd",
      username: "mmmm",
      email: "ahmadalnajjar772@gmail.com",
      isActivated: false,
      role: "user",
      createdAt: "2025-03-13T18:32:13.367+00:00",
    },
  ];

  const articles = [
    {
      id: 1,
      title: "Missing Person: Emily Carter",
      date: "2025-02-28",
      location: "Los Angeles, CA",
      description:
        "Emily Carter, a 23-year-old woman, was last seen leaving her apartment...",
      state: "pending",
      image: "https://example.com/images/missing_person.jpg",
    },
    {
      id: 2,
      title: "Missing Person: Emily Carter",
      date: "2025-02-28",
      location: "Los Angeles, CA",
      description:
        "Emily Carter, a 23-year-old woman, was last seen leaving her apartment...",
      state: "pending",
      image: "https://example.com/images/missing_person.jpg",
    },
    {
      id: 3,
      title: "Missing Person: Emily Carter",
      date: "2025-02-28",
      location: "Los Angeles, CA",
      description:
        "Emily Carter, a 23-year-old woman, was last seen leaving her apartment...",
      state: "pending",
      image: "https://example.com/images/missing_person.jpg",
    },
    {
      id: 4,
      title: "Missing Person: Emily Carter",
      date: "2025-02-28",
      location: "Los Angeles, CA",
      description:
        "Emily Carter, a 23-year-old woman, was last seen leaving her apartment...",
      state: "pending",
      image: "https://example.com/images/missing_person.jpg",
    },
    {
      id: 5,
      title: "Missing Person: Emily Carter",
      date: "2025-02-28",
      location: "Los Angeles, CA",
      description:
        "Emily Carter, a 23-year-old woman, was last seen leaving her apartment...",
      state: "pending",
      image: "https://example.com/images/missing_person.jpg",
    },
  ];

  // Combined data for display
  const dashboardData = users.flatMap((user) =>
    articles.map((article) => ({
      user,
      article,
    }))
  );

  // Function to get status color
  const getStatusColor = (state) => {
    switch (state) {
      case "pending":
        return "bg-amber-100 text-amber-800 border-amber-300";
      case "approved":
        return "bg-emerald-100 text-emerald-800 border-emerald-300";
      case "rejected":
        return "bg-rose-100 text-rose-800 border-rose-300";
      default:
        return "bg-slate-100 text-slate-800 border-slate-300";
    }
  };

  // Function to get user initials
  const getInitials = (username) => {
    return username.substring(0, 2).toUpperCase();
  };

  // Function to format date
  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "short", day: "numeric" };
    return new Date(dateString).toLocaleDateString("en-US", options);
  };

  return (
    <div className="w-full p-6 bg-white">
      <div className="overflow-x-auto flex rounded-lg">
        <table className="w-[85%] divide-y lg:ml-65 divide-gray-200 border border-gray-100 rounded-lg shadow hidden lg:table">
          {/* الجدول يظهر فقط في الشاشات الكبيرة */}
          <thead className="bg-gray-50">
            <tr>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                # {/* الرقم */}
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                User
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Username
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Email
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Article Title
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Date
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Location
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Status
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {dashboardData.map((item, index) => (
              <tr key={index} className="hover:bg-gray-50 transition-colors">
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {index + 1} {/* الرقم */}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="h-10 w-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-medium shadow-sm">
                      {getInitials(item.user.username)}
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900">
                    {item.user.username}
                  </div>
                  <div className="text-xs text-gray-500">{item.user.role}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {item.user.email}
                </td>
                <td className="px-6 py-4">
                  <div className="text-sm text-gray-900 max-w-xs truncate">
                    {item.article.title}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {formatDate(item.article.date)}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {item.article.location}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span
                    className={`px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full border ${getStatusColor(
                      item.article.state
                    )}`}
                  >
                    {item.article.state}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <button className="text-blue-600 hover:text-blue-900 ">
                    Read more
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="lg:hidden">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {dashboardData.map((item, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out"
            >
              {/* الجزء العلوي: رقم السطر */}
              <div className="text-sm font-medium text-gray-500 mb-4">
                #{index + 1}
              </div>

              {/* الجزء العلوي: صورة المستخدم ومعلوماته */}
              <div className="flex items-center space-x-4 mb-4">
                <div className="h-12 w-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-medium shadow-sm">
                  {getInitials(item.user.username)}
                </div>
                <div>
                  <div className="text-base font-semibold text-gray-900">
                    {item.user.username}
                  </div>
                  <div className="text-sm text-gray-500">{item.user.role}</div>
                </div>
              </div>

              {/* محتوى البطاقة */}
              <div className="space-y-3">
                <div className="text-sm text-gray-700">
                  <span className="font-medium">Email:</span> {item.user.email}
                </div>
                <div className="text-sm text-gray-900">
                  <span className="font-medium">Article Title:</span>{" "}
                  {item.article.title}
                </div>
                <div className="text-sm text-gray-700">
                  <span className="font-medium">Date:</span>{" "}
                  {formatDate(item.article.date)}
                </div>
                <div className="text-sm text-gray-700">
                  <span className="font-medium">Location:</span>{" "}
                  {item.article.location}
                </div>
                <div>
                  <span
                    className={`px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusColor(
                      item.article.state
                    )}`}
                  >
                    {item.article.state}
                  </span>
                </div>
              </div>

              {/* الأزرار */}
              <div className="mt-5 flex justify-between space-x-3">
                <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors duration-300">
                  Read more
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UserArticlesDashboard;
