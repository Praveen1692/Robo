import React from 'react'

const blogs = [
    {
      id: 1,
      image: "https://wp-int-blog.s3.eu-central-1.amazonaws.com/wp-content/uploads/2023/10/09143009/Humanoid-robot_freepik-scaled.jpg", // Replace with actual image URL
      title: "The Rise Of AI And Robotics In Retail Customer Experiences",
      date: "24 Jan, 2025",
      author: "admin",
    },
    {
      id: 2,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnPFY8dP6ixxaeIzRK7HYmjgJSwLq0yGHhlA&s", // Replace with actual image URL
      title: "The Rise Of AI And Robotics In Retail Customer Experiences",
      date: "24 Jan, 2025",
      author: "admin",
    },
    {
      id: 3,
      image: "https://png.pngtree.com/thumb_back/fw800/background/20240912/pngtree-photo-of-an-ai-robot-hand-typing-on-a-laptop-keyboard-image_16177889.jpg", // Replace with actual image URL
      title: "The Rise Of AI And Robotics In Retail Customer Experiences",
      date: "24 Jan, 2025",
      author: "admin",
    },
  ];

function News() {
  return (
    <div>
         <section className="py-12 px-6 max-w-7xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold">Our Latest News & Blog</h2>
        <button className="border border-gray-300 px-4 py-2 rounded-lg hover:bg-gray-100 flex items-center">
          View All Post →
        </button>
      </div>
      <div className="grid md:grid-cols-3 gap-6">
        {blogs.map((blog) => (
          <div key={blog.id} className="bg-white rounded-lg overflow-hidden shadow-md">
            <img src={blog.image} alt={blog.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <p className="text-sm text-gray-500 flex items-center gap-2">
                📅 {blog.date} &nbsp; | &nbsp; 🖊 by {blog.author}
              </p>
              <h3 className="text-lg font-semibold mt-2">{blog.title}</h3>
              <a href="#" className="text-blue-600 font-medium mt-3 inline-block">
                Read More →
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>




    </div>
  )
}

export default News