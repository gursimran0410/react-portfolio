import "./styles.scss";

window.onscroll = () => {
  scrollDetector();
};

var scrollDetector = () => {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
};

// let threshold = [];
// for (let tValue = 0.0; tValue <= 1.0; tValue = tValue + 0.01) {
//   threshold.push(tValue);
// }
// let options = {
//   root: null,
//   rootMargin: "0px",
//   threshold: threshold
// };

// let callback = (entries, observer) => {
//   console.log(entries);
// entries.forEach((entry) => {
// document.querySelector(".pencil-text").style.transform = `scale(${
//   12 * entry.intersectionRatio > 1 ? 12 * entry.intersectionRatio : 1
// })`;
// document.querySelector(".pencil-text").style.bottom = `${
//   140 * entry.intersectionRatio
// }px`;
// if (document.querySelector(".pencil-text").style.bottom === "0px") {
//   document.querySelector(".navbar").style.borderBottom =
//     "1px solid #c34e37";
// } else {
//   document.querySelector(".navbar").style.borderBottom = "none";
// }
// });
// };

// let observer = new IntersectionObserver(callback, options);

// let target = document.querySelector("body");
// observer.observe(target);
