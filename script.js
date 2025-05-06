document.getElementById("colorBtn").addEventListener("click", () => {
    const btn = document.getElementById("colorBtn");
    btn.style.backgroundColor = "#" + Math.floor(Math.random()*16777215).toString(16);
    btn.textContent = "Clicked!";
  });
  
  document.getElementById("secretBtn").addEventListener("dblclick", () => {
    alert("Secret Unlocked 🎉");
  });
  
  document.addEventListener("keydown", (e) => {
    document.getElementById("keyOutput").textContent = `You pressed: ${e.key}`;
  });
  
  document.querySelectorAll(".thumbnails img").forEach(img => {
    img.addEventListener("click", () => {
      document.getElementById("mainImage").src = img.src;
    });
  });
  
  document.querySelectorAll(".tab").forEach(button => {
    button.addEventListener("click", () => {
      document.querySelectorAll(".tab-content").forEach(tab => {
        tab.classList.remove("active");
      });
      document.getElementById(button.dataset.target).classList.add("active");
    });
  });
  
  const form = document.getElementById("userForm");
  const email = document.getElementById("email");
  const password = document.getElementById("password");
  const emailFeedback = document.getElementById("emailFeedback");
  const passwordFeedback = document.getElementById("passwordFeedback");
  
  email.addEventListener("input", () => {
    const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value);
    emailFeedback.textContent = isValid ? "" : "Invalid email format";
  });
  
  password.addEventListener("input", () => {
    passwordFeedback.textContent = password.value.length >= 8 ? "" : "Password must be at least 8 characters";
  });
  
  form.addEventListener("submit", e => {
    let valid = true;
  
    if (!email.value || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
      emailFeedback.textContent = "Please enter a valid email";
      valid = false;
    }
  
    if (!password.value || password.value.length < 8) {
      passwordFeedback.textContent = "Password too short";
      valid = false;
    }
  
    if (!valid) e.preventDefault();
  });
  