window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition ;

const recognition = new SpeechRecognition();
recognition.interimResults =true;

let p = document.createElement("p");
const words = document.querySelector(".words")
words.appendChild(p)
// 
// console.log(recognition);

// console.log(words);

recognition.addEventListener("result",e => {
    console.log(e);           //it is giving a  transcript where audio subtitle will be present 
    const transcript = [...e.results ] // converting this to an array as we need to use map to go through each 
       .map(result => result[0] )     //mapping over the array to get the "transcript"
       .map(result =>result.transcript ).join("") // this will show the speech in console.
       
       
       p.textContent = transcript

       console.log(transcript);
}  )

recognition.addEventListener("end",recognition.start  )

recognition.start();


