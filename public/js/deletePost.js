async function deleteFormHandler(event) {
  event.preventDefault();

  const id = window.location.href.split("/").pop();
  const response = await fetch(`/api/posts/${id}`, {
    method: "DELETE",
  });

  if (response.ok) {
    document.location.replace("/dashboard");
  } else {
    alert("Failed to delete the post.");
  }
}

document
  .querySelector(".delete-post-btn")
  .addEventListener("click", deleteFormHandler);
