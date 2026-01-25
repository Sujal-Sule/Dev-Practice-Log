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
    "17_double-click-heart"
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
