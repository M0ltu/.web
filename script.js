// === Popup Profil dengan Overlay ===
const profileBtn = document.getElementById("profileBtn");
const profilePopup = document.getElementById("profilePopup");
const overlay = document.getElementById("overlay");

// Saat klik profil
profileBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  const isOpen = profilePopup.style.display === "block";

  if (!isOpen) {
    profilePopup.style.display = "block";
    overlay.classList.add("show");
  } else {
    profilePopup.style.display = "none";
    overlay.classList.remove("show");
  }
});

// Tutup jika klik di luar popup
document.addEventListener("click", (e) => {
  if (!profilePopup.contains(e.target) && e.target !== profileBtn) {
    profilePopup.style.display = "none";
    overlay.classList.remove("show");
  }
});

// Popup profil toggle
document.getElementById('profileBtn').addEventListener('click', () => {
  document.getElementById('profilePopup').classList.toggle('active');
});

