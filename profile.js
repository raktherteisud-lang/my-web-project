const usernameDisplay = document.getElementById("usernameDisplay");
const editBtn = document.getElementById("editBtn");
const saveBtn = document.getElementById("saveBtn");

const inputs = {
  fullname: document.getElementById("fullname"),
  classroom: document.getElementById("classroom"),
  number: document.getElementById("number"),
  email: document.getElementById("email"),
  phone: document.getElementById("phone")
};

/* ===== แสดง username จาก localStorage ===== */
usernameDisplay.textContent = localStorage.getItem("username") || "User";

/* ===== เปิดโหมดแก้ไข ===== */
editBtn.addEventListener("click", () => {
  Object.values(inputs).forEach(input => input.disabled = false);
});

/* ===== ตรวจเงื่อนไข Save ===== */
function checkRequiredFields() {
  const requiredFilled =
    inputs.fullname.value.trim() !== "" &&
    inputs.classroom.value.trim() !== "" &&
    inputs.number.value.trim() !== "" &&
    inputs.email.value.trim() !== "";

  saveBtn.disabled = !requiredFilled;
}

/* ===== ตรวจทุกครั้งที่พิมพ์ ===== */
Object.values(inputs).forEach(input => {
  input.addEventListener("input", checkRequiredFields);
});

/* ===== กด Save ===== */
document.getElementById("profileForm").addEventListener("submit", (e) => {
  e.preventDefault();

  localStorage.setItem("profile", JSON.stringify({
    fullname: inputs.fullname.value,
    classroom: inputs.classroom.value,
    number: inputs.number.value,
    email: inputs.email.value,
    phone: inputs.phone.value
  }));

  alert("บันทึกข้อมูลเรียบร้อย");
});
