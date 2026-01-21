const projects = [
    "01_todo-localstorage",
    "02_weather",
    "03_ecommerce",
    "04_expense_tracker",
    "05_Quiz",
    "06_weather_dashboard",
    "07_3d-boxes-background",
    "08_animated-countdown",
    "09_animated-navigation",
    "10_auto-text-effect",
    "11_background-slider",
    "12_blurry-loading",
    "13_button-ripple-effect",
    "14_content-placeholder",
    "15_custom-range-slider",
    "16_dad-jokes",
    "17_double-click-heart",
    "18_double-vertical-slider",
    "19_drag-n-drop",
    "20_drawing-app",
    "21_drink-water",
    "22_event-keycodes",
    "23_expanding-cards",
    "24_faq-collapse",
    "25_feedback-ui-design",
    "26_form-input-wave",
    "27_github-profiles",
    "28_good-cheap-fast",
    "29_hidden-search",
    "30_hoverboard",
    "31_image-carousel",
    "32_incrementing-counter",
    "33_insect-catch-game",
    "34_kinetic-loader",
    "35_live-user-filter",
    "36_mobile-tab-navigation",
    "37_movie-app",
    "38_netflix-mobile-navigation",
    "39_notes-app",
    "40_password-generator",
    "41_password-strength-background",
    "42_pokedex",
    "43_progress-steps",
    "44_quiz-app",
    "45_random-choice-picker",
    "46_random-image-generator",
    "47_rotating-nav-animation",
    "48_scroll-animation",
    "49_simple-timer",
    "50_sound-board",
    "51_split-landing-page",
    "52_sticky-navigation",
    "53_testimonial-box-switcher",
    "54_theme-clock",
    "55_toast-notification",
    "56_verify-account-ui"
];

const list = document.getElementById("list");
const frame = document.getElementById("frame");
const search = document.getElementById("search");

function label(name) {
    return name.replace(/^\d+_/, "").replace(/-/g, " ");
}

function render(items) {
    list.innerHTML = "";
    items.forEach(p => {
        const div = document.createElement("div");
        div.className = "item";
        div.textContent = label(p);
        div.onclick = () => load(p, div);
        list.appendChild(div);
    });
}

function load(p, el) {
    frame.src = `${p}/index.html`;
    [...list.children].forEach(i => i.classList.remove("active"));
    el.classList.add("active");
}

render(projects);

search.oninput = e => {
    const q = e.target.value.toLowerCase();
    render(projects.filter(p => p.toLowerCase().includes(q)));
};
