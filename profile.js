const editBtn = document.getElementById("editBtn");
const form = document.getElementById("profileForm");
const inputs = form.querySelectorAll("input");

// เริ่มต้นให้แก้ไขไม่ได้
inputs.forEach(input => input.disabled = true);

let isEditing = false;

editBtn.addEventListener("click", () => {
    isEditing = !isEditing;

    inputs.forEach(input => {
        input.disabled = !isEditing;
    });

    editBtn.textContent = isEditing ? "✖ Cancel" : "✏ Edit";
});

// กด Save
form.addEventListener("submit", (e) => {
    e.preventDefault();

    inputs.forEach(input => input.disabled = true);
    isEditing = false;
    editBtn.textContent = "✏ Edit";

    alert("บันทึกข้อมูลเรียบร้อย");
});
