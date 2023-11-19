import topics from "./topics.js";

function findTopic() {
  const topic = document.querySelector(".topic");
  const btn = document.querySelector(".btn");
  topic.innerText = "··· 질문을 찾고 있어요 ···";
  btn.setAttribute("disabled", true);

  const rand = Math.floor(Math.random() * topics.length);
  const randomTopic = topics[rand];

  setTimeout(function () {
    topic.innerText = randomTopic;
    btn.removeAttribute("disabled");
  }, 1000);
}

const btn = document.querySelector(".btn");
btn.addEventListener("click", findTopic);
