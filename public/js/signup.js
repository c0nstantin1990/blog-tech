async function signupFormHandler(event) {
  event.preventDefault();

  const username = document.querySelector("#username-signup").value.trim();
  const email = document.querySelector("#email-signup").value.trim();
  const password = document.querySelector("#password-signup").value.trim();

  if (!username || !email || !password) {
    alert("Please provide all the required information.");
    return;
  }

  try {
    const response = await fetch("/api/users", {
      method: "POST",
      body: JSON.stringify({ username, email, password }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      alert("Account created! Logging you in now.");
      document.location.replace("/dashboard");
    } else {
      const errorMessage = await response.text();
      alert(`An error occurred: ${errorMessage}`);
    }
  } catch (error) {
    console.error("Error during signup:", error);
    alert("An unexpected error occurred. Please try again later.");
  }
}

document
  .querySelector(".signup-form")
  .addEventListener("submit", signupFormHandler);
