import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { IoMdAdd } from "react-icons/io";
const Blogs = () => {
    const [blogs, setBlogs] = useState([]);
    const [filtered, setFiltered] = useState([]);

    useEffect(() => {
        fetch("https://blog-backend-chi-beryl.vercel.app/blogs")
            .then(res => res.json())
            .then(data => {
                setBlogs(data);
                setFiltered(data);
            });
    }, []);

    const handleFilter = (category) => {
        if (category === "All") {
            setFiltered(blogs);
        } else {
            setFiltered(blogs.filter(blog => blog.category === category));
        }
    };

    return (
        <div className="max-w-7xl mx-auto px-4 py-10">
            <div className="mt-5 justify-between flex">
                <h1 className="text-3xl font-bold mb-6 mx-8">📚 Blogs</h1>
                <div className="tooltip tooltip-bottom" data-tip="add blogs">
                    <Link to="/addBlog"><button className=""><IoMdAdd className="w-10 h-10" /></button></Link>
                </div>

            </div>
            <div className="flex gap-4 mb-8">
                {["All", "Religious", "Personal", "Politics", "Review"].map(cat => (
                    <button
                        key={cat}
                        onClick={() => handleFilter(cat)}
                        className="btn btn-sm"
                    >
                        {cat}
                    </button>
                ))}
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filtered.map(blog => (
                    <Link to={`/blogs/${blog._id}`} key={blog._id}>
                        <div className="border rounded-lg overflow-hidden shadow hover:shadow-lg transition cursor-pointer">
                            <img
                                src={blog.coverImage}
                                alt={blog.title}
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-4">
                                <span className="text-sm font-semibold bg-blue-100 text-blue-800 px-2 rounded">
                                    {blog.category}
                                </span>
                                <h2 className="text-xl font-bold mt-2">{blog.title}</h2>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Blogs;
