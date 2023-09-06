// 聲明所有需要用到的物件
const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const slider = player.querySelectorAll('.player__slider');
const skip = player.querySelectorAll('[data-skip]');

// function區域
function toggleButton(){
    // if(video.paused) {
    //     video.play();
    // }else {
    //     video.pause();
    // }
    const method = video.paused ? 'play' : 'pause';
    video[method]();
}

function changeIcon(){
    const icon = this.paused ? '►' : '▌ ▌'
    console.log(icon);
    toggle.textContent = icon;
}

function sliderIcon(){
    video[this.name] = this.value;
}

function skipChange(){
    console.log(this.dataset.skip);
    video.currentTime += parseInt(this.dataset.skip);
}

function scrub(e){

}


// 監聽事件
video.addEventListener('click', toggleButton);
video.addEventListener('play', changeIcon);
video.addEventListener('pause', changeIcon);

toggle.addEventListener('click', toggleButton);
slider.forEach(range => range.addEventListener('change', sliderIcon))
slider.forEach(range => range.addEventListener('mousemove', sliderIcon))
skip.forEach(range => range.addEventListener('click', skipChange));

let mousedown = false;
progress.addEventListener('click', scrub);
progress.addEventListener('mousemove', (e) => mousedown && scrub(e));
progress.addEventListener('mouseup', () => mousedown = false);
progress.addEventListener('mousedown', () => mousedown = true);
