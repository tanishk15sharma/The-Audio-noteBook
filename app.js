
 const wordPara = document.querySelector(".words");
 
 window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;


 const recognition = new SpeechRecognition();
 recognition.interimResults = true ;

 let p = document.createElement("p");
 wordPara.appendChild(p);

 recognition.addEventListner("Results",e=>{

    console.log(e);
 }  );
