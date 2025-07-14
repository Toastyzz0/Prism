    const menu = document.getElementById('customMenu');

    // Show custom menu on right click
    document.addEventListener('contextmenu', (e) => {
      e.preventDefault();
      menu.style.top = `${e.clientY}px`;
      menu.style.left = `${e.clientX}px`;
      menu.style.display = 'block';
    });

    // Hide menu on click anywhere
    document.addEventListener('click', () => {
      menu.style.display = 'none';
    });

    // Example actions
    document.getElementById('item1').addEventListener('click', () => {
        window.open("https://toastyzz0.github.io/Prism/index.html", "_blank");
    });
    document.getElementById('item2').addEventListener('click', () => {
       window.open("https://github.com/Toastyzz0/Prism/", "_blank");
    });
    document.getElementById('item3').addEventListener('click', () => {
       window.open("https://toastyzz0.github.io/Prism/profile.html", "_blank");
    });