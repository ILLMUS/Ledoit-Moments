// Count-up animation when section enters viewport
  const counters = document.querySelectorAll('.count');
  const options = { threshold: 0.5 };

  const startCount = (entry) => {
    const el = entry.target;
    const target = +el.getAttribute('data-target');
    const speed = 60; // lower = faster

    const updateCount = () => {
      const current = +el.innerText;
      const increment = Math.ceil(target / speed);
      if (current < target) {
        el.innerText = current + increment;
        requestAnimationFrame(updateCount);
      } else {
        el.innerText = target;
      }
    };

    updateCount();
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        startCount(entry);
        observer.unobserve(entry.target); // trigger once
      }
    });
  }, options);

  counters.forEach(counter => observer.observe(counter));