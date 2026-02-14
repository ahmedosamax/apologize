$(document).ready(function () {

  /* ---------- Envelope Open / Close ---------- */
  var envelope = $("#envelope");
  var btn_open = $("#open");
  var btn_reset = $("#reset");

  envelope.click(function () { open(); });
  btn_open.click(function () { open(); });
  btn_reset.click(function () { close(); });

  function open() {
    envelope.addClass("open").removeClass("close");
  }

  function close() {
    envelope.addClass("close").removeClass("open");
  }


  /* ---------- Floating Hearts Background ---------- */
  const numHearts = 35;

  for (let i = 0; i < numHearts; i++) {
    const heart = document.createElement("div");
    heart.classList.add("bg-heart");

    heart.style.left = Math.random() * window.innerWidth + "px";
    heart.style.top = Math.random() * window.innerHeight + "px";
    heart.style.opacity = Math.random();

    document.body.appendChild(heart);
  }

  const hearts = document.querySelectorAll(".bg-heart");

  function animateHearts() {
    hearts.forEach((heart) => {
      let top = parseFloat(heart.style.top);

      top -= 0.4 + Math.random() * 0.8;

      if (top < -20) {
        top = window.innerHeight + 20;
        heart.style.left = Math.random() * window.innerWidth + "px";
      }

      heart.style.top = top + "px";
    });

    requestAnimationFrame(animateHearts);
  }

  animateHearts();

});
