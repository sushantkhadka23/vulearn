
export default function Labs() {
  const labActivities = [
    {
      title: "Lab 1: Understanding XSS",
      description: "Explore the fundamentals of Cross-Site Scripting through practical exercises.",
      link: "/labs/lab1",
    },
    {
      title: "Lab 2: Exploiting XSS",
      description: "Learn how to exploit XSS vulnerabilities in a controlled environment.",
      link: "/labs/lab2",
    },
    {
      title: "Lab 3: Preventing XSS",
      description: "Implement best practices to prevent XSS attacks in web applications.",
      link: "/labs/lab3",
    },
    {
      title: "Lab 4: Real-World Scenarios",
      description: "Analyze real-world examples of XSS vulnerabilities and their impacts.",
      link: "/labs/lab4",
    },
  ];

  return (
    <div className="min-h-screen bg-bg text-txt py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-serif md:text-5xl lg:text-6xl font-bold text-txt mb-6">
            Labs & Workshops
          </h1>
          <p className="text-xl text-txt/80 font-lato max-w-3xl mx-auto">
            Engage in hands-on exercises to deepen your understanding of XSS vulnerabilities.
          </p>
        </div>

        {/* Labs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {labActivities.map((activity, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6 transition-transform transform hover:scale-105">
              <h3 className="text-xl font-bold text-txt mb-2">{activity.title}</h3>
              <p className="text-txt/90 mb-4">{activity.description}</p>
              <a 
                href={activity.link} 
                className="inline-block py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition-colors duration-300"
              >
                Start Lab
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
