console.log("welcome");
let songIndex = 0;
let audioEl = new Audio("songs/0.mp3");
let currentPlay = document.getElementById('current-play');
let progressbar = document.getElementById('progress-bar');
let gif = document.getElementById('gif');
let masterPlay = document.getElementById('master-play');
let songItem = Array.from(document.getElementsByClassName('song-item'));
let songs = [
    { songName: "Allah Hafiz (Bhool Bholiyaan) - K.K", filePath: "songs/Allah Hafiz (Bhool Bholiyaan) - K.K.mp3", coverPath: "cover/1.jpg" },
    { songName: "Dheere Dheere Tumse Pyar Hogaya", filePath: "songs/Dheere Dheere Tumse Pyar Hogaya.mp3", coverPath: "cover/2.jpg" },
    { songName: "Halamithi Habibo Hindi - Beast", filePath: "songs/Halamithi Habibo Hindi - Beast.mp3", coverPath: "cover/3.jpg" },
    { songName: "Har Har Shambhu Shiv Mahadeva", filePath: "songs/Har Har Shambhu Shiv Mahadeva.mp3", coverPath: "cover/4.jpg" },
    { songName: "Khuda Jaane (Bachna Ae Haseeno) - K.K", filePath: "songs/Khuda Jaane (Bachna Ae Haseeno) - K.K.mp3", coverPath: "cover/5.webp" },
    { songName: "Life (2017) - Akhil", filePath: "songs/Life.mp3", coverPath: "cover/6.webp" },
    { songName: "Mat Aazma Re (Murder ) - K.K", filePath: "songs/Mat Aazma Re (Murder ) - K.K.mp3", coverPath: "cover/7.webp" },
    { songName: "Mere Brother Ki Dulhan (MBKD) - K.K", filePath: "songs/Mere Brother Ki Dulhan (MBKD) - K.K.mp3", coverPath: "cover/8.jpg" },
    { songName: "Party On My Mind (Race ) - K.K", filePath: "songs/Party On My Mind (Race ) - K.K.mp3", coverPath: "cover/9.jpg" },
    { songName: "The Punjaban Song - Jugjugg Jeeyo", filePath: "songs/The Punjaban Song - Jugjugg Jeeyo.mp3", coverPath: "cover/10.webp" },
    { songName: "Touch Me (Dhoom ) - K.K", filePath: "songs/Touch Me (Dhoom ) - K.K.mp3", coverPath: "cover/11.jpg" },
]

songItem.forEach((element, i) => {
    // console.log(element, i);
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("song-name")[0].innerText = songs[i].songName;
    // element.getElementsByClassName("time-stamp")[0].innerText = songs[i].duration;
})

// audioEl.play();
currentPlay.addEventListener('click', () => {
    if (audioEl.paused || audioEl.currentTime <= 0) {
        audioEl.play();
        currentPlay.classList.remove('fa-circle-play');
        currentPlay.classList.add('fa-circle-pause');
        gif.style.opacity = 1;
    }
    else {
        audioEl.pause();
        currentPlay.classList.remove('fa-circle-pause');
        currentPlay.classList.add('fa-circle-play');
        gif.style.opacity = 0;
    }
})
audioEl.addEventListener('timeupdate', () => {
    progress = parseInt((audioEl.currentTime / audioEl.duration) * 100);
    // console.log(progress);
    progressbar.value = progress;
})

progressbar.addEventListener('change', () => {
    audioEl.currentTime = progressbar.value * audioEl.duration / 100;
})

function makeAllPlays() {
    Array.from(document.getElementsByClassName("songListPlay")).forEach((element) => {
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');
    })
}

Array.from(document.getElementsByClassName("songListPlay")).forEach((element) => {
    element.addEventListener('click', (e) => {
        // console.log(e.target);
        makeAllPlays();
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
        songIndex = parseInt(e.target.id);
        audioEl.src = `songs/${songIndex}.mp3`;
        audioEl.currentTime = 0;
        audioEl.play();
        currentPlay.classList.remove('fa-circle-play');
        currentPlay.classList.add('fa-circle-pause');
        masterPlay.innerText = songs[songIndex].songName;
        gif.style.opacity = 1;

        // console.log(songs[songIndex].songName);
    });
});

document.getElementById('next').addEventListener('click', (element) => {
    if (songIndex >= 10) {
        songIndex = 0;
    }
    else {
        songIndex += 1;
    }
    audioEl.src = `songs/${songIndex}.mp3`;
    audioEl.currentTime = 0;
    audioEl.play();
    currentPlay.classList.remove('fa-circle-play');
    currentPlay.classList.add('fa-circle-pause');
    masterPlay.innerText = songs[songIndex].songName;
})

document.getElementById('previous').addEventListener('click', (element) => {
    if (songIndex <= 0) {
        songIndex = 0;
    }
    else {
        songIndex -= 1;
    }
    audioEl.src = `songs/${songIndex}.mp3`;
    audioEl.currentTime = 0;
    audioEl.play();
    currentPlay.classList.remove('fa-circle-play');
    currentPlay.classList.add('fa-circle-pause');
    masterPlay.innerText = songs[songIndex].songName;
    
})