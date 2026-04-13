function toggleAbstract(btn) {
    const item = btn.closest('.publication-item');
    const shortEl = item.querySelector('.abstract-short');
    const fullEl = item.querySelector('.abstract-full');
    const isExpanded = fullEl.style.display === 'block';

    if (isExpanded) {
        fullEl.style.display = 'none';
        shortEl.style.display = 'block';
        btn.textContent = 'Show more';
    } else {
        shortEl.style.display = 'none';
        fullEl.style.display = 'block';
        btn.textContent = 'Show less';
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navigation = document.querySelector('nav ul');

    menuToggle.addEventListener('click', function() {
        navigation.classList.toggle('menu-open');
    });
});

function toggleSection(sectionId) {
    const section = document.getElementById(sectionId);
    // Find the toggle button: the element that has onclick referencing this sectionId
    const toggleButton = document.querySelector(`[onclick="toggleSection('${sectionId}')"] i`);

    if (section.style.display === "none" || section.style.display === "") {
        section.style.display = "block";
        if (toggleButton) toggleButton.style.transform = "rotate(90deg)";
    } else {
        section.style.display = "none";
        if (toggleButton) toggleButton.style.transform = "rotate(0deg)";
    }
}

