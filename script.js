//ELEMENTS by id
const start_div = document.getElementById('start');
const luffy_div = document.getElementById('luffy');
const gear2_div = document.getElementById('gear2');
const gear3_div = document.getElementById('gear3');
const gear4_div = document.getElementById('gear4');
const gear5_div = document.getElementById('gear5');
const luffy_img = document.getElementById('luffyimg');
const gear2_img = document.getElementById('gear2img');
const gear3_img = document.getElementById('gear3img');
const gear4B_img = document.getElementById('gear4-boundman-img');
const gear4S_img = document.getElementById('gear4-snakeman-img');
const gear5_img = document.getElementById('gear5img');
const turnleft = document.getElementById('turnleft');
const g4Sm = document.getElementById('gear4-snakeman-img');
const g4Swb = document.getElementById('watch_gear4_snakeman');
const g4Stla = document.getSelection('turnleftarrow');
const turnright = document.getElementById('turnright');
const g4Bm = document.getElementById('gear4-boundman-img');
const g4Bwb = document.getElementById('watch_gear4_boundman');
const g4Brla = document.getElementById('turnrightarrowt'); 
const g4Bdb = document.getElementById('gear4boundmandivbutton');
const snakeman = document.getElementById('snakeman');
const boundman = document.getElementById('boundman');
const go_button = document.getElementById('start_button');
const luffy_title = document.getElementById('luffy_title');
const gear2_title = document.getElementById('gaer2_title');
const gear3_title = document.getElementById('gaer3_title');
const gear4_title = document.getElementById('gaer4_title');
const gear4B_title = document.getElementById('gaer4B_title');
const gear4S_title = document.getElementById('gaer4S_title');
const gear5_title = document.getElementById('gaer5_title');
//sounds
const luffy_sound = document.getElementById('luffy_sound');
const gear2_sound = document.getElementById('gear2_sound');
const gear3_sound = document.getElementById('gear3_sound');
const gear4b_sound = document.getElementById('gear4b_sound');
const gear4s_sound = document.getElementById('gear4s_sound');
const gear5_music = document.getElementById('gear5_music');

//ELEMENTS by class
const watch_buttons = document.getElementsByClassName('watch');
const clickableElements = document.querySelectorAll('.out');
const startbutton_luffy = document.getElementsByClassName('startbutton_luffy');
const startbutton_gear2 = document.getElementsByClassName('startbutton_gear2');
const startbutton_gear3 = document.getElementsByClassName('startbutton_gear3');
const startbutton_gear4 = document.getElementsByClassName('startbutton_gear4');
const startbutton_gear5 = document.getElementsByClassName('startbutton_gear5');
const display = document.getElementsByClassName('display');
const dis = document.getElementsByClassName('dis');
const h = document.getElementsByClassName('sectiontitle');
const g4sbc = document.getElementsByClassName('g4sbc');
const luffy_cwom = document.getElementsByClassName('luffy_cwom');
const gear2_cwom = document.getElementsByClassName('gear2_cwom');
const gear3_cwom = document.getElementsByClassName('gear3_cwom');
const gear4_cwom = document.getElementsByClassName('gear4_cwom');
const gear4B_cwom = document.getElementsByClassName('gear4B_cwom');
const gear4S_cwom = document.getElementsByClassName('gear4S_cwom');
const gear5_cwom = document.getElementsByClassName('gear5_cwom');

//variables
let currentslide = 0;
let lastslide = 1;
let waitanimate;
let currentside_onG4 = 0;
let gear4_switch = true;
let switching = false;
let watched_gear5 = false;
let playing_music = false;
let sound_watched = [0, 0, 0, 0, 0];
let on_screen = 0;
 

go_button.addEventListener('click', function (event) {
    luffy_div.scrollIntoView({ behavior: 'smooth' });
    switching = true;
    if (playing_music == false && sound_watched[0] == 0){
        luffy_sound.play();
        playing_music = true;
        setTimeout(() => {
            on_screen = 1;
            animate(luffy_img,'moveleft 1s 1 forwards',1);
            animate(watch_buttons[0],'moveup 1.4s 1 forwards',1.4);
            animate(startbutton_luffy[0], 'movedown 0.5s 1 forwards',0.5);
            animate(startbutton_luffy[1], 'movedown 0.75s 1 forwards',0.75);
            animate(startbutton_luffy[2], 'movedown 1s 1 forwards',1);
            animate(startbutton_luffy[3], 'movedown 1.25s 1 forwards',1.25);
            animate(startbutton_luffy[4], 'movedown 1.5s 1 forwards',1.5);
            animate(h[0], 'moveright 1s 1 forwards', 1);
            animate(dis[0], 'moveup 0.5s 1 forwards',0.5);
        }, 200);
        setTimeout(() => {
            on_screen = 0;
        }, 1500);
        setTimeout(() => {
            playing_music = false;
            sound_watched[0] = 1;
        }, 4000);
    }
    setTimeout(() => {
        switching = false;
        currentslide = 1;
    }, 1000);
})
Array.from(watch_buttons).forEach(watch_button => {
    watch_button.addEventListener('click', function(event) {
        switch (watch_button.id){
            case 'watch_luffy':
                window.open("https://youtu.be/VwSsMB-BigE?si=NWVTkpdb5KGxJ0Tz", '_blank');
                break;
            case 'watch_gear2':
                window.open("https://youtu.be/yVX1yQqtDOw?si=hdsaqCi48TwLbq1Z", '_blank');
                break;
            case 'watch_gear3':
                window.open("https://youtu.be/ny-6mqCjw98?si=sGXar-e3Wuz7FhHL", '_blank');
                break;
            case 'watch_gear4_boundman':
                window.open("https://youtu.be/qKmfTc-fTDE?si=WvGGidHCtyE0vgn-", '_blank');
                break;
            case 'watch_gear4_snakeman':
                window.open("https://youtu.be/piAEG5Ivrl4?si=tS_N42iguN81HJst", '_blank');
                break;
            case 'watch_gear5':
                window.open("https://youtu.be/n8Q9rNdhkWQ?si=xiaRSCq0lAbW-S1H", '_blank');
                break;
        }
    });
});

 clickableElements.forEach(function(element) {
   element.addEventListener('click', function(event) {
    switching = true;
     switch (event.currentTarget.id){
        case ('gotoluffy'):
            currentslide = 1;
            waitanimation();
            setTimeout(() => {
                on_screen = 1;
                animate(luffy_img,'moveleft 1s 1 forwards',1);
                animate(startbutton_luffy[0], 'movedown 0.5s 1 forwards',0.5);
                animate(startbutton_luffy[1], 'movedown 0.75s 1 forwards',0.75);
                animate(startbutton_luffy[2], 'movedown 1s 1 forwards',1);
                animate(startbutton_luffy[3], 'movedown 1.25s 1 forwards',1.25);
                animate(startbutton_luffy[4], 'movedown 1.5s 1 forwards',1.5);
                animate(dis[0], 'moveup 0.5s 1 forwards',0.5);
                animate(watch_buttons[0],'moveup 1.4s 1 forwards',1.4);
                animate(h[0], 'moveright 1s 1 forwards', 1);
                setTimeout(() => {
                    switching = false;
                    on_screen = 0;
                }, 1000);
            }, waitanimate);
            luffy_div.scrollIntoView({ behavior: 'smooth' });
            break;
        case ('gotogear2'):
            currentslide = 2;
            if (playing_music == false && sound_watched[1] == 0){
                gear2_sound.play();
                playing_music = true;
                setTimeout(() => {
                    sound_watched[1] = 1;
                    playing_music = false;
                }, 1000);
            }
            waitanimation();
            gear2_div.scrollIntoView({ behavior: 'smooth' });
            setTimeout(() => {
                on_screen = 1;
                animate(gear2_img,'moveright 1s 1 forwards',1);
                animate(startbutton_gear2[0], 'movedown 0.75s 1 forwards',0.75);
                animate(startbutton_gear2[1], 'movedown 0.5s 1 forwards',0.5);
                animate(startbutton_gear2[2], 'movedown 0.75s 1 forwards',0.75);
                animate(startbutton_gear2[3], 'movedown 1s 1 forwards',1);
                animate(startbutton_gear2[4], 'movedown 1.25s 1 forwards',1.25);
                animate(dis[1], 'moveup 0.8s 1 forwards',0.8);
                animate(watch_buttons[1],'moveup 1.4s 1 forwards',1.4);
                animate(h[1], 'movedown 1s 1 forwards', 1);
                switching = false;
                setTimeout(() => {
                    switching = false;
                    on_screen = 0;
                }, 1000);
            }, waitanimate);
            break;
        case ('gotogear3'):
            currentslide = 3;
            if (playing_music == false && sound_watched[2] == 0){
                gear3_sound.play();
                playing_music = true;
                setTimeout(() => {
                    playing_music = false;
                    sound_watched[2] = 1;
                }, 2000);
            }
            waitanimation();
            gear3_div.scrollIntoView({ behavior: 'smooth' });
            setTimeout(() => {
                on_screen = 1;
                animate(gear3_img,'moveupS3 1s 1 forwards',1);
                animate(startbutton_gear3[0], 'movedown 1s 1 forwards',1);
                animate(startbutton_gear3[1], 'movedown 0.75s 1 forwards',0.75);
                animate(startbutton_gear3[2], 'movedown 0.5s 1 forwards',0.5);
                animate(startbutton_gear3[3], 'movedown 0.75s 1 forwards',0.75);
                animate(startbutton_gear3[4], 'movedown 1s 1 forwards',1);
                animate(dis[2], 'moveup 0.8s 1 forwards',0.8);
                animate(dis[3], 'moveup 0.8s 1 forwards',0.8);
                animate(watch_buttons[2],'moveup 1.4s 1 forwards',1.4);
                animate(h[2], 'moveright 1s 1 forwards', 1);
                switching = false;
                setTimeout(() => {
                    switching = false;
                    on_screen = 0;
                }, 1000);
            }, waitanimate);
            break;
        case ('gotogear4'):
            currentslide = 4;
            waitanimation();
            gear4_div.scrollIntoView({ behavior: 'smooth' });
            gear4_switch = false;
            setTimeout(() => {
                if (playing_music == false && sound_watched[3] == 0){
                    gear4b_sound.play();
                    playing_music = true;
                    setTimeout(() => {
                        playing_music = false;
                        sound_watched[3] = 1;
                        on_screen = 0;
                    }, 7000);
                }
                on_screen = 1;
                animate(gear4B_img,'moveright 1s 1 forwards',1);
                animate(gear4S_img,'moveleft 1s 1 forwards',1);
                animate(startbutton_gear4[0], 'movedown 1.25s 1 forwards',1.25);
                animate(startbutton_gear4[1], 'movedown 1s 1 forwards',1);
                animate(startbutton_gear4[2], 'movedown 0.75s 1 forwards',0.75);
                animate(startbutton_gear4[3], 'movedown 0.5s 1 forwards',0.5);
                animate(startbutton_gear4[4], 'movedown 0.75s 1 forwards',0.75);
                animate(startbutton_gear4[5], 'movedown 1.25s 1 forwards',1.25);
                animate(startbutton_gear4[6], 'movedown 1s 1 forwards',1);
                animate(startbutton_gear4[7], 'movedown 0.75s 1 forwards',0.75);
                animate(startbutton_gear4[8], 'movedown 0.5s 1 forwards',0.5);
                animate(startbutton_gear4[9], 'movedown 0.75s 1 forwards',0.75);
                animate(dis[4], 'moveup 0.8s 1 forwards',0.8);
                animate(dis[5], 'moveup 0.8s 1 forwards',0.8);
                animate(dis[6], 'moveup 0.8s 1 forwards',0.8);
                animate(watch_buttons[3],'moveup 1.4s 1 forwards',1.4);
                animate(watch_buttons[4],'moveup 1.4s 1 forwards',1.4);
                animate(h[3], 'moveright 1s 1 forwards', 1);
                animate(h[4], 'moveleft 1s 1 forwards', 1);
                animate(h[5], 'moveright 1s 1 forwards', 1);
                switching = false;
                setTimeout(() => {
                    gear4_switch = true;
                    switching = false;
                    on_screen = 0;
                }, 1400);
            }, waitanimate);
            break;
        case ('gotogear5'):
            currentslide = 5;
            gear5_div.scrollIntoView({ behavior: 'smooth' });
            if (watched_gear5 == false){
                gear5_show();
            }
            else{
                waitanimation();
            setTimeout(() => {
                on_screen = 1;
                animate(gear5_img,'moveleft 1s 1 forwards',1);
                animate(startbutton_gear5[0], 'movedown 1.5s 1 forwards',1.5);
                animate(startbutton_gear5[1], 'movedown 1.25s 1 forwards',1.25);
                animate(startbutton_gear5[2], 'movedown 1s 1 forwards',1);
                animate(startbutton_gear5[3], 'movedown 0.75s 1 forwards',0.75);
                animate(startbutton_gear5[4], 'movedown 0.5s 1 forwards',0.5);
                animate(dis[7], 'moveup 0.8s 1 forwards',0.8);
                animate(watch_buttons[5],'moveup 1.4s 1 forwards',1.4);
                animate(h[6], 'moveright 1s 1 forwards', 1);
                switching = false;
                setTimeout(() => {
                    switching = false;
                    on_screen = 0;
                }, 1000);
            }, waitanimate);
            };
            break;
     }
   });
 });

 const animate = (element, animations, sec) => {
    element.style.animation = animations;
    setTimeout(() => {
      element.style.animation = '';
    }, sec * 1000);
};

disapear(g4Sm);
disapear(g4Swb);
disapear(dis[6]);
disapear(h[5]);
disapear(snakeman);
for (let i = 5; i < 10; i++){disapear(startbutton_gear4[i])};

function waitanimation(){
    if (currentslide != lastslide){
        waitanimate = Math.abs(currentslide - lastslide) * 150;
        lastslide = currentslide;
    }
    return waitanimate;
}

//DONE WEHN CLICKING ON THE ARROW AT THE SNAKEMAN
turnleft.addEventListener('click', function() {
    if (gear4_switch == true){
        gear4_switch = false;
        animate(g4Sm, 'swipeSnakemanimg 1.25s 1 forwards', 1.25);
        animate(g4Swb, 'swipeSnakebutton 1.3s 1 forwards', 1.25);
        animate(dis[6], 'swipeSnakeman 1.5s 1 forwards', 1.25);
        animate(h[5], 'swipeSnakeman 1s 1 forwards', 1);
        animate(turnleft, 'turnleftClick 0.75s 1 forwards', 0.75);
        animate(startbutton_gear4[5], 'g4startB_vanish 1.25s 1 forwards', 1.25);
        animate(startbutton_gear4[6], 'g4startB_vanish 1s 1 forwards', 1);
        animate(startbutton_gear4[7], 'g4startB_vanish 0.75s 1 forwards', 0.75);
        animate(startbutton_gear4[8], 'g4startB_vanish 0.5s 1 forwards', 0.5);
        animate(startbutton_gear4[9], 'g4startB_vanish 0.75s 1 forwards', 0.75);

        setTimeout(() => {
            disapear(startbutton_gear4[8])
            setTimeout(() => {
                disapear(startbutton_gear4[7]);
                disapear(startbutton_gear4[9]);
                disapear(turnleft);
                setTimeout(() => {
                    disapear(g4sbc[1]);
                    disapear(h[5]);
                    disapear(startbutton_gear4[6]);
                    setTimeout(() => {
                        disapear(startbutton_gear4[5]);
                        disapear(g4Sm);
                        disapear(g4Swb);
                        disapear(dis[6]);
                        appear(g4Bm, 2);
                        appear(g4Bwb, 3);
                        appear(dis[4], 1);
                        appear(dis[5], 1);
                        appear(h[3], 1);
                        appear(h[4], 1);
                        appear(boundman, 1);
                        appear(g4sbc[0], 1);
                        appear(turnright, 1);
                        for (let i = 0; i < 5; i++){appear(startbutton_gear4[i], 3)};
                        animate(g4Bm,'swipeboundmanimg 1.25s 1 reverse',1.25);
                        animate(g4Bwb,'swipeboundmanbutton 1.25s 1 reverse',1.25);
                        animate(dis[4],'swipeboundman 1.5s 1 reverse',1.25);
                        animate(dis[5],'swipeboundman 1.5s 1 reverse',1.25);
                        animate(h[3],'swipeboundman 1s 1 reverse',1);
                        animate(h[4],'swipeboundman 1s 1 reverse',1);
                        animate(startbutton_gear4[0],'g4startB_vanish 1.25s 1 reverse',1.25);
                        animate(startbutton_gear4[1],'g4startB_vanish 1s 1 reverse',1);
                        animate(startbutton_gear4[2],'g4startB_vanish 0.75s 1 reverse',0.75);
                        animate(startbutton_gear4[3],'g4startB_vanish 0.5s 1 reverse',0.5);
                        animate(startbutton_gear4[4],'g4startB_vanish 0.75s 1 reverse',0.75);
                        animate(gear4_div, 'gear4_bg 1s 1 forwards reverse',1);
                        gear4_div.style.backgroundPosition = '0% 0%';
                        setTimeout(() => {
                            gear4_switch = true;
                        }, 1250);
                    }, 250);
                }, 250);
            }, 250);
        }, 500);
    }
});

// DONE WHEN CLICKING ON THE ARROW BUTTON AT THE BOUND MAN
turnright.addEventListener('click', function() {
   if (gear4_switch == true){
    gear4_switch = false;
    animate(g4Bm, 'swipeboundmanimg 1.25s 1 forwards', 1.25) ;
    animate(g4Bwb, 'swipeboundmanbutton 1.25s 1 forwards', 1.25);
    animate(dis[4], 'swipeboundman 1.5s 1 forwards', 1.25);
    animate(dis[5], 'swipeboundman 1.5s 1 forwards', 1.25);
    animate(h[3], 'swipeboundman 1s 1 forwards', 1);
    animate(h[4], 'swipeboundman 1s 1 forwards', 1) ;
    animate(turnright, 'turnrightClick 0.75s 1 forwards', 0.75);
    animate(startbutton_gear4[0], 'g4startB_vanish 1.25s 1 forwards', 1.25);
    animate(startbutton_gear4[1], 'g4startB_vanish 1s 1 forwards', 1);
    animate(startbutton_gear4[2], 'g4startB_vanish 0.75s 1 forwards', 0.75);
    animate(startbutton_gear4[3], 'g4startB_vanish 0.5s 1 forwards', 0.5);
    animate(startbutton_gear4[4], 'g4startB_vanish 0.75s 1 forwards', 0.75);

    setTimeout(() => {
        disapear(startbutton_gear4[3])
        setTimeout(() => {
            disapear(h[3]);
            disapear(h[4]);
            disapear(turnright);
            disapear(startbutton_gear4[4]);
            disapear(startbutton_gear4[2]);
            setTimeout(() => {
                disapear(g4Bm);
                disapear(g4Bwb);
                disapear(g4sbc[0]);
                disapear(startbutton_gear4[1]);
                setTimeout(() => {
                    if (playing_music == false && sound_watched[4] == 0){
                        gear4s_sound.play();
                        playing_music = true;
                        setTimeout(() => {
                            playing_music = false;
                            sound_watched[4] = 1;
                        }, 3000);
                    }
                    disapear(startbutton_gear4[0]);
                    disapear(boundman);
                    disapear(dis[4]);
                    disapear(dis[5]);
                    appear(g4Sm, 2);
                    appear(g4Swb, 3);
                    appear(dis[6], 1);
                    appear(h[5], 1);
                    appear(turnleft, 1);
                    appear(g4sbc[1], 1);
                    appear(snakeman, 1);
                    for (let i = 5; i < 10; i++){appear(startbutton_gear4[i], 3)};
                    animate(g4Sm, 'swipeSnakemanimg 1.25s 1 reverse', 1.25);
                    animate(g4Swb, 'swipeSnakebutton 1.3s 1 reverse', 1.3);
                    animate(dis[6], 'swipeSnakeman 1.5s 1 reverse', 1.5);
                    animate(h[5], 'swipeSnakeman 1s 1 reverse', 1);
                    animate(turnleft, 'turnleftClick 0.75s 1 reverse', 0.75);
                    animate(startbutton_gear4[5], 'g4startB_vanish 1.25s 1 reverse', 1.25);
                    animate(startbutton_gear4[6], 'g4startB_vanish 1s 1 reverse', 1);
                    animate(startbutton_gear4[7], 'g4startB_vanish 0.75s 1 reverse', 0.75);
                    animate(startbutton_gear4[8], 'g4startB_vanish 0.5s 1 reverse', 0.5);
                    animate(startbutton_gear4[9], 'g4startB_vanish 0.75s 1 reverse', 0.75);
                    animate(gear4_div, 'gear4_bg 1s 1 forwards',1);
                    gear4_div.style.backgroundPosition = '100% 0%';
                    setTimeout(() => {
                        gear4_switch = true;
                    }, 1500);
                }, 250);
            }, 250);
        }, 250);
    }, 500);
   }
})

function disapear(element){
    element.style.display = 'none';
};
function appear(element, type){
    switch (type){
        case 1:           //block
            element.style.display = 'block';
            break;
        case 2:           //inline
            element.style.display = 'inline';
            break;
        case 3:           //inline-block
            element.style.display = 'inline-block';
            break;
        default:
            console.log(`there is no type from the number ${type} there is only 1:block , 2:inline , 3:inline-block`);
    };
};

if (switching == false){
    setInterval(() => {
        switch (currentslide){
            case 0:
                if (switching == false){start_div.scrollIntoView({ behavior: 'smooth' });
                break;}
            case 1:
                if (switching == false){luffy_div.scrollIntoView({ behavior: 'smooth' });
                break;}
            case 2:
                if (switching == false){gear2_div.scrollIntoView({ behavior: 'smooth' });
                break;}
            case 3:
                if (switching == false){gear3_div.scrollIntoView({ behavior: 'smooth' });
                break;}
            case 4:
                if (switching == false){gear4_div.scrollIntoView({ behavior: 'smooth' });
                break;}
            case 5:
                if (switching == false){gear5_div.scrollIntoView({ behavior: 'smooth' });
                break;}
        }
    }, 500);
};


//gear 5 stuff
for (let i = 0; i < 5; i++){disapear(startbutton_gear5[i])};
disapear(gear5_img);
disapear(h[6]);
disapear(dis[7]);
disapear(watch_buttons[5]);
gear4_div.style.backgroundColor = 'black';

function gear5_show(){
    setTimeout(() => {
        gear5_music.play();
        setTimeout(() => {
            gear5_div.style.backgroundImage = 'url("gear5gf.gif")';
            gear5_div.style.backgroundRepeat = 'no-repeat';
            gear5_div.style.backgroundSize = 'cover';
            gear5_div.style.backgroundPosition = 'center';
            setTimeout(() => {
                for (let i = 0; i < 5; i++){appear(startbutton_gear5[i], 3)};
                appear(gear5_img, 2);
                appear(h[6], 1);
                appear(dis[7], 1);
                appear(watch_buttons[5], 3);
                animate(gear5_img,'moveleft 1s 1 forwards',1);
                animate(startbutton_gear5[0], 'movedown 1.5s 1 forwards',1.5);
                animate(startbutton_gear5[1], 'movedown 1.25s 1 forwards',1.25);
                animate(startbutton_gear5[2], 'movedown 1s 1 forwards',1);
                animate(startbutton_gear5[3], 'movedown 0.75s 1 forwards',0.75);
                animate(startbutton_gear5[4], 'movedown 0.5s 1 forwards',0.5);
                animate(dis[7], 'moveup 0.8s 1 forwards',0.8);
                animate(watch_buttons[5],'moveup 1.4s 1 forwards',1.4);
                animate(h[6], 'moveright 1s 1 forwards', 1);
                setTimeout(() => {
                    gear5_div.style.background = 'linear-gradient(45deg, rgba(195,246,255,1) 0%, rgba(253,255,182,1) 100%)';
                    watched_gear5 = true;
                }, 1000);
            }, 7500);
        }, 51250);
    }, 2500);
};

//mobile variables
let luffy_on = 0;
let gear2_on = 0;
let gear3_on = 0;
let gear4b_on = 0;
let gear4s_on = 0;
let gear5_on = 0;
setInterval(() => {
    console.log(`luffy_on = ${luffy_on}
    currentslide = ${currentslide}
    on_screen = ${on_screen}
    switching = ${switching}
    ${typeof currentslide}`)
}, 100);

//MOBILE STUFF HERE
/*if (window.innerWidth <= 768){
    luffy_img.style.marginRight = (window.innerWidth - luffy_img.offsetWidth) / 2 + 'px';
}
if (luffy_on == 0 && on_screen == 0) {
    setTimeout(() => {
        if (switching == false) {
            animate(luffy_img, 'moveleft_switch 1s 1 reverse', 1);
            setTimeout(() => {
                luffy_on = 1;
                disapear(luffy_img);
                appear(h[0], 1);
                appear(dis[0], 1);
                animate(h[0], 'moveright_switch 1s 1 forwards', 1);
                animate(dis[0], 'moveright_switch 1s 1 forwards', 1);
            }, 950);
        }
    }, 4500);
};
if (luffy_on == 1) {
    setTimeout(() => {
        if (switching == false) {
            console.log("worked 2");
            animate(h[0], 'moveleft_switch 1s 1 reverse', 1);
            animate(dis[0], 'moveleft_switch 1s 1 reverse', 1);
            setTimeout(() => {
                console.log("worked 3");
                luffy_on = 0;
                disapear(h[0]);
                disapear(dis[0]);
                appear(luffy_img, 2);
                animate(luffy_img, 'moveright_switch 1s 1 reforwards', 1);
            }, 950);
        }
    }, 2000);
};*/
