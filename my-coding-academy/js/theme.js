(function () {
    const storageKey = "rajarshi-ai-academy-theme";
    const root = document.documentElement;

    function getPreferredTheme() {
        const savedTheme = localStorage.getItem(storageKey);
        if (savedTheme === "light" || savedTheme === "dark") {
            return savedTheme;
        }

        return window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
    }

    function applyTheme(theme) {
        root.dataset.theme = theme;

        document.querySelectorAll(".theme-toggle").forEach((button) => {
            const isLight = theme === "light";
            button.setAttribute("aria-pressed", String(isLight));
            button.setAttribute("aria-label", isLight ? "Switch to dark theme" : "Switch to light theme");

            const icon = button.querySelector(".theme-icon");
            if (icon) {
                icon.textContent = isLight ? "☀" : "☾";
            }
        });
    }

    applyTheme(getPreferredTheme());

    document.addEventListener("DOMContentLoaded", () => {
        applyTheme(getPreferredTheme());

        document.querySelectorAll(".theme-toggle").forEach((button) => {
            button.addEventListener("click", () => {
                const nextTheme = root.dataset.theme === "light" ? "dark" : "light";
                localStorage.setItem(storageKey, nextTheme);
                applyTheme(nextTheme);
            });
        });
    });
})();
