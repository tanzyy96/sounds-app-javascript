window.addEventListener("load", () => {
  const sounds = document.querySelectorAll(".sounds");
  const boxes = document.querySelectorAll(".boxes div");
  const visual = document.querySelector(".visual");
  const colors = [
    "rgb(240, 128, 128)",
    "rgb(255, 0, 0)",
    "rgb(255, 255, 0)",
    "rgb(154, 205, 50)",
    "rgb(222, 184, 135)",
    "rgb(221, 160, 221)"
  ];

  // To include keypress for sounds function haha
  document.addEventListener("keypress", function(event) {
    const keys = [113, 119, 101, 114, 116, 121];
    var key = event.which || event.keycode;
    console.log(key);
    index = keys.indexOf(key);
    sounds[index].currentTime = 0;
    sounds[index].play();

    createBubbles(index);
  });

  // Load sound
  boxes.forEach((box, index) => {
    box.addEventListener("click", function() {
      sounds[index].currentTime = 0;
      sounds[index].play();

      createBubbles(index);
    });
  });

  // Create bubbles
  const createBubbles = index => {
    const bubbles = document.createElement("div");
    visual.appendChild(bubbles);
    bubbles.style.backgroundColor = colors[index];
    bubbles.style.animation = `jump 1s ease`;
    bubbles.addEventListener("animationend", function() {
      visual.removeChild(bubbles);
    });
  };
});
