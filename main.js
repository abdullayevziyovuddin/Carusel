let btn_prev=document.querySelector('.btn_prev');
let btn_next=document.querySelector('.btn_next');
let image=document.querySelectorAll('.slider_img img');

let i=0;

btn_next.addEventListener( 'click',function(){
    image[i].classList.remove('active');
    i++

    if(i>=image.length){
        i=0;
    }
    image[i].classList.add('active');
})

btn_prev.addEventListener( 'click',function(){
    image[i].classList.remove('active');
    i--

    if(i<=0){
        i=image.length-1;
    }
    image[i].classList.add('active');
})

function sliderNext(){
    image[i].classList.remove('active');
    i++
    if(i>=image.length){
        i=0;
    }
    image[i].classList.add('active');
}
start();
function start(){
    return interval=setInterval(sliderNext,2000);
}
let slider=document.querySelector('.slider');
function stop(){
    clearInterval(interval);
}


    slider.onmouseover=function(){
        stop();
    }
    slider.onmouseout=function(){
        start();
    }

