document.querySelector(".arrow-up").addEventListener("click", (e) => {
  e.preventDefault();
  document.querySelector("#home").scrollIntoView({
    behavior: "smooth",
  });
});

const themeBtn = document.getElementById("themeToggle");
const body = document.body;

themeBtn.addEventListener("click", () => {
  body.classList.toggle("light-mode");

  if (body.classList.contains("light-mode")) {
    themeBtn.textContent = "다크모드";
  } else {
    themeBtn.textContent = "라이트모드";
  }
});

// 홈으로
const now = new Date();
hour = now.getHours();
hiMsg = "";
if (6 <= hour && hour <= 12) {
  hiMsg = "좋은 아침입니다!";
} else if (13 <= hour && hour <= 20) {
  hiMsg = "좋은 오후입니다!";
} else {
  hiMsg = "좋은 저녁입니다!";
}
document.querySelector(".date_time_set").innerText = hiMsg;
