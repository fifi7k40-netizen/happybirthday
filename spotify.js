/* ===========================
FOR DIHLABE ❤️
SCRIPT.JS
PART 1
=========================== */

const music = document.getElementById("music");
const beginBtn = document.getElementById("beginBtn");
const opening = document.getElementById("opening");
const website = document.getElementById("website");
const continueBtn = document.getElementById("continue");
const letter = document.getElementById("letterText");
const envelope = document.querySelector(".envelope");

/* Hide website until Begin */

website.style.display = "none";

/* ===========================
BEGIN WEBSITE
=========================== */

beginBtn.addEventListener("click",()=>{

music.volume=0;

music.play();

let volume=0;

const fade=setInterval(()=>{

volume+=0.02;

music.volume=volume;

if(volume>=1){

clearInterval(fade);

}

},120);

opening.style.opacity="0";

setTimeout(()=>{

opening.style.display="none";

website.style.display="block";

window.scrollTo({

top:0,

behavior:"smooth"

});

},1000);

});

/* ===========================
CONTINUE BUTTON
=========================== */

continueBtn.addEventListener("click",()=>{

document.querySelector(".spotify").scrollIntoView({

behavior:"smooth"

});

});

/* ===========================
LETTER
=========================== */

envelope.addEventListener("click",()=>{

letter.style.display="block";

letter.classList.add("fade");

});

/* ===========================
PHOTO LIGHTBOX
=========================== */

const lightbox=document.createElement("div");

lightbox.id="lightbox";

const lightImg=document.createElement("img");

lightbox.appendChild(lightImg);

document.body.appendChild(lightbox);

const photos=document.querySelectorAll(".photos img");

photos.forEach(photo=>{

photo.addEventListener("click",()=>{

lightbox.style.display="flex";

lightImg.src=photo.src;

});

});

lightbox.addEventListener("click",()=>{

lightbox.style.display="none";

});

/* ===========================
FLOATING HEARTS
=========================== */

function createHeart(){

const heart=document.createElement("div");

heart.className="heart";

heart.innerHTML="❤";

heart.style.left=Math.random()*100+"vw";

heart.style.animationDuration=

(Math.random()*3+4)+"s";

heart.style.fontSize=

(Math.random()*18+18)+"px";

document.body.appendChild(heart);

setTimeout(()=>{

heart.remove();

},7000);

}

setInterval(createHeart,1200);

/* ===========================
FIRELIES
=========================== */

function createFirefly(){

const fly=document.createElement("div");

fly.className="firefly";

fly.style.left=Math.random()*100+"vw";

fly.style.animationDuration=

(Math.random()*5+6)+"s";

document.body.appendChild(fly);

setTimeout(()=>{

fly.remove();

},12000);

}

setInterval(createFirefly,900);

/* ===========================
SHOOTING STARS
=========================== */

function shootingStar(){

const star=document.createElement("div");

star.className="shooting-star";

star.style.left=Math.random()*30+"vw";

document.body.appendChild(star);

setTimeout(()=>{

star.remove();

},4500);

}

setInterval(shootingStar,10000);

/* ===========================
PROGRESS BAR
=========================== */

const progress=document.createElement("div");

progress.id="progress";

document.body.appendChild(progress);

window.addEventListener("scroll",()=>{

const scroll=

document.documentElement.scrollTop;

const height=

document.documentElement.scrollHeight-

document.documentElement.clientHeight;

progress.style.width=

(scroll/height)*100+"%";

});

/* ===========================
TYPEWRITER LETTER
=========================== */

const originalLetter = `My love,

Happy Birthday. ❤️

Thank you for making me feel safe,
seen,
and loved.

Thank you for choosing me every single day.

You've become my favourite place,
my biggest comfort,
and the person I thank God for the most.

If I had to choose again...

I'd still choose you.

Every.
Single.
Time.

Happy Birthday, Shemane.

I love you.

Love,
Kefilwe ❤️`;

const letterParagraph = document.querySelector("#letterText p");

letterParagraph.innerHTML = "";

let index = 0;
let typingStarted = false;

function typeLetter(){

if(index < originalLetter.length){

letterParagraph.innerHTML += originalLetter.charAt(index);

index++;

setTimeout(typeLetter,45);

}

}

envelope.addEventListener("click",()=>{

if(!typingStarted){

typingStarted=true;

typeLetter();

}

});

/* ===========================
SPOTIFY CARDS ANIMATION
=========================== */

const cards=document.querySelectorAll(".card");

const observer=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";

entry.target.style.transform="translateY(0)";

}

});

});

cards.forEach(card=>{

card.style.opacity="0";

card.style.transform="translateY(80px)";

card.style.transition="1s";

observer.observe(card);

});

/* ===========================
TIMELINE ANIMATION
=========================== */

const memories=document.querySelectorAll(".memory");

memories.forEach(memory=>{

memory.style.opacity="0";

memory.style.transform="translateX(-60px)";

memory.style.transition="1s";

observer.observe(memory);

});

const timelineObserver=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";

entry.target.style.transform="translateX(0)";

}

});

});

memories.forEach(memory=>{

timelineObserver.observe(memory);

});

/* ===========================
PHOTO FADE IN
=========================== */

photos.forEach(photo=>{

photo.style.opacity="0";

photo.style.transform="translateY(60px) rotate(-5deg)";

photo.style.transition="1s";

});

const photoObserver=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";

entry.target.style.transform="translateY(0) rotate(0deg)";

}

});

});

photos.forEach(photo=>{

photoObserver.observe(photo);

});

/* ===========================
CONFETTI
=========================== */

function launchConfetti(){

for(let i=0;i<180;i++){

const piece=document.createElement("div");

piece.className="confetti";

piece.style.left=Math.random()*100+"vw";

piece.style.background=

["#1DB954","#ffffff","#ff4d88","#ffd700"][Math.floor(Math.random()*4)];

piece.style.animationDuration=

(Math.random()*3+3)+"s";

document.body.appendChild(piece);

setTimeout(()=>{

piece.remove();

},6000);

}

}

/* ===========================
ENDING CONFETTI
=========================== */

const ending=document.querySelector(".ending");

const endingObserver=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

launchConfetti();

}

});

});

endingObserver.observe(ending);

/* ===========================
SECRET HEART
=========================== */

const secretHeart=document.createElement("div");

secretHeart.className="secretHeart";

secretHeart.innerHTML="❤️";

document.body.appendChild(secretHeart);

secretHeart.addEventListener("click",()=>{

alert("I'd still choose you. Every single time. ❤️");

});

/* ===========================
OLD MAN EASTER EGG
=========================== */

const wrapped=document.querySelector(".spotify h2");

let clicked=false;

wrapped.addEventListener("click",()=>{

if(clicked) return;

clicked=true;

alert("Fun Fact 🤭\n\nYou're only six months older than me... but somehow you already need me to step on your back.\n\nOld man. ❤️😂");

});

/* ===========================
MUSIC ENDED
=========================== */

music.addEventListener("ended",()=>{

setTimeout(()=>{

window.scrollTo({

top:document.body.scrollHeight,

behavior:"smooth"

});

},1500);

});

/* ===========================
SCRIPT.JS
PART 3 (FINAL)
=========================== */

/* ===========================
WELCOME FADE
=========================== */

window.addEventListener("load",()=>{

document.body.style.opacity="0";

setTimeout(()=>{

document.body.style.transition="opacity 1.5s";

document.body.style.opacity="1";

},200);

});

/* ===========================
SPOTIFY EQUALIZER
=========================== */

const equalizer=document.createElement("div");

equalizer.className="equalizer";

for(let i=0;i<5;i++){

const bar=document.createElement("span");

equalizer.appendChild(bar);

}

const spotifySection=document.querySelector(".spotify");

spotifySection.insertBefore(equalizer,spotifySection.children[1]);

/* ===========================
FLOATING SPARKLES
=========================== */

function sparkle(){

const s=document.createElement("div");

s.innerHTML="✨";

s.style.position="fixed";

s.style.left=Math.random()*100+"vw";

s.style.top="110vh";

s.style.fontSize=(Math.random()*10+14)+"px";

s.style.opacity=".8";

s.style.pointerEvents="none";

s.style.transition="transform 8s linear, opacity 8s linear";

document.body.appendChild(s);

setTimeout(()=>{

s.style.transform="translateY(-120vh)";

s.style.opacity="0";

},50);

setTimeout(()=>{

s.remove();

},8500);

}

setInterval(sparkle,1800);

/* ===========================
SECTION FADE-IN
=========================== */

const sections=document.querySelectorAll("section");

const sectionObserver=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.animate([

{

opacity:0,

transform:"translateY(60px)"

},

{

opacity:1,

transform:"translateY(0)"

}

],{

duration:900,

fill:"forwards"

});

}

});

});

sections.forEach(section=>{

sectionObserver.observe(section);

});

/* ===========================
SECRET MESSAGE
=========================== */

let clicks=0;

document.body.addEventListener("click",()=>{

clicks++;

if(clicks===25){

const popup=document.createElement("div");

popup.innerHTML="❤️ Achievement Unlocked<br><br>You found a secret message.<br><br>'I hope every birthday from now on has me beside you.'";

popup.style.position="fixed";

popup.style.top="50%";
popup.style.left="50%";

popup.style.transform="translate(-50%,-50%)";

popup.style.background="#181818";

popup.style.padding="30px";

popup.style.borderRadius="20px";

popup.style.border="2px solid #1DB954";

popup.style.textAlign="center";

popup.style.zIndex="999999";

popup.style.boxShadow="0 0 35px rgba(29,185,84,.5)";

document.body.appendChild(popup);

setTimeout(()=>{

popup.remove();

},5000);

}

});

/* ===========================
MOBILE PHOTO TAP
=========================== */

photos.forEach(photo=>{

photo.addEventListener("touchstart",()=>{

photo.style.transform="scale(1.05) rotate(0deg)";

});

photo.addEventListener("touchend",()=>{

setTimeout(()=>{

photo.style.transform="";

},300);

});

});

/* ===========================
BUTTON RIPPLE
=========================== */

document.querySelectorAll("button").forEach(button=>{

button.addEventListener("click",function(e){

const ripple=document.createElement("span");

const size=Math.max(

this.offsetWidth,

this.offsetHeight

);

ripple.style.width=size+"px";

ripple.style.height=size+"px";

ripple.style.position="absolute";

ripple.style.borderRadius="50%";

ripple.style.background="rgba(255,255,255,.4)";

ripple.style.left=e.offsetX-size/2+"px";

ripple.style.top=e.offsetY-size/2+"px";

ripple.style.transform="scale(0)";

ripple.style.animation="ripple .8s";

this.appendChild(ripple);

setTimeout(()=>{

ripple.remove();

},800);

});

});

/* ===========================
RIPPLE ANIMATION
=========================== */

const rippleStyle=document.createElement("style");

rippleStyle.innerHTML=`

@keyframes ripple{

to{

transform:scale(4);

opacity:0;

}

}

`;

document.head.appendChild(rippleStyle);

/* ===========================
FINAL MESSAGE
=========================== */

const finalLines=document.querySelectorAll(".ending h1,.ending h2,.ending h3,.ending p");

finalLines.forEach(line=>{

line.style.opacity="0";

});

const finalObserver=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

let delay=0;

finalLines.forEach(line=>{

setTimeout(()=>{

line.style.transition="1.2s";

line.style.opacity="1";

},delay);

delay+=1200;

});

}

});

});

finalObserver.observe(document.querySelector(".ending"));

/* ===========================
LOVE COUNTER
=========================== */

let love=0;

setInterval(()=>{

love++;

console.log("Loving Dihlabe... Day "+love);

},86400000);

/* ===========================
THE END ❤️
=========================== */

console.log("Website created with love by Kefilwe ❤️");