const newCommentHandler = async (event) => {
  console.log("this is working!");
  event.preventDefault();

  const text = document.querySelector("#comment-text").value.trim();
  const blog_id = event.target.getAttribute("data-id");

  if (blog_id) {
    console.log("this is working!");
    const response = await fetch("/api/comments", {
      method: "POST",
      body: JSON.stringify({ blog_id, text }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace(`/blogs/${blog_id}`);
    } else {
      alert(response.statusText);
    }
  }
};

document
  .querySelector(".newcomment")
  .addEventListener("submit", newCommentHandler);
