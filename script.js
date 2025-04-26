
window.addEventListener("load", () => {
    const loader = document.getElementById("loader");
    const content = document.getElementById("content");

    setTimeout(() => {
        loader.style.display = "none";
        content.classList.remove("hidden");
    }, 2000);
});
