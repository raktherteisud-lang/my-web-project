document.addEventListener("DOMContentLoaded", () => {

  const username = localStorage.getItem("loggedInUser");

  const welcomeMsg = document.getElementById("welcomeMsg");
  const pointsDisplay = document.getElementById("points");
  const logoutBtn = document.getElementById("logoutBtn");
  const menuBtn = document.getElementById("menuBtn");
  const sidebar = document.getElementById("sidebar");

  // ป้องกัน sidebar โผล่เอง
  sidebar.classList.remove("open");

  // เช็ก login
  if (!username) {
    window.location.href = "index.html";
    return;
  }

  // แสดงชื่อ
  welcomeMsg.textContent = `Welcome, ${username}!`;

  // points
  let points = localStorage.getItem("points");
  if (points === null) {
    points = 0;
    localStorage.setItem("points", points);
  }
  pointsDisplay.textContent = `Points: ${points}`;

  // ☰ toggle sidebar
  menuBtn.addEventListener("click", () => {
    sidebar.classList.toggle("open");
  });

  // Log out
  logoutBtn.addEventListener("click", () => {
    localStorage.removeItem("loggedInUser");
    window.location.href = "index.html";
  });

});
