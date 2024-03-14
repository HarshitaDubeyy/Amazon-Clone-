const imgs = document.querySelectorAll(".header-slider ul img");
const prev_btn = document.querySelector(".control_previous");
const next_btn = document.querySelector(".control_next");

let n = 3; 

function changeSlide() {
    for(let i = 0; i< imgs.length; i++){
       imgs[i].style.display = 'none';
        }
        imgs[n].style.display = 'block';
}
changeSlide();

prev_btn.addEventListener('click', (e)=>{
    if(n > 0){
        n--;   
    } else{
        n= imgs.length-1;
    }
    changeSlide();
})
next_btn.addEventListener('click', (e)=>{
    if(n < imgs.length-1){
        n++;   
    } else{
        n= 0;
    }
    changeSlide();
})

const backtop = document.querySelector(".backtop");

backtop.addEventListener("click",()=>{
    window.scrollTo({
        top:0,
        behavior:"smooth"
    })
})