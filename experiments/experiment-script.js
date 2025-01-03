document.addEventListener("DOMContentLoaded", function () {
    // Create a <ul> element
    const ul = document.createElement("ul");

    // Find all elements with the class "subtitle"
    const subtitles = document.querySelectorAll(".subtitle");

    // Add each subtitle as an <li> to the <ul>
    subtitles.forEach((subtitle) => {
        const li = document.createElement("li");
        li.textContent = subtitle.textContent.trim();
        ul.appendChild(li);
    });

    // Locate the header in the layout (ensure it's the correct header)
    const header = document.querySelector("#top-bar");

    // Inject the <ul> into the located <header>
    if (header) {
        header.appendChild(ul);
    } else {
        console.warn("No <header> found to inject the subtitles.");
    }
});