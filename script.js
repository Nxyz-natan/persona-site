let count = 0;

const button = document.getElementById("pats");
const countDisplay = document.getElementById("pats-counts");
button.addEventListener("click", () => {
  count++;
  countDisplay.textContent = count;
});