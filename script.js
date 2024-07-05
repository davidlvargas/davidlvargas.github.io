document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navigation = document.querySelector('nav ul');

    menuToggle.addEventListener('click', function() {
        navigation.classList.toggle('menu-open');
    });
});

document.addEventListener("DOMContentLoaded", () => {
    // Function to toggle the visibility of the section
    function toggleSection(sectionId) {
        const section = document.getElementById(sectionId);
        const toggleButton = document.getElementById('togglePolicy').querySelector('i');

        if (section.style.display === "none" || section.style.display === "") {
            section.style.display = "block";
            toggleButton.style.transform = "rotate(90deg)";
        } else {
            section.style.display = "none";
            toggleButton.style.transform = "rotate(0deg)";
        }
    }

    // Add event listener for the "Policy and Other" section toggle button
    document.getElementById('togglePolicy').addEventListener('click', () => {
        toggleSection('policyAndOtherContent');
    });
});

