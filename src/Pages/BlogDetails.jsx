import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const BlogDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showPasswordModal, setShowPasswordModal] = useState(false);
  const [actionType, setActionType] = useState(""); // "delete" or "update"
  const [passwordInput, setPasswordInput] = useState("");

  const PASSWORD = "Rakib_Blog_1234";

  useEffect(() => {
    fetch(`https://blog-backend-chi-beryl.vercel.app/blogs/${id}`)
      .then(res => {
        if (!res.ok) throw new Error("Blog not found");
        return res.json();
      })
      .then(data => setBlog(data))
      .catch(err => Swal.fire("Error", err.message, "error"))
      .finally(() => setLoading(false));
  }, [id]);

  const confirmPassword = () => {
    if (passwordInput === PASSWORD) {
      setShowPasswordModal(false);
      if (actionType === "delete") {
        deleteBlog();
      } else if (actionType === "update") {
        navigate(`/updateBlog/${id}`);
      }
    } else {
      Swal.fire("❌ Wrong Password", "Incorrect password entered.", "error");
    }
  };

  const deleteBlog = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
    }).then(result => {
      if (result.isConfirmed) {
        fetch(`https://blog-backend-chi-beryl.vercel.app/blogs/${id}`, {
          method: "DELETE",
        })
          .then(res => res.json())
          .then(() => {
            Swal.fire("Deleted!", "Your blog has been deleted.", "success");
            navigate("/blogs");
          })
          .catch(() => Swal.fire("Error", "Failed to delete blog.", "error"));
      }
    });
  };

  if (loading) return <div>Loading...</div>;
  if (!blog) return <div>Blog not found.</div>;

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <img src={blog.coverImage} alt={blog.title} className="rounded-lg w-full mb-4" />
      <h1 className="text-3xl font-bold mb-2">{blog.title}</h1>
      <p className="text-gray-500 mb-4">
        {blog.category} | {new Date(blog.date).toDateString()}
      </p>
      <p className="mb-6">{blog.description}</p>

      <div className="flex gap-4">
        <button
          onClick={() => {
            setActionType("delete");
            setShowPasswordModal(true);
          }}
          className="btn btn-danger"
        >
          🗑️ Delete
        </button>
        <button
          onClick={() => {
            setActionType("update");
            setShowPasswordModal(true);
          }}
          className="btn btn-primary"
        >
          ✏️ Update
        </button>
      </div>

      {showPasswordModal && (
        <dialog open className="modal">
          <div className="modal-box">
            <h3 className="font-bold text-lg mb-4">Enter Password</h3>
            <input
              type="password"
              value={passwordInput}
              onChange={(e) => setPasswordInput(e.target.value)}
              className="input input-bordered w-full mb-4"
              placeholder="Password"
            />
            <div className="flex justify-end gap-2">
              <button onClick={confirmPassword} className="btn btn-success">
                Confirm
              </button>
              <button onClick={() => setShowPasswordModal(false)} className="btn">
                Cancel
              </button>
            </div>
          </div>
        </dialog>
      )}
    </div>
  );
};

export default BlogDetails;
