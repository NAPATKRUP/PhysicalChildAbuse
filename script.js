var thai = document.getElementById('th_click'),
    english = document.getElementById('en_click'),
    th_txt = document.querySelectorAll('#th'),
    en_txt = document.querySelectorAll('#en'),
    nb_th = th_txt.length,
    nb_en = en_txt.length;

thai.addEventListener('click', function() {
    langue(thai,english);
}, false);

english.addEventListener('click', function() {
    langue(english,thai);
}, false);

function langue(langueOn,langueOff){
    if (!langueOn.classList.contains('current_lang')) {
        langueOn.classList.toggle('current_lang');
        langueOff.classList.toggle('current_lang');
    }
    if(langueOn.innerHTML == 'TH'){
        afficher(th_txt, nb_th);
        cacher(en_txt, nb_en);
    }
    else if(langueOn.innerHTML == 'EN'){
        afficher(en_txt, nb_en);
        cacher(th_txt, nb_th);
    }
}

function afficher(txt,nb){
    for(var i=0; i < nb; i++){
        txt[i].style.display = 'block';
    }
}
function cacher(txt,nb){
    for(var i=0; i < nb; i++){
        txt[i].style.display = 'none';
    }
}
function init(){
    langue(thai,english);
}
init();

var clickgame = 0;  /* set game*/
function clickchoiceone(){     /* choice one*/
var scene = document.getElementById("page7");
scene.style.backgroundImage = 'url("./image/placeholder_b.png")';
clickgame++;
}

function clickchoicetwo(){ /* choice two*/
var scene = document.getElementById("page7");
scene.style.backgroundImage = 'url("./image/placeholder_c.png")';
clickgame++;
}

function move(){  /*  start game */
  var scene = document.getElementById("page7");
  var elem = document.getElementById("myBar");
  var boxc1 = document.getElementById("choicebox1");
  var boxc2 = document.getElementById("choicebox2");
  var width = 100;
  var id = setInterval(frame, 75);
  boxc1.style.width = "50vh";
  boxc2.style.width = width + '%';
  clickgame = 0;
  document.getElementById("start").innerHTML = "";
  function frame() {
    if (width <= 0) {
      clearInterval(id);
      scene.style.backgroundImage = 'url("./image/placeholder_d.png")';
      boxc1.style.width = "0vh";
      boxc2.style.width = "0vh";
      document.getElementById("start").innerHTML = "Continue";
    } 
    else if (clickgame != 0) {
      boxc1.style.width = "0vh";
      boxc2.style.width = "0vh";
      document.getElementById("start").innerHTML = "Continue";
    }
    else {
      width--;
      elem.style.width = width + '%';
    }
  }
}
