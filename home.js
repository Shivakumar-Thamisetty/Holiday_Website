document.addEventListener("DOMContentLoaded", function() {
    const contactUsTab = document.getElementById("contact-us-tab");
    const contactUsSection = document.getElementById("contact-us-section");

    contactUsTab.addEventListener("click", function(event) {
        event.preventDefault();
        if (contactUsSection.style.display === "none") {
            contactUsSection.style.display = "block";
        } else {
            contactUsSection.style.display = "none";
        }
    });
});
