import { useState } from "react";
import Swal from "sweetalert2";
import { ClipLoader } from "react-spinners";

const AddBlog = () => {
  const today = new Date().toISOString().split("T")[0];

  const [formData, setFormData] = useState({
    title: "",
    category: "Religious",
    description: "",
    coverImage: "",
    author: "",
    date: today,
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch("https://blog-backend-chi-beryl.vercel.app/add-blog", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        Swal.fire("✅ Blog added successfully!", "", "success");
        setFormData({
          title: "",
          category: "Religious",
          description: "",
          coverImage: "",
          author: "",
          date: today,
        });
      } else {
        Swal.fire("❌ Failed to add blog", "", "error");
      }
    } catch (error) {
      Swal.fire("❌ Server error", error.message, "error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto px-4 mt-8 py-12">
      <h2 className="text-3xl font-bold mb-8 text-center">📝 Add New Blog</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          placeholder="Blog Title"
          required
          className="input input-bordered w-full"
        />
        <select
          name="category"
          value={formData.category}
          onChange={handleChange}
          className="input input-bordered w-full"
        >
          <option value="Religious">Religious</option>
          <option value="Personal">Personal</option>
          <option value="Politics">Politics</option>
          <option value="Review">Review</option>
        </select>
        <input
          type="text"
          name="coverImage"
          value={formData.coverImage}
          onChange={handleChange}
          placeholder="Cover Image URL"
          required
          className="input input-bordered w-full"
        />
        <input
          type="text"
          name="author"
          value={formData.author}
          onChange={handleChange}
          placeholder="Author"
          required
          className="input input-bordered w-full"
        />
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="Blog Description"
          required
          className="textarea textarea-bordered w-full"
          rows={6}
        ></textarea>
        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          required
          className="input input-bordered w-full"
        />
        <button
          type="submit"
          className="btn btn-primary w-full"
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
