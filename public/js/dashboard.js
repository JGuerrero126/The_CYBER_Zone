const newBlogHandler = async (event) => {
  console.log("this is working!");
  event.preventDefault();

  const title = document.querySelector("#blog-title").value.trim();
  const text = document.querySelector("#blog-text").value.trim();

  if (title && text) {
    console.log("this is working!");
    const response = await fetch("/api/blogs", {
      method: "POST",
      body: JSON.stringify({ title, text }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/dashboard");
    } else {
      alert(response.statusText);
    }
  }
};

document
  .querySelector(".newblogform")
  .addEventListener("submit", newBlogHandler);
