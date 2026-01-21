document.addEventListener("DOMContentLoaded", () => {

  const username = localStorage.getItem("loggedInUser");

  const usernameDisplay = document.getElementById("usernameDisplay");
  const editBtn = document.getElementById("editBtn");
  const saveBtn = document.getElementById("saveBtn");
  const inputs = document.querySelectorAll("#profileForm input");

  // แสดง username จาก localStorage
  if (username) {
    usernameDisplay.textContent = username;
  }

  let editing = false;

  // กด Edit เพื่อเปิด/ปิดการแก้ไข
  editBtn.addEventListener("click", () => {
    editing = !editing;

    inputs.forEach(input => {
      input.disabled = !editing;
    });

    saveBtn.disabled = !editing;
    editBtn.textContent = editing ? "❌ Cancel" : "✏️ Edit";
  });

  // Save
  document.getElementById("profileForm").addEventListener("submit", (e) => {
    e.preventDefault();
    alert("บันทึกข้อมูลเรียบร้อย");
    editing = false;

    inputs.forEach(input => input.disabled = true);
    saveBtn.disabled = true;
    editBtn.textContent = "✏️ Edit";
  });

});
