document.addEventListener('DOMContentLoaded', () => {
  const categoryElements = document.querySelectorAll('.category');
  const allSections = document.querySelectorAll('.all-cards, .Birthday, .Wedding, .Event,.Corporate');

  categoryElements.forEach((category) => {
    category.addEventListener('click', () => {
      const selectedText = category.innerText.trim().toLowerCase();

      allSections.forEach((section) => {
        if (section.classList.contains(selectedText.charAt(0).toUpperCase() + selectedText.slice(1))) {
          section.style.display = 'block';
        } else {
          section.style.display = 'none';
        }
      });
    });
  });
});
