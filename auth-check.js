// auth-check.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import { firebaseConfig } from "./firebaseConfig.js?v=2";

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Run only after DOM is ready
window.addEventListener("DOMContentLoaded", () => {
  // Auth check
  onAuthStateChanged(auth, (user) => {
    if (!user) {
      window.location.href = "login.html";
    } else {
      const userInfo = document.getElementById("user-info");
      if (userInfo) {
        userInfo.textContent = `👤 ${user.email}`;
      }
    }
  });

  // Logout
  const logoutButton = document.getElementById("logoutBtn");
  if (logoutButton) {
    logoutButton.addEventListener("click", async () => {
      try {
        await signOut(auth);
        window.location.href = "login.html";
      } catch (error) {
        alert("Logout failed: " + error.message);
      }
    });
  }
});
