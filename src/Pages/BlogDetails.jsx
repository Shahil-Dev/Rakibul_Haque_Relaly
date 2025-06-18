import Swal from "sweetalert2";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const BlogDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [blog, setBlog] = useState(null);
  const [error, setError] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [passwordInput, setPasswordInput] = useState("");
  const [actionType, setActionType] = useState("");

  const PASSWORD = "Rakib_Blog_1234";

  useEffect(() => {
    fetch(`http://localhost:8000/blogs/${id}`)
      .then(res => {
        if (!res.ok) throw new Error("Blog not found");
        return res.json();
      })
      .then(data => setBlog(data))
      .catch(err => setError(err.message));
  }, [id]);

  const handleDelete = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then(result => {
      if (result.isConfirmed) {
        fetch(`http://localhost:8000/blogs/${id}`, {
          method: "DELETE"
        })
          .then(res => res.json())
          .then(() => {
            Swal.fire("Deleted!", "Your blog has been deleted.", "success");
            navigate("/blogs");
          })
          .catch(err => {
            Swal.fire("Error", "Something went wrong!", "error");
            console.error(err);
          });
      }
    });
  };

  const handleUpdate = () => {
    navigate(`/updateBlog/${id}`);
    Swal.fire("🔄 Update Mode", "You can now update the blog.", "info");
  };

  const checkPasswordAndProceed = () => {
    if (passwordInput === PASSWORD) {
      setShowModal(false);
      if (actionType === "delete") {
        handleDelete();
      } else if (actionType === "update") {
        handleUpdate();
      }
    } else {
      Swal.fire("❌ Wrong Password", "The password you entered is incorrect.", "error");
    }
  };

  if (error) return <div className="text-red-500">❌ {error}</div>;
  if (!blog) return <div>Loading...</div>;

  return (
    <div className="max-w-4xl mx-auto px-4 mt-8 py-8">
      <img src={blog.coverImage} alt={blog.title} className="w-full rounded-xl mb-4" />
      <h1 className="text-3xl font-bold mb-2">{blog.title}</h1>
      <p className="text-sm text-gray-500 mb-4">
        {blog.category} | {new Date(blog.date).toDateString()}
      </p>
      <p className="text-lg">{blog.description}</p>

      {/* Action Buttons */}
      <div className="flex gap-4 mt-6">
        <button onClick={() => { setActionType("delete"); setShowModal(true); }} className="btn bg-red-600 text-white hover:bg-red-700">
          🗑️ Delete
        </button>
        <button onClick={() => { setActionType("update"); setShowModal(true); }} className="btn bg-blue-600 text-white hover:bg-blue-700">
          ✏️ Update
        </button>
      </div>

      {/* Password Modal using Daisy UI */}
      {showModal && (
        <dialog id="my_modal" className="modal modal-open">
          <div className="modal-box">
            <h3 className="font-bold text-lg mb-4">🔐 Enter Password to Continue</h3>
            <input
              type="password"
              value={passwordInput}
              onChange={e => setPasswordInput(e.target.value)}
              placeholder="Enter password"
              className="input input-bordered w-full mb-4"
            />
            <div className="modal-action">
              <button onClick={checkPasswordAndProceed} className="btn btn-success">
                Confirm
              </button>
              <button onClick={() => setShowModal(false)} className="btn">
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
