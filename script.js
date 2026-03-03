const openBtn = document.getElementById("openBtn");
const envelope = document.getElementById("envelope");
const text = document.getElementById("text");

const message = "This letter is just a small way to say that you matter a lot to me. Every smile, every moment, and every memory feels special. I hope this little surprise made you smile today. 💖";

let index = 0;

openBtn.addEventListener("click", () => {
  envelope.classList.add("open");
  openBtn.style.display = "none";
  typeText();
});

function typeText() {
  if (index < message.length) {
    text.textContent += message.charAt(index);
    index++;
    setTimeout(typeText, 50);
  }
}