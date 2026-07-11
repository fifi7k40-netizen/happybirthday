/* ==========================================
   DIHLABE'S BIRTHDAY ADVENTURE ❤️
   SCRIPT.JS - PART 1
========================================== */

/* ---------- PAGES ---------- */

const pages = document.querySelectorAll(".page");

function goToPage(pageNumber){

pages.forEach(page=>page.classList.remove("active"));

document.getElementById("page"+pageNumber).classList.add("active");

window.scrollTo({

top:0,

behavior:"smooth"

});

}

/* ---------- START BUTTON ---------- */

document

.getElementById("startButton")

.addEventListener("click",()=>{

goToPage(2);

});

/* ---------- FLOATING HEARTS ---------- */

const hearts=document.getElementById("hearts");

function createHeart(){

const heart=document.createElement("div");

heart.className="heart";

heart.innerHTML="❤️";

heart.style.left=Math.random()*100+"vw";

heart.style.fontSize=(20+Math.random()*25)+"px";

heart.style.animationDuration=(5+Math.random()*4)+"s";

hearts.appendChild(heart);

setTimeout(()=>{

heart.remove();

},9000);

}

setInterval(createHeart,450);

/* ---------- PASSCODE ---------- */

const passInputs=document.querySelectorAll("#passcode input");

const message=document.getElementById("passwordMessage");

passInputs.forEach((box,index)=>{

box.addEventListener("input",()=>{

if(box.value.length==1 && index<3){

passInputs[index+1].focus();

}

checkPassword();

});

});

function checkPassword(){

let code="";

passInputs.forEach(input=>{

code+=input.value;

});

if(code==="2005"){

message.innerHTML="❤️ Correct!";

message.style.color="#ffffff";

launchMiniConfetti();

setTimeout(()=>{

goToPage(3);

startBirthdayScene();

},1200);

}

else if(code.length===4){

message.innerHTML="🐶 That's not it! Try again.";

message.style.color="#fff5f5";

}

}

/* ---------- TEDDY SCENE ---------- */

const speech=document.getElementById("speechBubble");

const conversation=[

"Happy Birthday, my love! ❤️",

"Thank you.🥹",

"I made a birthday adventure just for you.",

"I hope you smile the whole way through.",

"Ready for the next challenge? 😄"

];

function startBirthdayScene(){

let line=0;

speech.innerHTML=conversation[line];

const talk=setInterval(()=>{

line++;

if(line<conversation.length){

speech.innerHTML=conversation[line];

}else{

clearInterval(talk);

}

},2300);

}

document

.getElementById("continueOne")

.addEventListener("click",()=>{

goToPage(4);

});

/* ---------- SPORTS CARDS ---------- */

const messages={

f1:"🏎️ Every race reminds me that I'll always cheer for you.",

soccer:"⚽ You'll forever be my favourite player.",

pool:"🎱 One day I'll finally beat you... maybe 😂"

};

let openedCards=0;

const clicked=[];

document.querySelectorAll(".card").forEach(card=>{

card.addEventListener("click",()=>{

const type=card.dataset.card;

if(clicked.includes(type)) return;

clicked.push(type);

openedCards++;

document.getElementById("cardMessage").innerHTML=messages[type];

card.style.transform="scale(1.08)";

card.style.background="white";

card.style.color="#ff4f9a";

if(openedCards===3){

setTimeout(()=>{

goToPage(5);

loadQuiz();

},1800);

}

});

});

/* ---------- MINI CONFETTI ---------- */

function launchMiniConfetti(){

for(let i=0;i<50;i++){

const piece=document.createElement("div");

piece.style.position="fixed";

piece.style.left=Math.random()*100+"vw";

piece.style.top="-20px";

piece.style.width="10px";

piece.style.height="10px";

piece.style.borderRadius="50%";

piece.style.background=["#ff4f9a","#ffffff","#ffd166","#ff8ec5"][Math.floor(Math.random()*4)];

piece.style.zIndex="999";

piece.style.transition="4s linear";

document.body.appendChild(piece);

setTimeout(()=>{

piece.style.transform="translateY(110vh) rotate(720deg)";

piece.style.opacity="0";

},20);

setTimeout(()=>{

piece.remove();

},4200);

}

}

/* ==========================================
   QUIZ
========================================== */

const quiz = [

{
question:"Who loves you the most?",
answers:[
"Your Mom ❤️",
"Kefilwe ❤️",
"Max Verstappen",
"Snoek Fish"
],
correct:1
},

{
question:"What do I call you?",
answers:[
"Shemane",
"Old Man 😂",
"My Love",
"All of the Above"
],
correct:3
},

{
question:"What do you always say?",
answers:[
"You Rest You Rust",
"Never Back Down",
"No Pain No Gain",
"Go Faster"
],
correct:0
},

{
question:"What's your favourite food?",
answers:[
"Pizza",
"Snoek Fish",
"Burger",
"Pasta"
],
correct:1
},

{
question:"Who's prettier?",
answers:[
"Kefilwe",
"Kefilwe",
"Kefilwe",
"Kefilwe"
],
correct:0
},

{
question:"How many hours have you been alive? 🤔",
answers:[
"About 184 000",
"About 190 000",
"About 200 000",
"About 220 000"
],
correct:0
}

];

let currentQuestion=0;
let score=0;

function loadQuiz(){

const box=document.getElementById("quizBox");

if(currentQuestion>=quiz.length){

box.innerHTML=

`
<h1>🎉</h1>

<h2>

You scored ${score}/${quiz.length}

</h2>

<p>

Good job Birthday Boy ❤️

</p>

`;

setTimeout(()=>{

goToPage(6);

startRace();

},2500);

return;

}

const q=quiz[currentQuestion];

box.innerHTML=

`

<div class="question">

${q.question}

</div>

${q.answers.map((answer,index)=>`

<div class="option"

onclick="chooseAnswer(${index})">

${answer}

</div>

`).join("")}

`;

}

window.chooseAnswer=function(choice){

if(choice===quiz[currentQuestion].correct){

score++;

launchMiniConfetti();

}

currentQuestion++;

loadQuiz();

};

/* ==========================================
FORMULA ONE GAME
========================================== */

let seconds=15;

let raceFinished=false;

const timer=document.getElementById("timer");

const car=document.getElementById("car");

const drive=document.getElementById("drive");

let distance=0;

function startRace(){

seconds=15;

timer.innerHTML=seconds;

distance=0;

car.style.left="20px";

raceFinished=false;

}

drive.addEventListener("click",()=>{

if(document.getElementById("page6").classList.contains("active")==false) return;

if(raceFinished) return;

distance+=18;

car.style.left=distance+"px";

if(distance>=650){

finishRace();

}

});

const countdown=setInterval(()=>{

if(document.getElementById("page6").classList.contains("active")==false) return;

if(raceFinished) return;

seconds--;

timer.innerHTML=seconds;

if(seconds<=0){

finishRace();

}

},1000);

function finishRace(){

raceFinished=true;

launchMiniConfetti();

document.getElementById("finishLine").innerHTML=

`

🏁

<br>

<h3>

DIHLABE

1ST PLACE

🥇

</h3>

`;

setTimeout(()=>{

goToPage(7);

},2500);

}

/* ==========================================
GIFTS
========================================== */

const gifts=document.querySelectorAll(".giftBox");

let giftsOpened=0;

gifts.forEach((gift,index)=>{

gift.addEventListener("click",()=>{

if(gift.classList.contains("opened")) return;

if(giftsOpened>=2){

alert("😂 Nice try! You only get TWO gifts.");

return;

}

gift.classList.add("opened");

gift.style.opacity=".6";

gift.style.transform="scale(.9)";

giftsOpened++;

if(index===0){

showLoveLetter();

}

if(index===1){

showHeartGift();

}

if(index===2){

showFunnyGift();

}

if(giftsOpened===2){

setTimeout(()=>{

goToPage(8);

launchMiniConfetti();

},7000);

}

});

});

function showLoveLetter(){

document.getElementById("giftContent").innerHTML=

`

<h2>💌 Happy Birthday</h2>

<p>

Happy Birthday, Shemane.

Thank you for being my safest place.

Thank you for making me feel beautiful.

Thank you for loving me the way you do.

I hope today brings you as much happiness as you've brought into my life.

Love,

Kefilwe ❤️

</p>

`;

}

function showHeartGift(){

let hearts="";

for(let i=0;i<120;i++){

hearts+="❤️ ";

}

document.getElementById("giftContent").innerHTML=

`

<h1>

HAPPY BIRTHDAY ❤️

</h1>

<p>

From the girl who loves you the most.

</p>

<div style="font-size:25px;line-height:1.8">

${hearts}

</div>

`;

}

function showFunnyGift(){

document.getElementById("giftContent").innerHTML=

`

<h2>

🏆 BONUS GIFT

</h2>

<p>

Official Diagnosis:

You're only six months older than me...

yet somehow your back already needs maintenance.

😂❤️

Happy Birthday, Old Man.

</p>

`;

}

/* ==========================================
   SCRIPT.JS - PART 3 (FINAL)
========================================== */

/* ---------- FINAL PAGE ANIMATION ---------- */

const finalPage=document.getElementById("page8");

const finalObserver=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

showCertificate();

celebration();

}

});

});

finalObserver.observe(finalPage);

/* ---------- BIG CONFETTI ---------- */

function celebration(){

for(let i=0;i<250;i++){

const confetti=document.createElement("div");

confetti.className="confetti";

confetti.style.left=Math.random()*100+"vw";

confetti.style.top="-20px";

confetti.style.width=(8+Math.random()*8)+"px";

confetti.style.height=(8+Math.random()*8)+"px";

confetti.style.background=

["#ff4f9a","#ff9ec9","#ffffff","#ffd166","#ff6b9f"][Math.floor(Math.random()*5)];

confetti.style.position="fixed";

confetti.style.borderRadius="50%";

confetti.style.zIndex="99999";

confetti.style.transition=(3+Math.random()*3)+"s linear";

document.body.appendChild(confetti);

setTimeout(()=>{

confetti.style.transform=

`translateY(110vh) rotate(${Math.random()*1080}deg)`;

confetti.style.opacity="0";

},20);

setTimeout(()=>{

confetti.remove();

},7000);

}

}

/* ---------- CERTIFICATE ---------- */

function showCertificate(){

setTimeout(()=>{

const certificate=document.createElement("div");

certificate.id="certificate";

certificate.style.position="fixed";

certificate.style.top="50%";

certificate.style.left="50%";

certificate.style.transform="translate(-50%,-50%)";

certificate.style.width="90%";

certificate.style.maxWidth="500px";

certificate.style.background="white";

certificate.style.color="#ff4f9a";

certificate.style.padding="35px";

certificate.style.borderRadius="25px";

certificate.style.boxShadow="0 25px 60px rgba(0,0,0,.25)";

certificate.style.textAlign="center";

certificate.style.zIndex="999999";

certificate.innerHTML=

`

<h1>🏆</h1>

<h2>

OFFICIAL CERTIFICATE

</h2>

<p>

This certificate proudly confirms that

</p>

<h2>

DIHLABE

</h2>

<p>

has successfully completed

</p>

<h3>

Kefilwe's Birthday Adventure ❤️

</h3>

<br>

<p>

Rewards Unlocked

</p>

<p>

❤️ Unlimited Hugs

<br>

❤️ Unlimited Kisses

<br>

❤️ Unlimited Cuddles

<br>

❤️ One Very Clingy Girlfriend

</p>

<br>

<p>

Valid Forever.

</p>

<br>

<button id="closeCertificate">

YAY ❤️

</button>

`;

document.body.appendChild(certificate);

document

.getElementById("closeCertificate")

.onclick=function(){

certificate.remove();

};

},2500);

}

/* ---------- DOG SECRET ---------- */

let dogClicks=0;

document.querySelectorAll(".dog").forEach(dog=>{

dog.addEventListener("click",()=>{

dogClicks++;

dog.style.transform="scale(1.25)";

setTimeout(()=>{

dog.style.transform="";

},300);

if(dogClicks===10){

alert(

"🏆 Secret Achievement!\n\nProfessional Dog Annoyer Unlocked 🐶❤️"

);

}

});

});

/* ---------- DOUBLE TAP SECRET ---------- */

document.body.addEventListener("dblclick",()=>{

celebration();

});

/* ---------- RANDOM LOVE MESSAGES ---------- */

const loveMessages=[

"❤️ I still get butterflies.",

"🥹 You're my safest place.",

"🌍 I'd choose you every time.",

"😂 Happy Birthday, Old Man.",

"🏎️ Pole Position in my heart.",

"⚽ You'll always be my favourite player.",

"🎱 You're stuck with me forever."

];

function randomMessage(){

const note=document.createElement("div");

note.style.position="fixed";

note.style.bottom="20px";

note.style.right="20px";

note.style.background="white";

note.style.color="#ff4f9a";

note.style.padding="15px 20px";

note.style.borderRadius="20px";

note.style.boxShadow="0 15px 35px rgba(0,0,0,.15)";

note.style.fontWeight="bold";

note.style.zIndex="999";

note.innerHTML=

loveMessages[Math.floor(Math.random()*loveMessages.length)];

document.body.appendChild(note);

setTimeout(()=>{

note.remove();

},4500);

}

setInterval(randomMessage,18000);

/* ---------- HEART BURST ---------- */

function burstHearts(){

for(let i=0;i<40;i++){

const heart=document.createElement("div");

heart.className="heart";

heart.innerHTML="❤️";

heart.style.left=Math.random()*100+"vw";

heart.style.fontSize=(20+Math.random()*25)+"px";

heart.style.animationDuration=(3+Math.random()*2)+"s";

document.body.appendChild(heart);

setTimeout(()=>{

heart.remove();

},5000);

}

}

document.querySelectorAll("button").forEach(button=>{

button.addEventListener("click",burstHearts);

});

/* ---------- END ---------- */

console.log("❤️ Happy Birthday Shemane ❤️");