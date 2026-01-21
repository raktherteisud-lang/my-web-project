const usernameText = document.getElementById("username");
const nameInput = document.getElementById("nameInput");
const editBtn = document.getElementById("editBtn");
const saveBtn = document.getElementById("saveBtn");
const inputs = document.querySelectorAll("form input");

let editing = false;

// ดึง username จาก localStorage
const storedUsername = localStorage.getItem("loggedInUser");

if (!storedUsername) {
  window.location.href = "index.html";
}

usernameText.textContent = storedUsername;
nameInput.value = storedUsername;

// toggle edit
editBtn.addEventListener("click", () => {
  editing = !editing;

  inputs.forEach(input => {
    input.disabled = !editing;
  });

  if (editing) {
    saveBtn.disabled = false;
    saveBtn.classList.add("active");
  } else {
    saveBtn.disabled = true;
    saveBtn.classList.remove("active");
  }
});

// save
document.getElementById("profileForm").addEventListener("submit", (e) => {
  e.preventDefault();

  // บันทึกชื่อ (ถ้าต้องการ)
  localStorage.setItem("loggedInUser", nameInput.value);
  usernameText.textContent = nameInput.value;

  editing = false;
  inputs.forEach(input => input.disabled = true);
  saveBtn.disabled = true;
  saveBtn.classList.remove("active");
});
