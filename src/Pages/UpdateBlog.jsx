import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { ClipLoader } from "react-spinners";

const UpdateBlog = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    title: "",
    category: "",
    coverImage: "",
    description: "",
  });

  const [password, setPassword] = useState("");

  useEffect(() => {
    fetch(`https://blog-backend-qxeq88k1b-shahil777s-projects.vercel.app/blogs/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setBlog(data);
        setFormData({
          title: data.title || "",
          category: data.category || "",
          coverImage: data.coverImage || "",
          description: data.description || "",
        });
      });
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    if (password !== "Rakib_Blog_1234") {
      Swal.fire("❌ Incorrect Password", "You are not authorized to update.", "error");
      return;
    }

    setLoading(true);

    fetch(`https://blog-backend-qxeq88k1b-shahil777s-projects.vercel.app/blogs/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          Swal.fire("✅ Updated!", "The blog has been updated.", "success");
          navigate(`/blogs/${id}`);
        } else {
          Swal.fire("ℹ️ No Change", "No data was modified.", "info");
        }
      })
      .catch((err) => {
        alert("❌ Server error: " + err.message);
      })
      .finally(() => setLoading(false));
  };

  if (!blog) {
    return (
      <div className="flex justify-center mt-10">
        <ClipLoader color="#2563EB" size={40} />
      </div>
    );
  }

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
          className="w-full input input-bordered"
          required
        />
        <input
          type="text"
          name="category"
          value={formData.category}
          onChange={handleChange}
          placeholder="Category"
          className="w-full input input-bordered"
          required
        />
        <input
          type="text"
          name="coverImage"
          value={formData.coverImage}
          onChange={handleChange}
          placeholder="Cover Image URL"
          className="w-full input input-bordered"
          required
        />
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="Blog Description"
          className="w-full textarea textarea-bordered"
          rows={6}
          required
        ></textarea>

        <input
          type="password"
          placeholder="Enter Password to Update"
          className="input input-bordered w-full"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          type="submit"
          className="btn bg-blue-600 text-white hover:bg-blue-700 w-full"
          disabled={loading}
        >
          🔄 Update Blog
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

export default UpdateBlog;
