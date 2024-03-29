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
    scene.style.backgroundImage = 'url("./image/two.png")';
    status1.style.display = "none";
    status2.style.display = "none";
    status3.style.display = "block";
    status4.style.display = "none";
    status5.style.display = "none";
clickgame++;
}

function clickchoicetwo(){ /* choice two*/
    var scene = document.getElementById("page7");
    scene.style.backgroundImage = 'url("./image/three.png")';
    status1.style.display = "none";
    status2.style.display = "none";
    status3.style.display = "none";
    status4.style.display = "block";
    status5.style.display = "none";
    clickgame++;
}

function move(){  /*  start game */
  var scene = document.getElementById("page7");
  var elem = document.getElementById("myBar");
  var boxc1 = document.getElementById("choicebox1");
  var boxc2 = document.getElementById("choicebox2");
  var status1 = document.getElementById("status1");
  var status2 = document.getElementById("status2");
  var status3 = document.getElementById("status3");
  var status4 = document.getElementById("status4");
  var status5 = document.getElementById("status5");
  var width = 100;
  var id = setInterval(frame, 75);
  scene.style.backgroundImage = 'url("./image/one.png")';
  boxc1.style.display = "block";
  boxc2.style.display = "block";
  status1.style.display = "none";
  status2.style.display = "block";
  status3.style.display = "none";
  status4.style.display = "none";
  status5.style.display = "none";
  clickgame = 0;
  document.getElementById("start").innerHTML = "";
  function frame() {
    if (width <= 0) {
      clearInterval(id);
      scene.style.backgroundImage = 'url("./image/end.png")';
      boxc1.style.display = "none";
      boxc2.style.display = "none";
      status1.style.display = "none";
      status2.style.display = "none";
      status3.style.display = "none";
      status4.style.display = "none";
      status5.style.display = "block";
      document.getElementById("start").innerHTML = "Continue";
    }
    else if (clickgame != 0) {
      clearInterval(id);
      boxc1.style.display = "none";
      boxc2.style.display = "none";
      document.getElementById("start").innerHTML = "Continue";
    }
    else {
      width--;
      elem.style.width = width + '%';
    }
  }
}
