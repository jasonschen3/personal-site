document.addEventListener("DOMContentLoaded", function () {
  // Initialize the IntersectionObserver
  const observer = new IntersectionObserver(function (entries, observer) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add("slide-in-left");
        observer.unobserve(entry.target); // Stop observing after animation
      }
    });
  });

  const targetIds = [
    "tnkr",
    "creekocw",
    "lunchbox",
    "hermedoc",
    "otek",
    "illuminate",
    "stockbot",
    "prisoner-escape",
    "political-bias",
    "get-gt",
    "about-card",
    "contact-card",
  ];

  // Observe each target
  targetIds.forEach((id) => {
    const target = document.getElementById(id);
    if (target) observer.observe(target);
  });
});

// Function to copy text to clipboard
function copyToClipboard(selector, elementIndex) {
  const element = document.querySelectorAll(selector)[elementIndex];
  const tempInput = document.createElement("input");
  tempInput.value = element.innerText;
  document.body.appendChild(tempInput);
  tempInput.select();
  document.execCommand("copy");
  document.body.removeChild(tempInput);

  Swal.fire({
    title: "Copied!",
    text: `Text copied to clipboard: ${element.innerText}`,
    icon: "success",
    confirmButtonText: "OK",
  });
}

// Function to toggle mobile navigation menu
function toggleMenu() {
  const navMenu = document.querySelector(".nav-menu");
  navMenu.style.display = navMenu.style.display === "flex" ? "none" : "flex";
}
