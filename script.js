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
