document.addEventListener("DOMContentLoaded", () => {

  const username = localStorage.getItem("loggedInUser");
  if (!username) {
    window.location.href = "index.html";
    return;
  }

  document.getElementById("username").textContent = username;

  const inputs = document.querySelectorAll(".profile-form input");
  const editBtn = document.getElementById("editBtn");
  const saveBtn = document.getElementById("saveBtn");
  const backBtn = document.getElementById("backBtn");

  let isEditing = false;

  // โหลดข้อมูลเดิม
  inputs.forEach(input => {
    const saved = localStorage.getItem(input.id);
    if (saved) input.value = saved;
  });

  // Edit toggle
  editBtn.addEventListener("click", () => {
    isEditing = !isEditing;

    inputs.forEach(input => {
      input.disabled = !isEditing;
    });

    saveBtn.disabled = !isEditing;
    editBtn.textContent = isEditing ? "✖ Cancel" : "✏️ Edit";
  });

  // Save
  saveBtn.addEventListener("click", () => {
    inputs.forEach(input => {
      localStorage.setItem(input.id, input.value);
    });

    isEditing = false;
    inputs.forEach(input => input.disabled = true);
    saveBtn.disabled = true;
    editBtn.textContent = "✏️ Edit";

    alert("Saved!");
  });

  // Back
  backBtn.addEventListener("click", () => {
    window.location.href = "loggedin.html";
  });

});
