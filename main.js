let button =document.querySelector("#button");
let content=document.querySelector("#content");
let gif =document.querySelector("#voice")


  function speak(text) {
    let text_speak = new SpeechSynthesisUtterance(text);
    text_speak.rate = 1;
    text_speak.pitch = 1;
    text_speak.volume = 1;
   text_speak.lang = "hi-GB"; // or use "en-GB" for English hi for hindi
    window.speechSynthesis.speak(text_speak);
  }
  
  
function Wishme() {
    let day = new Date();
    let hours = day.getHours();
    
    if (hours >= 0 && hours < 12) {
        speak("Good morning Sir");
    } else if (hours >= 12 && hours < 17) {
        speak("Good afternoon Sir");
    } else {
        speak("Good evening Sir");
    }
}

//on loading speak Wishme

window.addEventListener("load", () => {
    Wishme();
});



let speechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
let recognition = new speechRecognition();

recognition.onresult = (e) => {
  let currentIndex = e.resultIndex;
  let transcript = e.results[currentIndex][0].transcript;
  content.textContent = transcript;
  takeCommand(transcript.toLowerCase()); 
};

recognition.onerror = (e) => {
  console.error("Speech recognition error", e.error);
  button.style.display = "flex"; // Show button again on error
  gif.style.display = "none"; // Hide gif on error
};

button.addEventListener("click", () => {
  recognition.start();
  button.style.display = "none";
  gif.style.display = "block";
});

function takeCommand(message) {
  button.style.display = "flex";
  gif.style.display = "none";

  if (message.includes("hello") || message.includes("hey")) {
    speak("Hello sir, how can I help you ");
  } 
  
  else if (message.includes("who are you")) {
    speak("I am a virtual assistant, created by Vishal sir.");
  } 
  
  else if (message.includes("tell me about yourself")) {
    speak("I am vishnu a virtual assistant, created by Vishal sir, how can help you .");
  }
  
  else if (message.includes("open YouTube")) {
    speak("Opening YouTube...");
    window.open("https://www.youtube.com", "_blank");
  } 
  
  else if (message.includes("open Google")) {
    speak("Opening Google...");
    window.open("https://www.google.com", "_blank");
  } 
  
  else if (message.includes("open Facebook")) {
    speak("Opening Facebook...");
    window.open("https://www.facebook.com", "_blank");
  } 
  
  else if (message.includes("open Instagram")) {
    speak("Opening Instagram...");
    window.open("https://www.instagram.com", "_blank");
  } else if (message.includes("open Calculator")) {
    speak("Opening Calculator...");
    window.open("Calculator://");
  } 
  else if (message.includes("search images of")) {
  let searchTerm = message.replace("search images of", "").trim();
  speak(`Searching images of ${searchTerm}...`);
  window.open(`https://www.google.com/search?tbm=isch&q=${searchTerm}`, "_blank");
}
  else if (message.includes("open Twitter")) {
  speak("Opening Twitter...");
  window.open("https://www.twitter.com", "_blank");
}
else if (message.includes("open Gmail")) {
  speak("Opening Gmail...");
  window.open("https://mail.google.com", "_blank");
}
else if (message.includes("open news")) {
  speak("Opening latest news...");
  window.open("https://news.google.com", "_blank");
}
  else if (message.includes("open WhatsApp")) {
    speak("Opening WhatsApp...");
    window.open("Whatsapp://");
  } 
  else if (message.includes("search videos of")) {
  let searchTerm = message.replace("search videos of", "").trim();
  speak(`Searching videos of ${searchTerm}...`);
  window.open(`https://www.youtube.com/results?search_query=${searchTerm}`, "_blank");
}

else if (message.includes("weather")) {
  speak("Opening weather forecast...");
  window.open("https://www.weather.com", "_blank");
}

else if (message.includes("open calendar")) {
  speak("Opening Google Calendar...");
  window.open("https://calendar.google.com", "_blank");
}

else if (message.includes("play music")) {
  speak("Playing music on YouTube...");
  window.open("https://music.youtube.com", "_blank");
}
  else if (message.includes("time")) {
    let time = new Date().toLocaleString(undefined, { hour: "numeric", minute: "numeric" });
    speak(`The current time is ${time}.`);
  }
  
  else if (message.includes("date")) {
    let date = new Date().toLocaleString(undefined, { day: "numeric", month: "short" });
    speak(`Today's date is ${date}.`);
  } 
  
  else {
    let searchQuery = message.replace("vishnu", "").replace("bishnu", "").trim();
    let final = `This is what I found on the internet regarding ${searchQuery}.`;
    speak(final);
    window.open(`https://www.google.com/search?q=${searchQuery}`, "_blank");
  }
}
