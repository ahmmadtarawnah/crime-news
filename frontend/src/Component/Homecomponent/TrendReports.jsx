import React from 'react'
import {
  ArrowUpRight,
  Clock,
  Eye,
  ScaleIcon,
  SearchIcon,
  FileTextIcon,
  AlertTriangleIcon,
} from 'lucide-react'
const TrendReports = () => {
  const newsArticles = [
    {
      id: 1,
      featured: true,
      tag: 'TRENDING REPORT',
      title:
        'International Crime Syndicate Exposed: Multi-Country Operation Leads to Dozens of Arrests',
      description:
        "A years-long investigation culminates in the takedown of one of the world's largest criminal organizations, with operations spanning across three continents.",
      imageUrl:
        'https://images.unsplash.com/photo-1589578527966-fdac0f44566c?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&h=300&q=80',
      time: '3 hours ago',
      views: '250K',
    },
    {
      id: 2,
      tag: 'INVESTIGATION',
      title: 'New Evidence Emerges in High-Profile Murder Case',
      description:
        'Detectives have discovered crucial evidence that could change the direction of the investigation...',
      imageUrl:
        'https://images.unsplash.com/photo-1589578527966-fdac0f44566c?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&h=300&q=80',
      time: '4 hours ago',
      views: '145K',
    },
    {
      id: 3,
      tag: 'COURT CASE',
      title: 'Judge Sentences Former Official in Corruption Trial',
      description:
        'The former city official received a 10-year sentence after being found guilty of accepting bribes...',
      imageUrl:
        'https://images.unsplash.com/photo-1589578527966-fdac0f44566c?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&h=300&q=80',
      time: '6 hours ago',
      views: '98K',
    },
    {
      id: 4,
      tag: 'POLICE',
      title: 'Police Raid Uncovers Major Drug Operation',
      description:
        'A coordinated police operation resulted in multiple arrests and the seizure of illegal substances...',
      imageUrl:
        'https://images.unsplash.com/photo-1453873531674-2151bcd01707?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&h=300&q=80',
      time: '8 hours ago',
      views: '92K',
    },
    {
      id: 5,
      tag: 'INTERNATIONAL',
      title: 'International Cooperation Leads to Arrest of Fugitive',
      description:
        'After years on the run, the international fugitive was apprehended through joint efforts...',
      imageUrl:
        'https://images.unsplash.com/photo-1607863680198-23d4b2565a5e?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&h=300&q=80',
      time: '12 hours ago',
      views: '68K',
    },
  ]
  return (
    <div className="max-w-6xl mx-auto p-6 bg-white text-gray-900 min-h-screen flex flex-col justify-between overflow-hidden relative">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Fingerprint */}
        {/* <svg
          className="absolute top-10 left-5 w-64 h-64 text-gray-100 opacity-20"
          viewBox="0 0 100 100"
        >
          <path d="M50,2C23.8,2,2,23.8,2,50s21.8,48,48,48s48-21.8,48-48S76.2,2,50,2z M50,92c-23.2,0-42-18.8-42-42S26.8,8,50,8s42,18.8,42,42 S73.2,92,50,92z M50,17c-18.2,0-33,14.8-33,33s14.8,33,33,33s33-14.8,33-33S68.2,17,50,17z M50,77c-14.9,0-27-12.1-27-27 s12.1-27,27-27s27,12.1,27,27S64.9,77,50,77z M50,29c-11.6,0-21,9.4-21,21s9.4,21,21,21s21-9.4,21-21S61.6,29,50,29z M50,65 c-8.3,0-15-6.7-15-15s6.7-15,15-15s15,6.7,15,15S58.3,65,50,65z M50,41c-5,0-9,4-9,9s4,9,9,9s9-4,9-9S55,41,50,41z" />
        </svg> */}
        {/* Justice Scale */}
        <div className="absolute top-40 right-10">
          <ScaleIcon className="w-48 h-48 text-gray-100 opacity-20" />
        </div>
        {/* Magnifying Glass */}
        <div className="absolute bottom-20 left-20">
          <SearchIcon className="w-40 h-40 text-gray-100 opacity-20" />
        </div>
        {/* Document Icon */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <FileTextIcon className="w-72 h-72 text-gray-100 opacity-10" />
        </div>
        {/* Blood Stain */}
        {/* <svg
          className="absolute bottom-10 right-10 w-32 h-32 text-[var(--primary-color)] opacity-20"
          viewBox="0 0 100 100"
        >
          <path
            fill="currentColor"
            d="M65.7,10.3c-6.8,8.4-13.8,16.6-16.9,27.3c-2.9,10.3-1,20.6,4.5,29.5c5.5,8.8,14.8,15.3,25.1,16.1 c10.3,0.8,21.3-4.4,26.6-13.5c5.3-9.1,4.9-21.4-0.9-30c-5.8-8.6-16.2-13.5-25.6-11.3c-9.4,2.2-16.9,11.6-15.9,21.3 c1,9.7,10.5,18.6,20.2,17.9c9.7-0.6,18.7-10.5,17.2-20.1c-1.5-9.6-12.6-17.9-21.8-14.8"
          />
        </svg> */}
        {/* Alert Triangle */}
        <div className="absolute top-3/4 left-1/4">
          <AlertTriangleIcon className="w-36 h-36 text-gray-100 opacity-20" />
        </div>
      </div>
      {/* Title Section */}
      <div className="flex justify-between items-center mb-6 mt-10 pt-4 relative z-10">
        <h2 className="text-2xl font-bold border-b-2 border-[var(--primary-color)]">
          Latest Reports
        </h2>
        <button className="text-[var(--primary-color)] flex items-center text-sm">
          View All <ArrowUpRight className="ml-1 h-4 w-4" />
        </button>
      </div>
      {/* Featured Articles Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
        {newsArticles
          .filter((article) => article.featured)
          .map((article) => (
            <div
              key={article.id}
              className="bg-white rounded-md shadow-sm h-[280px] overflow-hidden flex flex-col"
            >
              <div className="bg-gray-200 min-h-[280px] flex items-center justify-center">
                <img
                  src={article.imageUrl}
                  alt="Crime scene"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          ))}
        <div className="bg-white rounded-md shadow-sm p-6 flex flex-col justify-between h-full min-h-[250px]">
          <div className="flex-grow">
            <span className="bg-[var(--primary-color)] text-white text-xs px-2 py-1 rounded">
              {newsArticles[0].tag}
            </span>
            <h3 className="text-xl font-bold mt-2">{newsArticles[0].title}</h3>
            <p className="text-gray-600 text-sm mt-2">
              {newsArticles[0].description}
            </p>
          </div>
          <div className="flex justify-between items-center mt-4">
            <div className="flex items-center text-gray-500 text-xs">
              <Clock className="h-3 w-3 mr-1" />
              <span>{newsArticles[0].time}</span>
            </div>
            <div className="flex items-center text-gray-500 text-xs">
              <Eye className="h-3 w-3 mr-1" />
              <span>{newsArticles[0].views} views</span>
            </div>
          </div>
          <button className="mt-4 bg-[var(--primary-color)] text-white px-4 py-2 text-sm max-w-xs mx-auto">
            Read Full Report
          </button>
        </div>
      </div>
      {/* Other Articles Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6 relative z-10">
        {newsArticles.slice(1).map((article) => (
          <div
            key={article.id}
            className="flex bg-white rounded-md shadow-sm overflow-hidden"
          >
            <div className="bg-gray-200 w-1/3 flex items-center justify-center">
              <img
                src={article.imageUrl}
                alt="Crime scene"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4 w-2/3">
              <div className="mb-2">
                <span className="bg-[var(--primary-color)] text-white text-xs px-2 py-1 rounded">
                  {article.tag}
                </span>
              </div>
              <h3 className="font-bold mb-2">{article.title}</h3>
              <p className="text-gray-600 text-xs">{article.description}</p>
              <div className="flex justify-between items-center mt-4">
                <div className="flex items-center text-gray-500 text-xs">
                  <Clock className="h-3 w-3 mr-1" />
                  <span>{article.time}</span>
                </div>
                <div className="flex items-center text-gray-500 text-xs">
                  <Eye className="h-3 w-3 mr-1" />
                  <span>{article.views} views</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
export default TrendReports
