// JS

const topLeftText = document.querySelectorAll(".hero__topLeft")[0];
const topRightText = document.querySelectorAll(".hero__topRight")[0];
const bottomLeftText = document.querySelectorAll(".hero__bottomLeft")[0];
const bottomRightText = document.querySelectorAll(".hero__bottomRight")[0];

const quarterArch = Array.from(document.querySelectorAll("path"));

const outerCircle = document.querySelectorAll(".dot__outerCircle")[0];
const dot = document.querySelectorAll(".dot")[0];

const outerCircleArea = outerCircle.getBoundingClientRect();
const dotArea = dot.getBoundingClientRect();
const R = outerCircleArea.width / 2;
const r = dotArea.width / 2;
const centerX = outerCircleArea.left + R;
const centerY = outerCircleArea.top + R;

document.addEventListener("mousemove", (e) => {
  let x = e.clientX - centerX,
    y = e.clientY - centerY,
    theta = Math.atan2(y, x),
    angle = (theta * 180) / Math.PI + 360;

  dot.style.transform = `translateX(${72 + "px"}) translateY(${-8 + "px"}) rotate(${angle + "deg"})`;
  dot.style.transformOrigin = `${r + "px"}`;
});

quarterArch.forEach((arch) => {
  arch.addEventListener("mouseenter", function () {
    switch (this.classList[1]) {
      case "topLeft":
        topLeftText.style.opacity = "1";
        break;
      case "topRight":
        topRightText.style.opacity = "1";
        break;
      case "bottomLeft":
        bottomLeftText.style.opacity = "1";
        break;
      case "bottomRight":
        bottomRightText.style.opacity = "1";
        break;

      default:
        console.log("default");
        break;
    }
  });
});

quarterArch.forEach((arch) => {
  arch.addEventListener("mouseleave", function () {
    switch (this.classList[1]) {
      case "topLeft":
        topLeftText.style.opacity = "0";
        break;
      case "topRight":
        topRightText.style.opacity = "0";
        break;
      case "bottomLeft":
        bottomLeftText.style.opacity = "0";
        break;
      case "bottomRight":
        bottomRightText.style.opacity = "0";
        break;

      default:
        console.log("default");
        break;
    }
  });
});

// quarterArch.forEach((arch) => {
//   arch.addEventListener("mouseenter", function () {
//     if (this.classList[1] === "topLeft") {
//       topLeftText.style.opacity = "1";
//     }
//   });
// });

// quarterArch.forEach((arch) => {
//   arch.addEventListener("mouseleave", function () {
//     if (this.classList[1] === "topLeft") {
//       topLeftText.style.opacity = "0";
//     }
//   });
// });

// quarterArch.forEach((arch) => {
//   arch.addEventListener("mouseenter", function () {
//     if (this.classList[1] === "topRight") {
//       topRightText.style.opacity = "1";
//     }
//   });
// });

// quarterArch.forEach((arch) => {
//   arch.addEventListener("mouseleave", function () {
//     if (this.classList[1] === "topRight") {
//       topRightText.style.opacity = "0";
//     }
//   });
// });

// quarterArch.forEach((arch) => {
//   arch.addEventListener("mouseenter", function () {
//     if (this.classList[1] === "bottomLeft") {
//       bottomLeftText.style.opacity = "1";
//     }
//   });
// });

// quarterArch.forEach((arch) => {
//   arch.addEventListener("mouseleave", function () {
//     if (this.classList[1] === "bottomLeft") {
//       bottomLeftText.style.opacity = "0";
//     }
//   });
// });

// quarterArch.forEach((arch) => {
//   arch.addEventListener("mouseenter", function () {
//     if (this.classList[1] === "bottomRight") {
//       bottomRightText.style.opacity = "1";
//     }
//   });
// });

// quarterArch.forEach((arch) => {
//   arch.addEventListener("mouseleave", function () {
//     if (this.classList[1] === "bottomRight") {
//       bottomRightText.style.opacity = "0";
//     }
//   });
// });
