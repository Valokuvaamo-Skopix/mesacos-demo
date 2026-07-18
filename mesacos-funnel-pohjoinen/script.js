// Segment quick-picker: no branching logic, just anchors to the relevant need-group.
// Left as explicit click handling (rather than plain <a href>) so a data-segment
// attribute is available if this gets wired to real analytics later.
document.querySelectorAll(".need-card").forEach((card) => {
  card.addEventListener("click", (e) => {
    const targetId = card.getAttribute("href");
    if (!targetId || !targetId.startsWith("#")) return;
    const target = document.querySelector(targetId);
    if (!target) return;
    e.preventDefault();
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  });
});
