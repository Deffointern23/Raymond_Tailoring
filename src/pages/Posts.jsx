import { Pencil, Trash2 } from "lucide-react";
import { useState } from "react";
const Posts = () => {
  const [showModal, setShowModal] = useState(false);

  const [posts, setPosts] = useState([]);
  const [showEditModal, setShowEditModal] = useState(false);
  const [editingPost, setEditingPost] = useState(null);
  const [originalPost, setOriginalPost] = useState(null);
  const [newPost, setNewPost] = useState({
    title: "",
    category: "",
    caption: "",
    status: "Published",
  });
  const [selectedColor, setSelectedColor] = useState("#7d1731");
  const [activeFilter, setActiveFilter] = useState("All");
  const isFormValid =
    newPost.title.trim() !== "" &&
    newPost.category.trim() !== "" &&
    newPost.caption.trim() !== "";

  const publishedCount = posts.filter(
    (post) => post.status === "Published",
  ).length;

  const draftCount = posts.filter((post) => post.status === "Draft").length;
  return (
    <div className="min-h-screen bg-[#f7f5f2] p-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
        <div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-serif text-[#2c241c] font-semibold">
            Posts
          </h1>

          <p className="text-sm text-gray-500 mt-2">
            Showcase your finished work — published designs draw in custom
            tailoring requests.
          </p>
        </div>

        <button
          onClick={() => setShowModal(true)}
          className="bg-[#b88d3b] text-white px-5 py-3 rounded-xl shadow-md font-medium w-full sm:w-auto"
        >
          + New Post
        </button>
      </div>

      {/* Stats Cards */}
      <div className="grid md:grid-cols-4 gap-4 mb-6">
        <div className="bg-white border border-[#e8dfd6] rounded-2xl p-5 text-center">
          <p className="text-sm text-gray-500 mb-2">Published</p>
          <h2 className="text-4xl font-bold text-[#2c241c]">
            {publishedCount}
          </h2>
        </div>

        <div className="bg-white border border-[#e8dfd6] rounded-2xl p-5 text-center">
          <p className="text-sm text-gray-500 mb-2">Total Likes</p>
          <h2 className="text-4xl font-bold text-[#c85f4c]">953</h2>
        </div>

        <div className="bg-white border border-[#e8dfd6] rounded-2xl p-5 text-center">
          <p className="text-sm text-gray-500 mb-2">Inquiries</p>
          <h2 className="text-4xl font-bold text-[#4b7b89]">62</h2>
        </div>

        <div className="bg-white border border-[#e8dfd6] rounded-2xl p-5 text-center">
          <p className="text-sm text-gray-500 mb-2">Drafts</p>
          <h2 className="text-4xl font-bold text-[#8b6f63]">{draftCount}</h2>
        </div>
      </div>

      {/* Filter Buttons */}
      <div className="flex gap-3">
        <button
          onClick={() => setActiveFilter("All")}
          className={`px-4 py-2 rounded-xl ${
            activeFilter === "All"
              ? "border border-[#b88d3b] text-[#b88d3b]"
              : "border border-gray-300 text-gray-600"
          }`}
        >
          All
        </button>

        <button
          onClick={() => setActiveFilter("Published")}
          className={`px-4 py-2 rounded-xl ${
            activeFilter === "Published"
              ? "border border-[#b88d3b] text-[#b88d3b]"
              : "border border-gray-300 text-gray-600"
          }`}
        >
          Published
        </button>

        <button
          onClick={() => setActiveFilter("Draft")}
          className={`px-4 py-2 rounded-xl ${
            activeFilter === "Draft"
              ? "border border-[#b88d3b] text-[#b88d3b]"
              : "border border-gray-300 text-gray-600"
          }`}
        >
          Drafts
        </button>
      </div>

      {/* Posts Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-5 mt-6">
        {/* Create New Post */}
        <div
          onClick={() => setShowModal(true)}
          className="bg-white border-2 border-dashed border-[#e5d8ca] rounded-3xl h-[320px] flex flex-col items-center justify-center text-center cursor-pointer"
        >
          <div className="w-14 h-14 rounded-full bg-[#f5efe4] flex items-center justify-center text-3xl text-[#b88d3b] mb-4">
            +
          </div>

          <h3 className="font-semibold text-[#2c241c] text-lg">
            Create a new post
          </h3>

          <p className="text-sm text-gray-500 mt-2 max-w-[200px]">
            Add a finished design to your storefront showcase
          </p>
        </div>

        {posts
          .filter((post) => {
            if (activeFilter === "All") return true;
            return post.status === activeFilter;
          })
          .map((post, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl overflow-hidden border border-[#ebe3da] shadow-sm"
            >
              <div
                className="h-[170px] relative"
                style={{ backgroundColor: post.color }}
              >
                <span className="absolute top-3 right-3 bg-white text-gray-600 text-xs px-3 py-1 rounded-full">
                  {post.status}
                </span>

                <span className="absolute bottom-3 left-3 bg-white text-xs px-3 py-1 rounded-full">
                  {post.category}
                </span>
              </div>

              <div className="p-4">
                <h3 className="font-bold text-[#2c241c]">{post.title}</h3>

                <p className="text-gray-500 text-sm mt-1 mb-4">
                  {post.caption}
                </p>

                <div className="flex justify-between text-base text-gray-500">
                  <div className="flex gap-3">
                    <span>♡ 0</span>
                    <span>👁 0</span>
                    <span>💬 0</span>
                  </div>

                  <div className="flex gap-2">
                    <button
                      onClick={() => {
                        setEditingPost(post);
                        setOriginalPost(post);
                        setShowEditModal(true);
                      }}
                      className="text-gray-600 hover:text-blue-600"
                    >
                      <Pencil size={20} />
                    </button>

                    <button
                      onClick={() =>
                        setPosts(posts.filter((_, i) => i !== index))
                      }
                      className="text-gray-600 hover:text-red-600"
                    >
                      <Trash2 size={20} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}

        {/* Post Card 1 */}

        {showModal && (
          <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
            <div className="bg-white w-full max-w-[750px] mx-4 max-h-[90vh] rounded-3xl overflow-hidden">
              <div className="max-h-[90vh] overflow-y-auto">
                {/* Header */}
                <div className="flex items-start justify-between p-6 border-b">
                  <div>
                    <h2 className="text-3xl font-serif text-[#2c241c]">
                      New Showcase Post
                    </h2>

                    <p className="text-sm text-gray-500 mt-1">
                      Share a finished piece to attract custom orders
                    </p>
                  </div>

                  <button
                    onClick={() => setShowModal(false)}
                    className="w-8 h-8 rounded-lg border flex items-center justify-center"
                  >
                    ✕
                  </button>
                </div>

                <div className="p-6">
                  {/* Banner */}
                  <div
                    className="h-[180px] rounded-2xl relative mb-5"
                    style={{ backgroundColor: selectedColor }}
                  >
                    <span className="absolute bottom-3 left-3 bg-white px-3 py-1 rounded-full text-xs">
                      Bridal Couture
                    </span>
                  </div>

                  {/* Title */}
                  <div className="mb-4">
                    <label className="text-sm font-medium">Title</label>

                    <input
                      className="w-full border rounded-xl p-3 mt-2"
                      placeholder="e.g. Hand-Embroidered Bridal Lehenga"
                      onChange={(e) =>
                        setNewPost({
                          ...newPost,
                          title: e.target.value,
                        })
                      }
                    />
                  </div>

                  {/* Category + Status */}
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div>
                      <label className="block text-sm font-medium text-[#2c241c] mb-2">
                        Category
                      </label>

                      <select
                        className="w-full border rounded-xl p-3"
                        onChange={(e) =>
                          setNewPost({
                            ...newPost,
                            category: e.target.value,
                          })
                        }
                      >
                        <option value="">Select Category</option>
                        <option value="Bridal Couture">Bridal Couture</option>
                        <option value="Pant Suit">Pant Suit</option>
                        <option value="Wedding Wear">Wedding Wear</option>
                        <option value="Ethnic Sets">Ethnic Sets</option>
                        <option value="Saree Styling">Saree Styling</option>
                        <option value="Designer Blouses">
                          Designer Blouses
                        </option>
                        <option value="Alterations">Alterations</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-[#2c241c] mb-2">
                        Status
                      </label>

                      <select
                        className="w-full border rounded-xl p-3"
                        onChange={(e) =>
                          setNewPost({
                            ...newPost,
                            status: e.target.value,
                          })
                        }
                      >
                        <option value="Published">Published</option>
                        <option value="Draft">Draft</option>
                      </select>
                    </div>
                  </div>

                  {/* Caption */}
                  <div className="mb-4">
                    <label className="text-sm font-medium">Caption</label>

                    <textarea
                      rows={4}
                      className="w-full border rounded-xl p-3 mt-2"
                      placeholder="Describe the craftsmanship..."
                      onChange={(e) =>
                        setNewPost({
                          ...newPost,
                          caption: e.target.value,
                        })
                      }
                    />
                  </div>

                  {/* Color Swatches */}
                  <div className="mb-6">
                    <p className="text-sm text-gray-500 mb-3">Cover swatch</p>

                    <div className="flex gap-3 flex-wrap">
                      {[
                        "#7d1731",
                        "#243457",
                        "#d7c7a2",
                        "#b89438",
                        "#356344",
                        "#a75d72",
                        "#2d2d2d",
                        "#2f6f73",
                      ].map((color) => (
                        <button
                          key={color}
                          onClick={() => setSelectedColor(color)}
                          className={`w-8 h-8 rounded-lg transition-all ${
                            selectedColor === color
                              ? "ring-2 ring-black scale-110"
                              : ""
                          }`}
                          style={{ backgroundColor: color }}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Footer */}
                  <div className="flex justify-end gap-3">
                    <button
                      onClick={() => setShowModal(false)}
                      className="border px-5 py-3 rounded-xl"
                    >
                      Cancel
                    </button>

                    <button
                      onClick={() => {
                        setPosts([
                          ...posts,
                          {
                            ...newPost,
                            color: selectedColor,
                          },
                        ]);
                        setShowModal(false);
                      }}
                      disabled={!isFormValid}
                      className={`px-5 py-3 rounded-xl text-white transition-all ${
                        isFormValid
                          ? "bg-[#8B6B2E] hover:bg-[#755923]"
                          : "bg-[#d8c08b] cursor-not-allowed"
                      }`}
                    >
                      ✓ Publish Post
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {showEditModal && (
          <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
            <div className="bg-white w-full max-w-[750px] mx-4 max-h-[90vh] rounded-3xl overflow-hidden">
              <div className="max-h-[90vh] overflow-y-auto">
                {/* Header */}
                <div className="flex items-start justify-between p-6 border-b">
                  <div>
                    <h2 className="text-3xl font-serif text-[#2c241c]">
                      Edit Post
                    </h2>

                    <p className="text-sm text-gray-500 mt-1">
                      Update your showcase post details
                    </p>
                  </div>

                  <button
                    onClick={() => setShowEditModal(false)}
                    className="w-8 h-8 rounded-lg border flex items-center justify-center"
                  >
                    ✕
                  </button>
                </div>

                <div className="p-6">
                  {/* Banner */}
                  <div
                    className="h-[180px] rounded-2xl relative mb-5"
                    style={{ backgroundColor: editingPost?.color }}
                  >
                    <span className="absolute bottom-3 left-3 bg-white px-3 py-1 rounded-full text-xs">
                      {editingPost?.category}
                    </span>
                  </div>

                  {/* Title */}
                  <div className="mb-4">
                    <label className="text-sm font-medium">Title</label>

                    <input
                      value={editingPost?.title || ""}
                      onChange={(e) =>
                        setEditingPost({
                          ...editingPost,
                          title: e.target.value,
                        })
                      }
                      className="w-full border rounded-xl p-3 mb-4"
                    />
                  </div>

                  {/* Category + Status */}
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div>
                      <label className="block text-sm font-medium text-[#2c241c] mb-2">
                        Category
                      </label>

                      <select
                        value={editingPost?.category || ""}
                        onChange={(e) =>
                          setEditingPost({
                            ...editingPost,
                            category: e.target.value,
                          })
                        }
                        className="w-full border rounded-xl p-3 mb-4"
                      >
                        <option value="Bridal Couture">Bridal Couture</option>
                        <option value="Pant Suit">Pant Suit</option>
                        <option value="Wedding Wear">Wedding Wear</option>
                        <option value="Ethnic Sets">Ethnic Sets</option>
                        <option value="Saree Styling">Saree Styling</option>
                        <option value="Designer Blouses">
                          Designer Blouses
                        </option>
                        <option value="Alterations">Alterations</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-[#2c241c] mb-2">
                        Status
                      </label>

                      <select
                        value={editingPost?.status || "Published"}
                        onChange={(e) =>
                          setEditingPost({
                            ...editingPost,
                            status: e.target.value,
                          })
                        }
                        className="w-full border rounded-xl p-3 mb-4"
                      >
                        <option value="Published">Published</option>
                        <option value="Draft">Draft</option>
                      </select>
                    </div>
                  </div>

                  {/* Caption */}
                  <div className="mb-4">
                    <label className="text-sm font-medium">Caption</label>

                    <textarea
                      value={editingPost?.caption || ""}
                      onChange={(e) =>
                        setEditingPost({
                          ...editingPost,
                          caption: e.target.value,
                        })
                      }
                      rows={4}
                      className="w-full border rounded-xl p-3 mb-6"
                    />
                  </div>

                  {/* Color Swatches */}
                  <div className="mb-6">
                    <p className="text-sm text-gray-500 mb-3">Cover swatch</p>

                    <div className="flex gap-3 flex-wrap">
                      {[
                        "#7d1731",
                        "#243457",
                        "#d7c7a2",
                        "#b89438",
                        "#356344",
                        "#a75d72",
                        "#2d2d2d",
                        "#2f6f73",
                      ].map((color) => (
                        <button
                          key={color}
                          onClick={() =>
                            setEditingPost({
                              ...editingPost,
                              color,
                            })
                          }
                          className={`w-8 h-8 rounded-lg ${
                            editingPost?.color === color
                              ? "ring-2 ring-black scale-110"
                              : ""
                          }`}
                          style={{ backgroundColor: color }}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Footer */}
                  <div className="flex justify-end gap-3">
                    <button
                      onClick={() => setShowEditModal(false)}
                      className="border px-5 py-3 rounded-xl"
                    >
                      Cancel
                    </button>

                    <button
                      onClick={() => {
                        setPosts(
                          posts.map((post) =>
                            post === originalPost ? editingPost : post,
                          ),
                        );

                        setShowEditModal(false);
                      }}
                      className="bg-[#8B6B2E] text-white px-5 py-3 rounded-xl"
                    >
                      Update Post
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Posts;
