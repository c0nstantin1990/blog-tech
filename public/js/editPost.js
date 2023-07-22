async function editFormHandler(event) {
  event.preventDefault();

  const id = window.location.href.split("/").pop();

  const title = document.querySelector('input[name="post-title"]').value;
  const post_text = document.querySelector('textarea[name="post-text"]').value;

  const response = await fetch(`/api/posts/${id}`, {
    method: "PUT",
    body: JSON.stringify({ title, post_text }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (response.ok) {
    document.location.replace("/dashboard");
  } else {
    alert("Failed to update the post.");
  }
}

document
  .querySelector(".edit-post-form")
  .addEventListener("submit", editFormHandler);
