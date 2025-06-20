import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

const Blogs = () => {
    const [blogs, setBlogs] = useState([]);
    const [filtered, setFiltered] = useState([]);


    useEffect(() => {
        AOS.init({ duration: 600 });
fetch("https://blog-backend-qxeq88k1b-shahil777s-projects.vercel.app/blogs")
            .then((res) => res.json())
            .then((data) => {
                setBlogs(data);
                setFiltered(data);
            });
    }, []);

    const handleFilter = (category) => {
        if (category === "All") {
            setFiltered(blogs);
        } else {
            const filteredBlogs = blogs.filter((blog) => blog.category === category);
            setFiltered(filteredBlogs);
        }
    };



    return (
        <div className="px-4  mt-8 max-w-7xl mx-auto py-10 transition duration-300">
            {/* Theme Toggle */}
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-3xl font-bold text-gray-800 dark:text-white" data-aos="fade-up">
                    📚 Blogs
                </h1>

            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-4 mb-8" data-aos="fade-up">
                {["All", "Religious", "Personal", "Politics", "Review"].map((cat) => (
                    <button
                        key={cat}
                        onClick={() => handleFilter(cat)}
                        className=" bg-violet-500 hover:bg-violet-600 transition-all duration-300 text-white font-semibold rounded-lg shadow-lg  px-4 py-2 "
                    >
                        {cat}
                    </button>
                ))}
            </div>

            {/* Blog Cards */}

            {/* Blog Cards */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filtered.map((blog, index) => (
                    <Link to={`/blogs/${blog._id}`} key={index}>
                        <div
                            data-aos="zoom-in"
                            className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md transition duration-300 border border-gray-200 dark:border-gray-600"
                        >
                            <img
                                src={blog.coverImage}
                                alt="Blog Cover"
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-4">
                                <span className="text-sm bg-blue-100 text-blue-800 px-2 py-1 rounded-full font-semibold">
                                    {blog.category}
                                </span>
                                <h2 className="text-xl mt-2 font-bold text-gray-900 dark:text-white">
                                    {blog.title}
                                </h2>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>




        </div>
    );
};

export default Blogs;
































