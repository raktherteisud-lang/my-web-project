const form = document.getElementById('signupForm');
    const errorMsg = document.getElementById('errorMsg');

    form.addEventListener('submit', function(e) {
      e.preventDefault();
      const username = document.getElementById('username').value;
      const password = document.getElementById('password').value;
      const confirmPassword = document.getElementById('confirmPassword').value;

      if (password !== confirmPassword) {
        errorMsg.textContent = "Passwords do not match.";
        return;
      }

      // Save user data (for demo only, not secure)
      localStorage.setItem('username', username);
      localStorage.setItem('password', password);

      // Redirect to login page
      window.location.href = "index.html";
    });