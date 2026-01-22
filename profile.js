const editBtn = document.getElementById('editBtn');
const form = document.getElementById('profileForm');
const inputs = form.querySelectorAll('input');
const saveBtn = form.querySelector('.save-btn');

// เริ่มต้น: ล็อกทุกช่อง
inputs.forEach(input => input.disabled = true);
saveBtn.disabled = true;

let isEditing = false;

editBtn.addEventListener('click', () => {
  isEditing = !isEditing;

  inputs.forEach(input => {
    input.disabled = !isEditing; // ⭐ แก้ตรงนี้
  });

  saveBtn.disabled = !isEditing;

  editBtn.textContent = isEditing ? '✖ Cancel' : '✎ Edit';
});

// Save
form.addEventListener('submit', (e) => {
  e.preventDefault();

  inputs.forEach(input => input.disabled = true);
  saveBtn.disabled = true;
  isEditing = false;
  editBtn.textContent = '✎ Edit';

  alert('บันทึกข้อมูลเรียบร้อย');
});

