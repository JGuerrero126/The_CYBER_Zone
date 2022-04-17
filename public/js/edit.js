const updateBlogHandler = async (event) => {
  event.preventDefault();
  if (event.target.hasAttribute("data-id")) {
    const id = event.target.getAttribute("data-id");

    const title = document.querySelector("#updated-blog-title").value.trim();
    const text = document.querySelector("#updated-blog-text").value.trim();

    if (title && text) {
      const response = await fetch(`/api/blogs/${id}`, {
        method: "PUT",
        body: JSON.stringify({ title, text }),
        headers: { "Content-Type": "application/json" },
      });

      if (response.ok) {
        document.location.replace("/dashboard");
      } else {
        alert(response.statusText);
      }
    }
  }
};

const delButtonHandler = async (event) => {
  if (event.target.hasAttribute("data-id")) {
    const id = event.target.getAttribute("data-id");

    const response = await fetch(`/api/blogs/${id}`, {
      method: "DELETE",
    });

    if (response.ok) {
      document.location.replace("/dashboard");
    } else {
      alert("Failed to delete project");
    }
  }
};

document
  .querySelector("#updateBlogBtn")
  .addEventListener("click", updateBlogHandler);

document
  .querySelector("#deleteBlogBtn")
  .addEventListener("click", delButtonHandler);
