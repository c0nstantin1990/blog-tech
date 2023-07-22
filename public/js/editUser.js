async function editFormHandler(event) {
  event.preventDefault();

  const username = document
    .querySelector('input[name="user-name"]')
    .value.trim();
  const email = document.querySelector('input[name="email"]').value.trim();
  const password = document
    .querySelector('input[name="password"]')
    .value.trim();
  const id = document.querySelector('input[name="user-id"]').value;

  if (!password) {
    alert(
      "You must enter your current password to confirm changes or enter a new password."
    );
    return;
  }

  const userUpdate = {
    username: username || undefined,
    email: email || undefined,
    password: password,
  };

  const response = await fetch(`/api/users/${id}`, {
    method: "PUT",
    body: JSON.stringify(userUpdate),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (response.ok) {
    document.location.replace("/dashboard");
  } else {
    alert("Failed to update the user information.");
  }
}

document
  .querySelector(".edit-user-form")
  .addEventListener("submit", editFormHandler);
