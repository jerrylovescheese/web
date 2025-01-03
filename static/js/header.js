/*
 * Author: Jerry Li
 * Date: 2025-01-03
 * Version: 1.0
 */

document.addEventListener("DOMContentLoaded", function () {
    // Create the header HTML
    const headerHTML = `
    <header id="aerobe">
        <div id="top-bar">
            <div id="hello"><span id="greeting-sentence"></span></div>
            <a href="https://jerryly.top">
                <div id="home"></div>
            </a>
            <div id="bar-separator-1"><i class="fas fa-chevron-right"></i></div>
            <a href="#">
                <div id="current-page"><span id="titleDisplay"></span></div>
            </a>
            <div id="bar-separator-2"><i class="fas fa-chevron-right"></i></div>
        </div>
        <div id="map">
            <div id="map-text">
                <a href="./search.html" target="_blank"><input type="text" id="search"
                        placeholder="Search for anything..."></a>
                <div id="map-table-of-contents">
                    <div>
                        <div class="b-item-2">things I love</div>
                        <a href="./apple.html"><div class="b-item">Apple</div></a>
                        <a href="./friends.html"><div class="b-item">Friends</div></a>
                        <a href="./music.html"><div class="b-item">Music</div></a>
                        <a href="./taylorswift.html"><div class="b-item">Swiftie</div></a>
                    </div>
                    <div>
                        <div class="b-item-2">festivity</div>
                        <a href="./christmas.html"><div class="b-item">Christmas</div></a>
                        <a href="./homemade_giftcard.html"><div class="b-item">Homemade Giftcard</div></a>
                    </div>
                    <div>
                        <div class="b-item-2">other stuff</div>
                        <a href="./aluminum_studio.html"><div class="b-item">About</div></a>
                        <a href="https://blog.jerryly.top"><div class="b-item">Blog&emsp13;&emsp13;<i class="fa-solid fa-arrow-up-right-from-square"></i></div></a>
                        <a href="./classical_ch_sh.html"><div class="b-item">Classical Chinese for Senior High</div></a>
                        <a href="./classical_ch.html"><div class="b-item">Classical Chinese for Junior High</div></a>
                        <a href="./clock.html"><div class="b-item">Clock</div></a>
                        <a href="./contact.html"><div class="b-item">Contact</div></a>
                        <a href="./develop.html"><div class="b-item">Develop</div></a>
                        <a href="./flashback.html"><div class="b-item">Rainbow Room</div></a>
                        <a href="./gallery.html"><div class="b-item">Gallery</div></a>
                        <a href="./noticeboard.html"><div class="b-item">Noticeboard</div></a>
                        <a href="./search.html"><div class="b-item">Search (beta)</div></a>
                        <a href="./survey.html"><div class="b-item">Survey</div></a>
                    </div>
                </div>
            </div>
        </div>
    </header>
    `;

    // Inject header HTML into the container
    document.getElementById("header-container").innerHTML = headerHTML;

    // Add greeting text
    const currentHour = new Date().getHours();
    const greetingText =
        currentHour >= 5 && currentHour < 12
            ? "Good morning"
            : currentHour >= 12 && currentHour < 18
                ? "Good afternoon"
                : "Good evening";
    document.getElementById("greeting-sentence").textContent = greetingText;

    // Add title text
    document.getElementById("titleDisplay").textContent = document.title;

    // Handle hover and toggle behavior
    document.getElementById("bar-separator-1").addEventListener("click", function () {
        document.getElementById("aerobe").classList.toggle("active");
        document.getElementById("map").classList.toggle("active");
        document.getElementById("map-text").classList.toggle("active");
    });
    // Dynamically generate list from subtitles
    const ul = document.createElement("ul");
    document.querySelectorAll(".subtitle").forEach((subtitle) => {
        const li = document.createElement("li");
        li.textContent = subtitle.textContent.trim();
        ul.appendChild(li);
    });
    const topBar = document.querySelector("#top-bar");
    topBar.appendChild(ul);
});
