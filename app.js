window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition ;

const recognition = new SpeechRecognition();
recognition.interimResults =true;

let p = document.createElement("p");
const words = document.querySelector(".words")
words.appendChild(p)

// console.log(recognition);

// console.log(words);

recognition.addEventListener("result",e => {
    console.log(e.results);           //it is giving a  transcript where audio subtitle will be present 
    const transcript = [...e.results] // converting this to an array as we need to use map to go through each 
    console.log(transcript);
}  )

// recognition.start();


