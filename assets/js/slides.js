var mainImg = document.querySelector("img");
var images = ["assets/images/Groupie1.png","assets/images/Groupie2.png"];
var num = 0;

function next(){
    num++;
    if(num>=images.length) {
        num=0;
        mainImg.src = images[num];
    } mainImg.src = images[num]
}

function back(){
    num--;
    if(num<0) {
        num=images.length - 1;
        mainImg.src = images[num];
    } mainImg.src = images[num]
}
