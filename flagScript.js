var flagList1 = new Array("germany","netherlands","ireland","norway","uae","japan","indonesia","australia");
var flagList2 = new Array("belgium","luxembourg","italy","iceland","jordan","bangladesh","poland","newzealand");
var quizIndex = new Array(flagList1.length);
var counter = 0;

function onPageLoad() {
      
    document.getElementById("ques").innerHTML = "Are you ready??";
    setUpFlagIndex();

}

function quizNext()
{
    setAudioImage();
    var quesAudio = document.getElementById("questionAudio");
    var countryAudio1 = document.getElementById("countryAudio1");
    var countryAudio2 = document.getElementById("countryAudio2");

    if(quizIndex[counter]==1) {
        playAudio()
    } else if(quizIndex[counter]==2) {
        document.getElementById("countryAudio2").play();
    }


}

function playAudio(audioTag) {


}


function setUpFlagIndex() {

    for(index=0; index<flagList1.length; index++) {
        quizIndex[index]= randomIntFromInterval(1,2);
    }
 }

function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  function setAudioImage() {
    
    if (counter<flagList1.length) {
        setFlagImages(counter);
        setFlagAudio(counter);

    }
    
  }

  

  function setFlagImages(index) {
    document.getElementById("img1").src="./img/"+flagList1[index]+".png";
    document.getElementById("img2").src="./img/"+flagList2[index]+".png";
    
  }

  function setFlagAudio(index) {
    document.getElementById("countryAudio1").src="./sounds/"+flagList1[index]+".mp3";
    document.getElementById("countryAudio2").src="./sounds/"+flagList2[index]+".mp3";
  }