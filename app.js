window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition ;

const recognition = new SpeechRecognition();
recognition.interimResults =true;

let p = document.createElement("p");
const words = document.querySelector(".words")
words.appendChild(p)

// console.log(recognition);

// console.log(words);

recognition.addEventListener("result",e => {
    console.log(e);
}  )

recognition.start();