ready(() => {
  animate_arrow();
});
function animate_arrow() {
  let timeline = new TimelineMax({ repeat: -1 });
  let arrow = document.getElementById("arrow-button");
  timeline.add(TweenLite.to(arrow, 0.5, { bottom: "1rem", ease: Power0.easeNone }));
  timeline.add(TweenLite.to(arrow, 0.5, { bottom: "2rem", ease: Power0.easeNone }));
  scroll_arrow();
}
function scroll_arrow() {
  let arrow = document.getElementById("arrow-button");
  arrow.addEventListener("click", () => {
    TweenLite.to(window, 1.5, { scrollTo: "#gallery" });
  });
}
