// ============================================
// CONFIGURATION — change these values to demo Git/CI-CD
// ============================================
const DEMO_STATUS = "Deployed from local development";
const WORKSHOP_DATE = "Coming Soon";

// ============================================
// Apply configuration to the page
// ============================================
document.querySelector("#demo-status").textContent = DEMO_STATUS;
document.querySelector("#workshop-date").textContent = `Workshop Date: ${WORKSHOP_DATE}`;

// ============================================
// Interactive Checklist Toggle
// ============================================
const toggleButton = document.querySelector("#toggle-checklist");
const checklist = document.querySelector("#checklist");

toggleButton.addEventListener("click", () => {
  const isHidden = checklist.classList.contains("hidden");

  if (isHidden) {
    checklist.classList.remove("hidden");
    toggleButton.textContent = "Hide Checklist";
  } else {
    checklist.classList.add("hidden");
    toggleButton.textContent = "Show Checklist";
  }
});

// Log to console for debugging
console.log("Workshop Hub loaded. Demo status:", DEMO_STATUS);