function initRail() {
  document.querySelectorAll(".rail-wrap").forEach((wrap) => {
    const track = wrap.querySelector(".rail-track");
    const prev = wrap.querySelector(".rail-btn.prev");
    const next = wrap.querySelector(".rail-btn.next");
    function stepSize() {
      return Math.round(track.clientWidth * 0.9);
    }
    prev.addEventListener("click", () => {
      track.scrollBy({ left: -stepSize(), behavior: "smooth" });
    });
    next.addEventListener("click", () => {
      track.scrollBy({ left: stepSize(), behavior: "smooth" });
    });
    function updateButtons() {
      const maxscroll = track.scrollWidth - track.clientWidth;
      prev.disabled = track.scrollLeft <= 0;
      next.disabled = track.scrollLeft >= maxscroll - 1;
    }
    track.addEventListener("scroll", updateButtons);
    window.addEventListener("resize", updateButtons);
    updateButtons();
  });
}
document.addEventListener("DOMContentLoaded", initRail);

initRail();

function questionDone() {
  const askedQuestion = document.querySelectorAll(".asked-question");

  askedQuestion.forEach((question) => {
    question.addEventListener("click", () => {
      const answer = question.nextElementSibling;

      document.querySelectorAll(".answer").forEach((ans) => {
        if (ans !== answer) ans.style.display = "none";
      });

      if (answer.style.display === "block") {
        answer.style.display = "none";
        question.classList.remove("active");
      } else {
        answer.style.display = "block";
        question.classList.add("active");
      }
    });
  });
}

questionDone();
