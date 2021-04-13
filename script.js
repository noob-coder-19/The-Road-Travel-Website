Array.from(document.querySelectorAll(".nav-btn")).forEach(item => {
    item.onclick = () => {
      item.parentElement.parentElement.classList.toggle("change");
    };
  });