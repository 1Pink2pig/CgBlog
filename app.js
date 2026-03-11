const root = document.documentElement;
const themeToggle = document.getElementById("themeToggle");
const readerToggle = document.getElementById("readerToggle");
const searchInput = document.getElementById("searchInput");
const list = document.getElementById("explorerList");
const archiveInput = document.getElementById("archiveSearch");
const archiveList = document.getElementById("archiveList");

const storedTheme = localStorage.getItem("theme") || "light";
root.setAttribute("data-theme", storedTheme);

if (themeToggle) {
  themeToggle.textContent = storedTheme === "dark" ? "Light mode" : "Dark mode";
  themeToggle.addEventListener("click", () => {
    const current = root.getAttribute("data-theme");
    const next = current === "dark" ? "light" : "dark";
    root.setAttribute("data-theme", next);
    localStorage.setItem("theme", next);
    themeToggle.textContent = next === "dark" ? "Light mode" : "Dark mode";
  });
}

if (readerToggle) {
  readerToggle.addEventListener("click", () => {
    document.body.classList.toggle("reader");
    readerToggle.textContent = document.body.classList.contains("reader")
      ? "Exit reader"
      : "Reader mode";
  });
}

function filterList(inputEl, listEl) {
  if (!inputEl || !listEl) return;
  inputEl.addEventListener("input", () => {
    const query = inputEl.value.trim().toLowerCase();
    Array.from(listEl.querySelectorAll("li")).forEach((item) => {
      const text = item.textContent.toLowerCase();
      item.style.display = text.includes(query) ? "" : "none";
    });
  });
}

filterList(searchInput, list);
filterList(archiveInput, archiveList);
