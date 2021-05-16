// Create the questions
let questions = [
  {
    id:1,
    question:"What's the name of Black Pnather's kingdom?",
    options:[
      "Makanda",
      "Wakanda",
      "Lambina",
      "waklanda"
    ],
    answer:"Wakanda"
  },

  {
    id:2,
    question:"Who is Thanos the son of?",
    options:[
      "Karen",
      "A'lars",
      "En Sabah Nur",
      "Joe"
    ],
    answer:"A'lars"
  },

  {
    id:3,
    question:"What is the name of Thors mother?",
    options:[
      "Karen",
      "Frigga",
      "Aegir",
      "Alfdis"
    ],
    answer:"Frigga"
  },

  {
    id:4,
    question:"What was Captain America's height before he was transformed into a super soilder?",
    options:[
      "4'11",
      "5'1",
      "5'9",
      "5'4"
    ],
    answer:"5'4"
  },

  {
    id:5,
    question:"What was the name of the dwarf on Nidavelir?",
    options:[
      "Steve",
      "Walsh",
      "Eitri",
      "Erik"
    ],
    answer:"Eitri"
  },

  {
    id:6,
    question:"Finish this line from Captain America: And Hulk, ________ ?",
    options:[
      "Kick ass",
      "Smash",
      "Do it",
      "GoodLuck"
    ],
    answer:"Smash"
  },
]


//Create local storage
let value = JSON.stringify(questions)
localStorage.setItem("question",value)

let question_count = 0
let points = 0

window.onload = function(){
  show(question_count)
}

//Create show function
function show(question_count){
  let question = document.getElementById('questions')
  let[first,second,third,fourth] =  questions[question_count].options
  
  question.innerHTML = `
  <h2>${questions[question_count].question}<h2>
  <ul class="option-group">
  <li class="option">${first}</li>
  <li class="option">${second}</li>
  <li class="option">${third}</li>
  <li class="option">${fourth}</li>
  </ul>
  `
  toggleActive()
}

//Create next function
function next(){
  if(question_count == questions.length-1){
    location.href= "end.html"
  }
  let user_answer = document.querySelector("li.option.active").innerHTML
   if(user_answer == questions[question_count].answer){
     points++
     sessionStorage.setItem("points",points)
   }
   else{
     points+= 0
     sessionStorage.setItem("points",points)
   }
   question_count++
   show(question_count)
}


function toggleActive() {
  let option = document.querySelectorAll("li.option");
  for (let i = 0; i < option.length; i++) {
    option[i].onclick = function() {
      for (let i = 0; i < option.length; i++) {
        if (option[i].classList.contains("active")) 
        {
          option[i].classList.remove("active");
        }
      }
      option[i].classList.add("active");
    };
  }
}  