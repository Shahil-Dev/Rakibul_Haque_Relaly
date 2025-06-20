import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateBlog = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: "",
    category: "",
    coverImage: "",
    description: "",
  });

  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetch(`https://blog-backend-chi-beryl.vercel.app/blogs/${id}`)
      .then(res => res.json())
      .then(data => {
        setFormData({
          title: data.title,
          category: data.category,
          coverImage: data.coverImage,
          description: data.description,
        });
      });
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    if (password !== "Rakib_Blog_1234") {
      Swal.fire("❌ Incorrect Password", "You are not authorized.", "error");
      return;
    }

    setLoading(true);
    fetch(`https://blog-backend-chi-beryl.vercel.app/blogs/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })
      .then(res => res.json())
      .then(data => {
        if (data.modifiedCount > 0) {
          Swal.fire("✅ Updated!", "Blog updated successfully.", "success");
          navigate(`/blogs/${id}`);
        } else {
          Swal.fire("ℹ️ No Change", "No changes detected.", "info");
        }
      })
      .catch(() => Swal.fire("❌ Server Error", "Failed to update blog.", "error"))
      .finally(() => setLoading(false));
  };

  return (
    <div className="max-w-2xl mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold mb-6 text-center">✏️ Update Blog</h2>
      <form onSubmit={handleUpdate} className="space-y-6">
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          placeholder="Blog Title"
          required
          className="input input-bordered w-full"
        />
        <input
          type="text"
          name="category"
          value={formData.category}
          onChange={handleChange}
          placeholder="Category"
          required
          className="input input-bordered w-full"
        />
        <input
          type="text"
          name="coverImage"
          value={formData.coverImage}
          onChange={handleChange}
          placeholder="Cover Image URL"
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
        />
        <input
          type="password"
          placeholder="Enter Password to Update"
          className="input input-bordered w-full"
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button
          type="submit"
          className="btn btn-primary w-full"
          disabled={loading}
        >
          🔄 Update Blog
        </button>
      </form>
    </div>
  );
};

export default UpdateBlog;
