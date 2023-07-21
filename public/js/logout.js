async function logout() {
  try {
    const response = await fetch("/api/users/logout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      document.location.replace("/");
    } else {
      throw new Error(`Logout failed: ${response.statusText}`);
    }
  } catch (error) {
    alert(error.message);
  }
}

document.querySelector("#logout").addEventListener("click", logout);
