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