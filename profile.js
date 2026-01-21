document.addEventListener("DOMContentLoaded", () => {

  const username = localStorage.getItem("loggedInUser");
  if (!username) {
    window.location.href = "index.html";
    return;
  }

  const usernameDisplay = document.getElementById("usernameDisplay");
  const editBtn = document.getElementById("editBtn");
  const saveBtn = document.getElementById("saveBtn");
  const form = document.getElementById("profileForm");

  const inputs = form.querySelectorAll("input");

  usernameDisplay.textContent = username;

  // โหลดข้อมูลที่เคยบันทึก
  inputs.forEach(input => {
    const saved = localStorage.getItem(input.id);
    if (saved) input.value = saved;
  });

  let editing = false;

  editBtn.addEventListener("click", () => {
    editing = !editing;

    inputs.forEach(input => {
      input.disabled = !editing;
    });

    saveBtn.disabled = !editing;
    editBtn.textContent = editing ? "✏️ Cancel" : "✏️ Edit";
  });

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    // ตรวจ 4 ช่องบังคับ
    if (
      !fullname.value ||
      !class.value ||
      !number.value ||
      !email.value
    ) {
      alert("กรุณากรอกข้อมูลให้ครบ");
      return;
    }

    inputs.forEach(input => {
      localStorage.setItem(input.id, input.value);
      input.disabled = true;
    });

    saveBtn.disabled = true;
    editing = false;
    editBtn.textContent = "✏️ Edit";

    alert("บันทึกข้อมูลเรียบร้อย");
  });

});
