async function commentFormHandler(event) {
  event.preventDefault();

  // Get the comment text from the form
  const comment_text = document
    .querySelector('textarea[name="comment-body"]')
    .value.trim();

  // Get the post ID from the URL
  const post_id = window.location.toString().split("/")[
    window.location.toString().split("/").length - 1
  ];

  // Check if comment_text is not empty
  if (comment_text) {
    try {
      // Send a POST request to create a new comment
      const response = await fetch("/api/comments", {
        method: "POST",
        body: JSON.stringify({ post_id, comment_text }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      // Check if the response is successful
      if (response.ok) {
        // Reload the page to display the new comment
        document.location.reload();
      } else {
        // Display an alert with the error message from the response
        alert("Failed to submit comment");
      }
    } catch (err) {
      // Handle any unexpected errors
      console.error(err);
      alert("Failed to submit comment");
    }
  }
}

// Add an event listener to the comment form submission
document
  .querySelector(".comment-form")
  .addEventListener("submit", commentFormHandler);
