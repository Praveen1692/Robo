import React from "react";

const blogs = [
  {
    id: 1,
    image:
      "https://wp-int-blog.s3.eu-central-1.amazonaws.com/wp-content/uploads/2023/10/09143009/Humanoid-robot_freepik-scaled.jpg",
    title: "The Rise Of AI And Robotics In Retail Customer Experiences",
    date: "24 Jan, 2025",
    author: "admin",
  },
  {
    id: 2,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnPFY8dP6ixxaeIzRK7HYmjgJSwLq0yGHhlA&s",
    title: "The Rise Of AI And Robotics In Retail Customer Experiences",
    date: "24 Jan, 2025",
    author: "admin",
  },
  {
    id: 3,
    image:
      "https://png.pngtree.com/thumb_back/fw800/background/20240912/pngtree-photo-of-an-ai-robot-hand-typing-on-a-laptop-keyboard-image_16177889.jpg",
    title: "The Rise Of AI And Robotics In Retail Customer Experiences",
    date: "24 Jan, 2025",
    author: "admin",
  },
];

function News() {
  return (
    <div>
      <section className="py-16 px-6 max-w-7xl mx-auto bg-gray-50">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-center mb-10">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 sm:mb-0">
            Our Latest News & Blog
          </h2>
          <button className="border-2 border-purple-600 text-purple-600 px-6 py-2 rounded-full font-semibold hover:bg-purple-600 hover:text-white transition-all duration-300 flex items-center">
            View All Posts
            <span className="ml-2 transform group-hover:translate-x-1 transition-transform duration-300">
              →
            </span>
          </button>
        </div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="bg-white rounded-xl overflow-hidden shadow-lg transform transition-all duration-300 hover:shadow-xl hover:-translate-y-2 group"
            >
              <div className="relative">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-56 object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="p-6">
                <p className="text-sm text-gray-600 flex items-center gap-3">
                  <span className="flex items-center">
                    📅 <span className="ml-1">{blog.date}</span>
                  </span>
                  <span className="flex items-center">
                    🖊 <span className="ml-1">by {blog.author}</span>
                  </span>
                </p>
                <h3 className="text-xl font-semibold text-gray-900 mt-3 group-hover:text-purple-600 transition-colors duration-300">
                  {blog.title}
                </h3>
                <a
                  href="#"
                  className="text-purple-600 font-semibold mt-4 inline-flex items-center group/link"
                >
                  Read More
                  <span className="ml-2 transform group-hover/link:translate-x-1 transition-transform duration-300">
                    →
                  </span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default News;