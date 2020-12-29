score=0;
CROSS=true;
document.onkeydown = function(e){
    console.log("key code is: ", e.keyCode)
    if(e.keyCode==38){
        dino=document.querySelector('.dino');
        dino.classList.add('animatedino');
        setTimeout(() => {
            dino.classList.remove('animatedino')
        }, 500);
    }
    if(e.keyCode==39){
        dino=document.querySelector('.dino');
        dinoX=parseInt(window.getComputedStyle(dino,null).getPropertyValue('left'));
        dino.style.left = (dinoX + 112) + "px";
    }

    if(e.keyCode==37){
       dino=document.querySelector('.dino');
       dinoX=parseInt(window.getComputedStyle(dino,null).getPropertyValue('left'));
       dino.style.left = (dinoX - 112)  + "px";
    }   
}
setInterval(() => {
    dino=document.querySelector('.dino');
    gameover=document.querySelector('.gameover');
    dragon=document.querySelector('.dragon');

    dx=parseInt(window.getComputedStyle(dino,null).getPropertyValue('left'));
    dy=parseInt(window.getComputedStyle(dino,null).getPropertyValue('top'));
    ox=parseInt(window.getComputedStyle(dragon,null).getPropertyValue('left'));
    oy=parseInt(window.getComputedStyle(dragon,null).getPropertyValue('top'));

    offsetx=Math.abs(dx-ox);
    offsety=Math.abs(dy-oy);
   // console.log(offsetx,offsety);

    if(offsetx< 113 && offsety< 100){
        gameover.style.visibility='visible';
        dragon.classList.remove('dragonAni');
    }
    else if(offsetx < 145 && score){
        score+=1;
        update(score);
        cross=false;
        setTimeout(() => {
            cross=true;

        }, 100);
    }
}, 50);
function update(score){
    scorecont.innerHTML="YOUR SCORE: " +score
  

}