const change = document.querySelector('#letter');

function changedisplay(){
    change.style.display = 'none';
    document.querySelector('#christmas').style.display = 'block';
    var audio = new Audio('jingle-bell-remix-crazy-frog-x-dj-peace-n-nguyen-anh-tuan.mp3');
    audio.play();
}

let container = document.getElementById('container'); //gọi tên id
let count = 200;
for(var i = 0 ; i<200; i++){
    let leftSnow = Math.floor(Math.random() * container.clientWidth);
    let topSnow = Math.floor(Math.random() * container.clientHeight);
    let widthSnow = Math.floor(Math.random() * 50);
    let timeSnow = Math.floor((Math.random() * 5) +5);
    let blurSnow = Math.floor(Math.random() * 10);

    console.log(leftSnow);
    let div = document.createElement('div');
    div.classList.add('snow');
    div.style.left = leftSnow + 'px';
    div.style.top = topSnow + 'px';
    div.style.width = widthSnow + 'px';
    div.style.height = widthSnow + 'px';
    div.style.animationDuration = timeSnow + 's';
    div.style.filter = 'blur(' + blurSnow + 'px)';

    container.appendChild(div);
}

