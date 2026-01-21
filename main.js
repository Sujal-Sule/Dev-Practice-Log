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
    "13_button-ripple-effect"
];

const list = document.getElementById("list");
const frame = document.getElementById("frame");
const search = document.getElementById("search");

function label(name) {
    return name.replace(/^\d+_/, "").replace(/-/g, " ");
}

async function exists(path) {
    try {
        const r = await fetch(path, { method: "HEAD" });
        return r.ok;
    } catch {
        return false;
    }
}

async function init() {
    const available = [];

    for (const p of projects) {
        const ok = await exists(`${p}/index.html`);
        if (ok) available.push(p);
    }

    render(available);
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

    if (items.length) load(items[0], list.children[0]);
}

function load(p, el) {
    frame.src = `${p}/index.html`;
    [...list.children].forEach(i => i.classList.remove("active"));
    el.classList.add("active");
}

search.oninput = e => {
    const q = e.target.value.toLowerCase();
    const visible = [...list.children].filter(d =>
        d.textContent.toLowerCase().includes(q)
    );
    visible.forEach(d => d.style.display = "block");
    [...list.children]
        .filter(d => !visible.includes(d))
        .forEach(d => d.style.display = "none");
};

init();
