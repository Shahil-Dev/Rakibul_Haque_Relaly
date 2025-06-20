import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Swal from "sweetalert2";
import { ClipLoader } from "react-spinners";

const AddBlog = () => {
  useEffect(() => {
    AOS.init({ duration: 700 });
  }, []);

  const today = new Date().toISOString().split("T")[0];

  const [formData, setFormData] = useState({
    title: "",
    category: "Religious",
    description: "",
    coverImage: "",
    videoUrl: "",
    author: "",
    date: today,
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
 const res = await fetch("https://blog-backend-qxeq88k1b-shahil777s-projects.vercel.app/add-blog", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await res.json();
      if (res.ok) {
        Swal.fire({
          title: "✅ Blog added successfully!",
          icon: "success",
        });
        setFormData({
          title: "",
          category: "Religious",
          description: "",
          coverImage: "",
          videoUrl: "",
          author: "",
          date: today,
        });
      } else {
        alert("❌ Failed to add blog: " + result.message);
      }
    } catch (error) {
      alert("❌ Server error: " + error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto px-4 mt-8 py-12">
      <h2 className="text-3xl font-bold text-center mb-8 text-white" data-aos="fade-up">
        📝 Add New Blog
      </h2>

      <form
        onSubmit={handleSubmit}
        className="space-y-6 bg-gray-100 shadow-lg p-8 rounded-2xl border border-gray-200"
      >
        {/* Title */}
        <div data-aos="fade-up">
          <label className="block mb-2 text-black font-semibold">Title</label>
          <input
            type="text"
            name="title"
            required
            value={formData.title}
            onChange={handleChange}
            placeholder="Enter blog title"
            className="w-full px-4 py-3 border text-black border-blue-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Category */}
        <div data-aos="fade-up">
          <label className="block mb-2 text-black font-semibold">Category</label>
          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="w-full text-black px-4 py-3 border border-blue-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white"
          >
            <option value="Religious">Religious</option>
            <option value="Personal">Personal</option>
            <option value="Politics">Politics</option>
            <option value="Review">Review</option>
          </select>
        </div>

        {/* Cover Image */}
        <div data-aos="fade-up">
          <label className="block mb-2 text-black font-semibold">Cover Image URL</label>
          <input
            type="text"
            name="coverImage"
            required
            value={formData.coverImage}
            onChange={handleChange}
            placeholder="https://example.com/image.jpg"
            className="w-full px-4 py-3 border text-black border-blue-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Optional Video URL */}
        <div data-aos="fade-up">
          <label className="block mb-2 text-black font-semibold">Video URL (optional)</label>
          <input
            type="text"
            name="videoUrl"
            value={formData.videoUrl}
            onChange={handleChange}
            placeholder="https://youtube.com/..."
            className="w-full px-4 py-3 border text-black border-blue-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Author */}
        <div data-aos="fade-up">
          <label className="block mb-2 text-black font-semibold">Author</label>
          <input
            type="text"
            name="author"
            required
            value={formData.author}
            onChange={handleChange}
            placeholder="Rakibul Haque Helaly"
            className="w-full px-4 py-3 border text-black border-blue-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Description */}
        <div data-aos="fade-up">
          <label className="block mb-2 text-black font-semibold">Description</label>
          <textarea
            name="description"
            rows="6"
            required
            value={formData.description}
            onChange={handleChange}
            placeholder="Write your blog content here..."
            className="w-full text-black px-4 py-3 border border-blue-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
          ></textarea>
        </div>

        {/* Date */}
        <div data-aos="fade-up">
          <label className="block mb-2 text-black font-semibold">Date</label>
          <input
            type="date"
            name="date"
            required
            value={formData.date}
            onChange={handleChange}
            className="w-full px-4 py-3 border text-black border-blue-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          data-aos="zoom-in"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-xl transition duration-200"
          disabled={loading}
        >
          ➕ Submit Blog
        </button>

        {loading && (
          <div className="flex justify-center mt-4">
            <ClipLoader color="#2563EB" size={35} />
          </div>
        )}
      </form>
    </div>
  );
};

export default AddBlog;
