const header = document.querySelector("header");
const main = document.querySelector("main");

if (header && main) {
    const updateMainOffset = () => {
        const extraSpacing = 32; // pixels
        main.style.paddingTop = `${header.offsetHeight + extraSpacing}px`;
    };

    updateMainOffset();

    const observer = new ResizeObserver(updateMainOffset);
    observer.observe(header);
}