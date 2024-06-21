document.addEventListener("DOMContentLoaded", function () {
  var observer = new IntersectionObserver(function (entries, observer) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add("slide-in-left");
        observer.unobserve(entry.target); // Stop observing after animation
      }
    });
  });

  var target = document.getElementById("stockbot");
  observer.observe(target);
});

document.addEventListener("DOMContentLoaded", function () {
  var observer = new IntersectionObserver(function (entries, observer) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add("slide-in-left");
        observer.unobserve(entry.target); // Stop observing after animation
      }
    });
  });

  var target = document.getElementById("prisoner-escape");
  observer.observe(target);
});

document.addEventListener("DOMContentLoaded", function () {
  var observer = new IntersectionObserver(function (entries, observer) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add("slide-in-left");
        observer.unobserve(entry.target); // Stop observing after animation
      }
    });
  });

  var target = document.getElementById("political-bias");
  observer.observe(target);
});

document.addEventListener("DOMContentLoaded", function () {
  var observer = new IntersectionObserver(function (entries, observer) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add("slide-in-left");
        observer.unobserve(entry.target); // Stop observing after animation
      }
    });
  });

  var target = document.getElementById("get-gt");
  observer.observe(target);
});

document.addEventListener("DOMContentLoaded", function () {
  var observer = new IntersectionObserver(function (entries, observer) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add("slide-in-left");
        observer.unobserve(entry.target); // Stop observing after animation
      }
    });
  });

  var target = document.getElementById("about-card");
  observer.observe(target);
});

document.addEventListener("DOMContentLoaded", function () {
  var observer = new IntersectionObserver(function (entries, observer) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add("slide-in-left");
        observer.unobserve(entry.target); // Stop observing after animation
      }
    });
  });

  var target = document.getElementById("contact-card");
  observer.observe(target);
});

function copyToClipboard(selector, elementIndex) {
  var element = document.querySelectorAll(selector)[elementIndex];
  var tempInput = document.createElement("input");
  tempInput.value = element.innerText;
  document.body.appendChild(tempInput);
  tempInput.select();
  document.execCommand("copy");
  document.body.removeChild(tempInput);

  Swal.fire({
    title: "Copied!",
    text: "Text copied to clipboard: " + element.innerText,
    icon: "success",
    confirmButtonText: "OK",
  });
}

// Mobile
function toggleMenu() {
  const navMenu = document.querySelector(".nav-menu");
  navMenu.style.display = navMenu.style.display === "flex" ? "none" : "flex";
}
