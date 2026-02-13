const quiz=[

{
subject:"Math",
q:"20% of 250 = ?",
a:["40","45","50","55"],
c:2
},

{
subject:"Math",
q:"5 + 3 * 2 = ?",
a:["16","11","13","10"],
c:1
},

{
subject:"Math",
q:"3 : 5 = 30 : ?",
a:["50","40","60","70"],
c:0
},

{
subject:"Math",
q:"A आदमी 12 दिन में काम करता है, B वही काम 18 दिन में। दोनों मिलकर कितने दिन में करेंगे?",
a:["6","7.2","8","9"],
c:1
},

{
subject:"Math",
q:"Simple Interest on ₹2000 for 2 years at 5% =?",
a:["100","300","200","400"],
c:2
},

{
subject:"Math",
q:"Train 60 km/h से 120 km कितने समय में जाएगी?",
a:["5 घंटे","3 घंटे","4 घंटे","2 घंटे"],
c:3
},

{
subject:"Reasoning",
q:"Cat : Kitten :: Dog :?",
a:["Puppy","Cub","Fawn","Piglet"],
c:0
},

{
subject:"Reasoning",
q:"श्रृंखला पूरी करो: 2, 6, 12, 20,?",
a:["33","30","35","40"],
c:1
},

{
subject:"Reasoning",
q:"अगर MONDAY को 123456 लिखा जाए, तो SUNDAY कैसे लिखा जाएगा?",
a:["123456","765432","123457","765431"],
c:0
},

{
subject:"Reasoning",
q:"A, B का भाई है। C, A की माँ है। D, C का पति है। D का B से क्या रिश्ता??",
a:["Uncle","Father","Brother","Grandfather"],
c:0
},

{
subject:"Reasoning",
q:"Odd one out:?",
a:["Apple","Banana","Brother","Potato"],
c:2
},

{
subject:"General Science",
q:"मानव शरीर में सबसे बड़ा अंग कौन सा है?",
a:["Skin","Liver","Kidney","Heart"],
c:0
},

{
subject:"General Science",
q:"पानी का chemical formula क्या है?",
a:["O2","CO2","NaCl","H2O"],
c:3
},

{
subject:"General Science",
q:"पौधे भोजन कैसे बनाते हैं?",
a:["Photosynthesis","Respiration","Digestion","Absorption"],
c:0
},

{
subject:"General Science",
q:"बल की unit क्या है?",
a:["joule","watt","newton","pascal"],
c:2
},

{
subject:"General Science",
q:"खून का लाल रंग किस कारण होता है?",
a:["Calcium","Hemoglobin","newton","pascal"],
c:1
},

{
subject:"GK",
q:"भारत की राजधानी?",
a:["Mumbai","Chennai ","Delhi","Kolkata"],
c:2
},

{
subject:"GK",
q:"संविधान दिवस कब मनाया जाता है?",
a:["26 जनवरी","26 मार्च","15 अगस्त","1 जनवरी"],
c:0
},

{
subject:"GK",
q:"“Jana Gana Mana” किसने लिखा?",
a:["Gandhi","Rabindranath Tagore","26 मार्च","1 जनवरी"],
c:1
},

{
subject:"GK",
q:"RBI का पूरा नाम?",
a:["Reserve Bank of India","Rabindranath Tagore","26 मार्च","1 जनवरी"],
c:0
},

{
subject:"GK",
q:"CPU किसका part है?",
a:["Mouse","Monitor","Keyboard","Computer"],
c:3
},
];

let i=0,score=0;

const subject=document.getElementById("subject");
const q=document.getElementById("question");
const b=document.querySelectorAll(".btn");
const s=document.getElementById("score");

load();

function load(){
subject.innerText = quiz[i].subject + " Quiz";
q.innerText = quiz[i].q;

b.forEach((x,j)=>{
x.innerText = quiz[i].a[j];
});
}

function check(ans){
if(ans==quiz[i].c) score++;

i++;

if(i<quiz.length){
load();
}else{
subject.innerText="Finished";
q.innerText="";
s.innerText="Score: "+score+"/"+quiz.length;
b.forEach(x=>x.style.display="none");
}
}
