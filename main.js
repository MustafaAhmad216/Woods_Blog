let stars = document.getElementById('stars');
let moon = document.getElementById('moon');
let mountain1 = document.getElementById('mountain1');
let mountain2 = document.getElementById('mountain2');
let mountain3 = document.getElementById('mountain3');
let river = document.getElementById('river');
let boat = document.getElementById('boat');
let tifa = document.querySelector('.tifa');

window.onscroll = function() {
    let value = scrollY;
    stars.style.left = value + 'px';
    moon.style.top = value * 3 + 'px';
    mountain1.style.top = value * 1.5 + 'px';
    mountain2.style.top = value * 1.2 + 'px';
    river.style.top = value + 'px';
    boat.style.top = value + 'px';
    boat.style.left = value * 3 + 'px';
    tifa.style.fontSize = (value - 10) + 'px';

    if(scrollY >= 67){
        tifa.style.fontSize = 65 + 'px';
        tifa.style.position = 'fixed';
        if(scrollY >= 478){ 
            tifa.style.display = 'none';
        }
        else{
            tifa.style.display = 'block';
        }
        if(scrollY >= 160){
            document .querySelector('.main').style.background = 'linear-gradient(#69abda , #10001f)';
        }
        else{
            document.querySelector('.main').style.background = 'linear-gradient(#2d001e , #10001f)';
        }
    }
}