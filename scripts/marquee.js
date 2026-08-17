const marquees = document.querySelectorAll(".logo-marquee");

marquees.forEach((marquee) => {
    const track = marquee.querySelector(".logo-marquee__track");
    const group = marquee.querySelector(".logo-marquee__group");

    if (!track || !group) {
        return;
    }

    const clone = group.cloneNode(true);

    /*
     * The duplicate is only there to create the endless
     * animation. Screen readers shouldn't announce every
     * brand twice.
     */
    clone.setAttribute("aria-hidden", "true");

    track.appendChild(clone);
});